export class Resume {
  profilePic: string;
  nom: string;
  prenom: string;
  address: string;
  numtel: number;
  email: string;
  permisdeconduite: string;
  postecherche: string;
  experiences: Experience[] = [];
  educations: Education[] = [];
  otherDetails: string;
  skills: Skill[] = [];

  constructor() {
    this.experiences.push(new Experience());
    this.educations.push(new Education());
    this.skills.push(new Skill());
  }
}

export class Experience {
  posteocupe: string;
  tacherealise: string;
  nomsociete: string;
  datedebut: Date;
  datefin: Date;
  villepaye: string;
  experience: number;
}

export class Education {
  diplome: string;
  etablissement: string;
  datedebut: Date;
  datefin: Date;
  villepaye: string;
}

export class Skill {
  value: string;
}
