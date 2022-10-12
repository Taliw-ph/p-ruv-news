import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModelContentComponent } from '../model-content/model-content.component'

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
    active: string = ''
    links = [
        { title: 'Top', fragment: 'top' },
        { title: 'Middle', fragment: 'middle' },
        { title: 'Bottom', fragment: 'bottom' },
    ]

    constructor(public route: ActivatedRoute, private modalService: NgbModal) {}

    ngOnInit(): void {
        this.route.fragment.subscribe((fragment) => {
            this.active = fragment || this.links[0].fragment
        })
        this.modalService.activeInstances.subscribe((instances) => {
            instances.length === 0 && this.fetchData()
        })
    }

    fetchData() {
        console.log('fetching data')
    }

    open() {
        this.modalService.open(ModelContentComponent)
    }
}
