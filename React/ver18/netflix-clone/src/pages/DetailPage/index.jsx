import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  console.log("movieId", movieId);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      console.log(request);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}

export default DetailPage;
