---
title: Bifurcar um repositório
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: Um fork é um novo repositório que compartilha configurações de código e visibilidade com o repositório "upstream" original.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: 6756defd7567983cc7dbb1a9bfe36256e5b41a09
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191335'
---
## Sobre bifurcações

{% data reusables.repositories.fork-definition-long %}  Para obter mais informações, confira "[Como trabalhar com forks](/github/collaborating-with-issues-and-pull-requests/working-with-forks)".

### Proponha mudanças no projeto de outra pessoa

Por exemplo, você pode usar bifurcações para propor alterações relacionadas à correção de um bug. Em vez de registrar um erro encontrado, você pode:

- Crie fork do repositório.
- Fazer a correção.
- Enviar um pull request ao proprietário do projeto.

### Use o projeto de outra pessoa como ponto de partida para sua própria ideia.

O software de código aberto baseia-se na ideia de que ao compartilhar códigos, podemos criar softwares melhores e mais confiáveis. Para obter mais informações, confira "[Sobre a Open Source Initiative](https://opensource.org/about)" na Open Source Initiative.

Para obter mais informações de como aplicar os princípios de código aberto ao trabalho de desenvolvimento da organização em {% data variables.location.product_location %}, confira o white paper "[Uma introdução ao InnerSource](https://resources.github.com/whitepapers/introduction-to-innersource/)" do {% data variables.product.prodname_dotcom %}".

{% ifversion fpt or ghes or ghec %}

Ao criar um repositório público a partir de uma bifurcação do projeto de outra pessoa, confirme que incluiu um arquivo de licença que estabelece como você quer que seu projeto seja compartilhado com outros. Para obter mais informações, confira "[Escolher uma licença de código aberto](https://choosealicense.com/)" em choosealicense.com.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning %}

{% endif %}

## Pré-requisitos

Se ainda não tiver feito isso, primeiro configure o Git e a autenticação com {% data variables.location.product_location %} do Git. Para obter mais informações, confira "[Configurar o Git](/articles/set-up-git)".

## Bifurcar um repositório

{% webui %}

Você pode criar fork de um projeto para propor alterações no repositório upstream. Nesse caso, uma boa prática é sincronizar regularmente sua bifurcação com o repositório upstream. Para isso, é necessário usar Git na linha de comando. Você pode praticar a configuração do repositório upstream usando o mesmo repositório [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) do qual acabou de criar um fork.

1. No {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}Em {% data variables.location.product_location %}{% endif %}, navegue até o repositório [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
2. No canto superior direito da página, clique em **Criar Fork**.
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

**Observação:** se você quiser copiar branches adicionais do repositório pai, poderá fazê-lo na página **Branches**. Para obter mais informações, confira "[Criar e excluir branches no repositório](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)".{% endnote %}{% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para criar um fork de um repositório, use o subcomando `gh repo fork`.

```shell
gh repo fork REPOSITORY
```

Para criar o fork em uma organização, use o sinalizador `--org`.

```shell
gh repo fork REPOSITORY --org "octo-org"
```

{% endcli %}

{% desktop %} {% enddesktop %}

## Clonando o seu repositório bifurcado

Agora, você tem uma bifurcação do repositório Spoon-Knife, mas você não tem os arquivos desse repositório localmente no seu computador.

{% webui %}

1. {% ifversion fpt or ghec %}No {% data variables.product.prodname_dotcom_the_website %}{% else %}Em {% data variables.location.product_location %}{% endif %}, navegue até **o fork** do repositório Spoon-Knife.
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
  > remote: Total 10 (delta 1), reused 10 (delta 1)
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

## Configurar o Git para sincronizar o fork com o repositório upstream

Ao criar fork em um projeto para propor mudanças no repositório original, é possível configurar o Git para fazer pull de alterações do repositório upstream no clone local do fork.

{% webui %}

1. No {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}Em {% data variables.location.product_location %}{% endif %}, navegue até o repositório [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %}
4. Mude os diretórios para a localidade da bifurcação que você clonou.
    - Para acessar o diretório base, digite apenas `cd` sem nenhum outro texto.
    - Para listar os arquivos e as pastas do diretório atual, digite `ls`.
    - Para entrar em um dos diretórios listados, digite `cd your_listed_directory`.
    - Para subir um diretório, digite `cd ..`.
5. Digite `git remote -v` e pressione **Enter**. Você verá o repositório remoto atual configurado para sua bifurcação.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  ```

6. Digite `git remote add upstream`, cole a URL copiada na Etapa 3 e pressione **Enter**. Ele terá a seguinte aparência:
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/Spoon-Knife.git
  ```

7. Para verificar o novo repositório upstream especificado para a bifurcação, digite `git remote -v` novamente. Você verá a URL do fork como `origin` e a URL do repositório upstream como `upstream`.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```

Agora é possível manter a bifurcação sincronizada com o repositório upstream usando apenas alguns comandos Git. Para obter mais informações, confira "[Como sincronizar um fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)".

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para configurar um repositório remoto para o repositório com fork, use o sinalizador `--remote`.

```shell
gh repo fork REPOSITORY --remote=true
```

Para especificar o nome do repositório remoto, use o sinalizador `--remote-name`.

```shell
gh repo fork REPOSITORY --remote-name "main-remote-repo"
```

{% endcli %}

### Editando uma bifurcação

Você pode fazer alterações em uma bifurcação, incluindo:

- **Como criar branches:** os [*branches*](/articles/creating-and-deleting-branches-within-your-repository/) permitem que você crie recursos ou teste ideias sem colocar seu projeto principal em risco.
- **Como abrir solicitações de pull:** se você deseja contribuir novamente para o repositório upstream, envie uma solicitação ao autor original para efetuar pull do fork no repositório enviando uma [solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

## Localize outro repositório para bifurcar
Bifurque um repositório para começar a contribuir com um projeto. {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}Procure [Explorar](https://github.com/explore) para encontrar projetos e começar a contribuir nos repositórios de código aberto. Para obter mais informações, confira "[Como encontrar maneiras de contribuir com o código aberto no {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".

{% endif %}

## Próximas etapas

Você já bifurcou um repositório, treinou clonar sua bifurcação e configurou um repositório upstream.

* Para obter mais informações sobre como clonar a bifurcação e sincronizar as alterações em um repositório bifurcado usando o seu computador, confira "[Configurar o Git](/articles/set-up-git)".

* Você também pode criar um novo repositório onde você pode colocar todos os seus projetos e compartilhar o código em {% data variables.product.prodname_dotcom %}. {% data reusables.getting-started.create-a-repository %}"

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
