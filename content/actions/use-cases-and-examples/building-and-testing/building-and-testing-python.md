---
title: Building and testing Python
intro: You can create a continuous integration (CI) workflow to build and test your Python project.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-python-with-github-actions
  - /actions/language-and-framework-guides/using-python-with-github-actions
  - /actions/guides/building-and-testing-python
  - /actions/automating-builds-and-tests/building-and-testing-python
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Python
shortTitle: Build & test Python
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to build, test, and publish a Python package.

{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes Python and PyPy. You don't have to install anything! For a full list of up-to-date software and the pre-installed versions of Python and PyPy, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)".

## Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. For more information, see "[AUTOTITLE](/actions/learn-github-actions)."

We recommend that you have a basic understanding of Python, and pip. For more information, see:

* [Getting started with Python](https://www.python.org/about/gettingstarted/)
* [Pip package manager](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

## Using a Python workflow template

{% data reusables.actions.workflow-templates-get-started %}

{% data variables.product.prodname_dotcom %} provides a workflow template for Python that should work if your repository already contains at least one `.py` file. The subsequent sections of this guide give examples of how you can customize this workflow template.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "Choose a workflow" page shows a selection of recommended workflow templates. Search for "Python application".
1. On the "Python application" workflow, click **Configure**.

{%- ifversion ghes %}

   If you don't find the "Python application" workflow template, copy the following workflow code to a new file called `python-app.yml` in the `.github/workflows` directory of your repository.

   ```yaml copy
   name: Python application

   on:
     push:
       branches: [ "main" ]
     pull_request:
       branches: [ "main" ]

   permissions:
     contents: read

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
       - uses: {% data reusables.actions.action-checkout %}
       - name: Set up Python 3.10
         uses: {% data reusables.actions.action-setup-python %}
         with:
           python-version: "3.10"
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

{%- endif %}

1. Edit the workflow as required. For example, change the Python version.
1. Click **Commit changes**.

{% ifversion fpt or ghec %}
   The `python-app.yml` workflow file is added to the `.github/workflows` directory of your repository.
{% endif %}

## Specifying a Python version

To use a pre-installed version of Python or PyPy on a {% data variables.product.prodname_dotcom %}-hosted runner, use the `setup-python` action. This action finds a specific version of Python or PyPy from the tools cache on each runner and adds the necessary binaries to `PATH`, which persists for the rest of the job. If a specific version of Python is not pre-installed in the tools cache, the `setup-python` action will download and set up the appropriate version from the [`python-versions`](https://github.com/actions/python-versions) repository.

Using the `setup-python` action is the recommended way of using Python with {% data variables.product.prodname_actions %} because it ensures consistent behavior across different runners and different versions of Python. If you are using a self-hosted runner, you must install Python and add it to `PATH`. For more information, see the [`setup-python` action](https://github.com/marketplace/actions/setup-python).

The table below describes the locations for the tools cache in each {% data variables.product.prodname_dotcom %}-hosted runner.

{% rowheaders %}

|| Ubuntu | Mac | Windows |
|------|-------|------|----------|
|**Tool Cache Directory** |`/opt/hostedtoolcache/*`|`/Users/runner/hostedtoolcache/*`|`C:\hostedtoolcache\windows\*`|
|**Python Tool Cache**|`/opt/hostedtoolcache/Python/*`|`/Users/runner/hostedtoolcache/Python/*`|`C:\hostedtoolcache\windows\Python\*`|
|**PyPy Tool Cache**|`/opt/hostedtoolcache/PyPy/*`|`/Users/runner/hostedtoolcache/PyPy/*`|`C:\hostedtoolcache\windows\PyPy\*`|

{% endrowheaders %}

If you are using a self-hosted runner, you can configure the runner to use the `setup-python` action to manage your dependencies. For more information, see [using setup-python with a self-hosted runner](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) in the `setup-python` README.

{% data variables.product.prodname_dotcom %} supports semantic versioning syntax. For more information, see "[Using semantic versioning](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)" and the "[Semantic versioning specification](https://semver.org/)."

### Using multiple Python versions

The following example uses a matrix for the job to set up multiple Python versions. For more information, see "[AUTOTITLE](/actions/using-jobs/using-a-matrix-for-your-jobs)."

```yaml copy
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ["pypy3.9", "pypy3.10", "3.9", "3.10", "3.11", "3.12"]

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

### Using a specific Python version

You can configure a specific version of Python. For example, 3.10. Alternatively, you can use semantic version syntax to get the latest minor release. This example uses the latest minor release of Python 3.

```yaml copy
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        # This is the version of the action for setting up Python, not the Python version.
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

### Excluding a version

If you specify a version of Python that is not available, `setup-python` fails with an error such as: `##[error]Version 3.6 with arch x64 not found`. The error message includes the available versions.

You can also use the `exclude` keyword in your workflow if there is a configuration of Python that you do not wish to run. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategy)."

```yaml copy
name: Python package

on: [push]

jobs:
  build:

    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        python-version: ["3.9", "3.10", "3.11", "pypy3.9", "pypy3.10"]
        exclude:
          - os: macos-latest
            python-version: "3.9"
          - os: windows-latest
            python-version: "3.9"
```

### Using the default Python version

We recommend using `setup-python` to configure the version of Python used in your workflows because it helps make your dependencies explicit. If you don't use `setup-python`, the default version of Python set in `PATH` is used in any shell when you call `python`. The default version of Python varies between {% data variables.product.prodname_dotcom %}-hosted runners, which may cause unexpected changes or use an older version than expected.

| {% data variables.product.prodname_dotcom %}-hosted runner | Description |
|----|----|
| Ubuntu | Ubuntu runners have multiple versions of system Python installed under `/usr/bin/python` and `/usr/bin/python3`. The Python versions that come packaged with Ubuntu are in addition to the versions that {% data variables.product.prodname_dotcom %} installs in the tools cache. |
| Windows | Excluding the versions of Python that are in the tools cache, Windows does not ship with an equivalent version of system Python. To maintain consistent behavior with other runners and to allow Python to be used out-of-the-box without the `setup-python` action, {% data variables.product.prodname_dotcom %} adds a few versions from the tools cache to `PATH`.|
| macOS | The macOS runners have more than one version of system Python installed, in addition to the versions that are part of the tools cache. The system Python versions are located in the `/usr/local/Cellar/python/*` directory. |

## Installing dependencies

{% data variables.product.prodname_dotcom %}-hosted runners have the pip package manager installed. You can use pip to install dependencies from the PyPI package registry before building and testing your code. For example, the YAML below installs or upgrades the `pip` package installer and the `setuptools` and `wheel` packages.

{% ifversion actions-caching %}You can also cache dependencies to speed up your workflow. For more information, see "[AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)."{% endif %}

```yaml copy
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Set up Python
  uses: {% data reusables.actions.action-setup-python %}
  with:
    python-version: '3.x'
- name: Install dependencies
  run: python -m pip install --upgrade pip setuptools wheel
```

### Requirements file

After you update `pip`, a typical next step is to install dependencies from _requirements.txt_. For more information, see [pip](https://pip.pypa.io/en/stable/cli/pip_install/#example-requirements-file).

```yaml copy
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

### Caching Dependencies

You can cache and restore the dependencies using the [`setup-python` action](https://github.com/actions/setup-python).

The following example caches dependencies for pip.

```yaml copy
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-python %}
  with:
    python-version: '3.11'
    cache: 'pip'
- run: pip install -r requirements.txt
- run: pip test
```

By default, the `setup-python` action searches for the dependency file (`requirements.txt` for pip, `Pipfile.lock` for pipenv or `poetry.lock` for poetry) in the whole repository. For more information, see "[Caching packages dependencies](https://github.com/actions/setup-python#caching-packages-dependencies)" in the `setup-python` README.

If you have a custom requirement or need finer controls for caching, you can use the [`cache` action](https://github.com/marketplace/actions/cache). Pip caches dependencies in different locations, depending on the operating system of the runner. The path you'll need to cache may differ from the Ubuntu example above, depending on the operating system you use. For more information, see [Python caching examples](https://github.com/actions/cache/blob/main/examples.md#python---pip) in the `cache` action repository.

{% endif %}

## Testing your code

You can use the same commands that you use locally to build and test your code.

### Testing with pytest and pytest-cov

This example installs or upgrades `pytest` and `pytest-cov`. Tests are then run and output in JUnit format while code coverage results are output in Cobertura. For more information, see [JUnit](https://junit.org/junit5/) and [Cobertura](https://cobertura.github.io/cobertura/).

```yaml copy
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
    pip install pytest pytest-cov
    pytest tests.py --doctest-modules --junitxml=junit/test-results.xml --cov=com --cov-report=xml --cov-report=html
```

### Using Ruff to lint code

The following example installs or upgrades `ruff` and uses it to lint all files. For more information, see [Ruff](https://beta.ruff.rs/docs).

```yaml copy
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
- name: Lint with Ruff
  run: |
    pip install ruff
    ruff check --output-format=github .
  continue-on-error: true
```

The linting step has `continue-on-error: true` set. This will keep the workflow from failing if the linting step doesn't succeed. Once you've addressed all of the linting errors, you can remove this option so the workflow will catch new issues.

### Running tests with tox

With {% data variables.product.prodname_actions %}, you can run tests with tox and spread the work across multiple jobs. You'll need to invoke tox using the `-e py` option to choose the version of Python in your `PATH`, rather than specifying a specific version. For more information, see [tox](https://tox.readthedocs.io/en/latest/).

```yaml copy
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python: ["3.9", "3.10", "3.11"]

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

## Packaging workflow data as artifacts

You can upload artifacts to view after a workflow completes. For example, you may need to save log files, core dumps, test results, or screenshots. For more information, see "[AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts)."

The following example demonstrates how you can use the `upload-artifact` action to archive test results from running `pytest`. For more information, see the [`upload-artifact` action](https://github.com/actions/upload-artifact).

```yaml copy
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ["3.7", "3.8", "3.9", "3.10", "3.11"]

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

## Publishing to PyPI

You can configure your workflow to publish your Python package to PyPI once your CI tests pass. This section demonstrates how you can use {% data variables.product.prodname_actions %} to upload your package to PyPI each time you publish a release. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository)."

The example workflow below uses [Trusted Publishing](https://docs.pypi.org/trusted-publishers/) to authenticate with PyPI, eliminating the need for a manually configured API token.

```yaml copy
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Upload Python Package

on:
  release:
    types: [published]

permissions:
  contents: read

jobs:
  release-build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: "3.x"

      - name: Build release distributions
        run: |
          # NOTE: put your own distribution build steps here.
          python -m pip install build
          python -m build

      - name: Upload distributions
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: release-dists
          path: dist/

  pypi-publish:
    runs-on: ubuntu-latest

    needs:
      - release-build

    permissions:
      # IMPORTANT: this permission is mandatory for trusted publishing
      id-token: write

    # Dedicated environments with protections for publishing are strongly recommended.
    environment:
      name: pypi
      # OPTIONAL: uncomment and update to include your PyPI project URL in the deployment status:
      # url: https://pypi.org/p/YOURPROJECT

    steps:
      - name: Retrieve release distributions
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: release-dists
          path: dist/

      - name: Publish release distributions to PyPI
        uses: pypa/gh-action-pypi-publish@release/v1
```

{% ifversion not ghes %}

For more information about this workflow, including the PyPI settings
needed, see [AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-pypi).

{% endif %}
