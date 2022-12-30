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
ms.openlocfilehash: d2131a506990a959f803b13353b794a9dd347174
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193474'
---
## Introducción

{% data variables.product.prodname_copilot %} es un programador de pares de IA. Puedes usar {% data variables.product.prodname_copilot %} para obtener sugerencias para líneas o funciones completas directamente en el editor.

En esta guía se describe cómo te puedes registrar en {% data variables.product.prodname_copilot %} con tu cuenta personal, cómo instalar la extensión de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %} y cómo obtener tu primera sugerencia. Para más información sobre {% data variables.product.prodname_copilot %}, consulta "[Acerca {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)". Para información más detallada sobre cómo usar {% data variables.product.prodname_copilot %} en una variedad de entornos, consulta "[Introducción](/copilot/getting-started-with-github-copilot)".

## Prerrequisitos

{% data reusables.copilot.copilot-prerequisites %}
- Para usar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}, debes tener instalado {% data variables.product.prodname_vscode %}. Para más información, consulta la documentación de [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/).

## Registro en {% data variables.product.prodname_copilot %}

Antes de empezar a usar {% data variables.product.prodname_copilot %}, deberás configurar una evaluación gratuita o una suscripción para tu cuenta personal. 

{% note %}

**Nota:** Si eres miembro de una organización que pertenece a una cuenta de {% data variables.product.prodname_ghe_cloud %} con una suscripción de {% data variables.product.prodname_copilot %}, y tu organización te ha asignado un puesto de {% data variables.product.prodname_copilot %}, puedes continuar con [Instalación de la extensión de {% data variables.product.prodname_copilot %} para {% data variables.product.prodname_vscode %}](/copilot/quickstart#installing-the-github-copilot-extension-for-visual-studio-code).

{% endnote %}

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

{% data reusables.copilot.code-examples-limitations %}

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
