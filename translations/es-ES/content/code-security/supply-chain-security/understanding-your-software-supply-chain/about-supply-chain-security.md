---
title: Acerca de la seguridad de la cadena de suministro
intro: '{% data variables.product.product_name %} te ayuda a proteger la cadena de suministro, desde comprender las dependencias de tu entorno a conocer las vulnerabilidades de dichas dependencias {% ifversion fpt or ghec or ghes %} y aplicarles revisiones{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Supply chain security
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
ms.openlocfilehash: 7c059876a27969b4664d5c8d94dec357a135c2de
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106505'
---
## Acerca de la seguridad de la cadena de suministro en GitHub

Con el uso acelerado del código abierto, la mayoría de los proyectos dependen de cientos de dependencias de código abierto. Esto plantea un problema de seguridad: ¿qué ocurre si las dependencias que usa son vulnerables? Podría poner a los usuarios en riesgo de un ataque de cadena de suministro. Una de las cosas más importantes que puedes hacer para proteger la cadena de suministro es revisar las dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} y reemplazar cualquier malware{% endif %}.

Las dependencias se agregan directamente a la cadena de suministro cuando se especifican en un archivo de manifiesto o en un archivo de bloqueo. Las dependencias también se pueden incluir de forma transitiva, es decir, incluso si no especifica una dependencia concreta, pero se usa en una dependencia propia, también dependerá de esa dependencia.

{% data variables.product.product_name %} ofrece diversas características para ayudarte a comprender las dependencias del entorno{% ifversion ghae %} y conocer las vulnerabilidades de esas dependencias{% endif %}{% ifversion fpt or ghec or ghes %}, conocer las vulnerabilidades de esas dependencias y aplicarles revisiones{% endif %}. 

Las características de la cadena de suministro en {% data variables.product.product_name %} son las siguientes:
- **Gráfica de dependencias**
- **Revisión de dependencias**
- **{% data variables.product.prodname_dependabot_alerts %} ** {% ifversion fpt or ghec or ghes %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}** {% endif %}

El gráfico de dependencias es fundamental para la seguridad de la cadena de suministro. En el gráfico de dependencias se identifican todas las dependencias ascendentes y las dependencias descendentes públicas de un repositorio o paquete. En el gráfico de dependencias del repositorio puede ver las dependencias del repositorio y algunas de sus propiedades, como la información de vulnerabilidad. 

Otras características de la cadena de suministro de {% data variables.product.prodname_dotcom %} dependen de la información proporcionada por el gráfico de dependencias.

- La revisión de dependencias usa el gráfico de dependencias para identificar los cambios de dependencias y ayudarle a comprender el impacto en la seguridad de estos cambios al revisar solicitudes de incorporación de cambios.
- {% data variables.product.prodname_dependabot %} realiza referencias cruzadas entre los datos de dependencia proporcionados por el gráfico de dependencias y la lista de avisos publicados en {% data variables.product.prodname_advisory_database %}, examina las dependencias y genera {% data variables.product.prodname_dependabot_alerts %} cuando se detecta una vulnerabilidad posible {% ifversion GH-advisory-db-supports-malware %}o malware{% endif %}.
{% ifversion fpt or ghec or ghes %}- Las {% data variables.product.prodname_dependabot_security_updates %} usan el gráfico de dependencias y {% data variables.product.prodname_dependabot_alerts %} para ayudarte a actualizar las dependencias con vulnerabilidades conocidas en el repositorio.

{% data variables.product.prodname_dependabot_version_updates %} no usan el gráfico de dependencias y en su lugar se basan en el control de versiones semántico de las dependencias. {% data variables.product.prodname_dependabot_version_updates %} ayudan a mantener actualizadas las dependencias, incluso cuando no tienen ninguna vulnerabilidad.
{% endif %}

{% ifversion fpt or ghec or ghes %} Para obtener guías de procedimientos recomendados sobre la seguridad de la cadena de suministro de un extremo a otro, incluida la protección de cuentas personales, código y procesos de compilación, consulta "[Protección de la cadena de suministro de un extremo a otro](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)".
{% endif %}

## Introducción a las características

### Qué es el gráfico de dependencias

Para generar el gráfico de dependencias, {% data variables.product.company_short %} examina las dependencias explícitas de un repositorio declaradas en el manifiesto y los archivos de bloqueo. Cuando se habilita, el gráfico de dependencias analiza automáticamente todos los archivos de manifiesto de paquete conocidos del repositorio y los usa para construir un gráfico con versiones y nombres de dependencia conocidos.

- El gráfico de dependencias incluye información sobre las dependencias _directas_ y las _transitivas_. 
- El gráfico de dependencias se actualiza automáticamente al insertar una confirmación en {% data variables.product.company_short %} que cambia o agrega un archivo de manifiesto o de bloqueo admitido a la rama predeterminada y cuando alguien inserta un cambio en el repositorio de una de las dependencias.
- Para ver el gráfico de dependencias, abra la página principal del repositorio en {% data variables.product.product_name %} y vaya a la pestaña **Conclusiones**.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Para más información sobre el gráfico de dependencias, vea "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### Qué es la revisión de dependencias

