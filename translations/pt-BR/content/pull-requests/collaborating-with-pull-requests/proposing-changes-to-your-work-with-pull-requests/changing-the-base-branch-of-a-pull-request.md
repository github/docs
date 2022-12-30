---
title: Alterar o branch base de uma pull request
intro: 'Depois que uma pull request é aberta, você pode alterar o branch base para comparar as alterações na pull request em relação a um branch diferente.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the base branch
ms.openlocfilehash: 6e8e78ac4f3e0d3f81b5efc07bb48151040baa9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127581'
---
{% warning %}

**Aviso**: quando você altera o branch base da solicitação de pull, alguns commits podem ser removidos da linha do tempo. Os comentários da revisão também podem se tornar desatualizados, pois a linha de código mencionada no comentário pode não fazer mais parte das alterações na pull request.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request que deseja modificar.
3. Ao lado do título da solicitação de pull, clique em **Editar**. ![Botão Editar da solicitação de pull](/assets/images/help/pull_requests/pull-request-edit.png)
4. No menu suspenso do branch base, selecione o branch base com o qual deseja [comparar as alterações](/github/committing-changes-to-your-project/comparing-commits#comparing-branches). ![Menu suspenso do branch base](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Leia as informações sobre como alterar o branch base e clique em **Alterar base**. ![Botão de confirmação de alteração do branch base ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Dica:** quando você abrir uma solicitação de pull, o {% data variables.product.product_name %} definirá a base como o commit referenciado pelo branch. Se o branch for atualizado no futuro, {% data variables.product.product_name %} não irá atualizar o commit do branch de base.

{% endtip %}

## Leitura adicional

- "[Como criar uma solicitação de pull](/articles/creating-a-pull-request)"
- "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
