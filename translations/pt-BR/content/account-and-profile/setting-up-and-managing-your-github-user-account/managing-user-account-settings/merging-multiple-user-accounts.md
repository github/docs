---
title: Fazer merge de várias contas de usuário
intro: 'Se você tem contas separadas para o trabalho e uso pessoal, é possível fazer merge das contas.'
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Fazer merge de várias contas pessoais
---

{% tip %}

{% ifversion ghec %}

**Dica:** {% data variables.product.prodname_emus %} permite que uma empresa forneça contas pessoais únicas para seus integrantes por meio de um provedor de identidade (IdP). Para obter mais informações, consulte[Sobre usuários gerenciados pela empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)". Para outros casos de uso, recomendamos usar apenas uma conta pessoal para gerenciar repositórios pessoais e profissionais.

{% else %}

**Dica:** Recomendamos usar apenas uma conta pessoal para gerenciar repositórios pessoais e profissionais.

{% endif %}

{% endtip %}

{% warning %}

**Aviso:**
- As permissões de organização e acesso ao repositório não podem ser transferidas entre contas. Se a conta que você deseja excluir tiver uma permissão de acesso existente, um proprietário ou administrador de repositório da organização precisará convidar a conta que você deseja manter.
- Qualquer commit criado com um endereço de e-mail `noreply` fornecido pelo GitHub não pode ser transferido de uma conta para outra. Se a conta que você deseja excluir usou a opção **Manter o meu endereço de e-mail privado** opção, não será possível transferir os commits criados pela conta que você está excluindo para a conta que você deseja manter.

{% endwarning %}

1. [Transfira quaisquer repositórios](/articles/how-to-transfer-a-repository) da conta que você quer excluir para a conta que quer manter. Os problemas, pull requests e wikis também serão transferidos. Verifique se os repositórios estão na conta que você quer manter.
2. [Atualize as URLs remote](/github/getting-started-with-github/managing-remote-repositories) em quaisquer clones locais dos repositórios que foram movidos.
3. [Exclua a conta](/articles/deleting-your-user-account) que não quer mais usar.
4. Para atribuir commits anteriores à nova conta, adicione o endereço de e-mail que você usou para criar os commits para a conta que você está mantendo. Para obter mais informações, consulte "[Por que minhas contribuições não aparecem no meu perfil?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"

## Leia mais

- "[Tipos de conta do {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
