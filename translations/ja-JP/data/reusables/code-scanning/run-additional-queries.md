コードをスキャンするために{% data variables.product.prodname_codeql %}を使う場合、{% data variables.product.prodname_codeql %}分析エンジンはコードからデータベースを生成し、それに対してクエリを実行します。 詳しい情報については「[{% data variables.product.prodname_code_scanning %}について](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)」を参照してください。

{% data variables.product.prodname_codeql %}の分析はデフォルトのクエリセットを使いますが、デフォルトのクエリに加えてもっと多くのクエリを実行するよう指定することもできます。 実行したいクエリは、リポジトリ内の{% data variables.product.prodname_ql %}パックに属していなければなりません。 詳しい情報については、「[{% data variables.product.prodname_ql %} パックについて](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)」を参照してください。

クエリは、標準ライブラリ（クエリの `import LANGUAGE` ステートメントで参照されるライブラリ）、またはクエリと同じ {% data variables.product.prodname_ql %} パック内のライブラリにのみ依存している必要があります。 標準ライブラリは [github/codeql](https://github.com/github/codeql) リポジトリにあります。 詳しい情報については「[CodeQLクエリについて](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)」を参照してください。

単一の _.ql_ ファイル、複数の _.ql_ ファイルを含むディレクトリ、_.qls_ クエリスイート定義ファイル、または任意の組み合わせを指定できます。 クエリスイートの定義に関する詳しい情報については「[{% data variables.product.prodname_codeql %}クエリスイートの作成](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}`github/codeql/cpp/ql/src@main`というように、`github/codeql`リポジトリから直接クエリスイートを参照することはおすすめしません。 そういったクエリは、他のクエリで使われるのと同じ{% data variables.product.prodname_codeql %}のバージョンでコンパイルされているとは限らないので、分析の際にエラーが生じるかもしれません。{% endif %}
