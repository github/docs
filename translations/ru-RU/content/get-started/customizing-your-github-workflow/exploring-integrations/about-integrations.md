---
title: Сведения об интеграциях
intro: 'Интеграции — это средства и службы, которые подключаются к {% data variables.product.product_name %} для дополнения и расширения рабочего процесса.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/about-integrations
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: a976ad099b80297d0d1e006a020b77b6406989eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145119496'
---
Вы можете установить интеграции в личной учетной записи или в принадлежащих вам организациях. Помимо этого, вы можете устанавливать приложения {% data variables.product.prodname_github_apps %} от третьей стороны в определенном репозитории, где у вас есть разрешения администратора или который принадлежит вашей организации.

## Различия между {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}

Интеграции могут быть {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, или любыми приложениями, которые используют API или веб-перехватчики {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.

{% data variables.product.prodname_github_apps %} предоставляют детализированные разрешения и запрашивают доступ только к требуемым приложениям. {% data variables.product.prodname_github_apps %} также предоставляют определенные разрешения на уровне пользователя, которые каждый пользователь должен авторизовать каждое приложение по отдельности при его установке или когда интегратор изменяет разрешения, запрашиваемые приложением.

Дополнительные сведения см. в разделе:
- [Различия между {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)
- [Сведения о приложениях](/apps/about-apps/)
- [Разрешения уровня пользователя](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)
- [Авторизация {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)
- [Авторизация {% data variables.product.prodname_github_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)
- [Просмотр авторизованных интеграций](/articles/reviewing-your-authorized-integrations/)

Вы можете установить предварительно настроенное {% data variables.product.prodname_github_app %}, если интеграторы или авторы приложений создали свое приложение с потоком манифеста {% data variables.product.prodname_github_app %}. Сведения о том, как запустить {% data variables.product.prodname_github_app %} с автоматической конфигурацией, обратитесь к интегратору или автору приложения.

Вы можете создать {% data variables.product.prodname_github_app %} с упрощенной конфигурацией при создании приложения с помощью Probot. Дополнительные сведения см. на сайте [документации Probot](https://probot.github.io/docs/).

## Обнаружение интеграции в {% data variables.product.prodname_marketplace %}

Вы можете найти интеграцию для установки или публикации собственной интеграции в {% data variables.product.prodname_marketplace %}.

В [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) имеются {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}. Дополнительные сведения о поиске интеграции или создании собственной интеграции см. в разделе [Сведения о {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace).

## Интеграции, приобретенные непосредственно у интеграторов

Вы также можете приобрести некоторые интеграции непосредственно у интеграторов. Если вы найдете {% data variables.product.prodname_github_app %}, которое хотите использовать, вы можете запросить утверждение и установку приложения для организации в качестве участника организации.

Если у вас есть разрешения администратора для всех репозиториев, принадлежащих организации, в которых установлено приложение, вы можете установить {% data variables.product.prodname_github_apps %} с разрешениями уровня репозитория, не запрашивая у владельца организации утверждение приложения. Когда интегратор изменяет разрешения приложения, если они предназначены только для репозитория, владельцы организации и пользователи с разрешениями администратора репозитория с установленным приложением могут просматривать и принимать новые разрешения.
