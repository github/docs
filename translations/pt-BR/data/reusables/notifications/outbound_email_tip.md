{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  {% tip %}

  Você só receberá notificações por e-mail se o suporte a e-mails de saída estiver ativado no {% data variables.product.product_location %}. Para mais informações, entre em contato com o administrador do site.

  {% endtip %}
{% endif %}
