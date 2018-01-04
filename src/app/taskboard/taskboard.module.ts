import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DragulaModule } from 'ng2-dragula';
import { TaskboardRoutingModule } from "./taskboard-routing.module";

import { TaskboardComponent } from "./taskboard.component";

@NgModule({
    imports: [
        CommonModule,
        TaskboardRoutingModule,
        DragulaModule
    ],
    declarations: [
        TaskboardComponent
    ]
})
export class TaskboardModule { }
