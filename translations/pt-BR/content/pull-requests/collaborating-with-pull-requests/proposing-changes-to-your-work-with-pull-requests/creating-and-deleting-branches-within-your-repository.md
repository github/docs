---
title: Criar e excluir branches no repositório
intro: 'Você pode criar ou excluir branches diretamente no {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create & delete branches
ms.openlocfilehash: 44b56d8a1884e5cbfe0832f291cdc244b57a3810
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526627'
---
## Criar um branch
Você pode criar um branch de maneiras diferentes no {% data variables.product.product_name %}.

{% note %}

**Observação:** você só pode criar um branch em um repositório ao qual tem acesso de push.

{% endnote %}

{% ifversion create-branch-from-overview %}
### Como criar um branch por meio da visão geral de branches
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Clique em **Novo branch**.
   ![Captura de tela da página de visão geral de branches com o botão Novo branch enfatizado](/assets/images/help/branches/new-branch-button.png)
2. Na caixa de diálogo, insira o nome do branch e, opcionalmente, altere a origem do branch.  
   Se o repositório for um fork, você também poderá selecionar o repositório upstream como a origem do branch.
   ![Captura de tela da caixa de diálogo modal de criação de branch para um fork com a origem do branch enfatizada](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. Clique em **Criar branch**.
   ![Captura de tela do modal de criação de branch com o botão de criação de branch enfatizado](/assets/images/help/branches/branch-creation-popup-button.png) {% endif %}

### Criar um branch usando a lista suspensa de branches
{% data reusables.repositories.navigate-to-repo %}
1. Opcionalmente, se você quiser o branch com base em um branch diferente do padrão do repositório, clique em {% octicon "git-branch" aria-label="The branch icon" %} **Branches** e escolha outro branch.
    ![Link Branches na página de visão geral](/assets/images/help/branches/branches-overview-link.png)
1. Clique no menu seletor de branch.
    ![menu seletor de branch](/assets/images/help/branch/branch-selection-dropdown.png)
1. Digite um nome exclusivo para seu novo branch e selecione **Criar branch**.
    ![caixa de texto de criação de branch](/assets/images/help/branch/branch-creation-text-box.png)
    
{% ifversion fpt or ghec or ghes > 3.4 %}
### Criando um branch para um problema
Você pode criar um branch para trabalhar em um problema diretamente da página de problemas e começar imediatamente. Para obter mais informações, confira "[Como criar um branch para trabalhar em um problema](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)".
{% endif %}

## Excluir um branch

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Observação:** se o branch que você deseja excluir for o branch padrão do repositório, você precisará escolher um novo branch padrão antes de excluir o branch. Para obter mais informações, confira "[Como alterar o branch padrão](/github/administering-a-repository/changing-the-default-branch)".

{% endnote %}

Se o branch que você deseja excluir estiver associado a um pull request aberto, você deverá fazer o merge ou fechar o pull request antes de excluir o branch. Para obter mais informações, confira "[Como mesclar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)" ou "[Como fechar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Role a página até o branch que deseja excluir e clique em {% octicon "trash" aria-label="The trash icon to delete the branch" %}.
    ![exclua o branch](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. Se tentar excluir um branch associado a pelo menos uma solicitação de pull aberta, você deverá confirmar se pretende fechar as solicitações de pull.
   
   ![Confirmar a exclusão de um branch](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %} Para obter mais informações, confira "[Sobre os branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

## Leitura adicional

- "[Sobre os branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Como ver os branches no repositório](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[Como excluir e restaurar branches em uma solicitação de pull](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
