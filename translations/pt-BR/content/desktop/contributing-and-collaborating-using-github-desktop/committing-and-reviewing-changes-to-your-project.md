---
title: Fazer commit e revisar as alterações do projeto
intro: 'À medida que você edita os arquivos, o {% data variables.product.prodname_desktop %} monitora todas as alterações feitas. É possível decidir como você pretende agrupar as alterações para criar commits relevantes.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
versions:
  free-pro-team: '*'
---

### Sobre commits

{% data reusables.commits.about-commits %} Você também pode adicionar um coautor em qualquer commit em que colaborar.

{% data reusables.desktop.update-email-address %} Para obter mais informações, consulte ["Configurar o Git para GitHub Desktop](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)".

### 1. Escolher um branch e fazer alterações

1. [Crie um novo branch](/desktop/guides/contributing-to-projects/managing-branches) ou selecione um branch existente, clicando em

{% octicon "git-branch" aria-label="The branch icon" %} **Branch atual** na barra de ferramentas e selecionando o branch na lista.
  ![Menu suspenso para alternar o branch atual](/assets/images/help/desktop/click-branch-in-drop-down.png)
{% data reusables.desktop.make-changes %}

### 2. Selecionar alterações para inclusão em um commit

As alterações feitas nos arquivos via editor de texto e salvas no local também aparecerão no {% data variables.product.prodname_desktop %}.

* O ícone vermelho {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} indica os arquivos removidos.
* O ícone amarelo {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} indica os arquivos alterados.
* O ícone verde {% octicon "diff-added" aria-label="The diff added icon color-green" %} indica os arquivos adicionados.
* Para acessar as alterações stashed, clique em **Stashed Changes** (Alterações stashed). ![Opção Stashed Changes (Alterações stashed)](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}
![Caixa de seleção para fazer commit em todos os arquivos alterados](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}
![Caixas de seleção ao lado dos arquivos em que deseja fazer commit](/assets/images/help/desktop/commit-some.png)

#### Criar um commit parcial

Se um arquivo tiver várias alterações e você quiser incluir somente *algumas* no commit, será possível criar um commit parcial. O restante das alterações ficará intacto, de modo que você possa fazer outras modificações e commits. Essa opção permite fazer commits separados mais relevantes, como manter alterações de quebra de linha em um commit separado das alterações de código.

Durante a revisão do diff do arquivo, as linhas a serem incluídas no commit ficam destacadas em azul. Para excluir a alteração, clique na linha alterada para que o destaque azul desapareça.

![Linhas desmarcadas em um arquivo](/assets/images/help/desktop/partial-commit.png)

#### Descartar alterações

Você pode descartar todas as alterações sem commits em um arquivo ou intervalo de arquivos. Também é possível descartar todas as alterações em todos os arquivos desde a última confirmação.

{% mac %}

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}
  ![Opção Discard Changes (Descartar alterações) no menu de contexto](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}
  ![Botão Discard Changes (Descartar alterações) na caixa de diálogo Confirmation (Confirmação)](/assets/images/help/desktop/discard-changes-confirm-mac.png)

{% tip %}

**Dica:** as alterações descartadas são salvas em um arquivo com data em Trash (Lixeira), e será possível recuperá-las até que a lixeira seja esvaziada.

{% endtip %}

{% endmac %}

{% windows %}

{% data reusables.desktop.select-discard-files %}{% data reusables.desktop.click-discard-files %}
  ![Opção Discard Changes (Descartar alterações) no menu de contexto](/assets/images/help/desktop/discard-changes-win.png)
{% data reusables.desktop.confirm-discard-files %}
  ![Botão Discard Changes (Descartar alterações) na caixa de diálogo Confirmation (Confirmação)](/assets/images/help/desktop/discard-changes-confirm-win.png)

{% tip %}

**Dica:** as alterações descartadas são salvas em um arquivo com data em Recycle Bin (Lixo), e será possível recuperá-las até a lixeira ser esvaziada.

{% endtip %}

{% endwindows %}

### 3. Mensagem de commit e envio das alterações

Ao concluir as alterações que você decidiu fazer no commit, escreva a mensagem do commit e envie as alterações. Se o commit envolveu trabalho em colaboração, será possível atribuí-lo a mais de um autor.

{% note %}

**Observação**: {% data reusables.desktop.tags-push-with-commits %} Para obter mais informações, consulte "[Gerenciando tags](/desktop/contributing-to-projects/managing-tags)".

{% endnote %}

{% data reusables.desktop.commit-message %}
  ![Campo Commit message (Mensagem do commit)](/assets/images/help/desktop/commit-message.png)
2. Para atribuir um commit a outro autor, você também pode clicar no ícone para adicionar coautores e digitar o(s) nome(s) de usuário que pretende incluir. ![Adicionar um coautor à mensagem do commit](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}
  ![Botão Commit (Fazer commit)](/assets/images/help/desktop/commit-button.png)
4. Se o branch com a qual você está tentando fazer commit estiver protegido, o desktop irá avisá-lo.
    - Para mover as alterações, clique em **alternar branches**.
    - Para confirmar suas alterações no branch protegido, clique em **Commit para _BRANCH_**.

  Para obter mais informações sobre branches protegidos, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)". ![Aviso de branch protegido](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}
