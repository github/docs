For compiled languages like C/C++, C#, and Java, the `autobuild` step in the default workflow attempts to build code before the action performs {% data variables.product.prodname_codeql %} analysis. 与其他编译语言不同，{% data variables.product.prodname_codeql %} 在分析 Go 时不会构建代码。 与其他编译语言不同，{% data variables.product.prodname_codeql %} 在分析 Go 时不会构建代码。

The `autobuild` process only ever attempts to build _one_ compiled language for a repository. The language automatically selected for analysis is the language with most files.


