import { Form, Navbar, Slides } from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slides />
      <div>
        <h1>Pagina de inicio</h1>
        <Form />
      </div>
    </>
  );
};

export default Home;
