import { renderDOM } from "../utils/renderDOM";
import RegisterPage from "../components/RegisterPage";
import { useFormConsole } from "../utils/useFormConsole";

const registerPage = new RegisterPage();

renderDOM("#app", registerPage);

useFormConsole();
