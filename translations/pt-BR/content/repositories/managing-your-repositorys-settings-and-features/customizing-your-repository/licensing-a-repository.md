---
title: Licenciar um repositório
intro: 'Os repositórios públicos no GitHub são usados frequentemente para compartilhar softwares de código aberto. Para que seu repositório seja realmente de código aberto, você precisará licenciá-lo para que outros tenham a liberdade de usar, alterar e distribuir o software.'
redirect_from:
  - /articles/open-source-licensing
  - /articles/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f49dad5c20909647b1d7da7bb44a80a771337966
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881793'
---
## Escolher a licença ideal

Criamos [choosealicense.com](https://choosealicense.com) para ajudar você a entender como licenciar seu código. Uma licença de software descreve o que pode e não pode ser feito com seu código-fonte, assim é importante tomar uma decisão fundamentada.

Você não tem qualquer obrigação de escolher uma licença. Entretanto, sem uma licença, são aplicadas as leis padrão de copyright, o que significa que você detém todos os direitos de seu código-fonte e ninguém poderá reproduzir, distribuir ou criar derivativos de seu trabalho. Se você está criando um projeto de código aberto, incentivamos fortemente que você contemple uma licença de código aberto. O [Guia de Código Aberto](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project) fornece diretrizes adicionais sobre como escolher a licença correta para seu projeto.

{% note %}

**Observação:** se você publicar seu código-fonte em um repositório público no {% data variables.product.product_name %}, {% ifversion fpt or ghec %}de acordo com os [Termos de Serviço](/free-pro-team@latest/github/site-policy/github-terms-of-service), {% endif %}outros usuários do {% data variables.product.product_location %} terão o direito de ver seu repositório e criar forks dele. Se você já criou um repositório e não quer mais que os usuários tenham acesso a ele, você pode torná-lo privado. Ao alterar a visibilidade de um repositório para privado, as bifurcações existentes ou cópias locais criadas por outros usuários continuarão existindo. Para obter mais informações, confira "[Como configurar a visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)".

{% endnote %}

## Identificar a localização da sua licença

A maioria das pessoas coloca o texto da licença em um arquivo chamado `LICENSE.txt` (`LICENSE.md` ou `LICENSE.rst`) na raiz do repositório. [Veja um exemplo do Hubot](https://github.com/github/hubot/blob/master/LICENSE.md).

Alguns projetos incluem as informações sobre a licença no README. Por exemplo, um README de um projeto pode incluir uma observação declarando "Este projeto está licenciado nos termos da licença MIT."

Como uma prática recomendada, incentivamos que você inclua o arquivo da licença no seu projeto.

## Pesquisar no GitHub por tipo de licença

É possível filtrar repositórios com base nas licenças ou na família de licenças deles usando o qualificador `license` e a palavra-chave exata da licença:

Licença | Palavra-chave da licença
---  | ---
| Licença Academic Free v3.0 | `afl-3.0` |
| Licença do Apache 2.0 | `apache-2.0` |
| Licença artística 2.0 | `artistic-2.0` |
| Boost Software License 1.0 | `bsl-1.0` |
| Licença "Simplificada" de duas cláusulas do BSD | `bsd-2-clause` |
| Licença "Nova" ou "Revisada" de três cláusulas do BSD | `bsd-3-clause` |
| Licença Completa de três cláusulas do BSD | `bsd-3-clause-clear` |
| Família de licenças do Creative Commons | `cc` |
| Creative Commons Zero v1.0 Universal | `cc0-1.0` |
| Atribuição Creative Commons 4.0 | `cc-by-4.0` |
| Atribuição Compartilha Igual Creative Commons 4.0 | `cc-by-sa-4.0` |
| Licença pública WTFPL | `wtfpl` |
| Licença Educational Community v2.0 | `ecl-2.0` |
| Licença Pública do Eclipse 1.0 | `epl-1.0` |
| Licença Pública do Eclipse 2.0 | `epl-2.0` |
| Licença Pública da União Europeia 1.1 | `eupl-1.1` |
| Licença Pública Geral do LGNU Affero v3.0 | `agpl-3.0` |
| Família de Licenças Públicas Gerais do GNU | `gpl` |
| Licença Pública Geral do GNU v2.0 | `gpl-2.0` |
| Licença Pública Geral do GNU v3.0 | `gpl-3.0` |
| Família de Licenças Públicas Gerais Menores do GNU | `lgpl` |
| Licença Pública Geral Menor do GNU v2.1 | `lgpl-2.1` |
| Licença Pública Geral Menor do GNU v3.0 | `lgpl-3.0` |
| ISC | `isc` |
| Licença Pública do LaTeX Project v1.3c | `lppl-1.3c` |
| Licença Pública da Microsoft | `ms-pl` |
| MIT | `mit` |
| Licença Pública Mozilla 2.0 | `mpl-2.0` |
| Licença de Software Livre 3.0 | `osl-3.0` |
| Licença do PostgreSQL | `postgresql` |
| Licença Sil Open Font 1.1 | `ofl-1.1` |
| Licença de Código Aberto da University of Illinois/NCSA | `ncsa` |
| A Unlicense | `unlicense` |
| Licença zLib | `zlib` |

Quando você pesquisar uma família de licenças, os resultados incluirão todas as licenças daquela família. Por exemplo, quando você usar a consulta `license:gpl`, os resultados incluirão os repositórios licenciados sob a Licença Pública Geral do GNU v2.0 e a Licença Pública Geral do GNU v3.0. Para obter mais informações, confira "[Pesquisa em repositórios](/search-github/searching-on-github/searching-for-repositories/#search-by-license)".

## Identificar uma licença

[Licensee de código aberto do RubyGem](https://github.com/licensee/licensee) compara o arquivo *LICENSE* do repositório com uma pequena lista de licenças conhecidas. O Licensee também fornece a [API de Licenças](/rest/reference/licenses) e [fornece informações sobre como os repositórios do {% data variables.product.product_name %} são licenciados](https://github.com/blog/1964-open-source-license-usage-on-github-com). Se o repositório estiver usando uma licença que não está listada no [site Escolher uma Licença](https://choosealicense.com/appendix/), você poderá [solicitar a inclusão da licença](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license).

Caso o seu repositório use uma licença listada no site Choose a License que não aparece na parte superior da página do repositório, ele pode conter licenças múltiplas ou outras complexidades. Para que sua licença seja identificada, simplifique o arquivo *LICENSE* e anote a complexidade em algum outro local, como no arquivo *LEIAME* do repositório.

## Aplicar uma licença em um repositório com uma licença existente

O selecionador de licenças somente está disponível quando você cria um novo projeto no GitHub. Você pode adicionar uma licença manualmente usando o navegador. Para obter mais informações sobre como adicionar uma licença a um repositório, confira "[Como adicionar uma licença a um repositório](/articles/adding-a-license-to-a-repository)".

![Captura de tela do selecionador de licenças no GitHub.com](/assets/images/help/repository/repository-license-picker.png)

## Isenção de responsabilidade

O objetivo das iniciativas de licenciamento de código aberto do GitHub é oferecer um ponto de partida para ajudar você a tomar uma decisão fundamentada. O GitHub apresenta informações sobre licenças para ajudar os usuários a conseguir informações sobre licenças de código aberto e sobre os projetos que as usam. Esperamos que seja útil, mas esteja ciente de que não somos advogados e que cometemos erros como qualquer pessoa. Por esse motivo, o GitHub fornece as informações de forma "como se apresentam" e não faz garantia em relação a qualquer informação ou licença fornecida em ou por meio dela, e exime-se da responsabilidade por danos resultantes do uso das informações de licença. Se você tiver quaisquer dúvidas com relação à licença ideal para seu código ou quaisquer outras questões legais relacionadas a ele, sempre é melhor consultar um profissional.

## Leitura adicional

- A seção "[O Lado Legal do Código Aberto](https://opensource.guide/legal/)" dos Guias de Código Aberto {% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
