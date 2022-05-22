{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

{% ifversion ghes or ghec or ghae %}Você pode compartilhar fluxos de trabalho com sua organização, pública ou privadamente, chamando{% else %} Você pode chamar{% endif %} um fluxo de trabalho de dentro de outro fluxo de trabalho. Isso permite a reutilização de fluxos de trabalho, evitando duplicação e tornando seus fluxos de trabalho mais fáceis de manter. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".
{% endif %}
