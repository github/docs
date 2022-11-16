---
title: Solución de problemas de dotfiles para GitHub Codespaces
allowTitleToDifferFromFilename: true
intro: Pasos de solución de problemas para los problemas comunes con los dotfiles.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
ms.openlocfilehash: 699f790e45c71e685ac6b301e8dea1eca2ee6f15
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158689'
---
Si tu codespace falla en tomar ajustes de configuración de dotfiles, debes trabajar con los siguientes pasos de depuración.

1. Para habilitar dotfiles, selecciona **Instalar dotfiles automáticamente** en [tu configuración personal de {% data variables.product.prodname_github_codespaces %}](https://github.com/settings/codespaces).

   ![Opción "Instalar dotfiles automáticamente"](/assets/images/help/codespaces/automatically-install-dotfiles.png)

1. Compruebe `/workspaces/.codespaces/.persistedshare/dotfiles` para ver si los dotfiles se han clonado.
   - Si se clonaron tus dotfiles, intenta volver a ejecutar tu script de instalación manualmente para verificar que sea ejecutable.
   - Si los dotfiles no se han clonado, compruebe `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` para ver si se ha producido un problema al clonarlos.
1. Compruebe `/workspaces/.codespaces/.persistedshare/creation.log` para detectar posibles problemas. Para obtener más información, vea [Registros de creación](/codespaces/troubleshooting/codespaces-logs#creation-logs).

Si la configuración de los dotfiles se ha elegido correctamente, pero parte de esta es incompatible con los codespaces, utilice la variable de entorno `$CODESPACES` a fin de agregar una lógica condicional para los ajustes de configuración específicos de los codespaces.
