---
title: Продукты GitHub
intro: 'Общие сведения о продуктах и тарифных планах {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
  - /github/getting-started-with-github/githubs-products
  - /github/getting-started-with-github/learning-about-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: e2965befe319637296361e270646cd331478ae44
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160042'
---
## Сведения о продуктах {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} предлагает бесплатные и платные продукты для размещения кода и совместной работы с кодом. Одни продукты применяются только к личным учетным записям, а другие — только к учетным записям организации и корпоративным учетным записям. Дополнительные сведения об учетных записях см. в разделе [Типы учетных записей {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts).

Расценки и полный список функций для каждого продукта можно просмотреть на странице <{% data variables.product.pricing_url %}>. {% data reusables.products.product-roadmap %}

При чтении {% data variables.product.prodname_docs %} обязательно выберите версию, соответствующую вашему продукту. Дополнительные сведения см. в разделе [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

## {% data variables.product.prodname_free_user %} для личных учетных записей

При использовании {% data variables.product.prodname_free_team %} для личных учетных записей можно взаимодействовать с неограниченным числом участников совместной работы в неограниченных общедоступных репозиториях с полным набором функций, а также в неограниченных частных репозиториях с ограниченным набором функций.

При использовании {% data variables.product.prodname_free_user %} ваша личная учетная запись включает:
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- Принудительное применение двухфакторной проверки подлинности
- 2000 {% data variables.product.prodname_actions %} минут в месяц 
- 500 МБ хранилища {% data variables.product.prodname_registry %} {% ifversion fpt or ghec%}
- 120 {% data variables.product.prodname_github_codespaces %} основных часов в месяц
- 15 ГБ хранилища {% data variables.product.prodname_github_codespaces %} в месяц {% endif %}

## {% data variables.product.prodname_pro %}

Помимо функций, доступных в {% data variables.product.prodname_free_user %} для личных учетных записей, {% data variables.product.prodname_pro %} включает:
- {% data variables.contact.github_support %} по электронной почте
- 3000 {% data variables.product.prodname_actions %} минут в месяц 
- 2 ГБ хранилища {% data variables.product.prodname_registry %} {% ifversion fpt or ghec%}
- 180 {% data variables.product.prodname_github_codespaces %} основных часов в месяц
- 20 ГБ хранилища {% data variables.product.prodname_github_codespaces %} в месяц {% endif %}
- Расширенные инструменты и аналитические сведения в частных репозиториях:
  - Обязательные рецензенты для запросов на вытягивание
  - Несколько рецензентов для запросов на вытягивание
  - Защищенные ветви
  - Владельцы кода
  - Справочные материалы с автоматическими ссылками
  - {% data variables.product.prodname_pages %}
  - Вики
  - Графики с аналитикой репозитория: пульсация, участники, трафик, фиксации, частота кода, сеть и вилки

## {% data variables.product.prodname_free_team %} для организаций

При использовании {% data variables.product.prodname_free_team %} для организаций вы можете работать с неограниченным числом участников совместной работы в неограниченных общедоступных репозиториях с полным набором функций, а также в неограниченных частных репозиториях с ограниченным набором функций.

Помимо функций, доступных в {% data variables.product.prodname_free_user %} для личных учетных записей, {% data variables.product.prodname_free_team %} включает:
- {% data variables.product.prodname_gcf %}
- Обсуждения в команде
- Элементы управления доступом к командам для управления группами
- 2000 {% data variables.product.prodname_actions %} минут в месяц 
- 500 МБ хранилища {% data variables.product.prodname_registry %} 

## {% data variables.product.prodname_team %}

Помимо функций, доступных в {% data variables.product.prodname_free_team %} для организаций, {% data variables.product.prodname_team %} включает:
- {% data variables.contact.github_support %} по электронной почте
- 3000 {% data variables.product.prodname_actions %} минут в месяц 
- 2 ГБ хранилища {% data variables.product.prodname_registry %} 
- Расширенные инструменты и аналитические сведения в частных репозиториях:
  - Обязательные рецензенты для запросов на вытягивание
  - Несколько рецензентов для запросов на вытягивание
  - Черновые запросы на вытягивание
  - Команды в качестве рецензентов для запросов на вытягивание
  - Защищенные ветви
  - Владельцы кода
  - Запланированные напоминания
  - {% data variables.product.prodname_pages %}
  - Вики
  - Графики с аналитикой репозитория: пульсация, участники, трафик, фиксации, частота кода, сеть и вилки {%- ifversion fpt or ghec %}
- Возможность включения {% data variables.product.prodname_github_codespaces %}
  - Владельцы организации могут включить {% data variables.product.prodname_github_codespaces %} для организации, установив предельную сумму расходов и предоставив пользователям разрешения для участников организации. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_github_codespaces %} для организации](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization).
{%- endif %}

{% data variables.product.company_short %} выставляет счета за {% data variables.product.prodname_team %} для каждого пользователя. Дополнительные сведения см. в разделе [Сведения о расценках для пользователей]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion fpt %}."{% else %}" в документации по планам Free, Pro и Team.{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} включает два варианта развертывания: размещение в облаке и локальное размещение. 

Помимо функций, доступных в {% data variables.product.prodname_team %}, {% data variables.product.prodname_enterprise %} включает:
- {% data variables.contact.enterprise_support %}
- Дополнительные элементы управления безопасностью, соответствием требованиям и развертываниями
- Проверка подлинности с помощью единого входа SAML
- Подготовка доступа с помощью SAML или SCIM
- {% data variables.product.prodname_github_connect %}
- Возможность приобретения {% data variables.product.prodname_GH_advanced_security %}. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security).

{% data variables.product.prodname_ghe_cloud %} также включает:
- {% data variables.contact.enterprise_support %}. Дополнительные сведения см. в разделах <a href="/articles/github-enterprise-cloud-support" class="dotcom-only">Поддержка {% data variables.product.prodname_ghe_cloud %}</a> и <a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">Приложение для {% data variables.product.prodname_ghe_cloud %}</a>.
- 50 000 {% data variables.product.prodname_actions %} минут в месяц 
- 50 ГБ хранилища {% data variables.product.prodname_registry %} 
- Управление доступом для сайтов {% data variables.product.prodname_pages %}. Дополнительные сведения см. в разделе [Изменение видимости сайта {% data variables.product.prodname_pages %}](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).
- Соглашение об уровне обслуживания с ежемесячной доступностью 99,9 %
- Возможность настроить ваше предприятие для использования {% data variables.product.prodname_emus %}, чтобы вы могли подготавливать участников и управлять ими с помощью поставщика удостоверений, а также ограничивать область вклада участников только вашей организацией. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).
- Возможность централизованного управления политикой и выставлением счетов для нескольких организаций {% data variables.product.prodname_dotcom_the_website %} с учетной записью предприятия. Дополнительные сведения см. в разделе [Сведения об учетных записях предприятия](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts).

{% data reusables.enterprise.about-github-for-enterprises %}

Вы можете настроить пробную версию {% data variables.product.prodname_ghe_cloud %} и оценить ее работу. Дополнительные сведения см. в разделе [Настройка пробной версии {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/articles/setting-up-a-trial-of-github-enterprise-cloud).

Дополнительные сведения о размещении собственного экземпляра данных {% data variables.product.prodname_ghe_server %}, включая настройку пробной версии, см. в статье [Сведения о {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server).

## Дополнительные материалы

- "[Сведения о расценках для пользователей]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing)"{% ifversion not ghec %}" в документации {% data variables.product.prodname_ghe_cloud %} {% endif %}
