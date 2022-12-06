---
title: Открытие существующего пространства кода
intro: Вы можете повторно открыть закрытое или остановленное пространство кода и вернуться к работе.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: b139b7f4e8a696416c97b3c400d09a9f26371b9c
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188299'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

Вы можете повторно открыть любое из активных или остановленных кодовых пространств в {% data variables.product.prodname_dotcom_the_website %}, в интегрированной среде разработки JetBrains, в {% data variables.product.prodname_vscode %} или с помощью {% data variables.product.prodname_cli %}. Вы не можете повторно открыть пространство codespace, которое было удалено. Дополнительные сведения см. в разделе [Жизненный цикл codespace](/codespaces/getting-started/the-codespace-lifecycle).

Вы можете просмотреть все свои codespace на странице "Ваши codespaces" в [github.com/codespaces](https://github.com/codespaces). На этой странице можно выполнить следующие действия:

- Откройте, остановите или удалите codespace.
- Узнайте, кто владеет (и может выставляться за) ваши codespace: ваша личная учетная запись или организации, к которым вы принадлежите. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).
- Создайте новое пространство кода, выбрав один из шаблонов {% data variables.product.company_short %}, или щелкнув **Создать пространство кода**. Дополнительные сведения см. в [разделах Создание codespace из шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) и [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

## Открытие существующего пространства кода

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Чтобы открыть codespace в редакторе по умолчанию, щелкните имя codespace. {% data reusables.codespaces.about-changing-default-editor %} Дополнительные сведения см. в разделе [Настройка редактора по умолчанию для {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces).
   
   Чтобы открыть пространство кода в редакторе, отличном от используемого по умолчанию, выполните следующие действия.
   
   1. Щелкните многоточие (**...**) справа от codespace, которое нужно открыть.
   1. Нажмите кнопку **Открыть в**.
   1. Нажмите кнопку **Открыть в приложении**.

   ![Снимок экрана: диалоговое окно "Открыть в" с выделенным элементом "Открыть в Visual Studio Code"](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   Пространство кода можно открыть в:
   * Ваш браузер
   * {% data variables.product.prodname_vscode %}
   * Шлюз JetBrains
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   Если выбрать **JupyterLab**, приложение JupyterLab должно быть установлено в codespace. {% data reusables.codespaces.jupyterlab-in-default-image %}

{% endwebui %}

{% vscode %}

{% note %}

**Примечание.** {% data reusables.codespaces.using-codespaces-in-vscode %} Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code).

{% endnote %}

1. В классическом приложении {% data variables.product.prodname_vscode_shortname %} откройте палитру команд <kbd>с помощью команды Shift</kbd>+<kbd></kbd>+<kbd>P</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows или Linux).
1. Введите Codespaces и выберите одну из следующих команд.
   - Чтобы открыть codespace в новом окне {% data variables.product.prodname_vscode_shortname %}, выберите **Codespaces: Открыть codespace в новом окне**.
   - Чтобы открыть codespace в веб-редакторе, выберите **Codespaces: Открыть в браузере**.
1. Щелкните пространство кода, которое нужно открыть.
   
   ![Снимок экрана: список codespace в Visual Studio Code](/assets/images/help/codespaces/open-codespace-from-vscode.png)

Вы также можете получить доступ к командам, перечисленным выше, перейдя в представление Удаленного обозревателя в {% data variables.product.prodname_vscode_shortname %} и щелкнув правой кнопкой мыши пространство кода, которое нужно открыть.

![Снимок экрана: пространство кода, выбранное в удаленном обозревателе, с выделенным элементом "Открыть в браузере"](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %} {% endvscode %}

{% cli %}

1. В окне терминала введите одну из следующих команд {% data variables.product.prodname_cli %}.
   - Чтобы открыть пространство кода в {% data variables.product.prodname_vscode_shortname %}, введите:

     ```shell{:copy}
     gh codespace code
     ```
     
     {% note %}

     **Примечание**. На локальном компьютере должен быть установлен {% data variables.product.prodname_vscode_shortname %}. Дополнительные сведения см. в разделе [Настройка Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview) документации по {% data variables.product.prodname_vscode_shortname %}.

     {% endnote %}
     
   - Чтобы открыть codespace в браузере, введите:
  
     ```shell{:copy}
     gh codespace code --web
     ```

   - Чтобы открыть codespace в JupyterLab, введите:
  
     ```shell{:copy}
     gh codespace code --jupyter
     ```
     
     {% note %}

     **Примечание**. {% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}
     
1. С помощью клавиш со стрелками перейдите в пространство кода, которое нужно открыть.
1. Чтобы открыть codespace, нажмите клавишу <kbd>ВВОД</kbd>.

Дополнительные сведения см [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) . в руководстве по {% data variables.product.prodname_cli %}.

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}
