---
title: Fazer merge de várias contas de usuário
intro: If you have separate accounts for work and personal use, you can merge the accounts.
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
shortTitle: Merge multiple personal accounts
ms.openlocfilehash: 128a6c99f8a6208150067bb2c3668557b184c255
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145083734"
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
3. [Exclua a conta](/articles/deleting-your-user-account) que não deseja mais usar.
4. Para atribuir commits anteriores à nova conta, adicione o endereço de e-mail que você usou para criar os commits para a conta que você está mantendo. Para obter mais informações, confira "[Por que minhas contribuições não aparecem no meu perfil?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"

## <a name="further-reading"></a>Leitura adicional

- "[Tipos de contas do {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
