---
title: Resumen de GitHub Codespaces
shortTitle: Overview
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
ms.openlocfilehash: 9d01df3f8dae7ceb788e2dd57b02fb3cc977400d
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164327'
---
## ¿Qué es un codespace?

Un codespace es un ambiente de desarrollo que se hospeda en la nube. Puedes personalizar tu proyecto para {% data variables.product.prodname_github_codespaces %} confirmando los [archivos de configuración](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) en el repositorio (lo que se conoce a menudo como configuración como código). Esta acción crea una configuración de codespace repetible para todos los usuarios del proyecto.

Cada codespace se ejecuta en una máquina virtual hospedada por {% data variables.product.prodname_dotcom %}. Puedes elegir el tipo de máquina que deseas usar, en función de los recursos que necesites. Hay disponibles varios tipos de máquina, empezando por un procesador de 2 núcleos, 4 GB de RAM y 32 GB de almacenamiento. 

Puedes conectarte a tus codespaces desde el explorador, desde {% data variables.product.prodname_vscode %}, desde la aplicación de puerta de enlace de JetBrains o mediante {% data variables.product.prodname_cli %}.

![Un diagrama que muestra cómo funciona {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-diagram.png)

## Uso de {% data variables.product.prodname_github_codespaces %}

Para comenzar a desarrollar utilizando recursos de cómputo basados en la nube, puedes crear un codespace desde una plantilla o cualquier rama o confirmación en un repositorio. Al crear un codespace a partir de una plantilla, puedes empezar desde una plantilla en blanco o elegir una plantilla adecuada para el trabajo que estás haciendo.

{% data reusables.codespaces.links-to-get-started %}

### Uso de codespaces propiedad de tu cuenta personal

Todas las cuentas de {% data variables.product.prodname_dotcom_the_website %} tienen una cuota mensual de uso gratuito de {% data variables.product.prodname_github_codespaces %} incluida en el plan Gratis o Pro. Puedes empezar a usar {% data variables.product.prodname_github_codespaces %} en tu cuenta personal sin cambiar ninguna configuración ni proporcionar detalles de pago.

Puedes crear y usar un codespace para cualquier repositorio que puedas clonar. También puedes usar una plantilla para crear codespaces que no estén asociados inicialmente a un repositorio. Si creas un codespace desde un repositorio propiedad de la organización, el uso del codespace se cobrará a la organización (si la organización está configurada para ello) o a tu cuenta personal. Los codespaces creados a partir de plantillas siempre se cobran a tu cuenta personal. 

{% data reusables.codespaces.codespaces-continue-by-paying %} 

### Uso de codespaces propiedad de la organización

Los propietarios de la organización pueden habilitar el uso de {% data variables.product.prodname_github_codespaces %}, facturables a la organización o a la cuenta de empresa. Esto se aplica a codespaces creados a partir de repositorios propiedad de la organización. Para más información, consulta ["Habilitación de {% data variables.product.prodname_github_codespaces %} para la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)". Puedes establecer un límite de gasto para el uso de {% data variables.product.prodname_github_codespaces %} en tu organización o cuenta empresarial. Para más información, consulta "[Administración de los límites de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)".

Si el uso de un codespace va a facturarse a una organización o empresa, se muestra cuando se crea el codespace. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)". Los codespaces que se facturan a una organización, o a su empresa matriz, son propiedad de la organización y pueden ser eliminados por un propietario de esta. Para más información, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)". 

### Personalización de {% data variables.product.prodname_github_codespaces %}

Para personalizar los runtimes y las herramientas del codespace, puedes crear una o varias configuraciones de contenedor de desarrollo para el repositorio. Agregar configuraciones de contenedor de desarrollo al repositorio permite definir una elección de diferentes entornos de desarrollo que sean adecuados para el trabajo que harán las personas en el repositorio. 

Si creas un codespace desde un repositorio sin configuraciones de contenedor de desarrollo, {% data variables.product.prodname_github_codespaces %} clonará tu repositorio en un entorno con la imagen de codespace predeterminada que incluye muchas herramientas, lenguajes y entornos en tiempo de ejecución. Si creas un codespace a partir de una plantilla, puedes empezar con alguna configuración inicial sobre la imagen predeterminada. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Puedes personalizar aspectos del entorno de codespace mediante un repositorio de [dotfiles](https://dotfiles.github.io/tutorials/) público. Puedes usar dotfiles para establecer alias y preferencias de shell, o para instalar tus preferencias personales de las herramientas que quieras usar. Si usas {% data variables.product.prodname_github_codespaces %} en el explorador o en {% data variables.product.prodname_vscode %}, puedes usar [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) para proporcionar al editor de codespace la misma configuración, métodos abreviados de teclado, fragmentos de código y extensiones que has configurado en la instalación local de {% data variables.product.prodname_vscode %}. 

Para más información, vea "[Personalización del codespace](/codespaces/customizing-your-codespace)".

## Facturación para {% data variables.product.prodname_codespaces %}

Para obtener más información sobre los precios, el almacenamiento y el uso de {% data variables.product.prodname_github_codespaces %}, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} Para obtener información sobre cómo los propietarios de las organizaciones y los administradores de facturación pueden controlar el límite de gasto de {% data variables.product.prodname_github_codespaces %} en una organización, consulta "[Administración de los límites de gasto de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".
