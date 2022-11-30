---
title: Incorporando feedback em sua pull request
intro: 'Quando os revisores sugerem mudanças em uma pull request, é possível incorporar automaticamente as alterações na pull request ou abrir um problema para monitorar sugestões fora do escopo.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
  - /articles/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Incorporate feedback
ms.openlocfilehash: b94c7ddc682b1e53077770877140eb2a218a19de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128024'
---
## Aplicando alterações sugeridas

Outras pessoas podem sugerir alterações específicas em sua pull request. É possível aplicar essas alterações sugeridas diretamente em uma pull request, se você tiver acesso de gravação no repositório. Se a pull request foi criada a partir de uma bifurcação e o autor permitir edições de mantenedores, você também pode aplicar as alterações sugeridas, caso tenha acesso ao repositório upstream. Para obter mais informações, confira "[Como adicionar um comentário a uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" e "[Como permitir alterações em um branch da solicitação de pull criado com base em um fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

Para incluir rapidamente mais de uma alteração sugerida em um único commit, também é possível aplicá-las como um lote. Aplicar uma alteração ou um lote de alterações sugeridas cria um único commit no branch comparado da pull request.

Cada pessoa que sugeriu uma alteração incluída no commit será uma coautora do commit. A pessoa que aplica as alterações sugeridas será uma coautora e committer do commit. Para obter mais informações sobre o termo "autor de commit" no Git, confira "[Noções básicas do Git – Como ver o histórico de commits](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)" no site do livro _Pro Git_.

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique naquela que você gostaria de aplicar a alteração sugerida.
3. Navegue até a primeira alteração sugerida que você gostaria de aplicar.
    - Para aplicar a alteração em um commit próprio, clique em **Fazer commit da sugestão**.
  ![Botão Fazer commit da sugestão](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - Para adicionar a sugestão a um lote de alterações, clique em **Adicionar sugestão ao lote**. Continue a adicionar as alterações sugeridas que quer incluir em um único commit. Quando terminar de adicionar as alterações sugeridas, clique em **Fazer commit das sugestões**.
  ![Botão Adicionar sugestão a um lote](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. No campo de mensagem do commit, digite uma mensagem curta e relevante que descreva a alteração que você fez no arquivo ou arquivos.
![Campo Mensagem do commit](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. Clique em **Fazer commit das alterações.** 
![Botão Fazer commit das alterações](/assets/images/help/pull_requests/commit-changes-button.png)

## Ressolicitar uma revisão

{% data reusables.pull_requests.re-request-review %}

## Abrir um problema para uma sugestão fora do escopo

Se alguém sugerir alterações na sua pull request que estão fora do escopo dela, abra um novo problema para acompanhar o feedback. Para obter mais informações, confira "[Como abrir um problema por meio de um comentário](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)".

## Leitura adicional

- "[Sobre as revisões de solicitação de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)"
- "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Como adicionar comentários a uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
- "[Como solicitar uma revisão de solicitação de pull](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)"
- "[Como abrir um problema por meio de um comentário](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)"
