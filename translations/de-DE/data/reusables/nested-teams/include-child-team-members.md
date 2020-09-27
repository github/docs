{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
If you pass the `hellcat-preview` media type, team members will include the members of child teams.
{% else %}
Team members will include the members of child teams.
{% endif %}
