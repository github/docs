---
ms.openlocfilehash: 718f58c2013f7deda31fd2a300a5a2b3f7e4b5ec
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120935"
---
При объединении групп и меток средство выполнения должно соответствовать обоим требованиям, чтобы иметь право на выполнение задания.

В этом примере группа средств выполнения с именем `ubuntu-runners` заполняется 16-ядерными средствами выполнения Ubuntu, которым также назначена метка `ubuntu-20.04-16core`. Ключ `runs-on` объединяет `group` и `labels` , чтобы задание перенаправлялось в любое доступное средство выполнения в группе, которая также имеет соответствующую метку:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      group: ubuntu-runners
      labels: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```
