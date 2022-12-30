---
title: Usando controle de origem no seu codespace
intro: 'Depois de fazer alterações em um arquivo no seu código, você pode fazer um commit rápido das alterações e fazer push da sua atualização para o repositório remoto.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
ms.openlocfilehash: 513bf0729e1f04bf93f45999b2fa9e45231add5c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159334'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Sobre o controle do código-fonte no {% data variables.product.prodname_github_codespaces %}

Você pode executar todas as ações do Git necessárias diretamente no seu codespace. Por exemplo, é possível obter alterações de um repositório remoto, mudar de branch, criar um branch, fazer commit, efetuar push e criar uma solicitação de pull. Você pode usar o terminal integrado dentro do seu codespace para inserir nos comandos do Git, ou você pode clicar em ícones e opções de menu para realizar todas as tarefas mais comuns do Git. Este guia explica como usar a interface gráfica de usuário para controle de origem.

{% vscode %}

Para obter mais informações sobre o suporte do Git no {% data variables.product.prodname_vscode %}, confira "[Como usar o controle de versão no VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)" na documentação do {% data variables.product.prodname_vscode %}.

{% endvscode %}

{% webui %}

O controle do código-fonte no cliente Web do {% data variables.product.prodname_vscode %} usa o mesmo fluxo de trabalho que o aplicativo da área de trabalho do {% data variables.product.prodname_vscode %}. Para obter mais informações, confira "[Como usar o controle de versão no VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)" na documentação do {% data variables.product.prodname_vscode %}.

{% endwebui %}

Um fluxo de trabalho típico para atualizar um arquivo que usa {% data variables.product.prodname_github_codespaces %} seria:

* A partir do branch padrão do seu repositório em {% data variables.product.prodname_dotcom %}, crie um codespace. Confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".
* No seu código, crie uma nova agência para trabalhar.
* Faça suas alterações e salve-as.
* Confirme a alteração.
* Abra um pull request.

{% webui %}

{% data reusables.codespaces.source-control %} 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %} 

{% endvscode %}

{% jetbrains %}

## Criar ou trocar de branches

1. Clique no nome do branch no lado direito da barra de status.

   ![Captura de tela do nome do branch na barra de status](/assets/images/help/codespaces/jetbrains-branch-button.png)

1. No menu pop-up, siga um destes procedimentos:
   * Para criar um branch com base no branch atual, clique no nome do branch atual e escolha **Novo Branch**. 

     ![Captura de tela da opção de novo branch](/assets/images/help/codespaces/jetbrains-new-branch-option.png)

     Insira um nome para o novo branch e clique em **Criar**.

     ![Captura de tela da caixa de diálogo Criar branch](/assets/images/help/codespaces/jetbrains-create-branch-dialog.png)

   * Para fazer check-out de um branch existente, comece a digitar o nome do branch. Clique no branch na lista e depois em **Check-out**.

     ![Captura de tela da opção de check-out](/assets/images/help/codespaces/jetbrains-checkout-submenu.png)

     {% tip %}

     **Dica**: se alguém alterar um arquivo no repositório remoto, essas alterações não aparecerão no branch para o qual você mudou, até que seja efetuado pull das alterações para o codespace. 

     {% endtip %}


## Fazendo commit das suas alterações 

1. No lado direito da barra de navegação, clique na marca de seleção.

   ![Captura de tela da marca de seleção de commit](/assets/images/help/codespaces/jetbrains-commit-button.png)

1. Na caixa de diálogo Fazer Commit das Alterações, insira uma mensagem de commit.
1. Clique em **Confirmar**.

   Como alternativa, clique na seta para baixo ao lado de **Fazer commit** e clique **Fazer commit e enviar por push**.

   ![Captura de tela do botão Fazer commit e do botão de push](/assets/images/help/codespaces/jetbrains-commit-and-push.png)

## Fazer pull das alterações do repositório remoto

Você pode efetuar pull de alterações do mesmo branch no repositório remoto e aplicar essas alterações à cópia do repositório em que está trabalhando no codespace.

1. No lado direito da barra de navegação, clique na seta que aponta para baixo.

   ![Captura de tela do botão de seta para baixo de atualização do projeto](/assets/images/help/codespaces/jetbrains-update-project-button.png)

1. Na caixa de diálogo Atualizar Projeto, escolha se deseja mesclar ou trocar base das alterações de entrada.

   ![Captura de tela da caixa de diálogo Atualizar Projeto](/assets/images/help/codespaces/jetbrains-update-options.png)

1. Clique em **OK**.

## Fazer push das alterações para o seu repositório remoto

Você pode enviar por push as alterações salvas e confirmadas. Isso aplica essas alterações ao branch upstream no repositório remoto. Você pode querer fazer isso se ainda não estiver pronto para criar um pull request, ou se você preferir criar um pull request em {% data variables.product.prodname_dotcom %}.

1. No lado direito da barra de navegação, clique na seta que aponta para cima.

   ![Captura de tela da seta para cima dos commits com push](/assets/images/help/codespaces/jetbrains-push-button.png)

1. Na caixa de diálogo Efetuar Push de Commits, clique em **Efetuar Push**.

{% endjetbrains %}
