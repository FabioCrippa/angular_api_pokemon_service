import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        
        <app-card></app-card>
        <router-outlet></router-outlet>
        `,
        // Substituí o template direto pelo router-outlet e 
        // eliminei o arquivo app.component.html.
        
        // No lugar das aspas, troquei por crase, 
        // com isso, consigo adicionar mais coisas.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manipulando_services';
}
