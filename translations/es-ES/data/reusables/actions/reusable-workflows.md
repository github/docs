{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

{% ifversion ghes or ghec or ghae %}Puedes compartir flujos de trabajo con tu organización, privada o públicamente, si llamas{% else %} Puedes llamar{% endif %} a un flujo de trabajo desde dentro de otro. Esto te permite reutilizar flujos de trabajo, evitando la duplicación y haciendo que tus flujos se puedan mantener mejor. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".
{% endif %}
