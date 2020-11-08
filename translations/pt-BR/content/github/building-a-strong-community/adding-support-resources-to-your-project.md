---
title: Adicionar recursos de suporte ao projeto
intro: Você pode criar um arquivo SUPPORT para permitir que as pessoas conheçam diferentes maneiras de obter ajuda com o seu projeto.
redirect_from:
  - /articles/adding-support-resources-to-your-project
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Para direcionar pessoas a recursos de suporte específicos, é possível adicionar um arquivo SUPPORT à pasta raiz, `docs` ou `.github` do seu repositório. Quando uma pessoa cria um problema no seu repositório, ela vê um link para o arquivo SUPPORT do projeto.

![Diretrizes de suporte](/assets/images/help/issues/support_guidelines_in_issue.png)

You can create default support resources for your organization{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% tip %}

**Dica:** para ajudar as pessoas a encontrar diretrizes de suporte, você pode criar vínculo para o arquivo SUPPORT a partir de outros lugares no seu repositório, como o [arquivo LEIAME](/articles/about-readmes/).

{% endtip %}

### Adicionar recursos de suporte ao projeto

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite *SUPPORT.md* (todas as letras maiúsculas).
4. Na guia **Edit new file** (Editar novo arquivo), adicione informações sobre como as pessoas podem obter suporte para seu projeto.
5. Para revisar o arquivo SUPPORT, clique em **Preview** (Visualizar).
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
