=== Gravite ===

Hay al menos uno de los signos de alarma, tales como:

<ul>
  <li>respiración jadeante con un ritmo respiratorio > 22 ciclos/minuto?</li>
  {saturometre_==1: <li>Pulsioxímetro (Sp02) < 95%?</li>}
  {tensiometre_==1: <li>Tensión arterial sistólica < 100mmHg?</li>}
  <li>alteración de la conciencia, falta de atención, confusión, somnolencia?</li>
  <li>deshidratación?</li>
  <li>deterioro repentino en pacientes de edad avanzada?</li>
  <li>cianosis de las extremidades?</li>
  <li>difilcutad en hacer frases completas?</li>
</ul>

+ Si # CLASS: answ
-> end_hospital_hurry
+ No # CLASS: answ
-> SDRA

=== SDRA ===

¿La persona presenta un síndrome de dificultad respiratoria aguda (sibilancias, dificultad para respirar, labios azules)?

+ Si # CLASS: answ
-> end_hospital_hurry
+ No # CLASS: answ
-> Pneumonie_aigue

=== Pneumonie_aigue ===

VAR pneumo=0 // by default, no pneumopathie 

¿Presenta el paciente signos clínicos de una neumonía aguda?

+ Si # CLASS: answ
~ pneumo = 1 
-> Comorbidites
+ No # CLASS: answ
-> Symptomes_mineurs


