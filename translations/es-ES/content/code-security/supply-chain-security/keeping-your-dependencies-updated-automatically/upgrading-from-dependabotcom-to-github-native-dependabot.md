---
title: Mejorar la versión de Dependabot.com al Dependabot nativo de GitHub
intro: Puedes mejorar a un Dependabot nativo de GitHub si fusionas una solicitud de cambios que permitirá a tus dependencias seguir actualizándose.
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
redirect_from:
  - /code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot
---

{% warning %}

La vista previa del Dependabot cerrará el 3 de agosto de 2021. Para seguir obteniendo actualizaciones del Dependabot, por favor, migra el Dependabot nativo de GitHub antes de esta fecha.

Después de esta fecha, cualquier solicitud de cambios abierta desde la vista previa del Dependabot permanecerá abierta, pero el bot mismo ya no funcinará en tus cuentas y organizaciones de {% data variables.product.prodname_dotcom %}.

{% endwarning %}

### Acerca de mejorar de una vista previa del Dependabot a un {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}

La vista previa del Dependabot se creó directamente en {% data variables.product.prodname_dotcom %} para que puedas utilizar el {% data variables.product.prodname_dependabot %} junto con el resto de las funcionalidades en {% data variables.product.prodname_dotcom %} sin tener que instalar y utilizar una aplicación por separado. Al migrarte al {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}, también podemos enfocarnos en traer muchas características emocionantes al {% data variables.product.prodname_dependabot %}, incluyendo más [actualizaciones de ecosistema](https://github.com/github/roadmap/issues/150), [notificaciones mejoradas](https://github.com/github/roadmap/issues/133) y compatibilidad del {% data variables.product.prodname_dependabot %} con [{% data variables.product.prodname_ghe_server %}](https://github.com/github/roadmap/issues/86) y [{% data variables.product.prodname_ghe_managed %}](https://github.com/github/roadmap/issues/135).

### Diferencias entre la vista previa del Dependabot y el {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}

Si bien la mayoría de las características de la vista previa del Dependabot existen en el {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}, algunas no están disponibles en él:
- **Actualizaciones en vivo:** Esperamos tenerlas de vuelta pronto. Por el momento, puedes ejecutar el {% data variables.product.prodname_dependabot %} de {% data variables.product.prodname_dotcom %} diariamente para que atrae paquetes al transcurrir un día de su lanzamiento.
- **Registros de variable de ambiente PHP:** Para los proyectos que dependen de la variable de ambiente `ACF_PRO_KEY`, puede que seas capaz de expender tu copia licenciada del plugin de los Campos Personalizados Avanzados. Para encontrar un ejemplo, consulta [dependabot/acf-php-example](https://github.com/dependabot/acf-php-example#readme). Para encontrar otras variables de ambiente, puedes utilizar {% data variables.product.prodname_actions %} para recuperar las dependencias desde estos registros.
- **Fusión automática:** Siempre recomendamos verificar tus dependencias antes de fusionarlas; por lo tanto, la fusión automática no será compatible en el futuro previsible. Para aquellos que vetaron sus dependencias o que solo utilizan las internas, recomendamos agregar aplicaciones de fusión automática de terceros o configurar GitHub Actions para fusionar.

En el {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}, puedes configurar todas las actualizaciones de versión utilizando el archivo de configuración. Este archivo es similar al archivo de configuración de la vista previa de Dependabot con algunos cambios y mejoras que se incluirán automáticamente en su solicitud de extracción de actualización. Para obtener más información sobre la solicitud de cambios de actualziación, consulta la sección "[Actualizar a un Dependabot nativo de GitHub](/code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot#upgrading-to-github-native-dependabot)".

Para ver las bitácoras de actualización del {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %} que se encontraban anteriormente en el tablero de Dependabot.com:

  1. Navega a la página de **Perspectivas** de tu repositorio.
  2. Haz clic en la **Gráfica de dependencias** a la izquierda.
  3. Haz clic en **{% data variables.product.prodname_dependabot %}**.

Para obtener más información acerca de las actualizaciones con un {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}, consulta la sección "[Acerca de las actualizaciones de versión del Dependabot](/code-security/supply-chain-security/about-dependabot-version-updates)".

### Actualizar a un {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}

El actualizar de la vista previa del Dependabot a un {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %} requiere que: fusiones la solicitud de cambios de *Actualices a un Dependabot nativo de GitHub* en tu repositorio. Esta solicitud de cambios incluye el archivo de configuración actualizado que se requiere para tener un {% data variables.product.prodname_dependabot %} nativo de {% data variables.product.prodname_dotcom %}.

Si estás utilizando repositorios privados, tendrás que proporcionar al Dependabot acceso a ellos en la configuración de análisis y seguridad de tu organización. Para obtener más información, consulta la sección "[Permitir que el Dependabot acceda a las dependencias privadas](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)". Anteriormente, el Dependabot tenía acceso a todos los repositorios dentro de una organización, pero implementamos este cambio porque así es mucho más seguro utilizar el principio del privilegio mínimo necesario para el Dependabot.

Si estás utilizando registros privados, tendrás que agregar tus secretos existentes de la vista previa del Dependabot a tus "Secretos del Dependabot" de tu organización o repositorio. Para obtener más información, consulta la sección "[Administrar los secretos cifrados del Dependabot](/code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot)".

Si tienes cualquier duda o si necesitas ayuda para migrarte, puedes ver o abrir propuestas en el repositorio [dependabot/dependabot-core](https://github.com/dependabot/dependabot-core/issues/new?assignees=%40dependabot%2Fpreview-migration-reviewers&labels=E%3A+preview-migration&template=migration-issue.md&title=).
