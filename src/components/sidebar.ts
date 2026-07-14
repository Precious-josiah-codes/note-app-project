export function sideBar(): string {
  return `
   <aside class="sidebar">
        <h2 style="padding-top: 20px; padding-bottom: 20px; font-size: 18px">
          Docket
        </h2>
        <button id="add_note_btn"><svg style="height: 20px; width: 20px"   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>
        <div class="note_selector_container">
          <div class="note-selector" style="background-color: red"></div>
          <div class="note-selector" style="background-color: green"></div>
          <div class="note-selector" style="background-color: orange"></div>
          <div class="note-selector" style="background-color: purple"></div>
        </div>
      </aside>

      
  
  `;
}
