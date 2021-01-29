---
title: Acerca del escaneo de secretos
intro: '{% data variables.product.product_name %} escanea repositorios para encontrar tipos conocidos de secretos para prevenir el uso fraudulento de aquellos que se confirmaron por accidente.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

Si tu proyecto se comunica con un servicio externo, puedes utilizar un token o llave privada para autenticación. Los tokens y llaves privadas son ejemplos de secretos que puede emitir un proveedor de servicios. Si registras un secreto en un repositorio, cualquiera que tenga acceso de lectura al mismo puede utilizarlo para acceder al servicio externo con tus privilegios. Te recomendamos que almacenes los secretos en una ubicación dedicada y segura fuera del repositorio de tu proyecto.
Service providers can partner with

{% data variables.product.company_short %} to provide their secret formats for scanning.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Secret scanning](/developers/overview/secret-scanning)."
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
### Acerca de {% data variables.product.prodname_secret_scanning %} para repositorios públicos

{% data variables.product.prodname_secret_scanning_caps %} is automatically enabled on public repositories. Cuando subes información a un repositorio público, {% data variables.product.product_name %} escanea el contenido de las confirmaciones para los secretos. Si cambias un repositorio de privado a público, {% data variables.product.product_name %} escanea todo el repositorio en busca de secretos.

Cuando {% data variables.product.prodname_secret_scanning %} detecta un conjunto de credenciales, notificamos al proveedor del servicio que emitió el secreto. El proveedor del servicio valida la credencial y luego decide si debería retirar el secreto, emitir uno nuevo, o contactarte directamente, lo cual dependerá de los riesgos asociados a ti o a dicho proveedor. For an overview of how we work with token-issuing partners, see "[Secret scanning](/developers/overview/secret-scanning)."

Actualmente, {% data variables.product.product_name %} escanea los repositorios públicos en busca de secretos emitidos por los siguientes proveedores de servicios.

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

### Acerca de {% data variables.product.prodname_secret_scanning %} para repositorios privados
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
### About {% data variables.product.prodname_secret_scanning %} on {% data variables.product.product_name %}

{% data variables.product.prodname_secret_scanning_caps %} is available on all organization-owned repositories as part of {% data variables.product.prodname_GH_advanced_security %}. It is not available on user-owned repositories.
{% endif %}

If you're a repository administrator or an organization owner, you can enable {% data variables.product.prodname_secret_scanning %} for {% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories that are owned by organizations. You can enable  {% data variables.product.prodname_secret_scanning %} for all your repositories, or for all new repositories within your organization.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_secret_scanning_caps %} is not available for user-owned private repositories.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

When you push commits to a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository, {% data variables.product.prodname_dotcom %} sends alerts.

- {% data variables.product.prodname_dotcom %} envía una alerta por correo electrónico a los administradores del repositorio y a los propietarios de la organización.

- {% data variables.product.prodname_dotcom %} muestra una alerta en el repositorio. Para obtener más información, consulta la sección "[Administrar alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".

Repository administrators and organization owners can grant users and teams access to {% data variables.product.prodname_secret_scanning %} alerts. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
To monitor results from
{% data variables.product.prodname_secret_scanning %} across your private repositories or your organization, you can use the {% data variables.product.prodname_secret_scanning %} API. For more information about API endpoints, see "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)."{% endif %}

{% data variables.product.prodname_dotcom %}  currently scans{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% note %}

**Nota:**{% data variables.product.prodname_secret_scanning_caps %} no permite actualmente que definas tus propios parámetros para detectar secretos.

{% endnote %}

### Further reading

- [Acerca de asegurar tu repositorio](/github/administering-a-repository/about-securing-your-repository)"
- "[Keeping your account and data secure](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
