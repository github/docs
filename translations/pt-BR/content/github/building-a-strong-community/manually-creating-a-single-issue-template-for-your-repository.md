---
title: Criar manualmente um modelo único de problema no repositório
intro: 'Ao adicionar um modelo de problema criado manualmente no repositório, os colaboradores de projetos verão automaticamente o conteúdo do modelo no texto do problema.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository/
  - /articles/manually-creating-a-single-issue-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.legacy-issue-template-tip %}

Você pode criar um subdiretório *ISSUE_TEMPLATE/* (MODELO_DE_PROBLEMA) em qualquer uma das pastas compatíveis. Assim, é possível incluir vários modelos de problemas e usar o parâmetro de consulta `template` (modelo) para especificar o modelo que irá preencher o texto do problema. Para obter mais informações, consulte "[Sobre automação de problemas e pull requests com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)".

Você pode adicionar o YAML frontmatter a cada modelo de problema para preencher previamente o título do problema, adicionar rótulos e responsáveis ​​automaticamente e atribuir ao modelo um nome e uma descrição que serão mostrados no seletor de modelos que as pessoas veem ao criar um novo problema em seu repositório .

Aqui está um exemplo de YAML front matter.

```yaml
---
name: Rastreando problema
about: Use este modelo para rastrear novos recursos.
title: "[DATE]: [FEATURE NAME]"
labels: rastreando problema, precisa de triagem
assignees: octocat
---
```
{% note %}

**Nota:** Se um valor da matéria frontal incluir um caractere reservado em YAML como `:`, você deverá colocar todo o valor entre aspas. Por exemplo, `":bug: Bug"` ou `":new: triagem necessária, :bug: bug"`.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

### Adicionar um modelo de problema

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo nome do arquivo:
    -  Para que seu modelo de problema seja visível no diretório raiz do repositório, digite o nome de seu *issue_template* (modelo_de_problema). Por exemplo, `issue_template.md`. ![Novo nome de modelo de problema no diretório raiz](/assets/images/help/repository/issue-template-file-name.png)
    - Para que seu modelo de problema seja visível no diretório `docs` do repositório, digite *docs/* seguido pelo nome de seu *issue_template* (modelo_de_problema). Por exemplo, `docs/issue_template.md`. ![Novo modelo de problema no diretório docs](/assets/images/help/repository/issue-template-file-name-docs.png)
    - Para armazenar seu arquivo em um diretório oculto, digite *.github/* seguido do nome de seu *issue_template* (modelo_de_problema). Por exemplo, `.github/issue_template.md`. ![Novo modelo de problema no diretório oculto](/assets/images/help/repository/issue-template-hidden-directory.png)
    - Para criar vários modelos de problemas e usar o parâmetro de consulta `template` (modelo) para especificar um modelo para preencher o texto do problema, digite *.github/ISSUE_TEMPLATE/* (.github/MODELO_DE_PROBLEMA) e o nome de seu modelo de problema. Por exemplo, `.github/ISSUE_TEMPLATE/issue_template.md`. Também é possível armazenar vários modelos de problemas em um subdiretório `ISSUE_TEMPLATE` (MODELO_DE_PROBLEMA) nos diretórios raiz ou `docs/`. Para obter mais informações, consulte "[Sobre automação de problemas e pull requests com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)". ![Vários novos modelos de problemas no diretório oculto](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. No texto do novo arquivo, adicione seu modelo de problema. Pode conter:
    - YAML frontmatter
    - Comportamento esperado e comportamento atual
    - Etapas para reproduzir o problema
    - Especificações como a versão do projeto, sistema operacional ou hardware
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Os modelos são disponibilizados para os colaboradores quando sofrem merge no branch padrão do repositório.
{% data reusables.files.propose_new_file %}

### Leia mais

- "[Sobre modelos de problema e pull request](/articles/about-issue-and-pull-request-templates)"
- "[Configurando modelos de problemas para seu repositório](/articles/configuring-issue-templates-for-your-repository)"
- "[Sobre automação de problemas e pull requests com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Criar um problema](/articles/creating-an-issue)"
