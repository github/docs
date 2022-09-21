---
title: 'Compartilhando fluxos de trabalho, segredos e executores com a sua organização'
shortTitle: Sharing workflows with your organization
intro: 'Aprenda como usar recursos da organização para colaborar com a sua equipe, compartilhando fluxos de trabalho iniciantes, segredos e executores auto-hospedados.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: bf80624fe1118d424a57f7c22efab6368c914819
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884258'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral

Se você precisar compartilhar fluxos de trabalho e outros recursos de {% data variables.product.prodname_actions %} com a sua equipe, considere colaborar dentro de uma organização de {% data variables.product.prodname_dotcom %}. Uma organização permite que você armazene e gerencie, centralizadamente, segredos, artefatos e executores auto-hospedados. Crie também fluxos de trabalho iniciais no repositório `.github` e compartilhe-os com outros usuários da sua organização.

## Como compartilhar {% ifversion internal-actions %}ações e {% endif %}fluxos de trabalho

{% ifversion internal-actions %} Você pode compartilhar ações individuais e fluxos de trabalho inteiros com a organização, publicando ou não as ações ou os fluxos de trabalho publicamente. Você pode reutilizar ações e fluxos de trabalho exatamente referenciando-os no seu arquivo de fluxo de trabalho e você pode criar fluxos de trabalho iniciais que fornecem modelos para novos fluxos de trabalho.
{% else %} Sua organização pode compartilhar fluxos de trabalho reutilizando exatamente os fluxos de trabalho ou criando fluxos de trabalho indiretos que fornecem modelos para novos fluxos de trabalho.
{% endif %}

{% ifversion internal-actions %}
### Compartilhando ações com sua empresa

{% data reusables.actions.internal-actions-summary %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reutilizar fluxos de trabalho

{% data reusables.actions.reusable-workflows %} {% endif %}

### Usando fluxos de trabalho iniciais

{% data reusables.actions.workflow-organization-templates %} Para obter mais informações, confira "[Como criar fluxos de trabalho iniciais para sua organização](/actions/using-workflows/creating-starter-workflows-for-your-organization)".

## Compartilhar segredos dentro de uma organização

Você pode gerenciar seus segredos centralmente dentro de uma organização e, em seguida, disponibilizá-los para repositórios selecionados. Isso também significa que você pode atualizar um segredo em um único local e fazer com que a alteração seja aplicada em todos os fluxos de trabalho do repositório que usam o segredo.

Ao criar um segredo em uma organização, você pode usar uma política para limitar quais repositórios podem acessar esse segredo. Por exemplo, você pode conceder acesso a todos os repositórios ou limitar o acesso a apenas repositórios privados ou a uma lista específica de repositórios.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Clique em **Novo segredo**.
1. Digite um nome para o segredo na caixa de entrada **Nome**.
1. Insira o **Valor** do segredo.
1. Na lista suspensa **Acesso do repositório**, escolha uma política de acesso.
1. Clique em **Adicionar segredo**.

## Compartilhe executores auto-hospedados dentro de uma organização

Os administradores da organização podem adicionar seus executores auto-hospedados para grupos e, em seguida, criar políticas que controlam quais repositórios podem acessar o grupo.

Para obter mais informações, confira "[Como gerenciar o acesso a executores auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".


## Próximas etapas

Para continuar aprendendo sobre o {% data variables.product.prodname_actions %}, confira "[Como criar fluxos de trabalho iniciais para sua organização](/actions/using-workflows/creating-starter-workflows-for-your-organization)".
