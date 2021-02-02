import {Component} from '@angular/core'

@Component({
    selector: 'td-test',
    templateUrl: './test.component.html'
})
export class TestComponent {
    datetime: string;

    refreshDateTime() {
        this.datetime = new Date().toString();
    }
}