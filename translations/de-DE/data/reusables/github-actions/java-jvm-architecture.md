### Spezifizieren der JVM-Version und -Architektur

Die Starter-Workflowvorlage richtet den `PATH` so ein, dass er OpenJDK 8 für die x64-Plattform enthält. Wenn Du eine andere Java-Version verwenden willst oder auf eine andere Architektur (`x64` oder `x86)` abzielen möchtest, kannst Du die `setup-java` -Aktion verwenden, um eine andere Java-Laufzeitumgebung auszuwählen.

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

Weitere Informationen findest Du unter [`setup-java`](https://github.com/actions/setup-java)-Aktion.
