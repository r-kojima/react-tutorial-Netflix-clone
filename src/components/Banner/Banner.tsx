import React, { FC, useState, useEffect } from 'react';
import api, { base_url, requests } from 'api';
import { truncate } from 'utils';
import './Banner.scss';

type BannerCompoentProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

const BannerComponent: FC<BannerCompoentProps> = (props) => {
  const [movie, setMovie] = useState<BannerCompoentProps>({});

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(requests.fetchNetflixOriginals);
      console.log(request.data.result);

      setMovie(request.data.results[0]);
      return request;
    }

    fetchData();
  }, []);
  console.log(movie);

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("${base_url}${movie.backdrop_path}")`,
        backgroundPosition: 'top center',
      }}
    >
      <div className="Banner-contents">
        <h1 className="Banner-title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>
        <h1 className="Banner-description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="Banner-fadeBottom" />
    </header>
  );
};

export default BannerComponent;
