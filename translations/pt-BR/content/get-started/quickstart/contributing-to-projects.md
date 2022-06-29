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
---

## Sobre a bifurcação

Depois de usar o GitHub por um tempo, você deverá contribuir para o projeto de outra pessoa. Ou talvez você deva usar o projeto de alguém como ponto de partida para o seu próprio projeto. Este processo é conhecido como bifurcação.

A criação de uma "bifurcação" produz uma cópia pessoal do projeto de outra pessoa. As bifurcações atuam como um tipo de ponte entre o repositório original e a sua cópia pessoal. Você pode enviar pull requests para ajudar a melhorar os projetos de outras pessoas oferecendo suas alterações até o projeto original. A bifurcação é um elemento essencial do código social no GitHub. Para obter mais informações, consulte "[Bifurcar um repositório](/get-started/quickstart/fork-a-repo)".

## Bifurcar um repositório

Este tutorial usa [o projeto Spoon-Knife](https://github.com/octocat/Spoon-Knife), um repositório de teste hospedado em {% data variables.product.prodname_dotcom_the_website %} que permite testar o fluxo de trabalho de bifurcação e pull request.

1. Acecsse o projeto `Spoon-Knife` em https://github.com/octocat/Spoon-Knife.
2. Clique em **Bifurcação**. ![Botão Fork (Bifurcação)](/assets/images/help/repository/fork_button.png)
1. {% data variables.product.product_name %} irá direcionar você para sua cópia (sua bifurcação) do repositório Spoon-Knife.

## Clonando uma bifurcação

Você criou com sucesso o repositório Spoon-Knife mas, até agora, ele existe apenas em {% data variables.product.product_name %}. Para poder trabalhar no projeto, você deverá cloná-lo para o seu computador.

Você pode clonar a sua bifurcação com a linha de comando, {% data variables.product.prodname_cli %} ou {% data variables.product.prodname_desktop %}.

{% webui %}

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

## Fazendo e enviando por push as alterações

Faça algumas alterações no projeto usando o seu editor de texto favorito, como [Visual Studio Code](https://code.visualstudio.com). Você pode, por exemplo, alterar o texto em `index.html` para adicionar o seu nome de usuário do GitHub.

Quando estiver pronto para enviar suas alterações, teste e faça commit das suas alterações. `git add .` informa ao Git que você deseja incluir todas as alterações no próximo commit. `git commit` tira um instantâneo dessas alterações.

{% webui %}

```shell
git add .
git commit -m "Uma breve descrição da alteração"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "Uma breve descrição da alteração"
```

{% endcli %}

{% desktop %}

Para obter mais informações sobre como testar e fazer commit das alterações em {% data variables.product.prodname_desktop %}, consulte "[Fazendo commit e revisando as alterações no seu projeto](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)."

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

Para obter mais informações sobre como fazer push de alterações em {% data variables.product.prodname_desktop %}, consulte "[Envio por push das alterações para o GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)."

{% enddesktop %}

## Fazendo um pull request

Finalmente, você está pronto para propor alterações no projeto principal! Essa é a última etapa para produzir uma bifurcação do projeto de outra pessoa, e a mais importante, indiscutivelmente. Se você fez uma alteração que você considera que beneficiaria a comunidade como um todo, você deve considerar contribuir de novamente.

Para fazer isso, acesse o repositório {% data variables.product.product_name %} onde seu projeto encontra-se. Para este exemplo, ela seria em `https://www.github.com/<your_username>/Spoon-Knife`. Você verá um banner que indica que o seu branch é um commit à frente do `octocat: main`. Clique em **Contribuir ** e, em seguida, **Abrir um pull request**.

O {% data variables.product.product_name %} levará você a uma página que mostra as diferenças entre a sua bifurcação e o repositório `octocat/Spoon-Knife`. Clique em **Create pull request** (Criar pull request).

{% data variables.product.product_name %} levará você a uma página onde você pode inserir um título e uma descrição das suas alterações. É importante fornecer tantas informações úteis e uma razão para o motivo de você estar fazendo este pull request. O proprietário do projeto deve poder determinar se a sua alteração é tão útil para todos quanto você pensa. Por fim, clique em **Criar pull request**.

## Gerenciando feedback

Os pull requests são uma área de discussão. Neste caso, o Octocat está muito ocupado e provavelmente não irá fazer merge das suas alterações. Para outros projetos, não se ofenda se o proprietário do projeto rejeitar o seu pull request ou pedir mais informações sobre o porquê de a alteração ter sido feita. Pode até ser que o proprietário do projeto não faça o merge do seu pull request e isso está perfeitamente bem. Your copy will exist in infamy on the Internet. E quem sabe - talvez alguém que você nunca conheceu, considere as suas alterações muito mais valiosas do que o projeto original.

## Encontrando projetos

Você fez uma bifurcação com sucesso e contribuiu de volta para um repositório. Vá em frente e contribua com um pouco mais!{% ifversion fpt %} Para obter mais informações, consulte "[Encontrando formas de contribuir com código aberto no GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github).{% endif %}
