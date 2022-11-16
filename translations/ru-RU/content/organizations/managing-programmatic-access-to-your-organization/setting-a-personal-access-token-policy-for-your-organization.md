---
title: Настройка политики личного маркера доступа для организации
intro: 'Владельцы организации могут управлять разрешением {% data variables.product.pat_v2 %}s и {% data variables.product.pat_v1_plural %}, а также могут требовать утверждения для {% data variables.product.pat_v2 %}s.'
versions:
  feature: pat-v2
shortTitle: Set a token policy
ms.openlocfilehash: 6e05b65ae6814ef9101ed91fdd4a68435e4ba291
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106472'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Ограничение доступа {% data variables.product.pat_v2 %}s

Владельцы организации могут запретить {% data variables.product.pat_v2 %}s доступ к ресурсам, принадлежащим организации. {% data variables.product.pat_v2_caps %}s по-прежнему смогут читать общедоступные ресурсы в организации. Этот параметр управляет доступом только {% data variables.product.pat_v2 %}s, а не {% data variables.product.pat_v1_plural %}. Дополнительные сведения об ограничении доступа {% data variables.product.pat_v1_plural %} см. в разделе [Ограничение доступа {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)на этой странице.

{% ifversion ghec or ghes or ghae %} Если ваша организация принадлежит предприятию и владелец предприятия имеет ограниченный доступ {% data variables.product.pat_v2 %}s, вы не можете переопределить политику в своей организации. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.pat_generic %}s на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise). {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. На левой боковой панели в разделе **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** щелкните **Параметры**.
1. В **разделе {% data variables.product.pat_v2_caps %}s** выберите вариант, соответствующий вашим потребностям:
   - **Разрешить доступ через {% data variables.product.pat_v2 %}s**: {% data variables.product.pat_v2_caps %}s может получить доступ к ресурсам, принадлежащим организации.
   - **Ограничение доступа через {% data variables.product.pat_v2 %}s**: {% data variables.product.pat_v2_caps %}s не может получить доступ к ресурсам, принадлежащим организации. Ключи SSH, созданные {% data variables.product.pat_v2 %}s, будут продолжать работать.
1. Выберите команду **Сохранить**.

## Применение политики утверждения для {% data variables.product.pat_v2 %}s

Владельцы организации могут требовать утверждения для каждого {% data variables.product.pat_v2 %}, который может получить доступ к организации. {% data variables.product.pat_v2_caps %}s по-прежнему смогут читать общедоступные ресурсы в организации без утверждения. {% data variables.product.pat_v2_caps %}, созданные владельцами организации, не нуждаются в утверждении.

{% ifversion ghec or ghes or ghae %} Если ваша организация принадлежит предприятию и владелец предприятия установил политику утверждения для {% data variables.product.pat_v2 %}s, вы не сможете переопределить политику в своей организации. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.pat_generic %}s на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise). {% endif %}

{% note %}

**Примечание.** Утверждение подлежит только {% data variables.product.pat_v2 %}s, а не {% data variables.product.pat_v1_plural %}. Если {% data variables.product.pat_v1_plural %} не ограничен доступом организации, любой {% data variables.product.pat_v1 %} может получить доступ к ресурсам организации без предварительного утверждения. Дополнительные сведения см. в разделе [Ограничение доступа с помощью {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)на этой странице.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. На левой боковой панели в разделе **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** щелкните **Параметры**.
1. В разделе **Требовать утверждение {% data variables.product.pat_v2 %}s** выберите вариант, соответствующий вашим потребностям:
   - **Требовать утверждение администратора**. Владелец организации должен утвердить все {% data variables.product.pat_v2 %}, которые могут получить доступ к организации. {% data variables.product.pat_v2_caps %}, созданные владельцами организации, не нуждаются в утверждении.
   - **Не требуется утверждение администратора**: {% data variables.product.pat_v2_caps %}s, созданные участниками организации, могут получать доступ к ресурсам в организации без предварительного утверждения.
1. Выберите команду **Сохранить**.

## Ограничение доступа {% data variables.product.pat_v1_plural %}

Владельцы организации могут запретить {% data variables.product.pat_v1_plural %} доступ к ресурсам, принадлежащим организации. {% data variables.product.pat_v1_caps_plural %} по-прежнему сможет читать общедоступные ресурсы в организации. Этот параметр управляет доступом только {% data variables.product.pat_v1_plural %}, но не {% data variables.product.pat_v2 %}s. Дополнительные сведения об ограничении доступа {% data variables.product.pat_v2 %}s см. в разделе [Ограничение доступа {% data variables.product.pat_v2 %}s](#restricting-access-by-fine-grained-personal-access-tokens) на этой странице.

{% ifversion ghec or ghes or ghae %} Если ваша организация принадлежит предприятию и владелец предприятия имеет ограниченный доступ {% data variables.product.pat_v1_plural %}, вы не можете переопределить политику в своей организации. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.pat_generic %}s на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise). {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. На левой боковой панели в разделе **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s** щелкните **Параметры**.
1. В **разделе {% data variables.product.pat_v1_caps %}** выберите вариант, соответствующий вашим потребностям:
   - **Разрешить доступ через {% data variables.product.pat_v1_plural %}**: {% data variables.product.pat_v1_caps_plural %} может получить доступ к ресурсам, принадлежащим организации.
   - **Ограничение доступа через {% data variables.product.pat_v1_plural %}**: {% data variables.product.pat_v1_caps_plural %} не может получить доступ к ресурсам, принадлежащим организации. Ключи SSH, созданные {% data variables.product.pat_v1_plural %}, продолжат работать.
1. Выберите команду **Сохранить**.
