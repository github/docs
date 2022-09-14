---
title: Utilizar flujos de trabajo iniciales
intro: '{% data variables.product.product_name %} proporciona flujos de trabajo iniciales para varios lenguajes y herramientas.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
ms.openlocfilehash: 7159ce204b89287f86846cf79001657682f6d18d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '146179843'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los flujos de trabajo iniciales

{% data variables.product.product_name %} ofrece flujos de trabajo iniciales para diversos lenguajes y herramientas. Cuando configuras flujos de trabajo en tu repositorio, {% data variables.product.product_name %} analiza el código en tu repositorio y recomienda flujos de trabajo con base en el lenguaje y marco de trabajo de este. Por ejemplo, si usas [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} sugerirá un archivo de flujo de trabajo de inicio que instale tus paquetes de Node.js y ejecute tus pruebas.{% ifversion actions-starter-template-ui %} Puedes buscar y filtrar para encontrar los flujos de trabajo de inicio pertinentes.{% endif %}

{% data reusables.actions.starter-workflow-categories %}

También puedes crear tu propio flujo de trabajo inicial para compartirlo con tu organziación. Estos flujos de trabajo iniciales se mostrarán junto con que proporciona {% data variables.product.product_name %}. Para obtener más información, consulte "[Creación de flujos de trabajo de inicio para la organización](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

## Utilizar flujos de trabajo iniciales

Cualquiera con permiso de escritura en un repositorio puede configurar flujos de trabajo iniciales de {% data variables.product.prodname_actions %} para IC/DC u otras automatizaciones.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Si ya tiene un flujo de trabajo en su repositorio, haga clic en **New workflow** (Nuevo flujo de trabajo).
1. La página "{% ifversion actions-starter-template-ui %}Elegir un flujo de trabajo{% else %}Elegir una plantilla de flujo de trabajo{% endif %}" muestra una selección de flujos de trabajo de inicio recomendados. Busca el flujo de trabajo de inicio que quieres usar y haz clic en {% ifversion actions-starter-template-ui %}**Configurar**{% else %}**Configurar este flujo de trabajo**{% endif %}.{% ifversion actions-starter-template-ui %} Para ayudarte a encontrar el flujo de trabajo de inicio que quieres, puede buscar palabras clave o filtrar por categoría.{% endif %}

   {% ifversion actions-starter-template-ui %}![Configuración de este flujo de trabajo](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![Configurar este flujo de trabajo](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. Si el flujo de trabajo inicial contiene comentarios que detallen pasos de configuración adicional, sigue estos pasos. Muchos de los flujos de trabajo iniciales tienen guías correspondientes. Para obtener más información, consulta las [guías de {% data variables.product.prodname_actions %}](/actions/guides).
1. Algunos flujos de trabajo iniciales utilizan secretos. Por ejemplo, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. Si el flujo de trabajo inicial utiliza un secreto, almacena el valor descrito en el nombre del secreto como un secreto en tu repositorio. Para obtener más información, vea "[Secretos cifrados](/actions/reference/encrypted-secrets)".
1. Opcionalmente, haz cambios adicionales. Por ejemplo, puede que quiera cambiar el valor de `on` para que este cambie cuando se ejecute el flujo de trabajo.
1. Haga clic en **Start commit** (Iniciar confirmación).
1. Escribe un mensaje de confirmación y decide si lo quieres confirmar directamente en la rama predeterminada o si quieres abrir una solicitud de cambios.

## Información adicional

- "[Acerca de la integración continua](/articles/about-continuous-integration)"
- "[Administración de ejecuciones de flujos de trabajo](/actions/managing-workflow-runs)"
- "[Acerca de la supervisión y la solución de problemas](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
- "[Información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" {% ifversion fpt or ghec %}
- "[Administración de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)" {% endif %}
