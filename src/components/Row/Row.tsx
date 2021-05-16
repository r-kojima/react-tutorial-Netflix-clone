import React, { FC, useState, useEffect } from 'react';
import axios, { base_url } from 'api';
import { API_KEY } from 'API_KEY';
import Youtube from 'react-youtube';

import './Row.scss';
type RowProps = {
  title: string;
  sourceUrl: string;
  isLarge?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

const RowComponent: FC<RowProps> = ({ title, sourceUrl, isLarge }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(sourceUrl);
      console.log('source', sourceUrl);
      setMovies(request.data.results as Movie[]);
      return request;
    }
    fetchData();
  }, [sourceUrl]);

  const options: Options = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      const trailerUrl = await axios.get(
        `movie/${movie.id}/videos?api_key=${API_KEY}`,
      );
      setTrailerUrl(trailerUrl.data.results[0]?.key);
    }
  };

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLarge && 'Row-poster-large'}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={options} />}
    </div>
  );
};

export default RowComponent;
