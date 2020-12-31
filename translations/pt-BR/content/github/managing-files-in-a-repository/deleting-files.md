---
title: Excluir arquivos
intro: 'Você pode excluir qualquer arquivo nos repositórios do {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Dica**: se você tentar excluir um arquivo em um repositório ao qual não tem acesso, bifurcaremos o projeto para sua conta de usuário e ajudaremos você a enviar [uma pull request](/articles/about-pull-requests) para o repositório original depois que fizer o commit da alteração.

{% endtip %}

1. Navegue até o arquivo no repositório que deseja excluir.
2. Na parte superior do arquivo, clique
{% octicon "trashcan" aria-label="The trashcan icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% danger %}

**Atenção**: como o Git é um sistema de controle de versão, ele permite recuperar o arquivo mais tarde. Se você *realmente* precisa remover **por completo** um arquivo de um repositório por algum motivo, como o commit acidental de um arquivo confidencial, siga as etapas descritas no [nosso artigo sobre como remover dados confidenciais](/articles/removing-sensitive-data-from-a-repository).

{% enddanger %}
