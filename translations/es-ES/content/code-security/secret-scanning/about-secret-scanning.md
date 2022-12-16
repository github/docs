---
title: Acerca del examen de secretos
intro: '{% data variables.product.product_name %} escanea repositorios para encontrar tipos conocidos de secretos para prevenir el uso fraudulento de aquellos que se confirmaron por accidente.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
ms.openlocfilehash: 18c77c929bcbe770fd44bfe5bec7e32143a2e604
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192949'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Acerca de {% data variables.product.prodname_secret_scanning %}

Si tu proyecto se comunica con un servicio externo, puedes utilizar un token o llave privada para autenticación. Los tokens y llaves privadas son ejemplos de secretos que puede emitir un proveedor de servicios. Si registras un secreto en un repositorio, cualquiera que tenga acceso de lectura al mismo puede utilizarlo para acceder al servicio externo con tus privilegios. Te recomendamos que almacenes los secretos en una ubicación dedicada y segura fuera del repositorio de tu proyecto.

{% data variables.product.prodname_secret_scanning_caps %} examinará todo el historial de Git en todas las ramas presentes en el repositorio de {% data variables.product.prodname_dotcom %} para buscar secretos{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, incluso si el repositorio está archivado{% endif %}. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %}

{% ifversion fpt or ghec %} {% data variables.product.prodname_secret_scanning_caps %} está disponible en {% data variables.product.prodname_dotcom_the_website %} de dos formas:

1. **{% data variables.product.prodname_secret_scanning_partner_caps %}.** Se ejecuta automáticamente en todos los repositorios públicos. Cualquier secuencia que coincida con los patrones que hayan proporcionado los socios del escaneo de secretos se reportarán directamente al socio relevante.

2. **{% data variables.product.prodname_secret_scanning_GHAS_caps %}.** {% ifversion fpt %}Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} con una licencia para {% data variables.product.prodname_GH_advanced_security %} pueden habilitar y configurar exámenes adicionales en los repositorios que pertenecen a la organización.{% elsif ghec %}Puedes habilitar y configurar exámenes adicionales en los repositorios que pertenecen a organizaciones que usan {% data variables.product.prodname_ghe_cloud %} y tienen una licencia para {% data variables.product.prodname_GH_advanced_security %}.{% endif %} Las cadenas que coinciden con los patrones proporcionados por los partners de exámenes de secretos, por otros proveedores de servicios o definidos por su organización, se notifican como alertas en la pestaña "Seguridad" de los repositorios. Si una cadena de un repositorio público coincide con un patrón de partner, también se le notifica al partner. {% endif %}{% ifversion fpt %} Para más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security).{% endif %}

Los proveedores de servicio pueden asociarse con {% data variables.product.company_short %} para proporcionar sus formatos de secreto para el escaneo de los mismos. {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

También puede habilitar {% data variables.product.prodname_secret_scanning %} como protección de inserción para un repositorio o una organización. Al habilitar esta característica, {% data variables.product.prodname_secret_scanning %} impide que los colaboradores inserten código con un secreto detectado. Para continuar, los colaboradores deben quitar los secretos de la inserción o, si es necesario, omitir la protección. {% ifversion push-protection-custom-link-orgs %}Los administradores también pueden especificar un vínculo personalizado que se muestra al colaborador cuando se bloquea una inserción; el vínculo puede incluir recursos específicos de la organización para ayudar a los colaboradores. {% endif %}Para obtener más información, consulta "[Protección de inserciones con {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".

{% endif %}

{% ifversion fpt or ghec %}
## Acerca de {% data variables.product.prodname_secret_scanning_partner %}

Cuando haces público a un repositorio o cuando subes cambios a un repositorio público, {% data variables.product.product_name %} siempre escanea el código en busca de los secretos que coinciden con los patrones socios. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} Si {% data variables.product.prodname_secret_scanning %} detecta un posible secreto, lo notificamos al proveedor del servicio que emitió el secreto. El proveedor de servicios valida la secuencia y luego decide si debería revocar el secreto, emitir uno nuevo o contactarte directamente. Su acción dependerá de los riesgos asociados contigo o con ellos. Para más información, vea "[Secretos admitidos para patrones de asociados](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)".

No puedes cambiar la configuración del {% data variables.product.prodname_secret_scanning %} en los repositorios públicos.

{% ifversion fpt %} {% note %}

{% data reusables.secret-scanning.fpt-GHAS-scans %}

{% endnote %} {% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## Acerca de {% data variables.product.prodname_secret_scanning_GHAS %}
{% elsif ghes or ghae %}
## Acerca del {% data variables.product.prodname_secret_scanning %} en {% data variables.product.product_name %}
{% endif %}

{% data variables.product.prodname_secret_scanning_GHAS_caps %} está disponible en todos los repositorios propiedad de la organización como parte de {% data variables.product.prodname_GH_advanced_security %}. No se encuentra disponible en repositorios que pertenezcan a usuarios individuales. Cuando habilitas el {% data variables.product.prodname_secret_scanning %} en un repositorio, {% data variables.product.prodname_dotcom %} escanea el código para encontrar patrones que coincidan con secretos que utilicen muchos proveedores de servicios. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} también ejecutará periódicamente un examen completo de historial de Git del contenido existente en los repositorios de {% data variables.product.prodname_GH_advanced_security %} donde el {% data variables.product.prodname_secret_scanning %} está habilitado, y enviará notificaciones de alerta conforme a lo establecido en la configuración de notificación de alertas de {% data variables.product.prodname_secret_scanning %}. {% endif %}Para obtener más información, consulta "{% ifversion ghec %}[Secretos admitidos para la seguridad avanzada](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security){% else %}[Patrones de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns){% endif %}".

