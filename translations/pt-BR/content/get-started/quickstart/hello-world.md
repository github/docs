---
title: Hello World
intro: 'Siga este exercício de Hello World para dar os primeiros passos com {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
---

## Introdução

{% data variables.product.product_name %} é uma plataforma de hospedagem de código para controle de versão e colaboração. Permite que você e outras pessoas trabalhem em conjunto em projetos de qualquer lugar.

Este tutorial ensina os princípios básicos de {% data variables.product.product_name %} como, por exemplo, repositórios, branches, commits e pull requests. Você criará seu próprio repositório Hello World e aprenderá o fluxo de trabalho de pull request de {% data variables.product.product_name %}, uma maneira popular de criar e revisar o código.

Neste guia de início rápido, você irá:

* Criar e usar um repositório
* Iniciar e gerenciar um novo branch
* Fazer alterações em um arquivo e enviá-los por push para {% data variables.product.product_name %} como commits
* Abrir e realizar merge de um pull request

Para concluir este tutorial, você precisa de uma conta [{% data variables.product.product_name %}](http://github.com) e acesso à internet. Você não precisa saber como programar, usar a linha de comando ou instalar o Git (o software de controle de versão no qual {% data variables.product.product_name %} é criado). Se você tiver uma pergunta sobre alguma das expressões usadas neste guia, acesse o [glossário](/get-started/quickstart/github-glossary) para saber mais sobre nossa terminologia.

## Criar um repositório

Um repositório geralmente é usado para organizar um único projeto. Os repositórios podem conter pastas e arquivos, imagens, vídeos, planilhas e conjuntos de dados - tudo o que seu projeto precisar. Muitas vezes, os repositórios incluem um arquivo _README_, um arquivo com informações sobre o seu projeto. Os arquivos _README_ estão escritos na linguagem Markdown em texto simples. Você pode usar a [folha informativa](https://www.markdownguide.org/cheat-sheet/) para começar com a sintaxe Markdown. {% data variables.product.product_name %} permite adicionar um arquivo _README_ ao mesmo tempo em que você cria o seu novo repositório. {% data variables.product.product_name %} também oferece outras opções comuns, como um arquivo de licença, mas você não precisa selecionar nenhuma delas agora.

Seu repositório `hello-world` pode ser um lugar onde você armazenar ideias, recursos ou até mesmo compartilhar e discutir coisas com outros.

{% data reusables.repositories.create_new %}
1. Na caixa **Nome do repositório**, insira em `hello-world`.
2. Na caixa **Descrição**, escreva uma breve descrição.
3. Selecione **Adicionar um arquivo README**.
4. Selecione se o seu repositório será **Público** ou **Privado**.
5. Clique em **Create Repository** (Criar repositório).

   ![Crie um repositório hello world](/assets/images/help/repository/hello-world-repo.png)

## Criar um branch

O Branch permite que você tenha diferentes versões de um repositório de uma só vez.

Por padrão, o repositório tem um branch denominado `principal` que é considerado o branch definitivo. É possível criar branches adicionais a partir do `principal` no seu repositório. Você pode usar branches para ter diferentes versões de um projeto de uma só vez. Isso é útil quando você deseja adicionar novas funcionalidades a um projeto sem alterar a principal fonte de código. O trabalho feito em diferentes branches não aparecerá no branch principal até que você faça o merge, que abordaremos mais tarde neste guia. Você pode usar branches para experimentar e fazer edições antes de fazer commit no `principal`.

Ao criar um banch fora do branch `principal`, você está criando uma cópia ou instantâneo do `principal`, como era nesse momento. Se alguém fizer alterações no branch `principal` enquanto você estava trabalhando no seu branch, você poderia fazer essas atualizações.

Este diagrama mostra:

* O branch `principal`
* Um novo branch denominado `funcionalidade`
* A jornada que as `funcionalidades` percorre antes de sofrer merge no `principal`

![diagrama do branch](/assets/images/help/repository/branching.png)

Você já salvou diferentes versões de um arquivo? Algo assim:

* `story.txt`
* `story-edit.txt`
* `story-edit-reviewed.txt`

Os branches realizam objetivos semelhantes em repositórios de {% data variables.product.product_name %}.

Aqui em {% data variables.product.product_name %}, os nossos desenvolvedores, escritores, e designers usam branches para manter correções de erros e funções separadas do nosso branch `principal` (produção). Quando uma alteração está pronta, eles fazem merge do seu branch no `principal`.

### Criar uma branch

1. Clique na aba **Código** do seu repositório `hello-world`.
2. Clique na lista suspensa na parte superior da lista de arquivos que diz **principal**. ![Menu do branch](/assets/images/help/branch/branch-selection-dropdown.png)
4. Digite um nome de um branch, `readme-edits` na caixa de texto.
5. Clique em **Criar branch: readme-edits a partir do principal**.

![Menu do branch](/assets/images/help/repository/new-branch.png)

Agora você tem dois ramos, `principal` e `readme-edits`. Neste momento, eles são exatamente os mesmos. Em seguida, você adicionará alterações ao novo branch.

## Criando e fazendo commit das alterações

Quando você criou um novo branch na etapa, {% data variables.product.product_name %} trouxe você para a página de código para o novo branch `readme-edits`, que é uma cópia do `principal`.

Você pode fazer e salvar as alterações nos arquivos do seu repositório. Em {% data variables.product.product_name %}, as alterações salvas são denominadas commits. Cada commit tem uma mensagem de commit associada, que é uma descrição que explica por que uma determinada alteração foi feita. As mensagens de commit capturam histórico das suas alterações para que outros colaboradores possam entender o que você fez e o porquê.

1. No branch `edições de leitura` que você criou, clique no arquivo _README.md_.
2. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar o arquivo.
3. No editor, escreva um pouco sobre você. Tente usar diferentes elementos do Markdown.
4. Na caixa **Alterações de commit**, escreva uma mensagem de commit que descreva as suas alterações.
5. Clique em **Commit changes** (Fazer commit das alterações).

   ![Exemplo de commit](/assets/images/help/repository/first-commit.png)

Essas alterações serão feitas apenas no arquivo README no seu branch `readme-edits` para que agora este branch tenha conteúdo diferente do `principal`.

## Abrir um pull request

Agora que você tem alterações em um branch com `principal`, você pode abrir um pull request.

Os pull requests são o centro da colaboração em {% data variables.product.product_name %}. Ao abrir um pull request, você está propondo suas alterações e solicitando que alguém analise e faça pull na sua contribuição e os mescle no seu branch. Os pull requests mostram diffs, ou diferenças, do conteúdo de ambos os branches. As alterações, adições e subtrações são exibidas em cores diferentes.

Assim que você fizer um commit, você poderá abrir um pull request e começar uma discussão, mesmo antes de o código ser concluído.

Ao usar o recurso `@mention`de {% data variables.product.product_name %} na sua mensagem de pull request, você pode pedir feedback de pessoas ou equipes específicas, independentemente de estarem no salão ou de estarem fora do fuso horário.

Você pode até abrir pull requests em seu próprio repositório e fazer merge você mesmo. É uma ótima maneira de aprender o fluxo de {% data variables.product.product_name %} antes de trabalhar em projetos maiores.

1. Clique na aba **Pull requests** do seu repositório `hello-world`.
2. Clique em **Novo pull request**
3. Na caixa de **Exemplo de comparações**, selecione o branch que você criou, `readme-edits`, para comparar com o `principal` (o original).
4. Veja as mudanças que você fez na página de Comparação e certifique-se que eles são o que você deseja enviar.

   ![exemplo de diff](/assets/images/help/repository/diffs.png)

5. Clique em **Create pull request** (Criar pull request).
6. Dê um título ao seu pull request e escreva uma breve descrição das suas alterações. Você pode incluir emojis e arrastar e soltar imagens e gifs.
7. Opcionalmente, à direita do seu título e descrição, clique em {% octicon "gear" aria-label="The Gear icon" %} ao lado de **Revisores**. **Responsáveis**, **Etiquetas**, **Projetos** ou **Marco** para adicionar qualquer uma destas opções ao seu pull request. Você não precisa adicionar nenhum ainda, mas essas opções oferecem diferentes formas de colaborar usando pull requests. Para obter mais informações, consulte "[Sobre pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".
7. Clique em **Create pull request** (Criar pull request).

Seus colaboradores agora podem revisar suas edições e fazer sugestões.

## Mesclando seu pull request

Nesta etapa final, você irá fazer merge do seu branch `readme-edits` no branch `principal`.  Depois de realizar o merge do seu pull request, as alterações no seu branch `readme-` serão incorporadas ao `principal`.

Às vezes, um pull request pode introduzir alterações no código que estão em conflito com o código existente no `principal`. Se houver algum conflito, o {% data variables.product.product_name %} irá alertar você sobre o código conflitante e impedirá a fusão até que os conflitos sejam resolvidos. Você pode criar um commit que resolve os conflitos ou usar comentários na pull request para discutir os conflitos com os integrantes da equipe.

Nesta apresentação, você não deverá ter conflitos. Portanto, você está pronto para fazer merge do seu branch no branch principal.

1. Clique **Fazer merge do pull request** para fazer merge das alterações no `principal`. ![Captura de tela do botão de merge.](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
2. Clique em **Confirmar a merge**. Você receberá uma mensagem de que a solicitação foi mesclada com sucesso e o pedido foi encerrado.
3. Clique **Excluir branch**. Agora que seu pull request foi mesclado e as suas alterações estão no `principal`, você pode excluir com segurança o branch `readme-edits`. Se você quiser fazer mais alterações no seu projeto, você pode sempre criar um novo branch e repetir este processo.

## Próximas etapas

Ao completar este tutorial, você aprendeu a criar um projeto e criar um pull request em {% data variables.product.product_name %}.

Aqui está o que você realizou neste tutorial:

* Criou um repositório de código aberto
* Iniciou e gerenciou um nova branch
* Alterou um arquivo e fez commit dessas alterações para {% data variables.product.product_name %}
* Abriu e fez o merge de um pull request

Dê uma olhada no seu perfil de {% data variables.product.product_name %} e você verá o seu trabalho refletido no seu gráfico de contribuição.

Para obter mais informações sobre o poder dos branches e pull requests, consulte "[Fluxo do GitHub](/get-started/quickstart/github-flow)". Para obter mais informações sobre como dar os primeiros passos com {% data variables.product.product_name %}, consulte os outros guias no [início rápido](/get-started/quickstart).
