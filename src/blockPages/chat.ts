import { renderDOM } from "../utils/renderDOM";
import ChatPage from "../components/ChatPage";

document.addEventListener("DOMContentLoaded", () => {
    const chatPage = new ChatPage();
    renderDOM("#app", chatPage);
});
