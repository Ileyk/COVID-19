# theme: dark
# author: Ileyk El Mellah

INCLUDE comorbidites.ink
INCLUDE sympt_benign.ink
INCLUDE sympt_malignant.ink
INCLUDE endings.ink

# Beware, the INCLUDE statements above must not be:
#   - recursive
#   - such as they are loaded twice
# The order does not seem to matter.

VAR tensiometre_=0 // by default, no tensiometer
VAR saturometre_=0 // by default, no saturometer

Is it a remote consultation?

+ Yes # CLASS: answ
-> Instru -> Gravite
+ No # CLASS: answ 
// assume that the person who fills this form (medical staff,
// firefighters...) has a tensiometer and a saturometer
~ tensiometre_=1
~ saturometre_=1
-> Gravite

=== Instru ===

= tensiometre 

Does the patient have access to a blood pressure monitor?

+ Yes # CLASS: answ 
~ tensiometre_=1
-> saturometre
+ No # CLASS: answ 
~ tensiometre_=0
-> saturometre

= saturometre

Does the patient have access to a pulse oximeter?

+ Yes # CLASS: answ 
~ saturometre_=1
->-> 
+ No # CLASS: answ 
~ saturometre_=0
->-> 





