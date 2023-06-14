import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/core/services/home.services";

@Component({
  selector: "app-infrastructure",
  templateUrl: "./infrastructure.component.html",
  styleUrls: ["./infrastructure.component.css"],
})
export class InfrastructureComponent implements OnInit {
  infraData: any = [];
  multiImage: any = [];
  mainData: any = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getInfraDataById();
  }
  getImfraMultiImages(id: any) {
    this.homeService.getImfraMultiImageById(id).subscribe((res: any) => {
      this.multiImage = res;
    });
  }
  getInfraDataById() {
    this.homeService
      .getInfraDetails(localStorage.getItem("InstituteId"))
      .subscribe((res: any) => {
        this.infraData = res;
        this.infraData.forEach((element: any, index: any) => {
          element.cols = false;
        });
      });
  }
  open(i: any) {
    this.infraData[i].cols = true;
    this.infraData.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
      } else {
        element.cols = false;
      }
    });
  }
  close(i: any) {
    this.infraData[i].cols = true;
    this.infraData.forEach((element: any, index: any) => {
      element.cols = false;
    });
  }
}
