---
title: Converter um usuário em uma organização
redirect_from:
- /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
- /articles/explaining-the-account-transformation-warning
- /articles/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: You can convert your personal account into an organization. This allows more granular permissions for repositories that belong to the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: User into an organization
ms.openlocfilehash: 0c167e3e389230e6ac2dccb9f1f2f3dc67791bd0
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145065616"
---
{% warning %}

**Aviso**: antes de converter um usuário em uma organização, tenha esses pontos em mente:

 - Você **não poderá mais** entrar na conta pessoal convertida.
 - Você **não poderá mais** criar nem modificar gists pertencentes à conta pessoal convertida.
 - Uma organização **não poderá** ser convertida novamente em um usuário.
 - As chaves SSH, os tokens OAuth, os perfil de trabalho, as reações e as informações de usuário associadas **não** serão transferidas para a organização. Isso só vale para a conta pessoal que está sendo convertida, não para os colaboradores da conta pessoal.
 - Todos os commits feitos com a conta pessoal convertida **não serão mais vinculados** a essa conta. Os commits em si **permanecerão** intactos.
 - Todas as bifurcações de repositórios privados feitas com a conta pessoal convertida serão excluídas.

{% endwarning %}

## <a name="keep-your-personal-account-and-create-a-new-organization-manually"></a>Mantenha sua conta pessoal e crie uma organização manualmente

Se você quiser que sua organização tenha o mesmo nome que você está usando atualmente para sua conta pessoal ou se quiser manter as informações de sua conta pessoal intactas, crie uma organização e transfira seus repositórios para ela em vez de converter sua conta pessoal em uma organização.

1. Para manter o nome da conta pessoal atual para uso pessoal, [altere o nome da sua conta pessoal](/articles/changing-your-github-username) para algo novo e interessante.
2. [Crie uma organização](/articles/creating-a-new-organization-from-scratch) com o nome original de sua conta pessoal.
3. [Transfira seus repositórios](/articles/transferring-a-repository) para sua nova conta de organização.

## <a name="convert-your-personal-account-into-an-organization-automatically"></a>Converter sua conta pessoal em uma organização automaticamente

Você também pode converter sua conta pessoal diretamente em uma organização. A conversão da conta:
 - Preserva os repositórios como estão sem a necessidade de transferi-los para outra conta manualmente
 - Convida automaticamente colaboradores para equipes com permissões equivalentes ao que tinham antes de {% ifversion fpt or ghec %}- Para contas pessoais no {% data variables.product.prodname_pro %}, faz a transição automática da cobrança para [os {% data variables.product.prodname_team %} pagos](/articles/about-billing-for-github-accounts) sem a necessidade de inserir novamente as informações de pagamento, ajustar o ciclo de cobrança ou pagar em duplicidade a qualquer momento{% endif %}

1. Crie uma conta pessoal, que você usará para entrar no GitHub e acessar a organização e seus repositórios após conversão.
2.  [Saia de todas as organizações](/articles/removing-yourself-from-an-organization) em que a conta pessoa que você está convertendo tenha ingressado.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %}
5. Em "Transformar conta", clique em **Transformar <username> em uma organização**.
    ![Botão de conversão da organização](/assets/images/help/settings/convert-to-organization.png)
6. Na caixa de diálogo Account Transformation Warning (Aviso de transformação da conta), revise e confirme a conversão. Observe que as informações nessa caixa são as mesmas do aviso no início deste artigo.
    ![Aviso de conversão](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. Na página "Transform your user into an organization" (Transformar usuário em uma organização), em "Choose an organization owner" (Escolher um proprietário da organização), escolha a conta pessoal secundária que você criou na seção anterior ou outro usuário em que confia para gerenciar a organização.
    ![Página Adicionar proprietário da organização](/assets/images/help/organizations/organization-add-owner.png)
8. Escolha a assinatura da nova organização e insira as informações de cobrança se solicitado.
9. Clique em **Criar Organização**.
10. Entre na nova conta pessoal que você criou na etapa um e use alternância de contexto para acessar sua nova organização.

{% tip %}

**Dica**: ao converter uma conta pessoal em uma organização, adicionaremos colaboradores em repositórios que pertencem à conta da nova organização como *colaboradores externos*. Em seguida, você poderá convidar *colaboradores externos* para se tornarem membros da sua nova organização, se desejar. Para obter mais informações, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)".

{% endtip %}

## <a name="further-reading"></a>Leitura adicional
- "[Como configurar equipes](/articles/setting-up-teams)" {% ifversion fpt or ghec %}– "[Como convidar usuários para ingressar na sua organização](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Como acessar uma organização](/articles/accessing-an-organization)"
