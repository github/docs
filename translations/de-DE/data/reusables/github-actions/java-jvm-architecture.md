### Spezifizieren der JVM-Version und -Architektur

Die Starter-Workflowvorlage richtet den `PATH` so ein, dass er OpenJDK 8 für die x64-Plattform enthält. Wenn Du eine andere Java-Version verwenden willst oder auf eine andere Architektur (`x64` oder `x86)` abzielen möchtest, kannst Du die `setup-java` -Aktion verwenden, um eine andere Java-Laufzeitumgebung auszuwählen.

Um beispielsweise Version 9.0.4 des JDK für die x64-Plattform zu verwenden, kannst Du die `setup-java` Aktion verwenden und die `java-version`- und `architecture`-Parameter auf `'9.0.4'` und `x64` konfigurieren.

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

Weitere Informationen findest Du unter [`setup-java`](https://github.com/actions/setup-java)-Aktion.
