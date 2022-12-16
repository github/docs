---
title: Просмотр сведений об использовании Codespaces
shortTitle: Viewing your usage
intro: Можно просмотреть минуты вычислений и хранилище, используемые {% data variables.product.prodname_codespaces %}.
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Billing
ms.openlocfilehash: 025b93aca321b381989a55389ff93fac3cef02c2
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062037"
---
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-organization"></a>Просмотр сведений об использовании {% data variables.product.prodname_codespaces %} в отделе

Владельцы отдела и менеджеры по выставлению счетов могут просматривать сведения об использовании {% data variables.product.prodname_codespaces %} в отделе. Для отделов под управлением корпоративной учетной записи владельцы отдела могут просматривать сведения об использовании {% data variables.product.prodname_codespaces %} на странице выставления счетов отдела, а администраторы организации могут просматривать сведения об использовании для всей организации.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.codespaces-minutes %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-enterprise-account"></a>Просмотр сведений об использовании {% data variables.product.prodname_codespaces %} для корпоративной учетной записи

Владельцы организации и менеджеры по выставлению счетов могут просматривать сведения об использовании {% data variables.product.prodname_codespaces %} для корпоративной учетной записи.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. В разделе {% data variables.product.prodname_codespaces %} просмотрите сведения об использовании каждого отдела в корпоративной учетной записи.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
