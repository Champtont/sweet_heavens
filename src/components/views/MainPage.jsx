import MainPageSlide from "../navigation/MainPageSlide";

const MainPage = () => {
  return (
    <div id="mainContainer">
      <div id="mainContainerOverlay"></div>
      <div id="banner">
        <div id="capitalS" className="capitals">
          S
        </div>
        <div className="title">
          weet <span className="space"></span>eavens
        </div>
        <div id="capitalH" className="capitals">
          {" "}
          H
        </div>
        <MainPageSlide />
      </div>
    </div>
  );
};

export default MainPage;
