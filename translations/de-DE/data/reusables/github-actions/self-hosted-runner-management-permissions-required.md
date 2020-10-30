Ein selbst-gehosteter Läufer kann entweder in Deinen Organisations- oder Repository-Einstellungen auf {% data variables.product.prodname_dotcom %} gefunden werden. Um einen selbst-gehosteten Läufer zu verwalten, musst Du über die folgenden Berechtigungen verfügen, abhängig davon, wo der selbst-gehostete Läufer hinzugefügt wurde:
- **User repository**: You must be the repository owner.
- **Organization**: You must be an organization owner.
- **Organization repository**: You must be an organization owner, or have admin access to the repository.
{% if currentVersion == "free-pro-team@latest" %}
- **Enterprise account**: You must be an enterprise owner.
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
- **Enterprise**: You must be a {% data variables.product.prodname_enterprise %} site administrator.
{% endif %}
