---
title: Acerca de GitHub Dependabot
intro: 'Puede utilizar el {% data variables.product.prodname_dependabot %} para mantener los paquetes que utilizas actualizados a su versión más reciente.'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### Acerca de {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} es una app de {% data variables.product.prodname_dotcom %} que hace el esfuerzo de mantener tus dependencias. Puedes utilizarlo para garantizar que tu repositorio se mantenga automáticamente con los últimos lanzamientos de los paquetes y aplicaciones de los que depende.

Puedes habilitar {% data variables.product.prodname_dependabot_version_updates %} si seleccionas el archivo de configuración en tu repositorio. El archivo de configuración especifica la ubicación del manifiesto, u otros archivos de definición de paquetes, almacenado en tu repositorio. La app utiliza esta información para revisar si hay paquetes y aplicaciones desactualizados. La app del {% data variables.product.prodname_dependabot_short %} determina si hay una versión nueva de una dependencia al buscar el versionamiento semántico ([semver](https://semver.org/)) de ésta para decidir si debería actualizarla a esa versión. Cuando la app identifica una dependencia desactualizada, levanta una solicitud de extracción para actualizar el manifiesto a la última versión de la dependencia. Verificas que tu prueba pase, revisas el registro de cambios y notas de lanzamiento que se incluyan en el resumen de la solicitud de extracción y, posteriormente, lo fusionas. Para obtener más información, consulta la sección "[Habilitar e inhabilitar las actualizaciones de versión](/github/administering-a-repository/enabling-and-disabling-version-updates)".

Si habilitas las actualizaciones de seguridad, el {% data variables.product.prodname_dependabot %} también levantará las solicitudes de extracción para actualizar las dependencias vulnerables. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)".

{% data reusables.dependabot.dependabot-tos %}

### Frecuencia de las solicitudes de extracción del {% data variables.product.prodname_dependabot %}

Tú eres quien especifica qué tan a menudo se revisa cada ecosistema para encontrar nuevas versiones en el archivo de configuración: diario, semanalmente, o mensualmente.

{% data reusables.dependabot.initial-updates %}

Si habilitaste las actualizaciones de seguridad, algunas veces verás solicitudes de extracción adicionales para actualizaciones de seguridad. Estas se activan mediante una alerta al Dependabot para una dependencia en tu rama predeterminada. El {% data variables.product.prodname_dependabot %} levanta automáticamente una solicitud de extracción para actualizar la dependencia vulnerable.

### Repositorios y ecosistemas compatibles

Puedes configurar las actualizaciones de versión para los repositorios que contengan un manifiesto de dependencias o un archivo fijado para alguno de los administradores de paquetes compatibles.

{% data reusables.dependabot.supported-package-managers %}

Si tu repositorio ya utiliza una integración para la administración de dependencias, necesitarás inhabilitarlo antes de habilitar el {% data variables.product.prodname_dependabot %}. Para obtener más información, consulta la sección "[Acerca de las integraciones](/github/customizing-your-github-workflow/about-integrations)".
