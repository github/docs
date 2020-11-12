{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  {% tip %}

  You'll only receive email notifications if outbound email support is enabled on {% data variables.product.product_location %}. For more information, contact your site administrator.

  {% endtip %}
{% endif %}
