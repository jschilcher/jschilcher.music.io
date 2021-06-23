import React from "react";

//props.search.filter(Search)
//function checkMusic(props)
//userInput === props.search

// function Filter(props) {return(props.search);}




function Search(props) {
  return(
    <div>
      <form action="/action_page.php">
        <input type="text" placeholder="Search..." name="search"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Filter(props){
  return(
    <div>
      {props.search}
    </div>
  )
}


export default Search;
