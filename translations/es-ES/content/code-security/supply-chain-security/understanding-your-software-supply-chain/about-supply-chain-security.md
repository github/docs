---
title: Acerca de la seguridad de la cadena de suministro
intro: '{% data variables.product.product_name %} te ayuda a asegurar tu cadena de suministro, desde entender las dependencias en tu ambiente hasta conocer las vulnerabilidades en dichas dependencias{% ifversion fpt or ghec or ghes > 3.2 %} y parcharlas{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Seguridad de la cadena de suministro
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
---

## Acerca de la seguridad de la cadena de suministro en GitHub

Con el uso acelerado del código abierto, la mayoría de los proyectos dependen de cientos de dependencias de código abierto. Esto representa un problema de seguridad: ¿Qué pasa si las dependencias que estás utilizando son vulnerables? Podrías estár poniendo a tus usuarios en riego de un ataque a la cadena de suministro. Una de las cosas más importantes que puedes hacer para proteger a tu cadena de suministro es parchar tus dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} y reemplazar cualqueir malware{% endif %}.

Puedes agregar dependencias directamente a tu cadena de suministro cuando las especificas en un archivo de bloqueo o de manifiesto. Las dependencias también se pueden incluir transitoriamiente, es decir, incluso si no especificas una dependencia en particual, pero una de tus dependencias la utiliza y por lo tanto también dependes de ella.

{% data variables.product.product_name %} ofrece un rango de características que te ayudan a entender las dependencias en tu ambiente{% ifversion ghes < 3.3 or ghae %} y conocer las vulnerabilidades en dichas dependencias{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}, conocer las vulnerabilidades en dichas dependencias y parcharlas{% endif %}.

Las características de la cadena de suministro en {% data variables.product.product_name %} son:
- **Gráfica de dependencias**
- **Revisión de dependencias**
- **{% data variables.product.prodname_dependabot_alerts %} **
{% ifversion fpt or ghec or ghes > 3.2 %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}**{% endif %}

La gráfica de dependencias es central para la seguridad de la cadena de suministro. La gráfica de dependencias identifica todas las dependencias en nivel ascendente y lso dependientes en niveles descendientes públicos de un repositorio o paquete. Puedes ver las dependencias de tu repositorio y algunas de sus propiedades, como la información sobre las vulnerabilidades, en la gráfica de dependencias del repositorio.

Otras características de la cadena de suministro en {% data variables.product.prodname_dotcom %} dependen de la información que proporciona la gráfica de dependencias.

- La revisión de dependencias utiliza la gráfica de dependencias para identificar los cambios en las dependencias y ayudarte a entender el impacto de seguridad de estos cambios cuando revisas las soliciutudes de cambios.
- El {% data variables.product.prodname_dependabot %} hace referencias cruzadas de los datos de las dependencias que proporciona la gráfica de dependencias con la lista de asesorías publicada en la {% data variables.product.prodname_advisory_database %}, escanea tus dependencias y genera {% data variables.product.prodname_dependabot_alerts %} cuando se detecta una vulnerabilidad {% ifversion GH-advisory-db-supports-malware %}o malware{% endif %}potencial.
{% ifversion fpt or ghec or ghes > 3.2 %}- Las {% data variables.product.prodname_dependabot_security_updates %} utilizan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para ayudarte a actualizar las dependencias con vulnerabilidades conocidas en tu repositorio.

Las {% data variables.product.prodname_dependabot_version_updates %} no utilizan la gráfica de dependencias y dependen del versionamiento semántio de las dependencias en su lugar. Las {% data variables.product.prodname_dependabot_version_updates %} te ayudan a mantener tus dependencias actualizadas, incluso cuando no tienen ninguna vulnerabilidad.
{% endif %}

{% ifversion fpt or ghec or ghes %}
Para encontrar una guía de mejores prácticas en la seguridad de la cadena de suministro de extremo a extremo, incluyendo la protección de cuetnas personales, código y procesos de compilación, cosulta la sección "[Asegurar tu cadena de suminsitro de extremo a extremo](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)".
{% endif %}

## Resumen de características

### ¿Qué es la gráfica de dependencias?

Para generar la gráfica de dependencias, {% data variables.product.company_short %} toma las dependencias explícitas de un repositorio, las cuale se declaran en los archivos de bloqueo y de manifiesto. Cuando se habilita, la gráfica de dependencias analiza automáticamente todos los archivos de manifiesto de paquetes conocidos en el repositorio y los utiliza para construir una gráfica con nombres y versiones de las dependencias conocidas.

