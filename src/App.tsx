import React from 'react';
import Row from 'components/Row/Row';
import Banner from 'components/Banner/Banner';
import Nav from 'components/Nav/Nav';
import { requests } from 'api';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        sourceUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Top Rated" sourceUrl={requests.fetchTopRated} />
      <Row title="War Movies" sourceUrl={requests.fetchWarMovies} />
      <Row title="Comedy Movies" sourceUrl={requests.fetchComedyMovies} />
      <Row title="Western Movies" sourceUrl={requests.fetchWesternMovies} />
      <Row title="Romanve Movies" sourceUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" sourceUrl={requests.fetchDocumentMovies} />
    </div>
  );
}

export default App;
