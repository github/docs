---
title: Git-Benutzername festlegen
intro: 'Git verknüpft Commits über den Benutzernamen mit einer Identität. Der Git-Benutzername ist nicht identisch mit deinem {% data variables.product.product_name %}-Benutzernamen.'
redirect_from:
  - /articles/setting-your-username-in-git
  - /github/using-git/setting-your-username-in-git
  - /github/getting-started-with-github/setting-your-username-in-git
  - /github/getting-started-with-github/getting-started-with-git/setting-your-username-in-git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Set your username
ms.openlocfilehash: c713f21fdf91269764dd97f15770e7996bf9f4f0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131273'
---
## Informationen zu Git-Benutzernamen
Den Namen, der mit deinen Git-Commits verbunden ist, kannst du mit dem Befehl `git config` ändern. Der neue Name wird bei allen zukünftigen Commits angezeigt, die du über die Befehlszeile an {% data variables.product.product_name %} pushst. Als Git-Benutzernamen kannst du einen beliebigen Text verwenden, um deinen echten Namen privat zu halten.

Eine Änderung deines Namens für Git-Commits mit dem Befehl `git config` wirkt sich nur auf zukünftige Commits aus. Der für frühere Commits verwendete Name wird hierdurch nicht geändert.

## Festlegen eines Git-Benutzernamens für *alle* Repositorys auf deinem Computer

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

## Git-Benutzername für ein einzelnes Repository festlegen

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Ändere das aktuelle Arbeitsverzeichnis in das lokale Repository, für das du den Benutzernamen für deine Git-Commits festlegen möchtest.

3. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
   ```

## Weitere Informationsquellen

- [E-Mail-Adresse für Commits festlegen](/articles/setting-your-commit-email-address)
- ["Git-Konfiguration" aus dem _Pro Git_-Buch](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
