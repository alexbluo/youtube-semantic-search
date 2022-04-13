import { useState, ChangeEvent, FormEvent } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ReactPlayer from "react-player/youtube";
import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.scss";

const Home: NextPage = () => {
  const router = useRouter();
  const [link, setLink] = useState("");
  // const [isValidLink, setIsValidLink] = useState(true);

  function handleLinkInput(event: ChangeEvent<HTMLInputElement>) {
    // TODO: validate link?
    setLink(event.target.value);
  }

  function handleLinkSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // router.push()
  }

  return (
    <div className="container py-5">
      <div className="d-flex align-items-center justify-content-center w-100 vh-100">
        <form className="input-group w-25" onSubmit={handleLinkSubmit}>
          <input
            className="form-control"
            type="form"
            placeholder="youtube.com/watch?v=id"
            aria-label="Video Link"
            aria-describedby="button-addon1"
            onChange={handleLinkInput}
          />
          <button className="btn btn-primary" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-return-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
