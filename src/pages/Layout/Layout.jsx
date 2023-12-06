import Header from "../../components/Header/Header";
import { AppRouter } from "../../routes";
import './Layout.css'

const Layout = () => (
    <>
        <Header />
        <main>
            <AppRouter />
        </main>
    </>
);

export default Layout;
