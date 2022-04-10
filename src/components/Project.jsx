import React from "react";

function Project({ url, title, date, imgurl, content }) {
  return (
    <li className="w-[100%] h-auto border-slate-400	border-[1px] rounded-[12px] p-[5px] mb-[15px] md:mb-[30px] hover:bg-[rgb(249,249,248)]">
      <a href={url}>
        <strong>{title}</strong>
        <div className="text-[16px]">{date}</div>
        <img src={imgurl} alt={title} />
        <p className="text-[gray]">{content}</p>
      </a>
    </li>
  );
}

export default Project;
