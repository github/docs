---
title: Acerca de asegurar tu repositorio
intro: '{% data variables.product.product_name %} proporciona varias formas para que puedas mantener tu repositorio seguro.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

### Configurar tu repositorio de forma segura

El primer paso para asegurar un repositorio es configurar quién puede ver y modificar tu código. Para obtener más información, consulta la sección "[Administrar la configuración de los repositorios](/github/administering-a-repository/managing-repository-settings)".

### Asegurar tu repositorio

{% data variables.product.prodname_dotcom %} cuenta con un conjunto de características cada vez mayor que te ayuda a mantener tu código seguro. Puedes encontrarlas en la pestaña de **Seguridad** de tu repositorio.

#### Available for all repositories

{% if currentVersion == "free-pro-team@latest" %}
- **Política de seguridad**

  Facilítale a las personas el poder reportar de forma confidencial las vulnerabilidades de seguridad que hayan encontrado en tu repositorio. Para obtener más información, consulta "[Aumentar la seguridad para tu repositorio](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository)".

- **Asesorías de seguridad**

  Debate en privado y arregla las vulnerabilidades de seguridad en el código de tu repositorio. Puedes entonces publicar la asesoría de seguridad para alertar a tu comunidad sobre la vulnerabilidad en cuestión y alentarlos a mejorar la versión que tienen actualmente. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".

- **{% data variables.product.prodname_dependabot_alerts %} y actualizaciones de seguridad**

  Ver alertas acerca de las dependencias de las cuales se sabe contienen vulnerabilidades de seguridad y elige si se generarán automáticamente las solicitudes de extracción para actualizar dichas dependencias. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" y "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
 {% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
- **{% data variables.product.prodname_dependabot_alerts %}**

  Visualiza las alertas sobre las dependencias de las cuales se conoce que contienen vulnerabilidades de seguridad y adminístralas. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
  {% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **Las actualizaciones de versión del {% data variables.product.prodname_dependabot %}**
Utiliza

  el {% data variables.product.prodname_dependabot %} para levantar solicitudes de cambios automáticamente para mantener actualizadas tus dependencias. Esto te ayuda a reducir tu exposición a las versiones anteriores de las dependencias. El utilizar versiones más nuevas facilita aún más la aplicación de parches si se descubren las vulnerabilidades de seguridad, y también facilita que las {% data variables.product.prodname_dependabot_security_updates %} levante las solicitudes de cambios exitosamente para mejorar las dependencias vulnerables. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)".
  {% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

#### Available {% if currentVersion == "free-pro-team@latest" %}for public repositories and for repositories {% endif %}with {% data variables.product.prodname_advanced_security %}

These features are available {% if currentVersion == "free-pro-team@latest" %}for all public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}

- **Alertas de {% data variables.product.prodname_code_scanning_capc %}**

  Detecta automáticamente las vulnerabilidades de seguridad y los errores de código en el código nuevo o modificado. Se resaltan los problemas potenciales, con información detallada, lo cual te permite arreglar el código antes de que se fusione en tu rama predeterminada. Para obtener más información, consulta la sección "[Acerca del escaneo de código"](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning).

- **Secretos detectados**

  {% if currentVersion == "free-pro-team@latest" %}For private repositories, view {% else if %}View {% endif %}any secrets that {% data variables.product.prodname_dotcom %} has found in your code. Deberías tratar a los tokens o las credenciales que se hayan registrado en tu repositorio como puestos en riesgo. Para obtener más información, consulta la sección "[Acerca del escaneo de secretos"](/github/administering-a-repository/about-secret-scanning).

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **Revisión de dependencias** - Muestra todo el impacto de los cambios a las dependencias y vee los detalles de las versiones vulnerables antes de que fusiones una solicitud de cambios. Para obtener más información, consulta la sección "[Revisar los cambios a las dependencias en una solicitud de cambios](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)".
{% endif %}

### Explorar las dependencias
La gráfica de dependencias de {% data variables.product.prodname_dotcom %} te permite explorar:

* Ecosistemas y paquetes de los cuales depende tu repositorio
* Repositorios y paquetes que dependen de tu repositorio

Debes habilitar la gráfica de dependencias antes de que {% data variables.product.prodname_dotcom %} pueda generar {% data variables.product.prodname_dependabot_alerts %} para las dependencias con vulnerabilidades de seguridad. {% if currentVersion == "free-pro-team@latest" %}Enabling the dependency graph also enables {% data variables.product.prodname_dotcom %} to run dependency reviews of pull requests.{% endif %}

Puedes encontrar la gráfica de dependencias en lapestaña de **Perspectivas** para tu repositorio. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
