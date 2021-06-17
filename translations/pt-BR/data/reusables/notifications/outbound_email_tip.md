{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
{% note %}

**Observação**: Você só receberá notificações por e-mail se o suporte a e-mails de saída estiver habilitado em {% data variables.product.product_location %}. Para mais informações, entre em contato com o administrador do site.

{% endnote %}
{% endif %}
