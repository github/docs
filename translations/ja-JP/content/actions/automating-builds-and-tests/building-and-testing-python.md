---
title: Python のビルドとテスト
intro: Pythonプロジェクトのビルドとテストのための継続的インテグレーション（CI）ワークフローを作成できます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409468'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、Pythonパッケージのビルド、テスト、公開の方法を紹介します。

{% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %}{% else %}{% data variables.product.prodname_dotcom %} ホスト ランナーには、Python と PyPy を含む、ソフトウェアがプレインストールされたツール キャッシュがあります。 自分では何もインストールする必要がありません！ 最新のソフトウェアと、Python および PyPy のプレインストールされたバージョンの完全なリストについては、「[{% data variables.product.prodname_dotcom %} ホスト ランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

## 前提条件

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

Python、PyPy、pipの基本的な理解をしておくことをおすすめします。 詳細については、次を参照してください。
- [Python の概要](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [pip パッケージ マネージャー](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

## Python スターター ワークフローの使用

{% data variables.product.prodname_dotcom %} では、ほとんどの Python プロジェクトで使える Python スターター ワークフローが提供されています。 このガイドには、スターター ワークフローのカスタマイズに使用できる例が含まれます。 詳細については、「[Python スターター ワークフロー](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml)」を参照してください。

すぐに作業を開始するには、リポジトリの `.github/workflows` ディレクトリにスターター ワークフローを追加します。

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

## Pythonのバージョンの指定

{% data variables.product.prodname_dotcom %} ホスト ランナー上で Python または PyPy のプレインストールされたバージョンを使うには、`setup-python` アクションを使用します。 このアクションでは各ランナーのツール キャッシュから指定されたバージョンの Python または PyPy を見つけ、必要なバイナリを `PATH` に追加します。これは、残りのジョブで永続化されます。 特定のバージョンの Python がツール キャッシュにプレインストールされていない場合、`setup-python` アクションでは [`python-versions`](https://github.com/actions/python-versions) リポジトリから適切なバージョンをダウンロードして設定します。

`setup-python` の使用は、{% data variables.product.prodname_actions %} で Python を使うための推奨される方法です。これは、そうすることでさまざまなランナーやさまざまなバージョンの Python で一貫した動作が保証されるためです。 セルフホスト ランナーを使用している場合は、Python をインストールして `PATH` に追加する必要があります。 詳細については、「[`setup-python` アクション](https://github.com/marketplace/actions/setup-python)」を参照してください。

以下の表は、各{% data variables.product.prodname_dotcom %}ホストランナー内でのツールキャッシュの場所です。

|| Ubuntu | Mac | Windows |
|------|-------|------|----------|
|**ツール キャッシュ ディレクトリ** |`/opt/hostedtoolcache/*`|`/Users/runner/hostedtoolcache/*`|`C:\hostedtoolcache\windows\*`|
|**Python ツール キャッシュ**|`/opt/hostedtoolcache/Python/*`|`/Users/runner/hostedtoolcache/Python/*`|`C:\hostedtoolcache\windows\Python\*`|
|**PyPy ツール キャッシュ**|`/opt/hostedtoolcache/PyPy/*`|`/Users/runner/hostedtoolcache/PyPy/*`|`C:\hostedtoolcache\windows\PyPy\*`|

セルフホスト ランナーを使用している場合は、`setup-python` アクションを使って依存関係を管理するようにランナーを構成できます。 詳細については、`setup-python` README の[セルフホスト ランナーでの setup-python の使用](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner)に関するページを参照してください。

{% data variables.product.prodname_dotcom %}は、セマンティックバージョン構文をサポートしています。 詳細については、「[セマンティック バージョニングの使用](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)」および「[セマンティック バージョニングの仕様](https://semver.org/)」を参照してください。

### Pythonの複数バージョンの利用

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

### 特定のバージョンのPythonの利用

Pythonの特定バージョンを設定することができます。 たとえば、"3.9" です。 あるいは、最新のマイナーリリースを取得するためにセマンティックバージョン構文を使うこともできます。 以下の例では、Python 3の最新のマイナーリリースを使います。

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

### バージョンの除外

使用できない Python のバージョンを指定すると、`setup-python` が `##[error]Version 3.4 with arch x64 not found` などのエラーで失敗します。 このエラーメッセージには、利用できるバージョンが含まれます。

実行したくない Python の構成がある場合は、ワークフローで `exclude` キーワードを使用することもできます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)に関するページを参照してください。

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

### デフォルトバージョンのPythonの利用

依存関係を明示的にしやすくなるので、ワークフローで使用する Python のバージョンの構成には `setup-python` を使うことをお勧めします。 `setup-python` を使わない場合は、`python` の呼び出し時にいずれかのシェルで `PATH` に設定された既定のバージョンの Python が使用されます。 デフォルトバージョンのPythonは、{% data variables.product.prodname_dotcom %}ホストランナーによって様々なので、予想外の変更が生じたり、期待しているよりも古いバージョンが使われたりするかもしれません。

| {% data variables.product.prodname_dotcom %}ホストランナー | 説明 |
|----|----|
| Ubuntu | Ubuntu ランナーでは、`/usr/bin/python` および `/usr/bin/python3` の下に複数のバージョンのシステム Python がインストールされています。 {% data variables.product.prodname_dotcom %}がツールキャッシュにインストールしエチルバージョンに加えて、UbuntuにパッケージングされているバージョンのPythonがあります。 |
| Windows | ツールキャッシュにあるPythonのバージョンを除けば、WindowsにはシステムPythonに相当するバージョンは含まれていません。 他のランナーとの一貫した動作を保ち、`setup-python` アクションなしですぐに Python が使えるようにするために、{% data variables.product.prodname_dotcom %} ではツール キャッシュからいくつかのバージョンを `PATH` に追加します。|
| macOS | macOSランナーには、ツールキャッシュ内のバージョンに加えて、複数バージョンのシステムPythonがインストールされています。 システム Python バージョンは `/usr/local/Cellar/python/*` ディレクトリにあります。 |

## 依存関係のインストール

{% data variables.product.prodname_dotcom %}ホストランナーには、パッケージマネージャーのpipがインストールされています。 コードのビルドとテストに先立って、pipを使ってパッケージレジストリのPyPIから依存関係をインストールできます。 たとえば、以下の YAML では、`pip` パッケージ インストーラーと、`setuptools` および `wheel` パッケージがインストールまたはアップグレードされます。

{% ifversion actions-caching %} ワークフローの速度を上げるために、依存関係をキャッシュすることもできます。 詳細については、「[依存関係をキャッシュしてワークフローのスピードを上げる](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。{% endif %}

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

### Requirementsファイル

`pip` の更新後の一般的な次の手順は、*requirements.txt* から依存関係をインストールすることです。 詳しくは、「[pip](https://pip.pypa.io/en/stable/cli/pip_install/#example-requirements-file)」をご覧ください。

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

### 依存関係のキャッシング

[`setup-python`アクション](https://github.com/actions/setup-python)を使用して依存関係をキャッシュおよび復元できます。

次の例では pip の依存関係をキャッシュします。

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

既定で、`setup-python` アクションでは、リポジトリ全体で依存関係ファイル (pip の場合は `requirements.txt`、pipenv の場合は `Pipfile.lock`、poetry の場合は `poetry.lock`) を検索します。 詳細については、`setup-python` README の[パッケージの依存関係のキャッシュ](https://github.com/actions/setup-python#caching-packages-dependencies)に関するページを参照してください。

カスタム要件がある場合、またはキャッシュに対してより細かい制御が必要な場合は、[`cache` アクション](https://github.com/marketplace/actions/cache)を使用できます。 ランナーのオペレーティングシステムによって、pipは依存関係を様々な場所にキャッシュします。 キャッシュする必要があるパスは、使用するオペレーティング システムによって、上記の Ubuntu の例とは異なる場合があります。 詳細については、`cache` アクション リポジトリの [Python キャッシュの例](https://github.com/actions/cache/blob/main/examples.md#python---pip)に関するページを参照してください。

{% endif %}

## コードのテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。

### pytest及びpytest-covでのテスト

この例では、`pytest` および `pytest-cov` をインストールまたはアップグレードします。 そしてテストが実行され、JUnit形式で出力が行われ、一方でコードカバレッジの結果がCoberturaに出力されます。 詳細については、[JUnit](https://junit.org/junit5/) と [Cobertura](https://cobertura.github.io/cobertura/) に関するページを参照してください。

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

### Flake8を使ったコードのlint

以下の例では、`flake8` をインストールまたはアップグレードし、それを使ってすべてのファイルを lint します。 詳細については、[Flake8](http://flake8.pycqa.org/en/latest/) に関するページを参照してください。

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

リンティング ステップには `continue-on-error: true` が設定されています。 これにより、リンティング ステップが成功しなかった場合にワークフローが失敗しなくなります。 すべてのリンティング エラーに対処したら、ワークフローで新しい Issue を見つけられるようにこのオプションを削除できます。

### toxでのテストの実行

{% data variables.product.prodname_actions %}では、toxでテストを実行し、その処理を複数のジョブに分散できます。 tox を起動する際には、特定のバージョンを指定するのではなく、`-e py` オプションを使って `PATH` の Python のバージョンを選択する必要があります。 詳細については、[tox](https://tox.readthedocs.io/en/latest/) に関するページを参照してください。

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

## 成果物としてのワークフローのデータのパッケージ化

ワークフローの完了後に、成果物をアップロードして見ることができます。 たとえば、ログファイル、コアダンプ、テスト結果、スクリーンショットを保存する必要があるかもしれません。 詳細については、「[アーティファクトを使用してワークフロー データを永続化する](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

以下の例は、`upload-artifact` アクションを使って `pytest` の実行によるテスト結果をアーカイブする方法を示しています。 詳細については、「[`upload-artifact` アクション](https://github.com/actions/upload-artifact)」を参照してください。

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

## パッケージレジストリへの公開

CI テストにパスしたら、Python パッケージをパッケージ レジストリに公開するようにワークフローを構成できます。 このセクションでは、{% data variables.product.prodname_actions %} を使用して、[リリースを公開する](/github/administering-a-repository/managing-releases-in-a-repository)たびにパッケージを PyPI にアップロードする方法について説明します。 

この例では、2 つの [PyPI API トークン](https://pypi.org/help/#apitoken)を作成する必要があります。 パッケージを公開するのに必要なトークンまたは資格情報を格納するために、シークレットを使用することができます。 詳細については、「[暗号化されたシークレットの作成と使用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

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

スターター ワークフローの詳細については、「[`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml)」を参照してください。
