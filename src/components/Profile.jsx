import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
function Profile() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <strong className="text-[gray] mb-[10px] text-[18px] md:text-[24px]">
          빠르고 바르게 배울 수 있는 개발자 |{" "}
          <strong className="text-[black]">김대환</strong>
        </strong>

        <div className="flex flex-col md:flex-row md:items-center">
          <img
            className="object-contain w-[300px] h-[300px] rounded-[50%] mb-[20px] md:mb-0 md:mr-[10px]"
            src="assets/images/avatar.jpg"
            alt="profile"
          />

          <div className="w-[100%] flex flex-col items-start">
            <div className="text-[gray] mb-[5px] md:mb-[10px]">
              최근 업데이트 : 2022-04-05
            </div>
            <ul className="list-disc list-inside mb-[5px] md:mb-[10px]">
              <li>신입 프론트엔드 개발자</li>
              <li>
                <span className="text-orange-600">새로운 기술</span>을 배우는
                것을 좋아합니다.
              </li>
              <li>
                반복적인 업무를 <span className="text-orange-600">자동화</span>
                하는 것을 좋아합니다.
              </li>
            </ul>

            <hr className="w-[100%] border-[lightgray] mb-[5px] md:mb-[10px]" />

            <a
              className="flex items-center transition-[color] duration-400 ease-in-out hover:text-[#479ec0]"
              href="https://github.com/daehwan2">
              <AiFillGithub className="h-[30px] w-[30px] mr-[10px]" />
              <div>https://github.com/daehwan2</div>
            </a>

            <a
              className="flex items-center transition-[color] duration-400 ease-in-out hover:text-[#479ec0]"
              href="mailto:yournight0482@gmail.com">
              <AiOutlineMail className="h-[30px] w-[30px] mr-[10px]" />
              <div>yournight0482@gmail.com</div>
            </a>
          </div>
        </div>

        <></>
      </div>
    </main>
  );
}

export default Profile;
