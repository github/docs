---
title: Entender conexões entre repositórios
intro: Use o grafo de rede e a lista de forks para entender as redes de fork.
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
ms.openlocfilehash: 46cc440093c3ca8dc0952933847a6f04b0446661
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191351'
---
## Exibir a rede do repositório

O grafo de rede exibe o histórico de branch de toda a rede do repositório, incluindo branches de fork. Esse grafo é uma linha do tempo de commits mais recentes e mostra até 100 dos branches enviados por push mais recentemente. A primeira linha faz referência à data e a primeira coluna faz referência ao proprietário do branch. Use teclas de direção ou outros atalhos de teclado para navegar mais facilmente pelo grafo. Eles são fornecidos no pop-up "Atalhos de teclado disponíveis" no grafo.


![Gráfico de rede do repositório](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**Dica:** para ver branches mais antigos, dê um clique e arraste dentro do grafo.

{% endtip %}

## Acessar o gráfico de rede

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Rede**.
![Guia Rede](/assets/images/help/graphs/network_tab.png)

## Listar as bifurcações de um repositório

O gráfico de integrantes exibe todas as bifurcações de um repositório.

Os forks são listados em ordem alfabética por organização ou nome de usuário da pessoa que bifurcou o repositório. É possível clicar na organização ou no nome de usuário para ser redirecionado à página de perfil {% data variables.product.product_name %} da organização ou do usuário ou clicar no nome do fork para ser redirecionado ao fork específico do repositório.

{% ifversion fpt or ghec %}

![Gráfico de integrantes do repositório](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Gráfico de integrantes do repositório](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Acessar o gráfico de integrantes

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Forks**.
![Guia Forks](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## Visualizar as dependências de um repositório

Você pode usar o gráfico de dependências para explorar o código do qual seu repositório depende.

Quase todos os softwares dependem do código desenvolvido e mantido por outros desenvolvedores, muitas vezes conhecido como cadeia de suprimentos. Por exemplo, utilitários, bibliotecas e estruturas. Essas dependências são parte integrante do seu código e quaisquer erros ou vulnerabilidades nelas podem afetar seu código. É importante revisar e manter estas dependências.

O gráfico de dependências fornece uma ótima maneira de visualizar e explorar as dependências de um repositório. Para obter mais informações, confira "[Sobre o grafo de dependência](/code-security/supply-chain-security/about-the-dependency-graph)" e "[Como explorar as dependências de um repositório](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository)".

Você também pode configurar o seu repositório para que {% data variables.product.company_short %} alerte você automaticamente sempre que uma vulnerabilidade de segurança for encontrada em uma das suas dependências. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
