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

Consulation à distance?

+ Oui # CLASS: answ
-> Instru -> Gravite
+ Non # CLASS: answ 
// assume that the person who fills this form (medical staff,
// firefighters...) has a tensiometer and a saturometer
~ tensiometre_=1
~ saturometre_=1
-> Gravite

=== Instru ===

= tensiometre 

La patiente dispose-t'elle d'un tensiomètre?

+ Oui # CLASS: answ 
~ tensiometre_=1
-> saturometre
+ Non # CLASS: answ 
~ tensiometre_=0
-> saturometre

= saturometre

Le patient dispose-t'il d'un oxymètre de pouls?

+ Oui # CLASS: answ 
~ saturometre_=1
->-> 
+ Non # CLASS: answ 
~ saturometre_=0
->-> 





