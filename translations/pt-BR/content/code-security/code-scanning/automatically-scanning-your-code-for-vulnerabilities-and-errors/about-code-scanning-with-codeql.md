---
title: Sobre a varredura de código com CodeQL
shortTitle: Code scanning with CodeQL
intro: 'Você pode usar {% data variables.product.prodname_codeql %} para identificar vulnerabilidades e erros no seu código. Os resultados são exibidos como alertas de {% data variables.product.prodname_code_scanning %} em {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 41531627f73e7878cfa5667560b61cd4e21d20b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052173'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre a {% data variables.product.prodname_code_scanning %} com o {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %}

Existem duas maneiras principais de usar {% data variables.product.prodname_codeql %} análise para {% data variables.product.prodname_code_scanning %}:

- Adicione o fluxo de trabalho de {% data variables.product.prodname_codeql %} ao seu repositório. Isso usa a [github/codeql-action](https://github.com/github/codeql-action/) para executar a {% data variables.product.prodname_codeql_cli %}. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)".
- Execute a CLI de {% data variables.product.prodname_codeql %} diretamente em um sistema dew CI externo e faça o upload dos resultados para {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Sobre a verificação de código do {% data variables.product.prodname_codeql %} no seu sistema de CI ](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)".

{% ifversion ghes or ghae %}

{% note %} No {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }},{% endif %} a ação {% data variables.product.prodname_codeql %} usa a {% data variables.product.prodname_codeql_cli %} versão {% data variables.product.codeql_cli_ghes_recommended_version %} por padrão. Recomendamos que você use a mesma versão da {% data variables.product.prodname_codeql_cli %} para executar a análise em um sistema de CI externo.
{% endnote %}

{% endif %}


## Sobre o {% data variables.product.prodname_codeql %}

O {% data variables.product.prodname_codeql %} trata o código como dados, permitindo que você encontre possíveis vulnerabilidades em seu código com maior confiança do que os analisadores estáticos tradicionais.

1. Você gera um banco de dados de {% data variables.product.prodname_codeql %} para representar a sua base de código.
2. Em seguida, você executa consultas de {% data variables.product.prodname_codeql %} nesse banco de dados para identificar problemas na base de código.
3. Os resultados da consulta são exibidos como alertas de {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %} quando você usa {% data variables.product.prodname_codeql %} com {% data variables.product.prodname_code_scanning %}.

O {% data variables.product.prodname_codeql %} dá suporte a linguagens compiladas e interpretadas e pode encontrar vulnerabilidades e erros no código escrito nas linguagens compatíveis.

{% data reusables.code-scanning.codeql-languages-bullets %}

## Sobre consultas de {% data variables.product.prodname_codeql %}

{% data variables.product.company_short %} especialistas, pesquisadores de segurança e contribuidores da comunidade escrevem e mantêm as consultas padrão de {% data variables.product.prodname_codeql %} usadas por {% data variables.product.prodname_code_scanning %}. As consultas são regularmente atualizadas para melhorar a análise e reduzir quaisquer resultados falso-positivos. As consultas são código aberto, ou seja, você pode visualizar as consultas e contribuir com elas no repositório [`github/codeql`](https://github.com/github/codeql). Para obter mais informações, confira [{% data variables.product.prodname_codeql %}](https://codeql.github.com/) no site do {% data variables.product.prodname_codeql %}. Você também pode escrever suas consultas. Para obter mais informações, confira "[Sobre as consultas do {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/) na documentação do {% data variables.product.prodname_codeql %}.

Você pode executar consultas adicionais como parte da sua análise de digitalização de código. 

{%- ifversion codeql-packs %} Essas consultas precisam pertencer a um pacote de consultas (beta) publicado do {% data variables.product.prodname_codeql %} ou a um pacote QL em um repositório. Os pacotes (beta) de {% data variables.product.prodname_codeql %} oferecem os seguintes benefícios sobre os pacotes QL tradicionais:

- Quando um pacote de consulta (beta) {% data variables.product.prodname_codeql %} é publicado em {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, todas as dependências transitórias exigidas pelas consultas e um cache de compilação estão incluídas no pacote. Isto melhora o desempenho e garante que a execução de consultas no pacote dê resultados idênticos toda vez até que você fizer a autalização para uma nova versão do pacote ou para o CLI. 
- Os pacotes QL não incluem dependências transitivas, ou seja, as consultas do pacote podem depender apenas das bibliotecas padrão (em outras palavras, as bibliotecas referenciadas por uma instrução `import LANGUAGE` na consulta) ou das bibliotecas no mesmo pacote QL da consulta.

Para obter mais informações, confira "[Sobre os pacotes do {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/) e "[Sobre os pacotes do {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/) na documentação do {% data variables.product.prodname_codeql %}.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %} As consultas que você deseja executar precisam pertencer a um pacote QL em um repositório. As consultas precisam depender apenas das bibliotecas padrão (ou seja, das bibliotecas referenciadas por uma instrução `import LANGUAGE` na consulta) ou das bibliotecas no mesmo pacote QL da consulta. Para obter mais informações, confira "[Sobre os pacotes do {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)".
{% endif %}
