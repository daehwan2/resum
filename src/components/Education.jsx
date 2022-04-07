import React from "react";

function Education() {
  return (
    <div>
      <header className="title">Education & Certification</header>
      <ul className="list-disc list-inside text-[gray]">
        <li>
          2017.03 ~ 2023.02{" "}
          <span className="text-orange-600">
            부경대학교 디스플레이반도체공학과 졸업예정.
          </span>
        </li>
        <li>
          2021.06.02 <span className="text-orange-600">정보처리기사 취득</span>
        </li>
        <li>
          2021.10.01 <span className="text-orange-600">SQLD 취득</span>
        </li>
      </ul>
    </div>
  );
}

export default Education;
