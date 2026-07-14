import { contentArea } from "./components/content-area";
import { sideBar } from "./components/sidebar";

const app = document.querySelector<HTMLDivElement>("#app");
app.innerHTML = `${sideBar()}${contentArea()}`;
