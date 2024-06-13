// Imports

// Function
function App() {
  return (
    <div class="container">
      <header id="header">
        <div class="searchBlock">
          <input type="text" id="searchInput" placeholder="Search Movie" />
          <button id="searchBtn" onclick="searchMovies()">Search</button>
        </div>
      </header>
      <div id="movieResults"></div>
      <div id="movieImgBlock"></div>
    </div>
  );
}

export default App;
