var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jarvis on 2017. 5. 28..
 */
import { Component } from '@angular/core';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n            <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n            <a routerLink=\"/mysample\" routerLinkActive=\"active\">\uB0B4\uAEBC \uC0D8\uD50C</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=/Users/jarvis/code/workspace/spring-boot-angular4-boilerplate/frontend_mine/src/app/app.component.js.map