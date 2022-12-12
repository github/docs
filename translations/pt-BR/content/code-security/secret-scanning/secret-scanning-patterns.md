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
ms.openlocfilehash: 5684239d27daef532adf9aec79309d7430525a9e
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184501'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## Sobre padrões de {% data variables.product.prodname_secret_scanning %}

{% data variables.product.product_name %} mantém estes conjuntos diferentes de padrões de {% data variables.product.prodname_secret_scanning %}:

1. **Padrões de parceiros.** Usados para detectar possíveis segredos em todos os repositórios públicos. Para ver detalhes, confira "[Segredos compatíveis para padrões de parceiros](#supported-secrets-for-partner-patterns)".
2. **Padrões de segurança avançados.** Usados para detectar possíveis segredos em repositórios com a {% data variables.product.prodname_secret_scanning %} habilitada. {% ifversion ghec %} Para ver detalhes, confira "[Segredos compatíveis para segurança avançada](#supported-secrets-for-advanced-security)."{% endif %}{% ifversion secret-scanning-push-protection %}
3. **Padrões de proteção por push.** Usados para detectar possíveis segredos em repositórios com {% data variables.product.prodname_secret_scanning %} como uma proteção por push habilitada. Para obter detalhes, confira "[Segredos com suporte para proteção por push](#supported-secrets-for-push-protection)". {% endif %}

{% ifversion fpt %} As organizações que usam o {% data variables.product.prodname_ghe_cloud %} com o {% data variables.product.prodname_GH_advanced_security %} podem habilitar a {% data variables.product.prodname_secret_scanning_GHAS %} nos repositórios. Para ver detalhes desses padrões, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security).
{% endif %}

## Segredos compatíveis com padrões de parceiros

Atualmente, o {% data variables.product.product_name %} verifica os repositórios públicos em busca de segredos emitidos pelos provedores de serviços a seguir e alerta o provedor relevante sempre que um segredo é detectado em um commit. Para obter mais informações sobre o {% data variables.product.prodname_secret_scanning_partner %}, confira "[Sobre o {% data variables.product.prodname_secret_scanning_partner %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)".

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.partner-secret-list-public-repo %} {% endif %}

{% ifversion ghec or ghae or ghes %}
## Segredos compatíveis {% ifversion ghec %} para segurança avançada{% endif %}

Quando {% data variables.product.prodname_secret_scanning_GHAS %} está habilitado, {% data variables.product.prodname_dotcom %} digitalia os segredos emitidos pelos seguintes prestadores de serviços. {% ifversion ghec %}Para obter mais informações sobre a {% data variables.product.prodname_secret_scanning_GHAS %}, confira "[Sobre a {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)".{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

Se você usa a API REST para verificação de segredo, pode usar o `Secret type` para relatar segredos de emissores específicos. Para obter mais informações, confira "[Verificação de segredos](/enterprise-cloud@latest/rest/secret-scanning)".
 
{% ifversion ghes or ghae or ghec %} {% note %}

**Observação:** você também pode definir padrões personalizados da {% data variables.product.prodname_secret_scanning %} para seu repositório, sua organização ou sua empresa. Para obter mais informações, confira "[Como definir padrões personalizados para a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".

{% endnote %} {% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %} {% endif %}

{% ifversion secret-scanning-push-protection %}
## Segredos com suporte para proteção por push

Atualmente, o {% data variables.product.prodname_secret_scanning_caps %} como uma proteção por push verifica os repositórios em busca de segredos emitidos pelos provedores de serviços a seguir.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

{% endif %}
## Leitura adicional

- "[Como proteger seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Como manter sua conta e dados seguros](/github/authenticating-to-github/keeping-your-account-and-data-secure)" {%- ifversion fpt or ghec %}
- "[Programa de parceiros da {% data variables.product.prodname_secret_scanning_caps %}](/developers/overview/secret-scanning-partner-program)" {%- else %}
- "[Programa de parceiros da {% data variables.product.prodname_secret_scanning_caps %}](/free-pro-team@latest/developers/overview/secret-scanning-partner-program)" na documentação do {% data variables.product.prodname_ghe_cloud %} {% endif %}
