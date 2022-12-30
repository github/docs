---
title: Истечение срока действия и отзыв маркера
intro: 'Срок действия маркеров может истечь, кроме того маркер может быть отозван вами, авторизованными вами приложениям и {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Token expiration
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
ms.openlocfilehash: 00ccfc3117401bfa9464da9599067fe1d2f514dd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107000'
---
Если срок действия маркера истек или отозван, он больше не может использоваться для проверки подлинности запросов Git и API. Невозможно восстановить истекший или отозванный маркер; вам или приложению потребуется создать новый маркер.

В этой статье описываются возможные причины отзыва или истечения срока действия маркера {% data variables.product.product_name %}.

{% note %}

**Примечание:** Когда истекает срок действия маркера OAuth или {% данных variables.product.pat_generic %} или OAuth, в журнале безопасности может отображаться `oauth_authorization.destroy` действие. Дополнительные сведения см. в статье [Просмотр журнала безопасности](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log).

{% endnote %}

## Маркер отозван после истечения срока действия

При создании {% данных variables.product.pat_generic %}рекомендуется задать срок действия маркера. После истечения срока действия маркера он автоматически отзывается. Дополнительные сведения см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% ifversion fpt or ghec %}
## Маркер отзывается при отправке в общедоступный репозиторий или общедоступный gist

Если допустимый маркер OAuth, {% данных variables.product.prodname_github_app %} или {% данных variables.product.pat_generic %} отправляется в общедоступный репозиторий или общедоступный gist, маркер будет автоматически отозван. 

{% endif %}

{% ifversion fpt or ghec %}
## Срок действия маркера истек ввиду его неактивности

{% данных variables.product.product_name %} автоматически отменяет маркер OAuth или {% данных variables.product.pat_generic %}, если маркер не использовался в течение одного года.
{% endif %}

## Маркер отозван пользователем

Можно отозвать авторизацию {% data variables.product.prodname_github_app %} или {% data variables.product.prodname_oauth_app %} из параметров учетной записи; при этом будут отозваны все маркеры, связанные с приложением. Дополнительные сведения см. в статьях [Просмотр авторизованных интеграций](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations) и [Просмотр авторизованных приложений (OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth).

После отмены авторизации все маркеры, связанные с авторизацией, также будут отозваны. Чтобы повторно авторизовать приложение, следуйте инструкциям стороннего приложения или веб-сайта, чтобы подключить учетную запись к {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} еще раз.

## Маркер отозван {% data variables.product.prodname_oauth_app %}

Владелец {% data variables.product.prodname_oauth_app %} может отозвать авторизацию учетной записи приложения. При этом также будут отозваны все маркеры, связанные с авторизацией. Дополнительные сведения об отзыве авторизаций приложения OAuth см. в разделе [Удаление авторизации приложения](/rest/reference/apps#delete-an-app-authorization).

Владельцы {% data variables.product.prodname_oauth_app %} также могут отзывать отдельные токены, связанные с авторизацией. Дополнительные сведения об отзыве отдельных токенов для приложения OAuth см. в разделе [Удаление токена приложения](/rest/apps/oauth-applications#delete-an-app-token).

## Маркер отозван из-за превышения допустимого числа маркеров для {% data variables.product.prodname_oauth_app %} с той же областью

{% data reusables.apps.oauth-token-limit %}

## Маркер пользователя отозван из-за конфигурации {% data variables.product.prodname_github_app %}

По умолчанию срок действия маркера, созданного {% data variables.product.prodname_github_app %}, по умолчанию истекает через восемь часов. Владельцы {% data variables.product.prodname_github_apps %} может настроить их приложения таким образом, чтобы предотвратить истечение срока действия маркеров «пользователь-сервер». Дополнительные сведения об изменении поведения маркеров «пользователь-сервер» приложения {% data variables.product.prodname_dotcom %} см в разделе [Активация дополнительных компонентов для приложений](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps).