- La gráfica de dependencias incluye información en tus dependencias _directas_ y _transitorias_.
- La gráfica de dependencias se actualiza automáticamente cuando subes una confirmación a {% data variables.product.company_short %} que cambia o agrega un archivo de bloqueo o de manifiesto a la rama predeterminada y cuando alguien sube un cambio al repositorio de alguna de tus dependencias.
- Puedes ver la gráfica de dependencias si abres la página principal del repositorio en {% data variables.product.product_name %} y navegas a la pestaña de **perspectivas**.

{% ifversion dependency-submission-api %}
{% data reusables.dependency-submission.dependency-submission-link %}
{% endif %}

Para obtener más información sobre la gráfica de dependencias, consulta la sección "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### ¿Qué es la revisión de dependencias?

La revisión de dependencias ayuda a que los contribuyentes y revisores entiendan los cambios a las dependencias y su impacto de seguridad en todas las solicitudes de cambio.

- La revisión de dependencias te indica qué dependencias se agregaron, eliminaron o actualizaron en una solicitud de cambios. Puedes utilizar las fechas de lanzamiento, popularidad de las dependencias e información de vulnerabilidad para ayudarte a decidir si quieres o no aceptar el cambio.
- Puedes ver la revisión de dependencias para una solicitud de cambios si muestras el diff enriquecido en la pestaña de **Archivos que cambiaron**.

Para obtener más información sobre la revisión de dependencias, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

### ¿Qué es el Dependabot?

{% data variables.product.prodname_dependabot %} mantiene actualizadas tus dependencias informándote de cualquier vulnerabilidad de seguridad en ellas{% ifversion fpt or ghec or ghes > 3.2 or ghae %}, y abre solicitudes de cambios automáticamente para actualizarlas a la siguiente versión segura disponible cuando se activa una alerta del {% data variables.product.prodname_dependabot %} o a la versión más actual cuando se publica un lanzamiento{% else %} para que puedas actualziarla.{% endif %}.

{% ifversion fpt or ghec or ghes > 3.2 %}
El término "{% data variables.product.prodname_dependabot %}" comprende las siguientes características:
- {% data variables.product.prodname_dependabot_alerts %}—Notificación mostrada en la pestaña de **Seguridad** para el repositorio y en la gráfica de dependencias de este. La alerta incluye un enlace al archivo afectado en el proyecto e información acerca de la versión arreglada.
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %}—Actualizaciones activadas para mejorar tus dependencias a una versión segura cuando se activa una alerta.
   - {% data variables.product.prodname_dependabot_version_updates %}—Actualizaciones programadas para mantener tus dependencias actualizadas con la última versión.
{% endif %}

#### ¿Qué son las alertas del Dependabot?

Las {% data variables.product.prodname_dependabot_alerts %} resaltan los repositorios afectados por una vulnerabilidad recién descubierta con base en la gráfica de dependencias y la {% data variables.product.prodname_advisory_database %}, la cual contiene asesorías para las vulnerabilidades {% ifversion GH-advisory-db-supports-malware %} y malware{% endif %}conocidas.

- El {% data variables.product.prodname_dependabot %} lleva a cabo un escaneo para detectar dependencias inseguras y envía {% data variables.product.prodname_dependabot_alerts %} cuando:
{% ifversion fpt or ghec %}
   - Se agrega una asesoría nueva a la {% data variables.product.prodname_advisory_database %}.{% else %}
   - Se sincronizan los datos de las asesorías nuevas en {% data variables.product.product_location %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - Cambia la gráfica de dependencia para el repositorio.
- Las {% data variables.product.prodname_dependabot_alerts %} se muestran {% ifversion fpt or ghec or ghes %} en la pestaña de **Seguridad** del repositorio y{% endif %} en la gráfica de dependencias del repositorio. La alerta incluye {% ifversion fpt or ghec or ghes %}un enlace al archivo afectado en el proyecto e{% endif %}información sobre una versión corregida.

Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes > 3.2 %}
#### ¿Qué son las actualizaciones del Dependabot?

Hay dos tipos de {% data variables.product.prodname_dependabot_updates %}: las actualizaciones de _seguridad_ del {% data variables.product.prodname_dependabot %} y las actualizaciones de _versión_. El {% data variables.product.prodname_dependabot %} genera solicitudes de cambios automáticas para actualizar tus dependencias en ambos casos, pero hay varias diferencias.

{% data variables.product.prodname_dependabot_security_updates %}:
 - Activadas con una alerta del {% data variables.product.prodname_dependabot %}
 - Actualizar dependencias a la versión mínima que resuelve una vulnerabilidad conocida
 - Compatibles con los ecosistemas que soporta la gráfica de dependencias
 - No requiere un archivo de configuración, pero puedes utilizar uno para anular el comportamiento predeterminado

