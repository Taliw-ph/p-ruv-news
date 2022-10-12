import { Component, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { NewsPageComponent } from '../news-page/news-page.component'

@Component({
    selector: 'app-model-content',
    templateUrl: './model-content.component.html',
    styleUrls: ['./model-content.component.scss'],
})
export class ModelContentComponent {
    @Input() name?: string

    newsForm = new FormGroup({
        title: new FormControl('', Validators.required),
        url: new FormControl('', [Validators.required, Validators.pattern('http(s)?://.+')]),
    })

    constructor(public activeModal: NgbActiveModal) {}

    onCancel() {
        this.activeModal.close('Modal Closed')
    }

    onSubmit() {}
}
