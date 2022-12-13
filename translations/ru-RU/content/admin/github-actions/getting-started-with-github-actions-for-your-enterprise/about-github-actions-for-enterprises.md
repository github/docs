---
title: Сведения о GitHub Actions для предприятий
shortTitle: About GitHub Actions
intro: '{% data variables.product.prodname_actions %} может повысить производительность разработчиков за счет автоматизации цикла разработки программного обеспечения на предприятии.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 682e5c4bc4b17105df59c4e5474bf46ec11fe211
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160747'
---
## Сведения о {% data variables.product.prodname_actions %} для предприятий

{% data reusables.actions.about-actions-for-enterprises %}

| Задача | Дополнительные сведения |
| ---- | ---------------- |
| Автоматическое тестирование и сборка приложения | [Сведения о непрерывной интеграции](/actions/automating-builds-and-tests/about-continuous-integration) | 
| Развертывание приложения | [Сведения о непрерывном развертывании](/actions/deployment/about-deployments/about-continuous-deployment) |
| Автоматическая и безопасная упаковка кода в артефакты и контейнеры | [Сведения об упаковке с помощью {% data variables.product.prodname_actions %}](/actions/publishing-packages/about-packaging-with-github-actions) |
| Автоматизация задач управления проектами | [Использование {% data variables.product.prodname_actions %} для управления проектами](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management) |

{% data variables.product.prodname_actions %} помогает вашей команде в целом работать быстрее. Когда крупные репозитории начинают использовать {% data variables.product.prodname_actions %}, команды объединяют значительно больше запросов на вытягивание в день, а запросы на вытягивание объединяются значительно быстрее. Дополнительные сведения см. в разделе [Более быстрое написание и доставка кода](https://octoverse.github.com/2021/writing-code-faster/#scale-through-automation) отчета "State of the Octoverse".

Вы можете создавать собственные уникальные автоматизации или использовать и адаптировать рабочие процессы из нашей экосистемы, включающей свыше 10 000 действий, созданных ведущими отраслевыми специалистами и сообществом открытого кода. {% ifversion ghec %} Дополнительные сведения см. в разделе [Поиск и настройка действий](/actions/learn-github-actions/finding-and-customizing-actions). {% else %} Вы можете ограничить разработчиков использованием действий, существующих в {% data variables.location.product_location %}, или разрешить разработчикам доступ к действиям в {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в разделе [Сведения об использовании действий в предприятии](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).{% endif %}

Инструмент {% data variables.product.prodname_actions %} удобен для разработчиков, так как встроен непосредственно в знакомый интерфейс {% data variables.product.product_name %}.

{% ifversion ghec %} Вы можете воспользоваться удобством средств выполнения, размещенных в {% data variables.product.company_short %}, обслуживание и обновление которых обеспечивается {% data variables.product.company_short %}, или{% else %}Вы{% endif %} можете управлять собственной частной инфраструктурой CI/CD с помощью локальных средств выполнения. Локальные средства выполнения позволяют определить точную среду и ресурсы, которые выполняют сборки, тестирование и развертывания, не раскрывая цикл разработки программного обеспечения в Интернете. Дополнительные сведения см. в разделе {% ifversion ghec %}[Сведения о средствах выполнения, размещенных в {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners) и{% endif %}[Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners).

{% data variables.product.prodname_actions %} обеспечивает более широкий контроль над развертываниями. Например, можно использовать среды, чтобы требовать утверждения для продолжения задания, ограничивать, какие ветви могут активировать рабочий процесс, или ограничивать доступ к секретам. {% ifversion ghec or ghes > 3.4 %} Если рабочим процессам требуется доступ к ресурсам от поставщика облачных служб, поддерживающего OpenID Connect (OIDC), можно настроить рабочие процессы для проверки подлинности непосредственно у поставщика облачных служб. OIDC обеспечивает такие преимущества безопасности, как устранение необходимости хранения учетных данных в виде долго существующих секретов. Дополнительные сведения см. в разделе [Сведения об усилении защиты с помощью OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect).{% endif %}

В {% data variables.product.prodname_actions %} также имеются инструменты для управления циклом разработки программного обеспечения предприятия и выполнения обязательств по соответствию требованиям. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)».

## Сведения о начале работы с {% data variables.product.prodname_actions %}

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %} {% data reusables.actions.ghes-actions-not-enabled-by-default %} После завершения планирования вы можете выполнить инструкции по включению {% data variables.product.prodname_actions %}. Например, может потребоваться обновить ресурсы ЦП и памяти для {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server).

{% else %} После завершения планирования вы можете выполнить инструкции по началу работы с {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе {% ifversion ghec %}[Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_cloud %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud).{% elsif ghae %}[Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae).{% endif %} {% endif %}

## Дополнительные материалы

- [Основные сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion ghec %}
- [Сведения о выставлении счетов за {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions){% endif %}
