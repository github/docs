---
title: Excluir sua conta de usuário
intro: You can delete your personal account on {% data variables.product.product_name %} at any time.
redirect_from:
- /articles/deleting-a-user-account
- /articles/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Delete your personal account
ms.openlocfilehash: fe18309f93bdb4124fa5a58d22ab7a93b451e6e1
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145083752"
---
A exclusão da conta pessoal remove todos os repositórios, bifurcações de repositórios privados, wikis, problemas, solicitações de pull e páginas pertencentes à sua conta. {% ifversion fpt or ghec %} Os problemas e as solicitações de pull que você criou e os comentários que você fez em repositórios pertencentes a outros usuários não serão excluídos. Em vez disso, eles serão associados ao [usuário fantasma](https://github.com/ghost).{% else %}Os problemas e as solicitações de pull que você criou e os comentários que você fez em repositórios pertencentes a outros usuários não serão excluídos.{% endif %}

{% ifversion fpt or ghec %} Ao excluir a sua conta, nós paramos de cobrar você. O endereço de e-mail associado à conta fica disponível para uso com uma conta diferente no {% data variables.product.product_location %}. Após 90 dias, o nome da conta também fica disponível para qualquer pessoa usar em uma nova conta. {% endif %}

Se você for o único proprietário de uma organização, transfira a propriedade para outra pessoa ou exclua a organização para poder excluir sua conta pessoal. Caso haja outros proprietários na organização, remova a si mesmo da organização para poder excluir sua conta pessoal.

Para obter mais informações, consulte:
- "[Como transferir a propriedade da organização](/articles/transferring-organization-ownership)"
- "[Como excluir uma conta da organização](/articles/deleting-an-organization-account)"
- "[Como remover a si mesmo de uma organização](/articles/removing-yourself-from-an-organization/)"

## <a name="back-up-your-account-data"></a>Fazer backup dos dados da conta

Para excluir sua conta pessoal, faça uma cópia de todos os repositórios, bifurcações privadas, wikis, problemas e pull requests pertencentes à sua conta.

{% warning %}

**Aviso:** depois que a sua conta pessoal for excluída, o GitHub não poderá restaurar seu conteúdo.

{% endwarning %}

## <a name="delete-your-personal-account"></a>Excluir sua conta pessoal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Na parte inferior da página Configurações da Conta, em "Excluir conta", clique em **Excluir sua conta**. Para excluir sua conta pessoal:
    - Se você for o único proprietário da organização, transfira a propriedade para outra pessoa ou exclua sua organização.
    - Caso haja outros proprietários na organização, remova a si mesmo da organização.
   ![Botão Exclusão de conta](/assets/images/help/settings/settings-account-delete.png)
4. Na caixa de diálogo "Verifique se você deseja fazer isso", conclua as etapas para confirmar o que acontece quando sua conta é excluída: ![Caixa de diálogo de confirmação de exclusão da conta](/assets/images/help/settings/settings-account-deleteconfirm.png) {% ifversion fpt or ghec %}– Lembre-se de que todos os repositórios, os forks de repositórios privados, os wikis, os problemas, as solicitações de pull e os sites do {% data variables.product.prodname_pages %} pertencentes à sua conta serão excluídos, sua cobrança será encerrada imediatamente e seu nome de usuário ficará disponível para uso de qualquer pessoa no {% data variables.product.product_name %} após 90 dias.
  {% else %}- Lembre-se de que todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas pertencentes à sua conta serão excluídos e seu nome de usuário ficará disponível para ser usado por qualquer pessoa no {% data variables.product.product_name %}.
  {% endif %}- No primeiro campo, digite seu nome de usuário ou e-mail do {% data variables.product.product_name %}.
    - No segundo campo, digite a frase do prompt.
