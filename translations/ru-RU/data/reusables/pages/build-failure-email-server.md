{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  {% tip %}

  You will only receive an email if outbound email support is enabled on {% data variables.product.product_location %}. For more information, contact your site administrator.

  {% endtip %}
{% endif %}
