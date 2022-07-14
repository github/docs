---
title: Padrões de digitalização de segredo
intro: 'Lista de segredos compatíveis e parceiros com quem {% data variables.product.company_short %} trabalha para evitar o uso fraudulento de segredos cometidos acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## Sobre padrões de {% data variables.product.prodname_secret_scanning %}

{% data variables.product.product_name %} mantém dois conjuntos diferentes de padrões de {% data variables.product.prodname_secret_scanning %}:

1. **Padrões de parceiros.** Usado para detectar segredos potenciais em todos os repositórios públicos. Para obter detalhes, consulte "[Segredos compatíveis com padrões de parceiros](#supported-secrets-for-partner-patterns). "
2. **Padrões avançados de segurança.** Usado para detectar possíveis segredos em repositórios com {% data variables.product.prodname_secret_scanning %} habilitado. {% ifversion ghec %} Para obter detalhes, consulte "[Segredos compatíveis com a segurança avançada](#supported-secrets-for-advanced-security)."{% endif %}

{% ifversion fpt %}
As organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_GH_advanced_security %} podem habilitar {% data variables.product.prodname_secret_scanning_GHAS %} nos seus repositórios. Para obter detalhes sobre esses padrões, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security).
{% endif %}

## Segredos compatíveis com padrões de parceiros

O {% data variables.product.product_name %} atualmente verifica repositórios públicos para encontrar segredos emitidos pelos seguintes provedores de serviços. Para obter mais informações sobre {% data variables.product.prodname_secret_scanning_partner %}, consulte "[Sobre {% data variables.product.prodname_secret_scanning_partner %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)."

{% data reusables.secret-scanning.partner-secret-list-public-repo %}
{% endif %}

{% ifversion ghec or ghae or ghes %}
## Segredos compatíveis {% ifversion ghec %} para segurança avançada{% endif %}

Quando {% data variables.product.prodname_secret_scanning_GHAS %} está habilitado, {% data variables.product.prodname_dotcom %} digitalia os segredos emitidos pelos seguintes prestadores de serviços. {% ifversion ghec %}Para obter mais informações sobre {% data variables.product.prodname_secret_scanning_GHAS %}, consulte "[Sobre {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)."{% endif %}

Se você usar a API REST para a digitalização de segredo, você pode usar o tipo `tipo de segredo` para relatar segredos de emissores específicos. Para obter mais informações, consulte "[Verificação de segredo](/enterprise-cloud@latest/rest/secret-scanning)".

{% ifversion ghes or ghae or ghec %}
{% note %}

**Obersvação:** Você também pode definir padrões personalizados de {% data variables.product.prodname_secret_scanning %} para seu repositório, organização ou empresa. Para obter mais informações, consulte "[Definir padrões personalizados para {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".

{% endnote %}
{% endif %}

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
