---
title: Usar a versão mais recente das ações agrupadas oficialmente
intro: 'Você pode atualizar as ações que estão empacotadas com sua instância de {% data variables.product.prodname_ghe_server %} ou usar ações diretamente de {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '>=2.22'
  github-ae: next
topics:
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

A sua instância de {% data variables.product.prodname_ghe_server %} inclui uma série de ações integradas que você pode usar nos seus fluxos de trabalho. Para obter mais informações sobre as ações agrupadas, consulte ["Ações oficiais agrupadas com {% data variables.product.prodname_ghe_server %}"](/admin/github-actions/about-using-actions-on-github-enterprise-server#official-actions-bundled-with-github-enterprise-server).

Essas ações agrupadas são um instantâneo no momento das ações oficiais encontradas em https://github.com/actions; como resultado, essas ações podem ser versões anteriores que podem ser atualizadas. Para atualizar estas ações, você pode usar `actions-sync` para recuperar versões atualizadas de {% data variables.product.prodname_dotcom_the_website %}.

Como alternativa, se sua instância do {% data variables.product.prodname_ghe_server %} tiver {% data variables.product.prodname_github_connect %} habilitado, você terá opções adicionais para usar as últimas ações de {% data variables.product.prodname_dotcom_the_website %}:

- O seu arquivo de fluxo de trabalho pode referir-se diretamente a uma tag específica que só existe em {% data variables.product.prodname_dotcom_the_website %}.
- Para forçar o arquivo do fluxo de trabalho a usar as ações em {% data variables.product.prodname_dotcom_the_website %}, você poderá editar a tag atribuída às ações agrupadas.

Estas opções são descritas com mais detalhes nas seções a seguir.

### Usar sincronismo de ações para atualizar uma ação empacotada

Para atualizar as ações agrupadas, você poderá usar a ferramenta de `actions-sync` para sincronizar as ações com {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações sobre como usar `actions-sync`, consulte "[Sincronizar as ações manualmente de {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)".

### Usar as ações de {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.github-actions.actions-github-connect-requirement %}

Uma vez configurado, você poderá usar uma nova versão de uma ação a partir de {% data variables.product.prodname_dotcom_the_website %}, especificando, manualmente, a versão necessária no arquivo de fluxo de trabalho. Por exemplo, para usar a versão `v2.2.` de `actions/setup-python` de {% data variables.product.prodname_dotcom_the_website %}, você pode especificar a tag `actions/setup-python@v2.2.1` no seu arquivo de fluxo de trabalho.

### Usar a versão mais recente removendo a tag da ação específica

{% data reusables.github-actions.actions-github-connect-requirement %}

Se você remover a tag de versão que foi atribuída anteriormente a uma ação, {% data variables.product.prodname_ghe_server %} verificará {% data variables.product.prodname_dotcom_the_website %} com relação à tag necessária. Para obter mais informações sobre como trabalhar com tags, consulte "[Visualizar tags](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags#viewing-tags)".

Por exemplo, para usar a versão `v2.2.1` de `actions/setup-python` de {% data variables.product.prodname_dotcom_the_website %}:

1. Em {% data variables.product.prodname_ghe_server %}, exclua a tag `v2` do repositório `actions/setup-python`.
1. Crie um fluxo de trabalho que usa `actions/setup-python` com a tag `v2`.

Quando o fluxo de trabalho não consegue encontrar a tag `v2` especificada no {% data variables.product.prodname_ghe_server %}, ele irá verificar a tag necessária de {% data variables.product.prodname_dotcom_the_website %} Se encontrar uma versão com tag dessa ação, {% data variables.product.prodname_ghe_server %} usará a versão de {% data variables.product.prodname_dotcom_the_website %}.
