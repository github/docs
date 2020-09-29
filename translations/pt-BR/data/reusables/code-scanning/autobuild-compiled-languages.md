For compiled languages like C/C++, C#, and Java, the `autobuild` step in the default workflow attempts to build code before the action performs {% data variables.product.prodname_codeql %} analysis. Ao contrário das outras linguagens compiladas, {% data variables.product.prodname_codeql %} analisa Go sem criar o código.

O processo `autobuild` sempre tenta criar _uma_ linguagem compilada para um repositório. The language automatically selected for analysis is the language with most files.


