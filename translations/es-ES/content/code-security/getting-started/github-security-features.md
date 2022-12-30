---
title: Características de seguridad de GitHub
intro: 'Un resumen de las características de seguridad de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
ms.openlocfilehash: ccd17816c0e5f62666520a677862c2a9f108c742
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158737'
---
## Acerca de las característicfas de seguridad de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} tiene características de seguridad que ayudan a mantener seguros el código y los secretos en los repositorios y a través de las organizaciones. {% data reusables.advanced-security.security-feature-availability %}

La {% data variables.product.prodname_advisory_database %} contiene una lista organizada de vulnerabilidades de seguridad que puedes ver, buscar y filtrar. {% data reusables.security-advisory.link-browsing-advisory-db %}

## Disponible para todos los repositorios
### Directiva de seguridad

Facilítale a tus usuarios el poder reportar de forma confidencial las vulnerabilidades de seguridad que hayan encontrado en tu repositorio. Para más información, vea "[Adición de una directiva de seguridad al repositorio](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

{% ifversion fpt or ghec %}
### Avisos de seguridad

Debate en privado y arregla las vulnerabilidades de seguridad en el código de tu repositorio. Entonces podrás publicar una asesoría de seguridad para alertar a tu comunidad sobre la vulnerabilidad y exhortar a sus miembros a hacer la actualización correspondiente. Para más información, consulta "[Acerca de los avisos de seguridad del repositorio](/github/managing-security-vulnerabilities/about-github-security-advisories)".

{% endif %} {% ifversion fpt or ghec or ghes %}

### {% data variables.product.prodname_dependabot_alerts %} y actualizaciones de seguridad

Ver alertas acerca de las dependencias de las cuales se sabe contienen vulnerabilidades de seguridad y elige si se generarán automáticamente las solicitudes de extracción para actualizar dichas dependencias. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" y "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% ifversion ghae %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Visualiza las alertas sobre las dependencias de las cuales se conoce que contienen vulnerabilidades de seguridad y adminístralas. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Las actualizaciones de versión del {% data variables.product.prodname_dependabot %}

Utilizan al {% data variables.product.prodname_dependabot %} para levantar las solicitudes de cambios automáticamente para mantener tus dependencias actualizadas. Esto te ayuda a reducir tu exposición a las versiones anteriores de las dependencias. El utilizar versiones más nuevas facilita aún más la aplicación de parches si se descubren las vulnerabilidades de seguridad, y también facilita que las {% data variables.product.prodname_dependabot_security_updates %} levante las solicitudes de cambios exitosamente para mejorar las dependencias vulnerables. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)".
{% endif %}

### Gráfico de dependencias
La gráfica de dependencias te permite explorar los ecosistemas y paquetes de los cuales depende tu repositorio y los repositorios y paquetes que dependen de tu repositorio.

Puede encontrar el gráfico de dependencias en la pestaña **Conclusiones** del repositorio. Para más información, vea "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% ifversion security-overview-displayed-alerts %}
### Introducción a la seguridad

La información general de seguridad le permite revisar las configuraciones de seguridad y las alertas, lo que facilita la identificación de los repositorios y las organizaciones en mayor riesgo. Para obtener más información, consulta "[Acerca de la introducción de seguridad](/code-security/security-overview/about-the-security-overview)".

{% else %}
### Resumen de seguridad para los repositorios
El resumen de seguridad muestra qué características de seguridad se habilitan para el repositorio y le ofrece la opción de configurar cualquier característica de seguridad que no se encuentre ya habilitada.
{% endif %}

## Disponible con {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %} Las siguientes características de {% data variables.product.prodname_GH_advanced_security %} se encuentran disponibles y son gratuitas para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}. Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} con una licencia para la {% data variables.product.prodname_GH_advanced_security %} pueden utilizar todo el conjunto de características en cualquiera de sus repositorios. Para obtener una lista de las características disponibles con {% data variables.product.prodname_ghe_cloud %}, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %} Muchas características de {% data variables.product.prodname_GH_advanced_security %} se encuentran disponibles y son gratuitas para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}. Las organizaciones con una empresa que tenga una licencia de la {% data variables.product.prodname_GH_advanced_security %} pueden utilizar todas las características siguientes en sus repositorios. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %} Las características de {% data variables.product.prodname_GH_advanced_security %} se encuentran disponibles para las empresas con una licencia para {% data variables.product.prodname_GH_advanced_security %}. Las características se restringen a los repositorios que le pertenecen a una organización. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %} Las características de {% data variables.product.prodname_GH_advanced_security %} se encuentran disponibles para los repositorios propiedad de una organización. {% data reusables.advanced-security.more-info-ghas %} {% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

Detecta automáticamente las vulnerabilidades de seguridad y los errores de código en el código nuevo o modificado. Se resaltan los problemas potenciales, con información detallada, lo cual te permite arreglar el código antes de que se fusione en tu rama predeterminada. Para más información, vea "[Acerca del análisis de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)".

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

Detecta secretos filtrados en todos los repositorios públicos automáticamente. {% data variables.product.company_short %} informa al proveedor de servicios relevante que los secretos podrían haberse puesto en riesgo. Para más información sobre los secretos y proveedores de servicios admitidos, vea "[Patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns)".
{% endif %}

{% ifversion ghec or ghes or ghae %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %} Disponible solo con una licencia de {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Detecta automáticamente tokens o credenciales que se haya registrado en un repositorio. Puedes ver las alertas de cualquier secreto que {% data variables.product.company_short %} encuentre en tu código para que sepas qué tokens o credenciales se deben tratar como puestas en riesgo. Para más información, vea "[Acerca del examen de secretos](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)".
{% endif %}

### Revisión de dependencias

Muestra el impacto total de los cambios a las dependencias y ve los detalles de cualquier versión vulnerable antes de que fusiones una solicitud de cambios. Para más información, vea "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion security-overview-displayed-alerts %}<!--Section appears in non-GHAS features above-->

{% elsif fpt %}<!--Feature requires enterprise product-->

{% else %}
### Información general de seguridad para organizaciones{% ifversion ghes > 3.4 or ghae > 3.4 %}, empresas{% endif %} y equipos

Revisa la configuración de seguridad y las alertas para tu organización e identifica los repositorios que tienen el mayor riesgo. Para obtener más información, consulta "[Acerca de la introducción de seguridad](/code-security/security-overview/about-the-security-overview)".
{% endif %}

## Información adicional
- "[Productos de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)"
- "[Compatibilidad con idiomas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support)"
