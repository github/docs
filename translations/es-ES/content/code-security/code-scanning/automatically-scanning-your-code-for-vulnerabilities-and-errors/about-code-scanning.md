---
title: Acerca del escaneo de código
intro: 'Puedes utilizar {% data variables.product.prodname_code_scanning %} para encontrar vulnerabilidades de seguridad y errores en el código de tu proyecto en {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Puedes utilizar {% data variables.product.prodname_code_scanning %} para encontrar, clasificar y priorizar los arreglos a problemas existentes en tu código. {% data variables.product.prodname_code_scanning_capc %} también previene a los desarrolladores de introducir nuevos problemas. Puedes programar días y horas específicos para los escaneos, o activarlos cuando ocurra un evento específico en el repositorio, tal como una carga de información.

Si {% data variables.product.prodname_code_scanning %} encuentra una vulnerabilidad potencial o un error en tu código, {% data variables.product.prodname_dotcom %} mostrará una alerta en el repositorio. {% data variables.product.prodname_dotcom %} cerrará la alerta una vez que arregles el código que la activó. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Para monitorear los resultados del {% data variables.product.prodname_code_scanning %} a lo largo de tus repositorios o de tu organización, puedes utilizar webhooks y la API del {% data variables.product.prodname_code_scanning %}. Para obtener más información sobre los webhooks para el {% data variables.product.prodname_code_scanning %}, consulta la sección [Cargas útiles y eventos de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)". Para obtener más información sobre las terminales de la API, consulta la sección "[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)".

Para iniciar con el {% data variables.product.prodname_code_scanning %}, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% ifversion fpt %}

## Acerca de la facturación para {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} utiliza {% data variables.product.prodname_actions %}, y cada ejecución de un flujo de trabajo de {% data variables.product.prodname_code_scanning %} consume minutos para {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

{% endif %}

## Acerca de las herramientas para el {% data variables.product.prodname_code_scanning %}

Puedes configurar el {% data variables.product.prodname_code_scanning %} para utilizar el producto de {% data variables.product.prodname_codeql %} que mantiene {% data variables.product.company_short%} o una herramienta de {% data variables.product.prodname_code_scanning %} de un tercero.

### Acerca del análisis de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %} Para obtener más información sobre {% data variables.product.prodname_codeql %}, consulta la sección "[Acerca del escaneo de código con CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)".

### Acerca de las herramientas del {% data variables.product.prodname_code_scanning %} de terceros

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

Puedes ejecutar herramientas de análisis de terceros dentro de {% data variables.product.product_name %} utilizando acciones o dentro de un sistema de IC externo. Para obtener más información, consulta la sección "[Configurar el escaneo de código para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)" o la sección "[Cargar un archivo SARIF a GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".
