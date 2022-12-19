---
title: Возврат фиксации
intro: 'Вы можете отменить конкретную фиксацию, чтобы удалить изменения из ветви.'
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  fpt: '*'
ms.openlocfilehash: f6cf6f120beff99bdb1c8bfd7868bb157e68d5dd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092301'
---
При возврате к предыдущей фиксации возврат также является фиксацией. Исходная фиксация также остается в журнале репозитория.

{% tip %}

**Совет**. Несколько фиксаций рекомендуется возвращать в порядке от самых новых к самым старым. При возврате фиксаций в другом порядке могут возникнуть конфликты слияния.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![ Команда "Вернуть" над представлением различий](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![ Команда "Вернуть" над представлением различий](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
