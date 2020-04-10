=== Comorbidites ===

= comorbidites_0

Does the patient have diabetes (type 1 or 2) and/or arterial hypertension?

+ No # CLASS: answ
-> comorbidites_1
+ Yes # CLASS: answ
-> comorbidites_summary

= comorbidites_1

Does the patient present at least one comorbidity, chronic disease or a long term condition such as:

<ul>
/*  <li>diabète (type I ou II)</li>
*/  <li>chronic renal insufficiency on dialysis</li>
  <li>obesity (BMI>30)</li>
  <li>evolving cancer</li>
  <li>cirrhosis</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_2
+ Yes # CLASS: answ
-> comorbidites_summary

= comorbidites_2

Does the patient present at least one chronic respiratory disease such as:

<ul>
  <li>asthma</li>
  <li>cystic fibrosis</li>
  <li>chronic broncho-pneumopathy</li>
  <li>chronic obstructive pulmonary disease</li>
  <li>other chronic respiratory pathology</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_3
+ Yes # CLASS: answ
-> comorbidites_summary

= comorbidites_3

Does the patient present at least one cardiovascular disease or have a medical history of cardiovascular disease such as:

<ul>
/*  <li>hypertension artérielle</li>
*/  <li>heart surgery</li>
  <li>heart failure</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_4
+ Yes # CLASS: answ
-> comorbidites_summary

= comorbidites_4

Does the patient suffer from immunodeficiency (congenital or acquired) due to one of the following factors?

<ul>
  <li>anti-cancer chemotherapy</li>
  <li>immunosuppressive treatment</li>
  <li>biotherapy and/or corticotherapy with immunosuppressive dose</li>
  <li>HIV with CD4<200/mm<sup>3</sup></li>
  <li>solid organ transplantation</li>
  <li>hematopoietic stem cell transplantation</li>
  <li>malignant hemopathy under treatment</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_5
+ Yes # CLASS: answ
-> comorbidites_summary

= comorbidites_5

Are there increased risks of bacterial superinfection due, for instance, to:

<ul>
  <li>a splenectomy</li>
  <li>homozygous sickle cell anemia</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_6
+ Yes # CLASS: answ
-> comorbidites_summary

= comorbidites_6

Does the patient present at least one of the following risk factors:

<ul>
  <li>pregnancy</li>
  <li>in a vulnerable socio-economic situation</li>
/*  
  <li>présence à domicile d'une personne fragile?</li>
*/
</ul>

{pneumo==1:
    + No # CLASS: answ 
    -> Pneumo_post_check
- else:
    + No # CLASS: answ
    {Symptomes_mineurs.diarrhee: -> Symptomes_mineurs.diar_age_choice | -> Symptomes_mineurs.diarrhee}
}

+ Yes # CLASS: answ
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

Does the patient have a good clinical tolerance (pulse{tensiometre_==1:, blood pressure}{saturometre_==1:, respiratory frequency Sa02}) and a stabilized comorbidity?

+ Yes # CLASS: answ
-> end_repos_surveillance
+ No # CLASS: answ
-> end_hospital

=== age(-> return_to) ===

VAR age_interval=-1 // dummy value

How old is the patient?

+ Less than 50 years old # CLASS: answ
~ age_interval = 0 
-> return_to

+ Between 50 and 70 years old # CLASS: answ
~ age_interval = 1 
-> return_to

+ More than 70 years old # CLASS: answ
~ age_interval = 2 
-> return_to

=== fumeur(-> return_to) ===

VAR fume=0 // by default, does not smoke

Does the patient smoke?

+ Yes 
~ fume=1
-> return_to

+ No 
~ fume=0
-> return_to
