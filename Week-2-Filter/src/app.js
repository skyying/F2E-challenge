import React, {Component} from "react";
import {Input, Pagination} from "antd";
import PriceSelector from "./Components/PriceSelector.js";
import SideViewPanel from "./Components/SideViewPanel.js";
import ZoneCheckboxGruopFilter from "./Components/ZoneCheckboxGroup.js";
import TagListView from "./Components/TagListView.js";
import ResultItem from "./Components/ResultItem.js";
import ZoneList from "./Components/ZoneList.js";
import {SearchInput} from "./Components/SearchInput.js";

const priceSelectorOption = ["All", "Free"];
const API = {
    url:
        "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=300",
};
const AllResult = [];

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isLoaded: false,
            current: 1, // current page
            selectedZones: ZoneList,
            text: "",
            isFree: false,
        };
        this.fetchData = this.fetchData.bind( this );
        this.handleChangeZone = this.handleChangeZone.bind( this );
        this.handleChangePage = this.handleChangePage.bind( this );
        this.handlePriceChange = this.handlePriceChange.bind( this );
        this.handleSearchText = this.handleSearchText.bind( this );
        this.clearSearchText = this.clearSearchText.bind( this );
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
    handlePriceChange( isFree ) {
        this.setState( {
            isFree: isFree === "Free",
        } );
    }
    clearSearchText() {
        this.setState( {
            text: "",
        } );
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
                            : "無相關資訊",
                        isFree: !!result.Ticketinfo.length,
                    } );
                } ),
            )
            .then( records => {
                this.setState( {isLoaded: true} );
            } )
            .catch( error => console.log( "Failed to parse: ", error ) );
    }
    render() {
        const filterResults = () => {
            let {selectedZones, text, isFree} = this.state;

            let results = AllResult;

            if ( isFree ) {
                results = AllResult.filter( result => result.isFree );
            }
            results = results.filter(
                result => selectedZones.indexOf( result.zone ) !== -1,
            );
            const isMatch = obj => {
                let keys = Object.keys( obj );
                let i = 0,
                    len = keys.length;
                for ( ; i < len; i++ ) {
                    let key = keys[i];
                    if ( typeof obj[key] === "string" ) {
                        let item = obj[key];
                        if ( item.search( text ) !== -1 ) {
                            return true;
                        }
                    }
                }
                return false;
            };
            return (
                ( text && results.filter( result => isMatch( result ) ) ) || results
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
                            <SearchInput
                                text={this.state.text}
                                placeholder="Go where?"
                                onSearchTermChange={this.handleSearchText}
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
                                onCloseTag={this.clearSearchText}
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
