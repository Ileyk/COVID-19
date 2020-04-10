
=== end_no_covid_but_something ===

Le patient nécessite une hospitalisation, de préférence hors-secteur COVID en attendant le résultat du test PCR (ou autre test COVID). # CLASS: end

-> Restart

=== end_hospital ===

Appeler Centre 15 pour hospitalisation. # CLASS: end

+ Consultation suivante
# RESTART
    
-> Restart

=== end_tout_va_bien ===

Pas de tableau clinique COVID-19 ni de signes inquiétants dans l'immédiat. Suivre le protocole d'une consultation classique. # CLASS: end

-> Restart

=== end_repos ===

Si état clinique stable, le patient est maintenu à domicile <>
{pneumo==1:
    pour traitement de la pneumopathie. # CLASS: end
- else:
    {benign==1 or diar==1:
        avec traitement symptomatique (anti-inflammatoires contre-indiqués).
    } # CLASS: end
}

<ol>
  {age_interval<2: <li>Arrêt de travail de 14 jours recommandé</li>}
  <li>Remettre la fiche de recommandations "Patient adulte à domicile"</li>
</ol>

-> Restart

=== end_pneumo_chill ===

Traitement de la pneumopathie au domicile. # CLASS: end

-> Restart

=== end_repos_surveillance ===

Si état clinique stable, <>
{
- pneumo==1: 
    traitement de la pneumopathie au
- benign==1 or diar==1: 
    traitement symptomatique (anti-inflammatoires contre-indiqués) au 
- else:
    maintien à
} 
<> domicile et surveillance nécessaire. # CLASS: end

{age_interval==2: Envisager hospitalisation à domicile si risque de complications ou isolement social de la personne âgée.}
<ol>
  {age_interval<2: <li>Arrêt de travail de 14 jours</li>}
  <li>Remettre la fiche de recommandations "Patient adulte à domicile"</li>
  <li>Sous surveillance médicale avec consultation et/ou téléconsultation par applications numériques et médecin généraliste</li>
  <li>Visite infirmière programmée dans les 4 à 6 jours (aggravations fréquentes en fin de première semaine à compter de la survenue des symptômes)</li>
  <li>Port du masque pendant 14 jours </li>
</ol>

Appeler Centre 15 en cas d'apparition de signes de gravité.# CLASS: end

-> Restart

=== end_hospital_hurry ===

Appeler Centre 15 pour hospitalisation. # CLASS: end

Déterminer si tableau viral dans les jours précédents ou autre éthiologie évidente d'emblée.

-> Restart

=== Restart ===

+ Consultation suivante
# RESTART
    
-> END