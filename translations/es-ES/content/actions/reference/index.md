---
title: Referencia
intro: Documentación de referencia para crear flujos de trabajo utilizando autenticación y ejecutores hospedados en Github.
redirect_from:
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
children:
  - /workflow-syntax-for-github-actions
  - /context-and-expression-syntax-for-github-actions
  - /workflow-commands-for-github-actions
  - /events-that-trigger-workflows
  - /authentication-in-a-workflow
  - /encrypted-secrets
  - /environments
  - /environment-variables
  - /usage-limits-billing-and-administration
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
### Sintaxis de flujos de trabajo
El archivo de flujo de trabajo se escribe en YAML. En el archivo de flujo de trabajo de YAML, puedes utilizar la sintaxis de expresión para evaluar la información contextual, literales, operadores y funciones. La información contextual incluye flujos de trabajo, variables de ambiente, secretos y los eventos que activaron el flujo de trabajo. Cuando utilizas [`run`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) en un paso del flujo de trabajo para ejecutar comandos de shell, puedes utilizar una sintaxis específica de comandos de flujo de trabajo para configurar variables de ambiente, configurar parámetros para los pasos subsecuentes y configurar mensajes de error o de depuración.
### Eventos

Puedes configurar flujos de trabajo para que se ejecuten cuando ocurren eventos específicos de GitHub, en un tiempo programado, manualmente, o cuando los eventos ocurren fuera de GitHub.

### Autenticación y secretos

{% data variables.product.prodname_dotcom %} proporciona un token que puedes usar para autenticar en nombre de {% data variables.product.prodname_actions %}. También puedes almacenar la información sensible como un secreto en tu organización{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}, repositorio o ambientes{% else %} o repositorio{% endif %}. {% data variables.product.prodname_dotcom %} cifra todos los secretos.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### Ambientes
Los jobs de un flujo de trabajo pueden referenciar ambientes que tienen reglas de protección o secretos de ambiente específico.
{% endif %}
### Variables del entorno
{% data variables.product.prodname_dotcom %} establece variables de entorno predeterminadas para cada ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}. También puedes establecer variables de entorno personalizadas en tu archivo de flujo de trabajo.
{% if currentVersion == "free-pro-team@latest" %}
### Administración
Cuando ejecutas flujos de trabajo en
los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, habrá límites de uso y cargos de uso potenciales. También puedes inhabilitar o restringir el uso de las {% data variables.product.prodname_actions %} en un repositorio y en una organización.
{% endif %}
