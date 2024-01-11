import {Component, Input, signal} from "@angular/core";
import { Article } from "../../core/models/article.model";
import { ArticleMetaComponent } from "./article-meta.component";
import { FavoriteButtonComponent } from "../buttons/favorite-button.component";
import { RouterLink } from "@angular/router";
import { NgForOf } from "@angular/common";
import {DialogModule} from "primeng/dialog";

@Component({
  selector: "app-article-preview",
  templateUrl: "./article-preview.component.html",
  imports: [ArticleMetaComponent, FavoriteButtonComponent, RouterLink, NgForOf, DialogModule],
  standalone: true,
})
export class ArticlePreviewComponent {
  @Input() article!: Article;
  visible: boolean = false;


  toggleFavorite(favorited: boolean): void {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }
  showDialog() {
    this.visible = true;
  }
}
