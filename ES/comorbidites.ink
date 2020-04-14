=== Comorbidites ===

= comorbidites_0

¿Tiene el paciente diabetes (tipo 1 o 2) y/o hipertensión?

+ No # CLASS: answ
-> comorbidites_1
+ Si # CLASS: answ
-> comorbidites_summary

= comorbidites_1

Presenta el pacience al menos una patología concomitante, enfermedad crónica o una condición de larga duración, tales como:

<ul>
/*  <li>diabetes (tipo I o II)</li>
*/  <li>insuficiencia crónica renal en dialisis</li>
  <li>obesidad (IMC>30)</li>
  <li>cáncer</li>
  <li>cirrosis</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_2
+ Si # CLASS: answ
-> comorbidites_summary

= comorbidites_2

¿Presenta el paciente al menos de las siguientes enfermedades crónicas respiratorias?

<ul>
  <li>asma</li>
  <li>fibrosis quística</li>
  <li>bronconeumonía crónica</li>
  <li>enfermedad pulmonar obstructiva crónica (EPOC)</li>
  <li>otra patología respiratoria crónica</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_3
+ Si # CLASS: answ
-> comorbidites_summary

= comorbidites_3

Presenta el paciente al menos una enfermedad cardiovascular o tiene en su historia clínica alguna enfermedad cardiovascular, tales como:

<ul>
/*  <li>hipertesión</li>
*/  <li>cirugía cardíaca</li>
  <li>fallo cardíaco</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_4
+ Si # CLASS: answ
-> comorbidites_summary

= comorbidites_4

¿Presenta el paciente inmunodeficiencia (congénita o adquirida) debido a los siguientes factores?

<ul>
  <li>quimioterapia por cáncer</li>
  <li>tratamiento immunopresivo</li>
  <li>tratamiento biologico y/o corticosteroides con dosis inmunosupresora</li>
  <li>VIH con CD4<200/mm<sup>3</sup></li>
  <li>transplante de órganos</li>
  <li>trasplante de células madre hematopoyéticas</li>
  <li>hemopatía maligna en tratamiento</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_5
+ Si # CLASS: answ
-> comorbidites_summary

= comorbidites_5

Existen mayores riesgos de sobreinfección bacteriana debido, por ejemplo, a:

<ul>
  <li>una esplenectomía</li>
  <li>anemia de células falciformes homocigota</li>
</ul>

+ No # CLASS: answ 
-> comorbidites_6
+ Si # CLASS: answ
-> comorbidites_summary

= comorbidites_6

Presenta el paciente al menos uno de los siguientes factores de riesgo:

<ul>
  <li>embarazo</li>
  <li>situación vulnerable socio-económica/li>
/*  
  <li>presencia de una persona frágil en el domicilio</li>
*/
</ul>

{pneumo==1:
    + No # CLASS: answ 
    -> Pneumo_post_check
- else:
    + No # CLASS: answ
    {Symptomes_mineurs.diarrhee: -> Symptomes_mineurs.diar_age_choice | -> Symptomes_mineurs.diarrhee}
}

+ Si # CLASS: answ
-> comorbidites_summary

= comorbidites_summary

{pneumo==1:
    -> end_hospital 
- else:
    -> Tolerance_clinique 
}

=== Pneumo_post_check ===

// ¿Es la persona > 70 o fumadora?

- (postscript) 
-> age(-> done_1)
- (done_1)
{age_interval==2: -> end_repos_surveillance}
-> fumeur(-> done_2)
- (done_2)
{fume==1: -> end_repos_surveillance}

-> end_repos 

=== Tolerance_clinique ===

¿Tiene el paciente una buena tolerancia clínica (pulse{tensiometre_==1:, blood pressure}{saturometre_==1:, frecuencia respiratoria Sa02}) y una patología estabilizada?


+ Si # CLASS: answ
-> end_repos_surveillance
+ No # CLASS: answ
-> end_hospital

=== age(-> return_to) ===

VAR age_interval=-1 // dummy value

¿Qué edad tiene el paciente?

+ Menos de 50 años # CLASS: answ
~ age_interval = 0 
-> return_to

+ Entre 50 y 70 años # CLASS: answ
~ age_interval = 1 
-> return_to

+ Más de 70 años de edad # CLASS: answ
~ age_interval = 2 
-> return_to

=== fumeur(-> return_to) ===

VAR fume=0 // by default, does not smoke

¿Fuma el paciente?

+ Si 
~ fume=1
-> return_to

+ No 
~ fume=0
-> return_to
