---
title: Visualizar las bitácoras del escaneo de código
intro: 'Puedes ver la salida que se generó durante el análisis del {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_location %}.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
shortTitle: Visualizar las bitácoras del escaneo de código
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Acerca de tu configuración del {% data variables.product.prodname_code_scanning %}

Puedes utilizar diversas herramientas para configurar el {% data variables.product.prodname_code_scanning %} en tu repositorio. Para obtener más información, consulta la sección "[Configurar el {% data variables.product.prodname_code_scanning %} en un repositorio](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning)".

La bitácora y la información diagnóstica que tengas disponible dependerá del método que utilices para el {% data variables.product.prodname_code_scanning %} en tu repositorio. Puedes verificar el tipo de {% data variables.product.prodname_code_scanning %} que estás utilizando en la pestaña de **Seguridad** de tu repositorio si utilizas el menú desplegable de **Herramienta** en la lista de alertas. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

## Acerca del análisis y la información de diagnóstico

Puedes ver la información de análisis y diagnóstico para la jecución del {% data variables.product.prodname_code_scanning %} utilizando el análisis de {% data variables.product.prodname_codeql %} en {% data variables.product.prodname_dotcom %}.

La información de **Análisis** se muestra para los análisis más recientes en un encabezado en la parte superior de la lista de alertas. Para obtener más información, consulta la sección "[Administrar las alertas del escaneo de código para tu repositorio](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

Se muestra información de **Diagnóstico** en las bitácoras del flujo de trabajo de la acción, la cual consiste en un resumen de métricas y diagnóstico de extractor. Para obtener más información sobre cómo acceder a las bitácoras del {% data variables.product.prodname_code_scanning %} en {% data variables.product.prodname_dotcom %}, consulta la sección "[Visualizar la salida de registros del {% data variables.product.prodname_code_scanning %}](#viewing-the-logging-output-from-code-scanning)" a continuación.

Si estás utilizando el {% data variables.product.prodname_codeql_cli %} fuera de {% data variables.product.prodname_dotcom %}, verás la información de diagnóstico en la salida que se generó durante el análisis de la base de datos. Esta información también se incluye en el archivo de resultados SARIF que cargaste en {% data variables.product.prodname_dotcom %} con los resultados del {% data variables.product.prodname_code_scanning %}.

Para obtener más información sobre el {% data variables.product.prodname_codeql_cli %}, consulta la sección "[Configurar el {% data variables.product.prodname_codeql_cli %} en tu sistema de IC](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information)".

### Acerca de las métricas de resumen

{% data reusables.code-scanning.summary-metrics %}

### Acerca del diagnóstico de extración del código fuente de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.extractor-diagnostics %}

## Visualizar la salida de registro del {% data variables.product.prodname_code_scanning %}

Esta sección aplica a la ejecución del {% data variables.product.prodname_code_scanning %} utilizando {% data variables.product.prodname_actions %}(de {% data variables.product.prodname_codeql %} o de terceros).

Después de configurar el {% data variables.product.prodname_code_scanning %} para tu repositorio, puedes observar la salida de las acciones mientras se ejecutan.

{% data reusables.repositories.actions-tab %}

  Veràs una lista que incluye una entrada para ejecutar el flujo de trabajo del {% data variables.product.prodname_code_scanning %}. El texto de la entrada es el título que le diste a tu mensaje de confirmación.

  ![Lista de acciones que muestran el flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Da clic en la entrada para el flujo de trabajo de {% data variables.product.prodname_code_scanning %}.

2. Da clic en el nombre del job situado a la izquierda. Por ejemplo, **Analizar (IDIOMA)**.

  ![Registro de salida del flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revisa la salida de registro de las acciones en este flujo de trabajo conforme se ejecutan.

1. Una vez que todos los jobs se completen, puedes ver los detalles de cualquier alerta del {% data variables.product.prodname_code_scanning %} que se hayan identificado. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_code_scanning %} para tu repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Nota:** Si levantaste una solicitud de cambios para agregar el flujo de trabajo del {% data variables.product.prodname_code_scanning %} a las alertas del repositorio, las alertas de esa solicitud de cambios no se mostraràn directamente en la pàgina del {% data variables.product.prodname_code_scanning_capc %} hasta que se fusione dicha solicitud. Si se encontrò alguna de las alertas, puedes verlas antes de que se fusione la solicitud de extracciòn dando clic en el enlace de **_n_ alertas encontradas** en el letrero de la pàgina del {% data variables.product.prodname_code_scanning_capc %}.

![Da clic en el enlace de "n alertas encontradas" link](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
