import { useState, ChangeEvent, FormEvent } from "react";
import type { NextPage } from "next";
import axios from "axios";
import classNames from "classnames";
import Head from "next/head";
import { useRouter } from "next/router";
import normalizeURL from "normalize-url";

const Home: NextPage = () => {
  const router = useRouter();
  const [link, setLink] = useState("");
  const [isValidLink, setIsValidLink] = useState(false);

  const handleLinkInput = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLink(value);

    setIsValidLink(false);
    // in case text is inputted and fully deleted
    if (value.length === 0) return;

    // regex to match all kinds of youtube urls
    const linkIsYoutubeURL = !!value.match(
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
    );
    if (!linkIsYoutubeURL) return;

    // get video id from url query params after normalizing to add https header so URL() works
    const params = new URL(normalizeURL(value)).searchParams;
    const videoID = params.get("v");

    // check if video exists
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    );
    if (res.data.items.length === 0) return;

    setIsValidLink(true);
  };

  const handleLinkSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidLink) return;

    // get video id from url query params and redirect
    const params = new URL(normalizeURL(link)).searchParams;
    const videoID = params.get("v");
    router.push({ pathname: "/watch", query: { v: videoID } });
  };

  return (
    <div className="container py-5 w-100 vh-100">
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <h1>Appositus</h1>
        <div className="w-25">
          <form
            className="input-group w-100"
            autoComplete="off"
            onSubmit={handleLinkSubmit}
          >
            <input
              className="form-control"
              type="form"
              placeholder="youtube.com/watch?v=id"
              aria-label="Video Link"
              aria-describedby="button-addon1"
              onChange={handleLinkInput}
            />
            <button
              className={classNames(
                "btn",
                { "btn-primary": isValidLink },
                { "btn-secondary disabled": !isValidLink }
              )}
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
