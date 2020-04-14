# COVID-19

This questionnaire is to be answered by medical staff or emergency services (hereafter the consultant) who needs to evaluate the likelihood of a non-hospitalized patient to be positive to COVID-19.

It serves as a dynamic flowchart to identify the best procedure to follow, before a possible hospitalization.

## Purpose

Cheat sheet.

Dynamic questionnaire with optimized track instead of full static flowchart.

Decrease the risk of false positive/negative by standardizing the questions to be asked.

Data storage
  - to look up later
  - to identify correlations

## Sources

See data folder.

## Translations

The standard procedure to translate is:
- download [Ink](https://github.com/inkle/inky/releases/tag/0.11.0) in order to easily identify the text to be translated
- git clone the project
- create a folder named after the [2-letters ISO 639-1 Code](https://www.loc.gov/standards/iso639-2/php/code_list.php) of the language in which you will translate
- copy the all the ink files in the folder of the language from which you want to translate (e.g. English -> EN)
- commit your changes

Alternatively, for those not familiar with GitHub, you can [email me](mailto:ileykelmellah@orange.fr) the ink files you produced and the name of the language they are written in.

## To do

- [ ] Translations
- [ ] Archive answers for later check
- [ ] Script to explore all possible tracks
- [ ] Give possibility to step back to change the previous answer
- [ ] Choice in the margin to answer no to all comorbidities at once
- [ ] Instantaneous display mode

## Ink coding questions

- [ ] Conserve Yes/No in same order (lack of commutativeness when logic choice)
- [ ] What happens if evaluation of variable not set? Discarded by default?
- [ ] Identify branches out of reach

## Acknowledgements

To [Inkle Studios](https://www.inklestudios.com/ink/)

To Sarah Brooks (English version)

To Silvia Martínez-Núñez (Spanish version)
