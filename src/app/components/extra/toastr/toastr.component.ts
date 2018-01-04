import { Component } from '@angular/core';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './toastr.service'
// let style = require("../../../../../src/assets/css/ng2-toastr.min.css");
@Component({
    selector: 'app-toastr',
    templateUrl: './toastr.component.html',
    styleUrls: ['./toastr.component.scss'],
    providers: [ToastrService]
})

export class ToastrComponent {
    constructor(private service: ToastrService) { }

    // Success Type
    typeSuccess() {
        this.service.typeSuccess();
    }

    // Success Type
    typeInfo() {
        this.service.typeInfo();
    }

    // Success Type
    typeWarning() {
        this.service.typeWarning();
    }

    // Success Type
    typeError() {
        this.service.typeError();
    }

    // Custom Type
    typeCustom() {
        this.service.typeCustom();
    }

    // Remove current toasts using animation
    clearToast() {
        this.service.clearToast();
    }

    // Show close button
    showCloseButton() {
        this.service.showCloseButton();
    }

    //Dismiss toastr on Click
    dismissToastOnClick() {
        this.service.dismissToastOnClick();
    }

    //Dismiss toastr Controlled
    dismissToastControlled() {
        this.service.dismissToastControlled();
    }

    // Timeout
    timeout() {
        this.service.timeout();
    }

    // Enable HTML
    enableHtml() {
        this.service.enableHtml();
    }

    // Title Class
    titleClass() {
        this.service.titleClass();
    }
    // Message Class
    messageClass() {
        this.service.messageClass();
    }

}