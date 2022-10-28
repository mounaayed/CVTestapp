import {Pipe, PipeTransform} from '@angular/core';
import {of} from "rxjs/index";

export interface Offers {
  titreposte;
  description;
  typecontrat;
  experienceexige;
  niveauetudeexige;
  datedebutpublication;
  datefinpublication;
  entreprise;

}

@Pipe({
  name: 'offer'
})
export class OfferPipe implements PipeTransform {

  transform(offer: Offers[], titreposte?: string, localisation?: string): Offers[] {

    if (!offer) return [];
    if (!titreposte && !localisation) return offer;

    offer = [...offer.filter(offer => offer.titreposte.includes(titreposte))];

    offer = [...offer.filter(offer => offer.entreprise[0].localisation.includes(localisation))];


    return offer;
  }
}
