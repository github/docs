---
title: Сведения о GitHub Marketplace
intro: 'Узнайте о {% data variables.product.prodname_marketplace %}, где можно предоставлять общий доступ к приложениям и действиям для всех пользователей {% data variables.product.product_name %}.'
redirect_from:
  - /apps/marketplace/getting-started
  - /marketplace/getting-started
  - /developers/github-marketplace/about-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 5a722d35fb74607b9200a1fe30d804df44330cea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089730'
---
[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) позволяет находить разработчиков, которые хотят расширить и улучшить свои рабочие процессы {% data variables.product.prodname_dotcom %}. Вы можете предлагать разработчикам бесплатные и платные средства в {% data variables.product.prodname_marketplace %}. В {% data variables.product.prodname_marketplace %} разработчикам предлагаются два типа средств: {% data variables.product.prodname_actions %} и приложения. Для добавления каждого средства в {% data variables.product.prodname_marketplace %} требуется особая процедура.

## Действия GitHub

{% data reusables.actions.actions-not-verified %}

Сведения о публикации {% data variables.product.prodname_actions %} в {% data variables.product.prodname_marketplace %} см. в разделе [Публикация действий в GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace).

## Приложения

Любой пользователь может бесплатно делиться своими приложениями с другими людьми на {% data variables.product.prodname_marketplace %}, но продавать можно только приложения, принадлежащие организациям. 

Для публикации платных планов приложения и получения эмблемы Marketplace необходимо пройти процедуру подтверждения издателя. Дополнительные сведения см. в разделе [Подача заявки на проверку издателя для организации](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) или [Требования к описанию приложения](/developers/github-marketplace/requirements-for-listing-an-app).

Если организация соответствует требованиям, ее сотрудник с разрешениями владельца может публиковать платные планы для любых своих приложений. Каждое приложение с платным планом также проходит процедуру подключения для обеспечения возможности оплаты.

Для публикации приложений с бесплатными планами необходимо соответствовать общим требованиям к публикации приложений. Дополнительные сведения см. в разделе [Требования ко всем публикациям в GitHub Marketplace](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings).

### Нет опыта работы с приложениями?

Если вы хотите создать приложение для {% data variables.product.prodname_marketplace %}, но не знакомы с {% data variables.product.prodname_github_apps %} или {% data variables.product.prodname_oauth_apps %}, см. раздел [Создание {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps) или [Создание {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps).

### {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}

{% data reusables.marketplace.github_apps_preferred %}, но в {% data variables.product.prodname_marketplace %} можно размещать как приложения OAuth, так и {% data variables.product.prodname_github_apps %}. Дополнительные сведения см. в разделах [Различия между {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/) и [Перенос {% data variables.product.prodname_oauth_apps %} в {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/).

## Обзор публикации приложения в {% data variables.product.prodname_marketplace %}

Завершив создание приложения, вы можете поделиться им с другими пользователями, опубликовав его в {% data variables.product.prodname_marketplace %}. В целом процесс выглядит так:

1. Внимательно проверьте приложение: оно должно правильно работать в других репозиториях и соответствовать рекомендациям. Дополнительные сведения см. в разделах [Рекомендации по обеспечению безопасности приложений](/developers/github-marketplace/security-best-practices-for-apps) и [Требования к описанию приложения](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience).

1. Добавьте в приложение события веб-перехватчика для отслеживания пользовательских запросов на выставление счетов. Дополнительные сведения об API {% data variables.product.prodname_marketplace %}, событиях веб-перехватчиков и запросах на выставление счетов см. в разделе [Использование API {% data variables.product.prodname_marketplace %} в приложении](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

1. Создайте черновик профиля в {% data variables.product.prodname_marketplace %}. Дополнительные сведения см. в разделе [Создание черновика размещения для приложения](/developers/github-marketplace/drafting-a-listing-for-your-app).

1. Добавьте ценовой план. Дополнительные сведения см. в статье [Настройка тарифных планов для описания](/developers/github-marketplace/setting-pricing-plans-for-your-listing).

1. Прочтите и примите условия [Соглашения {% data variables.product.prodname_marketplace %} для разработчиков](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement).

1. Отправьте профиль на публикацию в {% data variables.product.prodname_marketplace %}. Дополнительные сведения см. в разделе [Отправка описания для публикации](/developers/github-marketplace/submitting-your-listing-for-publication).

## Просмотр показателей приложения

Вы можете просматривать метрики и транзакции для профиля. Дополнительные сведения см. в разделе:

- [Просмотр метрики для вашего вывода списка](/developers/github-marketplace/viewing-metrics-for-your-listing)
- [Просмотр транзакций для профиля](/developers/github-marketplace/viewing-transactions-for-your-listing)

## Обращение в службу поддержки 

Если у вас есть вопросы о {% data variables.product.prodname_marketplace %}, обращайтесь непосредственно в {% data variables.contact.contact_support %}.
