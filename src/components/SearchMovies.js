// imports
import { Form } from "react-router-dom";


// Function
export default function SearchMovies() {
  return (
    <Form className="searchBlock">
        <input type="text" id="searchInput" placeholder="Search Movie" />
        <button id="searchBtn">Search</button>
    </Form>
  )
}