{% ifversion secret-scanning-issue-body-comments %} {% note %}

**Nota:** {% data variables.product.prodname_secret_scanning_caps %} para las descripciones del problema y los comentarios se encuentra en versión beta pública y está sujeto a cambios.

{% endnote %} {% endif %}

Si es un administrador del repositorio, puede habilitar {% data variables.product.prodname_secret_scanning_GHAS %} de cualquier repositorio{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, incluidos los repositorios archivados{% endif %}. Los propietarios de las organizaciones también pueden habilitar la {% data variables.product.prodname_secret_scanning_GHAS %} para todos los repositorios o para aquellos nuevos dentro de una organización. Para más información, vea "[Administración de la configuración de seguridad y análisis del repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" y "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% ifversion ghes or ghae or ghec %}También se puede definir patrones personalizados de {% data variables.product.prodname_secret_scanning %} para un repositorio, una organización o una empresa. Para más información, vea "[Definición de patrones personalizados para {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".
{% endif %}

{% ifversion secret-scanning-ghas-store-tokens %} {% data variables.product.company_short %} almacena los secretos detectados mediante cifrado simétrico, tanto en tránsito como en reposo.{% endif %}{% ifversion ghes > 3.7 %} Para rotar las claves de cifrado usadas para almacenar los secretos detectados, puedes ponerte en contacto con {% data variables.contact.contact_ent_support %}.{% endif %}

### Acerca de las alertas del {% data variables.product.prodname_secret_scanning %}

Cuando el {% data variables.product.prodname_secret_scanning %} se habilita en un repositorio o se insertan confirmaciones en un repositorio con {% data variables.product.prodname_secret_scanning %} habilitado, {% data variables.product.prodname_dotcom %} examina el contenido de esas confirmaciones en busca de secretos que coincidan con los patrones definidos por proveedores de servicios{% ifversion ghes or ghae or ghec %} y con cualquier patrón personalizado en la empresa, organización o repositorio{% endif %}. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} también ejecuta periódicamente un examen de todo el contenido histórico en repositorios donde el {% data variables.product.prodname_secret_scanning %} está habilitado.{% endif%}

Si el {% data variables.product.prodname_secret_scanning %} detecta un secreto, {% data variables.product.prodname_dotcom %} generará una alerta.

- {% data variables.product.prodname_dotcom %} envía una alerta por correo electrónico a los administradores del repositorio y a los propietarios de la organización. Recibirás una alerta si estás observando el repositorio y si tienes habilitadas las notificaciones para las alertas de seguridad o para toda la actividad del repositorio.
{% ifversion ghes or ghae or ghec %}
- Si el colaborador que ha confirmado el secreto no ignora el repositorio, {% data variables.product.prodname_dotcom %} también enviará una alerta por correo electrónico al colaborador. Los correos electrónicos contienen un vínculo a la alerta de {% data variables.product.prodname_secret_scanning %} relacionada. El autor de la confirmación puede entonces ver la alerta en el repositorio y resolverla.
{% endif %}
- {% data variables.product.prodname_dotcom %} muestra una alerta en el la pestaña "Seguridad" del repositorio.

{% ifversion ghes or ghae or ghec %} Para más información sobre cómo ver y resolver las alertas de {% data variables.product.prodname_secret_scanning %}, vea "[Administración de alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

Los administradores de repositorio y propietarios de las organizaciones pueden otorgar a los usuarios y equipos acceso a las alertas del {% data variables.product.prodname_secret_scanning %}. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% ifversion ghec or ghes or ghae > 3.4 %} Puedes usar la información general de seguridad para obtener una vista de nivel de la organización de los repositorios en los que el {% data variables.product.prodname_secret_scanning %} se ha habilitado y las alertas detectadas. Para más información, vea "[Visualización de la información general sobre seguridad](/code-security/security-overview/viewing-the-security-overview)".
{% endif %}

{%- ifversion ghec or ghes or ghae %}También puedes usar la API de REST para supervisar los resultados del {% data variables.product.prodname_secret_scanning %} en los {% ifversion ghec %}repositorios {% endif %}privados{% ifversion ghes %} de la organización{% endif %}. Para obtener más información sobre los puntos de conexión de API, consulta "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)."{% endif %}

{% endif %}

## Información adicional

- "[Protección del repositorio](/code-security/getting-started/securing-your-repository)"
- "[Protección de la cuenta y los datos](/github/authenticating-to-github/keeping-your-account-and-data-secure)" {%- ifversion fpt or ghec %}
- "[Administración de secretos cifrados de los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %} {%- ifversion fpt or ghec or ghes %}
- "[Administración de secretos cifrados para Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)"{% endif %}
- "[Secretos cifrados](/actions/security-guides/encrypted-secrets)"
