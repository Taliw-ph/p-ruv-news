import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NewsPageComponent } from './components/news-page/news-page.component'

const routes: Routes = [
    { path: '', redirectTo: 'news', pathMatch: 'full' },
    { path: 'news', component: NewsPageComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
