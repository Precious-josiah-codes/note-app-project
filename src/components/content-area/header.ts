export function header(): string {
  return `
     <header class="header">
          <div style="display: inline-flex; align-items: center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              style="width: 20px; height: 20px; margin-right: 10px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input type="text" placeholder="Search" />
          </div>
        </header>
    `;
}
