import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ocrAngular';
  public extractedText: string = '';
  fileToUpload: File | null = null;

  constructor() {}

  ngOnInit() {
    // let myImage = 'assets/img/abcdefg.png';
    // Tesseract.recognize(myImage).then((result) => {
    //   console.log(result);
    //   console.log('Texto extraído da Imagem: ', result.data.text);
    //   this.extractedText = result.data.text;
    // });
  }

  public handleFileInput(event: any) {
    console.log(event.target.files[0]);
    Tesseract.recognize(event.target.files[0]).then((result) => {
      console.log(result);
      console.log('Texto extraído da Imagem: ', result.data.text);
      this.extractedText = result.data.text;
    });
  }
}
