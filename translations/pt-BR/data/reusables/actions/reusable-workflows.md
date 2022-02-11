{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

{% ifversion ghes or ghec or ghae %}You can share workflows with your organization, publicly or privately, by calling{% else %} You can call{% endif %} one workflow from within another workflow. Isso permite a reutilização de fluxos de trabalho, evitando duplicação e tornando seus fluxos de trabalho mais fáceis de manter. Para obter mais informações, consulte "[Reutilizando fluxos de trabalho](/actions/learn-github-actions/reusing-workflows)".
{% endif %}
