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
ms.openlocfilehash: 70b7b5b91e68b80033edd59ae3a7826e0e2ee25f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614355'
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

{% data reusables.codespaces.use-chrome %} Para obtener más información, consulte "[Solución de problemas de clientes de Codespaces](/codespaces/troubleshooting/troubleshooting-codespaces-clients)".

### Personalizar tu codespace

{% data reusables.codespaces.about-personalization %} Para obtener más información, consulta "[Personalización de {% data variables.product.prodname_github_codespaces %} en tu cuenta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)".

{% data reusables.codespaces.apply-devcontainer-changes %} Para obtener más información, consulte "[Configuración de {% data variables.product.prodname_codespaces %} en su proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)."

### Ejecutar tu app desde un codespace
{% data reusables.codespaces.about-port-forwarding %} Para obtener más información, consulte "[Reenvío de puertos en su codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)".

### Configramr tus cambios

{% data reusables.codespaces.committing-link-to-procedure %} 

### Utilizar la {% data variables.product.prodname_vscode_command_palette %}

La {% data variables.product.prodname_vscode_command_palette %} te permite acceder y administrar muchas de las características para {% data variables.product.prodname_codespaces %} y {% data variables.product.prodname_vscode_shortname %}. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_vscode_command_palette_shortname %} en {% data variables.product.prodname_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)".

## Navegar a un codespace existente

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. Da clic en el nombre del codespace en el cual quieras desarrollar.
  ![Nombre del codespace](/assets/images/help/codespaces/click-name-codespace.png)

También puede ver cualquier codespace activo en un repositorio si navega hasta ese repositorio y selecciona **{% octicon "code" aria-label="The code icon" %} Code**. El menú desplegable mostrará todos los codespaces activos en un repositorio.
