import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { SpeakerPronounEnum } from 'src/app/model/speakerPronoun.enum';

@Component({
  selector: 'app-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.scss']
})
export class SpeakerFormComponent implements OnInit {

  @Input() speakerForm: FormGroup
  @Output() speakerPronounChange = new EventEmitter()
  @Output() speakerNeedsChange = new EventEmitter()
  speakerPronounEnum: SpeakerPronounEnum
  showPronounInput: boolean = false
  showNeedsDescription: boolean = false


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  checkSpeakerPronoun(event: MatSelectChange) {
    this.speakerPronounChange.emit(event.value)
    this.showPronounInput = (event.value === SpeakerPronounEnum.otro) ? true : false
  }

  checkSpeakerNeedsDoubleBed(event: MatCheckboxChange) {
    this.speakerNeedsChange.emit(event.checked)
    this.showNeedsDescription = event.checked
  }

}
