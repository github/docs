---
title: Изменение рекомендаций по безопасности в базе данных рекомендаций по GitHub
intro: 'Вы можете применить улучшения для любой рекомендации, опубликованной в {% data variables.product.prodname_advisory_database %}.'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Edit Advisory Database
ms.openlocfilehash: 7cfe2ff49c830922457ef5192ca0db7d326e1388
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114167'
---
## Редактирование рекомендаций в {% data variables.product.prodname_advisory_database %}

Рекомендации в {% data variables.product.prodname_advisory_database %} являются глобальными рекомендациями по безопасности. Дополнительные сведения о глобальных рекомендациях по безопасности см. в разделе [Сведения о глобальных рекомендациях по безопасности](/code-security/security-advisories/global-security-advisories/about-global-security-advisories).

Любой пользователь может выдвинуть предложение по улучшению любой глобальной рекомендации по безопасности в {% data variables.product.prodname_advisory_database %}. Вы можете изменить или добавить любые сведения, включая дополнительно затронутые экосистемы, степень серьезности или описание тех, кого коснулись изменения. Команда по проверке {% data variables.product.prodname_security %} рассмотрит отправленные улучшения и, если они будут приняты, опубликует их в {% data variables.product.prodname_advisory_database %}.
{% ifversion fpt or ghec %} Только владельцы репозитория и администраторы могут изменять рекомендации по безопасности на уровне репозитория. Дополнительные сведения см. в статье [Изменение рекомендаций по безопасности репозитория](/code-security/security-advisories/editing-a-security-advisory).{% endif %}


1. Перейдите к https://github.com/advisories.
1. Выберите рекомендацию по безопасности, в которую вы хотели бы внести свой вклад.
1. В правой части страницы нажмите на ссылку **Предложить улучшения для этой уязвимости**.
   
   ![Снимок экрана: ссылка "Предложить улучшения"](/assets/images/help/security/suggest-improvements-to-advisory.png)

1. В форме "Улучшение рекомендаций по безопасности" внесите необходимые улучшения. Вы можете изменить или добавить любые сведения. {% ifversion fpt or ghec %} Сведения о правильном указании сведений о форме, включая затронутые версии, см. в разделе [Рекомендации по написанию рекомендаций по безопасности репозитория](/code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories). {% endif %} {% ifversion security-advisories-reason-for-change %}
1. В разделе **Причина изменения** объясните, почему вы хотите сделать это улучшение. Если вы включите ссылки на вспомогательные материалы, это поможет нашим рецензентам.
   
   ![Снимок экрана: причина изменения поля](/assets/images/help/security/security-advisories-suggest-improvement-reason.png){% endif %}

1. Завершив редактирование рекомендации, нажмите **Отправить улучшения**.
1. После отправки улучшений будет создан запрос на вытягивание, содержащий ваши изменения, для рассмотрения в [github/advisory-database](https://github.com/github/advisory-database) командой по проверке {% data variables.product.prodname_security %}. Если рекомендация исходит из репозитория {% data variables.product.prodname_dotcom %}, мы также отметим исходного издателя, чтобы при желании он мог оставить комментарий. Вы можете просматривать запрос на вытягивание и получать уведомления при его обновлении или закрытии.

Кроме того, запрос на вытягивание можно открыть непосредственно в файле рекомендаций в репозитории [github/advisory-database](https://github.com/github/advisory-database). Дополнительные сведения см. в [правилах по предложению улучшений](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 

{% ifversion security-advisories-ghes-ghae %}
## Редактирование рекомендаций из {% data variables.location.product_location %}

Если {% data variables.product.prodname_github_connect %} включен для {% data variables.location.product_location %}, вы сможете просмотреть рекомендации, добавив `/advisories` в URL-адрес экземпляра. 

1. Перейдите к `https://HOSTNAME/advisories`.
2. Выберите рекомендацию по безопасности, в которую вы хотели бы внести свой вклад.
3. В правой части страницы щелкните **Предложить улучшения для этой уязвимости в {% data variables.product.prodname_dotcom_the_website %}.** и создайте ее бесплатно. Откроется новая вкладка с той же рекомендацией по безопасности в {% data variables.product.prodname_dotcom_the_website %}.
![Ссылка на предложение улучшений](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. Измените рекомендации, выполнив действия 4-6 в разделе [Рекомендации по редактированию в базе данных рекомендаций GitHub](#editing-advisories-in-the-github-advisory-database) выше.
{% endif %}
