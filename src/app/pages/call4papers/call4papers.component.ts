import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { typePaper } from 'src/app/model/typePaper.enum';

@Component({
  selector: 'app-call4papers',
  templateUrl: './call4papers.component.html',
  styleUrls: ['./call4papers.component.scss']
})
export class Call4papersComponent implements OnInit {

  paperForm: FormGroup
  typePaper: typePaper

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createPaperform()
  }

  createPaperform() {
    this.paperForm = this.formBuilder.group({
      typePaper: ['', Validators.required],
      titlePaper: ['', Validators.required],
      descriptionPaper: ['', [Validators.required, Validators.minLength(350)]],
      topicPaper: ['', Validators.required],
      firstTalk: [''],
      needMentoring: [''],
      commentsPaper: [''],
      speakerFullName: ['', Validators.required],
      speakerMail: ['', [Validators.required, Validators.email]],
      speakerBio: ['', [Validators.required, Validators.minLength(250)]],
      speakerTwitter: [''],
      speakerPronoun: ['', Validators.required],
      speakerRole: ['', Validators.required],
      speakerSeniority: ['', Validators.required],
      isDoublePaper: [''],
      speakerNeedsDoubleBed: [''],
      speakerLocation: ['', Validators.required],
      commentsSpeaker: [''],
    })
  }

  savePaper() {
    console.log(this.paperForm.value, this.paperForm.valid)
  }
}
