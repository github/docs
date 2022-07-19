---
title: Patrones del escaneo de secretos
intro: 'Listas de los secretos compatibles y de los socios con los que trabaja {% data variables.product.company_short %} para prevenir el uso fraudulento de los secretos que se confirmaron por accidente.'
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
## Acerca de los patrones del {% data variables.product.prodname_secret_scanning %}

{% data variables.product.product_name %} mantiene dos conjuntos diferentes de patrones del {% data variables.product.prodname_secret_scanning %}:

1. **Patrones socios.** Se utilizan para detectar secretos potenciales en todos los repositorios públicos. Para obtener más detalles, consulta la sección "[Secretos compatibles para los patrones asociados](#supported-secrets-for-partner-patterns)".
2. **Patrones de seguridad avanzada.** Se utilizan para detectar secretos potenciales en los repositorios que tienen habilitado el {% data variables.product.prodname_secret_scanning %}. {% ifversion ghec %} Para obtener más detalles, consulta la sección "[Secretos compatibles para la seguridad avanzada](#supported-secrets-for-advanced-security)".{% endif %}

{% ifversion fpt %}
Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_GH_advanced_security %} pueden habilitar la {% data variables.product.prodname_secret_scanning_GHAS %} en sus repositorios. Para obtener los detalles sobre estos patrones, consulta la [documentaciòn de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security).
{% endif %}

## Secretos compatibles para los patrones asociados

Actualmente, {% data variables.product.product_name %} escanea los repositorios públicos en busca de secretos emitidos por los siguientes proveedores de servicios. Para obtener más información acerca de las {% data variables.product.prodname_secret_scanning_partner %}, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning_partner %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns)".

{% data reusables.secret-scanning.partner-secret-list-public-repo %}
{% endif %}

{% ifversion ghec or ghae or ghes %}
## Secretos compatibles{% ifversion ghec %} para la seguridad avanzada{% endif %}

Cuando se habilita la {% data variables.product.prodname_secret_scanning_GHAS %}, {% data variables.product.prodname_dotcom %} escanea en búsqueda de secretos que hayan emitido los siguientes proveedores de servicios. {% ifversion ghec %}Para obtener más información sobre {% data variables.product.prodname_secret_scanning_GHAS %}, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)".{% endif %}

Si utilizas la API de REST para el escaneo de secretos, puedes utilizar el `Secret type` para reportar secretos de emisores específicos. Para obtener más información, consulta "[Escaneo de secretos](/enterprise-cloud@latest/rest/secret-scanning)."

{% ifversion ghes or ghae or ghec %}
{% note %}

**Nota:** También puedes definir los patrones personalizados del {% data variables.product.prodname_secret_scanning %} para tu repositorio, organización o empresa. Para obtener más información, consulta la sección "[Definir los patrones personalizados para el {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".

{% endnote %}
{% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %}
{% endif %}

## Leer más

- "[Asegurar tu repositorio](/code-security/getting-started/securing-your-repository)"
- "[Mantener la seguridad en tu cuenta y tus datos](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[Programa asociado del {% data variables.product.prodname_secret_scanning_caps %}](/developers/overview/secret-scanning-partner-program)"
{%- else %}
- "[Programa asociado del {% data variables.product.prodname_secret_scanning_caps %}](/free-pro-team@latest/developers/overview/secret-scanning-partner-program)" en la documentación de {% data variables.product.prodname_ghe_cloud %}
{% endif %}
