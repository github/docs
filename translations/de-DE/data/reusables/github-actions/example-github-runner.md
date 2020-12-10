### Ausführen auf einem anderen Betriebssystem

Die Starter-Workflowvorlage konfiguriert Aufträge zur Ausführung unter Linux und verwendet {% data variables.product.prodname_dotcom %}-gehostete `ubuntu-latest` Läufer. Du kannst den `runs-on` (läuft auf) Schlüssel ändern, um Deine Aufträge auf einem anderen Betriebssystem auszuführen. Beispielsweise kannst Du die {% data variables.product.prodname_dotcom %}-gehosteten Windows-Läufer verwenden.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

Oder Du kannst auf den {% data variables.product.prodname_dotcom %}-gehosteten macOS-Läufern laufen.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

Du kannst Aufträge auch in Docker-Containern ausführen oder einen selbst gehosteten Läufer bereitstellen, der auf Deiner eigenen Infrastruktur läuft. Weitere Informationen findest Du unter „[Workflow Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)."
