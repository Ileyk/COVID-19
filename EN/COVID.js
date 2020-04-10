var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"theme: dark"},{"#":"author: Ileyk El Mellah"},"\n","\n","\n","\n",{"#":"Beware, the INCLUDE statements above must not be:"},{"#":"- recursive"},{"#":"- such as they are loaded twice"},{"#":"The order does not seem to matter."},"^Is it a remote consultation?","\n",["ev",{"^->":"0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.12.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->t->":"Instru"},{"->":"Gravite"},{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.13.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"tensiometre_","re":true},"ev",1,"/ev",{"VAR=":"saturometre_","re":true},{"->":"Gravite"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"Instru":[{"->":".^.tensiometre"},{"tensiometre":[["^Does the patient have access to a blood pressure monitor?","\n",["ev",{"^->":"Instru.tensiometre.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"Instru.tensiometre.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Instru.tensiometre.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"tensiometre_","re":true},{"->":"Instru.saturometre"},{"#f":5}],"c-1":["ev",{"^->":"Instru.tensiometre.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",0,"/ev",{"VAR=":"tensiometre_","re":true},{"->":"Instru.saturometre"},{"#f":5}]}],{"#f":1}],"saturometre":[["^Does the patient have access to a pulse oximeter?","\n",["ev",{"^->":"Instru.saturometre.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"Instru.saturometre.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Instru.saturometre.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"saturometre_","re":true},"ev","void","/ev","->->",{"#f":5}],"c-1":["ev",{"^->":"Instru.saturometre.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",0,"/ev",{"VAR=":"saturometre_","re":true},"ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"#f":1}],"Comorbidites":[{"->":".^.comorbidites_0"},{"comorbidites_0":[["^Does the patient have diabetes (type 1 or 2) and/or arterial hypertension?","\n",["ev",{"^->":"Comorbidites.comorbidites_0.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_0.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_0.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_1"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_0.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_1":[["^Does the patient present at least one comorbidity, chronic disease or a long term condition such as:","\n","^<ul>","\n","^<li>chronic renal insufficiency on dialysis</li>","\n","^<li>obesity (BMI>30)</li>","\n","^<li>evolving cancer</li>","\n","^<li>cirrhosis</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_1.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_1.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_2"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_2":[["^Does the patient present at least one chronic respiratory disease such as:","\n","^<ul>","\n","^<li>asthma</li>","\n","^<li>cystic fibrosis</li>","\n","^<li>chronic broncho-pneumopathy</li>","\n","^<li>chronic obstructive pulmonary disease</li>","\n","^<li>other chronic respiratory pathology</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_2.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_2.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_3"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_3":[["^Does the patient present at least one cardiovascular disease or have a medical history of cardiovascular disease such as:","\n","^<ul>","\n","^<li>heart surgery</li>","\n","^<li>heart failure</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_3.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_3.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_4"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_3.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_4":[["^Does the patient suffer from immunodeficiency (congenital or acquired) due to one of the following factors?","\n","^<ul>","\n","^<li>anti-cancer chemotherapy</li>","\n","^<li>immunosuppressive treatment</li>","\n","^<li>biotherapy and/or corticotherapy with immunosuppressive dose</li>","\n","^<li>HIV with CD4<200/mm<sup>3</sup></li>","\n","^<li>solid organ transplantation</li>","\n","^<li>hematopoietic stem cell transplantation</li>","\n","^<li>malignant hemopathy under treatment</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_4.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_4.0.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_4.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_5"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_4.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_5":[["^Are there increased risks of bacterial superinfection due, for instance, to:","\n","^<ul>","\n","^<li>a splenectomy</li>","\n","^<li>homozygous sickle cell anemia</li>","\n","^</ul>","\n",["ev",{"^->":"Comorbidites.comorbidites_5.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],["ev",{"^->":"Comorbidites.comorbidites_5.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_5.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_6"},{"#f":5}],"c-1":["ev",{"^->":"Comorbidites.comorbidites_5.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_6":[["^Does the patient present at least one of the following risk factors:","\n","^<ul>","\n","^<li>pregnancy</li>","\n","^<li>in a vulnerable socio-economic situation</li>","\n","^</ul>","\n","ev",{"VAR?":"pneumo"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",["ev",{"^->":"Comorbidites.comorbidites_6.0.15.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"->":".^.^.^.17"},{"c-0":["ev",{"^->":"Comorbidites.comorbidites_6.0.15.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"Pneumo_post_check"},{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n",["ev",{"^->":"Comorbidites.comorbidites_6.0.16.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"->":".^.^.^.17"},{"c-0":["ev",{"^->":"Comorbidites.comorbidites_6.0.16.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",{"CNT?":"Symptomes_mineurs.diarrhee"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Symptomes_mineurs.diar_age_choice"},{"->":".^.^.^.13"},null]}],[{"->":".^.b"},{"b":["^ ",{"->":"Symptomes_mineurs.diarrhee"},{"->":".^.^.^.13"},null]}],"nop","\n",{"#f":5}]}]}],"nop","\n",["ev",{"^->":"Comorbidites.comorbidites_6.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Comorbidites.comorbidites_6.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.comorbidites_summary"},{"#f":5}]}],{"#f":1}],"comorbidites_summary":["ev",{"VAR?":"pneumo"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"end_hospital"},{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"Tolerance_clinique"},{"->":".^.^.^.7"},null]}],"nop","\n",{"#f":1}],"#f":3}],"Pneumo_post_check":[[["ev",{"^->":"Pneumo_post_check.0.postscript.done_1"},"/ev",{"->":"age"},["ev",{"VAR?":"age_interval"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"end_repos_surveillance"},{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"^->":"Pneumo_post_check.0.postscript.done_1.done_2"},"/ev",{"->":"fumeur"},["ev",{"VAR?":"fume"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"end_repos_surveillance"},{"->":".^.^.^.6"},null]}],"nop","\n",{"->":"end_repos"},{"#f":7,"#n":"done_2"}],{"#f":7,"#n":"done_1"}],{"#f":5,"#n":"postscript"}],null],{"#f":1}],"Tolerance_clinique":[["^Does the patient have a good clinical tolerance (pulse","ev",{"VAR?":"tensiometre_"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^, blood pressure",{"->":".^.^.^.7"},null]}],"nop","ev",{"VAR?":"saturometre_"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^, respiratory frequency Sa02",{"->":".^.^.^.14"},null]}],"nop","^) and a stabilized comorbidity?","\n",["ev",{"^->":"Tolerance_clinique.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"Tolerance_clinique.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Tolerance_clinique.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"end_repos_surveillance"},{"#f":5}],"c-1":["ev",{"^->":"Tolerance_clinique.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"end_hospital"},{"#f":5}]}],{"#f":1}],"age":[{"temp=":"return_to"},["^How old is the patient?","\n",["ev",{"^->":"age.1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Less than 50 years old ",{"->":"$r","var":true},null]}],["ev",{"^->":"age.1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Between 50 and 70 years old ",{"->":"$r","var":true},null]}],["ev",{"^->":"age.1.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^More than 70 years old ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"age.1.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",0,"/ev",{"VAR=":"age_interval","re":true},{"->":"return_to","var":true},{"#f":5}],"c-1":["ev",{"^->":"age.1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"age_interval","re":true},{"->":"return_to","var":true},{"#f":5}],"c-2":["ev",{"^->":"age.1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",2,"/ev",{"VAR=":"age_interval","re":true},{"->":"return_to","var":true},{"#f":5}]}],{"#f":1}],"fumeur":[{"temp=":"return_to"},["^Does the patient smoke?","\n",["ev",{"^->":"fumeur.1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"fumeur.1.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"fumeur.1.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"VAR=":"fume","re":true},{"->":"return_to","var":true},{"#f":5}],"c-1":["ev",{"^->":"fumeur.1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",0,"/ev",{"VAR=":"fume","re":true},{"->":"return_to","var":true},{"#f":5}]}],{"#f":1}],"Symptomes_mineurs":[{"->":".^.syndrome_respiratoire_etc"},{"syndrome_respiratoire_etc":[["^Is there at least one of the following symptoms?","\n","^<ul>","\n","^<li>viral respiratory syndrome (high or low)</li>","\n","^<li>cough</li>","\n","^<li>anosmia and/or agueusia</li>","\n","^<li>feever</li>","\n","^<li>headaches</li>","\n","^<li>asthenia</li>","\n","^</ul>","\n",["ev",{"^->":"Symptomes_mineurs.syndrome_respiratoire_etc.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"Symptomes_mineurs.syndrome_respiratoire_etc.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Symptomes_mineurs.syndrome_respiratoire_etc.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"benign","re":true},{"->":"Comorbidites"},{"#f":5}],"c-1":["ev",{"^->":"Symptomes_mineurs.syndrome_respiratoire_etc.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":".^.^.^.^.diarrhee"},{"#f":5}]}],{"#f":1}],"diarrhee":[["^Does the patient suffer from diarrhea?","\n","ev",{"CNT?":"Comorbidites"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n",["ev",{"^->":"Symptomes_mineurs.diarrhee.0.6.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],{"->":".^.^.^.8"},{"c-0":["ev",{"^->":"Symptomes_mineurs.diarrhee.0.6.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"diar","re":true},"ev",{"^->":"Comorbidites"},"/ev",{"->":"age"},{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n",["ev",{"^->":"Symptomes_mineurs.diarrhee.0.7.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],{"->":".^.^.^.8"},{"c-0":["ev",{"^->":"Symptomes_mineurs.diarrhee.0.7.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"diar","re":true},{"->":".^.^.^.^.^.^.diar_age_choice"},{"#f":5}]}]}],"nop","\n",["ev",{"^->":"Symptomes_mineurs.diarrhee.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Symptomes_mineurs.diarrhee.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",0,"/ev",{"VAR=":"diar","re":true},"ev",{"VAR?":"benign"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"end_repos"},{"->":".^.^.^.19"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"end_tout_va_bien"},{"->":".^.^.^.19"},null]}],"nop","\n",{"#f":5}]}],{"#f":1}],"diar_age_choice":[[["ev",{"^->":"Symptomes_mineurs.diar_age_choice.0.postscript.done"},"/ev",{"->":"age"},["ev",{"VAR?":"age_interval"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"end_repos_surveillance"},{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"end_repos"},{"->":".^.^.^.7"},null]}],"nop","\n",{"#f":7,"#n":"done"}],{"#f":5,"#n":"postscript"}],null],{"#f":1}],"#f":1}],"Gravite":[["^Is there at least one alarming sign such as:","\n","^<ul>","\n","^<li>polypnoea with respiratory rate > 22 cycles/minute?</li>","\n","ev",{"VAR?":"saturometre_"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ <li>pulse oximetry (Sp02) < 95%?</li>",{"->":".^.^.^.12"},null]}],"nop","\n","ev",{"VAR?":"tensiometre_"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ <li>arterial systolic pressure < 100mmHg?</li>",{"->":".^.^.^.20"},null]}],"nop","\n","^<li>altered consciousness, lowered awareness, confusion, somnolence?</li>","\n","^<li>dehydration?</li>","\n","^<li>sudden patient deterioration for elderly patients?</li>","\n","^<li>cyanosis of the extremities?</li>","\n","^<li>difficulty making full sentences?</li>","\n","^</ul>","\n",["ev",{"^->":"Gravite.0.34.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"Gravite.0.35.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Gravite.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.34.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"end_hospital_hurry"},{"#f":5}],"c-1":["ev",{"^->":"Gravite.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.35.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"SDRA"},{"#f":5}]}],{"#f":1}],"SDRA":[["^Does the person present an acute respiratory distress syndrome (wheezing, labored breathing, blue lips)?","\n",["ev",{"^->":"SDRA.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"SDRA.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"SDRA.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"end_hospital_hurry"},{"#f":5}],"c-1":["ev",{"^->":"SDRA.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"Pneumonie_aigue"},{"#f":5}]}],{"#f":1}],"Pneumonie_aigue":[["^Does the patient present clinical signs of an acute pneumopathy?","\n",["ev",{"^->":"Pneumonie_aigue.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Yes ",{"->":"$r","var":true},null]}],["ev",{"^->":"Pneumonie_aigue.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^No ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Pneumonie_aigue.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n","ev",1,"/ev",{"VAR=":"pneumo","re":true},{"->":"Comorbidites"},{"#f":5}],"c-1":["ev",{"^->":"Pneumonie_aigue.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: answ"},"\n",{"->":"Symptomes_mineurs"},{"#f":5}]}],{"#f":1}],"end_no_covid_but_something":["^The patient needs to be hospitalized, preferably not in the COVID section before the results of the PCR test (or other COVID tests) are known. ",{"#":"CLASS: end"},"\n",{"->":"Restart"},{"#f":1}],"end_hospital":["^Call emergency service for hospitalization. ",{"#":"CLASS: end"},"\n",{"->":"Restart"},{"#f":1}],"end_tout_va_bien":["^Neither alarming nor clinical sign related to COVID-19. Follow the procedure of a classic consultation. ",{"#":"CLASS: end"},"\n",{"->":"Restart"},{"#f":1}],"end_repos":["^If stable clinical state, the patient stays home ","<>","\n","ev",{"VAR?":"pneumo"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^for treatment of the pneumopathy. ",{"#":"CLASS: end"},"\n",{"->":".^.^.^.10"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"benign"},1,"==",{"VAR?":"diar"},1,"==","||","/ev",[{"->":".^.b","c":true},{"b":["\n","^with treatment of the symptoms (anti-inflammatories contraindicated).","\n",{"->":".^.^.^.11"},null]}],"nop","^ ",{"#":"CLASS: end"},"\n",{"->":".^.^.^.10"},null]}],"nop","\n","^<ol>","\n","ev",{"VAR?":"age_interval"},2,"<","/ev",[{"->":".^.b","c":true},{"b":["^ <li>Recommended medical certificate for 14 days sick leave</li>",{"->":".^.^.^.20"},null]}],"nop","\n","^<li>Give the WHO \"Home care of adult patient\" information sheet</li>","\n","^</ol>","\n",{"->":"Restart"},{"#f":1}],"end_pneumo_chill":["^Treatment of the pneumopathy at home. ",{"#":"CLASS: end"},"\n",{"->":"Restart"},{"#f":1}],"end_repos_surveillance":["^If stable clinical state, ","<>","\n",["ev",{"VAR?":"pneumo"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^treatment of the pneumopathy at","\n",{"->":".^.^.^.6"},null]}],["ev",{"VAR?":"benign"},1,"==",{"VAR?":"diar"},1,"==","||","/ev",{"->":".^.b","c":true},{"b":["\n","^treatment of the symptoms (anti-inflammatories contraindicated) at","\n",{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["\n","^the patient stays at","\n",{"->":".^.^.^.6"},null]}],"nop","\n","<>","^ home and monitoring required. ",{"#":"CLASS: end"},"\n","ev",{"VAR?":"age_interval"},2,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Consider home hospitalization if risk of complications or social isolation of the elder.",{"->":".^.^.^.18"},null]}],"nop","\n","^<ol>","\n","ev",{"VAR?":"age_interval"},2,"<","/ev",[{"->":".^.b","c":true},{"b":["^ <li>Medical certificate for 14 days sick leave</li>",{"->":".^.^.^.28"},null]}],"nop","\n","^<li>Give the WHO \"Home care of adult patient\" information sheet</li>","\n","^<li>Under medical surveillance with consultation and or remote consultation with medical apps and general practitioner</li>","\n","^<li>Nurse visit programmed between 4 and 6 days later (frequent deterioration a week after the first symptoms)</li>","\n","^<li>Need to wear masks for 14 days</li>","\n","^</ol>","\n","^Call emergency service if alarming signs appear. ",{"#":"CLASS: end"},"\n",{"->":"Restart"},{"#f":1}],"end_hospital_hurry":["^Call emergency service for hospitalization. ",{"#":"CLASS: end"},"\n","^Determine if virological indices in the previous days or other obvious aetiology.","\n",{"->":"Restart"},{"#f":1}],"Restart":[[["ev",{"^->":"Restart.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Next consultation",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Restart.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},"end",{"#f":5}]}],{"#f":1}],"global decl":["ev",0,{"VAR=":"tensiometre_"},0,{"VAR=":"saturometre_"},-1,{"VAR=":"age_interval"},0,{"VAR=":"fume"},0,{"VAR=":"benign"},0,{"VAR=":"diar"},0,{"VAR=":"pneumo"},"/ev","end",null],"#f":1}],"listDefs":{}};