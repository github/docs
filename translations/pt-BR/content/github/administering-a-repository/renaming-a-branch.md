---
title: Renomear um branch
intro: É possível alterar o nome de um branch em um repositório.
permissions: People with write permissions to a repository can rename a branch in the repository. People with admin permissions can rename the default branch.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
topics:
  - Repositories
---

### Sobre a renomeação de branches

Você pode renomear um branch em um repositório em {% data variables.product.product_location %}. Para obter mais informações sobre os branches, consulte "[Sobre os branches](/github/collaborating-with-issues-and-pull-requests/about-branches)".

When you rename a branch on {% data variables.product.product_location %}, any URLs that contain the old branch name are automatically redirected to the equivalent URL for the renamed branch. Branch protection policies are also updated, as well as the base branch for open pull requests (including those for forks) and draft releases. After the rename is complete, {% data variables.product.prodname_dotcom %} provides instructions on the repository's home page directing contributors to update their local Git environments.

Although file URLs are automatically redirected, raw file URLs are not redirected. Also, {% data variables.product.prodname_dotcom %} does not perform any redirects if users perform a `git pull` for the previous branch name.

### Renomear um branch

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Na lista de branches, à direita do branch que você deseja renomear, clique em {% octicon "pencil" aria-label="The edit icon" %}. ![Ícone do lápis à direita do branch que você deseja renomear](/assets/images/help/branch/branch-rename-edit.png)
1. Digite um novo nome para o branch. ![Campo de texto para digitar o novo nome do branch](/assets/images/help/branch/branch-rename-type.png)
1. Revise as informações sobre ambientes locais e clique em **Renomear o branch**. ![Informações de ambiente local e botão para "Renomear o branch"](/assets/images/help/branch/branch-rename-rename.png)

### Atualizar um clone local após alterações de nome do branch

Após renomear um branch em um repositório em {% data variables.product.product_name %}, qualquer colaborador com um clone local do repositório deverá atualizar o clone.

A partir do clone local do repositório em um computador, execute os seguintes comandos para atualizar o nome do branch padrão.

```shell
$ git branch -m <em>OLD-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git fetch origin
$ git branch -u origin/<em>NEW-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
```
