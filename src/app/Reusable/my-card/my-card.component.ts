import { Component, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-my-card',
  imports: [NgTemplateOutlet],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css'
})
export class MyCardComponent {

  @Input() cardTitle: string = ""
  @Input() htmlTemplate!:TemplateRef<Element>
  @Input() data: any

  
}
