import type { Note } from "../../../types/note";
import { note } from "./note";
import { title } from "./title";

export function mainContent(): string {
  const notesData: Note[] = [
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

  return `
    <main class="main-content">
          ${title()}

          <div style="display: grid; grid-template-columns: auto auto auto auto; gap: 1.5rem; margin-top: 3rem">
          
          ${notesData.map((noteData) => note(noteData)).join("")}
          </div>
          
          
          </main>
          `;
}
