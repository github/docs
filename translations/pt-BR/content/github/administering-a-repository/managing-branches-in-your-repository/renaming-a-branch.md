---
title: Renomear um branch
intro: É possível alterar o nome de um branch em um repositório.
permissions: People with write permissions to a repository can rename a branch in the repository. People with admin permissions can rename the default branch.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/renaming-a-branch
---

### Sobre a renomeação de branches

Você pode renomear um branch em um repositório em {% data variables.product.product_location %}. Para obter mais informações sobre os branches, consulte "[Sobre os branches](/github/collaborating-with-issues-and-pull-requests/about-branches)".

Ao renomear um branch em {% data variables.product.product_location %}, todas as URLs que contiverem o nome do branch antigo serão automaticamente redirecionadas para a URL equivalente para o branch renomeado. Atualizam-se também as políticas de proteção de branch também, bem como o branch base para pull requests abertos (incluindo aqueles para bifurcações) e rascunhos de versões. Depois que a renomeação for concluída, {% data variables.product.prodname_dotcom %} fornecerá instruções na página inicial do repositório direcionando os colaboradores para atualizar seus ambientes do Git locais.

Embora as URLs do arquivo sejam automaticamente redirecionadas, as URLs do arquivo não processado não são redirecionadas. Além disso, {% data variables.product.prodname_dotcom %} não realiza nenhum redirecionamento se os usuários executarem um `git pull` para o nome do branch anterior.

Os fluxos de trabalho de {% data variables.product.prodname_actions %} não seguem renomes. Portanto, se o repositório publicar uma ação, qualquer pessoa que usar essa ação com `@{old-branch-name}` vai quebrar. Você deve considerar adicionar um novo branch com o conteúdo original mais um relatório de commit adicional informando que o nome do branch está obsoleto e sugerindo que os usuários façam a migração para o novo nome do branche.

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
$ git remote set-head origin -a
```

Opcionalmente, execute o comando a seguir para remover as referências de rastreamento para o nome do branch antigo.
```
$ git remote prune origin
```
