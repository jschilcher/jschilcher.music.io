import React, {Component} from "react";
import axios from "axios";

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
            <div></div>
        );
    }
}    

export default App;