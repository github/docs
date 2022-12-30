---
ms.openlocfilehash: 53dbd22ad351ec7a1abc92107b366ecd8c71a3a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064541"
---
## Создание примера рабочего процесса

Для определения рабочего процесса {% data variables.product.prodname_actions %} использует синтаксис YAML.  Каждый рабочий процесс хранится как отдельный YAML-файл в репозитории кода в каталоге с именем `.github/workflows`.

Можно создать пример рабочего процесса в репозитории, который автоматически активирует ряд команд при отправке кода. В этом рабочем процессе {% data variables.product.prodname_actions %} извлекает отправленный код, устанавливает платформу тестирования [bats](https://www.npmjs.com/package/bats) и выполняет базовую команду для вывода версии bats: `bats -v`.

1. В репозитории создайте каталог `.github/workflows/` для хранения файлов рабочего процесса.
1. В каталоге `.github/workflows/` создайте файл с именем `learn-github-actions.yml` и добавьте следующий код.

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. Зафиксируйте эти изменения и отправьте их в репозиторий {% data variables.product.prodname_dotcom %}.

Новый файл рабочего процесса {% data variables.product.prodname_actions %} теперь установлен в репозитории и будет выполняться автоматически каждый раз, когда кто-то отправляет изменения в репозиторий. Дополнительные сведения о журнале выполнения рабочего процесса см. в разделе "[Просмотр действия для выполнения рабочего процесса](#viewing-the-activity-for-a-workflow-run)".

## Общие сведения о файле рабочего процесса

Чтобы понять, как используется синтаксис YAML для создания файла рабочего процесса, просмотрите объяснение каждой строки вводного примера.

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>Необязательно</em>. Имя рабочего процесса в том виде, как оно отображается на вкладке "Действия" репозитория {% data variables.product.prodname_dotcom %}.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Указывает триггер для этого рабочего процесса. В этом примере используется событие <code>push</code>, поэтому выполнение рабочего процесса запускается каждый раз, когда кто-то отправляет изменения в репозиторий или объединяет запрос на вытягивание.  Он активируется при отправке в каждую ветвь. Примеры синтаксиса, который выполняется только при отправке в определенные ветви, пути или теги, см. в статье «<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}</a>».
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
Объединяет все задания, выполняемые в рабочем процессе <code>learn-github-actions</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Определяет задание с именем <code>check-bats-version</code>. Дочерние ключи определяют свойства задания.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
Настраивает задание для выполнения в последней версии средства выполнения Ubuntu Linux. Это означает, что задание будет выполняться на новой виртуальной машине, размещенной в GitHub. Примеры синтаксиса, где используются другие средства выполнения тестов, см. в статье «<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}</a>».
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
Объединяет все этапы, выполняемые в рабочем процессе <code>check-bats-version</code>. Каждый элемент, вложенный в этот раздел, является отдельным действием или скриптом оболочки.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
Ключевое слово <code>uses</code> указывает, что этот этап будет выполнять <code>v3</code> действия <code>actions/checkout</code>. Это действие, которое извлекает репозиторий в средство выполнения, позволяя выполнять скрипты или другие действия в коде (например, средства сборки и тестирования). Действие извлечения следует использовать каждый раз, когда рабочий процесс будет выполняться в коде репозитория.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
Этот этап использует действие <code>{% data reusables.actions.action-setup-node %}</code> для установки указанной версии Node.js (в этом примере используется версия 14). В этом случае команды <code>node</code> и <code>npm</code> помещаются в <code>PATH</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
Ключевое слово <code>run</code> указывает заданию выполнить команду в средстве выполнения. В этом случае используется <code>npm</code> для установки пакета тестирования ПО <code>bats</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
Наконец, выполняется команда <code>bats</code> с параметром, которая выводит версию программного обеспечения.
</td>
</tr>
</table>

### Визуализация файла рабочего процесса

На этой схеме показан только что созданный файл рабочего процесса и порядок организации компонентов {% data variables.product.prodname_actions %} в иерархии. Каждый этап выполняет одно действие или скрипт оболочки. Этапы 1 и 2 выполняют действия, а этапы 3 и 4 выполняют скрипты оболочки. Дополнительные предварительно созданные действия для рабочих процессов см. в статье "[Поиск и настройка действий](/actions/learn-github-actions/finding-and-customizing-actions)".

![Обзор рабочего процесса](/assets/images/help/images/overview-actions-event.png)

## Просмотр действия для выполнения рабочего процесса

При активации рабочего процесса создается _запуск рабочего процесса_, который выполняет рабочий процесс. После запуска рабочего процесса можно увидеть граф визуализации хода выполнения и просмотреть действие на каждом этапе в {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. Под именем своего репозитория щелкните **Действия**.

   ![Переход к репозиторию](/assets/images/help/images/learn-github-actions-repository.png)
1. На левой боковой панели щелкните нужный рабочий процесс.

   ![Снимок экрана: результаты рабочего процесса](/assets/images/help/images/learn-github-actions-workflow.png)
1. В разделе "Выполнения рабочего процесса" выберите имя выполнения, которое требуется просмотреть.

   ![Снимок экрана: выполнения рабочего процесса](/assets/images/help/images/learn-github-actions-run.png)
1. В разделе **Задания** или на графе визуализации выберите задание, которое требуется просмотреть.

   ![Выбор задания](/assets/images/help/images/overview-actions-result-navigate.png)
1. Просмотрите результаты каждого шага.

   ![Снимок экрана: сведения о выполнении рабочего процесса](/assets/images/help/images/overview-actions-result-updated-2.png)
