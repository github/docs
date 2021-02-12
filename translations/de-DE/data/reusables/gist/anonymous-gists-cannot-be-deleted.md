{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
{% warning %}

**Warnung:** Anonyme Gists können nicht aus dem Webbrowser gelöscht werden. Um einen anonymen Gist löschen zu lassen, wende Dich an {% data variables.contact.contact_support %}. Bitte gib die URL des Gist an, den Du löschen möchtest.

{% endwarning %}
{% endif %}
