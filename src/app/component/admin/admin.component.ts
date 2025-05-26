import { Component } from '@angular/core';
import { ProgressBarComponent } from "../../Reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../Reusable/tabs/tabs.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  imports: [ProgressBarComponent, TabsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private httpClient: HttpClient) {
    this.getUsers();
  }

  progress = 0;
  selectedTab = 'This is the selected tab';


  // ngOnInit() {
  //   setInterval(() => {
  //     this.progress += 1;
  //   }, 2000);
  // }

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
