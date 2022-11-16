---
title: Открытие существующего codespace
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
ms.openlocfilehash: e7a35c1a7b3a251094bf69fcd401291b69d03eae
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159008'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

Вы можете повторно открыть любое активное или остановленное codespace в {% data variables.product.prodname_dotcom_the_website %}, в интегрированной среде разработки JetBrains, в {% data variables.product.prodname_vscode %} или с помощью {% data variables.product.prodname_cli %}. Вы не можете повторно открыть пространство codespace, которое было удалено. Дополнительные сведения см. в разделе [Жизненный цикл codespace](/codespaces/developing-in-codespaces/the-codespace-lifecycle).

Вы можете просмотреть все свои codespace на странице "Ваши codespaces" в [github.com/codespaces](https://github.com/codespaces). На этой странице можно выполнить следующие действия:

- Откройте, остановите или удалите codespace.
- Узнайте, кто владеет (и может оплачиваться) вашими codespace: ваша личная учетная запись или организации, к которым вы принадлежите. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).
- Создайте новое пространство кода, выбрав один из шаблонов {% data variables.product.company_short %}, или щелкнув **Создать codespace**. Дополнительные сведения см. в разделах [Создание codespace на основе шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) и [Создание пространства кода для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

## Открытие существующего codespace

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Чтобы открыть codespace в редакторе по умолчанию, щелкните имя codespace. {% data reusables.codespaces.about-changing-default-editor %} Дополнительные сведения см. в разделе [Настройка редактора по умолчанию для {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces).
   
   Чтобы открыть codespace в редакторе, отличном от используемого по умолчанию, выполните следующие действия.
   
   1. Щелкните многоточие (**...**) справа от пространства кода, которое нужно открыть.
   1. Нажмите кнопку **Открыть в**.
   1. Нажмите кнопку **Открыть в приложении**.

   ![Снимок экрана: диалоговое окно "Открыть в" с выделенным элементом "Открыть в Visual Studio Code"](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   Codespace можно открыть в:
   * Ваш браузер
   * {% data variables.product.prodname_vscode %}
   * Шлюз JetBrains
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   Если вы выберете **JupyterLab**, приложение JupyterLab должно быть установлено в codespace. {% data reusables.codespaces.jupyterlab-in-default-image %}

{% endwebui %}

{% vscode %}

{% note %}

**Примечание.** {% data reusables.codespaces.using-codespaces-in-vscode %} Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code).

{% endnote %}

1. В классическом приложении {% data variables.product.prodname_vscode_shortname %} откройте палитру команд с<kbd>помощью</kbd> <kbd>команды Shift</kbd>++<kbd>P</kbd> (Mac) или <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Введите Codespaces и выберите одну из следующих команд.
   - Чтобы открыть codespace в новом окне {% data variables.product.prodname_vscode_shortname %}, выберите **Codespaces: Открыть Codespace в новом окне**.
   - Чтобы открыть codespace в веб-редакторе, выберите **Codespaces: Открыть в браузере**.
1. Щелкните пространство кода, которое нужно открыть.
   
   ![Снимок экрана: список codespace в Visual Studio Code](/assets/images/help/codespaces/open-codespace-from-vscode.png)

Вы также можете получить доступ к приведенным выше командам, перейдя в представление удаленного обозревателя в {% data variables.product.prodname_vscode_shortname %} и щелкнув правой кнопкой мыши пространство кода, которое нужно открыть.

![Снимок экрана: пространство кода, выбранное в удаленном проводнике, с выделенным элементом "Открыть в браузере"](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %} {% endvscode %}

{% cli %}

1. В окне терминала введите одну из следующих команд {% data variables.product.prodname_cli %}.
   - Чтобы открыть codespace в {% data variables.product.prodname_vscode_shortname %}, введите:

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
     
1. С помощью клавиш со стрелками перейдите к пространству кода, которое нужно открыть.
1. Чтобы открыть codespace, нажмите клавишу <kbd>ВВОД</kbd>.

Дополнительные сведения см [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) . в руководстве по {% data variables.product.prodname_cli %}.

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}
