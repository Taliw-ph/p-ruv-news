import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    private baseUrl: string = '/news'

    httpOption = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    constructor(private httpClient: HttpClient) {}

    getNews(): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}`)
    }

    addNews(news: any): Observable<any> {
        console.log('news added', news)
        return this.httpClient
            .post<any>(this.baseUrl, news, this.httpOption)
            .pipe(map((res) => res))
    }
}
