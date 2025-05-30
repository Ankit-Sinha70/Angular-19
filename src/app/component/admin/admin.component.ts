import { Component, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { ProgressBarComponent } from "../../Reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../Reusable/tabs/tabs.component";
import { HttpClient } from '@angular/common/http';
import { MyCardComponent } from "../../Reusable/my-card/my-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MyCardComponent,
    ProgressBarComponent,
    TabsComponent
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit {
  constructor(private httpClient: HttpClient) {
    this.getUsers();
  }

  progress = 0;
  selectedTab = 'This is the selected tab';

  @ViewChild('myTeamContent') myTeamContent!: TemplateRef<any>;

  // ngOnInit() {
  //   setInterval(() => {
  //     this.progress += 1;
  //   }, 2000);
  // }

  ngAfterViewInit() {
    // myTeamContent will be available here
    // console.log(this.myTeamContent);
  }

  onTabChange(tab: string) {
    console.log(tab);
    this.selectedTab = tab;
  }

  getUsers(){
    this.httpClient.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe((res:any) => {
      console.log(res, "res");
      debugger
    })
  }
}
