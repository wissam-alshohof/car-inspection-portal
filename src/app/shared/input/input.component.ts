import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [],
  viewProviders: [
    { provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf:true})}
  ]
})
export class InputComponent implements OnInit {


  @Input({required:true}) label:string ="";
  @Input({required:true}) keyName : string = "";
  @Input({required:true}) type : string = "";

  _parentContainer =inject(ControlContainer);

  get parentGroup(){
    return this._parentContainer.control as FormGroup
  }

  ngOnInit(): void {
    this.parentGroup.addControl(this.keyName, new FormControl() )
  }

}
