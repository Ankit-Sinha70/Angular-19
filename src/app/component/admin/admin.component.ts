import { Component } from '@angular/core';
import { ProgressBarComponent } from "../../Reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../Reusable/tabs/tabs.component";

@Component({
  selector: 'app-admin',
  imports: [ProgressBarComponent, TabsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  progress = 0;
  selectedTab = 'This is the selected tab';


  ngOnInit() {
    setInterval(() => {
      this.progress += 1;
    }, 2000);
  }

  onTabChange(tab: string) {
    console.log(tab);
    this.selectedTab = tab;
  }
}
