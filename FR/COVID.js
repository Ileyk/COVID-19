var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"theme: dark"},"\n","\n","\n","\n",{"#":"Beware, the INCLUDE statements above must not be:"},{"#":"- recursive"},{"#":"- such as they are loaded twice"},{"#":"The order does not seem to matter."},"^Consultation à distance?","\n",["ev",{"^->":"0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],["ev",{"^->":"0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.11.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->t->":"Instru"},{"->":"Gravite"},{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.12.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"tensiometre_","re":true},"ev",1,"/ev",{"VAR=":"saturometre_","re":true},{"->":"Gravite"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"Instru":[{"->":".^.tensiometre"},{"tensiometre":[["^La patiente dispose-t'elle d'un tensiomètre?","\n",["ev",{"^->":"Instru.tensiometre.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],["ev",{"^->":"Instru.tensiometre.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Instru.tensiometre.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"tensiometre_","re":true},{"->":"Instru.saturometre"},{"#f":5}],"c-1":["ev",{"^->":"Instru.tensiometre.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",0,"/ev",{"VAR=":"tensiometre_","re":true},{"->":"Instru.saturometre"},{"#f":5}]}],{"#f":1}],"saturometre":[["^Le patient dispose-t'il d'un oxymètre de pouls?","\n",["ev",{"^->":"Instru.saturometre.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],["ev",{"^->":"Instru.saturometre.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Instru.saturometre.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"saturometre_","re":true},"ev","void","/ev","->->",{"#f":5}],"c-1":["ev",{"^->":"Instru.saturometre.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",0,"/ev",{"VAR=":"saturometre_","re":true},"ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"#f":1}],"Comorbidites":[{"->":".^.comorbidites_0"},{"comorbidites_0":[["^La patiente est-elle diabétique (type I ou II) et/ou souffre-t'elle d'hypertension artérielle?","\n",["ev",{"^->":"Comorbidites.comorbidites_0.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_0.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_0.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_1"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_0.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_1":[["^Le patient présente-il au moins une comorbidité, maladie chronique ou affection de longue durée telle que:","\n","^<ul>","\n","^<li>insuffisance rénale chronique dialysée</li>","\n","^<li>obésité (IMC>30kg/m<sup>3</sup>)</li>","\n","^<li>cancer évolutif</li>","\n","^<li>cirrhose</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_1.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_1.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_2"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_2":[["^La patiente présente-elle au moins une pathologie chronique respiratoire telle que:","\n","^<ul>","\n","^<li>asthme</li>","\n","^<li>mucoviscidose</li>","\n","^<li>broncho-pneumopathie chronique</li>","\n","^<li>bronchite chronique obstructive</li>","\n","^<li>autre pathologie chronique respiratoire</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_2.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_2.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_3"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_3":[["^La patiente présente-elle au moins une pathologie cardio-vasculaire ou des antécédents tels que:","\n","^<ul>","\n","^<li>accident cardio-vasculaire</li>","\n","^<li>chirurgie cardiaque</li>","\n","^<li>insuffisance cardiaque</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_3.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_3.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_4"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_3.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_4":[["^Le patient souffre-t'il d'immunodéficience (congénitale ou acquise) dûe à l'un des facteurs suivants?","\n","^<ul>","\n","^<li>chimiothérapie anti-cancéreuse</li>","\n","^<li>traitement immunodépresseur</li>","\n","^<li>biothérapie et/ou corticothérapie à dose immunosuppressive</li>","\n","^<li>VIH avec CD4<200/mm<sup>3</sup></li>","\n","^<li>greffe d'organe solide</li>","\n","^<li>greffe de cellules-souches hématopoïétiques</li>","\n","^<li>hémopathie maligne en cours de traitement</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_4.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_4.0.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_4.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_5"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_4.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_5":[["^Y a-t'il des risques accrus de surinfection bactérienne dûs, par exemple, à:","\n","^<ul>","\n","^<li>une splénectomie</li>","\n","^<li>une drépanocytose homozygote</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_5.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_5.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_5.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_6"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_5.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_6":[["^La patiente présente-elle l'un au moins des facteurs de risques suivants:","\n","^<ul>","\n","^<li>grossesse</li>","\n","^<li>siuation sociale précaire</li>","\n","^</ul>","\n","ev",{"VAR?":"pneumo"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",["ev",{"^->":"Comorbidites.comorbidites_6.0.15.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"->":".^.^.^.17"},{"c-0":["ev",{"^->":"Comorbidites.comorbidites_6.0.15.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"Pneumo_post_check"},{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n",["ev",{"^->":"Comorbidites.comorbidites_6.0.16.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"->":".^.^.^.17"},{"c-0":["ev",{"^->":"Comorbidites.comorbidites_6.0.16.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",{"CNT?":"Symptomes_mineurs.diarrhee"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Symptomes_mineurs.diar_age_choice"},{"->":".^.^.^.13"},null]}],[{"->":".^.b"},{"b":["^ ",{"->":"Symptomes_mineurs.diarrhee"},{"->":".^.^.^.13"},null]}],"nop","\n",{"#f":5}]}]}],"nop","\n",["ev",{"^->":"Comorbidites.comorbidites_6.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_6.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_summary":["ev",{"VAR?":"pneumo"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"end_hospital"},{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"Tolerance_clinique"},{"->":".^.^.^.7"},null]}],"nop","\n",{"#f":1}],"#f":1}],"Pneumo_post_check":[[["ev",{"^->":"Pneumo_post_check.0.postscript.done_1"},"/ev",{"->":"age"},["ev",{"VAR?":"age_interval"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"end_repos_surveillance"},{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"^->":"Pneumo_post_check.0.postscript.done_1.done_2"},"/ev",{"->":"fumeur"},["ev",{"VAR?":"fume"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"end_repos_surveillance"},{"->":".^.^.^.6"},null]}],"nop","\n",{"->":"end_repos"},{"#f":7,"#n":"done_2"}],{"#f":7,"#n":"done_1"}],{"#f":5,"#n":"postscript"}],null],{"#f":1}],"Tolerance_clinique":[["^La patiente a-t'elle une bonne tolérance clinique (pouls","ev",{"VAR?":"tensiometre_"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^, TA",{"->":".^.^.^.7"},null]}],"nop","ev",{"VAR?":"saturometre_"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^, FR Sa02",{"->":".^.^.^.14"},null]}],"nop","^) et une comorbidité stabilisée?","\n",["ev",{"^->":"Tolerance_clinique.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],["ev",{"^->":"Tolerance_clinique.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Tolerance_clinique.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"end_repos_surveillance"},{"#f":5}],"c-1":["ev",{"^->":"Tolerance_clinique.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"end_hospital"},{"#f":5}]}],{"#f":1}],"age":[{"temp=":"return_to"},["^Quel est l'âge du patient?","\n",["ev",{"^->":"age.1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Moins de 50 ans ",{"->":"$r","var":true},null]}],["ev",{"^->":"age.1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Entre 50 et 70 ans ",{"->":"$r","var":true},null]}],["ev",{"^->":"age.1.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Plus de 70 ans ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"age.1.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",0,"/ev",{"VAR=":"age_interval","re":true},{"->":"return_to","var":true},{"#f":5}],"c-1":["ev",{"^->":"age.1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"age_interval","re":true},{"->":"return_to","var":true},{"#f":5}],"c-2":["ev",{"^->":"age.1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",2,"/ev",{"VAR=":"age_interval","re":true},{"->":"return_to","var":true},{"#f":5}]}],{"#f":1}],"fumeur":[{"temp=":"return_to"},["^La patiente fume-t'elle?","\n",["ev",{"^->":"fumeur.1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],["ev",{"^->":"fumeur.1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"fumeur.1.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"VAR=":"fume","re":true},{"->":"return_to","var":true},{"#f":5}],"c-1":["ev",{"^->":"fumeur.1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",0,"/ev",{"VAR=":"fume","re":true},{"->":"return_to","var":true},{"#f":5}]}],{"#f":1}],"Symptomes_mineurs":[{"->":".^.syndrome_respiratoire_etc"},{"syndrome_respiratoire_etc":[["^Sommes-nous en présence d'au moins un des symptômes suivants?","\n","^<ul>","\n","^<li>syndrome viral respiratoire (haut ou bas)</li>","\n","^<li>toux</li>","\n","^<li>anosmie et/ou agueusie</li>","\n","^<li>fièvre</li>","\n","^<li>maux de tête</li>","\n","^<li>asthénie</li>","\n","^</ul>","\n",["ev",{"^->":"Symptomes_mineurs.syndrome_respiratoire_etc.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],["ev",{"^->":"Symptomes_mineurs.syndrome_respiratoire_etc.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Symptomes_mineurs.syndrome_respiratoire_etc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"benign","re":true},{"->":"Comorbidites"},{"#f":5}],"c-1":["ev",{"^->":"Symptomes_mineurs.syndrome_respiratoire_etc.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.diarrhee"},{"#f":5}]}],{"#f":1}],"diarrhee":[["^Le patient souffre-t'il de diarrhées?","\n","ev",{"CNT?":"Comorbidites"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n",["ev",{"^->":"Symptomes_mineurs.diarrhee.0.6.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],{"->":".^.^.^.8"},{"c-0":["ev",{"^->":"Symptomes_mineurs.diarrhee.0.6.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"diar","re":true},{"->":"Comorbidites"},{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n",["ev",{"^->":"Symptomes_mineurs.diarrhee.0.7.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],{"->":".^.^.^.8"},{"c-0":["ev",{"^->":"Symptomes_mineurs.diarrhee.0.7.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"diar","re":true},{"->":".^.^.^.^.^.^.diar_age_choice"},{"#f":5}]}]}],"nop","\n",["ev",{"^->":"Symptomes_mineurs.diarrhee.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Symptomes_mineurs.diarrhee.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",0,"/ev",{"VAR=":"diar","re":true},"ev",{"VAR?":"benign"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"end_repos"},{"->":".^.^.^.19"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"end_tout_va_bien"},{"->":".^.^.^.19"},null]}],"nop","\n",{"#f":5}]}],{"#f":1}],"diar_age_choice":[[["ev",{"^->":"Symptomes_mineurs.diar_age_choice.0.postscript.done"},"/ev",{"->":"age"},["ev",{"VAR?":"age_interval"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"end_repos_surveillance"},{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"end_repos"},{"->":".^.^.^.7"},null]}],"nop","\n",{"#f":7,"#n":"done"}],{"#f":5,"#n":"postscript"}],null],{"#f":1}],"#f":1}],"Gravite":[["^Sommes-nous en présence d'au moins un signe de gravité tel que:","\n","^<ul>","\n","^<li>polypnée avec fréquence respiratoire > 22 cycles/minute?</li>","\n","ev",{"VAR?":"saturometre_"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ <li>oxymétrie de pouls (SpO2) < 95% en air ambiant?</li>",{"->":".^.^.^.12"},null]}],"nop","\n","ev",{"VAR?":"tensiometre_"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ <li>pression artérielle systolique < 100mmHg?</li>",{"->":".^.^.^.20"},null]}],"nop","\n","^<li>troubles de la vigilance, altération de la conscience, confusion, somnolence?</li>","\n","^<li>déshydratation?</li>","\n","^<li>altération brutale de l'état général chez la personne âgée?</li>","\n","^<li>cyanose des extrémités?</li>","\n","^<li>difficulté à terminer ses phrases sans pause?</li>","\n","^</ul>","\n",["ev",{"^->":"Gravite.0.34.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],["ev",{"^->":"Gravite.0.35.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Gravite.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.34.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"end_hospital_hurry"},{"#f":5}],"c-1":["ev",{"^->":"Gravite.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.35.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"SDRA"},{"#f":5}]}],{"#f":1}],"SDRA":[["^La personne présente-elle un syndrome de détresse respiratoire aiguë (tirage, lèvres cyanosées)?","\n",["ev",{"^->":"SDRA.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],["ev",{"^->":"SDRA.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"SDRA.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"end_hospital_hurry"},{"#f":5}],"c-1":["ev",{"^->":"SDRA.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"Pneumonie_aigue"},{"#f":5}]}],{"#f":1}],"Pneumonie_aigue":[["^La patiente présente-elle des signes cliniques de pneumopathie aiguë?","\n",["ev",{"^->":"Pneumonie_aigue.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oui ",{"->":"$r","var":true},null]}],["ev",{"^->":"Pneumonie_aigue.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Non ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Pneumonie_aigue.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"pneumo","re":true},{"->":"Comorbidites"},{"#f":5}],"c-1":["ev",{"^->":"Pneumonie_aigue.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"Symptomes_mineurs"},{"#f":5}]}],{"#f":1}],"end_no_covid_but_something":["^Le patient nécessite une hospitalisation, de préférence hors-secteur COVID en attendant le résultat du test PCR (ou autre test COVID). ",{"#":"CLASS: end"},"\n",{"->":"Restart"},{"#f":1}],"end_hospital":[["^Appeler Centre 15 pour hospitalisation. ",{"#":"CLASS: end"},"\n",["ev",{"^->":"end_hospital.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Consultation suivante",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"end_hospital.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},{"->":"Restart"},{"#f":5}]}],{"#f":1}],"end_tout_va_bien":["^Pas de tableau clinique COVID-19 ni de signes inquiétants dans l'immédiat. Suivre le protocole d'une consultation classique. ",{"#":"CLASS: end"},"\n",{"->":"Restart"},{"#f":1}],"end_repos":["^Si état clinique stable, le patient est maintenu à domicile ","<>","\n","ev",{"VAR?":"pneumo"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^pour traitement de la pneumopathie. ",{"#":"CLASS: end"},"\n",{"->":".^.^.^.10"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"benign"},1,"==",{"VAR?":"diar"},1,"==","||","/ev",[{"->":".^.b","c":true},{"b":["\n","^avec traitement symptomatique (anti-inflammatoires contre-indiqués).","\n",{"->":".^.^.^.11"},null]}],"nop","^ ",{"#":"CLASS: end"},"\n",{"->":".^.^.^.10"},null]}],"nop","\n","^<ol>","\n","ev",{"VAR?":"age_interval"},2,"<","/ev",[{"->":".^.b","c":true},{"b":["^ <li>Arrêt de travail de 14 jours recommandé</li>",{"->":".^.^.^.20"},null]}],"nop","\n","^<li>Remettre la fiche de recommandations \"Patient adulte à domicile\"</li>","\n","^</ol>","\n",{"->":"Restart"},{"#f":1}],"end_pneumo_chill":["^Traitement de la pneumopathie au domicile. ",{"#":"CLASS: end"},"\n",{"->":"Restart"},{"#f":1}],"end_repos_surveillance":["^Si état clinique stable, ","<>","\n",["ev",{"VAR?":"pneumo"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^traitement de la pneumopathie au","\n",{"->":".^.^.^.6"},null]}],["ev",{"VAR?":"benign"},1,"==",{"VAR?":"diar"},1,"==","||","/ev",{"->":".^.b","c":true},{"b":["\n","^traitement symptomatique (anti-inflammatoires contre-indiqués) au","\n",{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["\n","^maintien à","\n",{"->":".^.^.^.6"},null]}],"nop","\n","<>","^ domicile et surveillance nécessaire. ",{"#":"CLASS: end"},"\n","ev",{"VAR?":"age_interval"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Envisager hospitalisation à domicile si risque de complications ou isolement social de la personne âgée.",{"->":".^.^.^.18"},null]}],"nop","\n","^<ol>","\n","ev",{"VAR?":"age_interval"},2,"<","/ev",[{"->":".^.b","c":true},{"b":["^ <li>Arrêt de travail de 14 jours</li>",{"->":".^.^.^.28"},null]}],"nop","\n","^<li>Remettre la fiche de recommandations \"Patient adulte à domicile\"</li>","\n","^<li>Sous surveillance médicale avec consultation et/ou téléconsultation par applications numériques et médecin généraliste</li>","\n","^<li>Visite infirmière programmée dans les 4 à 6 jours (aggravations fréquentes en fin de première semaine à compter de la survenue des symptômes)</li>","\n","^<li>Port du masque pendant 14 jours </li>","\n","^</ol>","\n","^Appeler Centre 15 en cas d'apparition de signes de gravité.",{"#":"CLASS: end"},"\n",{"->":"Restart"},{"#f":1}],"end_hospital_hurry":["^Appeler Centre 15 pour hospitalisation. ",{"#":"CLASS: end"},"\n","^Déterminer si tableau viral dans les jours précédents ou autre éthiologie évidente d'emblée.","\n",{"->":"Restart"},{"#f":1}],"Restart":[[["ev",{"^->":"Restart.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Consultation suivante",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Restart.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},"end",{"#f":5}]}],{"#f":1}],"global decl":["ev",0,{"VAR=":"tensiometre_"},0,{"VAR=":"saturometre_"},-1,{"VAR=":"age_interval"},0,{"VAR=":"fume"},0,{"VAR=":"benign"},0,{"VAR=":"diar"},0,{"VAR=":"pneumo"},"/ev","end",null],"#f":1}],"listDefs":{}};