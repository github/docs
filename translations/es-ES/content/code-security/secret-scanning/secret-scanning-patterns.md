---
title: Patrones de análisis de secretos
intro: 'Listas de los secretos admitidos y los asociados con los que trabaja {% data variables.product.company_short %} para evitar el uso fraudulento de secretos que se confirmaron por accidente.'
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
ms.openlocfilehash: 68dd1338fc1812cd2fc40ba38949434a04986f86
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578646'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## Acerca de los patrones de {% data variables.product.prodname_secret_scanning %}

{% data variables.product.product_name %} mantiene estos conjuntos diferentes de patrones de {% data variables.product.prodname_secret_scanning %}:

1. **Patrones de asociados.** Se usan para detectar posibles secretos en todos los repositorios públicos. Para más información, consulte "[Secretos compatibles con patrones de asociados](#supported-secrets-for-partner-patterns)".
2. **Patrones de seguridad avanzada.** Se usan para detectar posibles secretos en repositorios con {% data variables.product.prodname_secret_scanning %} habilitado. {% ifversion ghec %} Para obtener más información, consulta "[Secretos compatibles con la seguridad avanzada](#supported-secrets-for-advanced-security)".{% endif %}{% ifversion secret-scanning-push-protection %}
3. **Patrones de protección de inserción.** Se usan para detectar posibles secretos en repositorios con {% data variables.product.prodname_secret_scanning %} como protección de inserción habilitada. Para obtener más información, consulta "[Secretos compatibles para la protección de inserción](#supported-secrets-for-push-protection)".{% endif %}

{% ifversion fpt %} Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_GH_advanced_security %} pueden habilitar {% data variables.product.prodname_secret_scanning_GHAS %} en sus repositorios. Para obtener más información sobre estos patrones, consulte la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security).
{% endif %}

## Secretos compatibles con patrones de asociados

Actualmente, {% data variables.product.product_name %} escanea los repositorios públicos en busca de secretos emitidos por los siguientes proveedores de servicios. Para obtener más información sobre {% data variables.product.prodname_secret_scanning_partner %}, consulte "[Acerca de {% data variables.product.prodname_secret_scanning_partner %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)."

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.partner-secret-list-public-repo %} {% endif %}

{% ifversion ghec or ghae or ghes %}
## Secretos compatibles{% ifversion ghec %} con la configuración avanzada{% endif %}

Cuando los datos {% data variables.product.prodname_secret_scanning_GHAS %} está habilitado, {% data variables.product.prodname_dotcom %} examina los secretos emitidos por los siguientes proveedores de servicios. {% ifversion ghec %}Para obtener más información sobre {% data variables.product.prodname_secret_scanning_GHAS %}, consulte "[Acerca de {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)."{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

Si usas la API REST para el examen de secretos, puedes usar `Secret type` para informar sobre secretos de emisores específicos. Para obtener más información, consulta "[Examen de secretos](/enterprise-cloud@latest/rest/secret-scanning)".
 
{% ifversion ghes or ghae or ghec %} {% note %}

**Nota:** También puede definir patrones personalizados de {% data variables.product.prodname_secret_scanning %} para el repositorio, la organización o la empresa. Para obtener más información, consulte "[Definición de patrones personalizados para {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".

{% endnote %} {% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %} {% endif %}

{% ifversion secret-scanning-push-protection %}
## Secretos compatibles para la protección de inserción

{% data variables.product.prodname_secret_scanning_caps %} como protección de inserción examina actualmente los repositorios en busca de secretos emitidos por los siguientes proveedores de servicios.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

{% endif %}
## Información adicional

- "[Protección del repositorio](/code-security/getting-started/securing-your-repository)"
- "[Protección de la cuenta y los datos](/github/authenticating-to-github/keeping-your-account-and-data-secure)" {%- ifversion fpt or ghec %}
- "[Programa de asociados de {% data variables.product.prodname_secret_scanning_caps %}](/developers/overview/secret-scanning-partner-program)" {%- else %}
- "[Programa de asociados de {% data variables.product.prodname_secret_scanning_caps %}](/free-pro-team@latest/developers/overview/secret-scanning-partner-program)" en la documentación de {% data variables.product.prodname_ghe_cloud %} {% endif %}
