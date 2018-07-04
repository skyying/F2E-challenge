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
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        let zone = new Set();
        fetch(API.url)
            .then(response => response.json())
            .then(data => data.result.records)
            .then(records =>
                records.map(result => {
                    AllResult.push({
                        name: result.Name,
                        ticketInfo: result.Ticketinfo,
                        pictureURL: result.Picture1,
                        Address: result.Add,
                        OpenTime: result.Opentime,
                        tel: result.Tel,
                        zone: result.Zone,
                        id: result.Id,
                        description: result.Description,
                        changeTime: result.Changetime,
                        website: result.Website,
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
            console.log(AllResult);
        }
        const currentPageResults = Array.from({length: 10}).fill({
            title: "title",
            description: "description",
            host: "host",
            tagList: tagList,
            city: "city",
            date: "date",
        });

        const results = list =>
            list.map((data, i) => (
                <ResultItem key={"result.item" + i} data={data} />
            ));

        console.log(results(currentPageResults));
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
                        <ZoneCheckboxGruopFilter />
                    </SideViewPanel>
                </div>
                <div>
                    <h3>Expolre {10} destinations</h3>
                    <TagListView tagList={tagList} closable={true} />
                </div>
                <div>{results(currentPageResults)}</div>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        );
    }
}

export default App;
