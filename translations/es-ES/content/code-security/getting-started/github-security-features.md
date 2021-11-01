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
---

## Acerca de las característicfas de seguridad de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} tiene características de seguridad que ayudan a mantener seguros el código y los secretos en los repositorios y a través de las organizaciones. Algunas características están disponibles para todos los repositorios y otras solo están disponibles {% ifversion fpt or ghec %}para repositorios públicos y para aquellos{% endif %}con una licencia de {% data variables.product.prodname_GH_advanced_security %}.

La {% data variables.product.prodname_advisory_database %} contiene una lista organizada de vulnerabilidades de seguridad que puedes ver, buscar y filtrar. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## Disponible para todos los repositorios
{% endif %}
{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
### Política de seguridad

Facilítale a tus usuarios el poder reportar de forma confidencial las vulnerabilidades de seguridad que hayan encontrado en tu repositorio. Para obtener más información, consulta "[Aumentar la seguridad para tu repositorio](/code-security/getting-started/adding-a-security-policy-to-your-repository)".
{% endif %}

{% ifversion fpt or ghec %}
### Asesorías de seguridad

Debate en privado y arregla las vulnerabilidades de seguridad en el código de tu repositorio. Entonces podrás publicar una asesoría de seguridad para alertar a tu comunidad sobre la vulnerabilidad y exhortar a sus miembros a hacer la actualización correspondiente. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".

### {% data variables.product.prodname_dependabot_alerts %} y actualizaciones de seguridad

Ver alertas acerca de las dependencias de las cuales se sabe contienen vulnerabilidades de seguridad y elige si se generarán automáticamente las solicitudes de extracción para actualizar dichas dependencias. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" y "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% ifversion ghes or ghae-issue-4864 %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Visualiza las alertas sobre las dependencias de las cuales se conoce que contienen vulnerabilidades de seguridad y adminístralas. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}

{% ifversion fpt or ghec %}
### Las actualizaciones de versión del {% data variables.product.prodname_dependabot %}

Utilizan al {% data variables.product.prodname_dependabot %} para levantar las solicitudes de cambios automáticamente para mantener tus dependencias actualizadas. Esto te ayuda a reducir tu exposición a las versiones anteriores de las dependencias. El utilizar versiones más nuevas facilita aún más la aplicación de parches si se descubren las vulnerabilidades de seguridad, y también facilita que las {% data variables.product.prodname_dependabot_security_updates %} levante las solicitudes de cambios exitosamente para mejorar las dependencias vulnerables. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)".
{% endif %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
### Gráfica de dependencias
La gráfica de dependencias te permite explorar los ecosistemas y paquetes de los cuales depende tu repositorio y los repositorios y paquetes que dependen de tu repositorio.

Puedes encontrar la gráfica de dependencias en lapestaña de **Perspectivas** para tu repositorio. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{% endif %}

## Disponible {% ifversion fpt or ghec %}para los repositorios públicos y para aquellos {% endif %}con {% data variables.product.prodname_advanced_security %}

{% ifversion fpt or ghes or ghec %}
Estas características están disponibles {% ifversion fpt or ghec %}para todos los repositorios públicos y para los repositorios privados que pertenezcan a las organizaciones con {% else %}si tienes {% endif %}una licencia de {% data variables.product.prodname_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

### Alertas de {% data variables.product.prodname_code_scanning_capc %}

Detecta automáticamente las vulnerabilidades de seguridad y los errores de código en el código nuevo o modificado. Se resaltan los problemas potenciales, con información detallada, lo cual te permite arreglar el código antes de que se fusione en tu rama predeterminada. Para obtener más información, consulta la sección "[Acerca del escaneo de código"](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning).

### alertas del {% data variables.product.prodname_secret_scanning_caps %}

{% ifversion fpt or ghec %}Para los repositorios privados, ve {% else %}Ve {% endif %}cualquier secreto que {% data variables.product.prodname_dotcom %} haya encontrado en tu código. Deberías tratar a los tokens o las credenciales que se hayan registrado en tu repositorio como puestos en riesgo. Para obtener más información, consulta la sección "[Acerca del escaneo de secretos"](/github/administering-a-repository/about-secret-scanning).

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}
### Revisión de dependencias

Muestra el impacto total de los cambios a las dependencias y ve los detalles de cualquier versión vulnerable antes de que fusiones una solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

## Leer más
- "[Productos de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products)"
- "[soporte de idiomas de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support)"
