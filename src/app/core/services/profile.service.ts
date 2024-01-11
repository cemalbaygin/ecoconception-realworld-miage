import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Profile } from "../models/profile.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class ProfileService {
  private readonly noCacheOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache', // Indique au navigateur de ne pas mettre en cache la réponse
      'Pragma': 'no-cache',
    }),
  };

  constructor(private readonly http: HttpClient) {}

  get(username: string): Observable<Profile> {
    // Utilise les options noCache pour désactiver le cache
    return this.http.get<{ profile: Profile }>("/profiles/" + username, this.noCacheOptions)
      .pipe(map((data: { profile: Profile }) => data.profile));
  }

  follow(username: string): Observable<Profile> {
    // Utilise les options noCache pour désactiver le cache
    return this.http
      .post<{ profile: Profile }>("/profiles/" + username + "/follow", {}, this.noCacheOptions)
      .pipe(map((data: { profile: Profile }) => data.profile));
  }

  unfollow(username: string): Observable<Profile> {
    // Utilise les options noCache pour désactiver le cache
    return this.http
      .delete<{ profile: Profile }>("/profiles/" + username + "/follow", this.noCacheOptions)
      .pipe(map((data: { profile: Profile }) => data.profile));
  }
}
