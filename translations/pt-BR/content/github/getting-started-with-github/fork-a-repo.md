---
title: Bifurcar um repo
redirect_from:
  - /fork-a-repo/
  - /forking/
  - /articles/fork-a-repo
intro: Uma bifurcação é uma cópia de um repositório. Bifurcar um repositório permite que você faça experiências à vontade sem comprometer o projeto original.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

O uso mais comum das bifurcações são propostas de mudanças no projeto de alguma outra pessoa ou o uso do projeto de outra pessoa como ponto de partida para sua própria ideia.

#### Proponha mudanças no projeto de outra pessoa

Por exemplo, você pode usar bifurcações para propor alterações relacionadas à correção de um bug. Em vez de registrar um erro encontrado, é possível:

- Bifurcar o repositório.
- Fazer a correção.
- Enviar um pull request ao proprietário do projeto.

#### Use o projeto de outra pessoa como ponto de partida para sua própria ideia.

O software de código aberto baseia-se na ideia de que ao compartilhar códigos, podemos criar softwares melhores e mais confiáveis. Para obter mais informações, consulte "[Sobre a Iniciativa Open Source](http://opensource.org/about)" em Iniciativa Open Source.

Ao criar um repositório público a partir de uma bifurcação do projeto de outra pessoa, confirme que incluiu um arquivo de licença que estabelece como você quer que seu projeto seja compartilhado com outros. Para obter mais informações, consulte [Escolha uma licença de código aberto](http://choosealicense.com/)" em choosealicense.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% note %}

**Observação**: {% data reusables.repositories.desktop-fork %}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Dica**: Você também pode bifurcar um repositório usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`bifurcação do repositório gh`](https://cli.github.com/manual/gh_repo_fork)" na documentação do {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

### Bifurque um exemplo de repositório

Bifurcar um repositório é um processo fácil, de duas etapas. Criamos um repositório para você usar para treinar.

1. Em {% data variables.product.product_location %}, navegue até o repositório [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
2. No canto superior direito da página, clique em **Fork** (Bifurcação). ![Botão Fork (Bifurcação)](/assets/images/help/repository/fork_button.jpg)

### Mantenha sua bifurcação sincronizada

Você pode bifurcar um projeto para propor alterações no repositório upstream ou original. Nesse caso, uma boa prática é sincronizar regularmente sua bifurcação com o repositório upstream. Para isso, é necessário usar Git na linha de comando. Pratique configurando o repositório upstream com o mesmo repositório [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) que você acabou de bifurcar.

#### Etapa 1: Configure o Git

Se ainda não o fez, primeiro [configure o Git](/articles/set-up-git). Lembre-se também de [configurar a autenticação para {% data variables.product.product_location %} a partir do Git](/articles/set-up-git#next-steps-authenticating-with-github-from-git).

#### Etapa 2: Crie um clone local de sua bifurcação

Agora você tem uma bifurcação do repositório Spoon-Knife, mas não os arquivos daquele repositório em seu computador. Vamos criar um clone da sua bifurcação localmente em seu computador.

1. Em {% data variables.product.product_name %}, vá até **your fork** (sua bifurcação) no repositório Spoon-Knife.
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

Agora você já tem uma cópia local de sua bifurcação do repositório Spoon-Knife.

#### Etapa 3: Configure o Git para sincronizar sua bifurcação com o repositório Spoon-Knife original

Ao bifurcar um projeto para propor mudanças no repositório original, é possível configurar o Git para fazer pull de mudanças do repositório original ou upstream no clone local de sua bifurcação.

1. Em {% data variables.product.product_name %}, vá até o repositório [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife).
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Mude os diretórios do local que você clonou a bifurcação na [Etapa 2: Crie um clone local de sua bifurcação](#step-2-create-a-local-clone-of-your-fork).
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

6. Digite `git remote add upstream`, cole a URL que você copiou na etapa 2 e pressione **Enter**. Ficará assim:
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

Agora é possível manter a bifurcação sincronizada com o repositório upstream usando apenas alguns comandos Git. Para obter mais informações, consulte "[Sincronizar uma bifurcação](/articles/syncing-a-fork)".

#### Próximas etapas

Você pode fazer alterações em uma bifurcação, incluindo:

- **Criar branches: ** os [* branches*](/articles/creating-and-deleting-branches-within-your-repository/) permitem desenvolver novos recursos ou testar novas ideias sem colocar o projeto atual em risco.
- **Abrir pull requests:** caso queira fazer contribuições no repositório original, ao enviar uma [pull request](/articles/about-pull-requests), você pode solicitar que o autor do repositório original faça pull de sua bifurcação no repositório dele.

### Localize outro repositório para bifurcar

Bifurque um repositório para começar a contribuir com um projeto. {% data reusables.repositories.you-can-fork %}

{% if currentVersion == "free-pro-team@latest" %}Você pode navegar em [Explore](https://github.com/explore) (Explorar) para encontrar projetos e começar a contribuir com repositórios de código aberto. Para obter mais informações, consulte "[Encontrar maneiras de contribuir para o código aberto em {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

{% endif %}

### Comemore

Você já bifurcou um repositório, treinou clonar sua bifurcação e configurou um repositório upstream. O que quer fazer agora?

- "[Configurar o Git](/articles/set-up-git)"
- "[Criar um repositório](/articles/creating-a-new-repository)"
- "[Socializar](/articles/be-social)"
- {% data reusables.support.connect-in-the-forum-bootcamp %}
