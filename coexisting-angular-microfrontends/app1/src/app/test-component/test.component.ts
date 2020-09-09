import { Component } from "@angular/core";
import { pubsub } from "pubsub";

@Component({
    template: `
        <h2>Profile Page</h2>
        <div *ngIf="firstname != undefined">
            <div>First Name: {{firstname}}</div>
            <div>Last Name: {{lastname}}</div>
            <div>Team: {{team}}</div>
            <div>Position: {{position}}</div>
        </div>
    `,
    selector: 'testtest'
})
export class TestComponent {
    public firstname: string;
    public lastname: string;
    public team: string;
    public position: string;

    constructor() {
        pubsub.subscribe('test').subscribe((val) => {
            this.firstname = val.client.first_name;
            this.lastname = val.client.last_name;
            this.team = val.client.team.city;
            this.position = val.client.position;
        });
    }
}
