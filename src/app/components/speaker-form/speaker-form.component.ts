import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.scss']
})
export class SpeakerFormComponent implements OnInit {

  @Input() speakerForm: FormGroup
  @Output() speakerNeedsChange = new EventEmitter()
  showNeedsDescription: boolean = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  checkSpeakerNeedsDoubleBed(event: MatCheckboxChange) {
    this.speakerNeedsChange.emit(event.checked)
    this.showNeedsDescription = event.checked
  }

}
