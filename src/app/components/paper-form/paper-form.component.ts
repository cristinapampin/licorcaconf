import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
@Component({
  selector: 'app-paper-form',
  templateUrl: './paper-form.component.html',
  styleUrls: ['./paper-form.component.scss']
})
export class PaperFormComponent implements OnInit {
  @Input() paperForm: FormGroup
  @Output() isDoublePaper = new EventEmitter()

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  checkIsDoublePaper(event: MatCheckboxChange) {
    this.isDoublePaper.emit(event.checked)
  }


}
