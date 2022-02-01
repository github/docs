### Especificando a versão e a arquitetura da JVM

The starter workflow sets up the `PATH` to contain OpenJDK 8 for the x64 platform. Se você quiser usar uma versão diferente do Java, ou escolher uma arquitetura diferente (`x64` or `x86`), você pode usar a ação `setup-java` para escolher um ambiente de execução Java diferente.

Por exemplo, para usar a versão 11 do JDK fornecido pelo Adoptium para a plataforma x64, você pode usar a ação `setup-java` e configurar os parâmetros `java-version`, `distribution` e `arquitetura` para `'11'`, `'adopt'` e `x64`.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 11 for x64
    uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
      architecture: x64
```
{% endraw %}

Para obter mais informações, consulte a ação [`setup-java`](https://github.com/actions/setup-java).
