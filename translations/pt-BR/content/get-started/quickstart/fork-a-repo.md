---
title: Bifurcar um repo
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: Uma bifurcação é uma cópia de um repositório. Bifurcar um repositório permite que você faça experiências à vontade sem comprometer o projeto original.
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
---

## Sobre bifurcações

Mais comumente, as bifurcações são usadas para propor mudanças no projeto de outra pessoa ao qual você não tem acesso de gravação, ou para usar o projeto de outra pessoa como ponto de partida para sua própria ideia. Você pode bifurcar um repositório para criar uma cópia do repositório e fazer alterações sem afetar o repositório upstream. Para obter mais informações, consulte "[Trabalhando com as bifurcações](/github/collaborating-with-issues-and-pull-requests/working-with-forks)".

### Proponha mudanças no projeto de outra pessoa

Por exemplo, você pode usar bifurcações para propor alterações relacionadas à correção de um bug. Em vez de registrar um problema para um erro que você encontrou, você pode:

- Bifurcar o repositório.
- Fazer a correção.
- Enviar um pull request ao proprietário do projeto.

### Use o projeto de outra pessoa como ponto de partida para sua própria ideia.

O software de código aberto baseia-se na ideia de que ao compartilhar códigos, podemos criar softwares melhores e mais confiáveis. Para obter mais informações, consulte "[Sobre a Iniciativa Open Source](http://opensource.org/about)" em Iniciativa Open Source.

Para obter mais informações sobre a aplicação dos princípios de código aberto ao trabalho de desenvolvimento da sua organização em {% data variables.product.product_location %}, consulte o white paper de {% data variables.product.prodname_dotcom %} "[Uma introdução ao innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

{% ifversion fpt or ghes or ghec %}

Ao criar um repositório público a partir de uma bifurcação do projeto de outra pessoa, confirme que incluiu um arquivo de licença que estabelece como você quer que seu projeto seja compartilhado com outros. Para obter mais informações, consulte [Escolha uma licença de código aberto](https://choosealicense.com/)" em choosealicense.com.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endif %}

## Pré-requisitos

Se ainda não o fez, primeiro [configure o Git](/articles/set-up-git). Lembre-se também de [configurar a autenticação para {% data variables.product.product_location %} a partir do Git](/articles/set-up-git#next-steps-authenticating-with-github-from-git).

## Bifurcar um repositório

{% webui %}

Você pode bifurcar um projeto para propor alterações no repositório upstream ou original. Nesse caso, uma boa prática é sincronizar regularmente sua bifurcação com o repositório upstream. Para isso, é necessário usar Git na linha de comando. Você pode praticar configurando o repositório upstream com o mesmo repositório [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) que você acabou de bifurcar.

1. Em {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %}, acesse o repositório [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
2. No canto superior direito da página, clique em **Fork** (Bifurcação). ![Botão Fork (Bifurcação)](/assets/images/help/repository/fork_button.jpg)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para criar a bifurcação de um repositório, use o subcomando `gh repo fork`.

```shell
gh repo fork <em>repository</em>
```

Para criar a bifurcação em uma organização, use o sinalizador `--org`.

```shell
gh repo fork <em>repository</em> --org "octo-org"
```

{% endcli %}

{% desktop %}
{% enddesktop %}

## Clonando o seu repositório bifurcado

Agora, você tem uma bifurcação do repositório Spoon-Knife, mas você não tem os arquivos nesse repositório localmente no seu computador.

{% webui %}

1. Em {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %}, acesse **a sua bifurcaçãofork** do repositório Spoon-Knife.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
4. Digite `git clone` (clonar git) e cole a URL que você copiou anteriormente. Ficará assim, com seu {% data variables.product.product_name %} nome de usuário no lugar de `YOUR-USERNAME`:
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  ```

5. Pressione **Enter**. Seu clone local estará criado.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  > Clonando para `Spoon-Knife`...
  > remote: Contando objetos: 10, concluído.
  > remote: Compactando objetos: 100% (8/8), concluído.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para criar um clone da sua *bifurcação*, use o sinalizador `--clone`.

```shell
gh repo fork <em>repository</em> --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

{% enddesktop %}

## Configurar o Git para sincronizar a bifurcação com o repositório original

Ao bifurcar um projeto para propor mudanças no repositório original, é possível configurar o Git para fazer pull de alterações do repositório original ou upstream no clone local de sua bifurcação.

{% webui %}

1. Em {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %}, acesse o repositório [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Mude os diretórios para a localidade da bifurcação que você clonou.
    - Para acessar seu diretório pessoal, apenas digite `cd` sem nenhum outro texto.
    - Para listar os arquivos e pastas em seu diretório atual, digite `ls`.
    - Para acessar um dos diretórios listados, digite `cd your_listed_directory`.
    - Para acessar um diretório, digite `cd ..`.
5. Digite `git remote -v` e pressione **Enter**. Você verá o repositório remote atual configurado para sua bifurcação.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```

6. Digite `git remote add upstream`, cole o URL que você copiou na etapa 3 e pressione **Enter**. Ficará assim:
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
  ```

7. Para verificar o novo repositório upstream que você especificou para sua bifurcação, digite novamente `git remote -v`. Você deverá visualizar a URL da sua bifurcação como `origin` (origem) e a URL do repositório original como `upstream`.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```

Agora é possível manter a bifurcação sincronizada com o repositório upstream usando apenas alguns comandos Git. Para obter mais informações, consulte "[Sincronizar uma bifurcação](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)".

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para configurar um repositório remoto para o repositório bifurcado, use o sinalizador `--remote`.

```shell
gh repo fork <em>repository</em> --remote=true
```

Para especificar o nome do repositório remoto, use o sinalizador `--remote-name`.

```shell
gh repo fork <em>repository</em> --remote-name "main-remote-repo"
```

{% endcli %}

### Editando uma bifurcação

Você pode fazer alterações em uma bifurcação, incluindo:

- **Criar branches: ** os [* branches*](/articles/creating-and-deleting-branches-within-your-repository/) permitem desenvolver novos recursos ou testar novas ideias sem colocar o projeto atual em risco.
- **Abrir pull requests:** caso queira fazer contribuições no repositório original, ao enviar uma [pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests), você pode solicitar que o autor do repositório original faça pull de sua bifurcação no repositório dele.

## Localize outro repositório para bifurcar
Bifurque um repositório para começar a contribuir com um projeto. {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}Você pode navegar em [Explorar](https://github.com/explore) para encontrar projetos e começar a contribuir com repositórios de código aberto. Para obter mais informações, consulte "[Encontrar maneiras de contribuir para o código aberto em {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

{% endif %}

## Próximos passos

Você já bifurcou um repositório, treinou clonar sua bifurcação e configurou um repositório upstream.

* Para obter mais informações sobre a clonagem da bifurcação e sincronizar as alterações em um repositório bifurcado a partir do seu computador, consulte "[Configurar o Git](/articles/set-up-git)".

* Você também pode criar um novo repositório onde você pode colocar todos os seus projetos e compartilhar o código em {% data variables.product.prodname_dotcom %}. {% data reusables.getting-started.create-a-repository %}"

* Cada repositório em {% data variables.product.product_name %} pertence a uma pessoa ou organização. Você pode interagir com usuários, repositórios e organizações, conectando-os e seguindo-os em {% data variables.product.product_name %}. {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
