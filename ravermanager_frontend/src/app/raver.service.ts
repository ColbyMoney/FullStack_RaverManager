import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Raver } from './Raver';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RaverService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getRavers(): Observable<Raver[]> {
        return this.http.get<Raver[]>(`${this.apiServerUrl}/raver/all`);
    }

    public addRaver(raver: Raver): Observable<Raver> {
        return this.http.post<Raver>(`${this.apiServerUrl}/raver/add`, raver);
    }

    public updateRaver(raver: Raver): Observable<Raver> {
        return this.http.put<Raver>(`${this.apiServerUrl}/raver/update`, raver);
    }

    public deleteRaver(raverID: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/raver/delete/${raverID}`);
    }
}