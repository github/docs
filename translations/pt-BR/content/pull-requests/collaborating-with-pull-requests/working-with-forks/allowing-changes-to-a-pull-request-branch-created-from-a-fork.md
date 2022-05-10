---
title: Permitir alterações em um branch de pull request criado a partir de bifurcação
intro: 'For greater collaboration, you can allow commits on branches you''ve created from forks owned by your personal account.'
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
shortTitle: Permitir alterações em um branch
---

Somente os autores da pull request ou aqueles com acesso push ao repositório upstream podem fornecer aos mantenedores de repositório upstream permissão para fazer commits em seus branch de comparação da pull request em uma bifurcação de propriedade do usuário. Para saber mais sobre repositórios upstream, consulte "[Sobre bifurcações](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)".

Os autores de pull requests podem dar essas permissões ao criarem inicialmente uma pull request a partir de uma bifurcação de propriedade do usuário ou depois de criar a pull request. Para obter mais informações, consulte "[Criar uma pull request a partir de uma bifurcação](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)".

É possível definir permissões de commit quando você cria uma pull request pela primeira vez usando uma bifurcação. Para obter mais informações, consulte "[Criar uma pull request a partir de uma bifurcação](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)". Além disso, é possível modificar uma pull request existente para permitir que os mantenedores de repositório façam commits no seu branch.

## Habilitar permissões do mantenedor de repositório em pull requests existentes

1. No {% data variables.product.product_name %}, navegue até a página principal do repositório upstream da sua pull request.
2. Abaixo do nome do repositório upstream, clique em {% octicon "git-pull-request" aria-label="The pull request icon" %} **Pull requests**. ![Problemas e seleção da guia pull requests](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. Na lista de pull requests, navegue até a pull request em que deseja permitir os commits.
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-sidebar-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

## Leia mais

- "[Fazer commit de alterações em um branch da pull request criado de uma bifurcação](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
