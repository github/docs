---
title: Краткое руководство по GitHub Actions
intro: 'Попробуйте функции {% data variables.product.prodname_actions %} за 5 минут или быстрее.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: Quickstart
ms.openlocfilehash: 3ae31c1f91a9c29176c97c516437aee92ba32724
ms.sourcegitcommit: 576f4142b5375e2eec7c2f50d39b94207d915435
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008756'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

Для создания и запуска рабочего процесса {% data variables.product.prodname_actions %} требуется только репозиторий {% data variables.product.prodname_dotcom %}. В этом руководстве вы добавите рабочий процесс, демонстрирующий некоторые важные функции {% data variables.product.prodname_actions %}. 

В следующем примере показано, как можно автоматически активировать задания {% data variables.product.prodname_actions %}, где они выполняются, и как они могут взаимодействовать с кодом в репозитории.

## Создание вашего первого рабочего процесса

1. Создайте каталог `.github/workflows` в своем репозитории в {% data variables.product.prodname_dotcom %}, если этот каталог еще не существует.
1. В каталоге `.github/workflows` создайте файл с именем `github-actions-demo.yml`. Дополнительные сведения см. в статье "[Создание файлов](/github/managing-files-in-a-repository/creating-new-files)".
1. Скопируйте в файл следующее `github-actions-demo.yml` содержимое YAML:

   ```yaml{:copy}
   name: GitHub Actions Demo
   {%- ifversion actions-run-name %}
   run-name: {% raw %}${{ github.actor }}{% endraw %} is testing out GitHub Actions 🚀
   {%- endif %}
   on: [push]
   jobs:
     Explore-GitHub-Actions:
       runs-on: ubuntu-latest
       steps:
         - run: echo "🎉 The job was automatically triggered by a {% raw %}${{ github.event_name }}{% endraw %} event."
         - run: echo "🐧 This job is now running on a {% raw %}${{ runner.os }}{% endraw %} server hosted by GitHub!"
         - run: echo "🔎 The name of your branch is {% raw %}${{ github.ref }}{% endraw %} and your repository is {% raw %}${{ github.repository }}{% endraw %}."
         - name: Check out repository code
           uses: {% data reusables.actions.action-checkout %}
         - run: echo "💡 The {% raw %}${{ github.repository }}{% endraw %} repository has been cloned to the runner."
         - run: echo "🖥️ The workflow is now ready to test your code on the runner."
         - name: List files in the repository
           run: |
             ls {% raw %}${{ github.workspace }}{% endraw %}
         - run: echo "🍏 This job's status is {% raw %}${{ job.status }}{% endraw %}."
   ```
1. Прокрутите страницу вниз и выберите **Создать новую ветвь для этой фиксации и запустить запрос на вытягивание**. Затем нажмите **Предложить новый файл**, чтобы создать запрос на вытягивание.

   ![Фиксация файла рабочего процесса](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Фиксация файла рабочего процесса в ветви в вашем репозитории активирует событие `push` и запускает рабочий процесс.

## Просмотр результатов рабочего процесса

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. На левой боковой панели щелкните нужный рабочий процесс.

   ![Список рабочих процессов в боковой панели слева](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. В списке запусков рабочих процессов выберите имя запуска, который вы хотите просмотреть.

   ![Имя запуска рабочего процесса](/assets/images/help/repository/actions-quickstart-run-name.png)
1. В разделе **Задания** щелкните задание **Explore-GitHub-Actions**.

   ![Поиск задания](/assets/images/help/repository/actions-quickstart-job.png)
1. В журнале показано, как был обработан каждый из шагов. Чтобы просмотреть сведения о шаге, разверните его.

   ![Пример результатов рабочего процесса](/assets/images/help/repository/actions-quickstart-logs.png)
   
   Например, можно просмотреть список файлов в репозитории: ![Пример сведений о действии](/assets/images/help/repository/actions-quickstart-log-detail.png)

Пример рабочего процесса, который вы только что добавили, активируется каждый раз, когда код отправляется в ветвь, и показывает, как {% данных variables.product.prodname_actions %} может работать с содержимым репозитория. Подробное руководство см. в разделе "[Основные сведения о данных {% variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)".

## Дополнительные начальные рабочие процессы

{% data reusables.actions.workflow-template-overview %}

## Дальнейшие действия

{% данных reusables.actions.onboarding-next-steps %}
