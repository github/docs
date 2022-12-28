---
title: Сведения о GitHub для предприятий
intro: 'Предприятия могут использовать корпоративные продукты {% data variables.product.prodname_dotcom %} для улучшения всего жизненного цикла разработки программного обеспечения.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: dbba8a55fd0ac20c97039de05aa629dea7048626
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192652'
---
## Сведения о {% data variables.product.prodname_dotcom %} для предприятий

{% data variables.product.prodname_dotcom %} — это полная платформа разработчика для создания, масштабирования и доставки безопасного программного обеспечения. Предприятия используют наш набор продуктов для поддержки всего жизненного цикла разработки программного обеспечения, повышения скорости разработки и улучшения качества кода.

Разработчики могут хранить исходный код и управлять версиями в репозиториях, используя проблемы и проекты для планирования и отслеживания работы. Они могут писать код в облачной среде разработки, {% data variables.product.prodname_github_codespaces %}, а затем просматривать изменения кода друг друга с помощью функций безопасности кода, чтобы хранить секреты и уязвимости вне базы кода. Наконец, вы можете автоматизировать конвейер сборки, тестирования и развертывания с помощью {% data variables.product.prodname_actions %} и размещать пакеты программного обеспечения с помощью {% data variables.product.prodname_registry %}.

Внедрение {% data variables.product.prodname_enterprise %} позволяет повысить рентабельность инвестиций. Например, разработчики экономят 45 минут в день, а подключение и обучение сокращается на 40 %. Дополнительные сведения см. в разделе [Общие экономические показатели {% data variables.product.prodname_enterprise %}](https://resources.github.com/forrester/).

Чтобы упростить администрирование на всех этапах жизненного цикла разработки программного обеспечения, мы предоставляем единую точку видимости и управления, называемую корпоративной учетной записью. Корпоративные учетные записи позволяют управлять выставлением счетов и параметрами, применять политику и проводить аудит пользователей с доступом к ресурсам предприятия. Дополнительные сведения см. в разделе [Сведения об учетных записях предприятия](/admin/overview/about-enterprise-accounts).

При необходимости можно добавить дополнительные функции безопасности кода с помощью {% data variables.product.prodname_GH_advanced_security %}, а также расширенные варианты поддержки с помощью {% data variables.contact.premium_support %}. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) и [Сведения о {% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %}" в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

## Сведения о вариантах развертывания

При покупке {% data variables.product.prodname_enterprise %} вы получаете доступ к {% data variables.product.prodname_ghe_cloud %} и {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_ghe_cloud %} — это набор расширенных функций для {% data variables.product.prodname_dotcom_the_website %}, а {% data variables.product.prodname_ghe_server %} — это локальная платформа. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %} в документации по {% data variables.product.prodname_ghe_server %}.{% else %}."{% endif %}

Для {% data variables.product.prodname_ghe_cloud %}можно разрешить разработчикам создавать собственные личные учетные записи и управлять ими. Также вы можете использовать {% data variables.product.prodname_emus %}, что позволяет создавать учетные записи пользователей для разработчиков и управлять ими. Дополнительные сведения см. в разделе [Сведения о проверке подлинности для предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).

{% data variables.product.prodname_ghe_managed %} предоставляется в ограниченной доступности для избранных клиентов со строгими требованиями к безопасности и соответствию требованиям. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %} в документации по {% data variables.product.prodname_ghe_managed %}.{% else %}."{% endif %}

Вы можете использовать преимущества {% data variables.product.prodname_dotcom_the_website %} даже при использовании {% data variables.product.prodname_ghe_server %} или {% data variables.product.prodname_ghe_managed %}, включив {% data variables.product.prodname_github_connect %}, чтобы настраивать дополнительные возможности и рабочие процессы, такие как {% data variables.product.prodname_dependabot_alerts %} для незащищенных зависимостей.{% ifversion ghec %}

- [Сведения о {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect) в документации по {% data variables.product.prodname_ghe_server %}
- [Сведения о {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect) в документации по {% data variables.product.prodname_ghe_managed %}{% else %} Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).{% endif %}

## Дополнительные материалы

- [Сравнение {% data variables.product.prodname_dotcom %} с другими решениями DevOps](https://resources.github.com/devops/tools/compare/) в ресурсах {% data variables.product.company_short %}
