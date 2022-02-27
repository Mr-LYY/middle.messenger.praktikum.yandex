import { renderDOM } from "../utils/renderDOM";
import RegisterPage from "../components/RegisterPage";

document.addEventListener("DOMContentLoaded", () => {
    const registerPage = new RegisterPage();
    renderDOM("#app", registerPage);
});
