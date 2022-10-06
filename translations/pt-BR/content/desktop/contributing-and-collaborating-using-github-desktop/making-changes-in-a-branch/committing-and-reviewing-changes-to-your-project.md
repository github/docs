---
title: Fazer commit e revisar as alterações do projeto
intro: 'À medida que você edita os arquivos, o {% data variables.product.prodname_desktop %} monitora todas as alterações feitas. É possível decidir como você pretende agrupar as alterações para criar commits relevantes.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  fpt: '*'
shortTitle: Commit & review changes
ms.openlocfilehash: ecc12722a7d0eebeedc13878972d138ca894db5a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095187'
---
## Sobre commits

{% data reusables.commits.about-commits %} Você também pode adicionar um coautor em qualquer commit em que colaborar.

{% data reusables.desktop.update-email-address %} Para obter mais informações, confira ["Como configurar o Git para o GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)".

## Escolher um branch e fazer alterações

1. [Crie um branch](/desktop/guides/contributing-to-projects/managing-branches) ou selecione um branch existente clicando em {% octicon "git-branch" aria-label="The branch icon" %} **Branch Atual** na barra de ferramentas e selecionando o branch na lista.

  ![Menu suspenso usado para alternar o branch atual](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.make-changes %}

## Escolhendo como mostrar diffs

Você pode alterar a maneira como os diffs são exibidos em {% data variables.product.prodname_desktop %} para atender às suas necessidades de revisão.

Para mudar a forma como você vê os diffs, no canto superior direito da visão diff, clique em {% octicon "gear" aria-label="The Gear icon" %}.
- Para alterar a forma como a comparação inteira é exibida, em "Exibição de comparação", selecione **Unificada** ou **Dividida**. A visualização unificada mostra as alterações linearmente, enquanto a visualização separada mostra conteúdo antigo do lado esquerdo e novo conteúdo do lado direito.
- Para ocultar as alterações de espaço em branco para que você possa se concentrar em alterações mais substantivas, selecione **Ocultar Alterações de Espaço em Branco**.

![Menu de opções do diff](/assets/images/help/desktop/diff-selection.png)

Se você precisa ver mais do arquivo do que {% data variables.product.prodname_desktop %} mostra por padrão, você pode expandir o diff.
- Para ver as próximas linhas acima ou abaixo das alterações destacadas, clique na seta acima ou abaixo dos números de linha.
- Para ver todo o arquivo, clique com o botão direito do mouse na exibição de comparação e clique em **Expandir Todo o Arquivo**.

![Expandir visualização do diff](/assets/images/help/desktop/expand-diff-view.png)

## Selecionar alterações para inclusão em um commit

As alterações feitas nos arquivos via editor de texto e salvas no local também aparecerão no {% data variables.product.prodname_desktop %}.

* O ícone vermelho {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} indica os arquivos removidos.
* O ícone amarelo {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} indica os arquivos modificados.
* O ícone verde {% octicon "diff-added" aria-label="The diff added icon color-green" %} indica os arquivos adicionados.
* Para acessar as alterações em stash, clique em **Alterações em stash**.

  ![Opção Stashed Changes (Alterações stashed)](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![Caixa de seleção para fazer commit em todos os arquivos alterados](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![Caixas de seleção ao lado dos arquivos em que deseja fazer commit](/assets/images/help/desktop/commit-some.png)

### Criar um commit parcial

Se um arquivo tiver várias alterações e você quiser incluir somente algumas no commit, será possível criar um commit parcial. O restante das alterações ficará intacto, de modo que você possa fazer outras modificações e commits. Essa opção permite fazer commits separados mais relevantes, como manter alterações de quebra de linha em um commit separado das alterações de código.

Para excluir linhas alteradas do seu commit, clique em uma ou mais linhas alteradas para que o azul desapareça. As linhas ainda em destaque em azul serão incluídas no commit.

  ![Linhas desmarcadas em um arquivo](/assets/images/help/desktop/partial-commit.png)

## Descartar alterações
Se você tiver alterações não realizadas que não deseja manter, poderá descartar as alterações. Isso removerá as alterações dos arquivos no seu computador. Você pode descartar todas as alterações não realizadas em um ou mais arquivos ou pode descartar as linhas específicas que adicionou.

As alterações descartadas são salvas em um arquivo datado na Lixeira. Você pode recuperar as alterações descartadas até que a lixeira seja esvaziada.

### Descartar alterações em um ou mais arquivos

{% data reusables.desktop.select-discard-files %} {% data reusables.desktop.click-discard-files %}

  ![Opção Descartar Alterações no menu de contexto](/assets/images/help/desktop/discard-changes-mac.png) {% data reusables.desktop.confirm-discard-files %}

  ![Botão Discard Changes (Descartar alterações) na caixa de diálogo Confirmation (Confirmação)](/assets/images/help/desktop/discard-changes-confirm-mac.png)

### Descartar alterações em uma ou mais linhas
Você pode descartar uma ou mais linhas alteradas que não foram confirmadas.

{% note %}

**Observação:** o descarte de linhas simples é desabilitado em um grupo de alterações que adiciona e remove linhas.

{% endnote %}

Para descartar uma linha adicionada, na lista de linhas alteradas, clique com o botão direito do mouse na linha que deseja descartar e selecione **Descartar linha adicionada**.

  ![Descartar uma única linha na caixa de diálogo de confirmação](/assets/images/help/desktop/discard-single-line.png)

Para descartar um grupo de linhas alteradas, clique com o botão direito do mouse na barra vertical à direita dos números das linhas que deseja descartar e selecione **Descartar linhas adicionadas**.

  ![Descartar um grupo de linhas adicionadas na caixa de diálogo de confirmação](/assets/images/help/desktop/discard-multiple-lines.png)


## Mensagem de commit e envio das alterações

Ao concluir as alterações que você decidiu fazer no commit, escreva a mensagem do commit e envie as alterações. Se o commit envolveu trabalho em colaboração, será possível atribuí-lo a mais de um autor.

{% note %}

**Observação**: {% data reusables.desktop.tags-push-with-commits %} Para obter mais informações, confira "[Como gerenciar tags](/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags)".

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![Campo Commit message (Mensagem do commit)](/assets/images/help/desktop/commit-message.png)
1. Para atribuir um commit a outro autor, você também pode clicar no ícone para adicionar coautores e digitar o(s) nome(s) de usuário que pretende incluir.

  ![Adicionar um coautor à mensagem de commit](/assets/images/help/desktop/add-co-author-commit.png) {% data reusables.desktop.commit-button %}

  ![Botão Confirmar](/assets/images/help/desktop/commit-button.png)
4. Se o branch com a qual você está tentando fazer commit estiver protegido, o desktop irá avisá-lo.
    - Para mover as alterações, clique em **Alternar branches**.
    - Para fazer commit das alterações no branch protegido, clique em **Fazer commit no _BRANCH_**.

  Para obter mais informações sobre os branches protegidos, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches)".

  ![Aviso de branch protegido](/assets/images/help/desktop/protected-branch-warning.png) {% data reusables.desktop.push-origin %}

6. Se você tiver uma solicitação de pull com base no branch em que está trabalhando, {% data variables.product.prodname_desktop %} exibirá o status das verificações que foram executadas para a solicitação de pull. Para saber mais sobre verificações, confira "[Exibir e executar novamente verificações no GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)".

 ![Verifica a exibição ao lado do nome do branch](/assets/images/help/desktop/checks-dialog.png)

 Se uma solicitação de pull não tiver sido criada para o branch atual, {% data variables.product.prodname_desktop %} oferecerá a opção de criar uma. Para obter mais informações, confira "[Como criar um problema ou uma solicitação de pull](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request).”

 ![Como criar uma solicitação de pull](/assets/images/help/desktop/mac-create-pull-request.png)
