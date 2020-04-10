=== Comorbidites ===

= comorbidites

- (postscript) 
-> age(-> done)

- (done)

Le patient présente-il au moins une comorbidité, maladie chronique ou affection de longue durée telle que:

<ul>
  <li>diabète (type I ou II)?</li>
  <li>insuffisance rénale chronique dialysée?</li>
  <li>obésité (IMC>30kg/m<sup>3</sup>)?</li>
  <li>cancer évolutif?</li>
  <li>cirrhose?</li>
</ul>

<i> Pathologies chroniques respiratoires </i>

<ul>
  <li>asthme?</li>
  <li>mucoviscidose?</li>
  <li>broncho-pneumopathie chronique?</li>
  <li>bronchite chronique obstructive?</li>
  <li>autre pathologie chronique respiratoire?</li>
</ul>

<i> Antécédents cardio-vasculaires </i>

<ul>
  <li>hypertension artérielle compliquée?</li>
  <li>accident cardio-vasculaire?</li>
  <li>chirurgie cardiaque?</li>
  <li>insuffisance cardiaque?</li>
</ul>

<i> Immunodépression (congénitale ou acquise) </i> 

<ul>
  <li>chimiothérapie anti-cancéreuse?</li>
  <li>traitement immunodépresseur?</li>
  <li>biothérapie et/ou corticothérapie à dose immunosuppressive?</li>
  <li>VIH avec CD4<200/mm<sup>3</sup>?</li>
  <li>greffe d'organe solide?</li>
  <li>greffe de cellules-souches hématopoïétiques?</li>
  <li>hémopathie maligne en cours de traitement?</li>
</ul>

<i> Risques accrus de surinfection bactérienne </i>

<ul>
  <li>splénectomie?</li>
  <li>drépanocytose homozygote?</li>
</ul>

ou bien l'un au moins des facteurs de risques suivants:

<ul>
  <li>grossesse?</li>
  <li>siuation sociale précaire?</li>
/*  
  <li>fumeur?</li>
  <li>environnement familial et social isolé?</li>
  <li>présence à domicile d'une personne fragile?</li>
*/
</ul>


{TURNS_SINCE(-> Pneumonie_aigue)==2: 
+ Oui, au moins une comorbidité ou facteur de risque # CLASS: answ
-> end_hospital 

// car > 70 est un facteur de forme grave
+ {age_interval == 2} Non, aucune comorbidité ou facteur de risque # CLASS: answ
-> end_hospital

+ {age_interval < 2} Non, aucune comorbidité ou facteur de risque # CLASS: answ
-> Symptomes_mineurs

}

{TURNS_SINCE(->Symptomes_mineurs.syndrome_respiratoire)==2||TURNS_SINCE(->Symptomes_mineurs.toux)==2||TURNS_SINCE(->Symptomes_mineurs.fievre)==2||TURNS_SINCE(->Symptomes_mineurs.cephalee)==2||TURNS_SINCE(->Symptomes_mineurs.asthenie)==2||TURNS_SINCE(->Symptomes_mineurs.diarrhee)==2:

+ Oui # CLASS: answ
-> Tolerance_clinique 

// Even if minor symptoms w/o comorbidités, closely monitor patient
+ {age_interval > 0} Non # CLASS: answ
-> end_repos_surveillance

+ {age_interval == 0} Non # CLASS: answ
-> end_repos

}

=== Tolerance_clinique ===

La patiente a-t'elle une bonne tolérance clinique (pouls, TA, FR Sa02 si saturomètre) et une comorbidité stabilisée?

+ Oui # CLASS: answ
-> end_repos_surveillance
+ Non # CLASS: answ
-> end_hospital

=== age(-> return_to) ===

// 0 is for < 50 years, 1 for 50 to 70 and 2 for > 70
VAR age_interval=-1 // dummy value

Quel est l'âge du patient?

+ Moins de 50 ans # CLASS: answ
~ age_interval = 0 
-> return_to

+ Entre 50 et 70 ans # CLASS: answ
~ age_interval = 1 
-> return_to

+ Plus de 70 ans # CLASS: answ
~ age_interval = 2 
-> return_to
