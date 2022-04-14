---
title: Converter uma organização em usuário
intro: 'It''s not possible to convert an organization into a personal account, but you can create a new personal account and transfer the organization''s repositories to it.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Converter organização em usuário
---

{% ifversion fpt or ghec %}

{% note %}

**Observação**: Depois que uma conta é excluída, o nome de usuário no momento da exclusão ficará indisponível para reutilização por 90 dias. Para reutilizar o nome de usuário de uma organização imediatamente, você deverá alterar o nome de usuário antes de excluir a organização.

 {% endnote %}

1. [Sign up](/articles/signing-up-for-a-new-github-account) for a new account on GitHub.
2. [Altere a função do usuário para um proprietário](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} to the new personal account.
4. [Transfer each organization repository](/articles/how-to-transfer-a-repository) to the new personal account.
5. [Renomeie a organização](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username) para tornar o nome de usuário atual disponível.
6. [Renomeie o usuário](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username) para o nome da organização.
7. [Exclua a organização](/organizations/managing-organization-settings/deleting-an-organization-account).


{% else %}

1. Sign up for a new GitHub Enterprise personal account.
2. [Altere a função do usuário para um proprietário](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} to the new personal account.
4. [Transfer each organization repository](/articles/how-to-transfer-a-repository) to the new personal account.
5. [Exclua a organização](/articles/deleting-an-organization-account).
6. [Renomeie o usuário](/articles/changing-your-github-username) para o nome da organização.

{% endif %}
