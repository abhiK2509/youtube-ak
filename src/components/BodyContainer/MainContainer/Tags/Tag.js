import React from "react";

const Tag = ({ tag }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-100 rounded-lg">
        {tag.name}
      </button>
    </div>
  );
};

export default Tag;
