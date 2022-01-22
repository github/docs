---
title: Sobre a digitalização de código com CodeQL
shortTitle: Digitalização de código com CodeQL
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
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre {% data variables.product.prodname_code_scanning %} com {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %}

Existem duas maneiras principais de usar {% data variables.product.prodname_codeql %} análise para {% data variables.product.prodname_code_scanning %}:

- Adicione o fluxo de trabalho de {% data variables.product.prodname_codeql %} ao seu repositório. Isto usa o [github/codeql-action](https://github.com/github/codeql-action/) para executar o {% data variables.product.prodname_codeql_cli %}. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)".
- Execute {% data variables.product.prodname_codeql %} {% ifversion fpt or ghes > 3.1 or ghae or ghec %}CLI diretamente {% elsif ghes = 3.0 %}CLI ou executor {% else %}corredor {% endif %} em um sistema de CI externo e faça o upload dos resultados para {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Sobre a digitalização de código {% data variables.product.prodname_codeql %} no seu sistema de CI ](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)."

## Sobre o {% data variables.product.prodname_codeql %}

O {% data variables.product.prodname_codeql %} trata o código como dados, permitindo que você encontre possíveis vulnerabilidades em seu código com maior confiança do que os analisadores estáticos tradicionais.

1. Você gera um banco de dados de {% data variables.product.prodname_codeql %} para representar a sua base de código.
2. Em seguida, você executa consultas de {% data variables.product.prodname_codeql %} nesse banco de dados para identificar problemas na base de código.
3. Os resultados da consulta são exibidos como alertas de {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %} quando você usa {% data variables.product.prodname_codeql %} com {% data variables.product.prodname_code_scanning %}.

O {% data variables.product.prodname_codeql %} é compatível com linguagens compiladas e interpretadas e é capaz de encontrar vulnerabilidades e erros no código escrito nos idiomas suportados.

{% data reusables.code-scanning.codeql-languages-bullets %}

## Sobre consultas de {% data variables.product.prodname_codeql %}

{% data variables.product.company_short %} especialistas, pesquisadores de segurança e contribuidores da comunidade escrevem e mantêm as consultas padrão de {% data variables.product.prodname_codeql %} usadas por {% data variables.product.prodname_code_scanning %}. As consultas são regularmente atualizadas para melhorar a análise e reduzir quaisquer resultados falso-positivos. As consultas são de código aberto.Portanto, você pode ver e contribuir para as consultas no repositório [`github/codeql`](https://github.com/github/codeql). Para obter mais informações, consulte [{% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql) no site do GitHub Security Lab. Você também pode escrever suas próprias consultas. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_codeql %} consultas](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)" na documentação do {% data variables.product.prodname_codeql %}.

Você pode executar consultas adicionais como parte da sua análise de digitalização de código.

{%- if codeql-packs %}
Essas consultas devem pertencer a um pacote de consulta de {% data variables.product.prodname_codeql %} publicado (beta) ou um pacote QL em um repositório. Os pacotes (beta) de {% data variables.product.prodname_codeql %} oferecem os seguintes benefícios sobre os pacotes QL tradicionais:

- Quando um pacote de consulta (beta) {% data variables.product.prodname_codeql %} é publicado em {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, todas as dependências transitórias exigidas pelas consultas e um cache de compilação estão incluídas no pacote. Isto melhora o desempenho e garante que a execução de consultas no pacote dê resultados idênticos toda vez até que você fizer a autalização para uma nova versão do pacote ou para o CLI.
- Os pacotes de QL não incluem dependências transitórias. Portanto, as consultas no pacote podem depender apenas das bibliotecas padrão (ou seja, as bibliotecas referenciadas por uma instrução `LINGUAGEM de importação` na sua consulta), ou bibliotecas no mesmo pacote QL da consulta.

Para obter mais informações, consulte "[Sobre pacotes de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/)" e "[Sobre pacotes de {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)" na documentação de {% data variables.product.prodname_codeql %}.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %}
As consultas que você deseja executar devem pertencer a um pacote QL em um repositório. As consultas só devem depender das bibliotecas-padrão (ou seja, as bibliotecas referenciadas por uma declaração de `LINGUAGEM de importação` na sua consulta), ou bibliotecas no mesmo pacote QL da consulta. Para obter mais informações, consulte "[Sobre os pacotes de {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/).
{% endif %}
