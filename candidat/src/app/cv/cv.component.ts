import {Component, OnInit} from '@angular/core';
import {Cv} from '../model/cv';
import {CvService} from '../services/cv.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {Education, Experience, Resume, Skill} from '../model/resume';
import {TestService} from "../services/test.service";
import {Router} from "@angular/router";


pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  resume = new Resume();
  Skill;
  degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];
  // cv = new Cv();
  // Cv
  //
  // constructor(private cvservice: CvService) {
  // }
  //

  //
  // recuper(centreinteret, choixphoto, couleur, presentation, formation, experience) {
  //   this.cv.centreinteret = centreinteret;
  //   this.cv.choixphoto = choixphoto;
  //   this.cv.couleur = couleur;
  //   this.cv.presentation = presentation;
  //   this.cv.formation = formation;
  //   this.cv.experience = experience;
  //
  //
  // }
  //
  // getonecv(id) {
  //   this.cvservice.getbyid(id).subscribe(res => {
  //     console.log(res);
  //     this.Cv = res;
  //   });
  // }


  constructor(private testservice: TestService, private router: Router) {
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
    if (!this.resume.experiences || this.resume.experiences.length === 0) {
      this.resume.experiences = [];
      this.resume.experiences.push(new Experience());
    }
    if (!this.resume.educations || this.resume.educations.length === 0) {
      this.resume.educations = [];
      this.resume.educations.push(new Education());
    }
    if (!this.resume.skills || this.resume.skills.length === 0) {
      this.resume.skills = [];
      this.resume.skills.push(new Skill());
    }
  }

  ngOnInit(): void {
  }

  addExperience() {
    this.resume.experiences.push(new Experience());
  }

  addEducation() {
    this.resume.educations.push(new Education());
  }

  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();

    switch (action) {
      case 'open':
        pdfMake.createPdf(documentDefinition).open();
        break;
      case 'print':
        pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download();
        break;

      default:
        pdfMake.createPdf(documentDefinition).open();
        break;
    }

  }


  resetForm() {
    this.resume = new Resume();
  }

  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          text: 'RESUME',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: this.resume.nom,
              style: 'nom'
            },
              {
                text: this.resume.prenom,
                style: 'prenom'
              },
              {
                text: this.resume.address
              },
              {
                text: 'Email : ' + this.resume.email,
              },
              {
                text: 'Contant No : ' + this.resume.numtel,
              },
              {
                text: 'postecherché : ' + this.resume.postecherche,
              },
              {
                text: 'GitHub: ' + this.resume.permisdeconduite,
                link: this.resume.permisdeconduite,
                color: 'blue',
              }
            ],
            [
              this.getProfilePicObject()
            ]
          ]
        },
        {
          text: 'Skills',
          style: 'header'
        },
        {
          columns: [
            {
              ul: [
                ...this.resume.skills.filter((value, index) => index % 3 === 0).map(s => s.value)
              ]
            },
            {
              ul: [
                ...this.resume.skills.filter((value, index) => index % 3 === 1).map(s => s.value)
              ]
            },
            {
              ul: [
                ...this.resume.skills.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ]
        },
        {
          text: 'Experience',
          style: 'header'
        },
        this.getExperienceObject(this.resume.experiences),

        {
          text: 'Education',
          style: 'header'
        },
        this.getEducationObject(this.resume.educations),
        {
          text: 'Other Details',
          style: 'header'
        },
        {
          text: this.resume.otherDetails
        },
        {
          text: 'Signature',
          style: 'sign'
        },
        {
          columns: [
            {qr: this.resume.nom + ', Contact No : ' + this.resume.numtel, fit: 100},
            {
              text: `(${this.resume.nom})`,
              alignment: 'right',
            }
          ]
        }
      ],
      info: {
        title: this.resume.nom + '_RESUME',
        author: this.resume.nom,
        subject: 'RESUME',
        keywords: 'RESUME, ONLINE RESUME',
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        nom: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
        }
      }
    };
  }

  getExperienceObject(experiences: Experience[]) {

    const exs = [];

    experiences.forEach(experience => {
      exs.push(
        [{
          columns: [
            [{
              text: experience.tacherealise,
              style: 'jobTitle'
            },
              {
                text: experience.posteocupe,
              },
              {
                text: experience.datedebut,
              },
              {
                text: experience.datefin,
              },
              {
                text: experience.villepaye,
              },
              {
                text: experience.nomsociete,
              }],
            {
              text: 'Experience : ' + experience.experience + ' Months',
              alignment: 'right'
            }
          ]
        }]
      );
    });

    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    };
  }

  getEducationObject(educations: Education[]) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'diplome',
            style: 'tableHeader'
          },
            {
              text: 'etablissement',
              style: 'tableHeader'
            },
            {
              text: 'datedebut',
              style: 'tableHeader'
            },
            {
              text: 'datefin',
              style: 'tableHeader'
            },
            {
              text: 'villepaye',
              style: 'tableHeader'
            },
          ],
          ...educations.map(ed => {
            return [ed.diplome, ed.etablissement, ed.datedebut, ed.datefin, ed.villepaye];
          })
        ]
      }
    };
  }

  getProfilePicObject() {
    if (this.resume.profilePic) {
      return {
        image: this.resume.profilePic,
        width: 75,
        alignment: 'right'
      };
    }
    return null;
  }

  fileChanged(e) {
    const file = e.target.files[0];
    this.getBase64(file);
  }

  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.resume.profilePic = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  addSkill() {
    this.resume.skills.push(new Skill());
  }

  logout() {
    localStorage.setItem('conected', 'false');
    localStorage.clear();
    window.location.reload();
  }

  gototest(Skill) {
    console.log(this.Skill)
    this.router.navigate(['/testcandidat/',Skill]);
  }
}
