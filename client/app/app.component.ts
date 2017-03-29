import { Component } from '@angular/core';
import {TaskService} from "./sevices/task.service";
/*import {TaskService} from './services/task.service';*/

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[TaskService]
})

export class AppComponent { }