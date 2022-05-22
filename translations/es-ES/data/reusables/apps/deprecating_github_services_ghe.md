{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**Nota:** El lanzamiento 2.17 de GitHub Enterprise y las versiones superiores ya no permiten que los administradores instalen GitHub Services nuevos, y los servicios existentes dejarán de funcionar en el lanzamiento 2.20 o superior de Github Enterprise. Puedes utilzar la [Guía para reemplazar GitHub Services](/developers/overview/replacing-github-services) para ayudarte a actualizar tus servicios a webhooks.

{% endnote %}
{% endif %}
