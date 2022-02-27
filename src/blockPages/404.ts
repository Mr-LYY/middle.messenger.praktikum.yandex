import { renderDOM } from "../utils/renderDOM";
import ErrorPage404 from "../components/ErrorPage404";

document.addEventListener("DOMContentLoaded", () => {
    const error404 = new ErrorPage404();
    renderDOM("#app", error404);
});
