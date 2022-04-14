import React from "react";
import Project from "./Project";

function Projects() {
  return (
    <div>
      <header className="title mb-[10px]">Project</header>

      <h1>web</h1>

      <ol className="flex flex-col md:flex-row md:flex-wrap justify-around">
        <Project
          url="https://github.com/daehwan2/chestnutMachine"
          title="웹앱 연동 딱밤머신( 리액트, 아두이노 )"
          date="2022.03.23 ~"
          imgurl="https://user-images.githubusercontent.com/53414542/162627997-112f3b77-3958-4e02-8b16-c1cfdcaf5aa9.png"
          content="웹에서 로그인을 해서 딱밤머신의 기록을 랭킹화 시킨 프로젝트입니다. 
          파이어베이스의 realtime 데이터베이스 서버를 이용하여 리액트와 아두이노간의 통신을 하였습니다. 
          팀프로젝트였지만 전공특성상 팀원들이 웹에대해 잘모르기 때문에 웹에 대한건 혼자서 진행하고 팀원들에게 설명하는 형식으로 진행하였습니다."
        />
        <Project
          url="https://github.com/code-etc"
          title="이상형 월드컵 서비스"
          date="2022.01.19 ~"
          imgurl="https://user-images.githubusercontent.com/53414542/162629112-480fb030-a49a-4607-aee2-4c0c96e24359.png"
          content="백엔드개발자 두분과 프론트엔드개발자 한분과 같이 처음으로 진행한 팀프로젝트입니다.
           팀원중 실무자가 있었기에 실무와 가깝게 프로젝트를 구상하고 개발을 진행중에 있다고 생각하고 있습니다. github를 협업에 사용해본 첫프로젝트였습니다.
           프로젝트의 프론트부분을 작업하였고 slider UI, 월드컵 등록페이지 및 GNB를 맡아서 개발하였습니다. 백엔드와의 협업을 어떤식으로 하는지를 느껴본 프로젝트입니다."
        />
        <Project
          url="https://github.com/daehwan2/tomorrow-house"
          title="내일의 집(오늘의 집 클론코딩)"
          date="2021.09.20 ~"
          imgurl="https://user-images.githubusercontent.com/53414542/163409428-f0a90c9a-1fa9-4d6d-a286-2baa213d033d.png"
          content="실무와 비슷한 경험을 해준다는 말에 결제한 유료강의를 보며 따라한 프로젝트입니다. 
          이 프로젝트를 통해 scss의 사용법, html의 보다 semantic한 markup을 배울 수 있었습니다.
           또 figma로 작성된 디자인 파일을 보고 시안대로 코딩하는법을 알게되었습니다."
        />
        <Project
          url="https://github.com/daehwan2/react-for-beginners"
          title="영화 리스트 사이트"
          date="2021.12.29 ~ 2022.01.17"
          imgurl="https://github.com/daehwan2/react-for-beginners/raw/master/images/screenshot1.png"
          content="무료강의를 보고 따라하면서 리액트의 함수형 컴포넌트를 익힐 수 있는 프로젝트였습니다. 
          또 openAPI를 처음으로 사용해보며 어떤식으로 데이터를 받아오는지를 알게 되었습니다. 강의 이후에 추가한 기능은 스타일링과 sort기능을 넣었습니다."
        />
      </ol>
      <hr className="mb-[15px] md:mb-[30px]" />
      <h1>other</h1>
      <ol className="flex flex-col md:flex-row md:flex-wrap justify-around">
        <Project
          url="https://github.com/daehwan2/ScreenMemo"
          title="ScreenMemo"
          date="2020.04.04"
          imgurl="https://user-images.githubusercontent.com/53414542/162557687-f83d17c6-6576-444f-ae7b-6fcefe7f01f2.png"
          content="C# windows forms로 만들었고 화면을 캡쳐해서 그위에 그림을 그릴 수 있게하는 작업을 하였습니다."
        />
        <Project
          url="https://github.com/daehwan2/Excel_Addres_Convert"
          title="Excel_Address_Converter"
          date="2020.03.31"
          imgurl="https://user-images.githubusercontent.com/53414542/162556129-7e14b6d9-5f04-408b-a0e1-a1663f20f504.png"
          content="공익 근무중 지번주소를 도로명 주소로 바뀌는 일을 소방서에서
              시켰었고 갯수가 너무 많았습니다. 단순반복작업을 사람이 너무
              비효율적으로 하는 것 같이 느껴서 당시 공부중이던 C# windows
              forms으로 excel 라이브러리, selenium을 이용하여 자동화프로그램을
              만들었습니다. excel파일을 읽어와 지번주소가 적힌 셀의 값을 하나씩
              읽어서 도로명주소사이트를 selenium 으로 띄워서 검색한 뒤 가장
              첫번째의 결과물을 가져와서 새로운 셀에 넣는 작업을 진행하였습니다."
        />
      </ol>
    </div>
  );
}

export default Projects;
