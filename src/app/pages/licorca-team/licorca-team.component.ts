import { Component, OnInit } from '@angular/core';
import { LicorcaTeam } from 'src/app/model/licorcaTeam';

@Component({
  selector: 'app-licorca-team',
  templateUrl: './licorca-team.component.html',
  styleUrls: ['./licorca-team.component.scss']
})
export class LicorcaTeamComponent implements OnInit {

  licorcaTeam: LicorcaTeam[] = [
    {
      fullname: 'Cris Pampín',
      rol: 'Frontend dev - Solutio',
      photo: 'cris_p',
    },
    {
      fullname: 'Bárbara Román',
      rol: 'Jefaza - NOLT',
      photo: 'barbara',
    },
    {
      fullname: 'Daniel Rey',
      rol: 'Analista Programador - Coremain',
      photo: 'dani',
    },
    {
      fullname: 'Cristina Carrascal',
      rol: 'UX Engineer - Corunet',
      photo: 'cris_c',
    },
    {
      fullname: 'María Ozámiz',
      rol: 'Frontend dev - Z1',
      photo: 'maria',
    },
    {
      fullname: 'Laura Becerra',
      rol: 'Scout - Manfred',
      photo: 'laura',
    },
    {
      fullname: 'Cris Barreiro',
      rol: 'Android Engineer - Spotify',
      photo: 'cris_b',
    },
    {
      fullname: 'Moni Lamas',
      rol: 'Frontend dev & QA tester',
      photo: 'moni',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
