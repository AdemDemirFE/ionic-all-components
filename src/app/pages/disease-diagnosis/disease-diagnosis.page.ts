import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { AiService } from 'src/app/services/ai.service';
@Component({
  selector: 'app-disease-diagnosis',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input type="text" [(ngModel)]="inputValue" name="input">
      <button type="submit">Predict</button>
    </form>
  `,
  templateUrl: './disease-diagnosis.page.html',
  styleUrls: ['./disease-diagnosis.page.scss'],
})
export class DiseaseDiagnosisPage implements OnInit {

  inputValue: string;
  constructor(private aiService: AiService) { }

  ngOnInit() {
    this.aiService.loadmodel();
  }

}
