---
title: Acerca del escaneo de secretos
intro: '{% data variables.product.product_name %} escanea repositorios para encontrar tipos conocidos de secretos para prevenir el uso fraudulento de aquellos que se confirmaron por accidente.'
product: '{% data reusables.gated-features.secret-scanning %}'
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
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

Si tu proyecto se comunica con un servicio externo, puedes utilizar un token o llave privada para autenticación. Los tokens y llaves privadas son ejemplos de secretos que puede emitir un proveedor de servicios. Si registras un secreto en un repositorio, cualquiera que tenga acceso de lectura al mismo puede utilizarlo para acceder al servicio externo con tus privilegios. Te recomendamos que almacenes los secretos en una ubicación dedicada y segura fuera del repositorio de tu proyecto.

{% data variables.product.prodname_secret_scanning_caps %} escaneará todo tu historial de Git en todas las ramas presentes en tu repositorio de {% data variables.product.prodname_dotcom %} en búsqueda de cualquier secreto. Los proveedores de servicio pueden asociarse con {% data variables.product.company_short %} para proporcionar sus formatos de secreto para el escaneo.{% ifversion fpt or ghec %} Para obtener más información, consulta la sección "[Programa asociado para el escaneo de secretos](/developers/overview/secret-scanning-partner-program)".
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% ifversion fpt or ghec %}
## Acerca de {% data variables.product.prodname_secret_scanning %} para repositorios públicos

Las {% data variables.product.prodname_secret_scanning_caps %} se habilitan automáticamente en los repositorios públicos. Cuando subes información a un repositorio público, {% data variables.product.product_name %} escanea el contenido de las confirmaciones para los secretos. Si cambias un repositorio de privado a público, {% data variables.product.product_name %} escanea todo el repositorio en busca de secretos.

Cuando {% data variables.product.prodname_secret_scanning %} detecta un conjunto de credenciales, notificamos al proveedor del servicio que emitió el secreto. El proveedor del servicio valida la credencial y luego decide si debería retirar el secreto, emitir uno nuevo, o contactarte directamente, lo cual dependerá de los riesgos asociados a ti o a dicho proveedor. Para encontrar un resumen de cómo trabajamos con nuestros socios que emiten tokens, consulta la sección "[Porgrama de socios del escaneo de secretos](/developers/overview/secret-scanning-partner-program)".

Actualmente, {% data variables.product.product_name %} escanea los repositorios públicos en busca de secretos emitidos por los siguientes proveedores de servicios.

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

## Acerca de {% data variables.product.prodname_secret_scanning %} para repositorios privados
{% endif %}

{% ifversion ghes or ghae %}
## Acerca del {% data variables.product.prodname_secret_scanning %} en {% data variables.product.product_name %}

El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible en todos los repositorios que pertenezcan a la organización como parte de la {% data variables.product.prodname_GH_advanced_security %}. No se encuentra disponible en repositorios que pertenezcan a usuarios individuales.
{% endif %}

Si eres un administrador de repositorio o un propietario de organización, puedes habilitar el {% data variables.product.prodname_secret_scanning %} para los repositorios {% ifversion fpt or ghec %} privados{% endif %} que pertenezcan a las organizaciones. You can enable  {% data variables.product.prodname_secret_scanning %} for all your repositories, or for all new repositories within your organization.{% ifversion fpt or ghec %} {% data variables.product.prodname_secret_scanning_caps %} is not available for user-owned private repositories.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}You can also define custom {% data variables.product.prodname_secret_scanning %} patterns that only apply to your repository or organization. Para obtener más información, consulta la sección "[Definir los patrones personalizados para el {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".{% endif %}

When you push commits to a{% ifversion fpt or ghec %} private{% endif %} repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a{% ifversion fpt or ghec %} private{% endif %} repository, {% data variables.product.prodname_dotcom %} generates an alert.

- {% data variables.product.prodname_dotcom %} envía una alerta por correo electrónico a los administradores del repositorio y a los propietarios de la organización.
{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
- {% data variables.product.prodname_dotcom %} envía una alerta por correo electrónico al contribuyente que confirmó el secreto en el repositorio con un enlace a la alerta del {% data variables.product.prodname_secret_scanning %} relacionada. El autor de la confirmación puede entonces ver la alerta en el repositorio y resolverla.
{% endif %}
- {% data variables.product.prodname_dotcom %} muestra una alerta en el repositorio.{% ifversion ghes = 3.0 %} Para obtener más información, consulta la sección "[Administrar alertas desde {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
Para obtener más información sobre visualizar y resolver las alertas del {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Administrar alertas del {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

Los administradores de repositorio y propietarios de las organizaciones pueden otorgar a los usuarios y equipos acceso a las alertas del {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% ifversion fpt or ghes > 3.0 or ghec %}
Para monitorear los resultados del {% data variables.product.prodname_secret_scanning %} a lo largo de tus repositorios privados o de tu organización, puedes utilizar la API de {% data variables.product.prodname_secret_scanning %}. Para obtener más información acerca de las terminales de las API, consulta la sección "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)".{% endif %}

{% data variables.product.prodname_dotcom %}  currently scans{% ifversion fpt or ghec %} private{% endif %} repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% ifversion ghes < 3.2 or ghae %}
{% note %}

**Nota:**{% data variables.product.prodname_secret_scanning_caps %} no permite actualmente que definas tus propios parámetros para detectar secretos.

{% endnote %}
{% endif %}

## Leer más

- "[Asegurar tu repositorio](/code-security/getting-started/securing-your-repository)"
- "[Mantener la seguridad en tu cuenta y tus datos](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
