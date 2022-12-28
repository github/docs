---
title: Почему мои вклады не отображаются в моем профиле?
intro: 'Узнайте о распространенных причинах, по которым вклады могут отсутствовать в графе вкладов.'
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Missing contributions
ms.openlocfilehash: dbdf99a77c423774c03f69d21542f8174e813bc6
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127662'
---
## Сведения о диаграмме вкладов

Граф вкладов профилей — это запись вкладов, внесенных в репозитории {% ifversion ghae %}, принадлежащие{% else %}на{% endif %} {% data variables.location.product_location %}. Вклады сопровождаются метками времени в формате UTC, а не в соответствии с местным часовым поясом. Вклады учитываются только в том случае, если они соответствуют определенным критериям. В некоторых случаях может потребоваться перестроить диаграмму, чтобы вклады отобразились.

Если вы входите в организацию, использующую единый вход SAML, то не сможете просмотреть действия, связанные с вкладами организации, в своем профиле при отсутствии активного сеанса единого входа. Пользователи, просматривающие ваш профиль за пределами организации, будут видеть для вашей организации анонимные действия, связанные со вкладами.

## Вклады, которые учитываются

### Проблемы, запросы на вытягивание и обсуждения

Проблемы, запросы на вытягивание и обсуждения будут отображаться в графе вкладов, если они были открыты в автономном репозитории, а не вилке.

### Фиксации
Фиксации будут отображаться на диаграмме вкладов, если они соответствуют **всем** следующим условиям.
- Адрес электронной почты, используемый для фиксаций, связан с вашей учетной записью в {% data variables.location.product_location %}.
- Фиксации были сделаны в изолированном репозитории, а не в вилке.
- Фиксации были сделаны:
  - в ветви репозитория по умолчанию;
  - в ветви `gh-pages` (для репозиториев с сайтами проектов).

Дополнительные сведения о сайтах проектов см. в разделе [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

Кроме того, должно выполняться **по крайней мере одно** из указанных ниже условий.
- Вы являетесь участником совместной работы в репозитории или членом организации, которая владеет репозиторием.
- Вы создали вилку репозитория.
- Вы открыли запрос на вытягивание или проблему в репозитории.
- Вы пометили репозиторий звездочкой.

## Распространенные причины, по которым вклады не учитываются

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### Фиксация была выполнена менее 24 часов назад

Прежде чем фиксация, соответствующая требованиям для того, чтобы считаться вкладом, появится на диаграмме вкладов, может пройти до 24 часов с момента ее выполнения.

### Электронная почта для фиксации в локальном репозитории Git не подключена к вашей учетной записи

Фиксации должны выполняться с помощью адреса электронной почты, подключенного к вашей учетной записи в {% data variables.location.product_location %}{% ifversion fpt or ghec %}, или адреса электронной почты, предоставленного `noreply` {% data variables.product.prodname_dotcom %}, предоставленного вам в параметрах электронной почты,{% endif %} для отображения в графе вкладов.{ % ifversion fpt or ghec %} Дополнительные сведения об `noreply` адресах электронной почты см. в разделе [Настройка адреса электронной почты для фиксации](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses). {% endif %}

Чтобы проверить адрес электронной почты, используемый для фиксации, добавьте `.patch` в конец URL-адреса фиксации, например, <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

Адрес электронной почты в поле `From:` — это адрес, заданный в [параметрах конфигурации локального репозитория Git](/articles/set-up-git). В этом примере для фиксации используется адрес электронной почты `octocat@nowhere.com`.

Если адрес электронной почты, используемый для фиксации, не подключен к вашей учетной записи в {% data variables.location.product_location %}, {% ifversion ghae %}измените адрес электронной почты, используемый для создания фиксаций в Git. Дополнительные сведения см. в разделе [Настройка адреса электронной почты фиксации](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git). {% else %}необходимо [добавить адрес электронной почты](/articles/adding-an-email-address-to-your-github-account) в учетную запись в {% data variables.location.product_location %}. Диаграмма вкладов будет перестроена автоматически при добавлении нового адреса.{% endif %}

{% ifversion fpt or ghec %} {% note %}

**Примечание**. Если вы используете {% data variables.enterprise.prodname_managed_user %}, вы не сможете добавить в учетную запись дополнительные адреса электронной почты, даже если в поставщике удостоверений (IdP) зарегистрировано несколько адресов электронной почты. Таким образом, только фиксации, созданные основным адресом электронной почты, зарегистрированным в поставщике удостоверений, могут быть связаны с {% data variables.enterprise.prodname_managed_user %}.

{% endnote %} {% endif %}

Универсальные адреса электронной почты, такие как `jane@computer.local`, нельзя добавить в учетные записи {% data variables.product.prodname_dotcom %} и связать с фиксациями. Если вы создали фиксации с помощью универсального адреса электронной почты, фиксации не будут связаны с профилем {% data variables.product.prodname_dotcom %} и не будут отображаться в графе вкладов.

### Фиксация не была выполнена в ветви по умолчанию или ветви `gh-pages`

Учитываются только фиксации, выполненные в ветви по умолчанию или ветви `gh-pages` (для репозиториев с сайтами проектов). Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

Если фиксации находятся в ветви, не являющейся ветвью по умолчанию или ветвью `gh-pages`, и требуется учитывать их в качестве вкладов, необходимо выполнить одно из следующих действий.
- [Открыть запрос на вытягивание](/articles/creating-a-pull-request), чтобы объединить изменения в ветвь по умолчанию или ветвь `gh-pages`.
- [Изменить ветвь по умолчанию](/github/administering-a-repository/changing-the-default-branch) репозитория.

{% warning %}

**Предупреждение**. Изменение ветви репозитория по умолчанию приведет к ее изменению для всех участников совместной работы в репозитории. Делать это следует только в том случае, если требуется, чтобы новая ветвь стала базой, в которой будут выполняться все будущие запросы на вытягивание и фиксации.

{% endwarning %}

### Фиксация была выполнена в вилке

Фиксации, выполненные в вилке, не будут учитываться в качестве вкладов. Чтобы они учитывались, необходимо выполнить одно из следующих действий.
- [Открыть запрос на вытягивание](/articles/creating-a-pull-request), чтобы объединить изменения с родительским репозиторием.
- Чтобы отсоединить вилку и превратить ее в автономный репозиторий на {% data variables.location.product_location %}, обратитесь к {% data variables.contact.contact_support %}. Если в вилке есть собственные вилки, сообщите {% data variables.contact.contact_support %}, требуется ли переместить вилки вместе с репозиторием в новую сеть или оставить в текущей сети. Дополнительные сведения см. в статье [Сведения о вилках](/articles/about-forks/).

## Дополнительные материалы

- [Публикация или скрытие личных вкладов в своем профиле](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)
- [Просмотр вкладов на странице профиля](/articles/viewing-contributions-on-your-profile-page)
