import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SIDEBAR_MENU_LIST } from "../../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      {SIDEBAR_MENU_LIST.map((category, index) => (
        <>
          {category.sectionHeading && (
            <h1 key={category.sectionHeading} className="font-bold pt-5">
              {category.sectionHeading}
            </h1>
          )}
          <ul key={index}>
            {category.submenuList.map((submenu, index) => (
              <li key={index}>
                <Link key={index} to={submenu.path}>
                  {submenu.menu}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default Sidebar;
