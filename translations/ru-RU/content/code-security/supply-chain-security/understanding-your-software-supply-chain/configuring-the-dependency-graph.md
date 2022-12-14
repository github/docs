---
title: Настройка графа зависимостей
intro: 'Вы можете разрешить пользователям определять зависимости проектов, включив граф зависимостей.'
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
ms.openlocfilehash: 79185d819691dfbc577f259de2377252bc5bd604
ms.sourcegitcommit: 605b619588c51336f3ffe9d13c68503ae45cbfc6
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/07/2022
ms.locfileid: '148013872'
---
## Сведения о графе зависимостей

{% data reusables.dependabot.about-the-dependency-graph %}  

Дополнительные сведения см. в статье [Сведения о графе зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

{% ifversion fpt or ghec %}
## О настройке графа зависимостей 
Для создания графа зависимостей {% data variables.product.product_name %} требуется доступ только для чтения к файлам блокировки и манифеста зависимостей для репозитория. Граф зависимостей автоматически создается для всех общедоступных репозиториев, и его можно включить для частных репозиториев. Дополнительные сведения о просмотре графа зависимостей см. в статье [Изучение зависимостей репозитория](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository).

{% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

{% ifversion ghes %} ## Включение графа зависимостей {% повторного использования данных.code-scanning.enterprise-enable-dependency-graph %} {% данных reusables.dependabot.ghes-ghae-enable-dependency-graph %}{% endif %}{% ifversion fpt или ghec %}

### Включение и отключение графа зависимостей для частного репозитория

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

{% данных reusables.code-scanning.enterprise-enable-dependency-graph %} {% endif %}

Когда граф зависимостей впервые включен, все файлы манифеста и блокировки для поддерживаемых экосистем немедленно анализируются. Обычно граф заполняется в течение нескольких минут, но при наличии репозиториев с большим количеством зависимостей это может занять больше времени. После включения граф автоматически обновляется при каждой отправке в репозиторий{% ifversion fpt or ghec %} и каждой отправке в другие репозитории в графе{% endif %}.

{% ifversion ghes %} {% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %} {% endif %}

## Дополнительные материалы

{% ifversion ghec %}- [Просмотр аналитических сведений для организации](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization){% endif %}
- [Просмотр и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [Устранение неполадок обнаружения уязвимых зависимостей](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)
