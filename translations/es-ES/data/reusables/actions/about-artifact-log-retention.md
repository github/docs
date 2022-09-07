Predeterminadamente, los artefactos y archivos de bitácora que generan los flujos de trabajo se retienen por 90 días antes de que se borren automáticamente.

{%- ifversion fpt or ghec %}
Puedes ajustar el periodo de retención dependiendo del tipo de repositorio:

- Para los repositorios públicos: puedes cambiar este periodo de retención a cualquier cantidad entre 1 o 90 días.
- En el caso de los repositorios privados {% ifversion ghec %} e internos{% endif %}: puedes cambiar este periodo de retención a cualquier valor entre 1 y 400 días.
{%- else %}
Puedes cambiar este periodo de retención a cualquiera entre 1 o 400 días.
{%- endif %}

Cuando personalizas el periodo de retención, esto aplicará solamente a los artefactos y archivos de bitácora nuevos, y no aplicará retroactivamente a los objetos existentes. Para los repositorios y organizaciones administrados, el periodo de retención máximo no puede exceder el límite que configuró la organización o empresa administradora.
