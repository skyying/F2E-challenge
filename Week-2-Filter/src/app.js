import React, {Component} from "react";
import {Input} from "antd";
import PriceSelector from "./Components/PriceSelector.js";
import SideViewPanel from "./Components/SideViewPanel.js";
import ZoneCheckboxGruopFilter from "./Components/ZoneCheckboxGroup.js";
import TagListView from "./Components/TagListView.js";
import ResultItem from "./Components/ResultItem.js";
import {Pagination} from "antd";
import ZoneList from "./Components/ZoneList.js";
const Search = Input.Search;

const priceSelectorOption = ["All", "Free"];

const API = {
    url:
        "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=300",
};

const AllResult = [];
const freeTag = ["免費參觀"];
class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isLoaded: false,
            current: 1,
            selectedZones: ZoneList,
            text: "",
            isFree: false,
        };
        this.fetchData = this.fetchData.bind( this );
        this.handleChangeZone = this.handleChangeZone.bind( this );
        this.handleChangePage = this.handleChangePage.bind( this );
        this.handlePriceChange = this.handlePriceChange.bind( this );
        this.handleSearchText = this.handleSearchText.bind( this );
        this.handleSearchInputKeyup = this.handleSearchInputKeyup.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind( this );
    }
    componentDidMount() {
        this.fetchData();
    }
    handleChangePage( page ) {
        this.setState( {current: page} );
    }
    handleChangeZone( zone ) {
        this.setState( {
            selectedZones: zone,
            current: 1,
        } );
    }
    handleSearchText( text ) {
        this.setState( {
            text: text,
        } );
    }
    handleSearchInputKeyup( e ) {
        console.log(e.target); 
        console.log(e.target.value); 
    }
    handlePriceChange( isFree ) {
        this.setState( {
            isFree: isFree === "Free",
        } );
    }
    // handleKeyPress( e ) {
    //     console.log(e);
    //     if ( e.key !== "Enter" ) {
    //         this.setState( {
    //             text: this.state.text + e.key,
    //         });
    //     }
    // }
    handleTextChange(e){
        console.log(e);
    }
    fetchData() {
        fetch( API.url )
            .then( response => response.json() )
            .then( data => data.result.records )
            .then( records =>
                records.map( result => {
                    AllResult.push( {
                        url: result.Picture1,
                        title: result.Name,
                        description: result.Description,
                        zone: result.Zone,
                        openTime: result.Opentime,
                        ticketInfo: result.Ticketinfo
                            ? result.Ticketinfo
                            : "免費或收費是個問題",
                    } );
                } ),
            )
            .then( records => {
                this.setState( {isLoaded: true} );
            } )
            .catch( error => console.log( "failed to parse: ", error ) );
    }
    render() {
        if ( this.state.isLoaded ) {
            console.log( "loaded" );
        }
        const filterResults = () => {
            let results = AllResult;
            if ( this.state.isFree ) {
                results = AllResult.filter( result => result.ticketInfo !== "" );
            }
            results = results.filter(
                result => this.state.selectedZones.indexOf( result.zone ) !== -1,
            );
            const isMatch = obj => {
                let keys = Object.keys( obj );
                let i = 0,
                    len = keys.length;
                for ( ; i < len; i++ ) {
                    let key = keys[i];
                    if ( key !== "url" ) {
                        let item = obj[key];
                        if ( item.search( this.state.text ) !== -1 ) {
                            return true;
                        }
                    }
                }
                return false;
            };
            return (
                ( this.state.text &&
                    results.filter( result => isMatch( result ) ) ) ||
                results
            );
        };
        let total = filterResults().length;
        const currentPageResult = () => {
            let results = filterResults();
            return (
                ( results.length &&
                    results.filter(
                        ( result, index ) =>
                            index >= ( this.state.current - 1 ) * 10 &&
                            index < this.state.current * 10 - 1,
                    ) ) ||
                []
            );
        };
        const results = list =>
            list.map( ( data, i ) => (
                <ResultItem key={"result.item" + i} data={data} />
            ) );
        return (
            <div className="main">
                <header className="header">
                    <div className="header-content">
                        <h1> Find Somewhere to Go </h1>
                        <div className="header-search">
                            <Search
                                placeholder="Go where?"
                                onSearch={this.handleSearchText}
                                enterButton
                                disabled={!this.state.isLoaded}
                            />
                        </div>
                    </div>
                </header>
                <div className="main-content">
                    <div className="sidebar">
                        <SideViewPanel title={"Price"}>
                            <PriceSelector
                                onChange={this.handlePriceChange}
                                options={priceSelectorOption}
                                defaultValue={priceSelectorOption[0]}
                            />
                        </SideViewPanel>
                        <SideViewPanel title={"Zones"}>
                            <ZoneCheckboxGruopFilter
                                onChange={this.handleChangeZone}
                            />
                        </SideViewPanel>
                    </div>
                    <div className="results">
                        <div className="result-title">
                            <h3
                                className={
                                    this.state.isLoaded ? "" : "loading"
                                }>
                                {this.state.isLoaded
                                    ? `Expolre ${total} destinations`
                                    : "Loading"}
                            </h3>
                            <TagListView
                                tagList={this.state.text && [this.state.text]}
                                closable={true}
                            />
                        </div>
                        <div className="resultItem-panel">
                            {this.state.isLoaded
                                ? results( currentPageResult() )
                                : null}
                        </div>
                        {this.state.isLoaded ? (
                            <Pagination
                                defaultCurrent={this.current}
                                onChange={this.handleChangePage}
                                total={total}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
