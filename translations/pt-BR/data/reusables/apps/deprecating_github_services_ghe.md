{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**Nota:** GitHub Enterprise versão 2. 7 e superiores não permitem mais que os administradores instalem novos Serviços GitHub e os serviços existentes deixarão de funcionar no GitHub Enterprise versão 2.20 ou superior. Você pode usar o [Replacing GitHub Services guide](/v3/guides/replacing-github-services) para ajudá-lo a atualizar seus serviços para webhooks.

{% endnote %}
{% endif %}
