import logoImg from "../../media/resturentlogo.png";

const Title = () => (
  <div id="title_div">
    <img src={logoImg} alt="logo" id="logoImg" />
    <h1 id="title" key="title">
      Food Villa
    </h1>
  </div>
);

export default Title;
