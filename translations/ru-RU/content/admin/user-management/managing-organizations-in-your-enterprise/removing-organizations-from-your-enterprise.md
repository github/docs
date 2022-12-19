---
title: Удаление организаций из предприятия
intro: 'Если организация больше не должна быть частью предприятия, ее можно удалить.'
permissions: Enterprise owners can remove any organization from their enterprise.
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
shortTitle: Removing organizations
ms.openlocfilehash: 8645e8f6d424ee8a02ae5d414e9901173df460aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115136'
---
{% warning %}

**Предупреждение.** При удалении организации из предприятия:
- выставление счетов, управление удостоверениями, требования двухфакторной проверки подлинности и другие политики для организации больше не будут находиться под управлением вашего предприятия;
- уровень организации будет понижен до бесплатного плана;
- к организации будет применены наши стандартные условия обслуживания;
- все внутренние репозитории в организации будут преобразованы в частные репозитории.

{% endwarning %}

## Удаление организации из предприятия

{% data reusables.enterprise-accounts.access-enterprise %}
2. В разделе "Организации" в строке поиска начните вводить имя организации, пока оно не появится в результатах поиска.
![Снимок экрана: поле поиска для организаций](/assets/images/help/enterprises/organization-search.png)
3. Справа от имени организации выберите раскрывающееся меню {% octicon "gear" aria-label="The gear icon" %} и щелкните **Удалить организацию**.
![Снимок экрана: организация в результатах поиска](/assets/images/help/enterprises/remove-organization.png)
4. Прочтите предупреждения, а затем нажмите кнопку **Удалить организацию**.
![Снимок экрана: предупреждающее сообщение и кнопка для удаления организации](/assets/images/help/enterprises/remove-organization-warning.png)
