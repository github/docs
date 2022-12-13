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
shortTitle: View code scanning logs
ms.openlocfilehash: e4f4c3e601540e02c01bbe3761a11528a746a519
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147444633'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Acerca de tu configuración del {% data variables.product.prodname_code_scanning %} 

Puedes utilizar diversas herramientas para configurar el {% data variables.product.prodname_code_scanning %} en tu repositorio. Para obtener más información, vea "[Configurar {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning)".

La bitácora y la información diagnóstica que tengas disponible dependerá del método que utilices para el {% data variables.product.prodname_code_scanning %} en tu repositorio. Puede comprobar el tipo de {% data variables.product.prodname_code_scanning %} que usa en la pestaña **Security** (Seguridad) del repositorio mediante el menú desplegable **Tool** (Herramienta) de la lista de alertas. Para obtener más información, vea "[Administrar alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

## Acerca del análisis y la información de diagnóstico

Puedes ver la información de análisis y diagnóstico para la jecución del {% data variables.product.prodname_code_scanning %} utilizando el análisis de {% data variables.product.prodname_codeql %} en {% data variables.product.prodname_dotcom %}. 

La información de **Analysis** (Análisis) se muestra para los análisis más recientes en un encabezado en la parte superior de la lista de alertas. Para obtener más información, vea "[Administrar alertas de análisis de código para el repositorio](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

La información de **Diagnostic** (Diagnóstico) aparece en los registros del flujo de trabajo de la acción, que consta de métricas de resumen y diagnósticos de extractor. Para obtener más información sobre cómo acceder a los registros de {% data variables.product.prodname_code_scanning %} en {% data variables.product.prodname_dotcom %}, vea "[Visualizar la salida de registros de {% data variables.product.prodname_code_scanning %}](#viewing-the-logging-output-from-code-scanning)" debajo.

Si estás utilizando el {% data variables.product.prodname_codeql_cli %} fuera de {% data variables.product.prodname_dotcom %}, verás la información de diagnóstico en la salida que se generó durante el análisis de la base de datos. Esta información también se incluye en el archivo de resultados SARIF que cargaste en {% data variables.product.prodname_dotcom %} con los resultados del {% data variables.product.prodname_code_scanning %}.

Para obtener información sobre la {% data variables.product.prodname_codeql_cli %}, vea "[Configurar la {% data variables.product.prodname_codeql_cli %} en el sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information)".

### Acerca de las métricas de resumen

{% data reusables.code-scanning.summary-metrics %}

### Acerca del diagnóstico de extración del código fuente de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.extractor-diagnostics %}

{% ifversion codeql-action-debug-logging %}

Puedes ver información más detallada sobre los errores y advertencias del extractor de {% data variables.product.prodname_codeql %} que se produjeron durante la creación de la base de datos habilitando el registro de depuración. Para obtener más información, consulta "[Solución de problemas del flujo de trabajo de CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled)".

{% endif %}

## Visualizar la salida de registro del {% data variables.product.prodname_code_scanning %}

Esta sección aplica a la ejecución del {% data variables.product.prodname_code_scanning %} utilizando {% data variables.product.prodname_actions %}(de {% data variables.product.prodname_codeql %} o de terceros).

Después de configurar el {% data variables.product.prodname_code_scanning %} para tu repositorio, puedes observar la salida de las acciones mientras se ejecutan.

{% data reusables.repositories.actions-tab %}

  Veràs una lista que incluye una entrada para ejecutar el flujo de trabajo del {% data variables.product.prodname_code_scanning %}. El texto de la entrada es el título que le diste a tu mensaje de confirmación.

  ![Lista de acciones que muestran el flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Da clic en la entrada para el flujo de trabajo de {% data variables.product.prodname_code_scanning %}.

2. Da clic en el nombre del job situado a la izquierda. Por ejemplo, **Analizar (LENGUAJE)** .

  ![Registro de salida del flujo de trabajo del {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revisa la salida de registro de las acciones en este flujo de trabajo conforme se ejecutan.

1. Una vez que todos los jobs se completen, puedes ver los detalles de cualquier alerta del {% data variables.product.prodname_code_scanning %} que se hayan identificado. Para más información, vea "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Nota**: Si ha generado una solicitud de incorporación de cambios para agregar el flujo de trabajo de {% data variables.product.prodname_code_scanning %} al repositorio, las alertas de esa solicitud de incorporación de cambios no se mostrarán directamente en la página de {% data variables.product.prodname_code_scanning_capc %} hasta que se combine esta solicitud. Si se ha encontrado alguna alerta, puede verlas antes de que se combine la solicitud de incorporación de cambios si hace clic en el vínculo **_n_ alertas encontradas** en el banner de la página de {% data variables.product.prodname_code_scanning_capc %}.

![Haz clic en el vínculo "N.  de alertas encontradas"](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
