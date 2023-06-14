import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quick-connect",
  templateUrl: "./quick-connect.component.html",
  styleUrls: ["./quick-connect.component.css"],
})
export class QuickConnectComponent implements OnInit {
  router: any;
  constructor() {}

  ngOnInit(): void {}
  openLinks(id: any) {
    this.router.navigate(["/more/links", id]);
  }
}
