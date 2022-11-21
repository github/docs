---
title: Como gerenciar solicitações de tokens de acesso pessoal na organização
intro: 'Os proprietários da organização podem aprovar ou negar {% data variables.product.pat_v2 %}s que solicitam acesso à organização.'
versions:
  feature: pat-v2
shortTitle: Manage token requests
ms.openlocfilehash: 3925b74ad29268ec80eca8dd5355c58987e52843
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131382'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Sobre as solicitações de {% data variables.product.pat_v2 %}

Quando os membros da organização criam um {% data variables.product.pat_v2 %} para acessar recursos pertencentes à organização, se a organização exige aprovação para {% data variables.product.pat_v2 %}s, um proprietário da organização precisa aprovar o token para que ele possa ser usado para acessar todos os recursos que não são públicos. Para obter mais informações, confira "[Como configurar uma política de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".

O {% data variables.product.company_short %} notificará os proprietários da organização com um email diário sobre todos os {% data variables.product.pat_v2 %}s que estão aguardando aprovação. Quando um token for negado ou aprovado, o usuário que criou o token receberá uma notificação por email.

{% note %}

**Observação**: somente {% data variables.product.pat_v2 %}s, não {% data variables.product.pat_v1_plural %}, estão sujeitos à aprovação. A menos que a organização tenha acesso restrito de {% data variables.product.pat_v1_plural %}, qualquer {% data variables.product.pat_v1 %} pode acessar os recursos da organização sem aprovação prévia. Para obter mais informações, confira "[Como configurar uma política de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".

{% endnote %}

## Como gerenciar solicitações de {% data variables.product.pat_v2 %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na barra lateral esquerda, em **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, clique em **Solicitações pendentes**. Se houver tokens aguardando aprovação para a organização, eles serão exibidos.
1. Clique no nome do token que você deseja aprovar ou negar.
1. Revise o acesso e as permissões que o token está solicitando.
1. Para permitir o acesso do token à organização, clique em **Aprovar**. Para negar o acesso do token à organização, clique em **Negar**.
1. Se você negou a solicitação do token, na caixa de confirmação, insira opcionalmente o motivo. Esse motivo será compartilhado na notificação enviada ao proprietário do token. Depois, clique em **Negar**.

Como alternativa, você pode aprovar ou negar vários tokens ao mesmo tempo:

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na barra lateral esquerda, em **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, clique em **Solicitações pendentes**. Se houver tokens aguardando aprovação para a organização, eles serão exibidos.
{% data reusables.user-settings.patv2-filters %}
1. Selecione cada token que você deseja aprovar ou rejeitar.
1. Selecione o menu suspenso **solicitação selecionada...** e clique em **Aprovar...** ou **Negar...** .
