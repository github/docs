{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**Note:** To access the API with your GitHub App, you must provide a custom [media type](/v3/media) in the `Accept` Header for your requests.

`application/vnd.github.machine-man-preview+json`

{% endnote %}
{% endif %}
