---
title: Posso criar contas para as pessoas na minha organização?
intro: 'While you can add users to an organization you''ve created, you can''t create personal accounts on behalf of another person.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
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

## About personal accounts

Because you access an organization by logging in to a personal account, each of your team members needs to create their own personal account. Depois que você tiver nomes de usuário para cada pessoa que deseja adicionar à sua organização, você poderá adicionar os usuários às equipes.

{% ifversion fpt or ghec %}
{% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %}{% else %}You{% endif %} can use SAML single sign-on to centrally manage the access that personal accounts have to the organization's resources through an identity provider (IdP). Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %} .{% else %}."{% endif %}

Você também pode considerar {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}
{% endif %}

## Adicionar usuários à organização

1. Forneça a cada pessoa instruções para [criar uma conta pessoal](/articles/signing-up-for-a-new-github-account).
2. Peça o nome de usuário de cada pessoa a quem deseja conceder associação à organização.
3. [Convide as novas contas pessoais para ingressar](/articles/inviting-users-to-join-your-organization) na sua organização. Use as [funções da organização](/articles/permission-levels-for-an-organization) e [permissões de repositório](/articles/repository-permission-levels-for-an-organization) para limitar o acesso de cada conta.
