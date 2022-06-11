---
title: Excluir arquivos em um repositório
intro: 'Você pode excluir um arquivo individual{% ifversion fpt or ghes or ghec %} ou um diretório inteiro{% endif %} no seu repositório em {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes or ghec %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Excluir arquivos
---

## Sobre a exclusão de arquivo{% ifversion fpt or ghes or ghec %} e diretório{% endif %}

É possível excluir um arquivo individual no repositório{% ifversion fpt or ghes or ghec %} ou um diretório inteiro, incluindo todos os arquivos no diretório{% endif %}.

Se você tentar excluir um arquivo{% ifversion fpt or ghes or ghec %} ou diretório{% endif %} em um repositório no qual você não tem permissões de gravação, faremos uma bifurcação do projeto para a sua conta pessoal e iremos ajudar você a enviar um pull request para o repositório original depois de fazer commit da sua alteração. Para obter mais informações, consulte "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

Se o arquivo{% ifversion fpt or ghes or ghec %} ou diretório{% endif %} que você excluiu contém dados cnfidenciais, os dados ainda estarão disponíveis no histórico Git do repositório. Para remover completamente o arquivo de {% data variables.product.product_name %}, você deve remover o arquivo do histórico do seu repositório. Para obter mais informações, consulte "[Remover dados confidenciais do repositório](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)".

## Excluir um arquivo

1. Navegue até o arquivo no repositório que deseja excluir.
2. Na parte superior do arquivo, clique em {% octicon "trash" aria-label="The trash icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes or ghec %}
## Excluir um diretório

1. Acesse o diretório no seu repositório que deseja excluir.
1. No canto superior direito, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, clique em **Excluir diretório**. ![Botão para excluir um diretório](/assets/images/help/repository/delete-directory-button.png)
1. Revise os arquivos que você excluirá.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% endif %}
