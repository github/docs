---
title: Fazer commit e revisar as alterações do projeto
intro: 'À medida que você edita os arquivos, o {% data variables.product.prodname_desktop %} monitora todas as alterações feitas. É possível decidir como você pretende agrupar as alterações para criar commits relevantes.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  free-pro-team: '*'
---

### Sobre commits

{% data reusables.commits.about-commits %} Você também pode adicionar um coautor em qualquer commit em que colaborar.

{% data reusables.desktop.update-email-address %} Para obter mais informações, consulte ["Configurar o Git para GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)".

### Escolher um branch e fazer alterações

1. [Crie um branch](/desktop/guides/contributing-to-projects/managing-branches) ou selecione um branch existente clicando em {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** (Branch atual) na barra de ferramentas. Em seguida, selecione o branch na lista.

  ![Menu suspenso para alternar o branch atual](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.make-changes %}

### Escolhendo como mostrar diffs

Você pode alterar a maneira como os diffs são exibidos em {% data variables.product.prodname_desktop %} para atender às suas necessidades de revisão.

Para mudar a forma como você vê os diffs, no canto superior direito da visão diff, clique em {% octicon "gear" aria-label="The Gear icon" %}.
- Para alterar a forma como o diff inteiro é exibido, em "Exibição do diff", selecione  **Unificado** ou **Separado**. A visualização unificada mostra as alterações linearmente, enquanto a visualização separada mostra conteúdo antigo do lado esquerdo e novo conteúdo do lado direito.
- Para ocultar as alterações de espaços em branco para que você possa se concentrar em alterações mais substantivas, selecione **Ocultar alterações de espaços em branco**.

![Menu de opções do diff](/assets/images/help/desktop/diff-selection.png)

Se você precisa ver mais do arquivo do que {% data variables.product.prodname_desktop %} mostra por padrão, você pode expandir o diff.
- Para ver as próximas linhas acima ou abaixo das alterações destacadas, clique na seta acima ou abaixo dos números de linha.
- Para ver o arquivo inteiro, clique com o botão direito do mouse na visualização do diff e clique em **Expandir todo o arquivo**.

![Expandir visualização do diff](/assets/images/help/desktop/expand-diff-view.png)

### Selecionar alterações para inclusão em um commit

As alterações feitas nos arquivos via editor de texto e salvas no local também aparecerão no {% data variables.product.prodname_desktop %}.

* O ícone vermelho {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} indica os arquivos removidos.
* O ícone amarelo {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} indica os arquivos alterados.
* O ícone verde {% octicon "diff-added" aria-label="The diff added icon color-green" %} indica os arquivos adicionados.
* Para acessar as alterações stashed, clique em **Stashed Changes** (Alterações stashed).

  ![Opção Stashed Changes (Alterações stashed)](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![Caixa de seleção para fazer commit em todos os arquivos alterados](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![Caixas de seleção ao lado dos arquivos em que deseja fazer commit](/assets/images/help/desktop/commit-some.png)

#### Criar um commit parcial

Se um arquivo tiver várias alterações e você quiser incluir somente algumas no commit, será possível criar um commit parcial. O restante das alterações ficará intacto, de modo que você possa fazer outras modificações e commits. Essa opção permite fazer commits separados mais relevantes, como manter alterações de quebra de linha em um commit separado das alterações de código.

Para excluir linhas alteradas do seu commit, clique em uma ou mais linhas alteradas para que o azul desapareça. As linhas ainda em destaque em azul serão incluídas no commit.

  ![Linhas desmarcadas em um arquivo](/assets/images/help/desktop/partial-commit.png)

### Descartar alterações
Se você tiver alterações não realizadas que não deseja manter, poderá descartar as alterações. Isso removerá as alterações dos arquivos no seu computador. Você pode descartar todas as alterações não realizadas em um ou mais arquivos ou pode descartar as linhas específicas que adicionou.

As alterações descartadas são salvas em um arquivo datado na Lixeira. Você pode recuperar as alterações descartadas até que a lixeira seja esvaziada.

#### Descartar alterações em um ou mais arquivos

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}

  ![Opção Discard Changes (Descartar alterações) no menu de contexto](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}

  ![Botão Discard Changes (Descartar alterações) na caixa de diálogo Confirmation (Confirmação)](/assets/images/help/desktop/discard-changes-confirm-mac.png)

#### Descartar alterações em uma ou mais linhas
Você pode descartar uma ou mais linhas alteradas que não foram confirmadas.

{% note %}

**Observação:** Descartar linhas únicas está desabilitado em um grupo de alterações que adiciona e remove linhas.

{% endnote %}

Para descartar uma linha adicionada, na lista de linhas alteradas, clique com o botão direito na linha que você deseja descartar e selecione **Descartar linha adicionada**.

  ![Descartar uma única linha na caixa de diálogo de confirmação](/assets/images/help/desktop/discard-single-line.png)

Para descartar um grupo de linhas alteradas, clique com o botão direito na barra vertical à direita dos números de linha para as linhas que você deseja descartar e, em seguida, selecione **Descartar linhas adicionadas**.

  ![Descartar um grupo de linhas adicionadas na caixa de diálogo de confirmação](/assets/images/help/desktop/discard-multiple-lines.png)


### Mensagem de commit e envio das alterações

Ao concluir as alterações que você decidiu fazer no commit, escreva a mensagem do commit e envie as alterações. Se o commit envolveu trabalho em colaboração, será possível atribuí-lo a mais de um autor.

{% note %}

**Observação**: {% data reusables.desktop.tags-push-with-commits %} Para obter mais informações, consulte "[Gerenciando tags](/desktop/contributing-to-projects/managing-tags)".

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![Campo Commit message (Mensagem do commit)](/assets/images/help/desktop/commit-message.png)
2. Para atribuir um commit a outro autor, você também pode clicar no ícone de adicionar coautores e digitar o nome dos usuários que pretende incluir.

  ![Adicionar um coautor à mensagem do commit](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}

  ![Botão Commit (Fazer commit)](/assets/images/help/desktop/commit-button.png)
4. Se o branch com a qual você está tentando fazer commit estiver protegido, o desktop irá avisá-lo.
    - Para mover as alterações, clique em **alternar branches**.
    - Para confirmar suas alterações no branch protegido, clique em **Commit para _BRANCH_**.

  Para obter mais informações sobre branches protegidos, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)".

  ![Aviso de branch protegido](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}
