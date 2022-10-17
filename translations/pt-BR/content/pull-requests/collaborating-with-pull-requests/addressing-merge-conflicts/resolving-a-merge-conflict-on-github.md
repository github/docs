---
title: Resolver um conflito de merge no GitHub
intro: Você pode resolver conflitos de merge simples que envolvem alterações concorrentes na linha usando o editor de conflitos.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
  - /github/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts
ms.openlocfilehash: 48613d8c8974d14a1de70e0dee5a7f4819d37fd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127603'
---
Você só pode resolver conflitos de merge no {% data variables.product.product_name %} causados por alterações concorrentes na linha, como quando as pessoas fazem alterações diferentes na mesma linha do mesmo arquivo em diferentes branches no seu repositório Git. Para todos os outros tipos de conflito de merge, você deve resolver o conflito localmente na linha de comando. Para obter mais informações, confira "[Como resolver um conflito de mesclagem usando a linha de comando](/articles/resolving-a-merge-conflict-using-the-command-line/)".

{% ifversion ghes or ghae %} Se um administrador do site desabilitar o editor de conflitos de mesclagem em solicitações de pull entre repositórios, você não poderá usar o editor de conflitos no {% data variables.product.product_name %} e precisará resolver os conflitos de mesclagem na linha de comando. Por exemplo, se o editor de conflitos de merge estiver desabilitado, você não poderá usá-lo em uma pull request entre uma bifurcação e um repositório upstream.
{% endif %}

{% warning %}

**Aviso:** quando você resolve um conflito de mesclagem no {% data variables.product.product_name %}, todo o [branch base](/github/getting-started-with-github/github-glossary#base-branch) da solicitação de pull é mesclado no [branch principal](/github/getting-started-with-github/github-glossary#head-branch). Verifique se você deseja realmente fazer commit para esse branch. Se o branch do cabeçalho for o branch-padrão do seu repositório, você terá a opção de criar um novo branch para servir como o branch do cabeçalho para o seu pull request. Se o branch head estiver protegido, você não será capaz de mesclar sua resolução de conflitos nele, então você será solicitado a criar um novo branch head. Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches)".

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. Na lista "Pull Requests", clique na pull request que tem um conflito de merge que você deseja resolver.
1. Na parte inferior da solicitação de pull, clique em **Resolver conflitos**.
![Botão Resolver conflitos de mesclagem](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **Dica:** se o botão **Resolver conflitos** for desativado, o conflito de mesclagem da solicitação de pull será muito complexo de ser resolvido no {% data variables.product.product_name %}{% ifversion ghes or ghae %} ou o administrador do site desabilitou o editor de conflitos para solicitações de pull entre repositórios{% endif %}. Você deve resolver o conflito de merge usando um cliente Git alternativo, ou usando o Git na linha de comando. Para obter mais informações, confira "[Como resolver um conflito de mesclagem usando a linha de comando](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)".

 {% endtip %} {% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} ![Ver exemplo de conflito de mesclagem com marcadores de conflito](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. Se houver mais de um conflito de merge no arquivo, role para baixo até o próximo conjunto de marcadores de conflito e repita as etapas quatro e cinco para resolver o conflito de merge.
1. Depois de resolver todos os conflitos no arquivo, clique em **Marcar como resolvido**.
 ![Clique no botão Marcar como resolvido](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. Se você tiver mais de um arquivo com um conflito, selecione o próximo arquivo que deseja editar no lado esquerdo da página abaixo de "conflicting files" (arquivos conflitantes) e repita as etapas de quatro a sete até resolver todos os conflitos de merge da pull request.
 ![Seleção do próximo arquivo conflitante, se aplicável](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. Depois de resolver todos os conflitos de mesclagem, clique em **Fazer commit da mesclagem**. Isso incorpora todo o branch base ao branch head.
 ![Botão Resolver conflitos de mesclagem](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)
1. Se solicitado, revise o branch presente no commit.

   Se o branch head for o branch padrão do repositório, você pode escolher atualizar este branch com as mudanças que você fez para resolver o conflito, ou criar um novo branch e usar isso como o branch head da pull request.
 ![Solicitar a revisão do branch que será atualizado](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   Se você escolher criar um novo branch, digite um nome para o branch.

   Se o branch head de sua pull request estiver protegido, você deve criar um novo branch. Você não terá a opção de atualizar o branch protegido.

   Clique em **Criar branch e atualizar minha solicitação de pull** ou **Entendi. Continuar atualizando o _BRANCH_**. O texto do botão corresponde à ação que você está executando.
1. Para mesclar sua solicitação de pull, clique em **Mesclar solicitação de pull**. Para obter mais informações sobre outras opções de mesclagem de solicitação de pull, confira "[Como mesclar uma solicitação de pull](/articles/merging-a-pull-request/)".

## Leitura adicional

- "[Sobre as mesclagens de solicitações de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
