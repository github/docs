---
title: Sobre modelos de problema e pull request
intro: 'Com modelos de problema e pull request, é possível personalizar e padronizar as informações que deseja que os contribuidores incluam quando abrem problemas e pull requests no seu repositório.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Sobre modelos
---

Depois que você cria modelos de problema e pull request no repositório, os contribuidores podem usá-los para abrir problemas ou descrever as alterações propostas nas respectivas pull requests, de acordo com as diretrizes de contribuição do repositório. Para obter mais informações sobre como adicionar diretrizes de contribuição a um repositório, consulte "[Configurar diretrizes para contribuidores de repositório](/articles/setting-guidelines-for-repository-contributors)".

{% ifversion fpt or ghes or ghec %}

Você pode criar modelos de problema padrão e de pull request para sua organização ou conta pessoal. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

## Modelos de problema

Quando você cria modelos de problemas para seu repositório usando o criador de modelos de problema{% ifversion fpt or ghec %} ou com formulários de problema{% endif %}, os colaboradores podem selecionar o modelo apropriado ao abrirem novos problemas no repositório.

![Página de novo problema mostrando opções do modelo de problema](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Os modelos de problemas são úteis quando você deseja fornecer orientações para a abertura de problemas, permitindo que os contribuidores especifiquem o conteúdo do seus problemas. {% ifversion fpt or ghec %} Se você deseja que os colaboradores forneçam informações específicas e estruturadas ao abrirem problemas, o formulário de problemas ajuda a garantir que você irá receber as informações desejadas.{% endif %}

Usando o construtor de modelo, você pode especificar um titulo e a descrição de cada modelo, adicionar o conteúdo do modelo e, ou fazer commit do modelo no branch padrão, ou abrir uma pull request no repositório. O construtor de modelo adiciona automaticamente a markup de página inicial YAML que é necessária para que o modelo apareça na página do novo problema. Para obter mais informações, consulte "[Configurando modelos de problema para seu repositório](/articles/configuring-issue-templates-for-your-repository)."

{% ifversion fpt or ghec %}
Com formulários de problemas, você pode criar modelos que têm campos de formulário web usando o esquema de formulário de {% data variables.product.prodname_dotcom %}. Quando um contribuidor abre um problema usando um formulário de problema, as entradas de formulário são convertidas em um comentário de markdown padrão. É possível especificar diferentes tipos de entrada e definir as entradas necessárias para ajudar os colaboradores a abrir problemas acionáveis no seu repositório. Para obter mais informações, consulte "[Configurar templates de problemas para o seu repositório](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)" e "[Sintaxe para formulários de problemas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)".
{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}
{% data reusables.repositories.issue-template-config %} Para obter mais informações, consulte "[Configurando modelos de problemas para seu repositório](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)."
{% endif %}

Os modelos de problema são armazenados no branch padrão do repositório, em um diretório `.github/ISSUE_TEMPLATE` oculto. Se você criar um modelo em outro branch, ele não estará disponível para uso dos colaboradores. Os nomes dos arquivos dos modelos de problema não diferenciam maiúsculas e precisam de uma extensão *.md*.{% ifversion fpt or ghec %} Modelos de problemas criados com formulários precisam de uma extensão *.yml*.{% endif %} {% data reusables.repositories.valid-community-issues %}

É possível criar manualmente um único modelo de problema em markdown usando o fluxo de trabalho do modelo de problema e os contribuidores do projeto verão automaticamente o conteúdo do modelo no texto do problema. No entanto, recomendamos usar o construtor de modelos de múltiplas issues atualizados{% ifversion fpt or ghec %} ou formulários de problemas{% endif %} para criar modelos de problema. Para obter mais informações sobre o fluxo de trabalho herdado, consulte [Criar manualmente um único modelo de problemas para seu repositório](/articles/manually-creating-a-single-issue-template-for-your-repository)".

{% data reusables.repositories.security-guidelines %}

## Modelos de pull request

Quando você adicionar um modelo de pull request ao repositório, os contribuidores do projeto verão automaticamente o conteúdo do modelo no texto da pull request.

![Exemplo de modelo de pull request](/assets/images/help/pull_requests/pr-template-sample.png)

É preciso criar modelos no branch padrão do repositório. Os modelos criados em outros branches não são disponibilizados para uso dos colaboradores. Você pode armazenar o modelo de pull request no diretório raiz visível do repositório, na pasta `docs` ou no diretório `.github` oculto. Os nomes de arquivo do modelo de pull request não diferenciam maiúsculas de minúsculas e podem ter uma extensão *.md* ou *.txt*.

Para obter mais informações, consulte "[Criar um modelo de pull request para o repositório](/articles/creating-a-pull-request-template-for-your-repository)".
