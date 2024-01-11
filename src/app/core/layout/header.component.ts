import {Component, inject, OnInit} from "@angular/core";
import { UserService } from "../services/user.service";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";
import { ShowAuthedDirective } from "../../shared/show-authed.directive";
import {DialogModule} from "primeng/dialog";

@Component({
  selector: "app-layout-header",
  templateUrl: "./header.component.html",
    imports: [RouterLinkActive, RouterLink, AsyncPipe, NgIf, ShowAuthedDirective, DialogModule],
  standalone: true,
})
export class HeaderComponent implements OnInit{
  visible: boolean = false;
  currentUser$ = inject(UserService).currentUser;

  ngOnInit(): void {
  }
}
