import { header } from "./header";
import { mainContent } from "./main-content";

export function contentArea(): string {
  return `
    <div class="content-area">
       
${header()}
${mainContent()}
        
      </div>
    
    `;
}