La revisión de dependencias ayuda a los revisores y colaboradores a comprender los cambios de dependencia y su impacto en la seguridad en cada solicitud de incorporación de cambios. 

- La revisión de dependencias indica qué dependencias se han agregado, quitado o actualizado en una solicitud de incorporación de cambios. Puede usar las fechas de lanzamiento, la popularidad de las dependencias y la información de vulnerabilidad para ayudarle a decidir si quiere aceptar el cambio.
- Puede ver la revisión de dependencias de una solicitud de incorporación de cambios si muestra la diferencia enriquecida en la pestaña **Archivos cambiados**.

Para más información sobre la revisión de dependencias, vea "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

### Qué es Dependabot

{% data variables.product.prodname_dependabot %} mantiene actualizadas las dependencias para lo cual te informa de cualquier vulnerabilidad de seguridad en ellas{% ifversion fpt or ghec or ghes %}, y abre solicitudes de incorporación de cambios de forma automática para actualizar las dependencias a la siguiente versión segura disponible cuando se desencadena una alerta de {% data variables.product.prodname_dependabot %}, o bien a la versión más reciente cuando se publica una versión{% else %} para que puedas actualizar esa dependencia.{% endif %}.

{% ifversion fpt or ghec or ghes %} El término "{% data variables.product.prodname_dependabot %}" abarca las características siguientes:
- {% data variables.product.prodname_dependabot_alerts %}: notificación mostrada en la pestaña **Seguridad** y en el gráfico de dependencias del repositorio. La alerta incluye un enlace al archivo afectado en el proyecto e información acerca de la versión arreglada.
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %}: actualizaciones desencadenadas para actualizar las dependencias a una versión segura cuando se desencadena una alerta.
   - {% data variables.product.prodname_dependabot_version_updates %}: actualizaciones programadas para mantener actualizadas las dependencias con la versión más reciente.

{% endif %}

{% ifversion fpt or ghec %}

Las {% data variables.product.prodname_dependabot_alerts %}, las {% data variables.product.prodname_dependabot_security_updates %} y las {% data variables.product.prodname_dependabot_version_updates %} no usan {% data variables.product.prodname_actions %} cuando se ejecutan en {% data variables.product.product_name %}. Sin embargo, las solicitudes de incorporación de cambios que {% data variables.product.prodname_dependabot %} abre pueden desencadenar flujos de trabajo que ejecutan acciones. Para obtener más información, consulte "[Automatización de {% data variables.product.prodname_dependabot %} con {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)".

{% elsif ghes %}

Las {% data variables.product.prodname_dependabot_security_updates %} y las {% data variables.product.prodname_dependabot_version_updates %} requieren que {% data variables.product.prodname_actions %} se ejecute en {% data variables.product.product_name %}. Las {% data variables.product.prodname_dependabot_alerts %} no necesitan {% data variables.product.prodname_actions %}. Para obtener más información, consulte "[Habilitación de {% data variables.product.prodname_dependabot %} para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% elsif ghae %}

{% data variables.product.prodname_actions %} no es necesario para que las {% data variables.product.prodname_dependabot_alerts %} se ejecuten en {% data variables.product.product_name %}.

{% endif %}

#### Qué son las alertas de Dependabot

{% data variables.product.prodname_dependabot_alerts %} resalta los repositorios afectados por una vulnerabilidad recién detectada en función del gráfico de dependencias y {% data variables.product.prodname_advisory_database %}, que contiene los avisos para las vulnerabilidades conocidas{% ifversion GH-advisory-db-supports-malware %} y el malware{% endif %}. 

- {% data variables.product.prodname_dependabot %} realiza un examen para detectar las dependencias no seguras y envía {% data variables.product.prodname_dependabot_alerts %} cuando: {% ifversion fpt or ghec %}
   - Se agrega un aviso nuevo a {% data variables.product.prodname_advisory_database %}.{% else %}
   - Se sincronizan nuevos datos de aviso en {% data variables.location.product_location %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - Cambia el gráfico de dependencias del repositorio. 
- {% data variables.product.prodname_dependabot_alerts %} se muestran {% ifversion fpt or ghec or ghes %} en la pestaña **Seguridad** del repositorio y{% endif %} en el gráfico de dependencias del repositorio. La alerta incluye {% ifversion fpt or ghec or ghes %}un vínculo al archivo afectado en el proyecto e {% endif %}información sobre una versión fija.

Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes %}
#### Qué son las actualizaciones de Dependabot

Hay dos tipos de {% data variables.product.prodname_dependabot_updates %}: actualizaciones de _seguridad_ y de _versión_ de {% data variables.product.prodname_dependabot %}. En los dos casos {% data variables.product.prodname_dependabot %} genera solicitudes de incorporación de cambios automáticas para actualizar las dependencias, pero hay varias diferencias.

