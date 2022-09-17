---
title: Personalización de GitHub Codespaces para la cuenta
shortTitle: Personalize your codespaces
intro: 'Puedes personalizar {% data variables.product.prodname_github_codespaces %} mediante un repositorio `dotfiles` en {% data variables.product.product_name %} o por medio de la sincronización de la configuración.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
  - /codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 1aec1fc1fdc3d7e49408d3ddfcf94805994c8633
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878587'
---
## Acerca de personalizar los {% data variables.product.prodname_codespaces %}

Cuando utilizas cualquier ambiente de desarrollo, personalizar las configuraciones y herramientas de acuerdo con tus preferencias y flujos de trabajo es un paso importante. {% data variables.product.prodname_codespaces %} permite dos formas principales de personalizar tus codespaces.

- [Sincronizar configuración](#settings-sync): puede utilizar y compartir la configuración de {% data variables.product.prodname_vscode %} entre {% data variables.product.prodname_codespaces %} y otras instancias de {% data variables.product.prodname_vscode %}
- [Dotfiles](#dotfiles): puede usar un repositorio `dotfiles` para especificar scripts, preferencias de shell y otras configuraciones.

La personalización de {% data variables.product.prodname_codespaces %} aplica a cualquier codespace que crees.

Los mantenendores de proyecto también pueden definir una configuración predeterminada que aplique a cada codespace para un repositorio que cree alguien más. Para más información, vea "[Configuración de {% data variables.product.prodname_codespaces %} para el proyecto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)".

## Sincronización de ajustes

La configuración de ajustes te permite compartir configuraciones tales como configuraciones, atajos de teclado, fragmentos de código, extensiones y estados de IU entre máquinas e instancias de {% data variables.product.prodname_vscode %}.

Para habilitar Sincronizar configuración, en la esquina inferior izquierda de la barra de actividad, seleccione {% octicon "gear" aria-label="The gear icon" %} and click **Activar Sincronizar configuración…** . En la caja de diálogo, selecciona los ajustes que te gustaría sincronizar.

![La opción de sincronización de ajustes en el menú de administración](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Para más información, vea "[Guía de Sincronizar configuración](https://code.visualstudio.com/docs/editor/settings-sync)" en la documentación de {% data variables.product.prodname_vscode %}.

## Dotfiles

Los dotfile son archivos y carpetas de sistemas similares a Unix que comienzan con `.` y que controlan la configuración de aplicaciones y shells en el sistema. Puedes alamacenar y administrar tus dotfiles en un repositorio en {% data variables.product.prodname_dotcom %}. Para obtener consejos y tutoriales sobre qué incluir en el repositorio de dotfile, vea [Dotfile en GitHub](https://dotfiles.github.io/).

Tu repositorio dotfiles puede incluir los alias de tu shell y tus preferencias, cualquier herramienta que quieras instalar o cualquier otra personalización del codespace que quieras hacer.

Puede configurar {% data variables.product.prodname_codespaces %} para usar dotfile desde cualquier repositorio que posea si selecciona ese repositorio en la [configuración personal de {% data variables.product.prodname_codespaces %}](https://github.com/settings/codespaces).

Cuando crea un codespace nuevo, {% data variables.product.prodname_dotcom %} clona su repositorio de dotfiles seleccionado hacia el ambiente del codespace, y busca uno de los siguientes archivos para configurar el ambiente.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Si no se encuentra ninguno de estos archivos, los archivos o carpetas del repositorio dotfiles seleccionado que empiezan por `.` se enlazan de forma simbólica al directorio `~` o `$HOME` del codespace.

Cualquier cambio al repositorio de dotfiles que seleccionaste se aplicará únicamente a cada codespace nuevo y no afectará a ningún codespace existente.

{% note %}

**Nota:** Actualmente, en {% data variables.product.prodname_codespaces %} no se admite la personalización de la configuración de _Usuario_ para el editor de {% data variables.product.prodname_vscode %} con el repositorio `dotfiles`. Puede establecer la configuración predeterminada _Área de trabajo_ y _Repositorio remoto [Codespaces]_ para un proyecto específico en el repositorio del proyecto. Para obtener más información, consulte "[Introducción a los contenedores de desarrollo](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)".

{% endnote %}

### Habilitar tu repositorio de dotfiles para {% data variables.product.prodname_codespaces %}

Puedes utilizar tu repositorio de dotfiles seleccionado para personalizar tu ambiente de {% data variables.product.prodname_codespaces %}. Una vez que elijas tu repositorio de dotfiles, puedes agregar tus scripts, preferencias y configuraciones a este. Después, necesitarás habilitar tus dotfiles desde tu página personal de ajustes de {% data variables.product.prodname_codespaces %}.

{% warning %}

**Advertencia:** Los dotfile tienen la capacidad de ejecutar scripts arbitrarios, que podrían contener código malicioso o inesperado. Antes de instalar un repositorio de dotfiles, te recomendamos verificar los scripts para asegurarte de que no realicen acciones inesperadas.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. En "Dotfiles", seleccione **Instalar dotfiles automáticamente** para que {% data variables.product.prodname_codespaces %} instale los dotfiles de forma automática en cada codespace que cree.
   ![Instalación de dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Elige el repositorio desde el cual quieras instalar dotfiles.
   ![Selección de un repositorio de dotfiles](/assets/images/help/codespaces/select-dotfiles-repo.png)

Puedes agregar más scripts, preferencias o archivos de configuración a tu repositorio de dotfiles o editar los archivos existentes cuando lo desees. Solo los codespaces nuevos tomarán los cambios a los ajustes.

Si el codespace no puede seleccionar las opciones de configuración de los dotfiles, vea "[Solución de problemas de dotfiles para {% data variables.product.prodname_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)".

También puede personalizar {% data variables.product.prodname_codespaces %} mediante [valores de {% data variables.product.prodname_codespaces %}](https://github.com/settings/codespaces) adicionales:

- Para habilitar la comprobación de GPG, consulta "[Administración de la comprobación de GPG para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)".
- Para establecer el editor, consulta "[Configuración del editor predeterminado para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".
- Para establecer cuánto tiempo puede permanecer un codespace sin usar antes de que se detenga automáticamente, consulta "[Establecimiento del periodo de tiempo de espera para GitHub Codespaces](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)".
- Para establecer el periodo durante el que se conservan los codespaces sin usar, consulta "[Configuración de la eliminación automática de los codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".
- Para configurar la región predeterminada, consulta "[Configuración de la región predeterminada para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

## Información adicional

* "[Creación de un repositorio](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
