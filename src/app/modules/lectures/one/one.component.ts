import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HelperComponent } from '../helper/helper.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  helpTaskOne() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskTwo() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskThree() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskFour() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskFive() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskSix() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskSeven() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskEight() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskNine() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskTen() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }

  helpTaskEleven() {
    const tip = `
    Mit SELECT * FROM 'Tabelle' 
    kann man sich alle Daten einer
    Tabelle anzeigen lassen.`

    this.helperFunction(tip)
  }










  
  helperFunction(tip : string) {
    this.dialog.open(HelperComponent, {
      width      : '100%',
      maxWidth   : '400px',
      height     : 'auto',
      hasBackdrop: true,
      maxHeight  : '700px',
      panelClass : 'personal-details-dialog',
      data       : {
          message: tip
      },
    });
  }



  /* 
  UserInput --> Replace
  empty lines, empty space at the end & beginning, replace " with ' 
  */
  trim(userInput: string) {
    return userInput
      .replace(/^\s*\n/gm, "")
      .split('"')
      .join("'")
      .split(/\r?\n/)
      .filter((line) => line.trim() !== "")
      .join("\n");
  }
}
