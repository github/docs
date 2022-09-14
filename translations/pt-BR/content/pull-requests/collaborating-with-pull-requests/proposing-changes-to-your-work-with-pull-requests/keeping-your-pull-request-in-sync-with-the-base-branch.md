---
title: Mantendo o seu pull request em sincronia com o branch de base
intro: 'Após abrir um pull request, você poderá atualizar o branch principal, que contém suas alterações, com todas as alterações que foram feitas no branch de base.'
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Update the head branch
ms.openlocfilehash: d7819b45cf3290c09e3b231825e494fd1d82daea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128043'
---
## Sobre como manter o seu pull request sincronizado

Antes de mesclar suas solicitações de pull, outras alterações podem ser mescladas no branch base, fazendo com que o branch principal da solicitação de pull fique fora de sincronia. A atualização da solicitação de pull com as alterações mais recentes do branch base pode ajudar a detectar problemas antes da mesclagem.

Você pode atualizar o branch de principal de um pull request na linha de comando ou na página do pull request. O botão **Atualizar branch** é exibido quando todas as seguintes afirmações são verdadeiras:

* Não há conflitos de merge entre o branch do pull request e o branch de base.
* O branch do pull request não está atualizado com o branch de base.
* O branch base exige que os branches estejam atualizados antes da mesclagem{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} ou que a configuração sempre sugira que a atualização de branches esteja habilitada{% endif %}.

Para obter mais informações, confira "[Exigir verificações de status antes da mesclagem](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}" e "[Como gerenciar sugestões para atualizar branches da solicitação de pull](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %}".

Se houver alterações no branch de base que causam conflitos de merge no branch do seu pull request, você não poderá atualizar o branch até que todos os conflitos sejam resolvidos. Para obter mais informações, confira "[Sobre os conflitos de mesclagem](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)".

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} Na página da solicitação de pull, você pode atualizar o branch da solicitação de pull usando uma mesclagem tradicional ou uma troca de base. Um merge tradicional resulta em um commit de merge que faz o merge do branch de base no branch principal do pull request. A troca de base aplica as alterações do _seu_ branch à última versão do branch base. O resultado é um branch com histórico linear, uma vez que nenhum commit de merge foi criado.
{% else %} A atualização do branch por meio da página da solicitação de pull faz uma mesclagem tradicional. O commit de merge resultante faz o merge do branch de base no branch principal do pull request.
{% endif %}

## Atualizando o branch do seu pull request

{% data reusables.repositories.sidebar-pr %}

1. Na lista "Pull requests", clique no pull request que você deseja atualizar.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. Na seção de merge perto do final da página, você pode:
   - Clique em **Atualizar branch** para fazer uma mesclagem tradicional.
   ![Botão usado para atualizar o branch](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - Clique no menu suspenso Atualizar branch, clique em **Atualizar com a troca de base** e clique em **Trocar a base do branch** para fazer a atualização pela troca de base no branch base.
   ![Menu suspenso que mostra as opções de mesclagem e troca de base](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png) {% else %}
1. Na seção Mesclar próxima à parte inferior da página, clique em **Atualizar branch** para fazer uma mesclagem tradicional.
  ![Botão usado para atualizar o branch](/assets/images/help/pull_requests/pull-request-update-branch.png) {% endif %}

## Leitura adicional

- "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Como alterar a fase de uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)"
- "[Como fazer commit das alterações em um branch de solicitação de pull criado com base em um fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
