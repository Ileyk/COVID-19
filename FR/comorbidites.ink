=== Comorbidites ===

= comorbidites_0

La patiente est-elle diabétique (type I ou II) et/ou souffre-t'elle d'hypertension artérielle?

+ Non # CLASS: answ
-> comorbidites_1
+ Oui # CLASS: answ
-> comorbidites_summary

= comorbidites_1

Le patient présente-il au moins une comorbidité, maladie chronique ou affection de longue durée telle que:

<ul>
/*  <li>diabète (type I ou II)</li>
*/  <li>insuffisance rénale chronique dialysée</li>
  <li>obésité (IMC>30kg/m<sup>3</sup>)</li>
  <li>cancer évolutif</li>
  <li>cirrhose</li>
</ul>

+ Non # CLASS: answ 
-> comorbidites_2
+ Oui # CLASS: answ
-> comorbidites_summary

= comorbidites_2

La patiente présente-elle au moins une pathologie chronique respiratoire telle que:

<ul>
  <li>asthme</li>
  <li>mucoviscidose</li>
  <li>broncho-pneumopathie chronique</li>
  <li>bronchite chronique obstructive</li>
  <li>autre pathologie chronique respiratoire</li>
</ul>

+ Non # CLASS: answ 
-> comorbidites_3
+ Oui # CLASS: answ
-> comorbidites_summary

= comorbidites_3

La patiente présente-elle au moins une pathologie cardio-vasculaire ou des antécédents tels que:

<ul>
/*  <li>hypertension artérielle</li>
*/  <li>accident cardio-vasculaire</li>
  <li>chirurgie cardiaque</li>
  <li>insuffisance cardiaque</li>
</ul>

+ Non # CLASS: answ 
-> comorbidites_4
+ Oui # CLASS: answ
-> comorbidites_summary

= comorbidites_4

Le patient souffre-t'il d'immunodéficience (congénitale ou acquise) dûe à l'un des facteurs suivants?

<ul>
  <li>chimiothérapie anti-cancéreuse</li>
  <li>traitement immunodépresseur</li>
  <li>biothérapie et/ou corticothérapie à dose immunosuppressive</li>
  <li>VIH avec CD4<200/mm<sup>3</sup></li>
  <li>greffe d'organe solide</li>
  <li>greffe de cellules-souches hématopoïétiques</li>
  <li>hémopathie maligne en cours de traitement</li>
</ul>

+ Non # CLASS: answ 
-> comorbidites_5
+ Oui # CLASS: answ
-> comorbidites_summary

= comorbidites_5

Y a-t'il des risques accrus de surinfection bactérienne dûs, par exemple, à:

<ul>
  <li>une splénectomie</li>
  <li>une drépanocytose homozygote</li>
</ul>

+ Non # CLASS: answ 
-> comorbidites_6
+ Oui # CLASS: answ
-> comorbidites_summary

= comorbidites_6

La patiente présente-elle l'un au moins des facteurs de risques suivants:

<ul>
  <li>grossesse</li>
  <li>siuation sociale précaire</li>
/*  
  <li>présence à domicile d'une personne fragile?</li>
*/
</ul>

{pneumo==1:
    + Non # CLASS: answ 
    -> Pneumo_post_check
- else:
    + Non # CLASS: answ
    {Symptomes_mineurs.diarrhee: -> Symptomes_mineurs.diar_age_choice | -> Symptomes_mineurs.diarrhee}
}

+ Oui # CLASS: answ
-> comorbidites_summary

= comorbidites_summary

{pneumo==1:
    -> end_hospital 
- else:
    -> Tolerance_clinique 
}

=== Pneumo_post_check ===

// Is the person > 70 years or a smoker?

- (postscript) 
-> age(-> done_1)
- (done_1)
{age_interval==2: -> end_repos_surveillance}
-> fumeur(-> done_2)
- (done_2)
{fume==1: -> end_repos_surveillance}

-> end_repos 

=== Tolerance_clinique ===

La patiente a-t'elle une bonne tolérance clinique (pouls{tensiometre_==1:, TA}{saturometre_==1:, FR Sa02}) et une comorbidité stabilisée?

+ Oui # CLASS: answ
-> end_repos_surveillance
+ Non # CLASS: answ
-> end_hospital

=== age(-> return_to) ===

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

=== fumeur(-> return_to) ===

VAR fume=0 // by default, does not smoke

La patiente fume-t'elle?

+ Oui 
~ fume=1
-> return_to

+ Non 
~ fume=0
-> return_to