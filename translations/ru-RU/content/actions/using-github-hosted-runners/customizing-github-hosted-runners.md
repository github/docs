---
title: 'Настройка средств выполнения тестов, размещенных в GitHub'
intro: 'Дополнительное программное обеспечение можно установить в рамках рабочего процесса в средствах выполнения тестов, размещенных в GitHub.'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
shortTitle: Customize runners
ms.openlocfilehash: d6793216b099fe3dcec44572da0b3d65cbb13fd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121088'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

Если вам требуются дополнительные программные пакеты для средств выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}, можно создать задание, которое устанавливает пакеты как часть вашего рабочего процесса. 

Чтобы узнать, какие пакеты уже установлены по умолчанию, см. раздел [Предустановленное программное обеспечение](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software).

В этом руководстве показано, как создать задание, которое устанавливает дополнительное программное обеспечение в средстве выполнения тестов, размещенном в {% data variables.product.prodname_dotcom %}.

## Установка программного обеспечения в средствах выполнения тестов Ubuntu

В следующем примере показано, как установить пакет `apt` как часть задания.

```yaml
name: Build on Ubuntu
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install jq tool
        run: |
          sudo apt-get update
          sudo apt-get install jq
```

{% note %}

**Примечание**. Всегда запускайте `sudo apt-get update` перед установкой пакета. Если индекс `apt` устарел, эта команда получает и повторно индексирует все доступные пакеты, что помогает предотвратить сбои при установке пакетов. 

{% endnote %}

## Установка программного обеспечения в средствах выполнения тестов macOS

В следующем примере показано, как установить пакеты и бочки Brew как часть задания.

```yaml
name: Build on macOS
on: push

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install GitHub CLI
        run: |
          brew update
          brew install gh
      - name: Install Microsoft Edge
        run: |
          brew update
          brew install --cask microsoft-edge
```

## Установка программного обеспечения в средствах выполнения тестов Windows

В следующем примере показано, как использовать [Chocolatey](https://community.chocolatey.org/packages) для установки интерфейса командной строки {% data variables.product.prodname_dotcom %} как части задания.

{% raw %}
```yaml
name: Build on Windows
on: push
jobs:
  build:
    runs-on: windows-latest
    steps:
      - run: choco install gh
      - run: gh version
```
{% endraw %}
