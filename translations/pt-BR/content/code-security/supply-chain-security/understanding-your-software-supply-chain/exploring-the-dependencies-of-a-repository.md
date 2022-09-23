---
title: Explorar as dependências de um repositório
intro: 'Você pode usar o grafo de dependência para ver os pacotes dos quais o projeto depende{% ifversion fpt or ghec %} e os repositórios que dependem dele{% endif %}. Além disso, você pode ver todas as vulnerabilidades detectadas nas suas dependências.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explore dependencies
ms.openlocfilehash: f3735844ad8bcb8fba799723f30a3d55e41ec158
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882728'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## Viewing the dependency graph

O grafo de dependência mostra as dependências{% ifversion fpt or ghec %} e os dependentes{% endif %} do repositório. Para obter informações sobre a detecção de dependências e os ecossistemas com suporte, confira "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. Opcionalmente, em "Grafo de dependência", clique em **Dependentes**.
![Guia Dependentes na página do grafo de dependência](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %} Os proprietários da empresa podem configurar o grafo de dependência em um nível empresarial. Para obter mais informações, confira "[Como habilitar o grafo de dependência para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".
{% endif %}

### Vista de dependências

{% ifversion fpt or ghec %} As dependências são agrupadas por ecossistema. Você pode expandir sua dependência para visualizar suas dependências.  Dependências de repositórios privados, pacotes privados ou arquivos não reconhecidos são exibidos em texto sem formatação. Se o gerenciador de pacotes para a dependência estiver em um repositório público, {% data variables.product.product_name %} irá exibir um link para o repositório.

{% ifversion dependency-submission-api %} As dependências enviadas a um projeto usando a API Envio de dependência (beta), embora também sejam agrupadas por ecossistema, são mostradas separadamente das dependências identificadas por meio de arquivos de manifesto ou de bloqueio no repositório. Essas dependências enviadas aparecem no grafo de dependência como "Dependências de instantâneo" porque são enviadas como um instantâneo ou um conjunto de dependências. Para obter mais informações sobre a API Envio de dependência, confira "[Como usar a API Envio de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".
{% endif %}

Se foram detectadas vulnerabilidades no repositório, estas são exibidas na parte superior da visualização para usuários com acesso ao {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependências](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %} Todas as dependências diretas e indiretas especificadas nos arquivos de manifesto ou de bloqueio do repositório são listadas, agrupadas por ecossistema. Se foram detectadas vulnerabilidades no repositório, estas são exibidas na parte superior da visualização para usuários com acesso ao {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependências](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Observação:** o {% data variables.product.product_name %} não preenche a exibição **Dependentes**.

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### Vista de dependentes

Para repositórios públicos, a vista de dependentes mostra como o repositório é usado por outros repositórios. Para mostrar apenas os repositórios que contêm uma biblioteca em um gerenciador de pacotes, clique em **NUMBER Pacotes** logo acima da lista de repositórios dependentes. A quantidade de dependentes é aproximada e pode nem sempre corresponder aos dependentes listados.

![gráfico de dependentes](/assets/images/help/graphs/dependents_graph.png)

## Habilitar e desabilitar o gráfico de dependências para um repositório privado

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## Alterar o pacote "Usado por"

Você poderá observar que alguns repositórios têm uma seção "Usado por" na barra lateral da guia **Código**. Seu repositório terá uma seção "Usado por" se:
  * O gráfico de dependências está habilitado para o repositório (consulte a seção acima para mais detalhes).
  * Ele contiver um pacote publicado em um [ecossistema de pacotes compatível](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).
  * Dentro dele, o pacote tiver um link para um repositório _público_ em que o código-fonte é armazenado.

A seção "Usado por" mostra o número de referências públicas ao pacote que foi encontrado, e exibe os avatares de alguns dos proprietários dos projetos dependentes.

![Seção da barra lateral "Usado por"](/assets/images/help/repository/used-by-section.png)

Se você clicar em qualquer item dessa seção, será levado para a guia **Dependentes** do grafo de dependência.

A seção "Usado por" representa um único pacote do repositório. Se você tiver permissões de administrador em um repositório que contém vários pacotes, você poderá escolher qual pacote a seção "Usado por" representa.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Em "Segurança e análise de código" clique no menu suspenso na seção "Usado pelo contador" e escolha um pacote.
  ![Escolher um pacote "Usado por"](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## Solução de problemas para o gráfico de dependências

Se seu gráfico de dependências estiver vazio, poderá haver um problema com o arquivo que contém suas dependências. Selecione o arquivo para garantir que ele esteja corretamente formatado para o tipo de arquivo.

{% ifversion fpt or ghec %} Se o arquivo estiver formatado corretamente, verifique o tamanho dele. O grafo de dependência ignora os arquivos de manifesto e de bloqueio individuais com tamanho superior a 1,5 MB, a menos que você seja um usuário do {% data variables.product.prodname_enterprise %}. Ele processa até 20 arquivos de manifesto ou de bloqueio por repositório por padrão; logo você pode dividir dependências em arquivos menores em subdiretórios do repositório.{% endif %}

Se um arquivo de manifesto ou de bloqueio não for processado, as dependências serão omitidas no grafo de dependência e não será possível verificar se há dependências não seguras.

## Leitura adicional

- "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Como exibir e atualizar {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% ifversion ghec %}
- "[Como ver os insights da sua organização](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}{% ifversion fpt or ghec %}
- "[Noções básicas sobre como o {% data variables.product.prodname_dotcom %} usa e protege seus dados](/get-started/privacy-on-github)" {% endif %}
