---
title: Устранение неполадок с файлами точек для GitHub Codespaces
allowTitleToDifferFromFilename: true
intro: Устранение типичных неполадок с файлами с точкой.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
ms.openlocfilehash: 699f790e45c71e685ac6b301e8dea1eca2ee6f15
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158688'
---
Если среде codespace не удается получить параметры конфигурации из файлов с точкой, необходимо выполнить указанные ниже действия по отладке.

1. Включите файлы точек, выбрав **Автоматическая установка файлов точек** в [личных параметрах {% data variables.product.prodname_github_codespaces %}](https://github.com/settings/codespaces).

   ![Параметр "Автоматически устанавливать файлы с точкой"](/assets/images/help/codespaces/automatically-install-dotfiles.png)

1. Проверьте `/workspaces/.codespaces/.persistedshare/dotfiles`, чтобы узнать, были ли клонированы файлы с точкой.
   - Если файлы с точкой были клонированы, попробуйте вручную перезапустить скрипт установки, чтобы убедиться, что он является исполняемым.
   - Если файлы с точкой не были клонированы, проверьте `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt`, чтобы узнать о возможной проблеме с клонированием.
1. Проверьте `/workspaces/.codespaces/.persistedshare/creation.log` на предмет возможных проблем. Дополнительные сведения см. в разделе [Журналы создания](/codespaces/troubleshooting/codespaces-logs#creation-logs).

Если получение конфигурации из файлов с точкой осуществляется правильно, но часть конфигурации несовместима со средами codespace, используйте переменную среды `$CODESPACES`, чтобы добавить условную логику для параметров конфигурации, относящихся к конкретной среде codespace.
