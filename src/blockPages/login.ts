import { renderDOM } from "../utils/renderDOM";
import LoginPage from "../components/LoginPage";

const loginPage = new LoginPage();

renderDOM("#app", loginPage);
