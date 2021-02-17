import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Post} from '../modeles/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiBaseUrl, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getOne(id: number): Observable<Post> {
    return this.httpClient
      .get<Post>(this.apiBaseUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  save(post: Post): Observable<Post> {
    return post.id !== null
      // create
      ? this.httpClient
        .put<Post>(this.apiBaseUrl + '/' + post.id, JSON.stringify(post), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
      // update
      : this.httpClient
        .post<Post>(this.apiBaseUrl, JSON.stringify(post), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
  }

  delete(post: Post) {
    return this.httpClient
      .delete(this.apiBaseUrl + '/' + post.id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

// Handle API errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
