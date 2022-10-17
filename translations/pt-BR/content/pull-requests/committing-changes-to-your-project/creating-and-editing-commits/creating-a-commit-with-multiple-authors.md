---
title: Criar um commit com vários autores
intro: 'Você pode atribuir um commit a mais de um autor adicionando um ou mais `Co-authored-by` trailers à mensagem de confirmação. Os commits de coautoria são visíveis em {% data variables.product.product_name %}{% ifversion ghes or ghae %} e podem ser incluídos no gráfico de contribuições do perfil e nas estatísticas do repositório{% endif %}.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: With multiple authors
ms.openlocfilehash: 4aa5b707e75480ead830e680151064db5f278557
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127162'
---
## Informações obrigatórias do coautor

Para poder adicionar um coautor a um commit, você deve saber o e-mail adequado a ser usado para cada coautor. Para o commit do coautor contar como uma contribuição, você deve usar o e-mail associado à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

{% ifversion fpt or ghec %}

Se uma pessoa optar por manter o endereço de email privado, você deverá usar o email `no-reply` fornecido pelo {% data variables.product.product_name %} para proteger a privacidade dela. Caso contrário, o e-mail do coautor estará disponível para o público na mensagem do commit. Se quiser manter seu email privado, você poderá optar por usar um email `no-reply` fornecido pelo {% data variables.product.product_name %} para operações do Git e pedir aos outros coautores que listem seu email `no-reply` nos trailers de commit.

Para obter mais informações, confira "[Como definir seu endereço de email de commit](/articles/setting-your-commit-email-address)".

  {% tip %}

  **Dica:** você pode ajudar um coautor a encontrar o endereço de email preferencial dele compartilhando estas informações:
  - Para encontrar seu email `no-reply` fornecido pelo {% data variables.product.product_name %}, navegue até a página de configurações do email em "Manter meu endereço de email privado".
  - Para encontrar o email usado para configurar o Git no computador, execute `git config user.email` na linha de comando.

  {% endtip %}

{% endif %}

## Criar commits coautorados usando o {% data variables.product.prodname_desktop %}

Você pode usar o {% data variables.product.prodname_desktop %} para criar um commit com um coautor. Para obter mais informações, confira "[Escrever uma mensagem de commit e efetuar push das alterações](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)" e [{% data variables.product.prodname_desktop %}](https://desktop.github.com).

![Adicionar um coautor à mensagem do commit](/assets/images/help/desktop/co-authors-demo-hq.gif)

## Criar commits coautorados na linha de comando

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. Digite sua mensagem de commit e uma descrição curta e significativa de suas alterações. Depois da descrição do commit, em vez de inserir aspas para encerrar, adicione duas linhas vazias.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Dica:** se você estiver usando um editor de texto na linha de comando para digitar sua mensagem de commit, verifique se há duas linhas novas entre o final da descrição do commit e o trailer de commit `Co-authored-by:`.

  {% endtip %}

3. Na próxima linha da mensagem de commit, digite `Co-authored-by: name <name@example.com>` com informações específicas para cada coautor. Depois das informações do coautor, adicione aspas de fechamento.

  Se estiver adicionando vários coautores, dê a cada coautor uma linha própria e um trailer de commit `Co-authored-by:` próprio.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

O novo commit e a mensagem aparecerão no {% data variables.product.product_location %} na próxima vez que você fizer push. Para obter mais informações, confira "[Efetuar push das alterações para um repositório remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)".

## Criar commits coautorados no {% data variables.product.product_name %}

Depois de fazer alterações em um arquivo usando o editor da Web no {% data variables.product.product_name %}, crie um commit com coautoria adicionando um trailer `Co-authored-by:` à mensagem do commit.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. Depois de fazer as alterações juntos, na parte inferior da página, digite uma mensagem de commit curta e significativa que descreve as alterações feitas.
  ![Mensagem de commit para a alteração](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. Na caixa de texto abaixo da mensagem de commit, adicione `Co-authored-by: name <name@example.com>` com informações específicas para cada coautor. Se estiver adicionando vários coautores, dê a cada coautor uma linha própria e um trailer de commit `Co-authored-by:` próprio.

  ![Exemplo de trailer de coautor da mensagem do commit na segunda caixa de texto da mensagem do commit](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. Clique em **Fazer commit de alterações** ou em **Propor alterações**.

O novo commit e a mensagem aparecerão no {% data variables.product.product_location %}.

## Leitura adicional
{% ifversion ghes or ghae %}
- "[Como ver as contribuições no seu perfil](/articles/viewing-contributions-on-your-profile)"
- "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"{% endif %}
- "[Como ver os colaboradores de um projeto](/articles/viewing-a-projects-contributors)"
- "[Como alterar uma mensagem de commit](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)"
- "[Como fazer commit de alterações no seu projeto e revisá-las](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)" na documentação do {% data variables.product.prodname_desktop %}
