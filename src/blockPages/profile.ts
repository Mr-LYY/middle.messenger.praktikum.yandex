import { renderDOM } from "../utils/renderDOM";
import ProfilePage from "../components/ProfilePage";

document.addEventListener("DOMContentLoaded", () => {
    const profilePage = new ProfilePage();
    renderDOM("#app", profilePage);
});
