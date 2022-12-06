---
title: Настройка веб-перехватчиков для событий в спонсируемой учетной записи
intro: 'Вы можете настроить веб-перехватчики, чтобы получать оповещения о новых спонсорских предложениях или об изменениях спонсорами существующих спонсорских предложений.'
redirect_from:
  - /github/supporting-the-open-source-community-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Webhooks
  - Events
  - Open Source
shortTitle: Webhooks for events
ms.openlocfilehash: 2ac78162ae29c10861c7bf3bad8c18b9e0a56ccf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145118832'
---
## Сведения о настройке веб-перехватчиков для событий в спонсируемой учетной записи

Чтобы отслеживать изменения спонсорства, например отмену в конце периода оплаты, можно создать веб-перехватчики для спонсируемой учетной записи пользователя или организации. При настройке веб-перехватчика для спонсируемой учетной записи вы будете получать обновления при создании, редактировании или удалении спонсорства. Дополнительные сведения см. в разделе [`sponsorship`Событие веб-перехватчика](/webhooks/event-payloads/#sponsorship).

## Управление веб-перехватчиками для событий в спонсируемой учетной записи

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-webhooks-tab %} {% data reusables.sponsors.add-webhook %} {% data reusables.sponsors.add-payload-url %} {% data reusables.sponsors.webhook-content-formatting %} {% data reusables.sponsors.webhook-secret-token %} {% data reusables.sponsors.add-active-triggers %} {% data reusables.sponsors.confirm-add-webhook %} {% data reusables.sponsors.manage-existing-webhooks %}
