---
title: Проверка личного домена для GitHub Pages
intro: Вы можете повысить безопасность личного домена и избежать атак со взломом путем проверки домена.
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verify a custom domain
ms.openlocfilehash: b3c44dacd98882afa7a43854b96d803352e879ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529674'
---
## Сведения о проверке домена для GitHub Pages

При проверке личного домена для личной учетной записи или организации для публикации сайта {% data variables.product.prodname_pages %} в проверенном личном домене или прямых субдоменах этого домена можно использовать только репозитории, принадлежащие вашей личной учетной записи или организации.

Проверка того, что домен не позволяет другим пользователям GitHub взять на себя личный домен и использовать его для публикации собственного сайта {% data variables.product.prodname_pages %}. Операции перехвата домена может произойти при удалении репозитория, при понижении плана выставления счетов или после любого другого изменения, которое отменяет связь с пользовательским доменом или отключает {% data variables.product.prodname_pages %}, пока домен остается настроенным для {% data variables.product.prodname_pages %} и не проверяется.

При проверке домена все непосредственные субдомены также включаются в проверку. Например, если личный домен `github.com` проверен, `docs.github.com`, `support.github.com`, а также любые другие непосредственные субдомены также будут защищены от перехвата.

{% data reusables.pages.wildcard-dns-warning %}

Кроме того, можно проверить домен для вашей организации{% ifversion ghec %} или предприятия{% endif %}, чтобы отобразить эмблему "Проверено" в профиле организации{% ifversion ghec %}или предприятии{% endif %} {% ifversion ghec %}, а также в {% data variables.product.prodname_ghe_cloud %}, позволяет ограничить уведомления на адреса электронной почты, используя проверенный домен{% endif %}. Дополнительные сведения см. в разделе [Проверка или утверждение домена для вашей организации {% ifversion ghec %}](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) и [Проверка или утверждение домена для вашего предприятия](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% endif %}.

## Проверка домена для сайта пользователя

{% data reusables.user-settings.access_settings %}
1. В разделе «Код, планирование и автоматизация» на боковой панели щелкните **Страницы {% octicon "browser" aria-label="The pages icon" %}** .
{% data reusables.pages.settings-verify-domain-setup %}
1. Дождитесь изменения конфигурации DNS, это может произойти сразу или занять до 24 часов. Чтобы подтвердить изменение конфигурации DNS, выполните команду `dig` в командной строке. В приведенной ниже команде замените `USERNAME` на имя пользователя и `example.com` на домен, который вы проверяете. Если конфигурация DNS обновлена, в выходных данных должна появиться новая текстовая запись.
  ```
  dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}

## Проверка домена для сайта организации

Владельцы организации могут проверять личные домены для своей организации.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. В разделе «Код, планирование и автоматизация» на боковой панели щелкните **Страницы {% octicon "browser" aria-label="The browser icon" %}** .
{% data reusables.pages.settings-verify-domain-setup %}
1. Дождитесь изменения конфигурации DNS, это может произойти сразу или занять до 24 часов. Чтобы подтвердить изменение конфигурации DNS, выполните команду `dig` в командной строке. В приведенной ниже команде замените `ORGANIZATION` на имя вашей организации и `example.com` на домен, который вы проверяете. Если конфигурация DNS обновлена, в выходных данных должна появиться новая текстовая запись.
  ```
  dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}
