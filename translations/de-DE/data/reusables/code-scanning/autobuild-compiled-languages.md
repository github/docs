For compiled languages like C/C++, C#, and Java, the `autobuild` step in the default workflow attempts to build code before the action performs {{ site.data.variables.product.prodname_codeql }} analysis. In contrast to the other compiled languages, {{ site.data.variables.product.prodname_codeql }} analyzes Go without building the code.

The `autobuild` process only ever attempts to build _one_ compiled language for a repository. The language automatically selected for analysis is the language with most files.


