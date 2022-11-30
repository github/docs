---
title: Настройка тарифных планов для предложения
intro: 'При размещении приложения в списке в {% data variables.product.prodname_marketplace %} можно предоставить приложение в качестве бесплатной службы или продать его. Если вы планируете продать приложение, можно создать различные тарифные планы для разных уровней функций.'
redirect_from:
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/pricing-payments-and-free-trials/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/pricing-payments-and-free-trials/about-github-marketplace-pricing-plans
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-github-marketplace-listings/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /developers/github-marketplace/setting-pricing-plans-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Set listing pricing plans
ms.openlocfilehash: bc8d84a55c9597da051ab11752dd7e412761d5d7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089669'
---
## Сведения о настройке тарифных планов

{% data variables.product.prodname_marketplace %} предлагает несколько различных типов тарифных планов. Подробные сведения приведены в статье [Тарифные планы в {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps).

Чтобы предложить платный план для приложения, оно должно принадлежать организации, которая прошла процесс проверки издателя и выполнила определенные критерии. Дополнительные сведения можно найти в статье [Подача заявки на проверку издателя для организации](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) и [Требования для публикации приложения в {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/).

Если ваше приложение уже опубликовано с платным планом и вы являетесь проверенным издателем, вы можете опубликовать новый платный план на странице "Изменить тарифный план" в параметрах приложения в Marketplace. 

![Кнопка "Опубликовать этот план"](/assets/images/marketplace/publish-this-plan-button.png)

Если приложение уже опубликовано с платным планом, но вы не являетесь проверенным издателем, вы не можете опубликовать новый платный план, пока вы не станете проверенным издателем. Дополнительные сведения о том, как стать проверенным издателем, см. в статье [Подача заявки на проверку издателя для организации](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization).

## Сведения о сохранении тарифных планов

Вы можете сохранить тарифные планы в состоянии черновика или опубликованном состоянии. Если вы не отправили предложение в {% data variables.product.prodname_marketplace %} на утверждение, опубликованный план будет работать так же, как черновик плана, пока ваше предложение не будет утверждено и показано в {% data variables.product.prodname_marketplace %}. С помощью черновиков планов можно создавать и сохранять новые тарифные планы, не делая их доступными на странице предложения в {% data variables.product.prodname_marketplace %}. После публикации тарифного плана для опубликованного предложения он станет доступен клиентам для немедленной покупки. Вы можете опубликовать до 10 тарифных планов.

Рекомендации по выставлению счетов клиентам приведены в статье [Выставление счетов клиентам](/developers/github-marketplace/billing-customers).

## Создание тарифных планов

Чтобы создать тарифный план для предложения в {% data variables.product.prodname_marketplace %}, щелкните **Планы и цены** на левой боковой панели [страницы предложения в {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Дополнительные сведения можно найти в статье [Создание черновика предложения в {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/).

При нажатии кнопки **Создать черновик плана** вы увидите форму, которая позволяет настроить тарифный план. Чтобы создать тарифный план, необходимо настроить следующие поля:

- **Имя плана.**  Имя тарифного плана будет отображаться на целевой странице приложения в {% data variables.product.prodname_marketplace %}. Вы можете настроить имя тарифного плана в соответствии с ресурсами плана, размером компании, которая будет его использовать, или любым другим соображением.

- **Модели ценообразования.**  Существует три типа тарифных планов: бесплатный, фиксированный и за единицу. Все планы требуют обработки новых событий покупки и отмены из API marketplace. Кроме того, для платных планов:

  - Необходимо задать цену как для ежемесячных, так и ежегодных подписок в долларах США.
  - Ваше приложение должно обрабатывать события изменения плана.
  - Необходимо запросить проверку для публикации предложения с платным планом.
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  Подробные сведения приведены в статье [Тарифные планы для приложений в {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps) и [Использование API {% data variables.product.prodname_marketplace %} в приложении](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

- **Доступен для.**  Тарифные планы в {% data variables.product.prodname_marketplace %} могут применяться **только к личным учетным записям и учетным записям организаций**, **только к личным учетным записям** или **только к учетным записям организаций**. Например, если ваш тарифный план рассчитывается за единицу и предоставляет несколько рабочих мест, вы выберете **только учетные записи организаций**, потому что нет способа назначить рабочие места пользователям в организации из личной учетной записи.

- **Краткое описание.** Напишите краткую сводку по сведениям о тарифном плане. Описание может включать тип клиента, для которого предназначен план, или ресурсы, которые включает план.

- **Пункты.** Вы можете добавить список, включающий до четырех пунктов с дополнительными сведения о вашем плане ценообразования. В пунктах могут быть варианты использования приложения или более подробные сведения о ресурсах или функциях, включенных в план.

{% data reusables.marketplace.free-plan-note %}

## Изменение тарифного плана предложения в {% data variables.product.prodname_marketplace %}

Если тарифный план для вашего предложения в {% data variables.product.prodname_marketplace %} больше не нужен или если вам нужно изменить сведения о ценах, его можно удалить.

![Кнопка для удаления тарифного плана](/assets/images/marketplace/marketplace_remove_this_plan.png)

После публикации тарифного плана для приложения, которое уже размещено в {% data variables.product.prodname_marketplace %}, вносить изменения в план нельзя. Вместо этого необходимо удалить тарифный план и создать новый план. Клиенты, которые уже приобрели удаленный тарифный план, будут продолжать использовать его, пока не откажутся и не перейдут на новый тарифный план. Дополнительные сведения о тарифных планах можно найти в статье [Тарифные планы в {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/github-marketplace-pricing-plans/).

После удаления тарифного плана пользователи не смогут приобрести приложение с помощью этого плана. Существующие пользователи удаленного тарифного плана будут продолжать использовать его, пока не отменят подписку.

{% note %}

**Примечание.** {% data variables.product.product_name %} не может удалить пользователей из удаленного тарифного плана. Вы можете запустить кампанию, чтобы поощрить пользователей выполнить обновление или перейти с удаленного тарифного плана на новый.

{% endnote %}

Вы можете отключить бесплатные пробные версии GitHub Marketplace, не удаляя тарифный план, но тогда вы не сможете инициировать бесплатные пробные версии для этого плана в будущем. Если вы решили отключить бесплатные пробные версии для тарифного плана, пользователи, которые уже зарегистрировались, могут продолжить использовать бесплатную пробную версию до конца.

После удаления тарифного плана можно создать новый тарифный план с тем же именем, что и у удаленного плана. Например, если у вас есть тарифный план "Pro", но нужно изменить фиксированную цену, можно удалить тарифный план "Pro" и создать новый тарифный план "Pro" с обновленной ценой. Пользователи смогут сразу приобрести новый тарифный план.

Если вы не являетесь проверенным издателем, вы не можете изменить тарифный план для приложения. Дополнительные сведения о том, как стать проверенным издателем, см. в статье [Подача заявки на проверку издателя для организации](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization).
