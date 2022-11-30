---
title: Permitir alterações em um branch de pull request criado a partir de bifurcação
intro: 'Para obter mais colaboração, você pode permitir commits nos branches que criou a partir de forks de propriedade de sua conta pessoal.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a personal account can commit to the forked branches.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Allow changes to a branch
ms.openlocfilehash: 26255f5aeab3bcaa5ecc1aa6cf865981990c456a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127938'
---
Somente os autores da pull request ou aqueles com acesso push ao repositório upstream podem fornecer aos mantenedores de repositório upstream permissão para fazer commits em seus branch de comparação da pull request em uma bifurcação de propriedade do usuário. Para saber mais sobre os repositórios upstream, confira "[Sobre os forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)".

Os autores de pull requests podem dar essas permissões ao criarem inicialmente uma pull request a partir de uma bifurcação de propriedade do usuário ou depois de criar a pull request. Para obter mais informações, confira "[Como criar uma solicitação de pull com base em um fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)".

É possível definir permissões de commit quando você cria uma pull request pela primeira vez usando uma bifurcação. Para obter mais informações, confira "[Como criar uma solicitação de pull com base em um fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)". Além disso, é possível modificar uma pull request existente para permitir que os mantenedores de repositório façam commits no seu branch.

## Habilitar permissões do mantenedor de repositório em pull requests existentes

1. No {% data variables.product.product_name %}, navegue até a página principal do repositório upstream da sua pull request.
2. Abaixo do nome do repositório upstream, clique em {% octicon "git-pull-request" aria-label="The pull request icon" %} **Solicitações de pull**.
![Seleção da guia Problemas e solicitações de pull](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. Na lista de pull requests, navegue até a pull request em que deseja permitir os commits.
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-sidebar-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

## Leitura adicional

- "[Como fazer commit das alterações em um branch de solicitação de pull criado com base em um fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
