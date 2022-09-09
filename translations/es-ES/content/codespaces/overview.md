---
title: Resumen de GitHub Codespaces
shortTitle: Overview
product: '{% data reusables.gated-features.codespaces %}'
intro: 'En esta guía se presenta {% data variables.product.prodname_github_codespaces %} y se proporcionan detalles de cómo funciona y cómo usarlo.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
ms.openlocfilehash: ea92784b32d63e5f5d9268a1077009ea7bf8b382
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111222'
---
## ¿Qué es un codespace?

Un codespace es un ambiente de desarrollo que se hospeda en la nube. Puedes personalizar tu proyecto para {% data variables.product.prodname_github_codespaces %} confirmando los [archivos de configuración](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project) en el repositorio (lo que se conoce a menudo como configuración como código). Esta acción crea una configuración de codespace repetible para todos los usuarios del proyecto.

{% data variables.product.prodname_github_codespaces %} se ejecuta en diversas opciones de proceso basadas en máquina virtual hospedadas en {% data variables.product.product_location %}. Puedes configurar desde máquinas de 2 núcleos hasta máquinas de 32 núcleos. Puedes conectar tus codespaces desde el buscador o localmente utilizando {% data variables.product.prodname_vscode %}.

![Un diagrama que muestra cómo funciona {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-diagram.png)

## Uso de {% data variables.product.prodname_github_codespaces %}

Puedes crear un codespace desde cualquier rama o confirmación en tu repositorio y comenzar a desarrollar utilizando recursos de cómputo basados en la nube. {% data reusables.codespaces.links-to-get-started %}

Para personalizar los runtimes y las herramientas del codespace, puedes crear una o varias configuraciones de contenedor de desarrollo para el repositorio. Agregar configuraciones de contenedor de desarrollo al repositorio permite definir una elección de diferentes entornos de desarrollo que sean adecuados para el trabajo que harán las personas en el repositorio. 

Si no agregas una configuración de contenedor de desarrollo, {% data variables.product.prodname_github_codespaces %} clonará tu repositorio en un entorno con la imagen de codespace predeterminada que incluye muchas herramientas, lenguajes y entornos en tiempo de ejecución. Para más información, vea "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

También puedes personalizar aspectos del entorno del codespace mediante un repositorio público [dotfiles](https://dotfiles.github.io/tutorials/) y la [sincronización de la configuración](https://code.visualstudio.com/docs/editor/settings-sync). La personalización puede incluir preferencias de shell, herramientas adicionales, configuración de editores y extensiones de {% data variables.product.prodname_vscode_shortname %}. Para más información, vea "[Personalización del codespace](/codespaces/customizing-your-codespace)".

## Facturación para {% data variables.product.prodname_codespaces %}

Para más información sobre los precios, el almacenamiento y el uso de {% data variables.product.prodname_codespaces %}, vea "[Administración de la facturación para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)".

{% data reusables.codespaces.codespaces-spending-limit-requirement %} Para obtener información sobre cómo los propietarios de las organizaciones y los administradores de facturación pueden controlar el límite de gasto de {% data variables.product.prodname_codespaces %} para una organización, vea "[Administración del límite de gasto para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
