import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comment } from "../models/comment.model";

@Injectable({ providedIn: "root" })
export class CommentsService {
  private readonly noCacheOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache', // Indique au navigateur de ne pas mettre en cache la réponse
      'Pragma': 'no-cache',
    }),
  };

  constructor(private readonly http: HttpClient) {}

  getAll(slug: string): Observable<Comment[]> {
    // Utilise les options noCache pour désactiver le cache
    return this.http
      .get<{ comments: Comment[] }>(`/articles/${slug}/comments`, this.noCacheOptions)
      .pipe(map((data) => data.comments));
  }

  add(slug: string, payload: string): Observable<Comment> {
    // Utilise les options noCache pour désactiver le cache
    return this.http
      .post<{ comment: Comment }>(`/articles/${slug}/comments`, { comment: { body: payload } }, this.noCacheOptions)
      .pipe(map((data) => data.comment));
  }

  delete(commentId: string, slug: string): Observable<void> {
    // Utilise les options noCache pour désactiver le cache
    return this.http.delete<void>(`/articles/${slug}/comments/${commentId}`, this.noCacheOptions);
  }
}
