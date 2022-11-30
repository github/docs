---
title: Управление запросами личных маркеров доступа в организации
intro: 'Владельцы организации могут утверждать или отклонять {% data variables.product.pat_v2 %}s, запрашивающих доступ к их организации.'
versions:
  feature: pat-v2
shortTitle: Manage token requests
ms.openlocfilehash: 3925b74ad29268ec80eca8dd5355c58987e52843
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131388'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Сведения о запросах {% data variables.product.pat_v2 %}

Когда участники организации создают {% data variables.product.pat_v2 %} для доступа к ресурсам, принадлежащим организации, если организации требуется утверждение для {% data variables.product.pat_v2 %}s, владелец организации должен утвердить маркер, прежде чем он сможет использоваться для доступа к любым ресурсам, которые не являются общедоступными. Дополнительные сведения см. в разделе [Настройка политики {% data variables.product.pat_generic %} для вашей организации](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% data variables.product.company_short %} ежедневно уведомляет владельцев организации обо всех {% data variables.product.pat_v2 %}s, ожидающих утверждения. Если маркер отклоняется или утверждается, пользователь, создавший маркер, получит уведомление по электронной почте.

{% note %}

**Примечание.** Утверждение подлежит только {% data variables.product.pat_v2 %}s, а не {% data variables.product.pat_v1_plural %}. Если {% data variables.product.pat_v1_plural %} не ограничен доступом организации, любой {% data variables.product.pat_v1 %} может получить доступ к ресурсам организации без предварительного утверждения. Дополнительные сведения см. в разделе [Настройка политики {% data variables.product.pat_generic %} для вашей организации](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% endnote %}

## Управление запросами {% data variables.product.pat_v2 %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. На левой боковой панели в разделе **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** щелкните **Ожидающие запросы**. Если какие-либо маркеры ожидают утверждения для вашей организации, они будут отображаться.
1. Щелкните имя маркера, который требуется утвердить или отклонить.
1. Проверьте доступ и разрешения, запрашиваемые маркером.
1. Чтобы предоставить доступ к маркеру организации, нажмите кнопку **Утвердить**. Чтобы запретить доступ к маркеру организации, нажмите кнопку **Запретить**.
1. Если вы отклонили запрос, в поле подтверждения при необходимости введите причину, по которой вы отклонили маркер. Эта причина будет предоставлена в уведомлении, отправляемом владельцу маркера. Затем нажмите кнопку **Запретить**.

Кроме того, можно утвердить или запретить несколько маркеров одновременно:

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. На левой боковой панели в разделе **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** щелкните **Ожидающие запросы**. Если какие-либо маркеры ожидают утверждения для вашей организации, они будут отображаться.
{% data reusables.user-settings.patv2-filters %}
1. Выберите каждый токен, который требуется утвердить или отклонить.
1. Выберите раскрывающееся меню **выбранный запрос и** нажмите кнопку **Утвердить...** или **Отклонить...**.
