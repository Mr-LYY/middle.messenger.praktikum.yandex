import { renderDOM } from "../utils/renderDOM";
import ErrorPage500 from "../components/ErrorPage500";

document.addEventListener("DOMContentLoaded", () => {
    const error500 = new ErrorPage500();
    renderDOM("#app", error500);
});
