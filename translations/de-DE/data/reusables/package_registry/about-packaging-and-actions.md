### Paket-Erstellung in Workflows zur kontinuierlichen Integration

Die Paket-Erstellung ist ein üblicher Bestandteil des Workflows bei der kontinuierlichen Integration oder bei der kontinuierlichen Auslieferung. Das Erstellen eines Pakets am Ende eines Workflows zur kontinuierlichen Integration kann während des Code-Reviews bei einem Pull-Request hilfreich sein.

Nach dem Erstellen und Testen Deines Codes kann ein Paketierungsschritt ein lauf- oder bereitstellungsfähiges Artefakt erzeugen. Je nach Art der Anwendung, die Du erstellst, kann dieses Paket für manuelle Tests lokal heruntergeladen, Benutzern zum Herunterladen zur Verfügung gestellt oder in einer Staging- oder Produktionsumgebung bereitgestellt werden.

Beispielsweise kann ein Workflow zur kontinuierlichen Integration für ein Java-Projekt `mvn package` ausführen, um eine JAR-Datei zu erstellen. Oder ein CI-Workflow für eine Node.js-Anwendung kann einen Docker-Container erzeugen.

Wenn Du nun einen Pull-Request überprüfst, kannst Du Dir den Ablauf des Workflows ansehen und das erzeugte Artefakt herunterladen.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
![Dropdown-Menü zum Herunterladen von Artefakten](/assets/images/help/repository/artifact-drop-down-updated.png)
{% else %}
![Dropdown-Menü zum Herunterladen von Artefakten](/assets/images/help/repository/artifact-drop-down.png)
{% endif %}

Dadurch kannst Du den Code im Pull-Request auf Deinem Rechner ausführen, was beim Debuggen oder Testen des Pull-Requests helfen kann.

### Workflows zum Veröffentlichen von Paketen

Außer Paket-Artefakte zum Testen in einem Workflow zur kontinuierlichen Integration zum Testen hochzuladen, kannst Du auch Workflows erstellen, die Dein Projekt bauen und Pakete in einer Paket-Registry veröffentlichen.

* **Publish packages to {% data variables.product.prodname_registry %}**
  {% data variables.product.prodname_registry %} can act as a package hosting service for many types of packages. Du kannst Deine Pakete entweder mit allen {% data variables.product.prodname_dotcom %} oder private Pakete nur mit Mitarbeitern oder einer Organisation teilen. For more information, see "[Introduction to GitHub Packages](/packages/learn-github-packages/introduction-to-github-packages)."

  You may want to publish packages to {% data variables.product.prodname_registry %} on every push into the default branch. This will allow developers on your project to always be able to run and test the latest build from the default branch easily, by installing it from {% data variables.product.prodname_registry %}.

* **Pakete in einer Paket-Registry veröffentlichen** Bei vielen Projekten werden neue Versionen immer in einer Paket-Registry veröffentlicht. Beispielsweise kann ein Projekt, das eine JAR-Datei erstellt, neue Versionen in das Zentral-Repository von Maven hochladen. Oder ein .NET-Projekt kann ein NuGet-Paket erzeugen und es in die NuGet-Galerie hochladen.

  Du kannst dies automatisieren, indem Du einen Workflow erstellst, der bei jeder Release-Erstellung Pakete in einer Paket-Registry veröffentlicht. Weitere Informationen findest Du unter „[Releases erstellen](/github/administering-a-repository/creating-releases)“.
