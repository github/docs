---
title: Como impor políticas para tokens de acesso pessoal na empresa
intro: 'Os proprietários corporativos podem controlar se querem permitir {% data variables.product.pat_v2 %}s e {% data variables.product.pat_v1_plural %} e podem exigir aprovação para {% data variables.product.pat_v2 %}s.'
versions:
  feature: pat-v2-enterprise
shortTitle: '{% data variables.product.pat_generic_caps %} policies'
ms.openlocfilehash: 6252f7ac67fe77cbe20ab85ff2cbd6f04ac17905
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107002'
---
{% note %}

**Observação**: {% data reusables.user-settings.pat-v2-beta %}

Durante a versão beta, as empresas precisam aceitar {% data variables.product.pat_v2 %}s. Se a empresa ainda não aceitou, será solicitado que você aceite e defina políticas ao seguir as etapas abaixo.

Mesmo que uma empresa não tenha aceitado {% data variables.product.pat_v2 %}s, as organizações pertencentes à empresa ainda poderão aceitar. Todos os usuários, incluindo {% data variables.product.prodname_emus %}, podem criar {% data variables.product.pat_v2 %}s que podem acessar recursos pertencentes ao usuário (como repositórios criados na conta), mesmo que a empresa não tenha aceitado {% data variables.product.pat_v2 %}s.

{% endnote %}

## Como restringir o acesso de {% data variables.product.pat_v2 %}s

Os proprietários corporativos podem impedir que {% data variables.product.pat_v2 %}s acessem recursos privados e internos pertencentes à empresa. Os {% data variables.product.pat_v2_caps %}s ainda poderão acessar os recursos públicos da organização. Essa configuração controla apenas o acesso de {% data variables.product.pat_v2 %}s, não de {% data variables.product.pat_v1_plural %}. Para obter mais informações de como restringir o acesso de {% data variables.product.pat_v1_plural %}, confira "[Como restringir o acesso de {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" nesta página.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. Em "{% octicon "law" aria-label="The law icon" %} **Políticas**, clique em **Organizações**.
1. Em **Exigir aprovação por meio de {% data variables.product.pat_v2 %}s**, selecione a opção que atende às suas necessidades:
   - **Permitir que as organizações configurem os requisitos de acesso**: cada organização pertencente à empresa pode decidir se deseja restringir o acesso de {% data variables.product.pat_v2 %}s.
   - **Restringir o acesso por meio de {% data variables.product.pat_v2 %}s**: {% data variables.product.pat_v2_caps %}s não podem acessar recursos pertencentes à organização. As chaves SSH criadas por {% data variables.product.pat_v2 %}s continuarão funcionando. As organizações não podem substituir essa configuração.
   - **Permitir o acesso por meio de {% data variables.product.pat_v2 %}s**: {% data variables.product.pat_v2_caps %}s podem acessar recursos pertencentes à organização. As organizações não podem substituir essa configuração.
1. Clique em **Save** (Salvar).

## Como impor uma política de aprovação para {% data variables.product.pat_v2 %}s

Os proprietários corporativos podem exigir que todas as organizações pertencentes à empresa aprovem cada {% data variables.product.pat_v2 %} que possa acessar a organização. Os {% data variables.product.pat_v2_caps %}s ainda poderão ler os recursos públicos da organização sem aprovação. Por outro lado, os proprietários corporativos podem permitir que {% data variables.product.pat_v2 %}s acessem organizações na empresa sem aprovação prévia. Os proprietários corporativos também podem permitir que cada organização na empresa escolha as próprias configurações de aprovação.

{% note %}

**Observação**: somente {% data variables.product.pat_v2 %}s, não {% data variables.product.pat_v1_plural %}, estão sujeitos à aprovação. A menos que a organização ou a empresa tenha acesso restrito de {% data variables.product.pat_v1_plural %}, qualquer {% data variables.product.pat_v1 %} pode acessar os recursos da organização sem aprovação prévia. Para obter mais informações de como restringir {% data variables.product.pat_v1_plural %}, confira "[Como restringir o acesso de {% data variables.product.pat_v1_plural %}](#restricting-access-by-personal-access-tokens-classic)" nesta página e "[Como definir uma política de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. Em "{% octicon "law" aria-label="The law icon" %} **Políticas**, clique em **Organizações**.
1. Em **Exigir aprovação de {% data variables.product.pat_v2 %}s**, selecione a opção que atende às suas necessidades:
   - **Permitir que as organizações configurem os requisitos de aprovação**: cada organização pertencente à empresa pode decidir se precisa aprovar {% data variables.product.pat_v2 %} que possam acessar a organização.
   - **Exigir que as organizações usem o fluxo de aprovação**: todas as organizações pertencentes à empresa precisam aprovar cada {% data variables.product.pat_v2 %} que possa acessar a organização. Os {% data variables.product.pat_v2_caps %}s criados pelos proprietários da organização não precisarão de aprovação. As organizações não podem substituir essa configuração.
   - **Desabilitar o fluxo de aprovação em todas as organizações**: {% data variables.product.pat_v2_caps %}s criados por membros da organização podem acessar organizações pertencentes à empresa sem aprovação prévia. As organizações não podem substituir essa configuração.
1. Clique em **Save** (Salvar).

## Como restringir o acesso de {% data variables.product.pat_v1_plural %}

Os proprietários corporativos podem impedir que {% data variables.product.pat_v1_plural %} acessem a empresa e as organizações pertencentes à empresa. Os {% data variables.product.pat_v1_caps_plural %} ainda poderão acessar os recursos públicos da organização. Essa configuração controla apenas o acesso de {% data variables.product.pat_v1_plural %}, não de {% data variables.product.pat_v2 %}s. Para obter mais informações de como restringir o acesso de {% data variables.product.pat_v2 %}s, confira "[Como restringir o acesso de {% data variables.product.pat_v2 %}s](#restricting-access-by-fine-grained-personal-access-tokens)" nesta página.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. Em "{% octicon "law" aria-label="The law icon" %} **Políticas**, clique em **Organizações**.
1. Em **Restringir o acesso de {% data variables.product.pat_v1_plural %} às organizações**, selecione a opção que atende às suas necessidades:
   - **Permitir que as organizações configurem os requisitos de acesso do {% data variables.product.pat_v1_plural %}** : cada organização pertencente à empresa pode decidir se deseja restringir o acesso de {% data variables.product.pat_v1_plural %}.
   - **Restringir acesso por meio de {% data variables.product.pat_v1_plural %}** : {% data variables.product.pat_v1_caps_plural %} não podem acessar a empresa nem as organizações pertencentes à empresa. As chaves SSH criadas por {% data variables.product.pat_v1_plural %}s continuarão funcionando. As organizações não podem substituir essa configuração.
   - **Permitir acesso por meio de {% data variables.product.pat_v1_plural %}** : {% data variables.product.pat_v1_caps_plural %} podem acessar a empresa e as organizações pertencentes à empresa. As organizações não podem substituir essa configuração.
1. Clique em **Save** (Salvar).
