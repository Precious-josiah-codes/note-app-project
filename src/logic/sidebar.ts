import type { Note } from "../types/note";
import { addNote } from "./note";

export function toggleAddNoteColors(
  toggleBtnColorsEl: HTMLButtonElement,
  colorNoteEl: HTMLDivElement,
): void {
  toggleBtnColorsEl.addEventListener("click", () =>
    colorNoteEl.classList.remove("note_selector_container"),
  );
}

export function handleOnClickNoteColors(
  colorNoteEl: NodeListOf<HTMLDivElement>,
  noteContainerEl: HTMLDivElement,
) {
  colorNoteEl.forEach((el) =>
    el.addEventListener("click", () => {
      const color = el.getAttribute("data-color") as Note["color"];
      addNote(color, noteContainerEl);
    }),
  );
}
