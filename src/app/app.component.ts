import { Component, OnDestroy, OnInit } from "@angular/core";
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy{
  private unsubscriber : Subject<void> = new Subject<void>();


  ngOnInit(): void {
    var audio = new Audio('assets/son/pet2.mp3');

// Ajouter un gestionnaire d'événement de clic
    document.addEventListener('click', function() {
      // Jouer le son à chaque clic
      audio.play();
    });

    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
    });
  }
  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
