import { Restaurant } from './restaurant';

export const restaurants: Restaurant[] = [
  // tslint:disable-next-line:max-line-length
  {'check': false, 'nom': 'Le plan B', 'adresse': '15 rue Jean Jacques Rousseau', 'dateDerniereVisite': '12/02/2019', 'note': null, 'nombreVisite': 1, 'nombreCommentaire': 2, 'latitude': 47.211665, 'longitude': -1.546741, 'commentaire': [{'auteur': 'Antoine', 'texte': 'Kampai !'}, {'auteur': 'Nicolas', 'texte': 'ng::deep forever.'}], 'restaurantId': 0},
  // tslint:disable-next-line:max-line-length
  {'check': false, 'nom': 'Bento Sakura', 'adresse': '17 rue Louis Blanc', 'dateDerniereVisite': '03/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 0, 'latitude': 47.206266, 'longitude': -1.554663, 'commentaire': [], 'restaurantId': 1},
  // tslint:disable-next-line:max-line-length
  {'check': false, 'nom': 'La grande barge', 'adresse': '8 rue grande biesse', 'dateDerniereVisite': '03/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 0, 'latitude': 47.206662, 'longitude': -1.549185, 'commentaire': [], 'restaurantId': 2},
  // tslint:disable-next-line:max-line-length
  {'check': false, 'nom': 'Le grand B', 'adresse': '43 rue grande biessa', 'dateDerniereVisite': '03/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 0, 'latitude': 47.205504, 'longitude': -1.548631, 'commentaire': [], 'restaurantId': 3},
  // tslint:disable-next-line:max-line-length
  {'check': false, 'nom': 'Le melting potes', 'adresse': '26 bd de la prairie au Duc', 'dateDerniereVisite': '03/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 0, 'latitude': 47.205181, 'longitude': -1.557784, 'commentaire': [], 'restaurantId': 4},
  // tslint:disable-next-line:max-line-length
  {'check': false, 'nom': 'Le Louis Blanc', 'adresse': '2 bd Victor Hugo', 'dateDerniereVisite': '01/08/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 0, 'latitude': 47.207247, 'longitude': -1.555297, 'commentaire': [], 'restaurantId': 5},
  // tslint:disable-next-line:max-line-length
  {'check': false, 'nom': 'Les fonderies', 'adresse': '25 bd Vincent Gâche', 'dateDerniereVisite': '01/08/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 0, 'latitude': 47.206011, 'longitude': -1.545338, 'commentaire': [], 'restaurantId': 6},
];

// Ancienne version
// export const restaurants: Restaurant[] = [
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'La cantine du coin', 'adresse': '22 rue d\'Angular', 'dateDerniereVisite': '12/02/2019', 'note': null, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Olga', 'texte': 'Pas mal, même si ça manque de kimchi.'}, {'auteur': 'Romain', 'texte': 'Permet de faire une coupure entre 2 UST back.'}], 'restaurantId': 0},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Au joyeux serial killer', 'adresse': '14 rue Jack l\'éventreur', 'dateDerniereVisite': '03/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Antoine', 'texte': 'Le patron me regardait avec un sourire bizarre.'}, {'auteur': 'Nicolas', 'texte': 'Ambiance colorée et sympatique.'}], 'restaurantId': 1},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Goldorak go !!', 'adresse': '78 rue Go Nagaï', 'dateDerniereVisite': '01/01/2019', 'note': 5, 'nombreVisite': 2, 'nombreCommentaire': 4, 'commentaire': [{'auteur': 'Romain', 'texte': 'La brochette grillée au Cornofulgur est top.'}, {'auteur': 'Olga', 'texte': 'Je suis trop jeune pour avoir ce type de référence 😅.'}, {'auteur': 'Nicolas', 'texte': 'Les couleurs du Rétrolazer me font penser à une licorne.'}, {'auteur': 'Gilles', 'texte': 'Cuisine typique d\'Euphore.'}], 'restaurantId': 2},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Une frite sinon rien', 'adresse': '7 rue de Belgique', 'dateDerniereVisite': '11/01/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 0, 'commentaire': [], 'restaurantId': 3},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'A la salade alcoolique', 'adresse': '43 rue de la vodka', 'dateDerniereVisite': '08/01/2019', 'note': 4, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Johan', 'texte': 'Dommage : la bière ne fait que 23°.'}, {'auteur': 'Marie', 'texte': 'Mon fils a bien aimé le whisky maison.'}], 'restaurantId': 4},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Chez Johan et Marie', 'adresse': '17 rue du Burn Down', 'dateDerniereVisite': '27/01/2019', 'note': 5, 'nombreVisite': 3, 'nombreCommentaire': 5, 'commentaire': [{'auteur': 'Nicolas', 'texte': 'Pas mal, même si la salade d\'ano est un peu indigeste.'}, {'auteur': 'Romain', 'texte': 'C\'est original d\'écrire le menu sur des post\'it.'}, {'auteur': 'Olga', 'texte': 'Difficile de juger : je n\'y reste que 50 % du temps normal.'}, {'auteur': 'Gilles', 'texte': 'Ici, le "ice breaker" ne concerne pas que les glaçons.'}, {'auteur': 'Antoine', 'texte': 'Les portions sont généreuses, et on a souvent du mal à finir.'}], 'restaurantId': 5},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Le cri de la carotte', 'adresse': '29 rue vegan', 'dateDerniereVisite': '16/02/2019', 'note': 4, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Olga', 'texte': 'Parfait : il y a plein de sorte de purées différentes.'}, {'auteur': 'Gilles', 'texte': 'Il n\'y a que l\'embarras du choix 😍.'}], 'restaurantId': 6},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'L\'indigestion fatale', 'adresse': '33 rue du Dr Petiot', 'dateDerniereVisite': '14/01/2019', 'note': null, 'nombreVisite': 1, 'nombreCommentaire': 1, 'commentaire': [{'auteur': 'Nicolas', 'texte': 'N\'y allez pas, c\'est ... arrrrrrrrrrg !'}], 'restaurantId': 7},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Au coréen sex-shop', 'adresse': '69 rue du X', 'dateDerniereVisite': '31/01/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 1, 'commentaire': [{'auteur': 'Romain', 'texte': 'J\'ai trouvé un poil dans mon assiette : ça m\'inquiète.'}], 'restaurantId': 8},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Bar de la Poste', 'adresse': '1 rue de la poste', 'dateDerniereVisite': '05/02/2019', 'note': 4, 'nombreVisite': 2, 'nombreCommentaire': 4, 'commentaire': [{'auteur': 'Gilles', 'texte': 'Incontournable pour n\'importe quel facteur.'}, {'auteur': 'Nicolas', 'texte': 'Tiens, il n\'y a aucune boisson sans alcool ?'}, {'auteur': 'Johan', 'texte': 'Endroit fort sympathique.'}, {'auteur': 'Olga', 'texte': 'Un grand moment de nostalgie.'}], 'restaurantId': 9},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Le poil dans la main', 'adresse': '57 rue de la grosse touffe', 'dateDerniereVisite': '26/01/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Marie', 'texte': 'J\'ai la flemme d\'écrire un commentaire.'}, {'auteur': 'Antoine', 'texte': 'L\'endroit idéal pour ne rien faire.'}], 'restaurantId': 10},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Le chinois traditionnel', 'adresse': '32 rue de 中华人民共和国', 'dateDerniereVisite': '14/02/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 1, 'commentaire': [{'auteur': 'Nicolas', 'texte': 'Cette escalope de chat n\'était pas si mauvaise.'}], 'restaurantId': 11},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'La citrouille de Cendrillon', 'adresse': '54 rue de la princesse', 'dateDerniereVisite': '13/02/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Antoine', 'texte': 'Impossible de rester manger après minuit.'}, {'auteur': 'Olga', 'texte': 'J\'ai perdu une chaussure en sortant de ce restaurant.'}], 'restaurantId': 12},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Chez Jean Bombeur', 'adresse': '26 rue du sandwich', 'dateDerniereVisite': '31/01/2019', 'note': null, 'nombreVisite': 2, 'nombreCommentaire': 3, 'commentaire': [{'auteur': 'Romain', 'texte': 'Le panini sprint boot est sympa.'}, {'auteur': 'Marie', 'texte': 'Parfait pour un déjeuner rapide entre 10 réunions.'}, {'auteur': 'Gilles', 'texte': 'Le sandwich purée/pâtes est un peu bourratif.'}], 'restaurantId': 13},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Star Wars fast food', 'adresse': '7 rue de la Force', 'dateDerniereVisite': '18/01/2019', 'note': 3, 'nombreVisite': 1, 'nombreCommentaire': 0, 'commentaire': [], 'restaurantId': 14},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Le petit patapon', 'adresse': '47 allée du éronéron', 'dateDerniereVisite': '07/01/2019', 'note': 4, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Johan', 'texte': 'Il était une bergère 🎵 ...'}, {'auteur': 'Romain', 'texte': 'Ambiance bon enfant.'}], 'restaurantId': 15},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Rambo\'s kitchen', 'adresse': '87 rue du la guerre', 'dateDerniereVisite': '20/01/2019', 'note': 5, 'nombreVisite': 3, 'nombreCommentaire': 3, 'commentaire': [{'auteur': 'Nicolas', 'texte': 'On ressent l\'influence vietnamienne dans la cuisine.'}, {'auteur': 'Gilles', 'texte': 'J\'ai du désamorcer 3 pièges pour pouvoir aller aux toilettes.'}, {'auteur': 'Antoine', 'texte': 'A côté de ça, "Cauchemard en cuisine", c\'est de la rigolade.'}], 'restaurantId': 16},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Marie à tout prix', 'adresse': '29 rue de la blague nulle', 'dateDerniereVisite': '06/02/2019', 'note': 4, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Romain', 'texte': 'Il y a en effet tous les prix : assez cher, cher, très cher, ...'}, {'auteur': 'Marie', 'texte': 'Je n\'ai aucun lien avec cet établissement !'}], 'restaurantId': 17},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'La cuisine agile', 'adresse': '108 boulevard Scrum', 'dateDerniereVisite': '04/01/2019', 'note': null, 'nombreVisite': 1, 'nombreCommentaire': 3, 'commentaire': [{'auteur': 'Gilles', 'texte': 'Non, ce n\'est pas ma cuisine !'}, {'auteur': 'Nicolas', 'texte': 'Le cuisinier s\'adapte aux demandes des clients.'}, {'auteur': 'Marie', 'texte': 'C\'est mon Q G.'}], 'restaurantId': 18},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'La guinguette', 'adresse': '62 rue longue', 'dateDerniereVisite': '01/02/2019', 'note': null, 'nombreVisite': 1, 'nombreCommentaire': 1, 'commentaire': [{'auteur': 'Romain', 'texte': 'Ca va bien ouvrir un jour ...'}], 'restaurantId': 19},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'La licorne enchantée', 'adresse': '101 rue de la drogue', 'dateDerniereVisite': '15/02/2019', 'note': 4, 'nombreVisite': 2, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Nicolas', 'texte': 'C\'est trop bien : je suis fan.'}, {'auteur': 'Johan', 'texte': 'Il faut entrer un code secret pour acceder au menu !'}], 'restaurantId': 20},
     // tslint:disable-next-line:max-line-length
//     {'check': false, 'nom': 'Game over', 'adresse': '117 rue de la fin', 'dateDerniereVisite': '06/01/2019', 'note': 2, 'nombreVisite': 1, 'nombreCommentaire': 2, 'commentaire': [{'auteur': 'Marie', 'texte': 'Encore "Inser coin" ? C\'est bien la dernière fois que j\'y vais.'}, {'auteur': 'Olga', 'texte': 'Plutôt déprimant : je préfère aller au "Continue".'}], 'restaurantId': 21},
//   ];
