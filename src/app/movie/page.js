import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const url = process.env.PUBLIC_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88be801ea5mshcb04035de1cff11p153041jsn0336ebeb11c5",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <div>
      <section className={styles.moviesection}>
        <div className={styles.container}>
          <h1>Sereis & Movies</h1>

          <div className={styles.card_section}>
            {main_data.map((element) => {
              return <MovieCard key={element.id} {...element} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movie;