{% data variables.product.prodname_dependabot_version_updates %}:
 - Requiere un archivo de configuración
 - Se ejecuta en un itinerario que configuras
 - Actualiza dependencias a su última versión que coincida con la configuración
 - Compatible con un grupo de ecosistemas diferente

Para obtener más información sobre las {% data variables.product.prodname_dependabot_updates %}, consulta las secciones "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)" y "[Acerca de las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
{% endif %}

## Disponibilidad de características

{% ifversion fpt or ghec %}

Repositorios públicos:
- **Gráfica de dependencias**—habilitada predeterminadamente y no puede inhabilitarse.
- **Revisión de dependencias**—Habilitada predeterminadamente y no puede inhabilitarse.
- **{% data variables.product.prodname_dependabot_alerts %}**—no se habilita predeterminadamente. {% data variables.product.prodname_dotcom %} detecta las dependencias inseguras y muestra la información en la gráfica de dependencias, pero no genera {% data variables.product.prodname_dependabot_alerts %} predeterminadamente. Los propietarios de repositorios o las personas con acceso administrativo pueden habilitar las {% data variables.product.prodname_dependabot_alerts %}. También puedes habilitar o inhabilitar las alertas del Dependabot para todos los repositorios que pertenezcan a tu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Administrar los ajustes de análisis y seguridad para tu cuenta de usuario](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" o "[Administrar el análisis y seguridad para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Repositorios privados:
- **Gráfica de dependencias**—no se habilita predeterminadamente. Los administradores del repositorio pueden habilitar la característica. Para obtener más información, consulta la sección "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".
{% ifversion fpt %}
- **Revisión de dependencias**—disponible en los repositorios privados que pertenecen a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y tienen una licencia de {% data variables.product.prodname_GH_advanced_security %}. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Revisión de dependencias**—disponible para los repositorios privados que pertenecen a las organizaciones en caos de que tengas una licencia de {% data variables.product.prodname_GH_advanced_security %} y la gráfica de dependencias habilitada. Para obtener más información, consulta las secciones "[Acerca de la {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" y "[Explorar las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)"
{% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}**—no se habilita predeterminadamente. Los propietarios de los repositorios privados o las personas con acceso administrativo puede habilitar las {% data variables.product.prodname_dependabot_alerts %} si habilitan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para sus repositorios. También puedes habilitar o inhabilitar las alertas del Dependabot para todos los repositorios que pertenezcan a tu cuenta de usuario u organización. Para obtener más información, consulta la sección "[Administrar los ajustes de análisis y seguridad para tu cuenta de usuario](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" o "[Administrar el análisis y seguridad para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Cualquier tipo de repositorio:
- **{% data variables.product.prodname_dependabot_security_updates %}**—no se habilita predeterminadamente. Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información sobre cómo habilitar las actualizaciones de seguridad, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)".
- **{% data variables.product.prodname_dependabot_version_updates %}**—no se habilita predeterminadamente. Las personas con permisos de escritura en un repositorio pueden habilitar las {% data variables.product.prodname_dependabot_version_updates %}. Para obtener más información sobre cómo habilitar las actualizaciones de versión, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)".
{% endif %}

{% ifversion ghes or ghae %}
- **Gráfica de dependencias** y **{% data variables.product.prodname_dependabot_alerts %}**—no habilitadas predeterminadamente. Ambas características se configuran a nivel empresarial por el propietario de la empresa. Para obtener más información, consulta la sección {% ifversion ghes %}"[Habilitar la gráfica de dependencias para tu empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)" y {% endif %}"[Habilitar el {% data variables.product.prodname_dependabot %} para tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
- **Revisión de dependencias**—disponible cuando se habilita la gráfica de dependencias para {% data variables.product.product_location %} y cuando se habilita la {% data variables.product.prodname_advanced_security %} para la organización o el repositorio. Para obtener más información, consulta la sección "[Acerca de la {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".
{% endif %}
{% ifversion ghes > 3.2 %}
- **{% data variables.product.prodname_dependabot_security_updates %}**—no se habilita predeterminadamente. Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener más información sobre cómo habilitar las actualizaciones de seguridad, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)".
- **{% data variables.product.prodname_dependabot_version_updates %}**—no se habilita predeterminadamente. Las personas con permisos de escritura en un repositorio pueden habilitar las {% data variables.product.prodname_dependabot_version_updates %}. Para obtener más información sobre cómo habilitar las actualizaciones de versión, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)".
{% endif %}
