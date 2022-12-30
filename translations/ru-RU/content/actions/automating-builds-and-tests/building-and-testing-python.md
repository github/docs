---
title: Создание и тестирование для Python
intro: Вы можете создать рабочий процесс непрерывной интеграции для сборки и тестирования проекта Python.
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409470'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве описано, как создавать, тестировать и публиковать пакет Python.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Размещенные в {% data variables.product.prodname_dotcom %} средства выполнения имеют кэш инструментов с предварительно установленным программным обеспечением, включающим в себя Python и PyPy. Вам ничего устанавливать не нужно. Полный список актуального программного обеспечения и предварительно установленных версий Python и PyPy см. в разделе [Спецификации для средств выполнения, размещенных в {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Предварительные требования

Требуются знания YAML и синтаксиса {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье со [сведениями о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Рекомендуется иметь базовое представление о Python, PyPy и pip. Дополнительные сведения см. в разделе:
- [Начало работы с Python](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [Диспетчер пакетов pip](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

## Использование начального рабочего процесса Python

{% data variables.product.prodname_dotcom %} предоставляет начальный рабочий процесс Python, который должен работать для большинства проектов Python. В этом руководстве приведены примеры, которые можно использовать для настройки начального рабочего процесса. Дополнительные сведения см. в разделе [Начальный рабочий процесс Python](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

Чтобы быстро приступить к работе, добавьте начальный рабочий процесс в каталог `.github/workflows` своего репозитория.

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

## Указание версии Python

Чтобы использовать предустановленную версию Python или PyPy в размещенном в {% data variables.product.prodname_dotcom %} средстве выполнения, используйте действие `setup-python`. Это действие находит определенную версию Python или PyPy из кэша инструментов в каждом средстве запуска и добавляет необходимые двоичные файлы в переменную `PATH`, которая сохраняется до конца задания. Если определенная предустановленная версия Python отсутствует в кэше инструментов, действие `setup-python` скачивает и настраивает соответствующую версию из репозитория [`python-versions`](https://github.com/actions/python-versions).

Применение действия `setup-python` представляет собой рекомендуемый способ использования Python с {% data variables.product.prodname_actions %}, так как он обеспечивает согласованное поведение в разных средствах выполнения и различных версиях Python. При использовании локального средства выполнения необходимо установить Python и добавить его в `PATH`. Дополнительные сведения см. в описании [действия `setup-python`](https://github.com/marketplace/actions/setup-python).

В приведенной ниже таблице описаны расположения для кэша инструментов в каждом размещенном в {% data variables.product.prodname_dotcom %} средстве выполнения.

|| Ubuntu | Mac | Windows |
|------|-------|------|----------|
|**Каталог кэша инструментов** |`/opt/hostedtoolcache/*`|`/Users/runner/hostedtoolcache/*`|`C:\hostedtoolcache\windows\*`|
|**Кэш инструментов Python**|`/opt/hostedtoolcache/Python/*`|`/Users/runner/hostedtoolcache/Python/*`|`C:\hostedtoolcache\windows\Python\*`|
|**Кэш инструментов PyPy**|`/opt/hostedtoolcache/PyPy/*`|`/Users/runner/hostedtoolcache/PyPy/*`|`C:\hostedtoolcache\windows\PyPy\*`|

Если вы используете локальное средство выполнения, его можно настроить для управления зависимостями с помощью действия `setup-python`. Дополнительные сведения см. в разделе об [использовании setup-python с локальным средством выполнения](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) в файле сведений `setup-python`.

{% data variables.product.prodname_dotcom %} поддерживает синтаксис семантического версионирования. Дополнительные сведения см. в разделах [Использование семантического версионирования](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept) и [Спецификация семантического версионирования](https://semver.org/).

### Использование нескольких версий Python

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

### Использование определенной версии Python

Вы можете настроить определенную версию Python. Например, 3.9. Кроме того, можно использовать синтаксис семантической версии, чтобы получить последний дополнительный выпуск. В этом примере используется последний дополнительный выпуск Python 3.

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

### Исключение версии

Если указать версию Python, которая недоступна, `setup-python` завершается сбоем и выводится ошибка, например `##[error]Version 3.4 with arch x64 not found`. Сообщение об ошибке содержит доступные версии.

Вы также можете использовать ключевое слово `exclude` в рабочем процессе, если существует конфигурация Python, которую не нужно запускать. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).

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

### Использование версии Python по умолчанию

Мы рекомендуем использовать `setup-python` для настройки версии Python, используемой в рабочих процессах, так как это помогает сделать зависимости явными. Если вы не используете`setup-python`, при вызове `python` в любой оболочке используется версия Python по умолчанию, заданная в `PATH`. Версия Python по умолчанию зависит от конкретных размещенных в {% data variables.product.prodname_dotcom %} средств выполнения, что может привести к непредвиденным изменениям или использованию более ранней версии по сравнению с ожидаемой.

| Размещенное в {% data variables.product.prodname_dotcom %} средство выполнения | Описание |
|----|----|
| Ubuntu | Средства выполнения Ubuntu имеют несколько версий системного Python, установленных в `/usr/bin/python` и `/usr/bin/python3`. Версии Python, упакованные вместе с Ubuntu, являются дополнением к версиям, которые {% data variables.product.prodname_dotcom %} устанавливаем в кэше инструментов. |
| Windows | За исключением версий Python, которые находятся в кэше инструментов, Windows не содержит эквивалентной версии системного Python. Чтобы обеспечить согласованную работу с другими средствами выполнения и обеспечить использование Python в исходном виде без действия `setup-python`, {% data variables.product.prodname_dotcom %} добавляет несколько версий из кэша инструментов в `PATH`.|
| macOS | Средства выполнения macOS имеют несколько установленных версий системного Python в дополнение к версиям, входящим в состав кэша инструментов. Версии системного Python находятся в каталоге `/usr/local/Cellar/python/*`. |

## Установка зависимостей

Для размещенных в {% data variables.product.prodname_dotcom %} средств выполнения установлен диспетчер пакетов pip. Вы можете использовать pip для установки зависимостей из реестра пакетов PyPI перед созданием и тестированием кода. Например, приведенный ниже код YAML устанавливает или обновляет установщик пакетов `pip` и пакеты `setuptools` и `wheel`.

{% ifversion actions-caching %}Можно также кэшировать зависимости, чтобы ускорить рабочий процесс. Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).{% endif %}

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

### Файл требований

Типичным следующим шагом после обновления `pip` является установка зависимостей из *requirements.txt*. Дополнительные сведения см. в описании [pip](https://pip.pypa.io/en/stable/cli/pip_install/#example-requirements-file).

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

### Кэширование зависимостей

Можно кэшировать и восстанавливать зависимости с помощью [действия`setup-python`](https://github.com/actions/setup-python).

В следующем примере кэшируются зависимости для pip.

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

По умолчанию действие `setup-python` ищет файл зависимостей (`requirements.txt` для pip, `Pipfile.lock` для pipenv или `poetry.lock` для poetry) во всем репозитории. Дополнительные сведения см. в разделе [Кэширование зависимостей пакетов](https://github.com/actions/setup-python#caching-packages-dependencies) в файле README `setup-python`.

Если у вас есть особые требования или вам нужно управлять кэшированием более детально, можно использовать [действие `cache`](https://github.com/marketplace/actions/cache). Pip кэширует зависимости в разных расположениях в зависимости от операционной системы средства выполнения. Путь, по которому требуется выполнить кэширование, может отличаться от приведенного выше примера Ubuntu в зависимости от используемой операционной системы. Дополнительные сведения см. в [примерах кэширования Python](https://github.com/actions/cache/blob/main/examples.md#python---pip) в репозитории действия `cache`.

{% endif %}

## Тестирование кода

Вы можете использовать те же команды, которые используются для создания и тестирования кода в локальной среде.

### Тестирование с помощью pytest и pytest-cov

В этом примере устанавливаются или обновляются `pytest` и `pytest-cov`. Затем выполняются тесты, выходные данные выводятся в формате JUnit, а результаты по объему протестированного кода выводятся в Cobertura. Дополнительные сведения см. в описании [JUnit](https://junit.org/junit5/) и [Cobertura](https://cobertura.github.io/cobertura/).

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

### Использование Flake8 для анализа кода

В следующем примере выполняется установка или обновление `flake8` и его использование для анализа кода всех файлов. Дополнительные сведения см. в описании [Flake8](http://flake8.pycqa.org/en/latest/).

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

На шаге анализа кода задан параметр `continue-on-error: true`. Это предотвратит сбой рабочего процесса, если шаг анализа кода завершится неудачно. Когда вы устраните все ошибки анализа кода, можете удалить этот параметр, чтобы рабочий процесс регистрировал новые проблемы.

### Выполнение тестов с помощью tox

В {% data variables.product.prodname_actions %}можно выполнять тесты с помощью tox и распределять работу между несколькими заданиями. Чтобы выбрать версию Python в `PATH`, а не указывать конкретную версию, нужно вызвать tox с использованием `-e py`. Дополнительные сведения см. в описании [tox](https://tox.readthedocs.io/en/latest/).

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

## Упаковка данных рабочего процесса в виде артефактов

Вы можете отправить артефакты для просмотра после завершения рабочего процесса. Например, может потребоваться сохранить файлы журналов, основные дампы, результаты теста или снимки экрана. Дополнительные сведения см. в разделе [Сохранение данных рабочего процесса с помощью артефактов](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

В следующем примере показано, как использовать действие `upload-artifact` для архивации результатов теста при выполнении `pytest`. Дополнительные сведения см. в описании [действия `upload-artifact`](https://github.com/actions/upload-artifact).

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

## Публикация в реестрах пакетов

Вы можете настроить рабочий процесс для публикации пакета Python в реестре пакетов после прохождения тестов CI. В этом разделе показано, как использовать {% data variables.product.prodname_actions %} для отправки пакета в PyPI при каждой [публикации выпуска](/github/administering-a-repository/managing-releases-in-a-repository). 

В этом примере потребуется создать два [маркера API PyPI](https://pypi.org/help/#apitoken). Вы можете использовать секреты для хранения маркеров доступа или учетных данных, необходимых для публикации пакета. Дополнительные сведения см. в статье «[Создание и использование зашифрованных секретов](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)».

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

Дополнительные сведения о начальном рабочем процессе см. в описании [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
