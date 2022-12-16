---
title: Изменение видимости сайта GitHub Pages
intro: 'Вы можете управлять доступом для сайта проекта, сделав его общедоступным или частным.'
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Change visibility of site
ms.openlocfilehash: f80ec04f0f16413414a4334e02ee3b45f534b46c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145282860'
---
## Сведения об управлении доступом для сайтов {% data variables.product.prodname_pages %}

С помощью управления доступом для {% data variables.product.prodname_pages %} вы можете ограничивать доступ к сайту проекта путем публикации сайта в конфиденциальном режиме. Доступ к сайту, опубликованному в конфиденциальном режиме, могут получать только пользователи, имеющие доступ на чтение к репозиторию, из которого опубликован сайт. На сайтах, опубликованные в конфиденциальном режиме, можно размещать внутреннюю документацию или базу знаний для совместного использования членами вашего предприятия. 

{% data reusables.pages.privately-publish-ghec-only %}

Если предприятие использует {% data variables.product.prodname_emus %}, управление доступом невозможно, а все сайты {% data variables.product.prodname_pages %} доступны только другим членам предприятия. Дополнительную информацию о {% data variables.product.prodname_emus %} см. в разделе [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users).

Если ваша организация использует {% data variables.product.prodname_ghe_cloud %} без {% data variables.product.prodname_emus %}, вы можете публиковать сайты проектов для частного доступа или открытыми для всех пользователей в Интернете.

Управление доступом можно использовать для сайтов проектов, опубликованных из частного или внутреннего репозитория, принадлежащего организации. Вы не можете управлять доступом для сайта организации. Дополнительные сведения о типах сайтов {% data variables.product.prodname_pages %} см. в разделе [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

## Сведения о поддоменах для частных опубликованных сайтов

Доступ к сайтам, опубликованные в конфиденциальном режиме, осуществляется в другом поддомене, чем к общедоступным сайтам. Это обеспечивает защиту сайта {% data variables.product.prodname_pages %} с момента публикации следующим образом.

- Мы автоматически защищаем каждый поддомен `*.pages.github.io` с помощью сертификата TLS и принудительно применяем HSTS, чтобы браузеры всегда обслуживали страницу по протоколу HTTPS.
- Мы используем уникальный поддомен для частного опубликованного сайта, чтобы другие репозитории в вашей организации не могли публиковать содержимое в том же источнике, что и частный сайт. Это защищает сайт от [отправки файлов cookie](https://github.blog/2013-04-09-yummy-cookies-across-domains/). Именно поэтому мы не размещаем сайты {% data variables.product.prodname_pages %} в домене `github.com`.

Вы можете увидеть уникальный поддомен сайта в параметрах репозитория на вкладке "Страницы". Если вы используете генератор статических сайтов, настроенный для сборки сайта с именем репозитория в качестве пути, может потребоваться обновить параметры генератора статических сайтов при изменении сайта на частный. Дополнительные сведения см. в разделе [Настройка Jekyll на сайте {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) или в документации для генератора статических сайтов.

Чтобы использовать более короткий и более запоминающийся домен для частного опубликованного сайта, можно настроить личный домен. Дополнительные сведения см. в разделе [Настройка личного домена для сайта {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Изменение видимости сайта {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. В разделе {% data variables.product.prodname_pages %}", выберите раскрывающийся список в меню **настроек видимости {% data variables.product.prodname_pages %}** , а затем выберите настройку видимости.
   ![Раскрывающийся список для выбора видимости сайта](/assets/images/help/pages/public-or-private-visibility.png)
4. Чтобы просмотреть опубликованный сайт, в разделе {% data variables.product.prodname_pages %} щелкните URL-адрес своего сайта.
![URL-адрес сайта, опубликованного в конфиденциальном режиме](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
