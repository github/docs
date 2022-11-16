---
title: Разработка стороннего действия CLI
shortTitle: CLI setup action
intro: 'Узнайте, как разработать действие для настройки интерфейса командной строки в средствах выполнения тестов {% data variables.product.prodname_actions %}.'
redirect_from: []
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Actions
ms.openlocfilehash: c839faa63efd0f8b7f5ab78a81107d27ab93e1c4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092538'
---
## Введение

Вы можете написать действие, чтобы предоставить пользователям возможность доступа к вашим серверам через настроенную среду CLI в средствах выполнения {% data variables.product.prodname_actions %}.

Действие должно отвечать следующим требованиям:

- позволять пользователям легко указывать версию интерфейса CLI для установки;
- поддерживать несколько операционных систем;
- эффективно выполняться для сведения к минимуму затрат времени и ресурсов;
- работать в размещенных в {% data variables.product.product_name %} и локальных средствах выполнения;
- по возможности использовать инструменты сообщества.

В этой статье показано, как написать действие, которое получает определенную версию интерфейса CLI, устанавливает ее, добавляет ее по определенному пути и (необязательно) кэширует ее. Действия такого типа (которые устанавливают средство) часто называются `setup-$TOOL`. 

## Предварительные требования

У вас должно быть представление о написании пользовательских действий. Дополнительные сведения см. в разделе [Сведения о настраиваемых действиях](/actions/creating-actions/about-custom-actions). Более подробное руководство по написанию пользовательского действия см. в разделе [Создание действия JavaScript](/actions/creating-actions/creating-a-javascript-action).

## Пример

В приведенном ниже скрипте показано, как получить указанную пользователем версию в качестве входных данных, скачать и извлечь эту версию интерфейса CLI, а затем добавить ее по пути.

{% data variables.product.prodname_dotcom %} предоставляет [`actions/toolkit`](https://github.com/actions/toolkit), набор пакетов, помогающих создавать действия. В этом примере используются пакеты [`actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) и [`actions/tool-cache`](https://github.com/actions/toolkit/tree/main/packages/tool-cache).

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool(getDownloadURL());

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
```
{% endraw %}

Чтобы использовать этот скрипт, замените `getDownloadURL` на функцию, которая скачивает интерфейс CLI. Вам также потребуется создать файл метаданных действия (`action.yml`), который принимает входной аргумент `version` и запускает скрипт. Полные сведения о создании действия см. в разделе [Создание действия JavaScript](/actions/creating-actions/creating-a-javascript-action).

Полный пример настройки этого действия см. в [example-setup-gh](https://github.com/github-developer/example-setup-gh).

## Дополнительные материалы

Этот шаблон применяется в нескольких действиях. Дополнительные примеры:

* [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)
* [`google-github-actions/setup-gcloud`](https://github.com/google-github-actions/setup-gcloud)
* [`hashicorp/setup-terraform`](https://github.com/hashicorp/setup-terraform)

