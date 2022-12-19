---
title: Criar um commit em nome de uma organização
intro: 'Você pode criar commits em nome de uma organização adicionando um trailer à mensagem do commit. Os commits atribuídos a uma organização incluem um selo `on-behalf-of` no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: On behalf of an organization
ms.openlocfilehash: 31b8a6b8d1824fa960fb32fa5fd7b4c28625037c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127165'
---
{% note %}

**Observação:** atualmente, a capacidade de criar um commit em nome de uma organização está em versão beta pública e sujeita a alterações.

{% endnote %}

Para criar commits em nome de uma organização:

- você deve ser um integrante da organização indicado no trailer
- você deve assinar o commit
- o e-mail do seu commit e o e-mail da organização devem estar em um domínio verificado pela organização
- sua mensagem de commit precisa terminar com o trailer de commit `on-behalf-of: @org <name@organization.com>`
  - `org` é o logon da organização
  - `name@organization.com` está no domínio da organização

As organizações podem usar o email `name@organization.com` como um ponto de contato público para esforços de código aberto.

## Como criar commits com uma notificação `on-behalf-of` na linha de comando

1. Digite sua mensagem de commit e uma descrição curta e significativa de suas alterações. Depois da descrição do commit, em vez de inserir aspas para encerrar, adicione duas linhas vazias.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Dica:** se você estiver usando um editor de texto na linha de comando para digitar sua mensagem de commit, verifique se há duas linhas novas entre o final da descrição do commit e o trailer de commit `on-behalf-of:`.

  {% endtip %}

2. Na próxima linha da mensagem de commit, digite `on-behalf-of: @org <name@organization.com>` e uma aspa de fechamento.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

O novo commit, mensagem e selo aparecerão no {% data variables.product.product_location %} na próxima vez que você fizer push. Para obter mais informações, confira "[Efetuar push das alterações para um repositório remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)".

## Como criar commits com uma notificação `on-behalf-of` no {% data variables.product.product_name %}

Depois de fazer alterações em um arquivo usando o editor da Web do {% data variables.product.product_name %}, você pode criar um commit em nome da sua organização adicionando um trailer `on-behalf-of:` à mensagem de commit.

1. Depois de fazer as alterações, na parte inferior da página, digite uma mensagem de commit curta e significativa que descreve as alterações feitas.
  ![Mensagem de commit para a alteração](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. Na caixa de texto abaixo da mensagem de commit, adicione `on-behalf-of: @org <name@organization.com>`.

  ![Exemplo de trailer on-behalf-of da mensagem do commit na segunda caixa de texto da mensagem do commit](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. Clique em **Fazer commit de alterações** ou em **Propor alterações**.

O novo commit, mensagem e selo aparecerão no {% data variables.product.product_location %}.

## Leitura adicional

- "[Como ver as contribuições no seu perfil](/articles/viewing-contributions-on-your-profile)"
- "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
- "[Como ver os colaboradores de um projeto](/articles/viewing-a-projects-contributors)"
- "[Como alterar uma mensagem de commit](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)"
