---
title: Сведения о значках в Marketplace
intro: 'Сведения об индикаторах событий, которые могут отображаться для некоторых списков приложений и действий в {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 27f11aa4ae2693bcc336ecdf4cbfb68d8679d743
ms.sourcegitcommit: 74c60a4564bcc17e47b5a67941ac6d9fe13b6a5c
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186166'
---
## Для приложений GitHub

Некоторые приложения в {% data variables.product.prodname_marketplace %} имеют значок {% octicon "verified" aria-label="The verified badge" %} и подсказку "Подтвержденные домен и электронная почта издателя". Это означает, что приложение принадлежит организации, для которой:

- Проверено владение доменом, и организация имеет значок подтверждения в своем профиле.
- Подтвержден адрес электронной почты, чтобы служба поддержки {% data variables.product.prodname_dotcom %} могла связаться с организацией
- Требуется двухфакторная проверка подлинности в рамках организации. Дополнительные сведения см. в разделе [Настройка требования двухфакторной проверки подлинности в организации](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization).

![Значок Marketplace для приложений GitHub](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %} {% data variables.product.prodname_dotcom %} не анализирует приложения. Значок Marketplace {% octicon "verified" aria-label="The verified badge" %} только подтверждает, что издатель соответствует указанным выше требованиям.
{% endnote %}

Сведения о добавлении этого значка к своему приложению см. в разделе [Подача заявки на подтверждение издателя для вашей организации](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization).

Некоторые приложения в {% data variables.product.prodname_marketplace %} имеют значок {% octicon "verified" aria-label="The verified badge" %} и подсказку "Приложение удовлетворяет требованиям к регистрации", а не "Подтвержденные домен и электронная почта издателя". Это означает, что приложение соответствует требованиям к описанию, описанным в разделе [Требования для регистрации приложения](/developers/github-marketplace/requirements-for-listing-an-app), но издатель не был проверен, как описано в разделе [Подача заявки на подтверждение издателя для вашей организации](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization). Приложения с таким значком не могут изменить свой тарифный план, пока издатель не подаст заявку и не пройдет подтверждение.

![Значок Marketplace для приложений GitHub](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

Дополнительные сведения о требованиях к регистрации приложения в {% data variables.product.prodname_marketplace %} см. в разделе [Требования для регистрации приложения в {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/).

Сведения о поиске приложений см. в разделе [Поиск в {% data variables.product.prodname_marketplace %}](/search-github/searching-on-github/searching-github-marketplace).

## Для GitHub Actions 

Действия с {% octicon "verified" aria-label="The verified badge" %} или verified creator badge указывают на то, что {% data variables.product.prodname_dotcom %} проверил создателя действия в качестве партнерской организации. Партнеры могут отправить запрос на получение эмблемы проверенного создателя по электронной почте <a href="mailto:partnerships@github.com">partnerships@github.com</a> .

![Значок подтвержденного создателя на GitHub Actions](/assets/images/marketplace/verified-creator-badge-for-actions.png)

Сведения о том, как опубликовать действие GitHub в {% data variables.product.prodname_marketplace %}, см. в разделе [Публикация действий в GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace).
