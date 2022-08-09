---
title: 'Phase 3: Pilot programs'
intro: 'You may benefit from beginning with a few high-impact projects and teams with which to pilot an initial rollout. Esto permitirá que un grupo inicial dentro de tu compañía se familiarice con la GHAS, aprenda cómo habilitarla y configurarla y cree bases sólidas en ella antes de implementarla con el resto de tu compañía.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
---

{% note %}

Este artículo es parte de una serie de cómo adoptar la {% data variables.product.prodname_GH_advanced_security %} a escala. For the previous article in this series, see "[Phase 2: Preparing to enable at scale](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)."

{% endnote %}

## About pilot programs

We recommend you identify a few high-impact projects or teams to use in a pilot rollout of GHAS. This allows an initial group within your company to get familiar with GHAS and builds a solid foundation for GHAS before you roll it out to the remainder of your company.

The steps in this phase will help you enable GHAS on your enterprise, begin using its features, and review your results. Si estás trabajando con los {% data variables.product.prodname_professional_services %}, estos pueden proporcionarte ayuda adicional en este proceso mediante sesiones de integración, talleres de GHAS y solución de problemas, conforme lo requieras.

Before you start your pilot projects, we recommend that you schedule some meetings for your teams, such as an initial meeting, midpoint review, and a wrap-up session when the pilot is complete. These meetings will help you all make adjustments as needed and ensure your teams are prepared and supported to complete the pilot successfully.

{% ifversion ghes %}

Si aún no has habilitado la GHAS para tu instancia de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Habilitar la Seguridad Avanzada de GitHub para tu empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)".

{% endif %}

You need to enable GHAS for each pilot project, either by enabling the GHAS features for each repository or for all repositories in any organizations taking part in the pilot. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y de análisis para tu repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" o "[Administrar la configuración de seguridad y de análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"

## Piloting {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Para habilitar el {% data variables.product.prodname_code_scanning %} en tu instancia de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Configurar el escaneo de código para tu aplicativo](/admin/advanced-security/configuring-code-scanning-for-your-appliance)".

{% elsif ghae %}

Para habilitar el {% data variables.product.prodname_code_scanning %} utilizando {% data variables.product.prodname_actions %}, debes hacer que los ejecutores estén disponibles para ejecutar flujos de trabajo en {% data variables.product.prodname_ghe_managed %}, consulta la sección "[Iniciar con {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".

{% endif %}

You can run code scanning on a repository by creating a {% data variables.product.prodname_actions %} workflow to run the [CodeQL action](https://github.com/github/codeql-action/). {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %} uses [GitHub-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners) by default, but this can be customized if you plan to host your own runner with your own hardware specifications. Para obtener más información, consulta la sección "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners)".{% endif %}

Para obtener más información sobre las {% data variables.product.prodname_actions %}, consulta las siguientes secciones:
  - "[Aprender a utilizar las GitHub Actions](/actions/learn-github-actions)"
  - "[Entender las GitHub Actions](/actions/learn-github-actions/understanding-github-actions)"
  - "[Eventos que desencadenan flujos de trabajo](/actions/learn-github-actions/events-that-trigger-workflows)"
  - "[Directorio de patrones de filtrado](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)"

We recommend enabling {% data variables.product.prodname_code_scanning %} on a repository-by-repository basis as part of your pilot program. Para obtener más información, consulta la sección "[Configurar el escaneo de código para un repositorio](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)".

If you want to enable code scanning for many repositories, you may want to script the process.

Para encontrar un ejemplo de un script que abre solicitudes de cambio para agregar un flujo de trabajo de {% data variables.product.prodname_actions %} a repositorios múltiples, consulta el repositorio [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) para ver cómo se hace con PowerShell o el de [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) para los equipos que no tengan PowerShell y les gustaría trabajar con NodeJS en su lugar.

Cuando ejecutas los escaneos de código iniciales, podrías no encontrar resultados o que se te devuelva una cantidad inusual de ellos. Es posible que quieras ajustar qué se debe resaltar en los escaneos futuros. Para obtener más información, consulta la sección "[Configurar el escaneo de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)".

Si tu compañía quiere utilizar otras herramientas de análisis de código de terceros con el escaneo de código de GitHub, puedes utilizar acciones para que ejecuten esas herramientas dentro de GitHub. Alternatively, you can upload results, which are generated by third-party tools as SARIF files, to code scanning. Para obtener más información, consulta la sección "[Integrarse con el escaneo de código](/code-security/code-scanning/integrating-with-code-scanning)".

## Piloting {% data variables.product.prodname_secret_scanning %}

GitHub escanea los repositorios para los tipos de secreto conocidos, para prevenir el uso fraudulento de secretos que se confirmaron por accidente.

{% ifversion ghes %}

Para habilitar el escaneo de secretos para tu instancia de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Configurar el escaneo de secretos para tu aplicativo](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)".

{% endif %}

Necesitas habilitar el escaneo de secretos para cada proyecto piloto, ya sea habilitando la característica para cada repositorio o para todos los repositorios en cualquier organización que participe en el proyecto. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y de análisis para tu repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" o "[Administrar la configuración de seguridad y de análisis para tu organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

If you have collated any custom patterns specific to your enterprise, especially any related to the projects piloting {% data variables.product.prodname_secret_scanning %}, you can configure those. Para obtener más información, consulta la sección "[Definir los patrones personalizados para el escaneo de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)".

Para aprender cómo ver y cerrar las alertas para los secretos que se registraron en tu repositorio, consulta la sección "[Administrar las alertas del escaneo de secretos](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".

{% note %}

For the next article in this series, see "[Phase 4: Create internal documentation](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)."

{% endnote %}
