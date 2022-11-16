---
title: Экспорт изменений в ветвь
intro: 'В этой статье приводятся инструкции по экспорту в ветвь изменений, внесенных в codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 2a7dee4725af31f3983e753b4202f94be1742556
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159909'
---
## Экспорт изменений в ветвь

При использовании {% data variables.product.prodname_github_codespaces %} может потребоваться экспортировать изменения в ветвь, на запуская среду codespace. Это может быть удобно, если вы достигли [предельной суммы расходов](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) или столкнулись с общей проблемой, связанной с доступом к codespace.

Если codespace не опубликовано (созданное на основе шаблона и не связанное с репозиторием в {% data variables.product.product_name %}), вы не сможете экспортировать изменения в ветвь, но вы можете опубликовать codespace в новом репозитории без запуска codespace. Дополнительные сведения см. в разделе [Создание codespace на основе шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-githubcom).

Чтобы экспортировать изменения в ветвь, выполните следующее:

{% data reusables.codespaces.your-codespaces-procedure-step %} Или для отдельного репозитория щелкните меню **{% octicon "code" aria-label="The code icon" %} Код** .
1. Щелкните многоточие ( **...** ) справа от среды codespace, откуда нужно выполнить экспорт.
2. Выберите **{% octicon "git-branch" aria-label="The git branch icon" %} Export changes to branch** (Экспорт изменений в ветвь).

  ![Экспорт изменений в ветвь](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. Во всплывающем окне слева выберите **Создать ветвь**.
