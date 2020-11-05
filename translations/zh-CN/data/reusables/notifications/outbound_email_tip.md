{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  {% tip %}

  如果在 {% data variables.product.product_location %} 上启用了出站电子邮件支持，您将只收到邮件通知。 更多信息请联系站点管理员。

  {% endtip %}
{% endif %}
