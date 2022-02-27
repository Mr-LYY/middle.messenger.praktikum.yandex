import { renderDOM } from "../utils/renderDOM";
import LoginPage from "../components/LoginPage";

document.addEventListener("DOMContentLoaded", () => {
    const loginPage = new LoginPage();
    renderDOM("#app", loginPage);
});
