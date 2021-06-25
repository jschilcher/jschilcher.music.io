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
      {props.data.map(song=>{
        return(
          <tr>
            <td>{song.title}</td>
            <td>{song.album}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>{song.releaseDate}</td>
          </tr>
        )
      })}
  </tbody>
</table>
    );
}

export default MusicTable;