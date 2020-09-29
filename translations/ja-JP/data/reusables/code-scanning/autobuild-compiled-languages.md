For compiled languages like C/C++, C#, and Java, the `autobuild` step in the default workflow attempts to build code before the action performs {% data variables.product.prodname_codeql %} analysis. 他のコンパイル言語とは対照的に、{% data variables.product.prodname_codeql %} はコードをビルドせずに Go を分析します。

The `autobuild` process only ever attempts to build _one_ compiled language for a repository. The language automatically selected for analysis is the language with most files.


