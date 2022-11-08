---
title: 'Fase 3: Programas piloto'
intro: 'Puedes beneficiarte de empezar con algunos proyectos y equipos de alto impacto con los que probar un lanzamiento inicial. Esto permitirá que un grupo inicial dentro de tu compañía se familiarice con la GHAS, aprenda cómo habilitarla y configurarla y cree bases sólidas en ella antes de implementarla con el resto de tu compañía.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d56427173580558a192d0709ae700cbd497e2935
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109917'
---
{% note %}

Este artículo forma parte de una serie sobre la adopción de {% data variables.product.prodname_GH_advanced_security %} a escala. Para ver el artículo anterior de esta serie, consulta "[Fase 2: Preparación para la habilitación a escala](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)".

{% endnote %}

## Acerca de los programas piloto

Te recomendamos que identifiques algunos proyectos o equipos de alto impacto para usarlos en un lanzamiento piloto de la GHAS. Esto permitirá que un grupo inicial dentro de la empresa se familiarice con la GHAS y cree bases sólidas para la GHAS antes de lanzarla en el resto de la empresa.

Los pasos de esta fase te ayudarán a habilitar la GHAS en tu empresa, comenzar a utilizar sus características y revisar tus resultados. Si estás trabajando con los {% data variables.product.prodname_professional_services %}, estos pueden proporcionarte ayuda adicional en este proceso mediante sesiones de integración, talleres de GHAS y solución de problemas, conforme lo requieras.

Antes de que comiences tus proyectos piloto, te recomendamos que programes algunas reuniones para tus equipos, como una reunión inicial, una revisión de punto medio y una sesión de conclusión cuando se complete el piloto. Estas reuniones te ayudarán a realizar los ajustes conforme sean necesarios y garantizar así que tus equipos están listos y cuentan con el apoyo para completar el piloto con éxito.

{% ifversion ghes %}

Si aún no ha habilitado GHAS para la instancia de {% data variables.product.prodname_ghe_server %}, vea "[Habilitación de seguridad avanzada de GitHub para su empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".

{% endif %}

Necesitas habilitar la GHAS para cada proyecto piloto, ya sea habilitando la característica de la GHAS en cada repositorio o en todos ellos en todas las organizaciones que participen en el piloto. Para más información, vea "[Administración de la configuración de seguridad y análisis del repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" o "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Prueba piloto de {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Para habilitar {% data variables.product.prodname_code_scanning %} en la instancia de {% data variables.product.prodname_ghe_server %}, vea "[Configuración del examen de código para el dispositivo](/admin/advanced-security/configuring-code-scanning-for-your-appliance)".

{% elsif ghae %}

Para habilitar {% data variables.product.prodname_code_scanning %} mediante {% data variables.product.prodname_actions %}, debes hacer que los ejecutores estén disponibles para ejecutar flujos de trabajo en {% data variables.product.prodname_ghe_managed %}; consulta "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".

{% endif %}

Puedes ejecutar el análisis de código en un repositorio creando un flujo de trabajo de {% data variables.product.prodname_actions %} para ejecutar la [acción CodeQL](https://github.com/github/codeql-action/). {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %} usa [ejecutores hospedados en GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners) de manera predeterminada, pero esto se puede personalizar si planeas hospedar tu propio ejecutor con tus propias especificaciones de hardware. Para obtener más información, consulte "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners)."{% endif %}

Para obtener más información sobre las {% data variables.product.prodname_actions %}, consulta las siguientes secciones:
  - "[Más información sobre las Acciones de GitHub](/actions/learn-github-actions)"
  - "[Descripción de las Acciones de GitHub](/actions/learn-github-actions/understanding-github-actions)"
  - "[Eventos que desencadenan flujos de trabajo](/actions/learn-github-actions/events-that-trigger-workflows)"
  - "[Hoja de datos de patrones de filtro](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)"

Se recomienda habilitar {% data variables.product.prodname_code_scanning %} repositorio por repositorio como parte del programa piloto. Para obtener más información, vea "[Configuración del examen de código para un repositorio](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)".

Si quieres habilitar el análisis de código para muchos repositorios, puede que quieras hacer un script del proceso.

Para obtener un ejemplo de script que abre solicitudes de incorporación de cambios para agregar un flujo de trabajo de {% data variables.product.prodname_actions %} a varios repositorios, vea el repositorio [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) para obtener un ejemplo mediante PowerShell, o bien [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) para equipos que no tienen PowerShell y, en su lugar, quieren usar NodeJS.

Cuando ejecutas los escaneos de código iniciales, podrías no encontrar resultados o que se te devuelva una cantidad inusual de ellos. Es posible que quieras ajustar qué se debe resaltar en los escaneos futuros. Para más información, vea "[Configuración del análisis de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)".

Si tu compañía quiere utilizar otras herramientas de análisis de código de terceros con el escaneo de código de GitHub, puedes utilizar acciones para que ejecuten esas herramientas dentro de GitHub. Como alternativa, puedes cargar al análisis de código los resultados que se generen con las herramientas de terceros como archivos SARIF. Para obtener más información, vea "[Integración con el examen de código](/code-security/code-scanning/integrating-with-code-scanning)".

## Prueba piloto de {% data variables.product.prodname_secret_scanning %}

GitHub escanea los repositorios para los tipos de secreto conocidos, para prevenir el uso fraudulento de secretos que se confirmaron por accidente.

{% ifversion ghes %}

A fin de habilitar el examen de secretos para la instancia de {% data variables.product.prodname_ghe_server %}, vea "[Configuración del examen de secretos para el dispositivo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)".

{% endif %}

Necesitas habilitar el escaneo de secretos para cada proyecto piloto, ya sea habilitando la característica para cada repositorio o para todos los repositorios en cualquier organización que participe en el proyecto. Para obtener más información, consulta "[Administración de la configuración de seguridad y análisis del repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" o "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

Si has intercalado patrones personalizados específicos de tu empresa, especialmente en relación con los proyectos de la prueba piloto de {% data variables.product.prodname_secret_scanning %}, puedes configurarlos. Para más información, vea "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)".

Para obtener información sobre cómo ver y cerrar alertas de secretos insertados en el repositorio, vea "[Administración de alertas del examen de secretos](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".

{% note %}

Para ver el artículo siguiente de esta serie, consulta "[Fase 4: Creación de documentación interna](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)".

{% endnote %}
