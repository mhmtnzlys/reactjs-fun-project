import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { AppRouter } from "../../routes";
import "./Layout.css";

const Layout = () => (
  <>
    <Header />
    <main>
      <AppRouter />
    </main>
    <Footer />
  </>
);

export default Layout;
