
=== end_no_covid_but_something ===

The patient needs to be hospitalized, preferably not in the COVID section before the results of the PCR test (or other COVID tests) are known. # CLASS: end

-> Restart

=== end_hospital ===

Call emergency service for hospitalization. # CLASS: end

-> Restart

=== end_tout_va_bien ===

Neither alarming nor clinical sign related to COVID-19. Follow the procedure of a classic consultation. # CLASS: end

-> Restart

=== end_repos ===

If stable clinical state, the patient stays home <>
{pneumo==1:
    for treatment of the pneumopathy. # CLASS: end
- else:
    {benign==1 or diar==1:
        with treatment of the symptoms (anti-inflammatories contraindicated).
    } # CLASS: end
}

<ol>
  {age_interval<2: <li>Recommended medical certificate for 14 days sick leave</li>}
  <li>Give the WHO "Home care of adult patient" information sheet</li>
</ol>

-> Restart

=== end_pneumo_chill ===

Treatment of the pneumopathy at home. # CLASS: end

-> Restart

=== end_repos_surveillance ===

If stable clinical state, <>
{
- pneumo==1: 
    treatment of the pneumopathy at
- benign==1 or diar==1: 
    treatment of the symptoms (anti-inflammatories contraindicated) at 
- else:
    the patient stays at
} 
<> home and monitoring required. # CLASS: end

{age_interval==2: Consider home hospitalization if risk of complications or social isolation of the elder.}
<ol>
  {age_interval<2: <li>Medical certificate for 14 days sick leave</li>}
  <li>Give the WHO "Home care of adult patient" information sheet</li>
  <li>Under medical surveillance with consultation and or remote consultation with medical apps and general practitioner</li>
  <li>Nurse visit programmed between 4 and 6 days later (frequent deterioration a week after the first symptoms)</li>
  <li>Need to wear masks for 14 days</li>
</ol>

Call emergency service if alarming signs appear. # CLASS: end

-> Restart

=== end_hospital_hurry ===

Call emergency service for hospitalization. # CLASS: end

Determine if virological indices in the previous days or other obvious aetiology.

-> Restart

=== Restart ===

+ Next consultation
# RESTART
    
-> END
