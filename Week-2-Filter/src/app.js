import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Input} from "antd";
import PriceSelector from "./Components/PriceSelector.js";
import SideViewPanel from "./Components/SideViewPanel.js";
import ZoneCheckboxGruopFilter from "./Components/ZoneCheckboxGroup.js";
import TagListView from "./Components/TagListView.js";
import ResultItem from "./Components/ResultItem.js";
import {Pagination} from "antd";
const Search = Input.Search;
const priceSelectorOption = ["All", "Free"];

const API = {
    url:
        "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=300",
};

const AllResult = [];
const tagList = ["tag name 01", "tag name 02"];
const zoneList = new Set();


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            current: 1,
            selectedZones: [],
            isFree: false,
        };
        this.fetchData = this.fetchData.bind(this);
        this.handleChangeZone = this.handleChangeZone.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    handleChangePage(page){
        this.setState({current: page});
    }
    handleChangeZone(zone){
        this.setState({
            selectedZones: zone,
            current: 1,
        }) 
    }
    fetchData() {
        fetch(API.url)
            .then(response => response.json())
            .then(data => data.result.records)
            .then(records =>
                records.map(result => {
                    zoneList.add(result.Zone)
                    AllResult.push({
                        url: result.Picture1,
                        title: result.Name,
                        description: result.Description,
                        zone: result.Zone,
                        tagList: ["example 1", "example2"],
                        OpenTime: result.Opentime,
                        ticketInfo: result.Ticketinfo,
                        isFree: !!result.Ticketinfo.length,
                    });
                }),
            )
            .then(records => {
                this.setState({
                    isLoaded: true,
                });
            })
            .catch(error => console.log("failed to parse: ", error));
    }
    render() {

        if (this.state.isLoaded) {
            console.log("all result", AllResult);
        }

        const filterResults = () => {
            let results = AllResult;
            if(this.state.isFree){
                results = AllResult.filter((result, index)=> result.ticketInfo !== "");
            }
            return results.filter((result, i) => this.state.selectedZones.indexOf(result.zone)!==-1 );
        };

        let total = filterResults().length;

        const currentPageResult = () => {
            let results = filterResults();
            if(results.length === 0 ) return [];
            return results.filter( (result, index) => index>= this.state.current && index <= this.state.current + 10 );
        }

        const results = list =>
            list.map((data, i) => (
                <ResultItem key={"result.item" + i} data={data} />
        ));

        return (
            <div>
                <div>
                    <h1> logo name </h1>
                    <Search placeholder="Go where?" />
                </div>
                <div>
                    <SideViewPanel title={"Price"}>
                        <PriceSelector
                            options={priceSelectorOption}
                            defaultValue={priceSelectorOption[0]}
                        />
                    </SideViewPanel>
                    <SideViewPanel title={"Zones"}>
                        <ZoneCheckboxGruopFilter onChange={this.handleChangeZone} zoneList={[...zoneList]} />
                    </SideViewPanel>
                </div>
                <div>
                    <h3>Expolre {total} destinations</h3>
                    <TagListView tagList={tagList} closable={true} />
                </div>
                <div>{results(currentPageResult())}</div>
                <Pagination defaultCurrent={this.current} onChange={this.handleChangePage} total={total} />
            </div>
        );
    }
}

export default App;
