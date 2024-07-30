import React from "react";
import Tag from "./Tag";
import { TAG_LIST } from "../../../../utils/constants";

const TagList = () => {
  return (
    <div className="flex">
      {TAG_LIST.map((tag) => (
        <Tag key={tag.name} tag={tag} />
      ))}
    </div>
  );
};

export default TagList;
