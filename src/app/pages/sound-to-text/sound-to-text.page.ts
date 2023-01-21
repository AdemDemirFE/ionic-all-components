import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ChangeDetectorRef } from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';;

@Component({
  selector: 'app-sound-to-text',
  templateUrl: './sound-to-text.page.html',
  styleUrls: ['./sound-to-text.page.scss'],
})
export class SoundToTextPage {

  matches: String[];
  isRecording = false;
  isRecording1 = false;
  istext = false;
  recognition: any;
  text: string;
  public words: any
 constructor(private navCtrl: NavController, private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef, private tts: TextToSpeech, private plt: Platform) {

 }
  isIos() {
    return this.plt.is('ios');
  }
 onChange(value){
    console.log(value);
    if(value){
      this.istext = true;
    }else{
      this.istext = false;
    }
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }

  ngOnInit(){
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }
  // this.getPermission();
  startListening() {
    debugger;
    this.isRecording = true;
    let options = {
      language: 'tr-TR'
    }
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();
      this.isRecording1 = true;
      this.isRecording = false;
    }, (err) => {
      alert(JSON.stringify(err));
    });;
    
  }

  startListening2() {
    debugger;
    this.speechRecognition.startListening().subscribe((speeches) => {
      alert(speeches[0]);
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }



  checkPermission() {
    this.speechRecognition.hasPermission().then((permission) => {
      if (permission) {
        alert('You have permission for speech recognition');
      } else {
        alert('You do not have permission for speech recognition');
      }
    }, (err) => {
      alert(JSON.stringify(err));
    }
    );
  }

  requestPermission() {
    this.speechRecognition.requestPermission().then((data) => {
      alert(JSON.stringify(data));
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }



  
 }