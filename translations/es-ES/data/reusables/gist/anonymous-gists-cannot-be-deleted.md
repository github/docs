{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
{% warning %}

**Advertencia:** Los gists anónimos no pueden borrarse del buscador web. Para borrar un gist anónimo, contacta a {% data variables.contact.contact_support %}. Por favor proporciona la URL del gist que deseas borrar.

{% endwarning %}
{% endif %}
