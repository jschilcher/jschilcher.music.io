import React, {Component} from "react";
import axios from "axios";
import TitleBar from "./TitleBar/titleBar";
import MusicTable from "./MusicTable/musicTable";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicData: []
        }

    }

    componentDidMount(){
        this.getMusicData();
    }

    async getMusicData(){
        let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
        this.setState({
            musicData: response.data
        });
    }

    render(){
        return(
            <div>
                <TitleBar/>
                {this.state.musicData ? (<MusicTable data={this.state.musicData} />) : (<h1>Loading....</h1>)}
            </div>
        );
    }
}    

export default App;