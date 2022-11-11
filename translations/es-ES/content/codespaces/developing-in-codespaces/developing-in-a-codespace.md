---
title: Desarrollar en un codespace
intro: 'Puedes abrir un codespace en {% data variables.product.product_name %} y después desarrollar utilizando las características de {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: 459e98978fdc062d96372c26c56a0f042878d40d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109876'
---
## Acerca del desarrollo con {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} te proporciona la experiencia completa de desarrollo de {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.links-to-get-started %}

![Resumen de codespace con anotaciones](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. Barra lateral - Predeterminadamente, esta área te muestra los archivos de tu proyexcto en el explorador.
2. Barra de actividad - Esto muestra las vistas y te proporciona una forma de cambiar entre ellas. Puedes volver a ordenar las vistas si las arrastras y las sueltas.
3. Editor - Aquí es donde editas tus archivos. Puedes utilzar la pestaña para que cada editor la posicione exactamente donde la necesitas.
4. Paneles - Aquí es donde puedes ver la información de salida y depuración, así como el lugar predeterminado para la Terminal integrada.
5. Barra de estado - Esta área te proporciona información útil sobre tu codespace y proyecto. Por ejemplo, el nombre de rama, los puertos configurados y más.

Para obtener más información sobre el uso de {% data variables.product.prodname_vscode_shortname %}, consulta la [guía de la interfaz de usuario](https://code.visualstudio.com/docs/getstarted/userinterface) en la documentación de {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} Para obtener más información, consulta "[Solución de problemas de clientes de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-codespaces-clients)".

### Personalizar tu codespace

{% data reusables.codespaces.about-personalization %} Para obtener más información, consulta "[Personalización de {% data variables.product.prodname_github_codespaces %} en tu cuenta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)".

{% data reusables.codespaces.apply-devcontainer-changes %} Para obtener más información, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

### Ejecutar tu app desde un codespace
{% data reusables.codespaces.about-port-forwarding %} Para obtener más información, consulte "[Reenvío de puertos en su codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)".

### Configramr tus cambios

{% data reusables.codespaces.committing-link-to-procedure %} 

### Utilizar la {% data variables.product.prodname_vscode_command_palette %}

La {% data variables.product.prodname_vscode_command_palette %} te permite acceder y administrar muchas de las características para {% data variables.product.prodname_github_codespaces %} y {% data variables.product.prodname_vscode_shortname %}. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_vscode_command_palette_shortname %} en {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)".
