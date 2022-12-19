---
title: Требования к описанию приложения
intro: 'Приложения в {% data variables.product.prodname_marketplace %} должны соответствовать требованиям, приведенным на этой странице, прежде чем можно будет опубликовать список.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /developers/github-marketplace/requirements-for-listing-an-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Listing requirements
ms.openlocfilehash: 3054055d65453330965defb15252684882ca79fa
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098599'
---
<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

Требования к описанию приложения в {% data variables.product.prodname_marketplace %} зависят от того, является приложение, которое вы предлагаете, платным или нет.

## Требования ко всем описаниям {% data variables.product.prodname_marketplace %}

Все описания в {% data variables.product.prodname_marketplace %} должны быть для средств, предоставляющих значение сообществу {% data variables.product.product_name %}. При отправке описания для публикации необходимо прочитать и принять условия [соглашения разработчика {% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement).

### Требования к пользовательскому интерфейсу для всех приложений

Все описания должны соответствовать следующим требованиям, независимо от того, предназначены ли они для бесплатного или платного приложения.

- В описании запрещено активное отговаривание пользователей от {% data variables.product.product_name %}.
- Описания должны содержать допустимые контактные данные для издателя.
- В описаниях должно содержаться соответствующее описание приложения.
- В описаниях необходимо указать тарифный план.
- Приложения должны иметь ценность для клиентов и интегрироваться с платформой, в некотором смысле за пределами проверки подлинности.
- Приложения должны быть доступны для всех в {% data variables.product.prodname_marketplace %} и не могут предоставляться в бета-версии или быть доступными только по приглашению.
- Приложения должны иметь события веб-перехватчика, настроенные для уведомления издателя о любых изменениях плана или отменах с помощью API {% data variables.product.prodname_marketplace %}. Дополнительные сведения см. в статье [Использование API {% data variables.product.prodname_marketplace %} в приложении](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

Дополнительные сведения об обеспечении качественного взаимодействия с клиентами см. в статье [Рекомендации по работе с клиентами для приложений](/developers/github-marketplace/customer-experience-best-practices-for-apps).

### Требования к торговой марке и описанию для всех приложений

- Приложения, использующие логотипы GitHub, должны соответствовать рекомендациям {% data variables.product.company_short %}. Дополнительные сведения см. в разделе [Логотипы и потребление {% data variables.product.company_short %}](https://github.com/logos).
- Приложения должны иметь логотип, карточку компонента и снимки экрана, соответствующие рекомендациям, представленным в статье [Написание описаний {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/).
- Описания должны быть хорошо написаны и не должны содержать грамматических ошибок. Инструкции по написанию описания см. в статье [Написание описаний {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/).

Для защиты клиентов рекомендуется также следовать рекомендациям по обеспечению безопасности. Дополнительные сведения см. в статье [Рекомендации по обеспечению безопасности для приложений](/developers/github-marketplace/security-best-practices-for-apps).

## Рекомендации для бесплатных приложений

{% data reusables.marketplace.free-apps-encouraged %} 

## Требования к платным приложениям

Чтобы опубликовать тарифный план с оплатой для приложения в {% data variables.product.prodname_marketplace %}, ваше приложение должно принадлежать организации, которая является проверенным издателем. Дополнительные сведения о процессе проверки или передаче права владения приложением см. в статье [Применение проверки издателя для организации](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization).

Если приложение уже опубликовано и вы являетесь проверенным издателем, можно опубликовать новый тарифный план с оплатой в редакторе тарифных планов. Дополнительные сведения см. в статье [Настройка тарифных планов для описания](/developers/github-marketplace/setting-pricing-plans-for-your-listing).

Чтобы опубликовать платное приложение (или приложение, предлагающее тарифный план с оплатой), необходимо также выполнить следующие требования:

- {% data variables.product.prodname_github_apps %} должно иметь не менее 100 установок.
- {% data variables.product.prodname_oauth_apps %} должно иметь не менее 200 установок.
- Все платные приложения должны обрабатывать события покупки {% data variables.product.prodname_marketplace %} для новых покупок, обновлений, переходов на использование более ранних версий, отмен и бесплатных пробных версий. Дополнительные сведения см. в разделе [Требования к выставлению счетов для платных приложений](#billing-requirements-for-paid-apps) ниже.

Когда вы будете готовы опубликовать приложение в {% data variables.product.prodname_marketplace %}, запросите проверку для описания приложения.

{% note %}

**Примечание.** {% data reusables.marketplace.app-transfer-to-org-for-verification %} Сведения о том, как перенести приложение в организацию, см. в статье [Отправка описания для публикации](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit).

{% endnote %}

## Требования к выставлению счетов для платных приложений

Вашему приложению не нужно обрабатывать платежи, но для управления новыми покупками, обновлениями, переходами на использование более ранних версий, отменами и бесплатными пробными версиями ему необходимо применять {% data variables.product.prodname_marketplace %}. Сведения об интеграции этих событий в приложение см. в статье [Использование API {% data variables.product.prodname_marketplace %} в приложении](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

С помощью API выставления счетов GitHub клиенты могут приобрести приложение, не выходя из GitHub, и оплатить службу с помощью метода оплаты, уже подключенного к своей учетной записи на {% данных variables.location.product_location %}.

- Приложения должны поддерживать как ежемесячное, так и ежегодное выставление счетов за покупки в платных подписках.
- В описаниях может предлагаться любое сочетание бесплатных тарифных планов и планов с оплатой. Бесплатные планы являются необязательными, но поощряются. Дополнительные сведения см. в статье [Настройка тарифного плана для описания {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/).
