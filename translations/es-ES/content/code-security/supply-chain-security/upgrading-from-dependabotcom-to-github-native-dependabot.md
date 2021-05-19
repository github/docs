---
title: Mejorar la versión de Dependabot.com al Dependabot nativo de GitHub
intro: Puedes mejorar a un Dependabot nativo de GitHub si fusionas una solicitud de cambios que permitirá a tus dependencias seguir actualizándose.
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

{% warning %}

Dependabot Preview will be shut down on August 3rd, 2021. In order to keep getting Dependabot updates, please migrate to GitHub-native Dependabot before then.

After that date, any open pull requests from Dependabot Preview will remain open, but the bot itself will no longer work on your {% data variables.product.prodname_dotcom %} accounts and organizations.

{% endwarning %}

### Acerca de mejorar de una vista previa del Dependabot a un {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}

La vista previa del Dependabot se creó directamente en {% data variables.product.prodname_dotcom %} para que puedas utilizar el {% data variables.product.prodname_dependabot %} junto con el resto de las funcionalidades en {% data variables.product.prodname_dotcom %} sin tener que instalar y utilizar una aplicación por separado. Al migrarte al {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}, también podemos enfocarnos en traer muchas características emocionantes al {% data variables.product.prodname_dependabot %}, incluyendo más [actualizaciones de ecosistema](https://github.com/github/roadmap/issues/150), [notificaciones mejoradas](https://github.com/github/roadmap/issues/133) y compatibilidad del {% data variables.product.prodname_dependabot %} con [{% data variables.product.prodname_ghe_server %}](https://github.com/github/roadmap/issues/86) y [{% data variables.product.prodname_ghe_managed %}](https://github.com/github/roadmap/issues/135).

### Diferencias entre la vista previa del Dependabot y el {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}

Si bien la mayoría de las características de la vista previa del Dependabot existen en el {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}, algunas no están disponibles en él:
- **Actualizaciones en vivo:** Esperamos tenerlas de vuelta pronto. Por el momento, puedes ejecutar el {% data variables.product.prodname_dependabot %} de {% data variables.product.prodname_dotcom %} diariamente para que atrae paquetes al transcurrir un día de su lanzamiento.
- **Registros de variable de ambiente PHP:** Por ahora, puedes utilizar las {% data variables.product.prodname_actions %} para recuperar dependencias de estos registros.
- **Fusión automática:** Siempre recomendamos verificar tus dependencias antes de fusionarlas; por lo tanto, la fusión automática no será compatible en el futuro previsible. Para aquellos que vetaron sus dependencias o que solo utilizan las internas, recomendamos agregar aplicaciones de fusión automática de terceros o configurar GitHub Actions para fusionar.

En el {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}, puedes configurar todas las actualizaciones de versión utilizando el archivo de configuración. Este archivo es similar al archivo de configuración de la vista previa de Dependabot con algunos cambios y mejoras que se incluirán automáticamente en su solicitud de extracción de actualización. Para obtener más información sobre la solicitud de cambios de actualziación, consulta la sección "[Actualizar a un Dependabot nativo de GitHub](/code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot#upgrading-to-github-native-dependabot)".

Para ver las bitácoras de actualización del {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %} que se encontraban anteriormente en el tablero de Dependabot.com:

  1. Navega a la página de **Perspectivas** de tu repositorio.
  2. Haz clic en la **Gráfica de dependencias** a la izquierda.
  3. Haz clic en **{% data variables.product.prodname_dependabot %}**.

Para obtener más información acerca de las actualizaciones con un {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}, consulta la sección "[Acerca de las actualizaciones de versión del Dependabot](/code-security/supply-chain-security/about-dependabot-version-updates)".

### Actualizar a un {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}

Upgrading from Dependabot Preview to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %} requires you to merge the *Upgrade to GitHub-native Dependabot* pull request in your repository. Esta solicitud de cambios incluye el archivo de configuración actualizado que se requiere para tener un {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}.

If you are using private repositories, you will have to grant Dependabot access to these repositories in your organization's security and analysis settings. For more information, see "[Allowing Dependabot to access private dependencies](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)". Previously, Dependabot had access to all repositories within an organization, but we implemented this change because it is much safer to use the principle of least privilege for Dependabot.

If you are using private registries, you will have to add your existing Dependabot Preview secrets to your repository's or organization's "Dependabot secrets". For more information, see "[Managing encrypted secrets for Dependabot](/code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot)".

If you have any questions or need help migrating, you can view or open issues in the [dependabot/dependabot-core](https://github.com/dependabot/dependabot-core/issues/new?assignees=%40dependabot%2Fpreview-migration-reviewers&labels=E%3A+preview-migration&template=migration-issue.md&title=) repository.
