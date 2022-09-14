---
title: CodeQL によるコード スキャンについて
shortTitle: Code scanning with CodeQL
intro: '{% data variables.product.prodname_codeql %} を使うと、コード内の脆弱性とエラーを特定することができます。 結果は、{% data variables.product.prodname_dotcom %} 内で {% data variables.product.prodname_code_scanning %} アラートとして表示されます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052177'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %} と {% data variables.product.prodname_codeql %} について

{% data reusables.code-scanning.about-codeql-analysis %}

{% data variables.product.prodname_code_scanning %} に対して {% data variables.product.prodname_codeql %} 分析を使用する方法には、主に 2 通りあります。

- {% data variables.product.prodname_codeql %} ワークフローをご利用のリポジトリに追加します。 これにより、[github/codeql-action](https://github.com/github/codeql-action/) を使用して、{% data variables.product.prodname_codeql_cli %} が実行されます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)」を参照してください。
- 外部 CI システムで {% data variables.product.prodname_codeql %} CLI を直接実行し、その結果を {% data variables.product.prodname_dotcom %} にアップロードします。 詳細については、「[CI システムでの {% data variables.product.prodname_codeql %} コード スキャンについて](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)」を参照してください。

{% ifversion ghes or ghae %}

{% note %} {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }} の場合は、{% endif %}{% data variables.product.prodname_codeql %} アクションの既定で {% data variables.product.prodname_codeql_cli %} バージョン {% data variables.product.codeql_cli_ghes_recommended_version %} が使われます。 外部 CI システムで分析を実行する場合は、同じバージョンの {% data variables.product.prodname_codeql_cli %} を使うことをお勧めします。
{% endnote %}

{% endif %}


## {% data variables.product.prodname_codeql %} について

{% data variables.product.prodname_codeql %} はコードをデータのように扱い、コードの潜在的な脆弱性を従来の静的分析よりも高い精度で見つけることができます。

1. ご利用のコードベースを表現する {% data variables.product.prodname_codeql %} データベースを生成します。
2. 次に、そのデータベースに対して {% data variables.product.prodname_codeql %} クエリを実行して、コードベース内の問題を特定します。
3. {% data variables.product.prodname_codeql %} を {% data variables.product.prodname_code_scanning %} で使用すると、クエリ結果は {% data variables.product.product_name %} に {% data variables.product.prodname_code_scanning %} アラートとして表示されます。

{% data variables.product.prodname_codeql %} ではコンパイルおよびインタープリタ言語の両方がサポートされていて、サポートされている言語で記述されたコードの脆弱性とエラーを見つけることができます。

{% data reusables.code-scanning.codeql-languages-bullets %}

## {% data variables.product.prodname_codeql %} クエリについて

{% data variables.product.company_short %} 専門家、セキュリティ研究者、およびコミュニティの貢献者は、{% data variables.product.prodname_code_scanning %} に使用される既定の {% data variables.product.prodname_codeql %} クエリを作成して維持します。 クエリは、分析を改善し、誤検知の結果を減らすために定期的に更新されます。 クエリはオープン ソースであるため、[`github/codeql`](https://github.com/github/codeql) リポジトリ内のクエリを表示して投稿できます。 詳細については、{% data variables.product.prodname_codeql %} Web サイトの [{% data variables.product.prodname_codeql %}](https://codeql.github.com/) に関するページを参照してください。 自分で独自のクエリを記述することもできます。 詳細については、{% data variables.product.prodname_codeql %} ドキュメントにある [{% data variables.product.prodname_codeql %} クエリ](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)に関するページを参照してください。

コード スキャン分析の一環として、追加のクエリを実行できます。 

{%- ifversion codeql-packs %}これらのクエリは、公開された {% data variables.product.prodname_codeql %} クエリ パック (ベータ) またはリポジトリ内の QL パックに属している必要があります。 {% data variables.product.prodname_codeql %} パック (ベータ) には、従来の QL パックと比較して次の利点があります。

- {% data variables.product.prodname_codeql %} クエリ パック (ベータ) が {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} に公開されると、クエリとコンパイル キャッシュに必要なすべての推移的な依存関係がパッケージに含められます。 これにより、パフォーマンスが向上します。そして、パックまたは CLI の新しいバージョンにアップグレードするまでは、パックでクエリを実行するたびに確実に同じ結果が得られます。 
- QL パックには推移的な依存関係は含まれていません。その結果、パック内のクエリを、標準ライブラリ (つまり、ご利用のクエリ内の `import LANGUAGE` ステートメントによって参照されるライブラリ)、またはクエリと同じ QL パック内のライブラリにのみ依存させることができます。

詳細については、{% data variables.product.prodname_codeql %} ドキュメントにある「[{% data variables.product.prodname_codeql %} パックについて](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/)」および「[{% data variables.product.prodname_ql %} パックについて](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)」を参照してください。

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %} 実行するクエリは、リポジトリ内の QL パックに属している必要があります。 クエリは、標準ライブラリ (つまり、クエリ内のステートメント `import LANGUAGE` から参照されるライブラリ) またはクエリと同じ QL パック内のライブラリにのみ依存する必要があります。 詳細については、「[{% data variables.product.prodname_ql %} パックについて](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)」を参照してください。
{% endif %}
