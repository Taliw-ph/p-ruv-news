import { Component, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { NewsService } from 'src/app/services/news/news.service'
import { NewsPageComponent } from '../news-page/news-page.component'

@Component({
    selector: 'app-model-content',
    templateUrl: './model-content.component.html',
    styleUrls: ['./model-content.component.scss'],
})
export class ModelContentComponent {
    newsForm = new FormGroup({
        title: new FormControl('', Validators.required),
        url: new FormControl('', [Validators.required, Validators.pattern('http(s)?://.+')]),
    })

    constructor(public activeModal: NgbActiveModal, private newsService: NewsService) {}

    onCancel() {
        this.activeModal.close('User Cancel')
    }

    onSubmit() {
        this.newsService.addNews(this.newsForm.value).subscribe((res) => {
            this.activeModal.close('News Added')
        })
    }
}
