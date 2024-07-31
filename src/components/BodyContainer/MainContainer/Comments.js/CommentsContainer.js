import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Abhijeet",
    text: "loreal Ipsum",
    replies: [
      {
        name: "Abhijeet 1",
        text: "loreal Ipsum 1",
        replies: [
          {
            name: "Abhijeet 1",
            text: "loreal Ipsum 1",
            replies: [],
          },
          {
            name: "Abhijeet 1",
            text: "loreal Ipsum 1",
            replies: [
              {
                name: "Abhijeet 1",
                text: "loreal Ipsum 1",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Abhijeet 1",
        text: "loreal Ipsum 1",
        replies: [
          {
            name: "Abhijeet 1",
            text: "loreal Ipsum 1",
            replies: [],
          },
          {
            name: "Abhijeet 1",
            text: "loreal Ipsum 1",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Abhijeet",
    text: "loreal Ipsum",
    replies: [
      {
        name: "Abhijeet 1",
        text: "loreal Ipsum 1",
        replies: [
          {
            name: "Abhijeet 1",
            text: "loreal Ipsum 1",
            replies: [],
          },
          {
            name: "Abhijeet 1",
            text: "loreal Ipsum 1",
            replies: [
              {
                name: "Abhijeet 1",
                text: "loreal Ipsum 1",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Abhijeet 1",
        text: "loreal Ipsum 1",
        replies: [
          {
            name: "Abhijeet 1",
            text: "loreal Ipsum 1",
            replies: [],
          },
          {
            name: "Abhijeet 1",
            text: "loreal Ipsum 1",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="pl-32 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
