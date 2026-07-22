import { note } from "../components/content-area/main-content/note";
import type { Note } from "../types/note";

let notesData: Note[] = [
  {
    id: "note-1",
    text: "Buy groceries: milk, organic eggs, sourdough bread, avocados, and dark chocolate. Don't forget the reusable bags this time!",
    date: "2026-07-10",
    color: "yellow",
    starred: true,
  },
  {
    id: "note-2",
    text: "Call Mom.",
    date: "2026-07-11",
    color: "red",
    starred: false,
  },
  {
    id: "note-3",
    text: "Project Brainstorming: Need to finalize the database schema for the new dashboard, refactor the legacy API routes, and set up the CI/CD pipeline before Friday's demo. Make sure to schedule a quick sync with the design team to review the updated Figma prototypes.",
    date: "2026-07-12",
    color: "orange",
    starred: true,
  },
  {
    id: "note-4",
    text: "Water the plants.",
    date: "2026-07-12",
    color: "green",
    starred: false,
  },
  {
    id: "note-5",
    text: "Book flights for the August weekend getaway. Prices are starting to creep up, so try to lock down the departures before Wednesday night.",
    date: "2026-07-13",
    color: "blue",
    starred: false,
  },
  {
    id: "note-6",
    text: "Dentist appointment at 2:30 PM.",
    date: "2026-07-14",
    color: "purple",
    starred: true,
  },
  {
    id: "note-7",
    text: "Gym workout: Target legs and core today. 4 sets of squats, Romanian deadlifts, lunges, and finish off with a 15-minute steady-state cardio session on the stairmaster.",
    date: "2026-07-14",
    color: "yellow",
    starred: false,
  },
  {
    id: "note-8",
    text: "Pay rent.",
    date: "2026-07-14",
    color: "red",
    starred: true,
  },
  {
    id: "note-9",
    text: "Remember to research the new CSS Container Queries. They look like a game-changer for responsive component designs, especially for the dashboard widgets we are building next sprint.",
    date: "2026-07-14",
    color: "green",
    starred: false,
  },
];

let activePopover: HTMLElement | null = null;

export function addNote(color: Note["color"], noteContainerEl: HTMLDivElement) {
  const id = crypto.randomUUID();
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-NG", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const newNote = {
    id,
    color,
    date: formattedDate,
    starred: false,
    text: "Enter Note",
  };

  const newNotes = [newNote, ...notesData];
  notesData = newNotes;

  renderNote(noteContainerEl, newNotes);
}

export function renderNote(
  noteContainerEl: HTMLDivElement,
  notesParam?: Note[],
) {
  const notes = notesParam ? notesParam : notesData;

  noteContainerEl.innerHTML = `${notes.map((noteData) => note(noteData)).join("")}`;
}

function openPopover(popoverEl: HTMLElement): void {
  if (activePopover !== popoverEl) {
    closeActivePopover();
  }

  popoverEl.classList.add("is-open");
  activePopover = popoverEl;
}

function closeActivePopover(): void {
  if (!activePopover) return;

  activePopover.classList.remove("is-open");
  activePopover = null;
}

function handleStarNote(card: HTMLElement, noteContainerEl: HTMLDivElement) {
  const cardId = card.dataset.id;

  const updatedNote = notesData.map((note) =>
    note.id === cardId ? { ...note, starred: true } : note,
  );

  renderNote(noteContainerEl, updatedNote);

  notesData = updatedNote;
}

export function handleNoteLogic(
  event: MouseEvent,
  noteContainerEl: HTMLDivElement,
) {
  const target = event.target as HTMLElement | null;

  if (!target) return;

  const optionBtn = target.closest<HTMLButtonElement>(".icon-btn.edit-btn");
  const popoverItem = target.closest<HTMLButtonElement>(".popover-item");

  // open and close popover item
  if (optionBtn) {
    const wrapper = optionBtn.closest<HTMLElement>(".popover-wrapper");
    const popover = wrapper.querySelector<HTMLElement>(".popover");

    if (popover) {
      if (popover.classList.contains("is-open")) {
      } else {
        openPopover(popover);
      }
    }

    return;
  }

  // select the action in the popover item
  if (popoverItem) {
    const action = popoverItem.dataset.action;
    const card = popoverItem.closest<HTMLElement>(".card");

    if (card && action) {
      switch (action) {
        case "star":
          handleStarNote(card, noteContainerEl);
          break;
        case "share":
          console.log("share the note");
          break;
        case "delete":
          console.log("delete the note");
          break;

        default:
          break;
      }
    }
  }

  // close the popover if open, when click anywhere else
  if (activePopover) {
    closeActivePopover();
  }
}
