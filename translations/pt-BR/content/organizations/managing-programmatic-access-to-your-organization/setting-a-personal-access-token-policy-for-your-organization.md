---
title: Como configurar uma política de token de acesso pessoal para a organização
intro: 'Os proprietários da organização podem controlar se querem permitir {% data variables.product.pat_v2 %}s e {% data variables.product.pat_v1_plural %} e podem exigir aprovação para {% data variables.product.pat_v2 %}s.'
versions:
  feature: pat-v2
shortTitle: Set a token policy
ms.openlocfilehash: 6e05b65ae6814ef9101ed91fdd4a68435e4ba291
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106466'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Como restringir o acesso de {% data variables.product.pat_v2 %}s

Os proprietários da organização podem impedir que {% data variables.product.pat_v2 %}s acessem recursos pertencentes à organização. Os {% data variables.product.pat_v2_caps %}s ainda poderão ler os recursos públicos da organização. Essa configuração controla apenas o acesso de {% data variables.product.pat_v2 %}s, não de {% data variables.product.pat_v1_plural %}. Para obter mais informações de como restringir o acesso de {% data variables.product.pat_v1_plural %}, confira "[Como restringir o acesso de {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" nesta página.

{% ifversion ghec or ghes or ghae %} Se a organização pertence a uma empresa e o proprietário corporativo tem acesso restrito de {% data variables.product.pat_v2 %}s, você não pode substituir a política na organização. Para obter mais informações, confira "[Como impor políticas para {% data variables.product.pat_generic %}s na empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)".{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na barra lateral esquerda, em **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, clique em **Configurações**.
1. Em **{% data variables.product.pat_v2_caps %}s**, selecione a opção que atende às suas necessidades:
   - **Permitir acesso por meio de {% data variables.product.pat_v2 %}s**: {% data variables.product.pat_v2_caps %}s podem acessar recursos pertencentes à organização.
   - **Restringir acesso por meio de {% data variables.product.pat_v2 %}s**: {% data variables.product.pat_v2_caps %}s não podem acessar recursos pertencentes à organização. As chaves SSH criadas por {% data variables.product.pat_v2 %}s continuarão funcionando.
1. Clique em **Save** (Salvar).

## Como impor uma política de aprovação para {% data variables.product.pat_v2 %}s

Os proprietários da organização podem exigir aprovação para cada {% data variables.product.pat_v2 %} que pode acessar a organização. Os {% data variables.product.pat_v2_caps %}s ainda poderão ler os recursos públicos da organização sem aprovação. Os {% data variables.product.pat_v2_caps %}s criados pelos proprietários da organização não precisarão de aprovação.

{% ifversion ghec or ghes or ghae %} Se a organização pertence a uma empresa e o proprietário corporativo definiu uma política de aprovação para {% data variables.product.pat_v2 %}s, você não pode substituir a política na organização. Para obter mais informações, confira "[Como impor políticas para {% data variables.product.pat_generic %}s na empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)".{% endif %}

{% note %}

**Observação**: somente {% data variables.product.pat_v2 %}s, não {% data variables.product.pat_v1_plural %}, estão sujeitos à aprovação. A menos que a organização tenha acesso restrito de {% data variables.product.pat_v1_plural %}, qualquer {% data variables.product.pat_v1 %} pode acessar os recursos da organização sem aprovação prévia. Para obter mais informações, confira "[Como restringir o acesso por {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" nesta página.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na barra lateral esquerda, em **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, clique em **Configurações**.
1. Em **Exigir aprovação de {% data variables.product.pat_v2 %}s**, selecione a opção que atende às suas necessidades:
   - **Exigir aprovação do administrador**: um proprietário da organização precisa aprovar cada {% data variables.product.pat_v2 %} que possa acessar a organização. Os {% data variables.product.pat_v2_caps %}s criados pelos proprietários da organização não precisarão de aprovação.
   - **Não exigir aprovação do administrador**: {% data variables.product.pat_v2_caps %}s criados por membros da organização podem acessar recursos na organização sem aprovação prévia.
1. Clique em **Save** (Salvar).

## Como restringir o acesso de {% data variables.product.pat_v1_plural %}

Os proprietários da organização podem impedir que {% data variables.product.pat_v1_plural %} acessem recursos pertencentes à organização. Os {% data variables.product.pat_v1_caps_plural %} ainda poderão ler os recursos públicos da organização. Essa configuração controla apenas o acesso de {% data variables.product.pat_v1_plural %}, não de {% data variables.product.pat_v2 %}s. Para obter mais informações de como restringir o acesso de {% data variables.product.pat_v2 %}s, confira "[Como restringir o acesso de {% data variables.product.pat_v2 %}s](#restricting-access-by-fine-grained-personal-access-tokens)" nesta página.

{% ifversion ghec or ghes or ghae %} Se a organização pertence a uma empresa e o proprietário corporativo tem acesso restrito de {% data variables.product.pat_v1_plural %}, você não pode substituir a política na organização. Para obter mais informações, confira "[Como impor políticas para {% data variables.product.pat_generic %}s na empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)".{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na barra lateral esquerda, em **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, clique em **Configurações**.
1. Em **{% data variables.product.pat_v1_caps %}** , selecione a opção que atende às suas necessidades:
   - **Permitir acesso por meio de {% data variables.product.pat_v1_plural %}** : {% data variables.product.pat_v1_caps_plural %} podem acessar recursos pertencentes à organização.
   - **Restringir acesso por meio de {% data variables.product.pat_v1_plural %}** : {% data variables.product.pat_v1_caps_plural %} não podem acessar recursos pertencentes à organização. As chaves SSH criadas por {% data variables.product.pat_v1_plural %}s continuarão funcionando.
1. Clique em **Save** (Salvar).
