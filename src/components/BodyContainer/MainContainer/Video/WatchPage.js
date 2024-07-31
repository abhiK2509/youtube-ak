import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../../../../redux/appSlice";
import { YOUTUBE_EMBED_URL_PREFIX } from "../../../../utils/constants";
import CommentsContainer from "../Comments.js/CommentsContainer";
import LiveChat from "../LiveChat/LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="pl-24 flex">
        <div>
          <iframe
            width="800"
            height="450"
            src={`${YOUTUBE_EMBED_URL_PREFIX}${params.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="pr-24 w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
