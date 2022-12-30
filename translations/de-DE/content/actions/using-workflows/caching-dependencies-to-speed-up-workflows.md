---
title: Abhängigkeiten zwischenspeichern um Workflows zu beschleunigen
shortTitle: Cache dependencies
intro: 'Um deine Workflows schneller und effizienter zu gestalten, kannst du Caches für Abhängigkeiten und andere häufig wiederverwendete Dateien erstellen und verwenden.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
versions:
  feature: actions-caching
type: tutorial
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 380fe568e950a4dc388e8f811ecebd12f242c5df
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164380'
---
## Informationen zum Zwischenspeichern von Workflow-Abhängigkeiten

Workflow-Läufe verwenden häufig dieselben Ausgaben oder heruntergeladenen Abhängigkeiten in aufeinanderfolgenden Durchläufen. Tools zur Verwaltung von Paketen und Abhängigkeiten wie beispielsweise Maven, Gradle, npm und Yarn halten einen lokalen Cache mit heruntergeladenen Abhängigkeiten.

{% ifversion fpt or ghec %} Aufträge für {% data variables.product.prodname_dotcom %}-gehostete Runner beginnen in einem sauberen Runner-Image und müssen Abhängigkeiten jedes Mal herunterladen. Dies führt zu erhöhter Netzwerkauslastung, längerer Laufzeit und erhöhten Kosten. {% endif %}Um die Zeit zum Neuerstellen von Dateien wie Abhängigkeiten einzusparen, kann {% data variables.product.prodname_dotcom %} in Workflows häufig verwendete Dateien zwischenspeichern.

Um Abhängigkeiten für einen Auftrag zwischenzuspeichern, kannst du die [`cache`-Aktion](https://github.com/actions/cache) von {% data variables.product.prodname_dotcom %} verwenden. Die Aktion erstellt einen Cache, der durch einen eindeutigen Schlüssel identifiziert wird, und stellt diesen wieder her. Wenn du die unten aufgeführten Paket-Manager zwischenspeicherst, erfordert die Verwendung ihrer jeweiligen Setup-*-Aktionen minimale Konfiguration und erstellt Abhängigkeitscaches für dich und stellt diese wieder her.

| Paket-Manager | Setup-*-Aktion zum Zwischenspeichern |
|---|---|
| npm, Yarn, pnpm | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data) |
| pip, pipenv, Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies) |
| Gradle, Maven | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies) |
| RubyGems | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically) |
| Go `go.sum` | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**Warnung**: {% ifversion fpt or ghec %}Beachte Folgendes, wenn du Zwischenspeicherung mit {% data variables.product.prodname_actions %} verwendest:

* {% endif %}Es wird empfohlen, keine vertraulichen Informationen im Cache zu speichern. Sensible Informationen umfassen beispielsweise Zugriffstoken oder Anmeldedaten, die in einer Datei im Cache-Pfad gespeichert sind. Auch Befehlszeilenprogramme (CLI) wie `docker login` können Anmeldeinformationen in einer Konfigurationsdatei speichern. Jeder Benutzer mit Lesezugriff kann einen Pull-Request für ein Repository erstellen und auf den Inhalt des Caches zugreifen. Forks eines Repositorys können auch Pull-Requests auf den base branch (Basiszweig) erstellen und auf Caches im Basiszweig zugreifen.
{%- ifversion fpt or ghec %}
* Bei der Verwendung von selbstgehosteten Runnern werden Caches aus Workflowausführungen auf {% data variables.product.company_short %}-eigenem Cloudspeicher gespeichert. Eine kundeneigene Speicherlösung ist nur mit {% data variables.product.prodname_ghe_server %} verfügbar.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

