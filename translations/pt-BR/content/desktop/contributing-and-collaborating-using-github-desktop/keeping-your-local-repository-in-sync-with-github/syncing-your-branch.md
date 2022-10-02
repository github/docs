---
title: Sincronizar o branch
intro: 'Uma vez feito o push dos commits para o seu projeto em {% data variables.product.prodname_dotcom %}, você poderá manter sua cópia local do projeto sincronizada puxando do repositório remoto.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch
versions:
  fpt: '*'
ms.openlocfilehash: eb803c8f5ef34c4ab25255c1635d31468b1b32af
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084073'
---
## Sobre a sincronização do branch

Você pode sincronizar o seu branch local com o repositório remoto, puxando quaisquer commits adicionados ao branch no {% data variables.product.product_name %} desde a última vez que você sincronizou. Se você fizer commits de outro dispositivo ou se várias pessoas contribuem para um projeto, você precisará sincronizar seu branch local para mantê-lo atualizado.

Quando você puxa para o branch local, você só atualiza sua cópia local do repositório. Para atualizar o seu branch em {% data variables.product.prodname_dotcom %}, você deve fazer push das suas alterações. Para obter mais informações, confira "[Como efetuar push de alterações para o {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github)".

Para adicionar alterações de um branch para outro branch, você fazer merge dos branches. Para aplicar as alterações ao seu branch a partir de outro branch no mesmo repositório, você pode fazer o merge do outro branch no seu branch no {% data variables.product.prodname_desktop %}. Para solicitar que as alterações do seu branch sejam mescladas em outro branch, no mesmo repositório ou em outro repositório na rede, você pode criar um pull request no {% data variables.product.prodname_desktop %}. Para obter mais informações, confira "[Como mesclar outro branch no seu branch de projeto](#merging-another-branch-into-your-project-branch)" e "[Sobre as solicitações de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

Alguns fluxos de trabalho exigem ou beneficiam-se da rebase em vez de merge. Ao fazer o rebase, é possível reordenar, editar ou juntar commits. Para obter mais informações, confira "[Sobre a troca de base do Git](/github/getting-started-with-github/about-git-rebase)" e "[Como trocar a base do branch do projeto em outro branch](#rebasing-your-project-branch-onto-another-branch)".

## Puxar para o seu branch local a partir do remoto

1. No {% data variables.product.prodname_desktop %}, use o menu suspenso {% octicon "git-branch" aria-label="The branch icon" %} **Branch Atual** e selecione o branch local que deseja atualizar.
2.  Para verificar se há commits no branch remoto, clique em **Buscar origem**
![Botão Buscar origem](/assets/images/help/desktop/fetch-button.png)
3. Para efetuar pull de commits do branch remoto, clique em **Efetuar pull da origem** ou em **Efetuar pull da origem com troca de base**.
![Botão Efetuar pull da origem](/assets/images/help/desktop/pull-button.png) {% data reusables.desktop.resolve-merge-conflicts %}

## Fazer merge de outro branch no branch do projeto

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.choose-a-branch-to-merge %} {% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Observação:** se houver conflitos de mesclagem, o {% data variables.product.prodname_desktop %} avisará você acima do botão **Mesclar <em>BRANCH</em> no <em>BRANCH</em>** . Não será possível fazer merge dos branches até a solução de todos os conflitos.

   {% endnote %}

   ![Botão Mesclar](/assets/images/help/desktop/merge-branch-button.png) {% data reusables.desktop.push-origin %}

## Fazer rebase entre o branch do projeto e outro branch

{% mac %}

1. Na barra de menus, use o menu suspenso **Branch** e clique em **Trocar Base do Branch Atual**.
![Trocar Base do Branch Atual no menu suspenso Branches](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. Clique no branch do qual deseja trocar a base no branch atual e clique em **Iniciar troca de base**.
![Botão Iniciar troca de base](/assets/images/help/desktop/start-rebase-button.png)
3. Se você tiver certeza de que deseja trocar a base, clique em **Iniciar troca de base**.
![Botão Iniciar troca de base](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Para efetuar push das alterações locais, clique em **Forçar push da origem**.
![Forçar push da origem](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. Use o menu suspenso **Branch** e clique em **Trocar Base do Branch Atual**.
![Trocar Base do Branch Atual no menu suspenso Branches](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. Clique no branch do qual deseja trocar a base no branch atual e clique em **Iniciar troca de base**.
![Botão Iniciar troca de base](/assets/images/help/desktop/start-rebase-button.png)
3. Se você tiver certeza de que deseja trocar a base, clique em **Iniciar troca de base**.
![Botão Iniciar troca de base](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Para efetuar push das alterações locais, clique em **Forçar push da origem**.
![Forçar push da origem](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

## Fazer combinação por squash e merge de outro branch no branch do seu projeto

1. Use o menu suspenso **Branch** e clique em **Fazer Mesclagem Squash e Mesclar no Branch Atual**.
![Fazer Mesclagem Squash e Mesclar no menu suspenso Branch](/assets/images/help/desktop/squash-and-merge-menu.png)
2. Clique no branch que deseja mesclar no branch atual e em **Fazer mesclagem squash e mesclar**.
![Botão Fazer mesclagem squash e mesclar](/assets/images/help/desktop/squash-and-merge-selection.png) {% note %}

   **Observação:** se houver conflitos de mesclagem, o {% data variables.product.prodname_desktop %} avisará você acima do botão **Fazer mesclagem squash e mesclar**. Você não poderá fazer combinação por squash e merge do branch até resolver todos os conflitos.

   {% endnote %} {% data reusables.desktop.push-origin %}

## Leitura Adicional
- "[Pull](/github/getting-started-with-github/github-glossary#pull)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Mesclagem](/github/getting-started-with-github/github-glossary#merge)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Troca de base](/github/getting-started-with-github/github-glossary#rebase)" no glossário do {% data variables.product.prodname_dotcom %}
