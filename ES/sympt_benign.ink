=== Symptomes_mineurs === 

= syndrome_respiratoire_etc 

VAR benign=0 // by default, no benigh symptom

¿Presenta al menos uno de los siguiente síntomas?

<ul>
  <li>síndrome respiratorio viral</li>
  <li>tos</li>
  <li>pérdida de olfato y gusto</li>
  <li>fiebre</li>
  <li>dolor de cabeza</li>
  <li>astenia</li>
</ul>

+ Si # CLASS: answ
~ benign=1
-> Comorbidites
+ No # CLASS: answ
-> diarrhee

= diarrhee

// PB HERE: if "Yes" scenario after "No" scenario, it does not 
// display on the screen. Why?

VAR diar=0 // by default, no diarree

¿Presenta el paciente diarrea?

{not Comorbidites:
    
    + Si # CLASS: answ
    ~ diar=1
    -> age(->Comorbidites) 

- else:
    
    + Si # CLASS: answ
    ~ diar=1
    -> diar_age_choice
    
}

+ No # CLASS: answ
~ diar=0
{benign==1:
    -> end_repos
- else:
    -> end_tout_va_bien
}

= diar_age_choice

- (postscript)
-> age(->done)
- (done)

{age_interval==2: 
    -> end_repos_surveillance
- else:
    -> end_repos 
}
