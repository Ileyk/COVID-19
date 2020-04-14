
=== end_no_covid_but_something ===


El paciente necesita ser hospitalizado, preferiblemente en una sección libre de COVID antes de los resultados del test PCR (o otros tests COVID) conocidos. # CLASS: end

-> Restart

=== end_hospital ===

Llamar al servicio de emergencia para hospitalización. # CLASS: end

-> Restart

=== end_tout_va_bien ===

Ningún signo de alarma o clínico relacionado con COVID-19. Seguir con el procedimiento de una consulta estándar. # CLASS: end

-> Restart

=== end_repos ===

Si el estado clínico es estable, el paciente permanece en casa <>
{pneumo==1:
    con tratamiento de neumonía. # CLASS: end
- else:
    {benign==1 or diar==1:
        con tratamiento de los síntomas (anti-inflamatorios contraindicados).
    } # CLASS: end
}

<ol>
  {age_interval<2: <li>Se recomienda certificado médico de 14 días de baja médica</li>}
  <li>Entregue la hoja informativa de la OMS "Atención domiciliaria del paciente adulto"</li>
</ol>

-> Restart

=== end_pneumo_chill ===

Tratamiento de infección pulmonar en casa. # CLASS: end

-> Restart

=== end_repos_surveillance ===


Si el estado clínico es estable, <>
{
- pneumo==1: 
    tratamiento de infección pulmonar en 
- benign==1 or diar==1: 
    tratamiento de los síntomas (anti-inflamatorios contraindicados) en 
- else:
    el paciente permanece en
} 
<> casa y seguimiento necesario. # CLASS: end

{age_interval==2: Considerar seguimiento médico en casa si riesgo de complicaciones o aislamiento social de mayores.}
<ol>
  {age_interval<2: <li>Certificado médico para 14 días de baja médica</li>}
  <li>Entregue la hoja informativa de la OMS "Atención domiciliaria del paciente adulto"</li>
  <li>Bajo vigilancia médica con consulta o consulta remota con aplicaciones médicas o médico</li>
  <li>Visita a la enfermera programada entre 4 y 6 días después (deterioro frecuente una semana después de los primeros síntomas)</li>
  <li>Necesidad de llevar mascararilla durante 14 días</li>
</ol>

Llamar al servicio de urgencias si cualquier signo de alarma aparece. # CLASS: end

-> Restart

=== end_hospital_hurry ===

Llamar al servicio de urgencias para hospitalización. # CLASS: end

Averiguar los indices virológicos en los días anteriores o otra etiología obvia.

-> Restart

=== Restart ===

+ Próxima consulta
# RESTART
    
-> END
