---
title: Iniciar o GitHub Desktop na linha de comando
shortTitle: Launching from the command line
intro: É possível iniciar o GitHub Desktop na linha de comando.
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  fpt: '*'
ms.openlocfilehash: f1624bb5266183d09804d43cf0b04db580231957
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095118'
---
{% mac %}

1. Na barra de menus, selecione o menu do **{% data variables.product.prodname_desktop %}** e clique em **Instalar Ferramenta de Linha de Comando**.
![Opção Instalar Ferramenta de Linha de Comando no menu suspenso do {% data variables.product.prodname_desktop %}](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. Abra o terminal.
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  Você também pode mudar para o caminho do repositório e digitar `github .` para abrir esse repositório.

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. Abra um prompt de comando.
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 Você também pode mudar para o caminho do repositório e digitar `github .` para abrir esse repositório.

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
