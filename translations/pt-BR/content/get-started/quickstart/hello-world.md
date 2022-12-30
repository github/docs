---
title: 'Olá, Mundo'
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
ms.openlocfilehash: 71278b720bcbfaabc892c396ab7fb558f5309173
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101358'
---
## Introdução

{% data variables.product.product_name %} é uma plataforma de hospedagem de código para controle de versão e colaboração. Permite que você e outras pessoas trabalhem em conjunto em projetos de qualquer lugar.

Este tutorial ensina os princípios básicos de {% data variables.product.product_name %} como, por exemplo, repositórios, branches, commits e pull requests. Você criará seu próprio repositório Hello World e aprenderá o fluxo de trabalho de pull request de {% data variables.product.product_name %}, uma maneira popular de criar e revisar o código.

Neste guia de início rápido, você irá:

* Criar e usar um repositório
* Iniciar e gerenciar um novo branch
* Fazer alterações em um arquivo e enviá-los por push para {% data variables.product.product_name %} como commits
* Abrir e realizar merge de um pull request

Para concluir este tutorial, você precisa ter uma [conta do {% data variables.product.product_name %}](http://github.com) e acesso à Internet. Você não precisa saber como programar, usar a linha de comando ou instalar o Git (o software de controle de versão no qual {% data variables.product.product_name %} é criado). Caso tenha uma pergunta sobre uma das expressões usadas neste guia, vá até o [glossário](/get-started/quickstart/github-glossary) para saber mais sobre nossa terminologia.

## Criar um repositório

Um repositório geralmente é usado para organizar um único projeto. Os repositórios podem conter pastas e arquivos, imagens, vídeos, planilhas e conjuntos de dados - tudo o que seu projeto precisar. Geralmente, os repositórios incluem um arquivo _README_, um arquivo com informações sobre seu projeto. Os arquivos _README_ são escritos na linguagem Markdown em texto sem formatação. Use esta [folha de referências](https://www.markdownguide.org/cheat-sheet/) para começar a usar a sintaxe Markdown. O {% data variables.product.product_name %} permite adicionar um arquivo _README_ ao mesmo tempo em que você cria seu repositório. {% data variables.product.product_name %} também oferece outras opções comuns, como um arquivo de licença, mas você não precisa selecionar nenhuma delas agora.

Seu repositório `hello-world` pode ser um lugar em que você armazena ideias, recursos ou até compartilha e discute assuntos com outras pessoas.

{% data reusables.repositories.create_new %}
1. Na caixa **Nome do repositório**, insira `hello-world`.
2. Na caixa **Descrição**, escreva uma breve descrição.
3. Selecione **Adicionar um arquivo LEIAME**.
4. Selecione se o repositório será **Público** ou **Privado**.
5. Clique em **Criar repositório**.

   ![Crie um repositório hello world](/assets/images/help/repository/hello-world-repo.png)

## Criar um branch

O Branch permite que você tenha diferentes versões de um repositório de uma só vez.

Por padrão, seu repositório tem um branch chamado `main` que é considerado o branch definitivo. Você pode criar branches adicionais com base em `main` no repositório. Você pode usar branches para ter diferentes versões de um projeto de uma só vez. Isso é útil quando você deseja adicionar novas funcionalidades a um projeto sem alterar a principal fonte de código. O trabalho feito em diferentes branches não aparecerá no branch principal até que você faça o merge, que abordaremos mais tarde neste guia. Você pode usar branches para fazer experimentos e edições antes de fazer commit delas em `main`.

Quando você cria um branch com base no branch `main`, você faz uma cópia ou um instantâneo de `main` como ele era naquele momento. Se outra pessoa fez alterações no branch `main` enquanto você estava trabalhando no seu branch, você pode efetuar pull dessas atualizações.

Este diagrama mostra:

* O branch `main`
* Um novo branch chamado `feature`
* O percurso que o `feature` faz antes de ser mesclado em `main`

![diagrama do branch](/assets/images/help/repository/branching.png)

Você já salvou diferentes versões de um arquivo? Algo assim:

* `story.txt`
* `story-edit.txt`
* `story-edit-reviewed.txt`

Os branches realizam objetivos semelhantes em repositórios de {% data variables.product.product_name %}.

Aqui no {% data variables.product.product_name %}, nossos desenvolvedores, escritores e designers usam branches para manter as correções de bugs e o trabalho de recursos separados do nosso branch `main` (produção). Quando uma alteração fica pronta, eles mesclam o respectivo branch em `main`.

### Criar um branch

1. Clique na guia **Código** do repositório `hello-world`.
2. Clique na lista suspensa no início da lista de arquivos que indica **principal**.
   ![Menu Branch](/assets/images/help/branch/branch-selection-dropdown.png)
4. Digite um nome de branch, `readme-edits`, na caixa de texto.
5. Clique em **Criar branch: readme-edits com base no principal**.

![Menu do branch](/assets/images/help/repository/new-branch.png)

Agora você tem dois branches, `main` e `readme-edits`. Neste momento, eles são exatamente os mesmos. Em seguida, você adicionará alterações ao novo branch.

## Criando e fazendo commit das alterações

Quando você criou um branch na etapa anterior, o {% data variables.product.product_name %} direcionou você para a página de código do novo branch `readme-edits`, que é uma cópia de `main`.

Você pode fazer e salvar as alterações nos arquivos do seu repositório. Em {% data variables.product.product_name %}, as alterações salvas são denominadas commits. Cada commit tem uma mensagem de commit associada, que é uma descrição que explica por que uma determinada alteração foi feita. As mensagens de commit capturam histórico das suas alterações para que outros colaboradores possam entender o que você fez e o porquê.

1. Abaixo do branch `readme-edits` que você criou, clique no arquivo _README.md_.
2. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar o arquivo.
3. No editor, escreva um pouco sobre você. Tente usar diferentes elementos do Markdown.
4. Na caixa **Fazer commit das alterações**, escreva uma mensagem de commit que descreva as alterações.
5. Clique em **Fazer commit das alterações**.

   ![Exemplo de commit](/assets/images/help/repository/first-commit.png)

Essas alterações serão feitas somente no arquivo README no branch `readme-edits`, ou seja, agora esse branch tem um conteúdo diferente de `main`.

## Abrir um pull request

Agora que você tem alterações em um branch com base em `main`, abra uma solicitação de pull.

Os pull requests são o centro da colaboração em {% data variables.product.product_name %}. Ao abrir um pull request, você está propondo suas alterações e solicitando que alguém analise e faça pull na sua contribuição e os mescle no seu branch. Os pull requests mostram diffs, ou diferenças, do conteúdo de ambos os branches. As alterações, adições e subtrações são exibidas em cores diferentes.

Assim que você fizer um commit, você poderá abrir um pull request e começar uma discussão, mesmo antes de o código ser concluído.

Usando o recurso `@mention` do {% data variables.product.product_name %} na mensagem de solicitação de pull, você pode solicitar comentários de pessoas ou equipes específicas, estejam elas no corredor ou a dez fusos horários de distância.

Você pode até abrir pull requests em seu próprio repositório e fazer merge você mesmo. É uma ótima maneira de aprender o fluxo de {% data variables.product.product_name %} antes de trabalhar em projetos maiores.

1. Clique na guia **Solicitações de pull** do repositório `hello-world`.
2. Selecione **Nova solicitação de pull**
3. Na caixa **Exemplos de Comparações**, selecione o branch que você criou, `readme-edits`, para compará-lo com `main` (o original).
4. Veja as mudanças que você fez na página de Comparação e certifique-se que eles são o que você deseja enviar.

   ![exemplo de diff](/assets/images/help/repository/diffs.png)

5. Clique em **Criar solicitação de pull**.
6. Dê um título ao seu pull request e escreva uma breve descrição das suas alterações. Você pode incluir emojis e arrastar e soltar imagens e gifs.
7. Opcionalmente, à direita do título e da descrição, clique no {% octicon "gear" aria-label="The Gear icon" %} ao lado de **Revisores**. **Destinatários**, **Rótulos**, **Projetos** ou **Marco** para adicionar uma dessas opções à solicitação de pull. Você não precisa adicionar nenhum ainda, mas essas opções oferecem diferentes formas de colaborar usando pull requests. Para obter mais informações, confira "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".
7. Clique em **Criar solicitação de pull**.

Seus colaboradores agora podem revisar suas edições e fazer sugestões.

## Mesclando seu pull request

Nesta etapa final, você mesclará o branch `readme-edits` no branch `main`.  Depois que você mesclar a solicitação de pull, as alterações no branch `readme-edits` serão incorporadas em `main`.

Às vezes, uma solicitação de pull pode introduzir alterações no código que entram em conflito com o código existente em `main`. Se houver algum conflito, o {% data variables.product.product_name %} irá alertar você sobre o código conflitante e impedirá a fusão até que os conflitos sejam resolvidos. Você pode criar um commit que resolve os conflitos ou usar comentários na pull request para discutir os conflitos com os integrantes da equipe.

Nesta apresentação, você não deverá ter conflitos. Portanto, você está pronto para fazer merge do seu branch no branch principal.

1. Clique em **Mesclar solicitação de pull** para mesclar as alterações em `main`.
  ![Captura de tela do botão Mesclar.](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
2. Clique em **Confirmar mesclagem**. Você receberá uma mensagem de que a solicitação foi mesclada com sucesso e o pedido foi encerrado.
3. Clique em **Excluir branch**. Agora que a sua solicitação de pull foi mesclada e as alterações estão em `main`, você pode excluir o branch `readme-edits` com segurança. Se você quiser fazer mais alterações no seu projeto, você pode sempre criar um novo branch e repetir este processo.

## Próximas etapas

Ao completar este tutorial, você aprendeu a criar um projeto e criar um pull request em {% data variables.product.product_name %}.

Aqui está o que você realizou neste tutorial:

* Criou um repositório de código aberto
* Iniciou e gerenciou um nova branch
* Alterou um arquivo e fez commit dessas alterações para {% data variables.product.product_name %}
* Abriu e fez o merge de um pull request

Dê uma olhada no seu perfil de {% data variables.product.product_name %} e você verá o seu trabalho refletido no seu gráfico de contribuição.

Para obter mais informações sobre o poder dos branches e das solicitações de pull, confira "[Fluxo do GitHub](/get-started/quickstart/github-flow)". Para obter mais informações sobre como começar a usar o {% data variables.product.product_name %}, confira os outros guias no [guia de início rápido de introdução](/get-started/quickstart).
