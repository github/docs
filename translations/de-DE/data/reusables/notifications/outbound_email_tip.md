{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  {% tip %}

  Du wirst nur dann E-Mail-Benachrichtigungen erhalten, wenn der ausgehende E-Mail-Support auf {% data variables.product.product_location %} aktiviert ist. Für weitere Informationen kontaktiere Deinen Websiteadministrator.

  {% endtip %}
{% endif %}
