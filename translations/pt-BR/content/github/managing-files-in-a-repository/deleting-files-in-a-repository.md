---
title: Excluir arquivos em um repositório
intro: 'Você pode excluir um arquivo individual{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} ou um diretório inteiro{% endif %} no seu repositório em {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: 'People with write permissions can delete files{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} or directories{% endif %} in a repository.'
topics:
  - Repositories
---

### Sobre a exclusão de arquivo{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} e diretório{% endif %}

É possível excluir um arquivo individual no repositório{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} ou um diretório inteiro, incluindo todos os arquivos no diretório{% endif %}.

Se você tentar excluir um arquivo{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} ou diretório{% endif %} em um repositório no qual você não tem permissões de gravação, faremos uma bifurcação do projeto para a sua conta de usuário e iremos ajudá-lo a enviar um pull request para o repositório original depois de fazer commit da sua alteração. Para obter mais informações, consulte "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

Se o arquivo{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} ou diretório{% endif %} que você excluiu contém dados cnfidenciais, os dados ainda estarão disponíveis no histórico Git do repositório. Para remover completamente o arquivo de {% data variables.product.product_name %}, você deve remover o arquivo do histórico do seu repositório. Para obter mais informações, consulte "[Remover dados confidenciais do repositório](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)".

### Excluir um arquivo

1. Navegue até o arquivo no repositório que deseja excluir.
2. Na parte superior do arquivo, clique
{% octicon "trash" aria-label="The trash icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
### Excluir um diretório

1. Acesse o diretório no seu repositório que deseja excluir.
1. No canto superior direito, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, clique em **Excluir diretório**. ![Botão para excluir um diretório](/assets/images/help/repository/delete-directory-button.png)
1. Revise os arquivos que você excluirá.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% endif %}
