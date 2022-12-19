---
title: Python 빌드 및 테스트
intro: CI(연속 통합) 워크플로를 만들어 Python 프로젝트를 빌드하고 테스트할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409469'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Python 패키지를 빌드하고 테스트하고 게시하는 방법을 보여 줍니다.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} 호스트 실행기에는 소프트웨어가 사전 설치된 도구 캐시가 있습니다. 여기에는 Python 및 PyPy가 포함되어 있습니다. 사용자는 아무것도 설치할 필요가 없습니다. 최신 소프트웨어 및 사전 설치된 Python 및 PyPy 버전의 전체 목록은 “[{% data variables.product.prodname_dotcom %} 호스트 실행기 사양](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”을 참조하세요.
{% endif %}

## 필수 조건

YAML 및 {% data variables.product.prodname_actions %}의 구문에 대해 잘 알고 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”를 참조하세요.

Python, PyPy, pip를 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 다음을 참조하세요.
- [Python 시작](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [pip 패키지 관리자](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

## Python 시작 워크플로 사용

{% data variables.product.prodname_dotcom %}는 대부분의 Python 프로젝트에서 작동하는 Python 시작 워크플로를 제공합니다. 이 가이드에는 시작 워크플로를 사용자 지정하는 데 사용할 수 있는 예제가 포함되어 있습니다. 자세한 내용은 [Python 시작 워크플로](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml)를 참조하세요.

빠르게 시작하려면 시작 워크플로를 리포지토리의 `.github/workflows` 디렉터리에 추가합니다.

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

## Python 버전 지정

{% data variables.product.prodname_dotcom %} 호스트 실행기에서 사전 설치된 버전의 Python 또는 PyPy를 사용하려면 `setup-python` 작업을 사용하세요. 이 작업은 각 실행기의 도구 캐시에서 Node.js의 특정 버전을 찾아 필수 이진 파일을 `PATH`에 추가합니다. 이는 나머지 작업 동안 유지됩니다. 특정 버전의 Python이 도구 캐시에 사전 설치되어 있지 않으면 `setup-python` 작업이 [`python-versions`](https://github.com/actions/python-versions) 리포지토리에서 적절한 버전을 다운로드하고 설정합니다.

`setup-python` 작업을 사용하는 것은 다양한 실행기 및 Python 버전 간에 일관된 동작을 보장하므로 {% data variables.product.prodname_actions %}로 Python을 사용하는 데 권장되는 방법입니다. 자체 호스트 실행기를 사용하는 경우 Python을 설치하고 이를 `PATH`에 추가해야 합니다. 자세한 내용은 [`setup-python` 작업](https://github.com/marketplace/actions/setup-python)을 참조하세요.

아래 테이블에서는 각 {% data variables.product.prodname_dotcom %}호스트 실행기에서 도구 캐시의 위치를 설명합니다.

|| Ubuntu | Mac | Windows |
|------|-------|------|----------|
|**도구 캐시 디렉터리** |`/opt/hostedtoolcache/*`|`/Users/runner/hostedtoolcache/*`|`C:\hostedtoolcache\windows\*`|
|**Python 도구 캐시**|`/opt/hostedtoolcache/Python/*`|`/Users/runner/hostedtoolcache/Python/*`|`C:\hostedtoolcache\windows\Python\*`|
|**PyPy 도구 캐시**|`/opt/hostedtoolcache/PyPy/*`|`/Users/runner/hostedtoolcache/PyPy/*`|`C:\hostedtoolcache\windows\PyPy\*`|

자체 호스팅 실행기를 사용하는 경우 `setup-python` 작업을 사용하여 종속성을 관리하도록 실행기를 구성할 수 있습니다. 자세한 내용은 `setup-python` 추가 정보에서 [자체 호스트 실행기로 setup-python 사용](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner)을 참조하세요.

{% data variables.product.prodname_dotcom %}는 의미 체계 버전 관리 구문을 지원합니다. 자세한 내용은 “[의미 체계 버전 관리 사용](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)” 및 “[의미 체계 버전 관리 사양](https://semver.org/)”을 참조하세요.

### 여러 Python 버전 사용

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

### 특정 Python 버전 사용

특정 예를 들어 3.9입니다. 또는 의미 체계 버전 구문을 사용하여 최신 부 릴리스를 가져올 수 있습니다. 이 예제에서는 Python 3의 최신 부 릴리스를 사용합니다.

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

### 버전 제외

사용할 수 없는 Python 버전을 지정하면 `setup-python`이 `##[error]Version 3.4 with arch x64 not found` 오류와 함께 실패합니다. 오류 메시지에는 사용 가능한 버전이 포함됩니다.

실행하지 않으려는 Python 구성이 있는 경우 워크플로에서 `exclude` 키워드를 사용할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)”을 참조하세요.

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

### 기본 Python 버전 사용

종속성을 명시적으로 설정하는 데 도움이 되므로 `setup-python`을 사용하여 워크플로에서 사용되는 Python 버전을 구성하는 것이 좋습니다. `setup-python`을 사용하지 않으면 `python`을 호출할 때 `PATH`에서 설정된 Python의 기본 버전이 모든 셸에서 사용됩니다. Python의 기본 버전은 {% data variables.product.prodname_dotcom %} 호스트 실행기마다 다르며 이로 인해 예기치 않은 변경이 발생하거나 예상보다 이전 버전을 사용할 수 있습니다.

| {% data variables.product.prodname_dotcom %} 호스트 실행기 | 설명 |
|----|----|
| Ubuntu | Ubuntu 실행기에는 `/usr/bin/python` 및 `/usr/bin/python3`에 설치된 여러 버전의 시스템 Python이 있습니다. Ubuntu와 함께 패키지된 Python 버전은 {% data variables.product.prodname_dotcom %}가 도구 캐시에 설치하는 버전에 추가됩니다. |
| Windows | 도구 캐시에 있는 Python 버전을 제외하고 Windows에는 동일한 버전의 시스템 Python이 제공되지 않습니다. 다른 실행기와 일관된 동작을 유지하고 `setup-python` 작업 없이 즉시 사용 가능한 Python을 허용하기 위해 {% data variables.product.prodname_dotcom %}는 도구 캐시의 몇 가지 버전을 `PATH`에 추가합니다.|
| macOS | macOS 실행기에는 도구 캐시의 일부인 버전 외에 둘 이상의 시스템 Python 버전이 설치되어 있습니다. 시스템 Python 버전은 `/usr/local/Cellar/python/*` 디렉터리에 있습니다. |

## 종속성 설치

{% data variables.product.prodname_dotcom %} 호스트 실행기에는 pip 패키지 관리자가 설치되어 있습니다. 코드를 빌드하고 테스트하기 전에 pip을 사용하여 PyPI 패키지 레지스트리에서 종속성을 설치할 수 있습니다. 예를 들어 아래 YAML은 `pip` 패키지 설치 프로그램과 `setuptools` 및 `wheel` 패키지를 설치하거나 업그레이드합니다.

{% ifversion actions-caching %}종속성을 캐시하여 워크플로 속도를 높일 수도 있습니다. 자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”을 참조하세요.{% endif %}

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

### 요구 사항 파일

`pip`을 업데이트한 후 일반적인 다음 단계는 *requirements.txt* 에서 종속성을 설치하는 것입니다. 자세한 내용은 [pip](https://pip.pypa.io/en/stable/cli/pip_install/#example-requirements-file)를 참조하세요.

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

### 종속성 캐싱

[`setup-python`작업](https://github.com/actions/setup-python)을 사용하여 종속성을 캐시하고 복원할 수 있습니다.

다음 예제에서는 pip에 대한 종속성을 캐시합니다.

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

기본적으로 `setup-python` 작업은 전체 리포지토리에서 종속성 파일(pip의 경우 `requirements.txt`, pipenv의 경우 `Pipfile.lock` 또는 poetry의 경우 `poetry.lock`)을 검색합니다. 자세한 내용은 `setup-python` 추가 정보에서 "[패키지 종속성 캐싱](https://github.com/actions/setup-python#caching-packages-dependencies)"을 참조하세요.

사용자 지정 요구사항이 있거나 캐싱에 대한 세부적인 제어가 필요한 경우 [`cache` 작업](https://github.com/marketplace/actions/cache)을 사용할 수 있습니다. pip는 실행기의 운영 체제에 따라 다른 위치에 종속성을 캐시합니다. 캐시해야 하는 경로는 사용하는 운영 체제에 따라 위의 Ubuntu 예제와 다를 수 있습니다. 자세한 내용은 `cache` 작업 리포지토리에서 [Python 캐싱 예제](https://github.com/actions/cache/blob/main/examples.md#python---pip)를 참조하세요.

{% endif %}

## 코드 테스트

코드를 빌드하고 테스트하기 위해 로컬에서 사용하는 것과 동일한 명령을 사용할 수 있습니다.

### pytest 및 pytest-cov를 사용하여 테스트

제에서`pytest``pytest-cov` 그런 다음 테스트가 실행되어 JUnit 형식으로 출력되고 코드 검사 결과는 Cobertura로 출력됩니다. 자세한 내용은 [JUnit](https://junit.org/junit5/) 및 [Cobertura](https://cobertura.github.io/cobertura/)를 참조하세요.

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

### Flake8을 사용하여 코드 린트

다음 예제에서는 `flake8`을 설치하거나 업그레이드하고 이를 사용하여 모든 파일을 린트합니다. 자세한 내용은 [Flake8](http://flake8.pycqa.org/en/latest/)을 참조하세요.

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

린팅 단계에 `continue-on-error: true`가 설정되었습니다. 이렇게 하면 린팅 단계가 성공하지 못한 경우 워크플로가 실패하지 않습니다. 모든 린팅 오류를 해결했으면 워크플로가 새 문제를 catch할 수 있도록 해당 옵션을 제거할 수 있습니다.

### tox를 사용하여 테스트 실행

{% data variables.product.prodname_actions %}를 사용하면 tox로 테스트를 실행하고 여러 작업에 작업을 분산할 수 있습니다. 특정 버전을 지정하는 대신 `PATH`에서 Python 버전을 선택하려면 `-e py` 옵션을 사용하여 tox를 호출해야 합니다. 자세한 내용은 [tox](https://tox.readthedocs.io/en/latest/)를 참조하세요.

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

## 워크플로 데이터를 아티팩트로 패키지

워크플로가 완료된 후 볼 아티팩트를 업로드할 수 있습니다. 예를 들어 로그 파일, 코어 덤프, 테스트 결과 또는 스크린샷을 저장해야 할 수 있습니다. 자세한 내용은 “[아티팩트를 사용하여 워크플로 데이터 유지](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”를 참조하세요.

다음 예제는 `upload-artifact` 작업을 사용하여 `pytest` 실행의 테스트 결과를 보관하는 방법을 보여 줍니다. 자세한 내용은 [`upload-artifact` 작업](https://github.com/actions/upload-artifact)을 참조하세요.

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

## 패키지 레지스트리에 게시

CI 테스트를 통과하면 Python 패키지를 패키지 레지스트리에 게시하도록 워크플로를 구성할 수 있습니다. 이 섹션에서는 [릴리스를 게시](/github/administering-a-repository/managing-releases-in-a-repository)할 때마다 {% data variables.product.prodname_actions %}를 사용하여 PyPI에 패키지를 업로드하는 방법을 보여 줍니다. 

이 예제에서는 두 개의 [PyPI API 토큰](https://pypi.org/help/#apitoken)을 만들어야 합니다. 비밀을 사용하여 패키지를 게시하는 데 필요한 액세스 토큰 또는 자격 증명을 저장할 수 있습니다. 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

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

시작 워크플로에 대한 자세한 내용은 [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml)를 참조하세요.
