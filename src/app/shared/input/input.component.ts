import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [ ],
  viewProviders: [
    { provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf:true})}
  ]
})
export class InputComponent implements OnInit {


  @Input() label:string ="";
  @Input() keyName : string = "";

  _parentContainer =inject(ControlContainer);

  get parentGroup(){
    return this._parentContainer.control as FormGroup
  }

  ngOnInit(): void {
    this.parentGroup.addControl(this.keyName, new FormControl() )
  }

}
