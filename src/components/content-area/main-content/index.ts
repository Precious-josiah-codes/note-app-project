import { title } from "./title";

export function mainContent(): string {
  return `
    <main class="main-content">
          ${title()}

          <div id="note-container" style="display: grid; grid-template-columns: auto auto auto auto; gap: 1.5rem; margin-top: 3rem">
          
         
          </div>
          
          
          </main>
          `;
}
