import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { GiShuriken } from "react-icons/gi";
import { IoLibrary } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { TiVendorMicrosoft } from "react-icons/ti";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "./Mangekyou_Sharingan_Itachi.png"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<TiVendorMicrosoft />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaNode />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<GiShuriken />} />
    </div>
  );
}
