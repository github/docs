---
title: Características de seguridad de GitHub
intro: 'Un resumen de las características de seguridad de {% data variables.product.prodname_dotcom %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

### Acerca de las característicfas de seguridad de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} tiene características de seguridad que ayudan a mantener seguros el código y los secretos en los repositorios y a través de las organizaciones. Algunas características están disponibles para todos los repositorios y otras solo están disponibles {% if currentVersion == "free-pro-team@latest" %}para repositorios públicos y para aquellos{% endif %}con una licencia de {% data variables.product.prodname_GH_advanced_security %}.

La {% data variables.product.prodname_advisory_database %} contiene una lista organizada de vulnerabilidades de seguridad que puedes ver, buscar y filtrar. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Disponible para todos los repositorios

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
#### Política de seguridad

Facilítale a tus usuarios el poder reportar de forma confidencial las vulnerabilidades de seguridad que hayan encontrado en tu repositorio. Para obtener más información, consulta "[Aumentar la seguridad para tu repositorio](/code-security/getting-started/adding-a-security-policy-to-your-repository)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### Asesorías de seguridad

Debate en privado y arregla las vulnerabilidades de seguridad en el código de tu repositorio. Entonces podrás publicar una asesoría de seguridad para alertar a tu comunidad sobre la vulnerabilidad y exhortar a sus miembros a hacer la actualización correspondiente. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".

#### {% data variables.product.prodname_dependabot_alerts %} y actualizaciones de seguridad

Ver alertas acerca de las dependencias de las cuales se sabe contienen vulnerabilidades de seguridad y elige si se generarán automáticamente las solicitudes de extracción para actualizar dichas dependencias. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" y "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
#### {% data variables.product.prodname_dependabot_alerts %}

Visualiza las alertas sobre las dependencias de las cuales se conoce que contienen vulnerabilidades de seguridad y adminístralas. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### Las actualizaciones de versión del {% data variables.product.prodname_dependabot %}

Utilizan al {% data variables.product.prodname_dependabot %} para levantar las solicitudes de cambios automáticamente para mantener tus dependencias actualizadas. Esto te ayuda a reducir tu exposición a las versiones anteriores de las dependencias. El utilizar versiones más nuevas facilita aún más la aplicación de parches si se descubren las vulnerabilidades de seguridad, y también facilita que las {% data variables.product.prodname_dependabot_security_updates %} levante las solicitudes de cambios exitosamente para mejorar las dependencias vulnerables. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)".
{% endif %}

#### Gráfica de dependencias
La gráfica de dependencias te permite explorar los ecosistemas y paquetes de los cuales depende tu repositorio y los repositorios y paquetes que dependen de tu repositorio.

Puedes encontrar la gráfica de dependencias en lapestaña de **Perspectivas** para tu repositorio. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

### Disponible {% if currentVersion == "free-pro-team@latest" %}para los repositorios públicos y para aquellos {% endif %}con {% data variables.product.prodname_advanced_security %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
Estas características están disponibles {% if currentVersion == "free-pro-team@latest" %}para todos los repositorios públicos y para los repositorios privados que pertenezcan a las organizaciones con {% else %}si tienes {% endif %}una licencia de {% data variables.product.prodname_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

#### Alertas de {% data variables.product.prodname_code_scanning_capc %}

Detecta automáticamente las vulnerabilidades de seguridad y los errores de código en el código nuevo o modificado. Se resaltan los problemas potenciales, con información detallada, lo cual te permite arreglar el código antes de que se fusione en tu rama predeterminada. Para obtener más información, consulta la sección "[Acerca del escaneo de código"](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning).

#### alertas del {% data variables.product.prodname_secret_scanning_caps %}

{% if currentVersion == "free-pro-team@latest" %}Para los repositorios privados, ve {% else %}Ve {% endif %}cualquier secreto que {% data variables.product.prodname_dotcom %} haya encontrado en tu código. Deberías tratar a los tokens o las credenciales que se hayan registrado en tu repositorio como puestos en riesgo. Para obtener más información, consulta la sección "[Acerca del escaneo de secretos"](/github/administering-a-repository/about-secret-scanning).

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
#### Revisión de dependencias

Muestra el impacto total de los cambios a las dependencias y ve los detalles de cualquier versión vulnerable antes de que fusiones una solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

### Leer más
- "[Productos de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)"
- "[soporte de idiomas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support)"
