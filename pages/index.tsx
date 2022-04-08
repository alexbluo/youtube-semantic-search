import type { NextPage } from "next";
import ReactPlayer from "react-player/youtube";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="flex-row row-cols-md-6"> just look at docs lol
        <ReactPlayer url="https://www.youtube.com/watch?v=7d7-etf-wNI" />
        <button className="btn btn-primary">test</button>
      </div>
    </div>
  );
};

export default Home;
