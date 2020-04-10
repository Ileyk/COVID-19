=== Symptomes_mineurs === 

= syndrome_respiratoire_etc 

VAR benign=0 // by default, no benigh symptom

Is there at least one of the following symptoms?

<ul>
  <li>viral respiratory syndrome (high or low)</li>
  <li>cough</li>
  <li>anosmia and/or agueusia</li>
  <li>feever</li>
  <li>headaches</li>
  <li>asthenia</li>
</ul>

+ Yes # CLASS: answ
~ benign=1
-> Comorbidites
+ No # CLASS: answ
-> diarrhee

= diarrhee

// PB HERE: if "Yes" scenario after "No" scenario, it does not 
// display on the screen. Why?

VAR diar=0 // by default, no diarree

Does the patient suffer from diarrhea?

{not Comorbidites:
    
    + Yes # CLASS: answ
    ~ diar=1
    -> age(->Comorbidites) 

- else:
    
    + Yes # CLASS: answ
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