{% data variables.product.prodname_dependabot_security_updates %}:
 - Desencadenada por una alerta de {% data variables.product.prodname_dependabot %}
 - Actualizan las dependencias a la versión mínima que resuelve una vulnerabilidad conocida
 - Compatible con ecosistemas admitidos en el gráfico de dependencias
 - No requiere un archivo de configuración, pero puedes usar uno para invalidar el comportamiento predeterminado.
 
{% data variables.product.prodname_dependabot_version_updates %}:
 - Requiere un archivo de configuración
 - Se ejecutan según una programación que configure
 - Actualizan las dependencias a la versión más reciente que coincida con la configuración
 - Compatible con un grupo diferente de ecosistemas

Para más información sobre {% data variables.product.prodname_dependabot_updates %}, vea "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)" y "[Acerca de {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
{% endif %}

## Disponibilidad de características

{% ifversion fpt or ghec %}

Repositorios públicos:
- **Gráfico de dependencias**: habilitado de forma predeterminada y no se puede deshabilitar.
- **Revisión de dependencias**: habilitada de forma predeterminada y no se puede deshabilitar.
- **{% data variables.product.prodname_dependabot_alerts %}** : no está habilitado de forma predeterminada. {% data variables.product.prodname_dotcom %} detecta las dependencias no seguras y muestra información en el gráfico de dependencias, pero no genera {% data variables.product.prodname_dependabot_alerts %} de forma predeterminada. Los propietarios de repositorios o los usuarios con acceso administrativo pueden habilitar las {% data variables.product.prodname_dependabot_alerts %}. 
  También puede habilitar o deshabilitar las alertas de Dependabot para todos los repositorios que pertenecen a la cuenta de usuario u organización. Para más información, vea "[Administración de la configuración de seguridad y análisis de la cuenta de usuario](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" o "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Repositorios privados:
- **Gráfico de dependencias**: no está habilitado de forma predeterminada. Los administradores del repositorio pueden habilitar la característica. Para más información, vea "[Exploración de las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".
{% ifversion fpt %}
- **Revisión de dependencias**: disponible en los repositorios privados propiedad de las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} y que tienen una licencia para {% data variables.product.prodname_GH_advanced_security %}. Para más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Revisión de dependencias**: disponible repositorios privados propiedad de las organizaciones, siempre que tenga una licencia para {% data variables.product.prodname_GH_advanced_security %} y haya habilitado el gráfico de dependencias. Para más información, vea "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" y "[Exploración de las dependencias de un repositorio](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)". {% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}** : no está habilitado de forma predeterminada. Los propietarios de los repositorios privados o las personas con acceso administrativo puede habilitar las {% data variables.product.prodname_dependabot_alerts %} si habilitan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para sus repositorios.
  También puede habilitar o deshabilitar las alertas de Dependabot para todos los repositorios que pertenecen a la cuenta de usuario u organización. Para más información, vea "[Administración de la configuración de seguridad y análisis de la cuenta de usuario](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" o "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Cualquier tipo de repositorio:
- **{% data variables.product.prodname_dependabot_security_updates %}** : no está habilitado de forma predeterminada. Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener información sobre cómo habilitar las actualizaciones de seguridad, vea "[Configuración de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)".
- **{% data variables.product.prodname_dependabot_version_updates %}** : no está habilitado de forma predeterminada. Las personas con permisos de escritura en un repositorio pueden habilitar las {% data variables.product.prodname_dependabot_version_updates %}. Para obtener información sobre cómo habilitar las actualizaciones de versiones, consulta "[Configuración de {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)".
{% endif %}

{% ifversion ghes or ghae %}
- **Gráfico de dependencias** y **{% data variables.product.prodname_dependabot_alerts %}** : no están habilitados de forma predeterminada. El propietario de la empresa configura las dos características en un nivel empresarial. Para más información, vea {% ifversion ghes %}"[Habilitación del gráfico de dependencias para la empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)" y {% endif %}"[Habilitación de {% data variables.product.prodname_dependabot %} para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
- **Revisión de dependencias**: disponible cuando se habilita el gráfico de dependencias para {% data variables.location.product_location %} y se habilita {% data variables.product.prodname_advanced_security %} para la organización o el repositorio. Para más información, consulte "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".
{% endif %} {% ifversion ghes %}
- **{% data variables.product.prodname_dependabot_security_updates %}** : no está habilitado de forma predeterminada. Puedes habilitar las {% data variables.product.prodname_dependabot_security_updates %} para cualquier repositorio que utilice {% data variables.product.prodname_dependabot_alerts %} y la gráfica de dependencias. Para obtener información sobre cómo habilitar las actualizaciones de seguridad, vea "[Configuración de {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)".
- **{% data variables.product.prodname_dependabot_version_updates %}** : no está habilitado de forma predeterminada. Las personas con permisos de escritura en un repositorio pueden habilitar las {% data variables.product.prodname_dependabot_version_updates %}. Para obtener información sobre cómo habilitar las actualizaciones de versiones, consulta "[Configuración de {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)".
{% endif %}
