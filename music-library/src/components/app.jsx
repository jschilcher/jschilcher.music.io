import React, { Component } from "react";
import axios from "axios";
import TitleBar from "./TitleBar/titleBar";
import MusicTable from "./MusicTable/musicTable";
import Filter from "./Filter/filter";
import AddSong from "./AddSong/addSong";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicData: [],
    };
  }

  componentDidMount() {
    this.getMusicData();
  }

  async getMusicData() {
    let response = await axios.get(
      "http://localhost:5000/api/songs"
    );
    this.setState({
      musicData: response.data,
    });
  }

  addNewSong(song){
    // let musicData = [this.state.musicData];
    // musicData.push({value: song});
    // this.setState({musicData});
    this.state.musicData.push(song);
    this.setState({
      songNumber: this.state.musicData.length - 1
    })
  }

  render() {
    if (this.state.musicData[0] === undefined) {
      return <div></div>;
    } else {
      return (
        <div>
          <TitleBar/>
          <Filter search={this.state.musicData}/>
          <MusicTable data={this.state.musicData}/>
                      {/* {this.state.musicData ? (<MusicTable data={this.state.musicData} />) : (<h1>Loading....</h1>)} */}
          <AddSong addNewSong={this.addNewSong.bind(this)}/>
        </div>
      );
    }
  }
}

export default App;
