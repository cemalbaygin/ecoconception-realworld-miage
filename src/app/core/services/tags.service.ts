import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class TagsService {
  private readonly noCacheOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache', // Indique au navigateur de ne pas mettre en cache la réponse
      'Pragma': 'no-cache',
    }),
  };

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<string[]> {
    // Utilise les options noCache pour désactiver le cache
    return this.http
      .get<{ tags: string[] }>("/tags", this.noCacheOptions)
      .pipe(map((data) => data.tags));
  }
}
