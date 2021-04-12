{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
{% warning %}

**Warning:** Anonymous gists cannot be deleted from the web browser. To have an anonymous gist deleted, contact {% data variables.contact.contact_support %}. Please provide the URL of the gist you wish to delete.

{% endwarning %}
{% endif %}
