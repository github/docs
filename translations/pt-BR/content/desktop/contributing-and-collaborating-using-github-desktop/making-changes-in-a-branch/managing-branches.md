---
title: Gerenciar branches
intro: Você pode criar um branch fora do branch-padrão de um repositório para poder experimentar as alterações com segurança.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-branches
versions:
  fpt: '*'
ms.openlocfilehash: 30604c6b3ed0ab9ca5c0f3f8ca0fe853624ee86b
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886963'
---
## Sobre o gerenciamento de branches
Você pode usar os branches para experimentar com segurança as alterações no seu projeto. Os branches isolam seu trabalho de desenvolvimento de outros branches do repositório. Por exemplo, você poderia usar um branch para desenvolver um novo recurso ou corrigir um erro.

Você sempre cria um branch a partir de um branch existente. Normalmente, você pode criar um branch a partir do branch-padrão do seu repositório. Você então poderá trabalhar nesse novo branch isolado das mudanças que outras pessoas estão fazendo no repositório.

Você também pode criar um branch a partir de um commit anterior no histórico de um branch. Isso pode ser útil se você precisar retornar a uma visão anterior do repositório para investigar um erro ou para criar uma correção em cima de sua versão mais recente.

Quando estiver satisfeito com seu trabalho, você poderá criar um pull request para fazer merge nas suas alterações no branch atual em outro branch. Para obter mais informações, confira "[Como criar um problema ou uma solicitação de pull](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" e "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".

É sempre possível criar um branch no {% data variables.product.prodname_desktop %}, se tiver acesso de leitura a um repositório, mas você só pode fazer push do branch para o {% data variables.product.prodname_dotcom %} se você tiver acesso de gravação no repositório.

{% data reusables.desktop.protected-branches %}

## Criar um branch

{% tip %}

**Dica:** o primeiro branch criado será baseado no branch padrão. Se você tiver mais de um branch, você pode escolher basear o novo branch no branch atualmente verificado ou no branch-padrão.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![Menu suspenso usado para alternar o branch atual](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.create-new-branch %} ![Opção Novo Branch no menu Branch](/assets/images/help/desktop/new-branch-button-mac.png) {% data reusables.desktop.name-branch %} ![Campo usado para criar um nome para o novo branch](/assets/images/help/desktop/create-branch-name-mac.png) {% data reusables.desktop.select-base-branch %} ![Opções do branch base](/assets/images/help/desktop/create-branch-choose-branch-mac.png) {% data reusables.desktop.confirm-new-branch-button %} ![Botão Criar Branch](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![Menu suspenso usado para alternar o branch atual](/assets/images/help/desktop/click-branch-in-drop-down-win.png) {% data reusables.desktop.create-new-branch %} ![Opção Novo Branch no menu Branch](/assets/images/help/desktop/new-branch-button-win.png) {% data reusables.desktop.name-branch %} ![Campo usado para criar um nome para o novo branch](/assets/images/help/desktop/create-branch-name-win.png) {% data reusables.desktop.select-base-branch %} ![Opções do branch base](/assets/images/help/desktop/create-branch-choose-branch-win.png) {% data reusables.desktop.confirm-new-branch-button %} ![Botão Criar branch](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

## Criando um branch de um commit anterior

{% data reusables.desktop.history-tab %}
2. Clique com o botão direito do mouse no commit com base no qual deseja criar um branch e selecione **Criar Branch com base no Commit**.
  ![Menu de contexto Criar branch com base no commit](/assets/images/help/desktop/create-branch-from-commit-context-menu.png) {% data reusables.desktop.name-branch %} {% data reusables.desktop.confirm-new-branch-button %} ![Criar branch com base no commit](/assets/images/help/desktop/create-branch-from-commit-overview.png)

## Publicar um branch

Se você criar um branch no {% data variables.product.product_name %}, você deverá publicá-lo para disponibilizá-lo para colaboração no {% data variables.product.prodname_dotcom %}.

1. Na parte superior do aplicativo, clique em {% octicon "git-branch" aria-label="The branch icon" %} **Branch Atual** e clique no branch que deseja publicar.
  ![Menu suspenso usado para selecionar o branch que será publicado](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. Clique em **Publicar branch**.
  ![Botão Publicar branch](/assets/images/help/desktop/publish-branch-button.png)

## Alternar entre branches
É possível exibir e fazer commits em qualquer branch do seu repositório. Se houver alterações salvas sem commit, você terá que decidir o que fazer com elas antes de poder alternar entre os branches. Você pode fazer o commit das alterações no branch atual, ocultar as suas alterações para salvá-las temporariamente no branch atual ou trazer as mudanças para seu novo branch. Caso deseje fazer commit das alterações antes de alternar branches, confira "[Como fazer commit de alterações no seu projeto e revisá-las](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)".
{% tip %}

**Dica**: você pode definir um comportamento padrão para alternar branches nas configurações **Avançadas**. Para obter mais informações, confira "[Como definir configurações básicas](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

{% endtip %}

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.switching-between-branches %} ![Lista de branches no repositório](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. Se você tiver alterações salvas e sem commit, escolha **Manter minhas alterações** ou **Levar minhas alterações** e clique em **Alternar Branch**.
  ![Alternar branch com opções de alterações](/assets/images/help/desktop/stash-changes-options.png)

## Excluir um branch

Não é possível excluir um branch se ele estiver atualmente associado a uma pull request aberta. Não é possível desfazer a exclusão de um branch.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %} ![Menu suspenso usado para selecionar o branch que será excluído](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-mac %} ![Opção Excluir… no menu Branch](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %} ![Menu suspenso usado para selecionar o branch que será excluído](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-win %} ![Opção Excluir… no menu Branch](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

## Leitura adicional

- "[Como clonar um repositório do {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)"
- "[Branch](/articles/github-glossary/#branch)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Sobre os branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Visão rápida sobre os branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" na documentação do Git
- "[Como fazer stash de alterações](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)"
