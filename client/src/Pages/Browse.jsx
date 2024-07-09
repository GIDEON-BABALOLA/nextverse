import "../styles/components/Browse/browse.css"
import SearchBar from "../components/Browse/SearchBar"
import SearchPagination from "../components/Browse/SearchPagination"
import SearchFilter from "../components/Browse/SearchFilter"
import SearchResult from "../components/Browse/SearchResult"
const BrowsePage = () => {
  return (
    <section className="litenote-browse-stories">
    <div className="litenote-browse-container">
      <h2>Browse Stories</h2>
      <SearchFilter />
      <SearchBar  />
      
 
      
   
      <div className="litenote-browse-story-grid"  >
  <SearchResult/>
      </div>
   <SearchPagination />
    </div>
  </section>
  )
}

export default BrowsePage