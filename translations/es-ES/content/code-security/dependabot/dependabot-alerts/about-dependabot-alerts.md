---
title: Acerca de las alertas Dependabot
intro: '{% data variables.product.product_name %} envía {% data variables.product.prodname_dependabot_alerts %} cuando detectamos que el repositorio usa una dependencia vulnerable{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %}.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot alerts
ms.openlocfilehash: 737e5547e3aefd6b5c49780df0c78cdc73292ee4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106745'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## Acerca de {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %} {% data reusables.advisory-database.beta-malware-advisories %} {% endif %}

Las {% data variables.product.prodname_dependabot_alerts %} indican que el código depende de un paquete que no es seguro.

Si el código depende de un paquete con una vulnerabilidad de seguridad, esto puede causar una serie de problemas al proyecto o a las personas que lo usan. Debes actualizar a una versión segura del paquete lo antes posible.{% ifversion GH-advisory-db-supports-malware %} Si el código usa malware, debes reemplazar el paquete por una alternativa segura.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Detección de dependencias no seguras

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} lleva a cabo un examen para detectar las dependencias no seguras y envía {% data variables.product.prodname_dependabot_alerts %} cuando:

{% ifversion fpt or ghec %}
- Se agrega un aviso nuevo a {% data variables.product.prodname_advisory_database %}. Para obtener más información, consulta "[Exploración de avisos de seguridad en {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)."{% else %}
- Se sincronizan nuevos datos de aviso en {% data variables.location.product_location %} cada hora desde {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %} {% note %}

  **Nota:** Solo los avisos revisados por {% data variables.product.company_short %} desencadenarán {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- Cambia el gráfico de dependencias de un repositorio. Por ejemplo, cuando un colaborador inserta una confirmación para cambiar los paquetes o las versiones de las que depende {% ifversion fpt or ghec %}, o cuando el código de una de las dependencias cambia{% endif %}. Para más información, vea "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

Para ver una lista de los ecosistemas en los que {% data variables.product.product_name %} detecta dependencias no seguras, consulta "[Ecosistemas de paquetes admitidos](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

{% note %}

**Nota:** Es importante mantener actualizados el manifiesto y los archivos de bloqueo. Si el gráfico de dependencias no refleja con exactitud tus versiones y dependencias actuales, es posible que pases por alto las alertas de las dependencias no seguras que usas. También podrías obtener alertas de las dependencias que ya no utilizas.

{% endnote %}

##  Configuración de {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} detecta dependencias vulnerables y malware en repositorios _públicos_ y muestra el gráfico de dependencias, pero no genera {% data variables.product.prodname_dependabot_alerts %} de forma predeterminada. Los propietarios de repositorios o las personas con acceso administrativo pueden habilitar las {% data variables.product.prodname_dependabot_alerts %} para los repositorios públicos. Los propietarios de los repositorios privados o las personas con acceso administrativo puede habilitar las {% data variables.product.prodname_dependabot_alerts %} si habilitan la gráfica de dependencias y las {% data variables.product.prodname_dependabot_alerts %} para sus repositorios.

También puedes habilitar o deshabilitar {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que pertenezcan a tu cuenta de usuario u organización. Para más información, consulta "[Configuración de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)".

Para información sobre los requisitos de acceso para las acciones relacionadas con {% data variables.product.prodname_dependabot_alerts %}, consulta "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)".

{% data variables.product.product_name %} empieza a generar el gráfico de dependencias de inmediato y genera alertas de dependencias no seguras en cuanto las identifica. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Para obtener más información, vea "[Administración de la configuración de uso de datos para el repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".
{% endif %}

Cuando {% data variables.product.product_name %} identifica una dependencia vulnerable{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %}, generamos una alerta de {% data variables.product.prodname_dependabot %}, que se muestra{% ifversion fpt or ghec or ghes %} en la pestaña "Seguridad" del repositorio y{% endif %} en el gráfico de dependencias del repositorio. La alerta incluye {% ifversion fpt or ghec or ghes %}un vínculo al archivo afectado en el proyecto e {% endif %}información sobre una versión fija. {% data variables.product.product_name %} también podría notificar a los mantenedores de los repositorios afectados sobre la nueva alerta de acuerdo con sus preferencias de notificaciones. Para obtener más información, consulta "[Configuración de notificaciones para {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

{% ifversion fpt or ghec or ghes %} En los repositorios donde {% data variables.product.prodname_dependabot_security_updates %} están habilitadas, la alerta también puede contener un vínculo a una solicitud de incorporación de cambios para actualizar el manifiesto o el archivo de bloqueo a la versión mínima que resuelve la vulnerabilidad. Para obtener más información, consulte "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% warning %}

**Nota**: las características de seguridad de {% data variables.product.product_name %} no garantizan que se detectarán todas las vulnerabilidades{% ifversion GH-advisory-db-supports-malware %} y malware{% endif %}. Mantenemos {% data variables.product.prodname_advisory_database %} activamente y generamos alertas con la información más actualizada. Aun así, no podemos detectarlo todo ni informarle sobre vulnerabilidades conocidas dentro de un plazo garantizado. Estas características no sustituyen la revisión humana de posibles vulnerabilidades u otras incidencias en cada dependencia, y se recomienda consultar con un servicio de seguridad o realizar una revisión exhaustiva de las dependencias cuando sea necesario.

{% endwarning %}

## Acceder a las {% data variables.product.prodname_dependabot_alerts %}

Puede ver todas las alertas que afectan a un proyecto determinado{% ifversion fpt or ghec %} en la pestaña "Seguridad" del repositorio o{% endif %} en el gráfico de dependencias del repositorio. Para obtener más información, consulte "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)".

Predeterminadamente, notificamos a las personas con permisos administrativos en los repositorios afectados sobre las {% data variables.product.prodname_dependabot_alerts %} nuevas. {% ifversion fpt or ghec %}{% data variables.product.product_name %} nunca divulga públicamente las dependencias no seguras de un repositorio. También puedes hacer que {% data variables.product.prodname_dependabot_alerts %} sean visibles para otras personas o equipos que trabajan con repositorios de tu propiedad o para los que tienes permisos. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} Para obtener más información, consulta "[Configuración de notificaciones de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

También puedes ver todas las {% data variables.product.prodname_dependabot_alerts %} que se corresponden con un aviso concreto en {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes %}
## Información adicional

- "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% endif %} {% ifversion fpt or ghec %}- "[Privacidad de {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github)"{% endif %}
