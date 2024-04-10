import "./App.css";
import { Horse, Heart, Cube } from "phosphor-react";
function App() {
  return (
    <>
      <h1>Lorem, ipsum dolor.</h1>
      <Horse size={'13rem'}/>
      <Heart color="#AE2983" weight="fill" size={'13rem'} />
      <Cube size={'13rem'} color="teal" weight="duotone" />
    </>
  );
}

export default App;
