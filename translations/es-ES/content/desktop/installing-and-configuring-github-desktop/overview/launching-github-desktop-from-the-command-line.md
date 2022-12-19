---
title: Lanzar GitHub Desktop desde la línea de comando
shortTitle: Launching from the command line
intro: Puedes lanzar GitHub Desktop desde la línea de comando.
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  fpt: '*'
ms.openlocfilehash: f1624bb5266183d09804d43cf0b04db580231957
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117281'
---
{% mac %}

1. En la barra de menús, seleccione el menú **{% data variables.product.prodname_desktop %}** y luego haga clic en **Install Command Line Tool** (Instalar herramienta de línea de comandos).
![Opción para instalar la herramienta de línea de comandos en el menú desplegable de {% data variables.product.prodname_desktop %}](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. Abre Terminal.
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github <em>/path/to/repo</em>
  ```

  También puede cambiar a la ruta de acceso del repositorio y, después, escribir `github .` para abrir ese repositorio.

  ```shell
  $ cd <em>/path/to/repo</em>
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. Abra un símbolo del sistema.
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github <em>path\to\repo</em>
  ```

 También puede cambiar a la ruta de acceso del repositorio y, después, escribir `github .` para abrir ese repositorio.

  ```shell
  C:\Users\octocat> cd <em>repo\myrepo</em>
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
