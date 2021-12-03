Predeterminadamente, los artefactos y archivos de bitácora que generan los flujos de trabajo se retienen por 90 días antes de que se borren automáticamente. Puedes ajustar el periodo de retención dependiendo del tipo de repositorio:

{%- ifversion fpt or ghec or ghes %}
- Para los repositorios públicos: puedes cambiar este periodo de retención a cualquier cantidad entre 1 o 90 días.
{%- endif %}

- For private{% ifversion ghec or ghes or ghae %} and internal{% endif %} repositories: you can change this retention period to anywhere between 1 day or 400 days.

Cuando personalizas el periodo de retención, esto aplicará solamente a los artefactos y archivos de bitácora nuevos, y no aplicará retroactivamente a los objetos existentes. Para los repositorios y organizaciones administrados, el periodo de retención máximo no puede exceder el límite que configuró la organización o empresa administradora.
