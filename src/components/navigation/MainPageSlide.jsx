import LoginButton from "../buttons/Login";
import LinkButton from "../buttons/LinkButton";

const MainPageSlide = () => {
  return (
    <div id="MainPageSlideContainer">
      <LinkButton title="Menu" url="/" />
      <LoginButton />
      <LinkButton title="About Us" url="/" />
    </div>
  );
};

export default MainPageSlide;
