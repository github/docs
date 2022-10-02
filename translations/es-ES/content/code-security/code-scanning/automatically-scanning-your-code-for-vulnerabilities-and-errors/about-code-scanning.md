---
title: Acerca del examen de código
intro: 'Puedes utilizar {% data variables.product.prodname_code_scanning %} para encontrar vulnerabilidades de seguridad y errores en el código de tu proyecto en {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
ms.openlocfilehash: 0bf49aa695e9e5a60cef7eb78c6e44f5ecd4ece5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145091585'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Puedes utilizar {% data variables.product.prodname_code_scanning %} para encontrar, clasificar y priorizar los arreglos a problemas existentes en tu código. {% data variables.product.prodname_code_scanning_capc %} también previene a los desarrolladores de introducir nuevos problemas. Puede programar los análisis para días y horas concretos, o bien desencadenarlos cuando se produzca un evento específico en el repositorio, como una inserción.

Si {% data variables.product.prodname_code_scanning %} encuentra una vulnerabilidad potencial o un error en tu código, {% data variables.product.prodname_dotcom %} mostrará una alerta en el repositorio. {% data variables.product.prodname_dotcom %} cerrará la alerta una vez que arregles el código que la activó. Para más información, vea "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Para monitorear los resultados del {% data variables.product.prodname_code_scanning %} a lo largo de tus repositorios o de tu organización, puedes utilizar webhooks y la API del {% data variables.product.prodname_code_scanning %}. Para obtener información sobre los webhooks para {% data variables.product.prodname_code_scanning %}, vea "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)". Para obtener información sobre los puntos de conexión de API, vea "[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)". 

Para empezar a trabajar con {% data variables.product.prodname_code_scanning %}, vea "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% ifversion fpt or ghec %}

## Acerca de la facturación de {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} utiliza {% data variables.product.prodname_actions %}, y cada ejecución de un flujo de trabajo de {% data variables.product.prodname_code_scanning %} consume minutos para {% data variables.product.prodname_actions %}. Para más información, vea "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

{% endif %}

## Acerca de las herramientas para el {% data variables.product.prodname_code_scanning %}

Puedes configurar el {% data variables.product.prodname_code_scanning %} para utilizar el producto de {% data variables.product.prodname_codeql %} que mantiene {% data variables.product.company_short%} o una herramienta de {% data variables.product.prodname_code_scanning %} de un tercero. 

### Acerca del análisis de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %} Para más información sobre {% data variables.product.prodname_codeql %}, vea "[Acerca del análisis de código con CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)".

### Acerca de las herramientas del {% data variables.product.prodname_code_scanning %} de terceros

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

Puedes ejecutar herramientas de análisis de terceros dentro de {% data variables.product.product_name %} utilizando acciones o dentro de un sistema de IC externo. Para más información, vea "[Configuración del análisis de código para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)" o "[Carga de un archivo SARIF en GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".
