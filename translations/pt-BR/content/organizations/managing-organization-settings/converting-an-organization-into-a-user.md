---
title: Converter uma organização em usuário
intro: 'Não é possível converter uma organização em uma conta de usuário pessoal, mas você pode criar uma conta de usuário e transferir para ela os repositórios da organização.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Organizations
  - Teams
---

{% if currentVersion == "free-pro-team@latest" %}

1. [Inscreva-se](/articles/signing-up-for-a-new-github-account) para uma nova conta de usuário do GitHub.
2. [Altere a função do usuário para um proprietário](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} na nova conta de usuário.
4. [Transfira cada repositório da organização](/articles/how-to-transfer-a-repository) para a nova conta de usuário.
5. [Exclua a organização](/articles/deleting-an-organization-account).
6. [Renomeie o usuário](/articles/changing-your-github-username) para o nome da organização.

{% else %}

1. Inscreva-se para uma nova conta de usuário do GitHub Enterprise GitHub Enterprise.
2. [Altere a função do usuário para um proprietário](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} na nova conta de usuário.
4. [Transfira cada repositório da organização](/articles/how-to-transfer-a-repository) para a nova conta de usuário.
5. [Exclua a organização](/articles/deleting-an-organization-account).
6. [Renomeie o usuário](/articles/changing-your-github-username) para o nome da organização.

{% endif %}
