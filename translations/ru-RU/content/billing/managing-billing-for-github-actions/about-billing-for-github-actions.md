---
title: Сведения о выставлении счетов за GitHub Actions
intro: 'Если вы хотите использовать {% data variables.product.prodname_actions %} за пределами хранилища или времени в минутах, включенном в вашу учетную запись, вам будет выставлен счет за дополнительное использование.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
ms.openlocfilehash: fcc8f84b8a11b214ca66e8a3851a1afc9df6213a
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191889'
---
## Сведения о выставлении счетов за {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %} Дополнительные сведения см. в разделе [Сведения о предельных суммах расходов](#about-spending-limits).

{% ifversion ghec %} Если вы приобрели {% data variables.product.prodname_enterprise %} в рамках Соглашения Enterprise Майкрософт, то вы можете подключить свой идентификатор подписки Azure к корпоративной учетной записи, чтобы включить и оплатить использование {% data variables.product.prodname_actions %} свыше объемов, включенных в вашу учетную запись. Дополнительные сведения см. в разделе [Подключение подписки Azure к организации](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

Минуты сбрасываются каждый месяц, а использование места в хранилище — нет.

### Включенный объем хранилища и минуты

{% ifversion actions-hosted-runners %} {% note %}

**Примечание.** Минуты назначения нельзя использовать для средств выполнения Windows и Ubuntu более чем с 2 ядрами. За эти средства всегда взимается плата, в том числе в общедоступных репозиториях. Дополнительные сведения см. в разделе [Поминутные тарифы для средств выполнения](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates).

{% endnote %} {% endif %}

|Продукт | Память | Минуты (в месяц)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 МБ | 2 000 |
| {% data variables.product.prodname_pro %} | 1 ГБ | 3000 |
| {% data variables.product.prodname_free_team %} для организаций | 500 МБ | 2 000 |
| {% data variables.product.prodname_team %} | 2 ГБ | 3000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 ГБ | 50 000 |

Задания в средствах выполнения на базе Windows и macOS в {% data variables.product.prodname_dotcom %} потребляют минуты в 2 и 10 раз быстрее, чем задания в средствах выполнения Linux. Например, при работе в течение 1000 минут в среде Windows расходуется 2000 минут, включенных в учетную запись. При работе в течение 1000 минут в среде macOS расходуется 10 000 минут, включенных в учетную запись.

### Коэффициенты потребления минут

| Операционная система | Коэффициент потребления минут |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

В объем хранилища, используемый репозиторием, включается общий объем хранилища для артефактов {% data variables.product.prodname_actions %} и {% data variables.product.prodname_registry %}. Стоимость хранилища вычисляется по общему объему, используемому всеми репозиториями вашей учетной записи. Дополнительные сведения о ценах на {% data variables.product.prodname_registry %} см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

 Если в учетной записи будет потрачено больше минут, чем установленные ограничения, а предельная сумма расходов имеет значение более 0 долл. США, вы будете оплачивать 0,008 долл. США за 1 ГБ хранилища в день и поминутное потребление с учетом той операционной системы, в которой работает размещенное на {% data variables.product.prodname_dotcom %} средство выполнения. {% data variables.product.prodname_dotcom %} округляет минуты и частичные минуты, которые каждое задание использует до ближайшей целой минуты.

{% note %}

**Примечание**. Коэффициенты потребления минут не применяются к поминутным тарифам, указанным ниже.

{% endnote %}

### Поминутные тарифы

{% data reusables.billing.billing-standard-runners %} {%- ifversion actions-hosted-runners %} {% data reusables.billing.billing-hosted-runners %} {%- endif %}

- Количество заданий, которые могут выполняться параллельно во всех репозиториях в учетной записи пользователя или организации, зависит от плана GitHub. Дополнительные сведения см. в разделе [Ограничения и выставление счетов за использование](/actions/reference/usage-limits-billing-and-administration) для размещенных на {% data variables.product.prodname_dotcom %} средств выполнения и в разделе [Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits) для локальных средств выполнения.
- {% data reusables.user-settings.context_switcher %} {% ifversion actions-hosted-runners %} 
- Для {% data variables.actions.hosted_runner %} отсутствует дополнительная плата за конфигурации, которые назначают общедоступные статические IP-адреса для {% data variables.actions.hosted_runner %}. Дополнительные сведения о {% data variables.actions.hosted_runner %} см. в разделе [Использование {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners).
- Минуты назначения нельзя использовать для {% data variables.actions.hosted_runner %}.
- {% data variables.actions.hosted_runner %} не являются бесплатными для общедоступных репозиториев.
{% endif %}

## Вычисление минут и расходов на хранение

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

В конце месяца {% data variables.product.prodname_dotcom %} вычисляет стоимость использованных минут и емкости хранилища для учетной записи.

### Пример вычисления стоимости минут

Например, если в вашей организации используется {% data variables.product.prodname_team %} и разрешены неограниченные расходы, при использовании 5000 минут общая стоимость емкости хранилища и использованных минут может составить 56 долл. США в зависимости от операционных систем, в которых выполняются задания.

- 5000 минут (3000 Linux и 2000 Windows) = 56 долл. США (24 долл. США + 32 долл. США).
  - 3000 минут Linux по 0,008 долл. США за минуту = 24 долл. США.
  - 2000 минут Windows по 0,016 долл. США за минуту = 32 долл. США.

{% data variables.product.prodname_dotcom %} вычисляет потребление хранилища за каждый месяц, суммируя почасовое потребление в течение этого месяца.

### Пример вычисления затрат на хранилище

Например, если в марте вы в течение 10 дней использовали 3 ГБ хранилища, а в течение остальных 21 дня — 12 ГБ, итоговый объем будет вычисляться так:

- 3 ГБ x 10 дней x (24 часа в день) = 720 ГБ-часов
- 12 ГБ x 21 день x (24 часа в день) = 6,048 ГБ-часов
- 720 ГБ-часов + 6,048 ГБ-часов = 6,768 ГБ-часов
- 6,768 ГБ-часов / (744 часа в месяц) = 9,0967 ГБ-месяцев

В конце месяца {% data variables.product.prodname_dotcom %} округляет размер хранилища до ближайшего МБ. Таким образом, за март будет зарегистрировано использование хранилища в объеме 9,097 ГБ.

Данные об использовании {% data variables.product.prodname_actions %} включают существующую дату выставления счетов учетной записи, метод оплаты и квитанцию. {% data reusables.dotcom_billing.view-all-subscriptions %}

## Сведения о предельных суммах расходов

{% data reusables.actions.actions-spending-limit-detailed %}

Сведения об изменении предельной суммы расходов и управлении ею см. в разделе [Управление предельной суммой расходов для {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions).

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
