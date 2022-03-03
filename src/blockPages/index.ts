import { renderDOM } from "../utils/renderDOM";
import IndexPage from "../components/IndexPage";

const indexPage = new IndexPage();

renderDOM("#app", indexPage);
