### Especificando a versão e a arquitetura da JVM

O modelo de fluxo de trabalho inicial configura o `PATH` para conter OpenJDK 8 para a plataforma x64. Se você quiser usar uma versão diferente do Java, ou escolher uma arquitetura diferente (`x64` or `x86`), você pode usar a ação `setup-java` para escolher um ambiente de execução Java diferente.

Por exemplo, para usar a versão 9.0. do JDK para a plataforma x64, você pode usar os parâmetros `setup-java` e configurar os de `java-version` e `architecture` para `'9.0.4'` e `x64`.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 9.0.4 for x64
    uses: actions/setup-java@v1
    with:
      java-version: '9.0.4'
      architecture: x64
```
{% endraw %}

Para obter mais informações, consulte a ação [`setup-java`](https://github.com/actions/setup-java).
