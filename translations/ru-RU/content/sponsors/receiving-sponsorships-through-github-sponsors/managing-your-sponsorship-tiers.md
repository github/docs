---
title: Управление уровнями спонсорского предложения
intro: 'Вы можете добавить новый уровень спонсорской поддержки, изменить или прекратить использовать существующий уровень.'
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
shortTitle: Manage payment tiers
ms.openlocfilehash: e41218f175063a20964ce690f3328af91291aaf6
ms.sourcegitcommit: 474603237fcc20c82947e5c8c68624749c445b21
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/03/2022
ms.locfileid: '148008750'
---
## Сведения об уровнях спонсорского предложения

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## Добавление уровня

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. Если вы впервые настраиваете уровни, рекомендуем ознакомиться с примерами уровней, чтобы узнать, как настроили открытый код другие участники {% data variables.product.prodname_sponsors %}. Решите, хотите ли вы начать с некоторых предлагаемых черновых уровней (их можно настроить в редакторе уровней).
   - Чтобы использовать предлагаемый уровень, выберите награды, которые вы хотите включить в черновой уровень/уровни. Затем нажмите **Перейти к редактору уровней**.
   - Чтобы создать уровни без использования черновых вариантов, щелкните **Пропустить этот шаг**.
     
     ![Снимок экрана: параметр "Пропустить этот шаг" и кнопка "Перейти к редактору уровня"](/assets/images/help/sponsors/tier-editor-button.png)

1. При необходимости в текстовых полях в поле "Пользовательские суммы" введите рекомендуемую или минимальную сумму спонсорства. Минимальная сумма применяется как к повторяющимся, так и к однократным спонсорствам.

   ![Снимок экрана: поля настраиваемых объемов](/assets/images/help/sponsors/custom-amounts.png)

1. В случае необходимости изменить черновой уровень найдите этот уровень и нажмите **Изменить**.

   ![Снимок экрана: кнопка "Изменить" рядом с уровнем черновика](/assets/images/help/sponsors/draft-tier-edit.png)

{% данных reusables.sponsors.click-add-tier %} {% данных reusables.sponsors.tier-price-description %} {% данных reusables.sponsors.add-welcome-message %} {% данных reusables.sponsors.save-tier-draft %} {% данных reusables.sponsors.review-and-publish-tier %}

## Изменение уровня или прекращение его использования

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %} {% note %}

  **Примечание.** Прокрутите вниз, чтобы просмотреть варианты описания уровней.

  {% endnote %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.tier-update %} {% data reusables.sponsors.retire-tier %}

## Добавление репозитория на уровень спонсорского предложения

{% data reusables.sponsors.sponsors-only-repos %}

### Сведения о добавлении репозитория на уровень спонсорского предложения

Чтобы добавить репозиторий на уровень, убедитесь, что репозиторий является частным и принадлежит организации, а у вас для него есть доступ администратора.

При добавлении репозитория на уровень {% data variables.product.company_short %} автоматически отправляет приглашения новым спонсорам и удаляет доступ при отмене спонсорского предложения. 

В частные репозитории, связанные с уровнем спонсорского предложения, можно пригласить только личные учетные записи, но не организации.

Вы также можете вручную добавлять участников совместной работы в репозитории или удалять их, а {% data variables.product.company_short %} не будет их переопределять в синхронизации. 

### Сведения о передаче для репозиториев, добавленных на уровни спонсорских предложений

Передача репозитория, добавленного на уровень спонсорского предложения, может повлиять на спонсоров, имеющих доступ к репозиторию через этот уровень.

- Если профиль со спонсорским предложением предназначен для организации, а репозиторий передается в другую организацию, текущие спонсоры будут переданы, но новые спонсоры не будут добавлены. Новый владелец репозитория может удалить существующих спонсоров.
- Если профиль со спонсорским предложением предназначен для личной учетной записи, репозиторий передается в организацию, а личная учетная запись предоставляет доступ администратора к новому репозиторию, существующие спонсоры будут переданы, а новые спонсоры будут по-прежнему добавляться в репозиторий.
- Если репозиторий передается в личную учетную запись, будут удалены все спонсоры, а новые не будут добавлены в репозиторий.

### Добавление репозитория на уровень спонсорского предложения

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %}
1. Выберите **Предоставить спонсорам доступ к частному репозиторию**.

   ![Снимок экрана, на котором изображен флажок для предоставления спонсорам доступа к частному репозиторию](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. Выберите раскрывающееся меню и нажмите репозиторий, который нужно добавить.

   ![Снимок экрана, где изображено раскрывающееся меню для выбора репозитория, к которому нужно предоставить доступ спонсорам](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}
