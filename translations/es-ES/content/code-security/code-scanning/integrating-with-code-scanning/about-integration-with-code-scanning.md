---
title: Acerca de la integración con el escaneo de código
shortTitle: About integration
intro: 'Puedes llevar a cabo un {% data variables.product.prodname_code_scanning %} externamente y luego mostrar los resultados en {% data variables.product.prodname_dotcom %}, o configurar webhooks que escuchen a la actividad de {% data variables.product.prodname_code_scanning %} en tu repositorio.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
  - /code-security/secure-coding/about-integration-with-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/about-integration-with-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - Webhooks
  - Integration
ms.openlocfilehash: b12f5146a90cae0ed1bd38d452e43eb611232e72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116826'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

Como alternativa a ejecutar un {% data variables.product.prodname_code_scanning %} dentro de {% data variables.product.prodname_dotcom %}, puedes realizar el análisis en cualquier otra parte y luego cargar los resultados. Las alertas para {% data variables.product.prodname_code_scanning %} que puedes ejecutar externamente se muestran de la misma forma que aquellas para el {% data variables.product.prodname_code_scanning %} que ejecutas con {% data variables.product.prodname_dotcom %}. Para más información, vea "[Administración de alertas de {% data variables.product.prodname_code_scanning %} para el repositorio](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)".

Si utilizas una herramienta de análisis estático de terceros que pueda producir resultados como datos del Formato de Intercambio de Resultados para Análisis Estático (SARIF) 2.1.0, puedes cargarlos a {% data variables.product.prodname_dotcom %}. Para más información, vea "[Carga de un archivo SARIF en GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)".

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

## Integraciones con webhooks

Puede usar los webhooks de {% data variables.product.prodname_code_scanning %} para crear o configurar integraciones, como [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) o [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), que se suscriben a eventos de {% data variables.product.prodname_code_scanning %} en el repositorio. Por ejemplo, podría crear una integración que cree una incidencia en {% data variables.product.product_name %} o que le envíe una notificación de Slack cuando se agregue una alerta de {% data variables.product.prodname_code_scanning %} en el repositorio. Para más información, vea "[Creación de webhooks](/developers/webhooks-and-events/creating-webhooks)" y "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)".

## Información adicional

* "[Acerca de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)"
* "[Uso de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} con el sistema de CI existente](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system)"
* "[Compatibilidad de SARIF con {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning)"
