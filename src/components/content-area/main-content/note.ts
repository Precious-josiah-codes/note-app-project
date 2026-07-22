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

function moreOptions(): string {
  return `
  <div class="popover-wrapper">
  <button class="icon-btn edit-btn" aria-label="Edit" aria-expanded="false">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
      />
    </svg>
  </button>

  <!-- Shadcn Popover -->
  <div class="popover" role="menu" aria-hidden="true">
    <div class="popover-label">Note Options</div>

    <button
      type="button"
      class="popover-item"
      role="menuitem"
      data-action="star"
    >
      <svg
        class="popover-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        ></polygon>
      </svg>
      <span>Star note</span>
      <span class="shortcut">⌘S</span>
    </button>

    <button
      type="button"
      class="popover-item"
      role="menuitem"
      data-action="share"
    >
      <svg
        class="popover-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
      <span>Share note</span>
    </button>

    <div class="popover-separator" role="separator"></div>

    <button
      type="button"
      class="popover-item destructive"
      role="menuitem"
      data-action="delete"
    >
      <svg
        class="popover-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3 6h18"></path>
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
      </svg>
      <span>Delete note</span>
      <span class="shortcut">⌫</span>
    </button>
  </div>
</div>
  
  `;
}

export function note(note: Note): string {
  const { color, date, id, starred, text } = note;
  return `
            <div data-id="${id}" class="card" style="background-color: ${color}">
              ${starred ? starredButton() : ""}

              <div class="content-container">
                <textarea
                  class="card-textarea"
                  rows="4"
                  placeholder="Enter text here..."
                >
                ${text}
                </textarea>
              </div>

              <div class="card-footer">
                <span class="card-date">${date}</span>
               ${moreOptions()}
              </div>
            </div>
          
    `;
}
