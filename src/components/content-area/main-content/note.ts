import type { Note } from "../../../types/note";

function starredButton(): string {
  return `
  <button class="icon-btn star-btn" aria-label="Favorite">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  </button>
  `;
}

export function note(note: Note): string {
  const { color, date, id, starred, text } = note;
  return `
            <div class="card" style="background-color: ${color}">
              ${starred ? starredButton() : ""}

              <div class="content-container">
                <textarea
                  class="card-textarea"
                  rows="4"
                  placeholder="Enter text here..."
                >
${text}</textarea
                >
              </div>

              <div class="card-footer">
                <span class="card-date">May 25, 2020</span>
                <button class="icon-btn edit-btn" aria-label="Edit">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          
    `;
}
