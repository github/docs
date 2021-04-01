---
title: Renomear um branch
intro: É possível alterar o nome de um branch em um repositório.
permissions: As pessoas com permissões de gravação em um repositório podem renomear um branch no repositório. As pessoas com permissões de administrador podem renomear o branch padrão.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
topics:
  - repositories
---

### Sobre a renomeação de branches

Você pode renomear um branch em um repositório em {% data variables.product.product_location %}. Para obter mais informações sobre os branches, consulte "[Sobre os branches](/github/collaborating-with-issues-and-pull-requests/about-branches)".

Se você renomear um branch, {% data variables.product.prodname_dotcom %} irá redirecionar automaticamente links em {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location_enterprise %}{% endif %} que contêm o nome do branch antigo para o link equivalente no branch renomeado. {% data variables.product.prodname_dotcom %} também atualizará as políticas de proteção do branch, bem como o branch de base para pull requests abertos e versões de rascunho.

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
