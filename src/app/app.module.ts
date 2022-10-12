import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NewsPageComponent } from './components/news-page/news-page.component'
import { ModelContentComponent } from './components/model-content/model-content.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [AppComponent, NewsPageComponent, ModelContentComponent],
    imports: [BrowserModule, NgbModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
