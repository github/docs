---
title: Criando uma pull request a partir de uma bifurcação
intro: É possível criar uma pull request para propor alterações que você fez em uma bifurcação de um repositório upstream.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: 'Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create a PR from a fork
ms.openlocfilehash: 5a4aceef12c214d157dbdac7bf838bbe80e81731
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883284'
---
Se sua pull request comparar o branch de tópico com um branch no repositório upstream como o branch base, o branch de tópico também será chamado de branch de comparação da pull request. Para obter mais informações sobre os branches de solicitação de pull, incluindo exemplos, confira "[Como criar uma solicitação de pull](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)".

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Navegue até o repositório original onde você criou sua bifurcação.
{% data reusables.repositories.new-pull-request %}
3. Na página Comparar, clique em **Comparação entre forks**.
  ![Link de Comparação entre forks](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. Use o menu suspenso "branch base" para selecionar o branch do repositório upstream no qual deseja fazer merge das alterações.
  ![Menus suspensos usados para escolher o fork e o branch base](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. No menu suspenso "bifurcação head", selecione sua bifurcação e, em seguida, use o menu suspenso "branch de comparação" para selecionar o branch no qual fez alterações.
  ![Menus suspensos usados para escolher o fork principal e o branch de comparação](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png) {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## Leitura adicional

- "[Como trabalhar com forks](/articles/working-with-forks)"
- "[Como permitir alterações em um branch de solicitação de pull criado com base em um fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