Weitere Informationen zu Workflowausführungsartefakten findest du unter [Endgültiges Speichern von Workflowdaten mit Artefakten](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

## Einschränkungen für den Zugriff auf einen Cache

Zugriffsbeschränkungen bieten Cache-Isolation und Sicherheit durch Ziehen einer logischen Grenze zwischen Branches oder Tags. Mit Workflowausführungen können Caches wiederhergestellt werden, die entweder im aktuellen Branch oder im Standardbranch (üblicherweise `main`) erstellt wurden. Wenn eine Workflowausführung für einen Pull Request ausgelöst wird, kann sie auch Caches wiederherstellen, die im Basisbranch erstellt wurden, einschließlich der Basisbranches von geforkten Repositorys. Wenn der Branch `feature-b` beispielsweise den Basisbranch `feature-a` verwendet, hat ein Workflow, der durch einen Pull Request ausgelöst wird, Zugriff auf die Caches, die im Standardbranch `main`, dem Basisbranch `feature-a` und dem aktuellen Branch `feature-b` erstellt wurden.

Mit Workflowausführungen können keine Caches wiederhergestellt werden, die für untergeordnete oder gleichgeordnete Branches erstellt wurden. Beispielsweise wäre ein für den untergeordneten Branch `feature-b` erstellter Cache nicht für einen Workflow zugänglich, der für den übergeordneten Branch `main` ausgelöst wurde. Ebenso wäre ein Cache, der für den Branch `feature-a` mit der Basis `main` erstellt wurde, nicht für den gleichgeordneten Branch `feature-c` mit der Basis `main` zugänglich. Mithilfe von Workflowausführungen können auch keine Caches wiederhergestellt werden, die für andere Tagnamen erstellt wurden. Zum Beispiel wäre ein Cache, der für das Tag `release-a` mit der Basis `main` erstellt wurde, nicht für eine Workflowausführung zugänglich, die für das Tag `release-b` mit der Basis `main` ausgelöst wurde.

Wenn ein Cache über eine Workflowausführung erstellt wird, die durch einen Pull Request ausgelöst wurde, wird der Cache für den Mergeverweis (`refs/pull/.../merge`) erstellt. Aus diesem Grund hat der Cache einen begrenzten Bereich und kann nur durch erneutes Ausführen des Pull Request wiederhergestellt werden. Er kann nicht über den Basisbranch oder andere Pull Requests wiederhergestellt werden, die diesen Basisbranch als Ziel haben.

Mehrere Workflowausführungen in einem Repository können Caches gemeinsam nutzen. Ein Cache, der für einen Branch in einer Workflowausführung erstellt wurde, kann von einer anderen Workflowausführung für dasselbe Repository und denselben Branch aufgerufen und wiederhergestellt werden.

## Verwenden der `cache`-Aktion

Die [`cache`-Aktion](https://github.com/actions/cache) versucht, einen Cache basierend auf dem bereitgestellten `key` wiederherzustellen. Wenn die Aktion einen Cache findet, der _exakt_ mit dem Schlüssel übereinstimmt, stellt die Aktion die zwischengespeicherten Dateien an dem von dir konfigurierten Pfad (`path`) wieder her.
Du kannst optional eine Liste von `restore-keys` angeben, die verwendet werden sollen, falls `key` nicht mit einem vorhandenen Cache übereinstimmt. Eine Liste von `restore-keys` ist nützlich, wenn du einen Cache aus einem anderen Branch wiederherstellst, da `restore-keys` einen _Teilabgleich_ für Cacheschlüssel durchführen kann. Weitere Informationen zum Abgleichen von `restore-keys` findest du unter [Abgleichen eines Cacheschlüssels](#matching-a-cache-key).

Wenn es eine genaue Übereinstimmung mit dem angegebenen `key` gibt, wird dies als Cachetreffer gewertet. Wenn kein Cache genau mit den angegebenen `key` übereinstimmt, wird dies als Cachefehler gewertet. Bei einem Cachefehler erstellt die Aktion automatisch einen neuen Cache, wenn der Auftrag erfolgreich abgeschlossen wurde. Der neue Cache verwendet den bereitgestellten `key` und enthält die von Ihnen in `path` angegebenen Dateien. Weitere Informationen zur Handhabung dieser Situation findest du unter [Cachetreffer und -fehler](#cache-hits-and-misses).

Du kannst den Inhalt eines vorhandenen Caches nicht ändern. Stattdessen kannst du einen neuen Cache mit einem neuen Schlüssel erstellen.


### Eingabeparameter für die `cache`-Aktion

- `key`: **Erforderlich**. Der Schlüssel, der beim Speichern eines Caches erstellt wurde, und der Schlüssel, der zum Suchen nach einem Cache verwendet wird. Dies kann eine beliebige Kombination von Variablen, Kontextwerten, statischen Zeichenfolgen und Funktionen sein. Schlüssel haben eine maximale Länge von 512 Zeichen und Schlüssel, die die maximale Länge überschreiten, lassen die Aktion fehlschlagen.
- `path`: **Erforderlich**. Die Pfade auf dem Runner, die zwischengespeichert oder wiederhergestellt werden sollen.
  - Du kannst einen einzelnen Pfad angeben oder mehrere Pfade in separaten Zeilen hinzufügen. Beispiel:

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - Du kannst entweder Verzeichnisse oder einzelne Dateien angeben, und Globmuster werden unterstützt.
  - Du kannst absolute Pfade oder zum Arbeitsbereichsverzeichnis relative Pfade angeben.
- `restore-keys`: **Optional**. Eine Zeichenfolge mit alternativen Wiederherstellungsschlüsseln, wobei jeder Wiederherstellungsschlüssel in einer neuen Zeile platziert wird. Wenn kein Cachetreffer für `key` vorhanden ist, werden diese Wiederherstellungsschlüssel sequenziell in der bereitgestellten Reihenfolge verwendet, um einen Cache zu finden und wiederherzustellen. Beispiel:

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### Ausgabeparameter für die `cache`-Aktion

- `cache-hit`: Ein boolescher Wert, der angibt, dass eine genaue Übereinstimmung für den Schlüssel gefunden wurde.

### Cachetreffer und -fehler
Wenn `key` exakt mit einem vorhandenen Cache übereinstimmt, wird dies als _Cachetreffer_ bezeichnet, und die Aktion stellt die zwischengespeicherten Dateien im Verzeichnis `path` wieder her.

Wenn `key` nicht mit einem vorhandenen Cache übereinstimmt, wird das als _Cachefehler_ bezeichnet. Wenn der Auftrag erfolgreich abgeschlossen wird, wird automatisch ein neuer Cache erstellt.

Wenn ein Cachefehler auftritt, sucht die Aktion auch in den angegebenen `restore-keys` nach Übereinstimmungen:

1. Wenn du `restore-keys` angibst, sucht die `cache`-Aktion sequenziell nach Caches, die der Liste von `restore-keys` entsprechen.
   - Wenn es eine genaue Übereinstimmung gibt, stellt die Aktion die Dateien aus dem Cache im Verzeichnis `path` wieder her.
   - Wenn es keine exakten Übereinstimmungen gibt, sucht die Aktion nach partiellen Übereinstimmungen der „restore keys“ (Wiederherstellungs-Scvhlüssel). Wenn die Aktion eine partielle Übereinstimmung findet, wird der aktuellste Cache im Verzeichnis `path` wiederhergestellt.
1. Die `cache`-Aktion wird abgeschlossen, und der nächste Schritt im Auftrag wird ausgeführt.
1. Wenn der Auftrag erfolgreich abgeschlossen wurde, erstellt die Aktion automatisch einen neuen Cache mit dem Inhalt des Verzeichnisses `path`.

Eine ausführlichere Erläuterung des Cacheabgleichs findest du unter [Abgleichen eines Cacheschlüssels](#matching-a-cache-key).

### Beispiel für die Verwendung der `cache`-Aktion

Dieses Beispiel erstellt einen neuen Cache, wenn sich die Pakete in `package-lock.json` ändern oder sich das Betriebssystem des Runners ändert. Das folgende Beispiel verwendet Kontexte und Ausdrücke, um einen Schlüssel zu generieren, der eine Kennung des Runnerbetriebssystems und einen SHA-256-Hash der Datei `package-lock.json` enthält.

```yaml{:copy}
name: Caching with npm
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Cache node modules
        id: cache-npm
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
            {% raw %}${{ runner.os }}-build-{% endraw %}
            {% raw %}${{ runner.os }}-{% endraw %}

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

### Cache-Keys aus Kontexten erstellen

Ein Cache-Key (Cache-Schlüssel) kann Kontexte, Funktionen, Literale und Operatoren enthalten, die von {% data variables.product.prodname_actions %} unterstützt werden. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts) und [Ausdrücke](/actions/learn-github-actions/expressions).

Wenn du zum Erstellen eines `key`s Ausdrücke verwendest, kannst du automatisch einen neuen Cache erstellen, wenn sich Abhängigkeiten ändern.

Du kannst z. B. einen `key` mit einem Ausdruck erstellen, der den Hash einer npm-Datei `package-lock.json` berechnet. Wenn sich also die Abhängigkeiten ändern, aus denen die Datei `package-lock.json` besteht, ändert sich der Cacheschlüssel, und ein neuer Cache wird automatisch erstellt.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} wertet den Ausdruck `hash "package-lock.json"` aus, um den endgültigen `key` abzuleiten.

```yaml
npm-d5ea0750
```

### Verwenden der Ausgabe der `cache`-Aktion

Du kannst die Ausgabe der `cache`-Aktion verwenden, um eine Aktion abhängig davon auszuführen, ob ein Cachetreffer oder -fehler aufgetreten ist. Wenn eine genaue Übereinstimmung für einen Cache des angegebenen `key`-Elements gefunden wird, wird die Ausgabe von `cache-hit` auf `true` festgelegt.

Im Beispielworkflow oben gibt es einen Schritt, in dem der Status der Node-Module aufgelistet wird, wenn ein Cachefehler aufgetreten ist:

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## Einen Cache-Key abgleichen

Die Aktion `cache` sucht zunächst nach Cachetreffern für `key` und den Cache _Version_ in dem Branch, der die Workflowausführung enthält. Wenn es keinen Treffer gibt, wird nach `restore-keys` und der _Version_ gesucht. Wenn es im aktuellen Branch weiterhin keine Treffer gibt, wiederholt die Aktion `cache` dieselben Schritte für den Standardbranch. Beachte, dass während der Suche die Bereichseinschränkungen gelten. Weitere Informationen findest du unter [Einschränkungen für den Zugriff auf einen Cache](#restrictions-for-accessing-a-cache).

Über die Cacheversion kann ein Cache mit Metadaten für den `path` und das bei der Cacheerstellung verwendete Komprimierungstool versehen werden. So wird sichergestellt, dass die Workflowausführung eindeutig einem Cache entspricht, den sie tatsächlich dekomprimieren und nutzen kann. Weitere Informationen findest du unter [Cacheversion](https://github.com/actions/cache#cache-version) in der Dokumentation zum Actions-Cache.

`restore-keys` ermöglicht es Ihnen, eine Liste alternativer Wiederherstellungsschlüssel anzugeben, die verwendet werden sollen, wenn ein Cachefehler für `key` auftritt. Du kannst mehrere <code>restore-keys</code> erstellen, die von den spezifischsten zum am wenigsten spezifischen sortiert sind. Die `cache`-Aktion durchsucht die `restore-keys` sequenzielle Reihenfolge. Wenn ein Schlüssel nicht direkt übereinstimmt, sucht die Aktion nach Schlüsseln denen der Restore-Key vorangestellt ist. Wenn mehrere Teiltreffer für einen Restore-Key vorhanden sind, gibt die Aktion den zuletzt erstellten Cache zurück.

### Beispiel für die Verwendung mehrerer Restore-Keys

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

Der Runner wertet die Ausdrücke aus, die in die folgenden `restore-keys` aufgelöst werden:

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

Der Wiederherstellungsschlüssel `npm-feature-` stimmt mit jedem Schlüssel überein, der mit der Zeichenfolge `npm-feature-` beginnt. Beispielsweise entsprechen beide Schlüssel `npm-feature-fd3052de` und `npm-feature-a9b253ff` dem Wiederherstellungsschlüssel. Der Cache mit dem neuesten Erstellungsdatum wird verwendet. Die Schlüssel in diesem Beispiel werden in der folgenden Reihenfolge durchsucht:

1. **`npm-feature-d5ea0750`** stimmt mit einem bestimmten Hash überein.
1. **`npm-feature-`** gleicht Cacheschlüssel mit dem Präfix `npm-feature-` ab.
1. **`npm-`** gleicht alle Schlüssel mit dem Präfix `npm-` ab.

#### Beispiel für die Suchpriorität

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

Wenn beispielsweise ein Pull Request einen `feature`-Branch enthält und auf den Standardbranch (`main`) abzielt, sucht die Aktion nach `key` und `restore-keys` in der folgenden Reihenfolge:

1. Schlüssel `npm-feature-d5ea0750` im `feature`-Branch
1. Schlüssel `npm-feature-` im `feature`-Branch
1. Schlüssel `npm-` im `feature`-Branch
1. Schlüssel `npm-feature-d5ea0750` im `main`-Branch
1. Schlüssel `npm-feature-` im `main`-Branch
1. Schlüssel `npm-` im `main`-Branch

## Nutzungsbeschränkungen und Räumungsrichtlinien

{% data variables.product.prodname_dotcom %} wird alle Cache-Einträge entfernen, auf die seit mehr als 7 Tagen nicht zugegriffen wurde. Es gibt keine Grenze für die Anzahl der Caches, die du speichern kannst. Die Gesamtgröße aller Caches in einem Repository ist jedoch begrenzt{% ifversion actions-cache-policy-apis %}. Standardmäßig liegt der Grenzwert bei 10 GB pro Repository. Dieser Grenzwert kann jedoch je nach den von deinen Unternehmensinhaber*innen oder Repositoryadministrator*innen festgelegten Richtlinien abweisen.{% else %} auf 10 GB.{% endif %} 

{% data reusables.actions.cache-eviction-process %} {% ifversion actions-cache-ui %}Der Prozess zur Cacheleerung kann zu einem sogenannten Cache-Thrashing führen, bei dem Caches in hoher Frequenz erstellt und gelöscht werden. Um dies zu reduzieren, kannst du die Caches für ein Repository überprüfen und Korrekturmaßnahmen ergreifen, wie z. B. das Entfernen der Zwischenspeicherung aus bestimmten Workflows. Weitere Informationen findest du unter [Verwalten von Caches](#managing-caches).{% endif %}{% ifversion actions-cache-admin-ui %} Du kannst auch das Cachegrößenlimit für ein Repository erhöhen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository).

{% elsif actions-cache-policy-apis %}

Informationen zum Ändern der Richtlinien für das Größenlimit des Repositorycaches findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise) und [Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository).

{% endif %}

{% ifversion actions-cache-management %}

## Verwalten von Caches

{% ifversion actions-cache-ui %}

Zum Verwalten der über deine Workflows erstellten Caches kannst du folgende Aufgaben ausführen:

- Anzeigen einer Liste aller Cacheeinträge für ein Repository
- Filtern und Sortieren der Liste der Caches anhand bestimmter Metadaten, z. B. Cachegröße, Erstellungszeitpunkt oder Zeitpunkt des letzten Zugriffs
- Löschen von Cacheeinträgen aus einem Repository
- Überwachen der aggregierten Cachenutzung für Repositorys und Organisationen

Es gibt mehrere Möglichkeiten, die Caches für deine Repositorys zu verwalten:

- Verwenden der {% data variables.product.prodname_dotcom %}-Weboberfläche, wie unten gezeigt.
- Verwendung der REST-API. Weitere Informationen findest du in der REST-API-Dokumentation [{% data variables.product.prodname_actions %}-Cache](/rest/actions/cache).
- Installation einer {% data variables.product.prodname_cli %}-Erweiterung, um deine Caches über die Befehlszeile zu verwalten. Weitere Informationen findest du in der Erweiterung [gh-actions-cache](https://github.com/actions/gh-actions-cache).

{% else %}

Du kannst die {% data variables.product.product_name %}-REST-API verwenden, um deine Caches zu verwalten. {% ifversion actions-cache-list-delete-apis %}Du kannst mithilfe der API Cacheeinträge auflisten sowie löschen und deine Cachenutzung anzeigen.{% elsif actions-cache-management %}Derzeit kannst du mithilfe der API deine Cachenutzung anzeigen, wobei in zukünftigen Updates weitere Funktionen erwartet werden.{% endif %} Weitere Informationen findest du in der Dokumentation zur REST-API unter [{% data variables.product.prodname_actions %}-Cache](/rest/actions/cache).

Du kannst auch eine {% data variables.product.prodname_cli %}-Erweiterung installieren, um deine Caches über die Befehlszeile zu verwalten. Weitere Informationen zur Erweiterung findest du in der [Erweiterungsdokumentation](https://github.com/actions/gh-actions-cache#readme). Weitere Informationen zu {% data variables.product.prodname_cli %}-Erweiterungen findest du unter [Verwenden von GitHub CLI-Erweiterungen](/github-cli/github-cli/using-github-cli-extensions).

{% endif %}

{% ifversion actions-cache-ui %}

### Anzeigen von Cacheeinträgen

Du kannst die Weboberfläche verwenden, um eine Liste der Cacheeinträge für ein Repository anzuzeigen. In der Cacheliste kannst du sehen, wie viel Speicherplatz jeder Cache verbraucht, wann der Cache erstellt und wann er zuletzt verwendet wurde.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. Überprüfe die Liste der Cacheeinträge für das Repository.

   * Um nach Cacheeinträgen zu suchen, die für einen bestimmten Branch verwendet werden, klicke auf das Dropdownmenü **Branch**, und wähle einen Branch aus. In der Cacheliste werden alle Caches angezeigt, die für den ausgewählten Branch verwendet werden.
   * Um nach Cacheeinträgen mit einem bestimmten Cacheschlüssel zu suchen, verwende die Syntax `key: key-name` im Feld **Caches filtern**. In der Cacheliste werden Caches aus allen Branches angezeigt, in denen der Schlüssel verwendet wurde.

   ![Screenshot: Liste der Cacheeinträge](/assets/images/help/repository/actions-cache-entry-list.png)

### Löschen von Cacheeinträgen

Benutzer mit `write`-Zugriff auf ein Repository können die {% data variables.product.prodname_dotcom %}-Weboberfläche verwenden, um Cacheeinträge zu löschen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. Klicke rechts neben dem Cacheeintrag, den du löschen möchtest, auf {% octicon "trash" aria-label="The trash icon" %}. 

   ![Screenshot: Liste der Cacheeinträge](/assets/images/help/repository/actions-cache-delete.png)

{% endif %}

{% endif %}
