import { renderDOM } from "../utils/renderDOM";
import IndexPage from "../components/IndexPage";

document.addEventListener("DOMContentLoaded", () => {
    const indexPage = new IndexPage();
    renderDOM("#app", indexPage);
});
