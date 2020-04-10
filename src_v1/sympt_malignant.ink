=== Gravite ===

Sommes-nous en présence d'au moins un signe de gravité tel que:

<ul>
  <li>polypnée avec fréquence respiratoire > 22 cycles/minute?</li>
  <li>oxymétrie de pouls (SpO2) < 95% en air ambiant?</li>
  <li>pression artérielle systolique < 100mmHg?</li>
  <li>troubles de la vigilance, altération de la conscience, confusion, somnolence?</li>
  <li>déshydratation?</li>
  <li>altération brutale de l'état général chez la personne âgée?</li>
  <li>cyanose des extrémités?</li>
  <li>difficulté à terminer ses phrases sans pause?</li>
</ul>

+ Oui # CLASS: answ
-> end_hospital_hurry
+ Non # CLASS: answ
-> SDRA

=== SDRA ===

La personne présente-elle un syndrome de détresse respiratoire aiguë (tirage, lèvres cyanosées)?
+ Oui # CLASS: answ
-> end_hospital_hurry
+ Non # CLASS: answ
-> Pneumonie_aigue

/* 
= cause_1

Y a-t'il une possible contamination COVID-19 par l'entourage?
// Y a-t'il un contexte viral clinique? 

+ Oui # CLASS: answ
-> cause_2
+ Non # CLASS: answ
-> end_no_covid_but_something
+ Ne peut pas se prononcer # CLASS: answ
-> cause_2

= cause_2

Existe-il une autre étiologie que le COVID-19 évidente d'emblée?
+ Oui # CLASS: answ
-> end_no_covid_but_something
+ Non # CLASS: answ
-> end_hospital
*/

=== Pneumonie_aigue ===

La patiente présente-elle des signes cliniques de pneumopathie aiguë?
+ Oui # CLASS: answ
-> Comorbidites
+ Non # CLASS: answ
-> Symptomes_mineurs

/*
= fragile

S'agit-il d'un terrain fragile?
+ Oui # CLASS: answ
-> end_hospital
+ Non # CLASS: answ
-> Comorbidite
+ Ne peut pas se prononcer # CLASS: answ
-> Comorbidite

*/

