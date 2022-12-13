---
title: Convidar colaboradores para um repositório pessoal
intro: You can {% ifversion fpt or ghec %}invite users to become{% else %}add users as{% endif %} collaborators to your personal repository.
redirect_from:
- /articles/how-do-i-add-a-collaborator
- /articles/adding-collaborators-to-a-personal-repository
- /articles/inviting-collaborators-to-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
shortTitle: Invite collaborators
ms.openlocfilehash: 6db661abfc48b87ae7eae2c515be2e14e3717ec4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145084057"
---
Os repositórios de propriedade de uma organização podem conceder mais acesso granular. Para obter mais informações, confira "[Permissões de acesso do {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github)".

{% data reusables.organizations.org-invite-expiration %}

{% ifversion fpt or ghec %}

Se você for integrante de um {% data variables.product.prodname_emu_enterprise %}, você só poderá convidar outros integrantes da sua empresa para colaborar com você. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% note %}

**Observação:** o {% data variables.product.company_short %} limita o número de pessoas que podem ser convidadas para um repositório em um período de 24 horas. Se você exceder esse limite, aguarde 24 horas ou crie uma organização para colaborar com mais pessoas.

{% endnote %}

{% endif %}

1. Peça o nome de usuário da pessoa que você está convidando como colaborador.{% ifversion fpt or ghec %} Se ela ainda não tiver um nome de usuário, poderá se inscrever no {% data variables.product.prodname_dotcom %} Para obter mais informações, confira "[Como se inscrever em uma nova conta do {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account)".{% endif %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658%} {% data reusables.repositories.click-collaborators-teams %}
1. Clique em **Convidar um colaborador**.
  ![Botão "Convidar um colaborador"](/assets/images/help/repository/invite-a-collaborator-button.png)
2. No campo de pesquisa, comece a digitar o nome da pessoa que deseja convidar e, em seguida, clique em um nome na lista de correspondências.
  ![Campo de pesquisa usado para digitar o nome de uma pessoa para convidá-la para o repositório](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Clique em **Adicionar NOME ao REPOSITÓRIO**.
    ![Botão usado para adicionar um colaborador](/assets/images/help/repository/add-collaborator-user-repo.png) {% else %}
5. Na barra lateral esquerda, clique em **Colaboradores**.
![Barra lateral Configurações de repositório com a opção Colaboradores realçada](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. Em "Collaborators" (Colaboradores), comece a digitar o nome de usuário do colaborador.
7. Selecione o nome de usuário do colaborador no menu suspenso.
   ![Menu suspenso da lista Colaborador](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Clique em **Adicionar colaborador**.
   ![Botão "Adicionar colaborador"](/assets/images/help/repository/repo-settings-collab-add.png) {% endif %} {% ifversion fpt or ghec %}
9. O usuário receberá um e-mail com o convite para o repositório. Ao aceitar o convite, a pessoa terá acesso de colaborador ao seu repositório.
{% endif %}

## <a name="further-reading"></a>Leitura adicional

- "[Níveis de permissão para um repositório da conta pessoal](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)"
- "[Como remover um colaborador de um repositório pessoal](/articles/removing-a-collaborator-from-a-personal-repository)"
- "[Como remover a si mesmo de um repositório de colaborador](/articles/removing-yourself-from-a-collaborator-s-repository)"
- "[Como organizar membros em equipes](/organizations/organizing-members-into-teams)"
