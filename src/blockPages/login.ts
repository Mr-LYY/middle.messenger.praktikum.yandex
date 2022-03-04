import { renderDOM } from '../utils/renderDOM';
import LoginPage from '../components/LoginPage';
import { useFormConsole } from '../utils/useFormConsole';

const loginPage = new LoginPage();

renderDOM('#app', loginPage);

useFormConsole();
