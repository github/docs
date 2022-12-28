---
title: Erstellen und Testen eines Python-Projekts
intro: 'Du kannst einen Continuous Integration-Workflow (CI) erstellen, um dein Python-Projekt zu erstellen und zu testen.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-python-with-github-actions
  - /actions/language-and-framework-guides/using-python-with-github-actions
  - /actions/guides/building-and-testing-python
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Python
shortTitle: Build & test Python
ms.openlocfilehash: a55aa73ce26f4482411366b0edb66d9b1a305966
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409467'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Diese Anleitung zeigt Dir, wie du ein Python-Paket baust, testest und veröffentlichst.

Von {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} gehostete Runner verfügen über einen Toolcache mit vorinstallierter Software, in dem Python und PyPy enthalten sind. Du brauchst nichts zu installieren! Eine umfassende Liste mit aktueller Software und den vorinstallierten Versionen von Python und PyPy findest du unter [Spezifikationen für von {% data variables.product.prodname_dotcom %} gehostete Runner](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Voraussetzungen

Du solltest mit YAML und der Syntax für {% data variables.product.prodname_actions %} vertraut sein. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Du solltest ein grundlegendes Verständnis von Python, PyPy und pip haben. Weitere Informationen finden Sie unter
- [Erste Schritte mit Python](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [Pip-Paket-Manager](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

## Verwenden des Python-Starterworkflows

{% data variables.product.prodname_dotcom %} enthält einen Python-Starterworkflow, der die für die meisten Python-Projekte funktionieren sollte. Dieser Leitfaden enthält Beispiele, die du zum Anpassen des Starterworkflows verwenden kannst. Weitere Informationen findest du unter [Python-Starterworkflow](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

Für einen schnellen Einstieg fügst du den Starterworkflow zum Verzeichnis `.github/workflows` deines Repositorys hinzu.

```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ["3.7", "3.8", "3.9", "3.10"]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python {% raw %}${{ matrix.python-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: {% raw %}${{ matrix.python-version }}{% endraw %}
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install flake8 pytest
          if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
      - name: Lint with flake8
        run: |
          # stop the build if there are Python syntax errors or undefined names
          flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
          # exit-zero treats all errors as warnings. The GitHub editor is 127 chars wide
          flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
      - name: Test with pytest
        run: |
          pytest
```

## Eine Python-Version angeben

Verwende die Aktion `setup-python`, um eine vorinstallierte Version von Python oder PyPy für einen von {% data variables.product.prodname_dotcom %} gehosteten Runner zu verwenden. Mit dieser Aktion wird im Toolcache der jeweiligen Runner nach einer bestimmten Version von Python oder PyPy gesucht, und die erforderlichen Binärdateien werden zu `PATH` hinzugefügt, das für den Rest des Auftrags bestehen bleibt. Wenn eine bestimmte Version von Python im Toolcache nicht vorinstalliert ist, wird die entsprechende Version mit der Aktion `setup-python` aus dem Repository [`python-versions`](https://github.com/actions/python-versions) heruntergeladen und eingerichtet.

Die Aktion `setup-python` wird als Methode zur Verwendung von Python mit {% data variables.product.prodname_actions %} empfohlen, da damit ein konsistentes Verhalten bei verschiedenen Runnern und verschiedenen Version von Python gewährleistet wird. Wenn du einen selbst gehosteten Runner verwendest, musst du Python installieren und zu `PATH` hinzufügen. Weitere Informationen findest du im Artikel über die [Aktion `setup-python`](https://github.com/marketplace/actions/setup-python).

Die folgende Tabelle zeigt für jeden {% data variables.product.prodname_dotcom %}-gehosteten Runner, wo der Tools-Cache liegt.

|| Ubuntu | Mac | Windows |
|------|-------|------|----------|
|**Tool Cache Directory** |`/opt/hostedtoolcache/*`|`/Users/runner/hostedtoolcache/*`|`C:\hostedtoolcache\windows\*`|
|**Python Tool Cache**|`/opt/hostedtoolcache/Python/*`|`/Users/runner/hostedtoolcache/Python/*`|`C:\hostedtoolcache\windows\Python\*`|
|**PyPy Tool Cache**|`/opt/hostedtoolcache/PyPy/*`|`/Users/runner/hostedtoolcache/PyPy/*`|`C:\hostedtoolcache\windows\PyPy\*`|

Wenn du einen selbst gehosteten Runner verwendest, kannst du ihn so konfigurieren, dass die Aktion `setup-python` zum Verwalten von Abhängigkeiten verwendet wird. Weitere Informationen findest du unter [Verwenden von „setup-python“ mit einem selbst gehosteten Runner](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) in der Infodatei zu `setup-python`.

{% data variables.product.prodname_dotcom %} unterstützt dir Syntax für semantische Versionierung. Weitere Informationen findest du unter [Using semantic versioning (Verwenden der semantischen Versionsverwaltung)](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept) und unter [Semantic versioning specification (Spezifikation zur semantischen Versionsverwaltung)](https://semver.org/).

### Mehrere Python-Versionen verwenden

```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      # You can use PyPy versions in python-version.
      # For example, {% ifversion actions-node16-action %}pypy-2.7 and pypy-3.8{% else %}pypy2 and pypy3{% endif %}
      matrix:
        python-version: ["2.7", "3.7", "3.8", "3.9", "3.10"]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python {% raw %}${{ matrix.python-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: {% raw %}${{ matrix.python-version }}{% endraw %}
      # You can test your matrix by printing the current Python version
      - name: Display Python version
        run: python -c "import sys; print(sys.version)"
```

### Eine bestimmten Python-Version verwenden

Du kannst eine bestimmte Version von Python konfigurieren, Beispiel: 3.9. Alternativ kannst du auch Syntax für semantische Versionierung verwenden, um die neuste Nebenversion abzurufen. Dieses Beispiel verwendet das neueste Minor Release von Python 3.

```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python 3.x
        uses: {% data reusables.actions.action-setup-python %}
        with:
          # Semantic version range syntax or exact version of a Python version
          python-version: '3.x'
          # Optional - x64 or x86 architecture, defaults to x64
          architecture: 'x64'
      # You can test your matrix by printing the current Python version
      - name: Display Python version
        run: python -c "import sys; print(sys.version)"
```

### Eine Version ausschließen

Wenn du eine nicht verfügbare Python-Version angibst, schlägt `setup-python` mit einer Fehlermeldung wie der folgenden fehl: `##[error]Version 3.4 with arch x64 not found`. Die Fehlermeldung enthält die verfügbaren Versionen.

Du kannst im Workflow auch das Schlüsselwort `exclude` verwenden, wenn es eine Konfiguration von Python gibt, die du nicht verwenden möchtest. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).

```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        python-version: ["3.7", "3.8", "3.9", "3.10", {% ifversion actions-node16-action %}pypy-2.7, pypy-3.8{% else %}pypy2, pypy3{% endif %}]
        exclude:
          - os: macos-latest
            python-version: "3.7"
          - os: windows-latest
            python-version: "3.7"
```

### Die Standard-Version von Python verwenden

Es wird empfohlen, `setup-python` zu verwenden, um die in den eigenen Workflows verwendete Version von Python zu konfigurieren, da du so Abhängigkeiten explizit machen kannst. Wenn du `setup-python` nicht verwendest, wird die in `PATH` festgelegte Standardversion von Python in allen Shells beim Aufrufen von `python` verwendet. Die Standardversion von Python variiert zwischen den {% data variables.product.prodname_dotcom %}-gehosteten Runnern. Dies kann zu unerwarteten Abweichungen führen oder es kann unerwartet eine ältere Version verwendet werden.

| {% data variables.product.prodname_dotcom %}-gehostete Runner | BESCHREIBUNG |
|----|----|
| Ubuntu | Auf Ubuntu-Runnern sind unter `/usr/bin/python` und `/usr/bin/python3` mehrere Systemversionen von Python installiert. Die Python-Versionen, die mit Ubuntu mitgeliefert werden, sind zusätzlich zu den Versionen, die {% data variables.product.prodname_dotcom %} im Tools-Cache installiert. |
| Windows | Neben den Python-Versionen, die sich im Tools-Cache befinden, kommt Windows nicht mit einer entsprechenden Version von System-Python. Zur Gewährleistung eines konsistenten Verhaltens bei anderen Runnern und um die Verwendung von Python ohne Änderungen und ohne die Aktion `setup-python` zu ermöglichen, werden mit {% data variables.product.prodname_dotcom %} einige Versionen aus `PATH` zum Toolcache hinzugefügt.|
| macOS | Auf macOS-Runnern sind zusätzlich zu den Versionen im Tool-Cache noch mehrere Versionen von System-Python installiert. Die Systemversionen von Python befinden sich im Verzeichnis `/usr/local/Cellar/python/*`. |

## Installieren von Abhängigkeiten

Auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern ist der Paketmanager pip installiert. Du kannst pip verwenden, um Abhängigkeiten von der PyPI-Paket-Registry zu installieren, bevor du deinen Code baust und testest. Mit dem folgenden YAML-Code werden beispielsweise das `pip`-Paketinstallationsprogramm und die Pakete `setuptools` und `wheel` installiert oder aktualisiert.

{% ifversion actions-caching %}Du kannst Abhängigkeiten auch im Cache zwischenspeichern, um deinen Workflow zu beschleunigen. Weitere Informationen findest du unter [Zwischenspeichern von Abhängigkeiten zum Beschleunigen von Workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).{% endif %}

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Set up Python
  uses: {% data reusables.actions.action-setup-python %}
  with:
    python-version: '3.x'
- name: Install dependencies
  run: python -m pip install --upgrade pip setuptools wheel
```

### Datei für „Requirements“ (Anforderungen)

Nach dem Aktualisieren von `pip` werden in der Regel als Nächstes Abhängigkeiten aus der Datei *requirements.txt* installiert. Weitere Informationen findest du unter [pip](https://pip.pypa.io/en/stable/cli/pip_install/#example-requirements-file).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Set up Python
  uses: {% data reusables.actions.action-setup-python %}
  with:
    python-version: '3.x'
- name: Install dependencies
  run: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
```

{% ifversion actions-caching %}

### Abhängigkeiten im Cache zwischenspeichern

Du kannst die Abhängigkeiten mithilfe der [Aktion `setup-python`](https://github.com/actions/setup-python) zwischenspeichern und wiederherstellen.

Im folgenden Beispiel werden Abhängigkeiten für pip zwischengespeichert.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-python %}
  with:
    python-version: '3.10'
    cache: 'pip'
- run: pip install -r requirements.txt
- run: pip test
```

Standardmäßig sucht die Aktion `setup-python` im gesamten Repository nach der Abhängigkeitsdatei (`requirements.txt` für pip, `Pipfile.lock` für pipenv oder `poetry.lock` für poetry). Weitere Informationen findest du unter [Zwischenspeichern von Paketabhängigkeiten](https://github.com/actions/setup-python#caching-packages-dependencies) in der Infodatei zu `setup-python`.

Wenn du eine benutzerdefinierte Anforderung verwendest oder genauere Steuerungsmöglichkeiten zum Zwischenspeichern benötigst, kannst du die [Aktion `cache`](https://github.com/marketplace/actions/cache) verwendest. Mit pip werden Abhängigkeiten je nach dem Betriebssystem des Runners an anderen Speicherorten zwischengespeichert. Der Pfad, den du zwischenspeichern musst, unterscheidet sich möglicherweise vom obigen Ubuntu-Beispiel, je nachdem, welches Betriebssystem du verwendest. Weitere Informationen findest du unter [Beispiele zum Zwischenspeichern bei Python](https://github.com/actions/cache/blob/main/examples.md#python---pip) im Repository der Aktion `cache`.

{% endif %}

## Testen von Code

Du kannst die gleichen Befehle verwenden, die du auch lokal verwendest, um deinen Code zu bauen und zu testen.

### Mit pytest und pytest-cov testen

In diesem Beispiel werden `pytest` und `pytest-cov` installiert und aktualisiert. Tests werden dann im JUnit-Format ausgeführt und ausgegeben, während die Code Coverage-Ergebnisse in Cobertura ausgegeben werden. Weitere Informationen findest du unter [JUnit](https://junit.org/junit5/) und [Cobertura](https://cobertura.github.io/cobertura/).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Set up Python
  uses: {% data reusables.actions.action-setup-python %}
  with:
    python-version: '3.x'
- name: Install dependencies
  run: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
- name: Test with pytest
  run: |
    pip install pytest
    pip install pytest-cov
    pytest tests.py --doctest-modules --junitxml=junit/test-results.xml --cov=com --cov-report=xml --cov-report=html
```

### Mit Flake8 den Code von „Fusseln“ reinigen

Im folgenden Beispiel wird `flake8` installiert oder aktualisiert und zum Linten aller Dateien verwendet. Weitere Informationen findest du unter [Flake8](http://flake8.pycqa.org/en/latest/).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Set up Python
  uses: {% data reusables.actions.action-setup-python %}
  with:
    python-version: '3.x'
- name: Install dependencies
  run: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
- name: Lint with flake8
  run: |
    pip install flake8
    flake8 .
  continue-on-error: true
```

Beim Lintingschritt wurde `continue-on-error: true` festgelegt. Dadurch wird verhindert, dass der Workflow fehlschlägt, wenn der Lintingschritt nicht erfolgreich ist. Nachdem du alle Lintingfehler behoben hast, kannst du diese Option entfernen, sodass beim Workflow neue Issues erfasst werden können.

### Tests mit Tox ausführen

Mit {% data variables.product.prodname_actions %} kannst du Texts mit tox ausführen und die Arbeit auf mehrere Aufträge verteilen. Du musst tox mit der Option `-e py` aufrufen, um die Version von Python im eigenen `PATH` auszuwählen, statt eine bestimmte Version anzugeben. Weitere Informationen findest du unter [tox](https://tox.readthedocs.io/en/latest/).

```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python: ["3.8", "3.9", "3.10"]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: {% raw %}${{ matrix.python }}{% endraw %}
      - name: Install tox and any other packages
        run: pip install tox
      - name: Run tox
        # Run tox using the version of Python in `PATH`
        run: tox -e py
```

## Workflow-Daten als Artefakte paketieren

Du kannst Artefakte hochladen, um sie nach Abschluss eines Workflows anzuzeigen. Zum Beispiel kann es notwendig sein, Logdateien, Core Dumps, Testergebnisse oder Screenshots zu speichern. Weitere Informationen findest du unter [Speichern von Workflowdaten mithilfe von Artefakten](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

Im folgenden Beispiel wird gezeigt, wie die Aktion `upload-artifact` zum Archivieren von Testergebnissen aus der Ausführung von `pytest` verwendet werden kann. Weitere Informationen findest du im Artikel über die [Aktion `upload-artifact`](https://github.com/actions/upload-artifact).

```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ["3.7", "3.8", "3.9", "3.10"]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Python # Set Python version
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: {% raw %}${{ matrix.python-version }}{% endraw %}
      # Install pip and pytest
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install pytest
      - name: Test with pytest
        run: pytest tests.py --doctest-modules {% raw %}--junitxml=junit/test-results-${{ matrix.python-version }}.xml{% endraw %}
      - name: Upload pytest test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: {% raw %}pytest-results-${{ matrix.python-version }}{% endraw %}
          path: {% raw %}junit/test-results-${{ matrix.python-version }}.xml{% endraw %}
        # Use always() to always run this step to publish test results when there are test failures
        if: {% raw %}${{ always() }}{% endraw %}
```

## In Paket-Registries veröffentlichen

Du kannst deinen Workflow so konfigurieren, dass das Python-Paket in einer Paketregistrierung veröffentlicht wird, wenn deine CI-Tests bestanden werden. In diesem Abschnitt erfährst du, wie du {% data variables.product.prodname_actions %} verwenden kannst, um dein Paket bei einer [Veröffentlichung eines Releases](/github/administering-a-repository/managing-releases-in-a-repository) in PyPI hochzuladen. 

In diesem Beispiel musst du zwei [PyPI-API-Token](https://pypi.org/help/#apitoken) erstellen. Du kannst Geheimnisse verwenden, um die Zugriffstoken oder Anmeldeinformationen zu speichern, die zum Veröffentlichen deines Pakets erforderlich sind. Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Upload Python Package

on:
  release:
    types: [published]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install build
      - name: Build package
        run: python -m build
      - name: Publish package
        uses: pypa/gh-action-pypi-publish@27b31702a0e7fc50959f5ad993c78deac1bdfc29
        with:
          user: __token__
          password: {% raw %}${{ secrets.PYPI_API_TOKEN }}{% endraw %}
```

Weitere Informationen zum Starterworkflow findest du unter [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
