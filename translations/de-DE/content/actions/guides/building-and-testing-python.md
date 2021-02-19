---
title: Building and testing Python
intro: Du kannst einen Workflow für kontinuierliche Integration (CI) erstellen, um Dein Python-Projekt zu bauen und zu testen.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-python-with-github-actions
  - /actions/language-and-framework-guides/using-python-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
topics:
  - 'CI'
  - 'Python'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

Diese Anleitung zeigt Dir, wie Du ein Python-Paket baust, testest und veröffentlichst.

{% data variables.product.prodname_dotcom %}-gehostete Runner haben einen Tools-Cache mit vorinstallierter Software, einschließlich Python und PyPy. Du brauchst nichts zu installieren! For a full list of up-to-date software and the pre-installed versions of Python and PyPy, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Vorrausetzungen

Du solltest mit YAML und der Syntax für {% data variables.product.prodname_actions %} vertraut sein. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Du solltest ein grundlegendes Verständnis von Python, PyPy und pip haben. Weitere Informationen findest Du unter:
- [Erste Schritte mit Python](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [Paketmanager pip](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

### Einstieg mit der Python-Workflow-Vorlage

{% data variables.product.prodname_dotcom %} bietet eine Python-Workflow-Vorlage, die für die meisten Python-Projekte funktionieren sollte. Diese Anleitung enthält Beispiele, mit denen Du die Vorlage anpassen kannst. Weitere Informationen findest Du in der [Python-Workflow-Vorlage](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

Um schnell loszulegen, füge die Vorlage in das Verzeichnis `.github/workflows` Deines Repositorys ein.

{% raw %}
```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [2.7, 3.5, 3.6, 3.7, 3.8]

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v2
      with:
        python-version: ${{ matrix.python-version }}
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install flake8 pytest
        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
    - name: Lint with flake8
      run: |
        # stop the build if there are Python syntax errors or undefined names
        flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
        # exit-zero behandelt alle Fehler als Warnungen. Der GitHub-Editor ist 127 Zeichen breit
        flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
    - name: Test with pytest
      run: |
        pytest
```
{% endraw %}

### Eine Python-Version angeben

Benutze die Aktion `setup-python`, um eine vorinstallierte Version von Python oder PyPy auf einem {% data variables.product.prodname_dotcom %}-gehosteten Runner zu verwenden. Diese Aktion findet aus dem Tool-Cache auf jedem Runner eine bestimmte Version von Python oder PyPy und fügt die benötigten Binärdateien zum `PATH`hinzu, der für den Rest des Jobs bestehen bleibt. Wenn eine bestimmte Version von Python nicht im Tools-Cache vorinstalliert ist, lädt die Aktion `setup-python` die entsprechende Version vom [Repository `python-versions`](https://github.com/actions/python-versions) herunter und richtet sie ein.

Die `setup-action` ist die empfohlene Methode, Python mit {% data variables.product.prodname_actions %} zu verwenden, da dadurch ein einheitliches Verhalten der verschiedenen Runner und verschiedenen Versionen von Python gewährleistet wird. Wenn Du einen selbst gehosteten Runner verwendest, musst Du Python installieren und zum `PATH` hinzufügen. Weitere Informationen findest Du in der [Aktion `setup-python`](https://github.com/marketplace/actions/setup-python).

Die folgende Tabelle zeigt für jeden {% data variables.product.prodname_dotcom %}-gehosteten Runner, wo der Tools-Cache liegt.

|                            | Ubuntu                          | Mac                                      | Windows                                    |
| -------------------------- | ------------------------------- | ---------------------------------------- | ------------------------------------------ |
| **Tool-Cache-Verzeichnis** | `/opt/hostedtoolcache/*`        | `/Users/runner/hostedtoolcache/*`        | `C:\hostedtoolcache\windows\*`         |
| **Tool-Cache für Python**  | `/opt/hostedtoolcache/Python/*` | `/Users/runner/hostedtoolcache/Python/*` | `C:\hostedtoolcache\windows\Python\*` |
| **Tool-Cache für PyPy**    | `/opt/hostedtoolcache/PyPy/*`   | `/Users/runner/hostedtoolcache/PyPy/*`   | `C:\hostedtoolcache\windows\PyPy\*`   |

Wenn Du einen selbst gehosteten Runner verwendest, kannst Du den Runner so konfigurieren, dass er mithilfe der Aktion `setup-python` Deine Abhängigkeiten verwaltet. Weitere Informationen findest Du unter [setup-python mit einem selbst-gehosteten Runner verwenden](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) in der README von `setup-python`.

{% data variables.product.prodname_dotcom %} unterstützt dir Syntax für semantische Versionierung. Weitere Informationen findest Du unter „[Semantische Versionierung verwenden](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)“ und „[Spezifikation für semantische Versionierung](https://semver.org/)“.

#### Mehrere Python-Versionen verwenden

{% raw %}
```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      # Du kannst in python-version die PyPy-Versionen angeben,
      # For example, pypy2 and pypy3
      matrix:
        python-version: [2.7, 3.5, 3.6, 3.7, 3.8]

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v2
      with:
        python-version: ${{ matrix.python-version }}
    # Du kannst Deine Matrix durch Ausgabe der aktuellen Python-Version testen
    - name: Display Python version
      run: python -c "import sys; print(sys.version)"
```
{% endraw %}

#### Eine bestimmten Python-Version verwenden

Du kannst eine bestimmte Version von Python konfigurieren, For example, 3.8. Alternatively, you can use semantic version syntax to get the latest minor release. Dieses Beispiel verwendet das neueste Minor Release von Python 3.

{% raw %}
```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python 3.x
      uses: actions/setup-python@v2
      with:
        # Semantic version range syntax or exact version of a Python version
        python-version: '3.x'
        # Optional - x64 or x86 architecture, defaults to x64
        architecture: 'x64'
    # You can test your matrix by printing the current Python version
    - name: Display Python version
      run: python -c "import sys; print(sys.version)"
```
{% endraw %}

#### Eine Version ausschließen

Wenn du eine Version von Python angibst, die nicht verfügbar ist, schlägt `setup-python` fehl und meldet in etwa: `##[error]Version 3.4 with arch x64 not found`. Die Fehlermeldung enthält die verfügbaren Versionen.

Du kannst in Deinem Workflow auch das Schlüsselwort `exclude` verwenden, wenn Du eine bestimmte Konfiguration von Python nicht laufen lassen möchtest. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)“.

{% raw %}
```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        python-version: [2.7, 3.6, 3.7, 3.8, pypy2, pypy3]
        exclude:
          - os: macos-latest
            python-version: 3.6
          - os: windows-latest
            python-version: 3.6
```
{% endraw %}

#### Die Standard-Version von Python verwenden

Wir empfehlen, `setup-python` zu verwenden, um die Version von Python zu konfigurieren, die in deinen Workflows verwendet wird, da es hilft, deine Abhängigkeiten explizit zu machen. Wenn du `setup-python` nicht verwendest, wird in jeder Shell, wenn Du `python` aufrufst, die Standardversion von Python verwendet, die in `PATH` gesetzt wurde. Die Standardversion von Python variiert zwischen den {% data variables.product.prodname_dotcom %}-gehosteten Runnern. Dies kann zu unerwarteten Abweichungen führen oder es kann unerwartet eine ältere Version verwendet werden.

| {% data variables.product.prodname_dotcom %}-gehostete Runner | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ubuntu                                                        | Auf Ubuntu-Runnern sind mehrere Versionen von System-Python unter `/usr/bin/python` und `/usr/bin/python3` installiert. Die Python-Versionen, die mit Ubuntu mitgeliefert werden, sind zusätzlich zu den Versionen, die {% data variables.product.prodname_dotcom %} im Tools-Cache installiert.                                                                                                 |
| Windows                                                       | Neben den Python-Versionen, die sich im Tools-Cache befinden, kommt Windows nicht mit einer entsprechenden Version von System-Python. Um das mit anderen Runnern konsistente Verhalten sicherzustellen und um Python „out-of-the-box“ ohne die Aktion `setup-python` nutzen zu können fügt {% data variables.product.prodname_dotcom %} ein paar Versionen aus dem Tools-Cache zum `PATH` hinzu. |
| macOS                                                         | Auf macOS-Runnern sind zusätzlich zu den Versionen im Tool-Cache noch mehrere Versionen von System-Python installiert. Die Python-Versionen des Systems befinden sich im Verzeichnis `/usr/local/Cellar/python/*`.                                                                                                                                                                               |

### Abhängigkeiten installieren

Auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern ist der Paketmanager pip installiert. Du kannst pip verwenden, um Abhängigkeiten von der PyPI-Paket-Registry zu installieren, bevor Du Deinen Code baust und testest. Zum Beispiel installiert oder aktualisiert der folgende YAML den Paket-Installierer `pip` sowie die Pakete `setuptools` und `wheel`.

When using {% data variables.product.prodname_dotcom %}-hosted runners, you can also cache dependencies to speed up your workflow. Weitere Informationen findest Du unter „<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Abhängigkeiten zur Beschleunigung von Workflows im Cache zwischenspeichern</a>“.

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Set up Python
  uses: actions/setup-python@v2
  with:
    python-version: '3.x'
- name: Install dependencies
  run: python -m pip install --upgrade pip setuptools wheel
```
{% endraw %}

#### Datei für „Requirements“ (Anforderungen)

Nach dem Update von `pip` werden üblicherweise im nächsten Schritt die Abhängigkeiten aus *requirements.txt* installiert.

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Set up Python
  uses: actions/setup-python@v2
  with:
    python-version: '3.x'
- name: Install dependencies
  run: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
```
{% endraw %}

#### Abhängigkeiten im Cache zwischenspeichern

When using {% data variables.product.prodname_dotcom %}-hosted runners, you can cache pip dependencies using a unique key, and restore the dependencies when you run future workflows using the [`cache`](https://github.com/marketplace/actions/cache) action. Weitere Informationen findest Du unter „<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Abhängigkeiten zur Beschleunigung von Workflows im Cache zwischenspeichern</a>“.

Pip caches dependencies in different locations, depending on the operating system of the runner. The path you'll need to cache may differ from the Ubuntu example below depending on the operating system you use. For more information, see [Python caching examples](https://github.com/actions/cache/blob/main/examples.md#python---pip).

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Setup Python
  uses: actions/setup-python@v2
  with:
    python-version: '3.x'
- name: Cache pip
  uses: actions/cache@v2
  with:
    # This path is specific to Ubuntu
    path: ~/.cache/pip
    # Look to see if there is a cache hit for the corresponding requirements file
    key: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
    restore-keys: |
      ${{ runner.os }}-pip-
      ${{ runner.os }}-
- name: Install dependencies
  run: pip install -r requirements.txt
```
{% endraw %}

{% note %}

**Note:** Depending on the number of dependencies, it may be faster to use the dependency cache. Projects with many large dependencies should see a performance increase as it cuts down the time required for downloading. Projects with fewer dependencies may not see a significant performance increase and may even see a slight decrease due to how pip installs cached dependencies. The performance varies from project to project.

{% endnote %}

### Deinen Code testen

Du kannst die gleichen Befehle verwenden, die Du auch lokal verwendest, um Deinen Code zu erstellen und zu testen.

#### Mit pytest und pytest-cov testen

This example installs or upgrades `pytest` and `pytest-cov`. Tests are then run and output in JUnit format while code coverage results are output in Cobertura. For more information, see [JUnit](https://junit.org/junit5/) and [Cobertura](https://cobertura.github.io/cobertura/).

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Set up Python
  uses: actions/setup-python@v2
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
{% endraw %}

#### Mit Flake8 den Code von „Fusseln“ reinigen

The following example installs or upgrades `flake8` and uses it to lint all files. For more information, see [Flake8](http://flake8.pycqa.org/en/latest/).

{% raw %}
```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Set up Python
  uses: actions/setup-python@v2
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
```
{% endraw %}

#### Tests mit Tox ausführen

With {% data variables.product.prodname_actions %}, you can run tests with tox and spread the work across multiple jobs. You'll need to invoke tox using the `-e py` option to choose the version of Python in your `PATH`, rather than specifying a specific version. For more information, see [tox](https://tox.readthedocs.io/en/latest/).

{% raw %}
```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python: [2.7, 3.7, 3.8]

    steps:
      - uses: actions/checkout@v2
      - name: Setup Python
        uses: actions/setup-python@v2
        with:
          python-version: ${{ matrix.python }}
      - name: Install Tox and any other packages
        run: pip install tox
      - name: Run Tox
        # Run tox using the version of Python in `PATH`
        run: tox -e py
```
{% endraw %}

### Workflow-Daten als Artefakte paketieren

You can upload artifacts to view after a workflow completes. Zum Beispiel kann es notwendig sein, Logdateien, Core Dumps, Testergebnisse oder Screenshots zu speichern. Weitere Informationen findest Du unter "[Workflow-Daten mittels Artefakten persistieren](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

The following example demonstrates how you can use the `upload-artifact` action to archive test results from running `pytest`. For more information, see the [`upload-artifact` action](https://github.com/actions/upload-artifact).

{% raw %}
```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [2.7, 3.5, 3.6, 3.7, 3.8]

    steps:
    - uses: actions/checkout@v2
    - name: Setup Python # Set Python version
      uses: actions/setup-python@v2
      with:
        python-version: ${{ matrix.python-version }}
    # Install pip and pytest
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install pytest
    - name: Test with pytest
      run: pytest tests.py --doctest-modules --junitxml=junit/test-results-${{ matrix.python-version }}.xml
    - name: Upload pytest test results
      uses: actions/upload-artifact@v2
      with:
        name: pytest-results-${{ matrix.python-version }}
        path: junit/test-results-${{ matrix.python-version }}.xml
      # Use always() to always run this step to publish test results when there are test failures
      if: ${{ always() }}
```
{% endraw %}

### In Paket-Registries veröffentlichen

You can configure your workflow to publish your Python package to any package registry you'd like when your CI tests pass.

You can store any access tokens or credentials needed to publish your package using secrets. The following example creates and publishes a package to PyPI using `twine` and `dist`. Weitere Informationen findest Du unter "[Verschlüsselte Geheimnisse erstellen und verwenden](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

{% raw %}
```yaml{:copy}
name: Upload Python Package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install setuptools wheel twine
    - name: Build and publish
      env:
        TWINE_USERNAME: ${{ secrets.PYPI_USERNAME }}
        TWINE_PASSWORD: ${{ secrets.PYPI_PASSWORD }}
      run: |
        python setup.py sdist bdist_wheel
        twine upload dist/*
```
{% endraw %}

For more information about the template workflow, see [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
