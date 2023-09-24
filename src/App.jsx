import { Header } from "./components/Header/Header";
import { Search } from './components/Search/Search';
import { Registration } from "./components/Registration/Registration";
import { Login } from "./components/Login/Login";
import { Footer } from './components/Footer/Footer';
import { FilmsListWrapper } from './components/FilmsListWrapper/FilmsListWrapper';
import './App.scss'

export function App() {
  return (
    <>
      <Header />
      <div className="body">
        <Search />
        <FilmsListWrapper />
        <Registration />
        <Login />
      </div>
      <Footer />
    </>
  );
}
