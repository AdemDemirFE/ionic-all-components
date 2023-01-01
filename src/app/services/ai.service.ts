import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs'
@Injectable({
  providedIn: 'root'
})
export class AiService {

  model: tf.LayersModel;
  async loadmodel() {
    this.model = await tf.loadLayersModel('assestes/model.json');
  }
  async predict(input: tf.Tensor) {
    return this.model.predict(input);
  }
  constructor() { }
}
