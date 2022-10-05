---
ms.openlocfilehash: b4da828ed2825e0f6aa8ced7a0f6b90067e9bfdb
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147717646"
---
コードをスキャンするために{% data variables.product.prodname_codeql %}を使う場合、{% data variables.product.prodname_codeql %}分析エンジンはコードからデータベースを生成し、それに対してクエリを実行します。 {% data variables.product.prodname_codeql %}の分析はデフォルトのクエリセットを使いますが、デフォルトのクエリに加えてもっと多くのクエリを実行するよう指定することもできます。

{% ifversion code-scanning-exclude-queries-from-analysis %} {% tip %}

また、分析から除外するクエリを指定したり、分析に含めたりすることもできます。 これには、カスタム構成ファイルを使用する必要があります。 詳しくは、以下の「[カスタム構成ファイルの使用](#using-a-custom-configuration-file)」および「[分析からの特定のクエリの除外](#excluding-specific-queries-from-analysis)」を参照してください。

{% endtip %} {% endif %}

{% ifversion codeql-packs %} 追加のクエリは、{% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} に公開される {% data variables.product.prodname_codeql %} パック (ベータ版)、またはリポジトリに格納される {% data variables.product.prodname_ql %} の一部である場合に、実行できます。 詳細については、「[{% data variables.product.prodname_code_scanning %} と {% data variables.product.prodname_codeql %} について](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)」を参照してください。

追加で実行したいクエリを指定するのに使用できるオプションは、次のとおりです。

- `packs`。1 つまたは複数の {% data variables.product.prodname_codeql %} クエリ パック (ベータ版) をインストールし、それらのパックに対して既定のクエリ スイートまたはクエリを実行します。
- `queries`。1 つの _.ql_ ファイル、複数の _.ql_ ファイルを含むディレクトリ、 _.qls_ クエリ スイート定義ファイル、または任意の組み合わせを指定します。 クエリ スイート定義の詳細については、「[{% data variables.product.prodname_codeql %} クエリ スイートの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)」を参照してください。

同じワークフローで `packs` と `queries` の両方を使用できます。
{% else %} 実行したいクエリが他にあれば、リポジトリ内の {% data variables.product.prodname_ql %} パックに属していなければなりません。 詳細については、「[{% data variables.product.prodname_code_scanning %} と {% data variables.product.prodname_codeql %} について](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)」を参照してください。

1 つの _.ql_ ファイル、複数の _.ql_ ファイルを含むディレクトリ、 _.qls_ クエリ スイート定義ファイル、または任意の組み合わせを指定できます。 クエリ スイート定義の詳細については、「[{% data variables.product.prodname_codeql %} クエリ スイートの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)」を参照してください。
{% endif %}

{% ifversion fpt or ghec %}`github/codeql/cpp/ql/src@main` のように、`github/codeql` リポジトリから直接クエリ スイートを参照することはお勧めしません。 このようなクエリは再コンパイルする必要があり、現在 {% data variables.product.prodname_actions %} でアクティブになっている {% data variables.product.prodname_codeql %} のバージョンと互換性がないため、分析中にエラーが発生する可能性があります。{% endif %}
