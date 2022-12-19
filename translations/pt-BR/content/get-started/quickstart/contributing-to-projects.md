---
title: Contribuir para projetos
intro: Aprenda a contribuir para um projeto por meio da bifurcação.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
ms.openlocfilehash: da38c6f5b3ea953fc58bf79080b9fa4eb5a2712d
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191343'
---
## Sobre a bifurcação

Se você quiser contribuir com o projeto de outra pessoa, mas não tiver acesso de gravação ao repositório, poderá usar um fluxo de trabalho de "fork e solicitação de pull". 

{% data reusables.repositories.fork-definition-long %}

Você pode contribuir enviando solicitações de pull de seu fork para o repositório upstream. Para obter mais informações, confira "[Criar um fork de um repositório](/get-started/quickstart/fork-a-repo)".

## Bifurcar um repositório

Este tutorial usa [o projeto Spoon-Knife](https://github.com/octocat/Spoon-Knife), um repositório de teste hospedado no {% data variables.product.prodname_dotcom_the_website %} que permite testar o fluxo de trabalho da solicitação de pull e do fork.

1. Navegue até o projeto `Spoon-Knife` em https://github.com/octocat/Spoon-Knife.
2. Clique em **Criar Fork**.
   ![Botão Criar fork](/assets/images/help/repository/fork_button.png){% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
3. Selecione um proprietário para o repositório bifurcado.
   ![Criar uma página de bifurcação com a lista suspensa do proprietário enfatizada](/assets/images/help/repository/fork-choose-owner.png)
4. Por padrão, os forks são nomeados da mesma forma que os respectivos repositórios pai. Você pode alterar o nome da bifurcação para distingui-la ainda mais. 
   ![Criar uma página de bifurcação com o campo do nome do repositório enfatizado](/assets/images/help/repository/fork-choose-repo-name.png)
5. Como opção, adicione uma descrição da bifurcação.
   ![Criar uma página de bifurcação com o campo de descrição enfatizado](/assets/images/help/repository/fork-description.png)
6. Escolha se deseja copiar apenas o branch padrão ou todos os branches para a nova bifurcação. Para muitos cenários de bifurcação, como contribuir para projetos de código aberto, você só precisa copiar o branch padrão. Por padrão, somente o branch padrão é copiado.
   ![Opção para copiar apenas o branch padrão](/assets/images/help/repository/copy-default-branch-only.png)
7. Clique em **Criar bifurcação**.
   ![Botão Criar bifurcação enfatizado](/assets/images/help/repository/fork-create-button.png)

{% note %}

**Observação:** se você quiser copiar branches adicionais do repositório pai, poderá fazê-lo na página **Branches**. Para obter mais informações, confira "[Como criar e excluir branches no seu repositório](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)".

{% endnote %} {% endif %}

## Clonando uma bifurcação

Você criou com sucesso o repositório Spoon-Knife mas, até agora, ele existe apenas em {% data variables.product.product_name %}. Para poder trabalhar no projeto, você deverá cloná-lo para o seu computador.

Você pode clonar a sua bifurcação com a linha de comando, {% data variables.product.prodname_cli %} ou {% data variables.product.prodname_desktop %}.

{% webui %}

1. No {% data variables.product.product_name %}, navegue até **o seu fork** do repositório Spoon-Knife.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %}
4. Digite `git clone` e cole a URL já copiada. Ela terá esta aparência, com seu nome de usuário do {% data variables.product.product_name %} em vez de `YOUR-USERNAME`:
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  ```

5. Pressione **Enter**. Seu clone local estará criado.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para criar um clone do fork, use o sinalizador `--clone`.

```shell
gh repo fork REPOSITORY --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

{% enddesktop %}

## Como criar um branch de trabalho

Antes de fazer alterações no projeto, você deve criar um branch e fazer check-out. Mantendo as alterações no próprio branch, você segue o GitHub Flow e garante que será mais fácil contribuir com o mesmo projeto novamente no futuro. Para obter mais informações, confira "[GitHub Flow](/get-started/quickstart/github-flow#following-github-flow)".

{% webui %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endwebui %}

{% cli %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endcli %}

{% desktop %}

Para obter mais informações de como criar e gerenciar branches no {% data variables.product.prodname_desktop %}, confira "[Como gerenciar branches](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches)".

{% enddesktop %}

## Fazendo e enviando por push as alterações

Vá em frente e faça algumas alterações no projeto usando seu editor de texto favorito, como o [Visual Studio Code](https://code.visualstudio.com). Você pode, por exemplo, alterar o texto de `index.html` para adicionar seu nome de usuário do GitHub.

Quando estiver pronto para enviar suas alterações, teste e faça commit das suas alterações. `git add .` informa o Git de que você deseja incluir todas as alterações no próximo commit. `git commit` cria um instantâneo dessas alterações.

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

Para obter mais informações sobre como preparar as alterações e fazer commit delas no {% data variables.product.prodname_desktop %}, confira "[Como fazer commit das alterações no seu projeto e revisá-las](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)".

{% enddesktop %}

Ao testar e fazer commit dos arquivos, você essencialmente diz ao Git, "Ok, tire um instantâneo das minhas alterações!" Você pode continuar fazendo mais alterações e tirar mais instantâneos do commit.

No momento, suas alterações existem apenas localmente. Quando estiver pronto para fazer push das suas alterações para {% data variables.product.product_name %}, faça push delas para o controle remoto.

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

Para obter mais informações sobre como efetuar push das alterações no {% data variables.product.prodname_desktop %}, confira "[Como efetuar push de alterações para o GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)".

{% enddesktop %}

## Fazendo um pull request

Finalmente, você está pronto para propor alterações no projeto principal! Essa é a última etapa para produzir uma bifurcação do projeto de outra pessoa, e a mais importante, indiscutivelmente. Se você fez uma alteração que você considera que beneficiaria a comunidade como um todo, você deve considerar contribuir de novamente.

Para fazer isso, acesse o repositório {% data variables.product.product_name %} onde seu projeto encontra-se. Neste exemplo, ele estará em `https://github.com/<your_username>/Spoon-Knife`. Você verá uma notificação indicando que o branch está um commit à frente de `octocat:main`. Clique em **Contribuir** e em **Abrir uma solicitação de pull**.

O {% data variables.product.product_name %} levará você para uma página que mostra as diferenças entre o fork e o repositório `octocat/Spoon-Knife`. Clique em **Criar solicitação de pull**.

{% data variables.product.product_name %} levará você a uma página onde você pode inserir um título e uma descrição das suas alterações. É importante fornecer tantas informações úteis e uma razão para o motivo de você estar fazendo este pull request. O proprietário do projeto deve poder determinar se a sua alteração é tão útil para todos quanto você pensa. Por fim, clique em **Criar solicitação de pull**.

## Gerenciando feedback

Os pull requests são uma área de discussão. Neste caso, o Octocat está muito ocupado e provavelmente não irá fazer merge das suas alterações. Para outros projetos, não se ofenda se o proprietário do projeto rejeitar o seu pull request ou pedir mais informações sobre o porquê de a alteração ter sido feita. Pode até ser que o proprietário do projeto não faça o merge do seu pull request e isso está perfeitamente bem. Suas alterações existem no fork. E quem sabe - talvez alguém que você nunca conheceu, considere as suas alterações muito mais valiosas do que o projeto original.

## Como localizar os projetos

Você fez uma bifurcação com sucesso e contribuiu de volta para um repositório. Vá em frente e contribua um pouco mais!{% ifversion fpt %} Para obter mais informações, confira "[Como descobrir maneiras de contribuir com o código aberto no GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}
