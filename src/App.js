import React, { useState } from "react";
import {
  FaAngleRight,
  FaAngleDown,
  FaRegFolder,
  FaRegFolderOpen,
  FaGlobe
} from "react-icons/fa";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const leaf = { paddingLeft: "70px" };
const branch = { paddingLeft: "40px" };

const Leaf = ({ url, label }, idx) => {
  return (
    <a
      href={url}
      className="list-group-item"
      style={leaf}
      key={`leaf-${idx}`}
      onClick={() => alert(url)}
    >
      <FaGlobe /> {label}
    </a>
  );
};

const Branch = ({ label, children }, idx) => {
  const [open, setOpen] = useState(true);
  const childList = children.map(Leaf);
  return (
    <>
      <a
        href="/#"
        className="list-group-item"
        style={branch}
        onClick={() => setOpen(!open)}
        key={`branch-${idx}`}
      >
        {open ? <FaAngleDown /> : <FaAngleRight />}{" "}
        {open ? <FaRegFolderOpen /> : <FaRegFolder />} {label}
      </a>
      {open && childList}
    </>
  );
};

const Root = ({ label, children }, idx) => {
  const [open, setOpen] = useState(true);
  const childList = children.map(Branch);
  return (
    <>
      <a
        href="/#"
        className="list-group-item"
        onClick={() => setOpen(!open)}
        key={`root-${idx}`}
      >
        {open ? <FaAngleDown /> : <FaAngleRight />}{" "}
        {open ? <FaRegFolderOpen /> : <FaRegFolder />} {label}
      </a>
      {open && childList}
    </>
  );
};

export default function NestedListGroup({ nodes }) {
  return (
    <div className="container">
      <div className="list-group">{nodes.map(Root)}</div>
    </div>
  );
}
