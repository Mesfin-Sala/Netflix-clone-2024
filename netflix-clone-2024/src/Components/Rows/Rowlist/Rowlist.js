import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/request";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title=" ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies " fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />
      <Row title="War " fetchUrl={requests.fetchWar} />
      <Row title="TvShow " fetchUrl={requests.fetchTvShow} />
      <Row title=" TopRatedMovies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title=" RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title=" RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Mystery " fetchUrl={requests.fetchMystery} />
      <Row title="Music " fetchUrl={requests.fetchMusic} />
    </>
  );
};

export default RowList;
