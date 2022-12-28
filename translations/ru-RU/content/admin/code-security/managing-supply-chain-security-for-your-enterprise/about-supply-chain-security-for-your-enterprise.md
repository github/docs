---
title: Сведения о безопасности цепочки поставок для вашего предприятия
intro: 'Вы можете включить функции, которые помогают разработчикам понять и обновить зависимости, используемые их кодом.'
shortTitle: About supply chain security
permissions: ''
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: edfa8c2abecfa4eb7dc797d1dac3a06827fff5d7
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135698'
---
Вы можете разрешить пользователям определять зависимости своих проектов с помощью {% ifversion ghes %}включив{% elsif ghae %}с помощью{% endif %} графа зависимостей для {% data variables.location.product_location %}. Дополнительные сведения см. в разделе {% ifversion ghes %}[Включение графа зависимостей для предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[Сведения о графе зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}.

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

Вы также можете разрешить пользователям {% data variables.location.product_location %} находить и устранять уязвимости в зависимостях кода, включив {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} и {% data variables.product.prodname_dependabot_updates %}{% endif %}. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_dependabot %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

После включения {% data variables.product.prodname_dependabot_alerts %} можно просмотреть данные об уязвимостях из {% data variables.product.prodname_advisory_database %} в {% data variables.location.product_location %} и вручную синхронизировать данные. Дополнительные сведения см. в разделе [Просмотр данных об уязвимостях для предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise).
