import { contentArea } from "./components/content-area";
import { sideBar } from "./components/sidebar";
import { handleNoteLogic, renderNote } from "./logic/note";
import { handleOnClickNoteColors, toggleAddNoteColors } from "./logic/sidebar";

const app = document.querySelector<HTMLDivElement>("#app");
app.innerHTML = `${sideBar()}${contentArea()}`;

renderNote(document.querySelector("#note-container"));

toggleAddNoteColors(
  document.querySelector("#add_note_btn"),
  document.querySelector(".note_selector_container"),
);

handleOnClickNoteColors(
  document.querySelectorAll(".note-selector"),
  document.querySelector("#note-container"),
);

document.addEventListener("click", (e) => {
  handleNoteLogic(e, document.querySelector("#note-container"));
});
