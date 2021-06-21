import React from "react";

//search.filter

function Filter(props) {
  return (
    <select class="form-select" aria-label="Default select example">
      <option selected>Would you like to search by</option>
      <option value="1">Title</option>
      <option value="2">Album</option>
      <option value="3">Artist</option>
      <option value="4">Genre</option>
      <option value="5">Release Date</option>
    </select>
  );
}

export default Filter;
