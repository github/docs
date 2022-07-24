---
title: 'Compartilhando fluxos de trabalho, segredos e executores com a sua organização'
shortTitle: Compartilhar fluxos de trabalho com a sua organização
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão Geral

Se você precisar compartilhar fluxos de trabalho e outros recursos de {% data variables.product.prodname_actions %} com a sua equipe, considere colaborar dentro de uma organização de {% data variables.product.prodname_dotcom %}. Uma organização permite que você armazene e gerencie, centralizadamente, segredos, artefatos e executores auto-hospedados. Você também pode criar fluxos de trabalho iniciantes no repositório `.github` e compartilhá-los com outros usuários na sua organização.

## Compartilhando {% ifversion internal-actions %}ações e {% endif %}fluxos de trabalho

{% ifversion internal-actions %}
Você pode compartilhar ações individuais e fluxos de trabalho inteiros com sua organização, com ou sem publicar as ações ou fluxos de trabalho publicamente. Você pode reutilizar ações e fluxos de trabalho exatamente referenciando-os no seu arquivo de fluxo de trabalho e você pode criar fluxos de trabalho iniciais que fornecem modelos para novos fluxos de trabalho.
{% else %}
A sua organização pode compartilhar fluxos de trabalho reutilizando os fluxos de trabalho exatamente ou criando fluxos de trabalho iniciais que fornecem modelos para novos fluxos de trabalho.
{% endif %}

{% ifversion internal-actions %}
### Compartilhando ações com sua empresa

{% data reusables.actions.internal-actions-summary %}
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Reutilizando fluxos de trabalho

{% data reusables.actions.reusable-workflows %}
{% endif %}

### Usando fluxos de trabalho iniciais

{% data reusables.actions.workflow-organization-templates %} Para obter mais informações, consulte "[Criando fluxos de trabalho iniciais para a sua organização](/actions/using-workflows/creating-starter-workflows-for-your-organization)".

## Compartilhar segredos dentro de uma organização

Você pode gerenciar seus segredos centralmente dentro de uma organização e, em seguida, disponibilizá-los para repositórios selecionados. Isso também significa que você pode atualizar um segredo em um único local e fazer com que a alteração seja aplicada em todos os fluxos de trabalho do repositório que usam o segredo.

Ao criar um segredo em uma organização, você pode usar uma política para limitar quais repositórios podem acessar esse segredo. Por exemplo, você pode conceder acesso a todos os repositórios ou limitar o acesso a apenas repositórios privados ou a uma lista específica de repositórios.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.sidebar-secret %}
1. Clique em **Novo segredo**.
1. Digite um nome para o seu segredo na caixa de entrada **Nome**.
1. Insira o **Valor** para o seu segredo.
1. Na lista suspensa **Acesso do repositório**, escolha uma política de acesso.
1. Clique em **Add secret** (Adicionar segredo).

## Compartilhe executores auto-hospedados dentro de uma organização

Os administradores da organização podem adicionar seus executores auto-hospedados para grupos e, em seguida, criar políticas que controlam quais repositórios podem acessar o grupo.

Para obter mais informações, consulte "[Gerenciando acesso a runners auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".


## Próximas etapas

Para continuar aprendendo sobre {% data variables.product.prodname_actions %}, consulte "[Criando fluxos de trabalho iniciais para a sua organização](/actions/using-workflows/creating-starter-workflows-for-your-organization)".
