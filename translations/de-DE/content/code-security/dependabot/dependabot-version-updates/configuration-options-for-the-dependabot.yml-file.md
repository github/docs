---
title: Konfigurationsoptionen für die Datei dependabot.yml
intro: 'Detaillierte Informationen über alle Optionen, mit denen du anpassen kannst, wie {% data variables.product.prodname_dependabot %} deine Repositorys wartet.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
ms.openlocfilehash: 3ec6cddf63b2e2d238baf96ea7d437fcb3c21d3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147691997'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zur Datei *dependabot.yml*

In der {% data variables.product.prodname_dependabot %}-Konfigurationsdatei *dependabot.yml* wird die YAML-Syntax verwendet. Wenn du noch nicht mit YAML arbeiten und mehr erfahren möchtest, lies den Artikel zum [Erlernen von YAML in fünf Minuten](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes).

Du musst diese Datei im `.github`-Verzeichnis deines Repositorys speichern. Wenn du die Datei *dependabot.yml* hinzufügst oder aktualisierst, wird dadurch eine sofortige Überprüfung auf Versionsupdates ausgelöst. Weitere Informationen und ein entsprechendes Beispiel findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot %}-Versionsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates).

Alle Optionen, die sich auch auf Sicherheitsupdates auswirken, werden beim nächsten Mal verwendet, wenn eine Sicherheitswarnung einen Pull Request für ein Sicherheitsupdate auslöst.  Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates).

Die Datei *dependabot.yml* verfügt über zwei obligatorische Schlüssel der obersten Ebene: `version` und `updates`. Du kannst optional einen `registries`-Schlüssel der obersten Ebene{% ifversion ghes = 3.5 %} und/oder einen `enable-beta-ecosystems`-Schlüssel{% endif %} in die Datei aufnehmen. Die Datei muss mit `version: 2` beginnen.

## Konfigurationsoptionen für die Datei *dependabot.yml*

Der `updates`-Schlüssel der obersten Ebene ist erforderlich. Du verwendest ihn, um zu konfigurieren, wie die Versionen oder die Abhängigkeiten deines Projekts von {% data variables.product.prodname_dependabot %} aktualisiert werden. Von jedem Eintrag werden die Updateeinstellungen für einen bestimmten Paket-Manager konfiguriert. Du kannst die folgenden Optionen verwenden:

{% data reusables.dependabot.configuration-options %}

Diese Optionen lassen sich grob in die folgenden Kategorien einteilen.

