---
title: Acerca del escaneo de secretos
intro: '{% data variables.product.product_name %} escanea repositorios para encontrar tipos conocidos de secretos para prevenir el uso fraudulento de aquellos que se confirmaron por accidente.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

Si tu proyecto se comunica con un servicio externo, puedes utilizar un token o llave privada para autenticación. Los tokens y llaves privadas son ejemplos de secretos que puede emitir un proveedor de servicios. Si registras un secreto en un repositorio, cualquiera que tenga acceso de lectura al mismo puede utilizarlo para acceder al servicio externo con tus privilegios. Te recomendamos que almacenes los secretos en una ubicación dedicada y segura fuera del repositorio de tu proyecto.

{% data variables.product.prodname_secret_scanning_caps %} escaneará todo tu historial de Git en todas las ramas presentes en tu repositorio de {% data variables.product.prodname_dotcom %} en búsqueda de cualquier secreto. Service providers can partner with {% data variables.product.company_short %} to provide their secret formats for scanning.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Secret scanning partner program](/developers/overview/secret-scanning-partner-program)."
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
### Acerca de {% data variables.product.prodname_secret_scanning %} para repositorios públicos

Las {% data variables.product.prodname_secret_scanning_caps %} se habilitan automáticamente en los repositorios públicos. Cuando subes información a un repositorio público, {% data variables.product.product_name %} escanea el contenido de las confirmaciones para los secretos. Si cambias un repositorio de privado a público, {% data variables.product.product_name %} escanea todo el repositorio en busca de secretos.

Cuando {% data variables.product.prodname_secret_scanning %} detecta un conjunto de credenciales, notificamos al proveedor del servicio que emitió el secreto. El proveedor del servicio valida la credencial y luego decide si debería retirar el secreto, emitir uno nuevo, o contactarte directamente, lo cual dependerá de los riesgos asociados a ti o a dicho proveedor. For an overview of how we work with token-issuing partners, see "[Secret scanning partner program](/developers/overview/secret-scanning-partner-program)."

Actualmente, {% data variables.product.product_name %} escanea los repositorios públicos en busca de secretos emitidos por los siguientes proveedores de servicios.

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

### Acerca de {% data variables.product.prodname_secret_scanning %} para repositorios privados
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Acerca del {% data variables.product.prodname_secret_scanning %} en {% data variables.product.product_name %}

El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible en todos los repositorios que pertenezcan a la organización como parte de la {% data variables.product.prodname_GH_advanced_security %}. No se encuentra disponible en repositorios que pertenezcan a usuarios individuales.
{% endif %}

Si eres un administrador de repositorio o un propietario de organización, puedes habilitar el {% data variables.product.prodname_secret_scanning %} para los repositorios {% if currentVersion == "free-pro-team@latest" %} privados{% endif %} que pertenezcan a las organizaciones. Puedes habilitar el {% data variables.product.prodname_secret_scanning %} para todos tus repositorios, o para todos los repositorios nuevos dentro de tu organización.{% if currentVersion == "free-pro-team@latest" %} El {% data variables.product.prodname_secret_scanning_caps %} no se encuentra disponible para los repositorios privados que pertenezcan a los usuarios individuales.{% endif %} para obtener más información, consulta las secciones "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" y "[Administrar la configuración de seguridad y análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}You can also define custom {% data variables.product.prodname_secret_scanning %} patterns that only apply to your repository or organization. For more information, see "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)."{% endif %}

Cuando subes tus confirmaciones a un repositorio{% if currentVersion == "free-pro-team@latest" %} privado{% endif %} que tenga habilitado el {% data variables.product.prodname_secret_scanning %}, {% data variables.product.prodname_dotcom %} escanea el contenido de las confirmaciones para encontrar secretos.

Cuando el {% data variables.product.prodname_secret_scanning %} detecta un secreto en un repositorio{% if currentVersion == "free-pro-team@latest" %} privado{% endif %}, {% data variables.product.prodname_dotcom %}genera una alerta.

- {% data variables.product.prodname_dotcom %} envía una alerta por correo electrónico a los administradores del repositorio y a los propietarios de la organización.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
- {% data variables.product.prodname_dotcom %} envía una alerta por correo electrónico al contribuyente que confirmó el secreto en el repositorio con un enlace a la alerta del {% data variables.product.prodname_secret_scanning %} relacionada. El autor de la confirmación puede entonces ver la alerta en el repositorio y resolverla.
{% endif %}
- {% data variables.product.prodname_dotcom %} muestra una alerta en el repositorio.{% if currentVersion == "enterprise-server@3.0" %} Para obtener más información, consulta la sección "[Administrar alertas desde {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
Para obtener más información sobre visualizar y resolver las alertas del {% data variables.product.prodname_secret_scanning %}, consulta la sección "[Administrar alertas del {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

Los administradores de repositorio y propietarios de las organizaciones pueden otorgar a los usuarios y equipos acceso a las alertas del {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
Para monitorear los resultados del {% data variables.product.prodname_secret_scanning %} a lo largo de tus repositorios privados o de tu organización, puedes utilizar la API de {% data variables.product.prodname_secret_scanning %}. Para obtener más información acerca de las terminales de las API, consulta la sección "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)".{% endif %}

{% data variables.product.prodname_dotcom %} escanea actualmente los repositorios{% if currentVersion == "free-pro-team@latest" %} privados{% endif %}  para los secretos que emiten los siguientes proveedores de servicios.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% if currentVersion ver_lt "enterprise-server@3.2" or currentVersion == "github-ae@latest" %}
{% note %}

**Nota:**{% data variables.product.prodname_secret_scanning_caps %} no permite actualmente que definas tus propios parámetros para detectar secretos.

{% endnote %}
{% endif %}

### Leer más

- "[Asegurar tu repositorio](/code-security/getting-started/securing-your-repository)"
- "[Mantener la seguridad en tu cuenta y tus datos](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
