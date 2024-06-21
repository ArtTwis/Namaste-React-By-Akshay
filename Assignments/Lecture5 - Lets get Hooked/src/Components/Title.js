import logoImg from "../../media/resturentlogo.png";

const Title = () => (
  <div className="flex items-center ml-6">
    <img className="h-20 m-2" src={logoImg} alt="logo" />
    <h1>Food Villa</h1>
  </div>
);

export default Title;
