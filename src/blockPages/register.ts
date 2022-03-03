import { renderDOM } from "../utils/renderDOM";
import RegisterPage from "../components/RegisterPage";

const registerPage = new RegisterPage();

renderDOM("#app", registerPage);
