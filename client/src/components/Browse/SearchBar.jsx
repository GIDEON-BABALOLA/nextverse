

// let availableKeywords = [
//   "HTML",
//   "CSS",
//   "Easy Tutorials",
//   "Web Design Tutorial",
//   "JavaScript",
//   "Where to learn coding online",
//   "where to learn web design",
//   "How to create a website"
// ]

// const resultsBox  = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box")
// const button = document.querySelector(".botman")
// //when you start typing in this input box, this function will be executed
// inputBox.onkeyup = () => {
//   let result = [];
//   let input = inputBox.value;
//    if(input.length){
//       button.innerHTML = "<i class='fa-solid fa-xmark'></i>"
//       result = availableKeywords.filter((keyword) => {
//   return  keyword.toLowerCase().includes(input.toLocaleLowerCase());
//       })
//    }else{
//           button.innerHTML =  "<i class='fa-solid fa-magnifying-glass'></i>"

    
//    }
//    displayResult(result);
//    if(!result.length){
//       resultsBox.innerHTML = ""
//    }
// }
// const displayResult = (result) => {
//   const content = result.map((list) => {
//       return "<li onclick = selectInput(this)>"  + list + "</li>";
//   });
//    resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>"
// }

// const selectInput = (list) => {
//   inputBox.value = list.innerHTML
//   resultsBox.innerHTML = "";
// }

import "../../styles/components/Browse/searchbar.css"
import {FaSearch, FaTimes} from "react-icons/fa"
import { useState, useEffect, useRef } from "react"
import { FaMicrophone } from "react-icons/fa";
const SearchBar = () => {
  let availableKeywords = [
    "HTML",
    "CSS",
    "Easy Tutorials",
    "Web Design Tutorial",
    "JavaScript",
    "Where to learn coding online",
    "where to learn web design",
    "How to create a website"
  ]
  const resultBox = useRef()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const startSearch = (e) => {
    setSearchQuery(e.target.value)
    if (e.target.value.length) {
      const filteredResults = availableKeywords.filter((keyword) =>
        keyword.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResult(filteredResults);
    }else{
      setSearchResult([]);
      resultBox.current.innerHtml = ""
    }
  }
  const clearInput = () => {
    setSearchQuery("")
     setSearchResult([]);
      resultBox.current.innerHtml = ""
  }
  const chooseOption = (e) => {
    setSearchQuery(e.target.innerText)
      setSearchResult([]);
      resultBox.current.innerHtml = ""
  }
  return (
    <>
      <div className="litenote-browse-search-box">
<div className="litenote-browse-search-row">
<button className="litenote-browse-search-button">   <FaSearch className="fa-magnifying-glass" size={20}/>
</button>
<input 
value={searchQuery}
className="litenote-browse-search-input"
type="text"
id="input-box"
placeholder="Search Your Stories"
autoComplete="off"
onChange={startSearch}
/>
<button className="litenote-browse-search-button">
  { searchQuery.length !== 0 ?  <FaTimes className="fa-magnifying-glass" 
   size={20} onClick={clearInput}/> :   
   <span className="litenote-browse-microphone">
   <FaMicrophone />
   </span>}
</button>

</div>
<div className="litenote-browse-search-result-box" ref={resultBox}>
{  searchResult.length !== 0 && <ul>
{
  searchResult.map((search) => (
    <li key={search} onClick={chooseOption} className="browse-list-option">
<section>
{search}<div style={{color : "#8f8f8f"}}>
      by gideon babalola
    </div>
</section>
 <section style={{color : "#8f8f8f", fontSize : '10px'}}>
    4 minutes read
    </section>

    
    </li>
  )) 


}
</ul>
}
</div>
    </div>
    </>
  )
}

export default SearchBar