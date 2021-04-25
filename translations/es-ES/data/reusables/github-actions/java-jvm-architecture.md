### Especificar la versión y arquitectura de JVM

La plantilla inicial de flujo de trabajo configura el `PATH` para que contenga OpenJDK 8 para las plataformas x64. Si quieres utilizar una versión diferente de Java, o enfocarte en una arquitectura diferente (`x64` o `x86`), puedes utilizar la acción `setup-java` para elegir un ambiente de ejecución de Java diferente.

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

Para obtener más información, consulta la acción [`setup-java`](https://github.com/actions/setup-java).
