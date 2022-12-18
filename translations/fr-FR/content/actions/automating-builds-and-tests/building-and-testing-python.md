---
title: Création et test du code Python
intro: Vous pouvez créer un workflow d’intégration continue (CI) pour générer et tester votre projet Python.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409466'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment générer, tester et publier un package Python.

Les exécuteurs hébergés dans {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} ont un cache d’outils où des logiciels sont préinstallés, notamment Python et PyPy. Vous n’avez donc rien à installer ! Pour obtenir la liste complète des logiciels les plus récents et des versions préinstallées de Python et PyPy, consultez « [Spécifications pour les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) ».
{% endif %}

## Prérequis

Vous devez être familiarisé avec YAML et la syntaxe {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

Il est recommandé de connaître les bases de Python, PyPy et pip. Pour plus d'informations, consultez les pages suivantes :
- [Bien démarrer avec Python](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [Gestionnaire de package pip](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

## Utilisation du workflow de démarrage Python

{% data variables.product.prodname_dotcom %} fournit un workflow de démarrage Python qui doit fonctionner pour la plupart des projets Python. Ce guide inclut des exemples que vous pouvez utiliser pour personnaliser le workflow de démarrage. Pour plus d’informations, consultez le [Workflow de démarrage Python](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

Pour commencer rapidement, ajoutez le workflow de démarrage au répertoire `.github/workflows` de votre dépôt.

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

## Spécification d’une version de Python

Pour utiliser une version préinstallée de Python ou de PyPy sur un exécuteur hébergé dans {% data variables.product.prodname_dotcom %}, utilisez l’action `setup-python`. Cette action recherche une version spécifique de Python ou de PyPy dans le cache d’outils de chaque exécuteur, et ajoute les fichiers binaires nécessaires à `PATH`, qui est conservé pour la suite du travail. Si une version spécifique de Python n’est pas préinstallée dans le cache d’outils, l’action `setup-python` télécharge et configure la version appropriée à partir du dépôt [`python-versions`](https://github.com/actions/python-versions).

L’action `setup-python` est recommandée pour utiliser Python avec {% data variables.product.prodname_actions %}, car cela garantit un comportement cohérent sur tous les exécuteurs et toutes les versions de Python. Si vous utilisez un exécuteur auto-hébergé, vous devez installer Python et l’ajouter à `PATH`. Pour plus d’informations, consultez l’[action `setup-python`](https://github.com/marketplace/actions/setup-python).

Le tableau ci-dessous décrit les emplacements du cache d’outils pour chaque exécuteur hébergé dans {% data variables.product.prodname_dotcom %}.

|| Ubuntu | Mac | Windows |
|------|-------|------|----------|
|**Répertoire du cache d’outils** |`/opt/hostedtoolcache/*`|`/Users/runner/hostedtoolcache/*`|`C:\hostedtoolcache\windows\*`|
|**Cache d’outils Python**|`/opt/hostedtoolcache/Python/*`|`/Users/runner/hostedtoolcache/Python/*`|`C:\hostedtoolcache\windows\Python\*`|
|**Cache d’outils PyPy**|`/opt/hostedtoolcache/PyPy/*`|`/Users/runner/hostedtoolcache/PyPy/*`|`C:\hostedtoolcache\windows\PyPy\*`|

Si vous utilisez un exécuteur auto-hébergé, vous pouvez configurer l’exécuteur afin qu’il utilise l’action `setup-python` pour gérer vos dépendances. Pour plus d’informations, consultez [Utilisation de setup-python avec un exécuteur auto-hébergé](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) dans le fichier README `setup-python`.

{% data variables.product.prodname_dotcom %} prend en charge la syntaxe du versioning sémantique. Pour plus d’informations, consultez « [Utilisation du versioning sémantique](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept) » et « [Spécification du versioning sémantique](https://semver.org/) ».

### Utilisation de plusieurs versions de Python

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

### Utilisation d’une version spécifique de Python

Vous pouvez configurer une version spécifique de Python. Par exemple 3.9. Vous pouvez également utiliser la syntaxe de versioning sémantique pour obtenir la dernière version mineure. Cet exemple utilise la dernière version mineure de Python 3.

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

### Exclusion d’une version

Si vous spécifiez une version de Python qui n’est pas disponible, `setup-python` échoue avec une erreur comme celle-ci : `##[error]Version 3.4 with arch x64 not found`. Le message d’erreur mentionne les versions disponibles.

Vous pouvez également utiliser le mot clé `exclude` dans votre workflow s’il existe une configuration de Python que vous ne souhaitez pas exécuter. Pour plus d’informations, consultez « [Syntaxe des workflows pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) ».

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

### Utilisation de la version par défaut de Python

Nous vous recommandons d’utiliser `setup-python` pour configurer la version de Python qui est utilisée dans vos workflows, car cela permet de rendre vos dépendances explicites. Si vous n’utilisez pas `setup-python`, la version par défaut de Python qui est définie dans `PATH` sera utilisée dans n’importe quel interpréteur de commandes lorsque vous appellerez `python`. La version par défaut de Python varie en fonction de l’exécuteur hébergé dans {% data variables.product.prodname_dotcom %}, ce qui peut entraîner des modifications inattendues ou l’utilisation d’une version plus ancienne que prévu.

| Exécuteur hébergé dans {% data variables.product.prodname_dotcom %} | Description |
|----|----|
| Ubuntu | Plusieurs versions de Python système sont installées sur les exécuteurs Ubuntu, sous `/usr/bin/python` et `/usr/bin/python3`. Les versions Python fournies avec Ubuntu viennent s’ajouter aux versions que {% data variables.product.prodname_dotcom %} installe dans le cache d’outils. |
| Windows | À l’exception des versions de Python qui se trouvent dans le cache d’outils, Windows n’est pas fourni avec une version équivalente de Python système. Pour maintenir un comportement cohérent avec les autres exécuteurs et permettre à Python d’être utilisé immédiatement sans l’action `setup-python`, {% data variables.product.prodname_dotcom %} ajoute quelques versions à `PATH` à partir du cache d’outils.|
| macOS | Plusieurs versions de Python système sont installées sur les exécuteurs macOS, en plus des versions qui se trouvent dans le cache d’outils. Les versions de Python système se trouvent dans le répertoire `/usr/local/Cellar/python/*`. |

## Installer les dépendances

Le gestionnaire de package pip est installé sur les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}. Vous pouvez utiliser pip pour installer des dépendances à partir du registre de package PyPI avant de générer et de tester votre code. Par exemple, le code YAML ci-dessous installe ou met à niveau le programme d’installation du package `pip`, ainsi que les packages `setuptools` et `wheel`.

{% ifversion actions-caching %}Vous pouvez également mettre en cache les dépendances pour accélérer votre workflow. Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».{% endif %}

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

### Fichier de spécifications

Une fois que vous avez mis à jour `pip`, l’étape qui suit classiquement consiste à installer les dépendances à partir de *requirements.txt*. Pour plus d’informations, consultez [pip](https://pip.pypa.io/en/stable/cli/pip_install/#example-requirements-file).

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

### Mise en cache des dépendances

Vous pouvez mettre en cache et restaurer les dépendances à l’aide de l’[action `setup-python`](https://github.com/actions/setup-python).

L’exemple suivant met en cache les dépendances pour pip.

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

Par défaut, l’action `setup-python` recherche le fichier de dépendances (`requirements.txt` pour pip, `Pipfile.lock` pour pipenv ou `poetry.lock` pour poetry) dans l’ensemble du dépôt. Pour plus d’informations, consultez « [Mise en cache des dépendances de packages](https://github.com/actions/setup-python#caching-packages-dependencies) » dans le fichier LISEZ-MOI de `setup-python`.

Si vous avez une exigence particulière ou si vous avez besoin d’un contrôle plus précis pour la mise en cache, vous pouvez utiliser l’[action `cache`](https://github.com/marketplace/actions/cache). Pip met en cache les dépendances à différents emplacements, selon le système d’exploitation de l’exécuteur. Le chemin que vous devez mettre en cache peut différer de celui de l’exemple Ubuntu ci-dessus, selon le système d’exploitation que vous utilisez. Pour plus d’informations, consultez les [exemples de mise en cache Python](https://github.com/actions/cache/blob/main/examples.md#python---pip) dans le dépôt de l’action `cache`.

{% endif %}

## Test de votre code

Vous pouvez utiliser les mêmes commandes que celles que vous utilisez localement pour générer et tester votre code.

### Effectuer des tests avec pytest et pytest-cov

Cet exemple installe ou met à niveau `pytest` et `pytest-cov`. Les tests sont ensuite exécutés et une sortie est générée au format JUnit pendant que les résultats de couverture du code sont générés dans Cobertura. Pour plus d’informations, consultez [JUnit](https://junit.org/junit5/) et [Cobertura](https://cobertura.github.io/cobertura/).

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

### Utilisation de Flake8 pour linter du code

L’exemple suivant installe ou met à niveau `flake8`, et l’utilise pour effectuer le linting de tous les fichiers. Pour plus d’informations, consultez [Flake8](http://flake8.pycqa.org/en/latest/)

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

`continue-on-error: true` est défini dans l’étape de linting. Cela empêche le workflow d’échouer si l’étape de linting ne réussit pas. Une fois que vous avez résolu toutes les erreurs de linting, vous pouvez supprimer cette option afin que le workflow intercepte de nouveaux problèmes.

### Exécution de tests avec tox

Avec {% data variables.product.prodname_actions %}, vous pouvez exécuter des tests avec tox et répartir les tâches entre plusieurs travaux. Vous devez appeler tox à l’aide de l’option `-e py` pour choisir la version de Python de votre `PATH`, plutôt que de spécifier une version. Pour plus d’informations, consultez [tox](https://tox.readthedocs.io/en/latest/).

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

## Empaquetage des données de workflow en tant qu’artefacts

Vous pouvez charger des artefacts à afficher une fois un workflow terminé. Par exemple, vous devrez peut-être enregistrer des fichiers journaux, des vidages principaux, des résultats de test ou des captures d’écran. Pour plus d’informations, consultez « [Rendre persistantes des données de workflow à l’aide d’artefacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts) ».

L’exemple suivant montre comment utiliser l’action `upload-artifact` pour archiver les résultats des tests obtenus par l’exécution de `pytest`. Pour plus d’informations, consultez l’[action `upload-artifact`](https://github.com/actions/upload-artifact).

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

## Publication dans des registres de package

Vous pouvez configurer votre workflow pour publier votre package Python dans un registre de package une fois vos tests CI réussis. Cette section montre comment utiliser {% data variables.product.prodname_actions %} pour charger votre package sur PyPI chaque fois que vous [publiez une version](/github/administering-a-repository/managing-releases-in-a-repository). 

Pour cet exemple, vous devez créer deux [jetons d’API PyPI](https://pypi.org/help/#apitoken). Vous pouvez utiliser des secrets pour stocker les jetons d’accès ou les informations d’identification nécessaires à la publication de votre package. Pour plus d’informations, consultez « [Création et utilisation de secrets chiffrés](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

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

Pour plus d’informations sur le workflow de démarrage, consultez [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
