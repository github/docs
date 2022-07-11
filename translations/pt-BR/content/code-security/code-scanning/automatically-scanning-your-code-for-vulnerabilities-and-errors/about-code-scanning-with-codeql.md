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
- Execute a CLI de {% data variables.product.prodname_codeql %} diretamente em um sistema dew CI externo e faça o upload dos resultados para {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Sobre a digitalização de código {% data variables.product.prodname_codeql %} no seu sistema de CI ](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)."

{% ifversion ghes or ghae %}

{% note %}
On {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }},{% endif %} the {% data variables.product.prodname_codeql %} action uses {% data variables.product.prodname_codeql_cli %} version {% data variables.product.codeql_cli_ghes_recommended_version %} by default. We recommend that you use the same version of the {% data variables.product.prodname_codeql_cli %} if you run analysis in an external CI system.
{% endnote %}

{% endif %}


## Sobre o {% data variables.product.prodname_codeql %}

{% data variables.product.prodname_codeql %} treats code like data, allowing you to find potential vulnerabilities in your code with greater confidence than traditional static analyzers.

1. Você gera um banco de dados de {% data variables.product.prodname_codeql %} para representar a sua base de código.
2. Em seguida, você executa consultas de {% data variables.product.prodname_codeql %} nesse banco de dados para identificar problemas na base de código.
3. Os resultados da consulta são exibidos como alertas de {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %} quando você usa {% data variables.product.prodname_codeql %} com {% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_codeql %} supports both compiled and interpreted languages, and can find vulnerabilities and errors in code that's written in the supported languages.

{% data reusables.code-scanning.codeql-languages-bullets %}

## Sobre consultas de {% data variables.product.prodname_codeql %}

{% data variables.product.company_short %} experts, security researchers, and community contributors write and maintain the default {% data variables.product.prodname_codeql %} queries used for {% data variables.product.prodname_code_scanning %}. The queries are regularly updated to improve analysis and reduce any false positive results. The queries are open source, so you can view and contribute to the queries in the [`github/codeql`](https://github.com/github/codeql) repository. For more information, see [{% data variables.product.prodname_codeql %}](https://codeql.github.com/) on the {% data variables.product.prodname_codeql %} website. You can also write your own queries. For more information, see "[About {% data variables.product.prodname_codeql %} queries](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)" in the {% data variables.product.prodname_codeql %} documentation.

You can run additional queries as part of your code scanning analysis.

{%- ifversion codeql-packs %}
These queries must belong to a published {% data variables.product.prodname_codeql %} query pack (beta) or a QL pack in a repository. {% data variables.product.prodname_codeql %} packs (beta) provide the following benefits over traditional QL packs:

- Quando um pacote de consulta (beta) {% data variables.product.prodname_codeql %} é publicado em {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, todas as dependências transitórias exigidas pelas consultas e um cache de compilação estão incluídas no pacote. Isto melhora o desempenho e garante que a execução de consultas no pacote dê resultados idênticos toda vez até que você fizer a autalização para uma nova versão do pacote ou para o CLI.
- Os pacotes de QL não incluem dependências transitórias. Portanto, as consultas no pacote podem depender apenas das bibliotecas padrão (ou seja, as bibliotecas referenciadas por uma instrução `LINGUAGEM de importação` na sua consulta), ou bibliotecas no mesmo pacote QL da consulta.

For more information, see "[About {% data variables.product.prodname_codeql %} packs](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/)" and "[About {% data variables.product.prodname_ql %} packs](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)" in the {% data variables.product.prodname_codeql %} documentation.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %}
The queries you want to run must belong to a QL pack in a repository. Queries must only depend on the standard libraries (that is, the libraries referenced by an `import LANGUAGE` statement in your query), or libraries in the same QL pack as the query. For more information, see "[About {% data variables.product.prodname_ql %} packs](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)."
{% endif %}
