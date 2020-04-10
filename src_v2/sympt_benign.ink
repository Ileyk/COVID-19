=== Symptomes_mineurs === 

= syndrome_respiratoire_etc 

VAR benign=0 // by default, no benigh symptom

Sommes-nous en présence d'au moins un des symptômes suivants?

<ul>
  <li>syndrome viral respiratoire (haut ou bas)</li>
  <li>toux</li>
  <li>anosmie et/ou agueusie</li>
  <li>fièvre</li>
  <li>maux de tête</li>
  <li>asthénie</li>
</ul>

+ Oui # CLASS: answ
~ benign=1
-> Comorbidites
+ Non # CLASS: answ
-> diarrhee

= diarrhee

// PB HERE: if "Yes" scenario after "No" scenario, it does not 
// display on the screen. Why?

VAR diar=0 // by default, no diarree

Le patient souffre-t'il de diarrhées?
    
{not Comorbidites:
    
    + Oui # CLASS: answ
    ~ diar=1
    -> Comorbidites 

- else:
    
    + Oui # CLASS: answ
    ~ diar=1
    -> diar_age_choice
    
}

+ Non # CLASS: answ
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