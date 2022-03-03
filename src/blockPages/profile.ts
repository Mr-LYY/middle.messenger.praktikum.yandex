import { renderDOM } from "../utils/renderDOM";
import ProfilePage from "../components/ProfilePage";

const profilePage = new ProfilePage();

renderDOM("#app", profilePage);
