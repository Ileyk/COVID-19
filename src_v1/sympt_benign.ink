=== Symptomes_mineurs === 

= syndrome_respiratoire 

Sommes-nous en présence d'un syndrome viral respiratoire (haut ou bas)?

{not Comorbidites:
    + Oui # CLASS: answ
    -> Comorbidites
- else:
    + Oui # CLASS: answ
    -> end_repos
}
+ Non # CLASS: answ
-> toux

# CLEAR

= toux

La patiente tousse-t'elle?
{not Comorbidites:
    + Oui # CLASS: answ
    -> Comorbidites
- else:
    + Oui # CLASS: answ
    -> end_repos
}
+ Non # CLASS: answ
-> anosmie

# CLEAR

= anosmie 

Le patient est-il atteint d'anosmie et/ou d'agueusie?

{not Comorbidites:
    + Oui # CLASS: answ
    -> Comorbidites
- else:
    + Oui # CLASS: answ
    -> end_repos
}
+ Non # CLASS: answ
-> fievre

# CLEAR

= fievre 

Le patient a-t'il de la fièvre?
{not Comorbidites:
    + Oui # CLASS: answ
    -> Comorbidites
- else:
    + Oui # CLASS: answ
    -> end_repos
}
+ Non # CLASS: answ
-> cephalee

# CLEAR

= cephalee

La patiente souffre-t'elle de maux de tête?

{not Comorbidites:
    + Oui # CLASS: answ
    -> Comorbidites
- else:
    + Oui # CLASS: answ
    -> end_repos
}
+ Non # CLASS: answ
-> asthenie

# CLEAR

= asthenie 

Une asthénie de la patiente est-elle constatée?

{not Comorbidites:
    + Oui # CLASS: answ
    -> Comorbidites
- else:
    + Oui # CLASS: answ
    -> end_repos
}
+ Non # CLASS: answ
-> diarrhee

# CLEAR

= diarrhee

Le patient souffre-t'il de diarrhées?

{not Comorbidites:
    + Oui # CLASS: answ
    -> Comorbidites
- else:
    + Oui # CLASS: answ
    -> end_repos
}
+ Non # CLASS: answ
-> end_tout_va_bien

# CLEAR