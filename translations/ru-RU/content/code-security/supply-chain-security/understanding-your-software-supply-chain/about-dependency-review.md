---
title: Сведения о проверке зависимостей
intro: 'Проверка зависимостей позволяет перехватывать небезопасные зависимости до того, как они попадут в среду выполнения, и получать сведения о лицензиях, зависимых элементах и сроке существования зависимостей.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
ms.openlocfilehash: 36a80324e75f6ffbe96a2b46016d56561da931f0
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164117'
---
## Сведения о проверке зависимостей

{% data reusables.dependency-review.feature-overview %}  

Если запрос на вытягивание предназначен для ветви репозитория по умолчанию и содержит изменения манифестов пакета или файлов блокировки, вы можете отобразить проверку зависимостей, чтобы увидеть, что изменилось. Проверка зависимостей содержит сведения об изменениях косвенных зависимостей в файлах блокировки и сообщает, имеются ли известные уязвимости в каких-либо добавленных или обновленных зависимостях.

Иногда может потребоваться просто обновить версию одной зависимости в манифесте и создать запрос на вытягивание. Однако если обновленная версия этой прямой зависимости также имеет обновленные зависимости, запрос на вытягивание может иметь больше изменений, чем ожидалось. Проверка зависимостей для каждого файла манифеста и блокировки позволяет легко узнать, что изменилось, и содержат ли какие-либо из новых версий зависимостей известные уязвимости.

Просмотрев проверки зависимостей в запросе на вытягивание и изменив все зависимости, помеченные как уязвимые, можно избежать добавления уязвимостей в проект. Дополнительные сведения о том, как работает проверка зависимостей, см. в разделе [Проверка изменений зависимостей в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).

Дополнительную информацию о настройке зависимостей см. в разделе [Сведения о настройке зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% data variables.product.prodname_dependabot_alerts %} обнаружит уязвимости, которые уже имеются в ваших зависимостях, но гораздо лучше избежать потенциальных проблем, чем позднее тратить время на их устранение. Дополнительные сведения об {% data variables.product.prodname_dependabot_alerts %} см. в разделе [Сведения об {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies).

Проверка зависимостей поддерживает те же языки и экосистемы управления пакетами, что и граф зависимостей. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).

Дополнительную информацию о функциях цепочки поставок, доступных в {% data variables.product.product_name %}, см. в разделе [Сведения о безопасности цепочки поставок](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

{% ifversion ghec or ghes %}
## Включение проверки зависимостей

Функция проверки зависимостей становится доступной при включении графа зависимостей. Дополнительные сведения см. в разделе {% ifversion ghec %}[Включение графа зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[Включение графа зависимостей для предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}.
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
## Принудительное применение проверки зависимостей

Это действие доступно для всех {% ifversion fpt or ghec %}общедоступных репозиториев, а также для частных {% endif %}репозиториев, для которых включено {% data variables.product.prodname_GH_advanced_security %}.

{% data reusables.dependency-review.action-enterprise %}

Вы можете использовать {% data variables.product.prodname_dependency_review_action %} в своем репозитории, чтобы обеспечить проверки зависимостей в запросах на вытягивание. Это действие проверяет наличие уязвимых версий зависимостей, представленных изменениями версии пакета в запросах на вытягивание, и предупреждает о связанных с ними уязвимостях системы безопасности. Это позволяет лучше отслеживать изменения в запросе на вытягивание и предотвращать добавление уязвимостей в репозиторий. Дополнительные сведения см. на веб-сайте [`dependency-review-action`](https://github.com/actions/dependency-review-action).

![Пример действия проверки зависимостей](/assets/images/help/graphs/dependency-review-action.png)

По умолчанию проверка {% data variables.product.prodname_dependency_review_action %} завершается ошибкой, если обнаруживает уязвимые пакеты. Ошибка проверки блокирует объединение запроса на вытягивание, если владелец репозитория потребовал обязательную проверку зависимостей. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging).

Это действие использует REST API проверки зависимостей для получения различий зависимостей между базовой фиксацией и головной фиксацией. API проверки зависимостей можно использовать для получения различий изменений зависимостей, включая данные об уязвимостях, между любыми двумя фиксациями в репозитории. Дополнительные сведения см. в разделе [Обзор зависимостей](/rest/reference/dependency-graph#dependency-review).

{% ifversion dependency-review-action-configuration %} Вы можете настроить {% data variables.product.prodname_dependency_review_action %} в соответствии с вашими потребностями. Например, можно указать уровень серьезности, при котором действие будет завершаться сбоем{% ifversion dependency-review-action-licenses %}, или задать список разрешенных или запрещенных лицензий{% endif %}. Дополнительные сведения см. в статье [Настройка проверки зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action). {% endif %}

{% endif %}

