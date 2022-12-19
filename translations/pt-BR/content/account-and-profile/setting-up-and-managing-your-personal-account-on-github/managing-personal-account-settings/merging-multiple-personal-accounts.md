---
title: Mesclando várias contas pessoais
intro: Se você tem contas separadas para o trabalho e uso pessoal, é possível fazer merge das contas.
redirect_from:
- /articles/can-i-merge-two-accounts
- /articles/keeping-work-and-personal-repositories-separate
- /articles/merging-multiple-user-accounts
- /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
- /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Merge multiple personal accounts
ms.openlocfilehash: 71e2b280fad682f3ee8e9ac85141aedc3bde3d06
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145164663"
---
{% tip %}

{% ifversion ghec %}

**Dica:** os {% data variables.product.prodname_emus %} permitem que uma empresa provisione contas pessoais exclusivas para os membros por meio de um IdP (provedor de identidade). Para obter mais informações, confira "[Sobre os Usuários Gerenciados Corporativos](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)". Para outros casos de uso, recomendamos usar apenas uma conta pessoal para gerenciar repositórios pessoais e profissionais.

{% else %}

**Dica:** recomendamos usar apenas uma conta pessoal para gerenciar repositórios pessoais e profissionais. 

{% endif %}

{% endtip %}

{% warning %}

**Aviso:** 
- As permissões de acesso de organização e de repositório não são transferíveis entre contas. Se a conta que você deseja excluir tiver uma permissão de acesso existente, um proprietário ou administrador de repositório da organização precisará convidar a conta que você deseja manter.
- Os commits criados com um endereço de email `noreply` fornecido pelo GitHub não podem ser transferidos de uma conta para outra. Se a conta que você deseja excluir tiver usado a opção **Manter meu endereço de email privado**, não será possível transferir os commits criados pela conta que você está excluindo para a conta que deseja manter.

{% endwarning %}

1. [Transfira todos os repositórios](/articles/how-to-transfer-a-repository) da conta que deseja excluir para a conta que deseja manter. Os problemas, pull requests e wikis também serão transferidos. Verifique se os repositórios estão na conta que você quer manter.
2. [Atualize as URLs remotas](/github/getting-started-with-github/managing-remote-repositories) em todos os clones locais dos repositórios que foram movidos.
3. [Exclua a conta](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account) que não deseja mais usar.
4. Para atribuir commits anteriores à nova conta, adicione o endereço de e-mail que você usou para criar os commits para a conta que você está mantendo. Para obter mais informações, confira "[Por que minhas contribuições não aparecem no meu perfil?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"

## <a name="further-reading"></a>Leitura adicional

- "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
