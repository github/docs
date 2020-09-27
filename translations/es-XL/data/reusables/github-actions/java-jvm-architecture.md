### Especificar la versión y arquitectura de JVM

La plantilla inicial de flujo de trabajo configura el `PATH` para que contenga OpenJDK 8 para las plataformas x64. Si quieres utilizar una versión diferente de Java, o enfocarte en una arquitectura diferente (`x64` o `x86`), puedes utilizar la acción `setup-java` para elegir un ambiente de ejecución de Java diferente.

Por ejemplo, para utilizar la versión 9.0.4 del JDK para una plataforma x64, puedes utilizar la acción `setup-java` y configurar los parámetros `java-version` y `architecture` en `'9.0.4'` y `x64`.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 9.0.4 for x64
    uses: actions/setup-java@v1
    with:
      java-version: '9.0.4'
      architecture: x64
```
{% endraw %}

Para obtener más información, consulta la acción [`setup-java`](https://github.com/actions/setup-java).
