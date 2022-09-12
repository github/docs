---
title: Fazer merge automático de um pull request
intro: Você pode aumentar a velocidade de desenvolvimento permitindo o merge automático de um pull request para que o pull request seja mesclado automaticamente quando todos os requisitos de merge forem atendidos.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
ms.openlocfilehash: bdba774e193661f630dd35b034d0a4454ec5c1ee
ms.sourcegitcommit: da73949b8f8bd71d40247f1f9c49f8f4c362ecd0
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/28/2022
ms.locfileid: '147431941'
---
## <a name="about-auto-merge"></a>Sobre o merge automático

Se você habilitar o merge automático para um pull request, este será mesclado automaticamente quando todas as revisões necessárias forem atendidas e as verificações de status forem aprovadas. O merge automático impede que você espere que os sejam atendidos para que você possa passar para outras tarefas.

Antes de usar o merge automático com um pull request, o merge automático deve ser habilitado para o repositório. Para obter mais informações, confira "[Como gerenciar a mesclagem automática para solicitações de pull no seu repositório](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)".

Depois que você ativar o merge automático para uma pull request, se alguém que não tiver permissões de gravação no repositório fizer push de novas alterações no branch principal ou alterar o branch de base do pull request, o merge automático será desabilitado. Por exemplo, se um mantenedor permitir o merge automático para um pull request a partir de uma bifurcação, o merge automático será desabilitado depois que um colaborador fizer push de novas alterações no pull request.

Você pode fornecer comentários sobre a mesclagem automática por meio de uma discussão na [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/pull-requests).

## <a name="enabling-auto-merge"></a>Habilitar merge automático

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

Pessoas com permissões de gravação em um repositório podem habilitar o merge automático em um pull request.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Na lista "Pull Requests", clique no pull request para o qual você deseja fazer o merge automático.
1. Opcionalmente, para escolher um método de mesclagem, selecione o menu suspenso **Habilitar mesclagem automática** e clique em um método de mesclagem. Para obter mais informações, confira "[Sobre as mesclagens de solicitações de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)".
  ![Menu suspenso "Habilitar mesclagem automática"](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. Clique em **Habilitar mesclagem automática**.
  ![Botão usado para habilitar a mesclagem automática](/assets/images/help/pull_requests/enable-auto-merge-button.png) {% ifversion fpt %}
1. Se você escolheu os métodos de merge ou combinação por squash, digite uma mensagem de commit e a descrição e escolha o endereço de e-mail que você deseja criar o commimt de merge.
  ![Campos usados para inserir a mensagem de commit e a descrição e escolher o email do autor de commit](/assets/images/help/pull_requests/pull-request-information-fields.png) {% note %}

  **Observação:** o menu suspenso de email não estará disponível se você tiver a privacidade de email habilitada ou se você tiver apenas um email verificado e visível associado à sua conta do {% data variables.product.company_short %}.

  {% endnote %} {% endif %} {% ifversion ghes or ghae or ghec %}
1. Se você escolheu os métodos de merge ou combinação por squash e merge, digite uma mensagem de commit e descrição.
   ![Campos usados para inserir a mensagem de commit e a descrição](/assets/images/help/pull_requests/pull-request-information-fields-enterprise.png) {% endif %}
1. Clique em **Confirmar mesclagem automática**.

## <a name="disabling-auto-merge"></a>Desabilitar o merge automático

As pessoas com permissões de gravação em um repositório e autores de pull request podem desabilitar o merge automático em um pull request.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Na lista "Pull Requests", clique no pull request para o qual você deseja desabilitar o merge automático.
1. Na caixa de mesclagem, clique em **Desabilitar a mesclagem automática**.
  ![Botão usado para desabilitar a mesclagem automática](/assets/images/help/pull_requests/disable-auto-merge-button.png)
