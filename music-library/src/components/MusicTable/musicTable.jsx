import React from "react";

function MusicTable(props){
    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Album</th>
      <th scope="col">Artist</th>
      <th scope="col">Genre</th>
      <th scope="col">Release Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{props.data[0].title}</th>
      <td>{props.data[0].album}</td>
      <td>{props.data[0].artist}</td>
      <td>{props.data[0].genre}</td>
      <td>{props.data[0].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[1].title}</th>
      <td>{props.data[1].album}</td>
      <td>{props.data[1].artist}</td>
      <td>{props.data[1].genre}</td>
      <td>{props.data[1].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[2].title}</th>
      <td>{props.data[2].album}</td>
      <td>{props.data[2].artist}</td>
      <td>{props.data[2].genre}</td>
      <td>{props.data[2].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[3].title}</th>
      <td>{props.data[3].album}</td>
      <td>{props.data[3].artist}</td>
      <td>{props.data[3].genre}</td>
      <td>{props.data[3].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[4].title}</th>
      <td>{props.data[4].album}</td>
      <td>{props.data[4].artist}</td>
      <td>{props.data[4].genre}</td>
      <td>{props.data[4].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[5].title}</th>
      <td>{props.data[5].album}</td>
      <td>{props.data[5].artist}</td>
      <td>{props.data[5].genre}</td>
      <td>{props.data[5].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[6].title}</th>
      <td>{props.data[6].album}</td>
      <td>{props.data[6].artist}</td>
      <td>{props.data[6].genre}</td>
      <td>{props.data[6].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[7].title}</th>
      <td>{props.data[7].album}</td>
      <td>{props.data[7].artist}</td>
      <td>{props.data[7].genre}</td>
      <td>{props.data[7].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[8].title}</th>
      <td>{props.data[8].album}</td>
      <td>{props.data[8].artist}</td>
      <td>{props.data[8].genre}</td>
      <td>{props.data[8].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[9].title}</th>
      <td>{props.data[9].album}</td>
      <td>{props.data[9].artist}</td>
      <td>{props.data[9].genre}</td>
      <td>{props.data[9].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[10].title}</th>
      <td>{props.data[10].album}</td>
      <td>{props.data[10].artist}</td>
      <td>{props.data[10].genre}</td>
      <td>{props.data[10].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[11].title}</th>
      <td>{props.data[11].album}</td>
      <td>{props.data[11].artist}</td>
      <td>{props.data[11].genre}</td>
      <td>{props.data[11].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[12].title}</th>
      <td>{props.data[12].album}</td>
      <td>{props.data[12].artist}</td>
      <td>{props.data[12].genre}</td>
      <td>{props.data[12].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[13].title}</th>
      <td>{props.data[13].album}</td>
      <td>{props.data[13].artist}</td>
      <td>{props.data[13].genre}</td>
      <td>{props.data[13].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[14].title}</th>
      <td>{props.data[14].album}</td>
      <td>{props.data[14].artist}</td>
      <td>{props.data[14].genre}</td>
      <td>{props.data[14].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[15].title}</th>
      <td>{props.data[15].album}</td>
      <td>{props.data[15].artist}</td>
      <td>{props.data[15].genre}</td>
      <td>{props.data[15].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[16].title}</th>
      <td>{props.data[16].album}</td>
      <td>{props.data[16].artist}</td>
      <td>{props.data[16].genre}</td>
      <td>{props.data[16].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[17].title}</th>
      <td>{props.data[17].album}</td>
      <td>{props.data[17].artist}</td>
      <td>{props.data[17].genre}</td>
      <td>{props.data[17].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[18].title}</th>
      <td>{props.data[18].album}</td>
      <td>{props.data[18].artist}</td>
      <td>{props.data[18].genre}</td>
      <td>{props.data[18].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[19].title}</th>
      <td>{props.data[19].album}</td>
      <td>{props.data[19].artist}</td>
      <td>{props.data[19].genre}</td>
      <td>{props.data[19].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[20].title}</th>
      <td>{props.data[20].album}</td>
      <td>{props.data[20].artist}</td>
      <td>{props.data[20].genre}</td>
      <td>{props.data[20].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[21].title}</th>
      <td>{props.data[21].album}</td>
      <td>{props.data[21].artist}</td>
      <td>{props.data[21].genre}</td>
      <td>{props.data[21].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[22].title}</th>
      <td>{props.data[22].album}</td>
      <td>{props.data[22].artist}</td>
      <td>{props.data[22].genre}</td>
      <td>{props.data[22].releaseDate}</td>
    </tr>
    <tr>
      <th scope="row">{props.data[23].title}</th>
      <td>{props.data[23].album}</td>
      <td>{props.data[23].artist}</td>
      <td>{props.data[23].genre}</td>
      <td>{props.data[23].releaseDate}</td>
    </tr>
  </tbody>
</table>
    );
}

export default MusicTable;