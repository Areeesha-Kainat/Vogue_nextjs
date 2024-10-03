
import Image from "next/image";
import Nav from "./components/front-end/Nav";
import Header from "./components/front-end/Header";
import Head1 from "./components/front-end/Head1";
import Head2 from "./components/front-end/Head2";
import Footer from "./components/front-end/Footer";

export default function Home() {
  return (
  <div>
    <Nav />
    <br />
    <Header />
    <br />
    <Head1 />
    <Head2 />
    <br />
    <Footer />
  </div>
  );
}
