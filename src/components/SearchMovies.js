// imports
import { Form } from "react-router-dom";


// Function
export default function SearchMovies() {
  return (
    <Form class="searchBlock">
        <input type="text" id="searchInput" placeholder="Search Movie" />
        <button id="searchBtn" onclick="searchMovies()">Search</button>
    </Form>
  )
}
