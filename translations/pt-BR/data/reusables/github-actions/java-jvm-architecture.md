### Especificando a versão e a arquitetura da JVM

O modelo de fluxo de trabalho inicial configura o `PATH` para conter OpenJDK 8 para a plataforma x64. Se você quiser usar uma versão diferente do Java, ou escolher uma arquitetura diferente (`x64` or `x86`), você pode usar a ação `setup-java` para escolher um ambiente de execução Java diferente.

For example, to use version 11 of the JDK provided by Adoptium for the x64 platform, you can use the `setup-java` action and configure the `java-version`, `distribution` and `architecture` parameters to `'11'`, `'adopt'` and `x64`.

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
