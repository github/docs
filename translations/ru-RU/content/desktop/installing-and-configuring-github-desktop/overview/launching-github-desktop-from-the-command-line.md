---
title: Запуск GitHub Desktop из командной строки
shortTitle: Launching from the command line
intro: Можно запустить GitHub Desktop из командной строки
redirect_from:
  - /desktop/getting-started-with-github-desktop/launching-github-desktop-from-the-command-line
  - /desktop/installing-and-configuring-github-desktop/launching-github-desktop-from-the-command-line
versions:
  fpt: '*'
ms.openlocfilehash: 5d9851cc8596299b9d3c4f6ec4d2c72e7d4a2b49
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009062'
---
{% mac %}

1. В строке меню выберите меню **{% data variables.product.prodname_desktop %}** и нажмите кнопку **Установить программу командной строки**.
![Параметр "Установить программу командной строки" в раскрывающемся меню {% data variables.product.prodname_desktop %}](/assets/images/help/desktop/mac-install-command-line-tool.png)
2. Откройте терминал.
3. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  $ github /PATH/TO/REPO
  ```

  Вы также можете изменить путь к репозиторию, а затем ввести `github .`, чтобы открыть этот репозиторий.

  ```shell
  $ cd /PATH/TO/REPO
  [repo]$ github .
  ```

{% endmac %}

{% windows %}

1. Откройте командную строку.
2. {% data reusables.desktop.launch-desktop-from-command-line %}

  ```shell
  C:\Users\octocat> github PATH\TO\REPO
  ```

 Вы также можете изменить путь к репозиторию, а затем ввести `github .`, чтобы открыть этот репозиторий.

  ```shell
  C:\Users\octocat> cd REPO\MY-REPO
  C:\Users\octocat\repo\myrepo> github .
  ```

{% endwindows %}
