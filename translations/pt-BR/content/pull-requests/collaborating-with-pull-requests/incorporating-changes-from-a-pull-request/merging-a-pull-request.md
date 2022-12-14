---
title: Mesclar uma solicitação de pull
intro: Faça merge de uma pull request no branch upstream quando o trabalho estiver finalizado. Qualquer pessoa com acesso push no repositório pode completar o merge.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: cccb85404c9cfe7305d639911528afed3706edfa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127584'
---
## Sobre merges de pull request

Em uma pull request, você propõe que as alterações feitas em um branch head sejam mescladas em um branch base. Por padrão, qualquer pull request pode sofrer merge a qualquer momento, a menos que o branch head esteja em conflito com o branch base. No entanto, pode haver restrições sobre quando você puder fazer merge de um pull request em um branch específico. Por exemplo, você só pode fazer merge de um pull request no branch-padrão se as verificações de status necessárias forem aprovadas. Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches)".

{% data reusables.pull_requests.you-can-auto-merge %}

Se a solicitação de pull tiver conflitos de mesclagem ou se você quiser testar as alterações antes da mesclagem, [faça check-out da solicitação de pull localmente](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) e mescle-a usando a linha de comando.

Você não pode realizar o merge de um rascunho de um pull request. Para obter mais informações sobre as solicitações de pull de rascunho, confira "[Sobre as solicitações de pull](/articles/about-pull-requests#draft-pull-requests)".

O repositório pode ser configurado para que o branch principal de um pull request seja excluído automaticamente quando você faz o merge de um pull request. Para obter mais informações, confira "[Como gerenciar a exclusão automática de branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)".

{% note %}

**Observação:** {% data reusables.pull_requests.retargeted-on-branch-deletion %} Para obter mais informações, confira "[Sobre os branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

{% endnote %}

As solicitações de pull são mescladas por meio [da opção `--no-ff`](https://git-scm.com/docs/git-merge#_fast_forward_merge), exceto as [solicitações de pull que têm commits com mesclagem squash ou com troca de base](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges), que são mescladas por meio da opção de avanço rápido.

{% data reusables.pull_requests.close-issues-using-keywords %}

Se você decidir que não deseja que as alterações em um branch do tópico sejam mescladas com o branch upstream, [feche a solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) sem mesclá-la.

## Mesclar uma solicitação de pull

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request que deseja fazer merge.
3. Dependendo das opções de merge habilitadas em seu repositório, é possível:
    - [Mescle todos os commits no branch base](/articles/about-pull-request-merges/) clicando em **Mesclar solicitação de pull**. Se a opção **Mesclar solicitação de pull** não for mostrada, clique no menu suspenso Mesclar e selecione **Criar um commit de mesclagem**.
    ![merge-pull-request-button](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Faça uma mesclagem squash dos commits em um commit](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) clicando no menu suspenso Mesclar, selecionando **Fazer mesclagem squash e mesclar** e clicando no botão **Fazer mesclagem squash e mesclar**.
    ![click-squash-and-merge-button](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Troque a base dos commits individualmente no branch base](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits) clicando no menu suspenso Mesclar, selecionando **Trocar a base e mesclar** e clicando no botão **Trocar a base e mesclar**.
    ![select-rebase-and-merge-from-drop-down-menu](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Observação:** a troca de base e a mesclagem sempre atualizarão as informações do autor do commit e criarão SHAs de commit. Para obter mais informações, confira "[Sobre as mesclagens de solicitações de pull](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)".

    {% endnote %}
4. Se solicitado, digite uma mensagem de commit ou aceite a mensagem padrão.

   {% data reusables.pull_requests.default-commit-message-squash-merge %} ![Campo de mensagem de commit](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Observação:** o seletor de email não está disponível para mesclagens de troca de base, que não criam um commit de mesclagem, nem para mesclagens squash, que creditam o usuário que criou a solicitação de pull como o autor do commit com squash.

   {% endnote %}

6. Clique em **Confirmar mesclagem**, **Confirmar mesclagem squash e mesclagem** ou **Confirmar troca de base e mesclagem**.
6. Opcionalmente, [exclua o branch](/articles/deleting-unused-branches). Assim, a lista de branches do repositório ficará limpa.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para mesclar uma solicitação de pull, use o subcomando `gh pr merge`. Substitua `pull-request` pelo número, pela URL ou pelo branch principal da solicitação de pull.

```shell
gh pr merge <em>pull-request</em>
```

Siga as instruções interativas para realizar o merge. Para obter mais informações sobre os métodos de mesclagem que você pode escolher, confira "[Sobre as mesclagens de solicitações de pull](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

Como alternativa, você pode usar sinalizadores para ignorar as instruções interativas. Por exemplo, esse comando irá fazer a combinação por squash dos commits em um único commit com a mensagem de "my squash commit", faça o merge do commit combinado por squash no branch de base e exclua o branch local e o remoto.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## Leitura adicional

- "[Como reverter uma solicitação de pull](/articles/reverting-a-pull-request)"
- "[Como sincronizar seu branch](/desktop/guides/contributing-to-projects/syncing-your-branch/)" usando o {% data variables.product.prodname_desktop %}
- "[Sobre as mesclagens de solicitações de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Como resolver conflitos de mesclagem](/github/collaborating-with-pull-requests/addressing-merge-conflicts)"
