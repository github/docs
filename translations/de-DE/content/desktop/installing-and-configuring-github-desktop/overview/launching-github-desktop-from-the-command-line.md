---
title: GitHub Desktop an der Befehlszeile starten
shortTitle: Launching from the command line
intro: Du kannst GitHub Desktop an der Befehlszeile starten.
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  fpt: '*'
ms.openlocfilehash: f1624bb5266183d09804d43cf0b04db580231957
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105235'
---
{% mac %}

1. Wähle auf der Menüleiste das **{% data variables.product.prodname_desktop %}** -Menü aus, und klicke dann auf **Befehlszeilentool installieren**.
![Option „Befehlszeilentool installieren“ im {% data variables.product.prodname_desktop %}-Dropdownmenü](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. Öffne das Terminal.
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  Du kannst auch zu deinem Repositorypfad wechseln und dann `github .` eingeben, um dieses Repository zu öffnen.

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. Öffnen Sie eine Eingabeaufforderung.
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 Du kannst auch zu deinem Repositorypfad wechseln und dann `github .` eingeben, um dieses Repository zu öffnen.

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
