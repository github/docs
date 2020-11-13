---
title: Sobre modelos de problema e pull request
intro: 'Com modelos de problema e pull request, é possível personalizar e padronizar as informações que deseja que os contribuidores incluam quando abrem problemas e pull requests no seu repositório.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Depois que você cria modelos de problema e pull request no repositório, os contribuidores podem usá-los para abrir problemas ou descrever as alterações propostas nas respectivas pull requests, de acordo com as diretrizes de contribuição do repositório. Para obter mais informações sobre como adicionar diretrizes de contribuição a um repositório, consulte "[Configurar diretrizes para contribuidores de repositório](/articles/setting-guidelines-for-repository-contributors)".

You can create default issue and pull request templates for your organization{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/github/building-a-strong-community/creating-a-default-community-health-file)."

### Modelos de problema

Ao criar modelos de problema para o repositório usando o construtor de modelo de problema, os modelos estarão disponíveis para uso dos contribuidores quando estes abrirem novos problemas no repositório.

![Página de novo problema mostrando opções do modelo de problema](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Usando o construtor de modelo, você pode especificar um titulo e a descrição de cada modelo, adicionar o conteúdo do modelo e, ou fazer commit do modelo no branch padrão, ou abrir uma pull request no repositório. O construtor de modelo adiciona automaticamente a markup de página inicial YAML que é necessária para que o modelo apareça na página do novo problema. Para obter mais informações, consulte "[Configurando modelos de problema para seu repositório](/articles/configuring-issue-templates-for-your-repository)."

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% data reusables.repositories.issue-template-config %} Para obter mais informações, consulte "[Configurando modelos de problemas para seu repositório](/github/building-a-strong-community/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)."
{% endif %}

Os modelos de problema são armazenados no branch padrão do repositório, em um diretório `.github/ISSUE_TEMPLATE` oculto. Se você criar um modelo em outro branch, ele não estará disponível para uso dos colaboradores. Os nomes de arquivo do modelo de problema não diferenciam maiúsculas de minúsculas e precisam de uma extensão *.md*. {% data reusables.repositories.valid-community-issues %}

É possível criar manualmente um único modelo de problema em markdown usando o fluxo de trabalho do modelo de problema e os contribuidores do projeto verão automaticamente o conteúdo do modelo no texto do problema. No entanto, é recomendável usar o construtor atualizado de vários modelos de problema para criar os modelos. Para obter mais informações sobre o fluxo de trabalho herdado, consulte [Criar manualmente um único modelo de problemas para seu repositório](/articles/manually-creating-a-single-issue-template-for-your-repository)".

{% data reusables.repositories.security-guidelines %}

### Modelos de pull request

Quando você adicionar um modelo de pull request ao repositório, os contribuidores do projeto verão automaticamente o conteúdo do modelo no texto da pull request.

![Exemplo de modelo de pull request](/assets/images/help/pull_requests/pr-template-sample.png)

É preciso criar modelos no branch padrão do repositório. Os modelos criados em outros branches não são disponibilizados para uso dos colaboradores. Você pode armazenar o modelo de pull request no diretório raiz visível do repositório, na pasta `docs` ou no diretório `.github` oculto. Os nomes de arquivo do modelo de pull request não diferenciam maiúsculas de minúsculas e podem ter uma extensão *.md* ou *.txt*.

Para obter mais informações, consulte "[Criar um modelo de pull request para o repositório](/articles/creating-a-pull-request-template-for-your-repository)".
