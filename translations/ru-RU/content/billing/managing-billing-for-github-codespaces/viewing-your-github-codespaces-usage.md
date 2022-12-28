---
title: Просмотр сведений о потреблении GitHub Codespaces
shortTitle: Viewing your usage
intro: 'Вы можете просмотреть часы вычислений и хранилище, используемые {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: 67e29ee71b1881ee2ae6e9ca872fd7969f86afca
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158744'
---
## Просмотр использования {% data variables.product.prodname_github_codespaces %} для личной учетной записи

Вы можете увидеть, сколько потребления в вашей личной учетной записи вы использовали до сих пор в текущем ежемесячном цикле выставления счетов. Если вы настроили метод оплаты, установили предельную сумму расходов и использовали все включенные данные о потреблении, вы также можете проверить счет за текущий месяц.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. В разделе "{% data variables.product.prodname_codespaces %}" можно увидеть, сколько часов использования вычислительных ресурсов {% data variables.product.prodname_github_codespaces %} и объем хранилища в ГБ-месяцев использовался в текущем месяце выставления счетов.

   ![Снимок экрана: начальное представление личного использования](/assets/images/help/codespaces/view-personal-usage-collapsed.png)

   Сведения о "основных часах" и "гб-месяцах" см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/enterprise-cloud@latest/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

1. При необходимости щелкните **Часы использования** и **Хранилище** , чтобы просмотреть дополнительные сведения.

   ![Снимок экрана: расширенное представление личного использования](/assets/images/help/codespaces/view-personal-usage-expanded.png)

   В столбце **Включено** показано, сколько часов использования вычислительных ресурсов (ГБ-месяцев) бесплатно в вашей учетной записи вы использовали в этом месяце. В **столбце Платная** показано, сколько часов использования ядер выставлено счета или в гб месяцев хранилища, которое вы использовали. Цифры обновляются раз в час.

   На приведенном выше снимке экрана используется вся квота включенного хранилища за месяц. При использовании всех включенных вычислительных ресурсов или хранилища (в зависимости от того, что достигается первым), необходимо настроить метод оплаты и предельную сумму расходов, чтобы продолжать использовать {% data variables.product.prodname_github_codespaces %} в течение текущего месяца выставления счетов. Дополнительные сведения см. в разделах [Добавление или изменение метода оплаты](/enterprise-cloud@latest/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method) и [Управление лимитами расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-personal-account).

{% data reusables.codespaces.usage-report-download %}

## Просмотр использования {% data variables.product.prodname_github_codespaces %} для учетной записи организации

Владельцы организации и менеджеры по выставлению счетов могут просматривать сведения об использовании {% data variables.product.prodname_github_codespaces %} для организации.

{% data reusables.organizations.billing-settings %}
1. В разделе "{% data variables.product.prodname_codespaces %}" можно просмотреть сведения о часах вычислений и хранилище, уже использованных в этом месяце.

   ![Снимок экрана: сведения об использовании вычислительных ресурсов и хранилище](/assets/images/help/billing/codespaces-compute-storage.png)

   Вы также можете просмотреть и обновить текущую предельную сумму расходов. Дополнительные сведения см. в разделе [Управление предельными суммами расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).

   {% note %}

   **Примечания** 
   * Показанные здесь затраты представляют собой совокупные затраты за текущий ежемесячный расчетный период. Затраты по тарифам для {% data variables.product.prodname_github_codespaces %}, показанные на этой странице, сбрасываются до нуля в начале каждого ежемесячного расчетного периода. Непогашенные расходы за предыдущие месяцы не отображаются.
   * Цифры на этой странице обновляются каждый час.

   {% endnote %}

{% data reusables.codespaces.usage-report-download %}

{% ifversion ghec %}
## Просмотр сведений об использовании {% data variables.product.prodname_codespaces %} для корпоративной учетной записи

Владельцы предприятия и менеджеры по выставлению счетов могут просматривать сведения об использовании {% data variables.product.prodname_github_codespaces %} для корпоративной учетной записи.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. В разделе "{% data variables.product.prodname_codespaces %} ежемесячное использование" просмотрите сведения об использовании каждой организации в своей корпоративной учетной записи.
{% data reusables.codespaces.usage-report-download %} {% endif %}

## Дополнительные материалы

- [Перечисление сред codespace в организации](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
