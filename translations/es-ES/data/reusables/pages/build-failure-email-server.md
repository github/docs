{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  {% tip %}

  Solo recibiras un correo electrónico si habilitas la compatibilidad con correo externo en {% data variables.product.product_location %}. Para obtener más información, contacta a tu administrador de sitio.

  {% endtip %}
{% endif %}
