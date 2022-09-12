---
title: Inicio rápido para GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} puede ayudarte a trabajar porque te ofrece sugerencias insertadas mientras codificas.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
ms.openlocfilehash: 5aa3071cddc2bf83e7ee7082eabea00f79a66ea5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080643'
---
## Introducción

{% data variables.product.prodname_copilot %} es un programador de pares de IA. Puedes usar {% data variables.product.prodname_copilot %} para obtener sugerencias para líneas o funciones completas directamente en el editor.

En esta guía, se muestra cómo te puedes registrar en {% data variables.product.prodname_copilot %}, instalar la extensión de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %} y obtener tu primera sugerencia. Para más información sobre {% data variables.product.prodname_copilot %}, consulta "[Acerca {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)". Para información más detallada sobre cómo usar {% data variables.product.prodname_copilot %} en una variedad de entornos, consulta "[Introducción](/copilot/getting-started-with-github-copilot)".

## Prerrequisitos

{% data reusables.copilot.copilot-prerequisites %}
- Para usar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}, debes tener instalado {% data variables.product.prodname_vscode %}. Para más información, consulta la documentación de [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/).

## Registro en {% data variables.product.prodname_copilot %}

{% data reusables.copilot.signup-procedure %}

## Instalación de la extensión de {% data variables.product.prodname_copilot %} para {% data variables.product.prodname_vscode %}

Para usar {% data variables.product.prodname_copilot %}, primero debes instalar la extensión de {% data variables.product.prodname_vscode %}.

1. En {% data variables.product.prodname_vscode %} Marketplace, ve a la página [Extensión de {% data variables.product.prodname_copilot %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) y haz clic en **Instalar**.
   ![Instalación de la extensión de {% data variables.product.prodname_copilot %} {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Aparecerá una ventana emergente que te pedirá que abras {% data variables.product.prodname_vscode %}. Haz clic en **Abrir {% data variables.product.prodname_vscode %}** .
1. En la pestaña "Extensión: {% data variables.product.prodname_copilot %}" de {% data variables.product.prodname_vscode %}, haz clic en **Instalar**.
   ![Botón Instalar de {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Si no autorizaste previamente a {% data variables.product.prodname_vscode %} en tu cuenta de {% data variables.product.prodname_dotcom %}, se te pedirá que inicies sesión en {% data variables.product.prodname_dotcom %} en {% data variables.product.prodname_vscode %}.
   - Si autorizaste previamente a {% data variables.product.prodname_vscode %} en tu cuenta de {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} se autorizará automáticamente.
   ![Captura de pantalla de la autorización de {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. En el explorador, {% data variables.product.prodname_dotcom %} solicitará los permisos necesarios para {% data variables.product.prodname_copilot %}. Para aprobar estos permisos, haz clic en **Autorizar {% data variables.product.prodname_vscode %}** . 
1. En {% data variables.product.prodname_vscode %}, en el cuadro de diálogo "{% data variables.product.prodname_vscode %}", haz clic en **Abrir** para confirmar la autenticación. 

## Obtención de tu primera sugerencia

{% data reusables.copilot.supported-languages %} Los ejemplos siguientes están en JavaScript, pero otros lenguajes funcionarán de manera similar.

1. Abre {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %} {% data reusables.copilot.type-function-header %} {% data variables.product.prodname_copilot %} sugerirá automáticamente todo el cuerpo de una función en texto atenuado, tal como se muestra a continuación. La sugerencia exacta puede variar.
![Primera sugerencia {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Pasos siguientes

Instalaste {% data variables.product.prodname_copilot %} correctamente y recibiste tu primera sugerencia, pero eso es solo el principio. Estos son algunos recursos útiles para que completes los pasos siguientes con {% data variables.product.prodname_copilot %}.

- [Introducción](/copilot/getting-started-with-github-copilot): aprendiste a obtener tu primera sugerencia en {% data variables.product.prodname_vscode %}. Estas guías te muestran cómo configurar y recorrer las diversas funciones de {% data variables.product.prodname_copilot %} en todos los entornos admitidos.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): ve ejemplos prácticos de cómo {% data variables.product.prodname_copilot %} puede ayudarte a trabajar.
- [Configuración de {% data variables.product.prodname_copilot %}](/copilot/configuring-github-copilot): estas guías te proporciona información detallada sobre cómo configurar {% data variables.product.prodname_copilot %} según tus preferencias personales.


## Información adicional

- [Acerca de {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
