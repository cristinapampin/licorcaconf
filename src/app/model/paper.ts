export interface Paper {
  paperForm: PaperForm,
  speakerForm: SpeakerForm,
  secondSpeakerForm?: SpeakerForm
}


interface PaperForm {
  titlePaper: string
  descriptionPaper: string
  topicPaper: string
  firstTalk: boolean
  needMentoring: boolean
  commentsPaper: string
  isDoublePaper: boolean
}


interface SpeakerForm {
  speakerFullName: string
  speakerMail: string
  speakerBio: string
  speakerTwitter: string
  speakerPronoun: string
  speakerOtherPronoun: string
  speakerRole: string
  speakerSeniority: string
  isDoublePaper: boolean
  speakerNeedsDoubleBed: boolean
  speakerNeedsDescription: string
  speakerLocation: string
  commentsSpeaker: string
}
