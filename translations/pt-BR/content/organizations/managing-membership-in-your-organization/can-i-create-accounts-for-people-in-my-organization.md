---
title: Posso criar contas para as pessoas na minha organização?
intro: 'Embora você possa adicionar usuários a uma organização que criou, não é possível criar contas de usuário pessoais em nome de outra pessoa.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization/
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Criar contas para pessoas
---

## About user accounts

Because you access an organization by logging in to a user account, each of your team members needs to create their own user account. After you have usernames for each person you'd like to add to your organization, you can add the users to teams.

{% ifversion fpt or ghec %}
If you need greater control over the user accounts of your organization members, consider {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}
{% endif %}

## Adicionar usuários à organização

1. Provide each person instructions to [create a user account](/articles/signing-up-for-a-new-github-account).
2. Peça o nome de usuário de cada pessoa a quem deseja conceder associação à organização.
3. [Convide as novas contas pessoais para ingressar](/articles/inviting-users-to-join-your-organization) na sua organização. Use as [funções da organização](/articles/permission-levels-for-an-organization) e [permissões de repositório](/articles/repository-permission-levels-for-an-organization) para limitar o acesso de cada conta.
