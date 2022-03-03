import { renderDOM } from "../utils/renderDOM";
import ChatPage from "../components/ChatPage";

const chatPage = new ChatPage();

renderDOM("#app", chatPage);
