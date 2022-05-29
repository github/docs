### Especificar la versión y arquitectura de JVM

El flujo de trabajo inicial configura el `PATH` para contener el OpenJDK 8 para la plataforma x64. Si quieres utilizar una versión diferente de Java, o enfocarte en una arquitectura diferente (`x64` o `x86`), puedes utilizar la acción `setup-java` para elegir un ambiente de ejecución de Java diferente.

Por ejemplo, para utilizar la versión 11 de JDK que se proporciona con Adoptium para la plataforma x64, puedes utilizar la acción `setup-java` y configurar los parámetros `java-version`, `distribution` y `architecture` en `'11'`, `'adopt'` y `x64`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11 for x64
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      architecture: x64
```

Para obtener más información, consulta la acción [`setup-java`](https://github.com/actions/setup-java).