- Grundlegende Einrichtungsoptionen, die du in alle Konfigurationen aufnehmen musst: [`package-ecosystem`](#package-ecosystem), [`directory`](#directory), [`schedule.interval`](#scheduleinterval).
- Optionen zum Anpassen des Updatezeitplans: [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone), [`schedule.day`](#scheduleday).
- Optionen, mit denen gesteuert wird, welche Abhängigkeiten aktualisiert werden: [`allow`](#allow), [`ignore`](#ignore), [`vendor`](#vendor).
- Optionen, mit denen Metadaten zu Pull Requests hinzugefügt werden: [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels), [`milestone`](#milestone).
- Optionen zum Ändern des Verhaltens von Pull Requests: [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy), [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator).

Darüber hinaus wird mit der Option [`open-pull-requests-limit`](#open-pull-requests-limit) die maximale Anzahl von Pull Requests für Versionsupdates geändert, die von {% data variables.product.prodname_dependabot %} geöffnet werden können.

{% note %}

**Hinweis:** Einige dieser Konfigurationsoptionen wirken sich möglicherweise auch auf Pull Requests aus, die für Sicherheitsupdates angreifbarer Paketmanifeste ausgelöst werden.

Sicherheitsupdates werden nur für angreifbare Paketmanifeste im Standardbranch ausgelöst. Wenn Konfigurationsoptionen für denselben Branch festgelegt werden („true“, es sei denn, du verwendest `target-branch`) und `package-ecosystem` sowie `directory` für das angreifbare Manifest angegeben wird, dann werden von Pull Requests für Sicherheitsupdates relevante Optionen verwendet.

Im Allgemeinen werden von Sicherheitsupdates alle Konfigurationsoptionen verwendet, die sich auf Pull Requests auswirken, z. B. das Hinzufügen von Metadaten oder das Ändern des Verhaltens. Weitere Informationen zu Sicherheitsupdates findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates).

{% endnote %}

### `package-ecosystem`

**Erforderlich**. Du fügst ein `package-ecosystem`-Element für jeden Paket-Manager hinzu, der von {% data variables.product.prodname_dependabot %} auf neue Versionen hin überwacht werden soll. Das Repository muss auch ein Abhängigkeitsmanifest oder eine Sperrdatei für jeden dieser Paket-Manager enthalten. Wenn du Vendoring für einen Paket-Manager aktivieren möchtest, der dies unterstützt, müssen sich die anbieterbezogenen Abhängigkeiten im erforderlichen Verzeichnis befinden. Weitere Informationen findest du nachstehend unter [`vendor`](#vendor).

{% data reusables.dependabot.supported-package-managers %}

```yaml
# Basic set up for three package managers

version: 2
updates:

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

### `directory`

**Erforderlich**. Du musst den Speicherort der Paketmanifeste für jeden Paket-Manager definieren (z. B. *package.json* oder *Gemfile*). Du definierst das Verzeichnis relativ zum Stamm des Repositorys für alle Ökosysteme mit Ausnahme von GitHub Actions. Lege für GitHub Actions das Verzeichnis auf `/` fest, um in `.github/workflows` nach Workflowdateien zu suchen.

```yaml
# Specify location of manifest files for each package manager

version: 2
updates:
  - package-ecosystem: "composer"
    # Files stored in repository root
    directory: "/"
    schedule:
      interval: "daily"

  - package-ecosystem: "npm"
    # Files stored in `app` directory
    directory: "/app"
    schedule:
      interval: "daily"

  - package-ecosystem: "github-actions"
    # Workflow files stored in the
    # default location of `.github/workflows`
    directory: "/"
    schedule:
      interval: "daily"
```

### `schedule.interval`

**Erforderlich**. Du musst definieren, wie oft nach neuen Versionen für jeden Paket-Manager gesucht werden soll. Standardmäßig wird von {% data variables.product.prodname_dependabot %} ein zufälliger Zeitpunkt zugewiesen, zu dem alle Updates in der Konfigurationsdatei angewendet werden. Zum Festlegen einer bestimmten Zeit kannst du [`schedule.time`](#scheduletime) und [`schedule.timezone`](#scheduletimezone) verwenden.

- `daily` – wird an jedem Wochentag von Montag bis Freitag ausgeführt.
- `weekly` – wird einmal jede Woche ausgeführt. Standardmäßig erfolgt die Ausführung am Montag. Verwende [`schedule.day`](#scheduleday), um die Standardeinstellung zu ändern.
- `monthly` – wird einmal jeden Monat ausgeführt. Die Ausführung erfolgt am ersten Tag des Monats.

```yaml
# Set update schedule for each package manager

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # Check for updates managed by Composer once a week
      interval: "weekly"
```

{% note %}

**Hinweis**: Durch `schedule` wird definiert, wann von {% data variables.product.prodname_dependabot %} ein neues Update versucht wird. Dies ist jedoch nicht der einzige Zeitpunkt, zu dem du Pull Requests erhalten kannst. Updates können basierend auf Änderungen an der `dependabot.yml`-Datei, Änderungen an den Manifestdateien nach einem fehlgeschlagenen Update oder basierend auf {% data variables.product.prodname_dependabot_security_updates %} ausgelöst werden. Weitere Informationen findest du unter [Häufigkeit von {% data variables.product.prodname_dependabot %}-Pull Requests](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests) und [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates).

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Verwende die Option `allow`, um anzupassen, welche Abhängigkeiten aktualisiert werden. Dies gilt sowohl für Versions- als auch für Sicherheitsupdates. Du kannst die folgenden Optionen verwenden:

- `dependency-name`: Verwende diese Option, um Updates für Abhängigkeiten mit übereinstimmenden Namen zuzulassen. Verwende optional `*` für die Übereinstimmung mit null oder mehr Zeichen. Für Java-Abhängigkeiten lautet das Format des `dependency-name`-Attributs: `groupId:artifactId`, zum Beispiel: `org.kohsuke:github-api`.
- `dependency-type`: Verwende diese Option, um Updates für Abhängigkeiten bestimmter Typen zuzulassen.

  | Abhängigkeitstypen | Unterstützt von Paket-Managern | Zulassen von Updates |
  |------------------|-------------------------------|--------|
  | `direct` | All | Alle explizit definierten Abhängigkeiten. |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | Abhängigkeiten von direkten Abhängigkeiten (auch als Unterabhängigkeiten oder vorübergehende Abhängigkeiten bezeichnet).|
  | `all` | All | Alle explizit definierten Abhängigkeiten. Für `bundler`, `pip`, `composer` und `cargo` auch die Abhängigkeiten von direkten Abhängigkeiten.|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Nur Abhängigkeiten in der „Produktionsabhängigkeitsgruppe“. |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Nur Abhängigkeiten in der „Entwicklungsabhängigkeitsgruppe“. |

```yaml
# Use `allow` to specify which dependencies to maintain

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow updates for Lodash
      - dependency-name: "lodash"
      # Allow updates for React and any packages starting "react"
      - dependency-name: "react*"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow both direct and indirect updates for all packages
      - dependency-type: "all"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow only direct updates for
      # Django and any packages starting "django"
      - dependency-name: "django*"
        dependency-type: "direct"
      # Allow only production updates for Sphinx
      - dependency-name: "sphinx"
        dependency-type: "production"
```

### `assignees`

Verwende `assignees` zum Angeben einzelner zugewiesener Personen für alle Pull Requests, die für einen Paket-Manager ausgelöst wurden.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify assignees for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Add assignees
    assignees:
      - "octocat"
```

### `commit-message`

Standardmäßig wird von {% data variables.product.prodname_dependabot %} versucht, deine Commitnachrichteneinstellungen zu erkennen und ähnliche Muster zu verwenden. Verwende die Option `commit-message`, um deine Einstellungen explizit anzugeben.

Unterstützte Optionen

{% note %}

**Hinweis:** Die Optionen `prefix` und `prefix-development` verfügen über eine Begrenzung von 15 Zeichen.

{% endnote %}

- `prefix` gibt ein Präfix für alle Commitnachrichten an.
- `prefix-development` gibt ein separates Präfix für alle Commitnachrichten an, durch die Abhängigkeiten in der Entwicklungsabhängigkeitsgruppe aktualisiert werden. Wenn du einen Wert für diese Option angibst, wird `prefix` nur für Updates von Abhängigkeiten in der Produktionsabhängigkeitsgruppe verwendet. Dies wird unterstützt von: `bundler`, `composer`, `mix`, `maven`, `npm` und `pip`.
- `include: "scope"` gibt an, dass jedem Präfix eine Liste der Abhängigkeiten folgt, die im Commit aktualisiert wurden.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customize commit messages

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    commit-message:
      # Prefix all commit messages with "npm"
      prefix: "npm"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Prefix all commit messages with "Composer"
    # include a list of updated dependencies
    commit-message:
      prefix: "Composer"
      include: "scope"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Include a list of updated dependencies
    # with a prefix determined by the dependency group
    commit-message:
      prefix: "pip prod"
      prefix-development: "pip dev"
      include: "scope"
```
Wenn du die gleiche Konfiguration wie im obigen Beispiel verwendest, generiert ein bump-Vorgang der `requests`-Bibliothek in der `pip`-Entwicklungsabhängigkeitsgruppe die folgende Commitnachricht:

   `pip dev: bump requests from 1.0.0 to 1.0.1`
   
### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Abhängigkeiten können entweder ignoriert werden, indem sie zu `ignore` hinzugefügt werden oder indem der Befehl `@dependabot ignore` für einen Pull Request verwendet wird, der von {% data variables.product.prodname_dependabot %} geöffnet wurde.

#### Erstellen von `ignore`-Bedingungen aus `@dependabot ignore`

Abhängigkeiten, die mithilfe des Befehls `@dependabot ignore` ignoriert werden, werden für jeden Paket-Manager zentral gespeichert. Wenn du mit dem Ignorieren von Abhängigkeiten in der Datei `dependabot.yml` beginnst, werden diese vorhandenen Einstellungen neben den `ignore`-Abhängigkeiten in der Konfiguration berücksichtigt.

Du kannst überprüfen, ob `ignore`-Einstellungen von einem Repository gespeichert wurden, indem du das Repository nach `"@dependabot ignore" in:comments` durchsuchst. Wenn du eine auf diese Weise ignorierte Abhängigkeit nicht mehr ignorieren möchtest, öffne den Pull Request erneut.

Weitere Informationen zu den `@dependabot ignore`-Befehlen findest du unter [Verwalten von Pull Requests für Abhängigkeitsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands).

#### Angeben von zu ignorierenden Abhängigkeiten und Versionen

Du kannst die Option `ignore` verwenden, um anzupassen, welche Abhängigkeiten aktualisiert werden. Die Aktion `ignore` unterstützt die folgenden Optionen:

- `dependency-name`: Verwende diese Option, um Updates für Abhängigkeiten mit übereinstimmenden Namen zu ignorieren. Verwende optional `*` für die Übereinstimmung mit null oder mehr Zeichen. Für Java-Abhängigkeiten lautet das Format des `dependency-name`-Attributs: `groupId:artifactId` (zum Beispiel: `org.kohsuke:github-api`). {% ifversion dependabot-grouped-dependencies %} Um zu verhindern, dass {% data variables.product.prodname_dependabot %} die TypeScript-Typdefinitionen von DefinitelyTyped automatisch aktualisiert, verwende `@types/*`.{% endif %}
- `versions`: Verwende diese Option, um bestimmte Versionen oder Bereiche von Versionen zu ignorieren. Wenn du einen Bereich definieren möchtest, verwende das Standardmuster für den Paket-Manager (z. B. `^1.0.0` für npm oder `~> 2.0` für Bundler).
- `update-types`: Verwende diese Option zum Ignorieren von Arten von Updates, z. B. bei semantischer Versionierung (SemVer) `major`-, `minor`- oder `patch`-Updates für Versionsupdates (Beispiel: Mit `version-update:semver-patch` werden Patchupdates ignoriert). Du kannst diese Option mit `dependency-name: "*"` kombinieren, um bestimmte `update-types` für alle Abhängigkeiten zu ignorieren. Derzeit sind `version-update:semver-major`, `version-update:semver-minor` und `version-update:semver-patch` die einzigen unterstützten Optionen. Sicherheitsupdates sind von dieser Einstellung nicht betroffen.

Wenn `versions` und `update-types` zusammen verwendet werden, werden von {% data variables.product.prodname_dependabot %} Updates in jedem der Sätze ignoriert.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Use `ignore` to specify dependencies that should not be updated

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "express"
        # For Express, ignore all updates for version 4 and 5
        versions: ["4.x", "5.x"]
        # For Lodash, ignore all updates
      - dependency-name: "lodash"
        # For AWS SDK, ignore all patch updates
      - dependency-name: "aws-sdk"
        update-types: ["version-update:semver-patch"]
```

{% note %}

**Hinweis**: Von {% data variables.product.prodname_dependabot %} können nur Versionsupdates für Manifest- oder Sperrdateien ausgeführt werden, wenn Dependabot auf alle Abhängigkeiten in der Datei zugreifen kann. Dies gilt auch dann, wenn du der `ignore`-Option deiner Konfigurationsdatei nicht zugängliche Abhängigkeiten hinzufügst. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies) und [Problembehandlung bei {% data variables.product.prodname_dependabot %}-Fehlern](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files).


{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% note %}

**Hinweis**: Für das `pub`-Ökosystem wird von {% data variables.product.prodname_dependabot %} kein Update ausgeführt, wenn die Version, für die Dependabot ein Update durchzuführen versucht, ignoriert wird. Dies gilt auch dann, wenn eine frühere Version verfügbar ist.

{% endnote %}

{% endif %}

### `insecure-external-code-execution`

Paket-Manager mit den `package-ecosystem`-Werten `bundler`, `mix` und `pip` können externen Code im Manifest als Teil des Versionsupdateprozesses ausführen. Dadurch kann ein kompromittiertes Paket möglicherweise Anmeldeinformationen stehlen oder Zugriff auf konfigurierte Registrierungen erhalten. Wenn du eine [`registries`](#registries)-Einstellung in einer `updates`-Konfiguration hinzufügst, wird von {% data variables.product.prodname_dependabot %} die Ausführung von externem Code automatisch verhindert. In diesem Fall kann das Versionsupdate fehlschlagen. Du kannst dieses Verhalten außer Kraft setzen und die Ausführung von externem Code für `bundler`-, `mix`- und `pip`-Paket-Manager zulassen, indem du `insecure-external-code-execution` auf `allow` festlegst.

Du kannst die Ausführung von externem Code explizit ablehnen, unabhängig davon, ob es eine `registries`-Einstellung für diese Updatekonfiguration gibt, indem du `insecure-external-code-execution` auf `deny` festlegst.

{% raw %}
```yaml
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
```
{% endraw %}

### `labels`

{% data reusables.dependabot.default-labels %}

Verwende `labels` zum Außerkraftsetzen der Standardbezeichnungen, und gib alternative Bezeichnungen für alle Pull Requests an, die für einen Paket-Manager ausgelöst wurden. Wenn eine dieser Bezeichnungen im Repository nicht definiert ist, wird sie ignoriert.
Verwende `labels: [ ]` zum Deaktivieren aller Bezeichnungen, einschließlich der Standardbezeichnungen.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify labels for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Specify labels for npm pull requests
    labels:
      - "npm"
      - "dependencies"
```

### `milestone`

Verwende `milestone` zum Zuordnen aller Pull Requests, die für einen Paket-Manager mit einem Meilenstein ausgelöst wurden. Du musst den numerischen Bezeichner des Meilensteins und nicht seine Bezeichnung angeben. Wenn du einen Meilenstein anzeigst, ist der letzte Teil der Seiten-URL nach `milestone` der Bezeichner. Beispiel: `https://github.com/<org>/<repo>/milestone/3`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a milestone for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Associate pull requests with milestone "4"
    milestone: 4
```

### `open-pull-requests-limit`

Standardmäßig werden von {% data variables.product.prodname_dependabot %} maximal fünf Pull Requests für Versionsupdates geöffnet. Sobald fünf offene Pull Requests von {% data variables.product.prodname_dependabot %} vorliegen, werden neue Anforderungen erst dann von {% data variables.product.prodname_dependabot %} geöffnet, wenn einige dieser geöffneten Anforderungen gemergt oder geschlossen werden. Verwende `open-pull-requests-limit`, um diesen Grenzwert zu ändern. Dies bietet auch eine einfache Möglichkeit, Versionsupdates für einen Paket-Manager vorübergehend zu deaktivieren.

Diese Option hat keine Auswirkungen auf Sicherheitsupdates, die einen separaten, internen Grenzwert von zehn offenen Pull Requests aufweisen.

```yaml
# Specify the number of open pull requests allowed

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Allow up to 10 open pull requests for pip dependencies
    open-pull-requests-limit: 10
```

### `pull-request-branch-name.separator`

Von {% data variables.product.prodname_dependabot %} wird ein Branch für jeden Pull Request generiert. Jeder Branchname enthält `dependabot` und den Paket-Manager und die Abhängigkeit, der/die aktualisiert wird. Standardmäßig werden diese Teile jeweils durch das Symbol `/` getrennt, z. B.: `dependabot/npm_and_yarn/next_js/acorn-6.4.1`.

Verwende `pull-request-branch-name.separator` zum Angeben eines anderen Trennzeichens. Möglich sind hier die Zeichen `"-"`, `_` oder `/`. Das Bindestrichsymbol muss zwischen Anführungszeichen gesetzt werden, da es andernfalls als Start einer leeren YAML-Liste interpretiert wird.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a different separator for branch names

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      # for example, `dependabot-npm_and_yarn-next_js-acorn-6.4.1`
      separator: "-"
```

### `rebase-strategy`

Standardmäßig wird von {% data variables.product.prodname_dependabot %} automatisch ein Rebase von offenen Pull Requests ausgeführt, wenn Änderungen an dem jeweiligen Pull Request erkannt werden. Verwende `rebase-strategy`, um dieses Verhalten zu deaktivieren.

Verfügbare Rebase-Strategien

- `disabled` zum Deaktivieren von automatischem Rebasing.
- `auto` zum Verwenden des Standardverhaltens und zur Rebase-Ausführung, wenn Änderungen erkannt werden.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disable automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

### `registries`

Damit {% data variables.product.prodname_dependabot %} beim Ausführen eines Versionsupdates auf eine private Paketregistrierung zugreifen darf, musst du eine `registries`-Einstellung in die relevante `updates`-Konfiguration aufnehmen. Du kannst die Verwendung aller definierten Registrierungen zulassen, indem du `registries` auf `"*"` festlegst. Alternativ dazu kannst du die Registrierungen auflisten, die vom Update verwendet werden können. Verwende dazu den Namen der Registrierung, wie im `registries`-Abschnitt der obersten Ebene der Datei _dependabot.yml_ definiert. Weitere Informationen findest du nachstehend unter [Konfigurationsoptionen für private Registrierungen](#configuration-options-for-private-registries).

Wenn du zulassen möchtest, dass von {% data variables.product.prodname_dependabot %} `bundler`-, `mix`- und `pip`-Paket-Manager zum Aktualisieren von Abhängigkeiten in privaten Registrierungen verwendet werden können, hast du die Möglichkeit, die Ausführung von externem Code zuzulassen. Weitere Informationen findest du im obigen Abschnitt [`insecure-external-code-execution`](#insecure-external-code-execution).

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries
# when updating dependency versions for this ecosystem

{% raw %}
version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
updates:
  - package-ecosystem: "gitsubmodule"
    directory: "/"
    registries:
      - maven-github
    schedule:
      interval: "monthly"
{% endraw %}
```

### `reviewers`

Verwende `reviewers` zum Angeben von einzelnen Reviewern oder Teams von Reviewern für alle Pull Requests, die für einen Paket-Manager ausgelöst wurden. Du musst den vollständigen Teamnamen verwenden, einschließlich der Organisation, wie bei der Aktion „@mentioning“.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify reviewers for pull requests

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Add reviewers
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

### `schedule.day`

Wenn du einen Updatezeitplan vom Typ `weekly` festlegst, wird von {% data variables.product.prodname_dependabot %} standardmäßig am Montag zu einem zufälligen Zeitpunkt eine Prüfung auf neue Versionen für das Repository durchgeführt. Verwende `schedule.day`, um einen alternativen Tag für die Prüfung auf Updates anzugeben.

Unterstützte Werte

- `monday`
- `tuesday`
- `wednesday`
- `thursday`
- `friday`
- `saturday`
- `sunday`

```yaml
# Specify the day for weekly checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
```

### `schedule.time`

Standardmäßig wird von {% data variables.product.prodname_dependabot %} zu einem zufälligen Zeitpunkt eine Prüfung auf neue Versionen für das Repository durchgeführt. Verwende `schedule.time`, um eine alternative Tageszeit für die Prüfung auf Updates (Format: `hh:mm`) anzugeben.

```yaml
# Set a time for checks
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # Check for npm updates at 9am UTC
      time: "09:00"
```

### `schedule.timezone`

Standardmäßig wird von {% data variables.product.prodname_dependabot %} zu einem zufälligen Zeitpunkt eine Prüfung auf neue Versionen für das Repository durchgeführt. Verwende `schedule.timezone`, um eine alternative Zeitzone anzugeben. Der Bezeichner der Zeitzone muss aus der von [iana](https://www.iana.org/time-zones) verwalteten Zeitzonendatenbank stammen. Weitere Informationen findest du in der [Liste der Zeitzonen aus der Zeitzonen-Datenbank (tz database)](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```yaml
# Specify the timezone for checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # Use Japan Standard Time (UTC +09:00)
      timezone: "Asia/Tokyo"
```

### `target-branch`

Standardmäßig wird von {% data variables.product.prodname_dependabot %} eine Prüfung auf Manifestdateien im Standardbranch durchgeführt. Zudem werden Pull Requests für Versionsupdates für diesen Branch ausgelöst. Verwende `target-branch`, um einen anderen Branch für Manifestdateien und für Pull Requests anzugeben. Wenn du diese Option verwendest, wirken sich die Einstellungen für diesen Paket-Manager nicht mehr auf Pull Requests aus, die für Sicherheitsupdates ausgelöst werden.

```yaml
# Specify a non-default branch for pull requests for pip

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for version updates
    # to pip against the `develop` branch
    target-branch: "develop"
    # Labels on pull requests for version updates only
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
    # Labels on pull requests for security and version updates
    labels:
      - "npm dependencies"
```

### `vendor`

Verwende die Option `vendor`, um {% data variables.product.prodname_dependabot %} anzuweisen, ein Vendoring der Abhängigkeiten durchzuführen, wenn die Abhängigkeiten aktualisiert werden. Verwende diese Option nicht, wenn du `gomod` verwendest, da {% data variables.product.prodname_dependabot %} Vendoring für dieses Tool automatisch erkennt.

```yaml
# Configure version updates for both dependencies defined in manifests and vendored dependencies

version: 2
updates:
  - package-ecosystem: "bundler"
    # Raise pull requests to update vendored dependencies that are checked in to the repository
    vendor: true
    directory: "/"
    schedule:
      interval: "weekly"
```

Von {% data variables.product.prodname_dependabot %} werden nur die anbieterbezogenen Abhängigkeiten aktualisiert, die sich in bestimmten Verzeichnissen in einem Repository befinden.

| Paket-Manager | Erforderlicher Dateipfad für anbieterbezogene Abhängigkeiten | Weitere Informationen |
  |------------------|-------------------------------|--------|
  | `bundler` | Die Abhängigkeiten müssen sich im _vendor/cache_-Verzeichnis befinden.</br>Andere Dateipfade werden nicht unterstützt. | [Dokumentation zu `bundle cache`](https://bundler.io/man/bundle-cache.1.html) |
  | `gomod` | Keine Pfadanforderung (Abhängigkeiten befinden sich in der Regel im _vendor_-Verzeichnis) | [Dokumentation zu `go mod vendor`](https://golang.org/ref/mod#go-mod-vendor) |


### `versioning-strategy`

Wenn von {% data variables.product.prodname_dependabot %} für ein Versionsupdate eine Manifestdatei bearbeitet wird, werden die folgenden allgemeinen Strategien eingesetzt:

- Für Apps werden die Versionsanforderungen erhöht, z. B. npm, pip und Composer.
- Für Bibliotheken wird der Bereich der Versionen erweitert, z. B. Bundler und Cargo.

Verwende die Option `versioning-strategy`, um dieses Verhalten für unterstützte Paket-Manager zu ändern.

{% data reusables.dependabot.option-affects-security-updates %}

Verfügbare Updatestrategien

| Option | Unterstützt von | Aktion |
|--------|--------------|--------|
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Erstelle nur Pull Requests zum Aktualisieren von Sperrdateien. Ignoriere alle neuen Versionen, die Paketmanifeständerungen erfordern würden. |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Folge der oben beschriebenen Standardstrategie.|
| `widen`| `composer`, `npm` | Lockere, wenn möglich, die Versionsanforderungen so, dass sowohl die neue als auch die alte Version einbezogen wird. |
| `increase`| `bundler`, `composer`, `npm` | Erhöhe die Versionsanforderung immer so, dass sie der neuen Version entspricht. |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | Erhöhe die Versionsanforderung nur, wenn dies für die neue Version erforderlich ist. |

```yaml
# Customize the manifest version strategy

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Update the npm manifest file to relax
    # the version requirements
    versioning-strategy: widen

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Increase the version requirements for Composer
    # only when required
    versioning-strategy: increase-if-necessary

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Only allow updates to the lockfile for pip and
    # ignore any version updates that affect the manifest
    versioning-strategy: lockfile-only
```

## Konfigurationsoptionen für private Registrierungen

Der `registries`-Schlüssel der obersten Ebene ist optional. Damit kannst du Authentifizierungsdetails angeben, die von {% data variables.product.prodname_dependabot %} dazu verwendet werden können, auf private Paketregistrierungen zuzugreifen.

{% note %}

**Hinweis:** Private Registrierungen hinter Firewalls in privaten Netzwerken werden nicht unterstützt.

{% endnote %}

Der Wert des `registries`-Schlüssels ist ein assoziatives Array. Jedes Element dieses Arrays besteht aus einem Schlüssel, der eine bestimmte Registrierung und einen Wert identifiziert, der ein assoziatives Array darstellt, das die Einstellungen angibt, die für den Zugriff auf diese Registrierung erforderlich sind. Durch die folgende *dependabot.yml*-Datei wird eine Registrierung konfiguriert, die im Abschnitt `registries` der Datei als `dockerhub` identifiziert wird. Anschließend wird im Abschnitt `updates` der Datei darauf verwiesen.

{% raw %}
```yaml
# Minimal settings to update dependencies in one private registry

version: 2
registries:
  dockerhub: # Define access for a private registry
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "docker"
    directory: "/docker-registry/dockerhub"
    registries:
      - dockerhub # Allow version updates for dependencies in this registry
    schedule:
      interval: "monthly"
```
{% endraw %}

Du verwendest die folgenden Optionen, um Zugriffseinstellungen anzugeben. Registrierungseinstellungen müssen einen `type` und eine `url` enthalten, sowie in der Regel eine Kombination aus `username` und `password` oder ein `token`.

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | BESCHREIBUNG |
|:---|:---|
| `type`                     | Identifiziert den Typ der Registrierung. Nachstehend findest du die vollständige Liste der Typen. |
| `url`                      | Die URL, die für den Zugriff auf die Abhängigkeiten in dieser Registrierung verwendet werden soll. Das Protokoll ist optional. Falls nicht angegeben, `https://` wird angenommen. Nachstehende Schrägstriche werden von {% data variables.product.prodname_dependabot %} nach Bedarf hinzugefügt oder ignoriert. |
| `username`                 | Der Benutzername, der von {% data variables.product.prodname_dependabot %} für den Zugriff auf die Registrierung verwendet wird. |
| `password`                 | Ein Verweis auf einen geheimen {% data variables.product.prodname_dependabot %}-Schlüssel, der das Kennwort für den angegebenen Benutzer enthält. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot). |
| `key`                    | Ein Verweis auf einen geheimen {% data variables.product.prodname_dependabot %}-Schlüssel, der einen Zugriffsschlüssel für diese Registrierung enthält. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot). |
| `token`                    | Ein Verweis auf einen geheimen {% data variables.product.prodname_dependabot %}-Schlüssel, der ein Zugriffstoken für diese Registrierung enthält. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot). |
| `replaces-base`            | Bei Registrierungen mit der Festlegung `type: python-index` werden Abhängigkeiten in Fällen, in denen der boolesche Wert `true` lautet, von pip mithilfe der angegebenen URL anstelle der Basis-URL des Python-Paketindex aufgelöst (Standardwert: `https://pypi.org/simple`). |


Jeder Konfigurations-`type` erfordert, dass du bestimmte Einstellungen bereitstellst. Einige Typen lassen mehr als eine Möglichkeit zum Herstellen einer Verbindung zu. Die folgenden Abschnitte enthalten Details zu den Einstellungen, die für den jeweiligen `type` zu verwenden sind.

### `composer-repository`

Vom Typ `composer-repository` werden Benutzername und Kennwort unterstützt.

{% raw %}
```yaml
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
```
{% endraw %}

### `docker-registry`

{% note %}

**Hinweis:** Azure Container Registry (ACR) wird von uns nicht unterstützt.

{% endnote %}

Vom Typ `docker-registry` werden Benutzername und Kennwort unterstützt.

{% raw %}
```yaml
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
```
{% endraw %}

Der Typ `docker-registry` kann auch zur Pullausführung von Amazon ECR mithilfe statischer AWS-Anmeldeinformationen verwendet werden.

{% raw %}
```yaml
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
```
{% endraw %}

### `git`

Vom Typ `git` werden Benutzername und Kennwort unterstützt.

{% raw %}
```yaml
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `hex-organization`

Vom Typ `hex-organization` werden Organisation und Schlüssel unterstützt.

{% raw %}
```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```
{% endraw %}

### `maven-repository`

Vom Typ `maven-repository` werden Benutzername und Kennwort unterstützt.

{% raw %}
```yaml
registries:
  maven-artifactory:
    type: maven-repository
    url: https://artifactory.example.com
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

### `npm-registry`

Vom Typ `npm-registry` werden Benutzername und Kennwort oder Token unterstützt.

Wenn du Benutzername und Kennwort verwendest, kann das Authentifizierungstoken von `.npmrc` ein `base64`-codiertes `_password` enthalten. Das Kennwort, auf das in der {% data variables.product.prodname_dependabot %}-Konfigurationsdatei verwiesen wird, muss jedoch das ursprüngliche (nicht codierte) Kennwort sein.

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
```
{% endraw %}

{% raw %}
```yaml
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `nuget-feed`

Vom Typ `nuget-feed` werden Benutzername und Kennwort oder Token unterstützt.

{% raw %}
```yaml
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_NUGET_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  nuget-azure-devops:
    type: nuget-feed
    url: https://pkgs.dev.azure.com/.../_packaging/My_Feed/nuget/v3/index.json
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
```
{% endraw %}

### `python-index`

Vom Typ `python-index` werden Benutzername und Kennwort oder Token unterstützt.

{% raw %}
```yaml
registries:
  python-example:
    type: python-index
    url: https://example.com/_packaging/my-feed/pypi/example
    username: octocat
    password: ${{secrets.MY_BASIC_AUTH_PASSWORD}}
    replaces-base: true
```
{% endraw %}

{% raw %}
```yaml
registries:
  python-azure:
    type: python-index
    url: https://pkgs.dev.azure.com/octocat/_packaging/my-feed/pypi/example
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
    replaces-base: true
```
{% endraw %}

### `rubygems-server`

Vom Typ `rubygems-server` werden Benutzername und Kennwort oder Token unterstützt.

{% raw %}
```yaml
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `terraform-registry`

Vom Typ `terraform-registry` wird ein Token unterstützt.

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}

{% ifversion fpt or ghec or ghes > 3.4 %} 
## Aktivieren der Unterstützung für Ökosysteme auf Betaebene

### `enable-beta-ecosystems`

Standardmäßig werden von {% data variables.product.prodname_dependabot %} die Abhängigkeitsmanifeste und Sperrdateien nur für vollständig unterstützte Ökosysteme aktualisiert. Verwende das Flag `enable-beta-ecosystems`, um Updates für Ökosysteme zu abonnieren, die noch nicht allgemein verfügbar sind.

```yaml
# Configure beta ecosystem

version: 2
enable-beta-ecosystems: true
updates:{% ifversion fpt or ghec or ghes > 3.5 %}
  - package-ecosystem: "beta-ecosystem"{% else %}
  - package-ecosystem: "pub"{% endif %}
    directory: "/"
    schedule:
      interval: "daily"
```
{% endif %}
