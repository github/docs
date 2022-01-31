---
title: Parceiros de digitalização de segredo
intro: 'Lista de segredos compatíveis e parceiros com quem {% data variables.product.company_short %} trabalha para evitar o uso fraudulento de segredos cometidos acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## Lista de segredos compatíveis com repositórios públicos

O {% data variables.product.product_name %} atualmente verifica repositórios públicos para encontrar segredos emitidos pelos seguintes provedores de serviços.

{% data reusables.secret-scanning.partner-secret-list-public-repo %}
{% endif %}

{% ifversion fpt %}
As organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_GH_advanced_security %} podem executar {% data variables.product.prodname_secret_scanning %} em repositórios privados. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-partners).
{% endif %}

{% ifversion ghec or ghae or ghes %}
## Lista de segredos compatíveis {% ifversion ghec %}para repositórios privados{% endif %}

{% ifversion ghes > 3.1 or ghae or ghec %}
{% note %}

**Observação:** Você também pode definir padrões personalizados de {% data variables.product.prodname_secret_scanning %} que se aplicam somente ao seu repositório ou organização. Para obter mais informações, consulte "[Definir padrões personalizados para {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".

{% endnote %}
{% endif %}

{% data variables.product.prodname_dotcom %} atualmente faz a varredura de repositórios{% ifversion ghec %} privados{% endif %} para segredos emitidos pelos seguintes provedores de serviços.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}
{% endif %}

## Leia mais

- "[Protegendo o seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Manter a conta e os dados seguros](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[Programa de parceiros de {% data variables.product.prodname_secret_scanning_caps %}](/developers/overview/secret-scanning-partner-program)"
{%- else %}
- "[Programa de parceiros de {% data variables.product.prodname_secret_scanning_caps %}](/free-pro-team@latest/developers/overview/secret-scanning-partner-program)" na documentação de {% data variables.product.prodname_ghe_cloud %}
{% endif %}
