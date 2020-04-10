=== Gravite ===

Sommes-nous en présence d'au moins un signe de gravité tel que:

<ul>
  <li>polypnée avec fréquence respiratoire > 22 cycles/minute?</li>
  {saturometre_==1: <li>oxymétrie de pouls (SpO2) < 95% en air ambiant?</li>}
  {tensiometre_==1: <li>pression artérielle systolique < 100mmHg?</li>}
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

=== Pneumonie_aigue ===

VAR pneumo=0 // by default, no pneumopathie 

La patiente présente-elle des signes cliniques de pneumopathie aiguë?
+ Oui # CLASS: answ
~ pneumo = 1 
-> Comorbidites
+ Non # CLASS: answ
-> Symptomes_mineurs


