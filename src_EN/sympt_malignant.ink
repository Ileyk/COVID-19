=== Gravite ===

Is there at least one alarming sign such as:

<ul>
  <li>polypnoea with respiratory rate > 22 cycles/minute?</li>
  {saturometre_==1: <li>pulse oximetry (Sp02) < 95%?</li>}
  {tensiometre_==1: <li>arterial systolic pressure < 100mmHg?</li>}
  <li>altered consciousness, lowered awareness, confusion, somnolence?</li>
  <li>dehydration?</li>
  <li>sudden patient deterioration for elderly patients?</li>
  <li>cyanosis of the extremities?</li>
  <li>difficulty making full sentences?</li>
</ul>

+ Yes # CLASS: answ
-> end_hospital_hurry
+ No # CLASS: answ
-> SDRA

=== SDRA ===

Does the person present an acute respiratory distress syndrome (wheezing, labored breathing, blue lips)? 

+ Yes # CLASS: answ
-> end_hospital_hurry
+ No # CLASS: answ
-> Pneumonie_aigue

=== Pneumonie_aigue ===

VAR pneumo=0 // by default, no pneumopathie 

Does the patient present clinical signs of an acute pneumopathy?

+ Yes # CLASS: answ
~ pneumo = 1 
-> Comorbidites
+ No # CLASS: answ
-> Symptomes_mineurs


