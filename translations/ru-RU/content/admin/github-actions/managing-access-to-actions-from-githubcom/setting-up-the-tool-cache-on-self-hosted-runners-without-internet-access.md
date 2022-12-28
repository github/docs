---
title: Настройка кэша инструментов для локально размещенных средств выполнения без доступа к Интернету
intro: 'Чтобы использовать включенные действия `actions/setup` для локальных модулей выполнения без доступа к Интернету, необходимо сначала заполнить кэш инструментов средства выполнения тестов для рабочих процессов.'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
  - Networking
  - Storage
shortTitle: Tool cache for offline runners
ms.openlocfilehash: fe1b070880db8353064f1be5a26b0a63a5e92cf5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529299'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения включенных действиях по настройке и кэше инструментов для средств выполнения

{% data reusables.actions.enterprise-no-internet-actions %}

Большинство официальных действий, созданных {% data variables.product.prodname_dotcom %}, автоматически объединяются с {% data variables.product.product_name %}. Однако для локально размещенных средств выполнения без доступа к Интернету требуется провести некоторые настройки, прежде чем они смогут использовать включенные действия `actions/setup-LANGUAGE`, такие как `setup-node`.

Как правило, действиям `actions/setup-LANGUAGE` необходим доступ к Интернету, чтобы скачать нужные необходимые двоичные файлы среды в кэш инструментов для средств запуска. Локально размещенные средств выполнения без доступа к Интернету не могут скачивать двоичные файлы, поэтому необходимо вручную заполнить кэш инструментов в средстве выполнения.

Для этого запустите рабочий процесс {% data variables.product.prodname_actions %} на сайте {% data variables.product.prodname_dotcom_the_website %}, который отправляет кэш инструментов размещенного в {% data variables.product.prodname_dotcom %} средства выполнения, в качестве артефакта, который затем можно передать и извлечь в локально размещенном средстве выполнения, отключенного от Интернета.

{% note %}

**Примечание.** Кэш размещенного в {% data variables.product.prodname_dotcom %} средства выполнения можно использовать только для локально размещенного средства выполнения, имеющего идентичную операционную систему и архитектуру. Например, если для создания кэша инструментов используется размещаемое {% data variables.product.prodname_dotcom %} средство выполнения `ubuntu-22.04`, локально размещенное средство выполнения должно быть 64-разрядным компьютером с Ubuntu 22.04. Дополнительные сведения о средствах выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}, см. в разделе [Сведения о средствах выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources).

{% endnote %}

## Предварительные требования

* Определите, какие среды разработки потребуются локально размещенным средствам выполнения. В следующем примере показано, как заполнить кэш инструментов для действия `setup-node` с помощью Node.js версий 10 и 12.
* Доступ к репозиторию на сайте {% data variables.product.prodname_dotcom_the_website %}, который можно использовать для выполнения рабочего процесса.
* Доступ к файловой системе локально размещенного средства выполнения для заполнения папки кэша инструментов.

## Заполнение кэша инструментов для локально размещенного средства выполнения

1. На сайте {% data variables.product.prodname_dotcom_the_website %} перейдите в репозиторий, который можно использовать для выполнения рабочего процесса {% data variables.product.prodname_actions %}.
1. В папке `.github/workflows` репозитория создайте файл рабочего процесса, который отправляет артефакт, содержащий кэш инструментов средства выполнения, размещенного в {% data variables.product.prodname_dotcom %}.

   В следующем примере демонстрируется рабочий процесс, который отправляет кэш инструментов для среды Ubuntu 22.04, используя действие `setup-node` с Node.js версий 10 и 12.

   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-22.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "{% raw %}${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"{% endraw %}
             mkdir -p "{% raw %}${{ runner.tool_cache }}{% endraw %}"
         - name: Setup Node 10
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "{% raw %}${{ runner.tool_cache }}{% endraw %}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: {% data reusables.actions.action-upload-artifact %}
           with:
             path: {% raw %}${{runner.tool_cache}}/tool_cache.tar.gz{% endraw %}
   ```
1. Скачайте артефакт кэша инструментов из выполнения рабочего процесса. Инструкции по скачиванию артефактов см. в статье "[Скачивание артефактов рабочего процесса](/actions/managing-workflow-runs/downloading-workflow-artifacts)".
1. Перенесите артефакт кэша инструментов в локально размещенное средство выполнения и извлеките его в локальный каталог кэша инструментов. Каталог кэша инструментов по умолчанию — `RUNNER_DIR/_work/_tool` Если средство выполнения еще не обработало никаких заданий, может потребоваться создать каталоги `_work/_tool`.

    После извлечения артефакта кэша инструментов, отправленного в приведенном выше примере, у вас должна быть структура каталогов в локально размещенном средстве выполнения, аналогичная приведенной в следующем примере:

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

Теперь локально размещенное средство выполнения без доступа к Интернету может использовать действие `setup-node`. Если у вас возникли проблемы, убедитесь, что заполнен правильный кэш инструментов для рабочих процессов. Например, если необходимо использовать действие `setup-python`, необходимо заполнить кэш инструментов нужным окружением Python.
