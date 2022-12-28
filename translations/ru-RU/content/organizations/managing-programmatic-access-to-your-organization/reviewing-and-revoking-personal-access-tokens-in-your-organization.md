---
title: Проверка и отзыв личных маркеров доступа в организации
intro: 'Владельцы организации могут просматривать {% data variables.product.pat_v2 %}, которые могут получить доступ к их организации. Они также могут отозвать доступ к определенным {% data variables.product.pat_v2 %}s.'
versions:
  feature: pat-v2
shortTitle: Review token access
ms.openlocfilehash: b45401441473f892ba61cf199852588e2a3b3d67
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131380'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Сведения о проверке и отзыве {% data variables.product.pat_v2 %}s

Владельцы организации могут просматривать все {% data variables.product.pat_v2 %}, которые имеют доступ к ресурсам, принадлежащим организации. Владельцы организации также могут отозвать доступ {% data variables.product.pat_v2 %}s. При отзыве {% data variables.product.pat_v2 %} ключи SSH, созданные маркером, продолжат работать, и маркер по-прежнему сможет считывать общедоступные ресурсы в организации.

При отзыве маркера пользователь, создавший его, получит уведомление по электронной почте.

Владельцы организации могут просматривать и отзывать только {% data variables.product.pat_v2 %}s, но не {% data variables.product.pat_v1_plural %}. Если организация {% ifversion ghec or ghes or ghae %} или предприятие {% endif %} не имеет ограниченного доступа {% data variables.product.pat_v1_plural %}, любой {% data variables.product.pat_v1 %} может получить доступ к ресурсам организации до истечения срока действия маркера. Дополнительные сведения об ограничении доступа {% data variables.product.pat_v1_plural %} см. в разделах [Настройка политики {% data variables.product.pat_generic %} для вашей организации](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization){% ifversion ghec or ghes or ghae %} и [Применение политик для {% data variables.product.pat_generic %}s на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise){% endif %}.

{% ifversion ghec %} Владельцы организации также могут просматривать и отзывать {% data variables.product.pat_v1_plural %}, если их организации требуется единый вход SAML. Дополнительные сведения см. в разделе [Просмотр доступа пользователя SAML к вашей организации и управление ими](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials). Дополнительные сведения об использовании REST API для этого см. в [разделах Перечисление авторизации единого входа SAML для организации](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization) и [Удаление авторизации единого входа SAML для организации](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization). {% endif %}

## Просмотр и отзыв {% data variables.product.pat_v2 %}s

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. На левой боковой панели в разделе **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** щелкните **Активные токены**. Отобразятся все {% data variables.product.pat_v2 %}s, которые могут получить доступ к вашей организации.
1. Щелкните имя маркера, который требуется проверить или отозвать.
1. Проверьте доступ и разрешения, имеющиеся у маркера.
1. Чтобы отозвать доступ по маркеру к организации, нажмите кнопку **Отозвать**.

Кроме того, можно отозвать несколько маркеров одновременно:

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. На левой боковой панели в разделе **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** щелкните **Активные токены**. Отобразятся все {% data variables.product.pat_v2 %}s, которые могут получить доступ к вашей организации.
{% data reusables.user-settings.patv2-filters %}
1. Выберите каждый токен, который требуется отозвать.
1. Выберите **токены, выбранные в** раскрывающемся меню... и нажмите кнопку **Отозвать...**.
