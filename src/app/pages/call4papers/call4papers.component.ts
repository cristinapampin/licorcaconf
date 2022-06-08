import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-call4papers',
  templateUrl: './call4papers.component.html',
  styleUrls: ['./call4papers.component.scss']
})
export class Call4papersComponent implements OnInit {
  paperForm: FormGroup
  speakerForm: FormGroup
  secondSpeakerForm: FormGroup
  paperHas2Speakers: boolean

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createPaperform()
    this.speakerForm = this.createSpeakerform()
  }
  createPaperform() {
    this.paperForm = this.formBuilder.group({
      typePaper: ['', Validators.required],
      titlePaper: ['', Validators.required],
      descriptionPaper: ['', [Validators.required, Validators.minLength(350)]],
      topicPaper: ['', Validators.required],
      firstTalk: false,
      needMentoring: false,
      commentsPaper: [''],
      isDoublePaper: false
      //legalAccept: false
    })
  }

  createSpeakerform() {
    return this.formBuilder.group({
      speakerFullName: ['', Validators.required],
      speakerMail: ['', [Validators.required, Validators.email]],
      speakerBio: ['', [Validators.required, Validators.minLength(250)]],
      speakerTwitter: [''],
      speakerPronoun: ['', Validators.required],
      speakerRole: ['', Validators.required],
      speakerSeniority: ['', Validators.required],
      isDoublePaper: false,
      speakerNeedsDoubleBed: false,
      speakerNeedsDescription: [''],
      speakerLocation: ['', Validators.required],
      commentsSpeaker: [''],
    })
  }

  onChangeDoublePaper(isDoublePaper: boolean) {
    this.paperHas2Speakers = isDoublePaper
    if (isDoublePaper) {
      this.secondSpeakerForm = this.createSpeakerform()
    } else {
      delete this.secondSpeakerForm
    }
  }

  onChangeSpekerNeeds(speakerNeedsDoubleBed: boolean) {
    if (speakerNeedsDoubleBed) {
      this.speakerForm.get('speakerNeedsDescription').addValidators([Validators.required])
    } else {
      this.speakerForm.get('speakerNeedsDescription').clearValidators()
      this.speakerForm.get('speakerNeedsDescription').setValue('')
    }
  }

  sendPaper() {
    console.log(this.paperForm.value, this.speakerForm.value, this.secondSpeakerForm.value)

  }

}
