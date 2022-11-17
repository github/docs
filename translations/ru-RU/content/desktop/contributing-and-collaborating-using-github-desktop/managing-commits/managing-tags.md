---
title: Управление метками
intro: 'Вы можете использовать {% data variables.product.prodname_desktop %} для создания, передачи и просмотра тегов.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-tags
versions:
  fpt: '*'
ms.openlocfilehash: 980e47f6e3300995f6312499b23768d6f0401f36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092302'
---
## Сведения о метках в {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} позволяет создавать аннотированные метки. Метки связаны с фиксациями, поэтому с их помощью можно помечать отдельные точки в журнале репозитория, включая номер версии для выпуска. Дополнительные сведения о метках выпуска см. в разделе [Сведения о выпусках](/github/administering-a-repository/about-releases).

{% data reusables.desktop.tags-push-with-commits %}

## Создание метки

{% data reusables.desktop.history-tab %} {% data reusables.desktop.create-tag %} {% data reusables.desktop.name-tag %} {% data reusables.desktop.confirm-tag %}

## Просмотр тегов

{% data reusables.desktop.history-tab %}
2. Щелкните фиксацию.
  {% note %}

  **Примечание**. В {% data variables.product.prodname_desktop %} отображается стрелка {% octicon "arrow-up" aria-label="The up arrow icon" %}, если метка не была отправлена в удаленный репозиторий.

  {% endnote %}

  ![Просмотр метки в журнале](/assets/images/help/desktop/viewing-tags-in-history.png)

3. Все метки, связанные с фиксацией, видны в метаданных этой фиксации.
![Просмотр метки в фиксации](/assets/images/help/desktop/viewing-tags-in-commit.png)

## Удаление меток

{% note %}

**Примечание**. Удалять можно только метки, связанные с фиксациями, которые еще не отправлены.

{% endnote %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.delete-tag %}

## Дополнительные материалы

- [Основы GIT — метки](https://git-scm.com/book/en/v2/Git-Basics-Tagging) в документации по GIT
