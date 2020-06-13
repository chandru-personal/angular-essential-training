import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    templateUrl: 'app.component.html',
    styles: [`
        h1 {
            color: #ffff;
        }
        .description {
            font-style: italic;
            color: green;
        }
    `]
})
export class AppComponent {}