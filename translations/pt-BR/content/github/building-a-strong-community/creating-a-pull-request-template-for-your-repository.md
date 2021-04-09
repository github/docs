---
title: Criar modelos de pull request no repositório
intro: 'Quando você adicionar um modelo de pull request ao repositório, os contribuidores do projeto verão automaticamente o conteúdo do modelo no texto da pull request.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidade
---

Para obter mais informações, consulte "[Sobre modelos de problema e pull request](/articles/about-issue-and-pull-request-templates)".

Você pode criar um subdiretório *PULL_REQUEST_TEMPLATE/* em qualquer uma das pastas compatíveis para conter vários modelos de pull request, bem como usar o parâmetro de consulta `template` para especificar o modelo que preencherá o texto da pull request. Para obter mais informações, consulte "[Sobre automação de problemas e pull requests com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)".

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Você pode criar modelos-padrão de pull request para a sua organização{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} ou conta de usuário{% endif %}. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% endif %}

### Adicionar um modelo de pull request

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo nome do arquivo:
    -  Para tornar visível o seu modelo de pull request no diretório raiz do repositório, digite o nome do modelo de pull request `pull_request_template.md`. ![Novo nome do modelo de pull request no diretório raiz](/assets/images/help/repository/pr-template-file-name.png)
    - Para tornar seu modelo de pull request visível no diretório de `docs` do repositório, nomeie o modelo pull request `docs/pull_request_template.md`. ![Novo modelo de pull request no diretório docs](/assets/images/help/repository/pr-template-file-name-docs.png)
    - Para armazenar seu arquivo em um diretório oculto, nomeie o modelo pull request `.github/pull_request_template.md`. ![Novo modelo de pull request no diretório oculto](/assets/images/help/repository/pr-template-hidden-directory.png)
    - Para criar vários modelos de pull request e usar o parâmetro de consulta `template` para especificar um modelo de modo a preencher o texto da pull request, digite *.github/PULL_REQUEST_TEMPLATE/* e, em seguida, o nome do seu modelo de pull request. Por exemplo, `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. Você também pode armazenar vários modelos de pull request em um subdiretório `PULL_REQUEST_TEMPLATE` na raiz ou nos diretórios `docs/`. Para obter mais informações, consulte "[Sobre automação de problemas e pull requests com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)". ![Novo modelo de várias pull requests no diretório oculto](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. No texto do novo arquivo, adicione seu modelo de pull request. Pode conter:
    - Uma [referência a um problema relacionado](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) no repositório.
    - Uma descrição das alterações propostas na pull request.
    - [@menções](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) da pessoa ou equipe responsável por revisar as alterações propostas.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Os modelos são disponibilizados para os colaboradores quando sofrem merge no branch padrão do repositório.
{% data reusables.files.propose_new_file %}

### Leia mais

- "[Sobre modelos de problema e pull request](/articles/about-issue-and-pull-request-templates)"
- "[Sobre automação de problemas e pull requests com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Criar uma pull request](/articles/creating-a-pull-request)"
