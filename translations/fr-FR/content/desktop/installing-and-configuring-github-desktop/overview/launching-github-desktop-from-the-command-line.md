---
title: Lancement de GitHub Desktop à partir de la ligne de commande
shortTitle: Launching from the command line
intro: Vous pouvez lancer GitHub Desktop à partir de la ligne de commande.
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  fpt: '*'
ms.openlocfilehash: f1624bb5266183d09804d43cf0b04db580231957
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105234'
---
{% mac %}

1. Dans la barre de menus, sélectionnez le menu **{% data variables.product.prodname_desktop %}** , puis cliquez sur **Installer l’outil en ligne de commande**.
![Option Installer l’outil en ligne de commande dans le menu déroulant {% data variables.product.prodname_desktop %} drop-down menu](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. Ouvrir le terminal.
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  Vous pouvez également accéder au chemin du dépôt, puis taper `github .` pour ouvrir le dépôt.

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. Ouvrez une invite de commandes.
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 Vous pouvez également accéder au chemin du dépôt, puis taper `github .` pour ouvrir le dépôt.

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
