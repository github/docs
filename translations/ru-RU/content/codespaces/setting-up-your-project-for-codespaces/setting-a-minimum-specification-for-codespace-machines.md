---
title: Настройка минимальной спецификации для компьютеров codespace
shortTitle: Set a minimum machine spec
intro: 'Вы можете сделать так, чтобы в {% data variables.product.prodname_github_codespaces %} для вашего репозитория не использовался тип компьютера, не имеющий достаточного объема ресурсов.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: b7eeaac84721ff1d9ceab663957b1615952b0623
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159168'
---
## Обзор

Каждое создаваемое пространство кода размещается на отдельной виртуальной машине. При создании codespace из репозитория обычно можно выбрать один из разных типов виртуальных машин. Каждый тип компьютера имеет разные ресурсы (ядра процессора, память, хранилище), и по умолчанию используется тип компьютера с наименьшими ресурсами. Дополнительные сведения см. в разделе [Изменение типа компьютера для кодового пространства](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types).

Если вашему проекту требуется определенный уровень вычислительной мощности, можно настроить {% data variables.product.prodname_github_codespaces %} так, чтобы пользователи могли использовать только типы компьютеров, удовлетворяющие этим требованиям, могли использоваться по умолчанию или при выборе пользователей. Это можно настроить в файле `devcontainer.json`.

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %}

{% note %}

**Важно!** Доступ к некоторым типам компьютеров может быть ограничен на уровне организации. Как правило, это делается для предотвращения того, что пользователи выберут компьютеры с завышенными ресурсами, за которые выставляются счета по более высокому тарифу. Если на репозиторий влияет политика уровня организации для типов компьютеров, убедитесь, что не задана минимальная спецификация, которая не оставляет доступных для выбора пользователей типов компьютеров. Дополнительные сведения см. в разделе [Ограничение доступа по типам компьютеров](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

{% endnote %}

## Настройка минимальной спецификации компьютера

{% data reusables.codespaces.edit-devcontainer-json %}
1. Измените `devcontainer.json` файл, добавив `hostRequirements` свойство на верхнем уровне файла во включаемом объекте JSON. Например:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   Можно указать любой или все параметры: `cpus`, `memory` и `storage`.
   
   Чтобы проверить спецификации типов компьютеров {% data variables.product.prodname_github_codespaces %}, доступных в настоящее время для репозитория, выполните инструкции по созданию codespace до этапа с выбором типов компьютеров. Дополнительные сведения см. в разделе [Создание пространства кода для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).
   
1. Сохраните файл и зафиксируйте изменения в требуемой ветви репозитория.

   Теперь при создании codespace для этой ветви репозитория и переходе к параметрам конфигурации создания можно выбрать только те типы компьютеров, которые соответствуют указанным ресурсам или превышают их.

   ![Диалоговое окно с ограниченным выбором типов компьютеров](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Дополнительные материалы

- [Основные сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
