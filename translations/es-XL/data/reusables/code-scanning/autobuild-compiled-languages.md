For compiled languages like C/C++, C#, and Java, the `autobuild` step in the default workflow attempts to build code before the action performs {% data variables.product.prodname_codeql %} analysis. En contraste con los otros lenguajes compilados, {% data variables.product.prodname_codeql %} analiza Go sin compilar el código.

El proceso de `autobuild` solo intenta siempre compilar _un_ solo lenguaje compilado para un repositorio. El lenguaje que se selecciona automáticamente para el análisis es aquél con más archivos.


