---
title: Sobre ramificações
intro: Use um branch para isolar o trabalho de desenvolvimento sem afetar outros branches no repositório. Cada repositório tem um branch padrão e pode ter vários outros branches. Você pode fazer merge de um branch em outro branch usando uma pull request.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches
  - /articles/about-branches
  - /github/collaborating-with-issues-and-pull-requests/about-branches
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 0262a7a8fb0bb8556c3f6062e3fc8512eb9fa1c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128058'
---
## Sobre ramificações

Os branches permitem que você desenvolva recursos, corrija erros ou experimente com segurança novas ideias em uma área contida do seu repositório.

Você sempre cria um branch a partir de um branch existente. Normalmente, você pode criar um novo branch a partir do branch-padrão do seu repositório. Você então poderá trabalhar nesse novo branch isolado das mudanças que outras pessoas estão fazendo no repositório. Um branch que você cria para produzir um recurso é comumente referido como um branch de recurso ou branch de tópico. Para obter mais informações, confira "[Como criar e excluir branches no seu repositório](/articles/creating-and-deleting-branches-within-your-repository/)".

Também é possível usar um branch para publicar um site do {% data variables.product.prodname_pages %}. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_pages %}](/articles/what-is-github-pages)".

Você deve ter acesso de gravação em um repositório para criar um branch, abrir uma pull request ou excluir e restaurar branches em uma pull request. Para obter mais informações, confira "[Permissões de acesso do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github)".

## Sobre o branch-padrão

{% data reusables.branches.new-repo-default-branch %} O branch-padrão é o branch que {% data variables.product.prodname_dotcom %} exibe quando alguém visita o seu repositório. O branch padrão é também o branch inicial que o Git verifica localmente quando alguém clona o repositório. {% data reusables.branches.default-branch-automatically-base-branch %}

Por padrão, o {% data variables.product.product_name %} dá ao branch padrão o nome `main` em qualquer novo repositório.

{% data reusables.branches.change-default-branch %}

{% data reusables.branches.set-default-branch %}

## Trabalhando com branches

Quando ficar satisfeito com seu trabalho, abra uma solicitação de pull para mesclar as alterações no branch atual (o branch *principal*) em outro branch (o branch *base*). Para obter mais informações, confira "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".

Depois que uma pull request tiver sido mesclada ou fechada, você poderá excluir o branch head, já que isso não é mais necessário. Você deve ter permissão de gravação no repositório para excluir branches. Não é possível excluir branches associados diretamente a pull requests abertas. Para obter mais informações, confira "[Como excluir e restaurar branches em uma solicitação de pull](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"

{% data reusables.pull_requests.retargeted-on-branch-deletion %} Os diagramas a seguir ilustram isso.

 Aqui, alguém criou um branch chamado `feature1` com base no branch `main`, e você criou um branch chamado `feature2`com base no `feature1`. Existem pull requests abertas para ambos os branches. As setas indicam o branch base atual para cada pull request. Neste ponto, `feature1` é o branch base de `feature2`. Se a solicitação de pull de `feature2` for mesclada agora, o branch `feature2` será mesclado em `feature1`.

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram1.png)

No próximo diagrama, alguém mesclou a solicitação de pull de `feature1` no branch `main` e excluiu o branch `feature1`. Como resultado, o {% data variables.product.prodname_dotcom %} redirecionou automaticamente a solicitação de pull de `feature2`, ou seja, o branch base agora é `main`.

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram2.png)

Agora, quando você mesclar a solicitação de pull `feature2`, ela será mesclada no branch `main`.

## Trabalhar com branches protegidos

Os administradores de repositório podem habilitar proteções em um branch. Se estiver trabalhando em um branch que é protegido, não será possível excluir nem forçar o push no branch. Os administradores do repositório podem habilitar, de modo adicional, várias outras configurações de branch protegido para aplicar vários fluxos de trabalho antes que um branch passe por um merge.

{% note %}

**Observação:** se você for um administrador de repositório, poderá mesclar solicitações de pull em branches com proteções de branch habilitadas mesmo que a solicitação de pull não atenda aos requisitos, a menos que as proteções de branch tenham sido definidas como "Incluir administradores".

{% endnote %}

Para ver se a sua solicitação de pull pode ser mesclada, veja isso na caixa de mesclagem na parte inferior da guia **Conversa**  da solicitação de pull. Para obter mais informações, confira "[Sobre os branches protegidos](/articles/about-protected-branches)".

Quando um branch estiver protegido:

- Você não poderá excluir nem fazer um push forçado no branch.
- Se as verificações de status obrigatórias forem habilitadas no branch, não será possível fazer merge das alterações no branch até que todos os testes de CI obrigatórios sejam aprovados. Para obter mais informações, confira "[Sobre as verificações de status](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".
- Se as revisões obrigatórias de pull request forem habilitadas no branch, não será possível fazer merge de alterações no branch até que todos os requisitos na política da revisão de pull request tenham sido atendidos. Para obter mais informações, confira "[Como mesclar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)".
- Se a revisão obrigatória de um proprietário do código for habilitada em um branch, e uma pull request modificar o código que tem um proprietário, um proprietário do código deverá aprovar a pull request para que ela possa passar por merge. Para obter mais informações, confira "[Sobre os proprietários de código](/articles/about-code-owners)".
- Se a assinatura de commit obrigatória for habilitada em um branch, não será possível fazer push de qualquer commit no branch que não esteja assinado e verificado. Para obter mais informações, confira "[Sobre a verificação da assinatura de commit](/articles/about-commit-signature-verification)" e "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-signed-commits)".
- Se você usar o editor de conflitos do {% data variables.product.prodname_dotcom %}para corrigir conflitos para uma solicitação de pull request que você criou a partir de um branch protegido, {% data variables.product.prodname_dotcom %} ajudará você a criar um branch alternativo para a solicitação de pull request, para que a resolução dos conflitos possa ser mesclada. Para obter mais informações, confira "[Como resolver um conflito de mesclagem no {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)".

## Leitura adicional

- "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Branch](/articles/github-glossary/#branch)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Visão rápida sobre os branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" na documentação do Git
