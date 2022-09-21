---
title: Crear y probar en Python
intro: Puedes crear un flujo de trabajo de integración continua (CI) para construir y probar tu proyecto de Python.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409471'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo construir, probar y publicar un paquete de Python.

Los ejecutores alojados en {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} tienen una memoria caché de herramientas con software preinstalado, que incluye Python y PyPy. ¡No tienes que instalar nada! A fin de obtener una lista completa de software actualizada y las versiones preinstaladas de Python y PyPy, consulte "[Especificaciones de ejecutores alojados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Requisitos previos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para más información, vea "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Te recomendamos que tengas una comprensión básica de Python, PyPy y pip. Para más información, consulte:
- [Introducción a Python](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [Administrador de paquetes pip](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

## Utilizar el flujo de trabajo inicial de Python

{% data variables.product.prodname_dotcom %} proporciona un flujo de trabajo inicial de Python que debería funcionar para la mayoría de los proyectos de Python. Esta guía incluye ejemplos que puedes utilizar para personalizar los flujos de trabajo iniciales. Para obtener más información, consulte el [flujo de trabajo de inicio de Python](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

Para comenzar rápidamente, agregue el flujo de trabajo de inicio al directorio `.github/workflows` del repositorio.

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

## Especificar una versión de Python

Para usar una versión preinstalada de Python o PyPy en un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, use la acción `setup-python`. Esta acción busca una versión específica de Python o PyPy en la caché de herramientas de cada ejecutor y agrega los archivos binarios necesarios a `PATH`, que se conserva para el resto del trabajo. Si una versión específica de Python no está preinstalada en la memoria caché de herramientas, la acción `setup-python` descargará y configurará la versión adecuada del repositorio [`python-versions`](https://github.com/actions/python-versions).

El uso de la acción `setup-python` es la forma recomendada de usar Python con {% data variables.product.prodname_actions %}, ya que garantiza que tenga lugar un comportamiento uniforme en los distintos ejecutores y versiones de Python. Si va a usar un ejecutor autohospedado, debe instalar Python y agregarlo a `PATH`. Para más información, vea la [acción `setup-python`](https://github.com/marketplace/actions/setup-python).

La tabla que aparece a continuación describe las ubicaciones de la caché de herramientas en cada ejecutor alojado {% data variables.product.prodname_dotcom %}.

|| Ubuntu | Mac | Windows |
|------|-------|------|----------|
|**Directorio de caché de herramientas** |`/opt/hostedtoolcache/*`|`/Users/runner/hostedtoolcache/*`|`C:\hostedtoolcache\windows\*`|
|**Caché de herramientas de Python**|`/opt/hostedtoolcache/Python/*`|`/Users/runner/hostedtoolcache/Python/*`|`C:\hostedtoolcache\windows\Python\*`|
|**Caché de herramientas de PyPy**|`/opt/hostedtoolcache/PyPy/*`|`/Users/runner/hostedtoolcache/PyPy/*`|`C:\hostedtoolcache\windows\PyPy\*`|

Si está utilizando un ejecutor autohospedado, puede configurarlo para utilizar la acción `setup-python` para administrar sus dependencias. Para obtener más información, consulte [uso de setup-python con un ejecutor autohospedado](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) en el archivo README de `setup-python`.

{% data variables.product.prodname_dotcom %} admite la sintaxis de control de versiones semántico. Para obtener más información, consulte "[Uso del control de versiones semántico](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)" y "[Especificación del control de versiones semántico](https://semver.org/)".

### Usar múltiples versiones de Python

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

### Usar una versión de Python específica

Puedes configurar una versión específica de Python. Por ejemplo, 3.9. Como alternativa, puedes utilizar una sintaxis de versión semántica para obtener el último lanzamiento menor. En este ejemplo se usa el último lanzamiento menor de Python 3.

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

### Excluir una versión

Si especifica una versión de Python que no esté disponible, se produce un error en `setup-python` como: `##[error]Version 3.4 with arch x64 not found`. El mensaje de error incluye las versiones disponibles.

También puede usar la palabra clave `exclude` en el flujo de trabajo si hay una configuración de Python que no desea ejecutar. Para obtener más información, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)".

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

### Usar la versión de Python predeterminada

Recomendamos usar `setup-python` para configurar la versión de Python que se usa en sus flujos de trabajo porque permite que las dependencias sean explícitas. Si no usa `setup-python`, la versión predeterminada de Python establecida en `PATH` se usa en cualquier shell cuando llama a `python`. La versión predeterminada de Python varía entre los ejecutores alojados {% data variables.product.prodname_dotcom %}, que pueden causar cambios inesperados o usar una versión anterior a la esperada.

| Ejecutor alojado de {% data variables.product.prodname_dotcom %} | Descripción |
|----|----|
| Ubuntu | Los ejecutores de Ubuntu tienen varias versiones del sistema Python instaladas en `/usr/bin/python` y `/usr/bin/python3`. Las versiones de Python que vienen empaquetadas con Ubuntu se suman a las versiones que {% data variables.product.prodname_dotcom %} instala en la caché de herramientas. |
| Windows | Excluyendo las versiones de Python que están en la caché de herramientas, Windows no se envía con una versión equivalente de Python del sistema. Para mantener un comportamiento uniforme con otros ejecutores y para permitir que Python se use de forma integrada sin la acción `setup-python`, {% data variables.product.prodname_dotcom %} agrega algunas versiones desde la caché de herramientas a `PATH`.|
| macOS | Los ejecutores de macOS tienen más de una versión de Python del sistema instalada, además de las versiones que son parte de la caché de las herramientas. Las versiones de Python del sistema se encuentran en el directorio `/usr/local/Cellar/python/*`. |

## Instalación de dependencias

Los ejecutores alojados {% data variables.product.prodname_dotcom %} tienen instalado el administrador del paquete pip. Puedes usar pip para instalar dependencias desde el registro del paquete de PyPI antes de construir y probar tu código. Por ejemplo, el YAML siguiente instala o actualiza el instalador de paquetes `pip` y los paquetes `setuptools` y `wheel`.

{% ifversion actions-caching %}También puedes almacenar en caché las dependencias para acelerar el flujo de trabajo. Para obtener más información, consulta "[Almacenamiento en caché de dependencias para acelerar los flujos de trabajo](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".{% endif %}

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

### Archivo de requisitos

Después de actualizar `pip`, el siguiente paso típico consiste en instalar dependencias desde *requirements.txt*. Para obtener más información, consulte [pip](https://pip.pypa.io/en/stable/cli/pip_install/#example-requirements-file).

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

### Dependencias de almacenamiento en caché

Puedes almacenar en caché y restaurar las dependencias mediante la [acción `setup-python`](https://github.com/actions/setup-python).

El siguiente ejemplo guarda las dependencias en caché para pip.

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

De manera predeterminada, la acción `setup-python` busca el archivo de dependencias (`requirements.txt` para pip, `Pipfile.lock` para pipenvo o `poetry.lock` para poetry) en todo el repositorio. Para obtener más información, consulta "[Almacenamiento en caché de dependencias de paquetes](https://github.com/actions/setup-python#caching-packages-dependencies)" en el archivo README de `setup-python`.

Si tiene una necesidad específica o necesita controles más precisos para el almacenamiento en caché, puede usar la [acción `cache`](https://github.com/marketplace/actions/cache). Pip almacena en caché las dependencias en diferentes ubicaciones, en función del sistema operativo del ejecutor. La ruta que necesitarás para almacenar en caché puede diferir del ejemplo de Ubuntu que se muestra anteriormente, según el sistema operativo que uses. Para obtener más información, consulte [Ejemplos de almacenamiento en caché de Python](https://github.com/actions/cache/blob/main/examples.md#python---pip) en el repositorio de acciones de `cache`.

{% endif %}

## Probar el código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

### Pruebas con pytest y pytest-cov

En este ejemplo se instalan o actualizan `pytest` y `pytest-cov`. A continuación, se ejecutan y se emiten pruebas en formato JUnit, mientras que los resultados de la cobertura de código se emiten en Cobertura. Para obtener más información, consulte [JUnit](https://junit.org/junit5/) y [Cobertura](https://cobertura.github.io/cobertura/).

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

### Usar Flake8 para el código lint

En el ejemplo siguiente se instala o actualiza `flake8` y se usa para ejecutar el linting en todos los archivos. Para obtener más información, consulte [Flake8](http://flake8.pycqa.org/en/latest/).

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

El paso de linting tiene establecido `continue-on-error: true`. Esto prevendrá que el flujo de trabajo falle si el paso de limpieza de código no tiene éxito. Una vez que hayas abordado todos los errores de limpieza de código, puedes eliminar esta opción para que el flujo de trabajo atrape propuestas nuevas.

### Ejecutar pruebas con tox

Con {% data variables.product.prodname_actions %}, puedes ejecutar pruebas con tox y repartir el trabajo a través de múltiples trabajos. Deberá invocar tox mediante la opción `-e py` para elegir la versión de Python en `PATH` lugar de especificar una versión concreta. Para obtener más información, consulte [tox](https://tox.readthedocs.io/en/latest/).

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

## Empaquetar datos de flujo de trabajo como artefactos

Puedes cargar artefactos para ver después de que se complete un flujo de trabajo. Por ejemplo, es posible que debas guardar los archivos de registro, los vaciados de memoria, los resultados de las pruebas o las capturas de pantalla. Para más información, vea "[Conservación de datos de flujo de trabajo mediante artefactos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

En el ejemplo siguiente se muestra cómo puede usar la acción `upload-artifact` para archivar los resultados de la prueba después de ejecutar `pytest`. Para más información, vea la [acción `upload-artifact`](https://github.com/actions/upload-artifact).

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

## Publicar en registros de paquetes

Puedes configurar tu flujo de trabajo para publicar tu paquete de Python a un registro de paquetes una vez que pasen tus pruebas de IC. En esta sección se muestra cómo puede usar {% data variables.product.prodname_actions %} para cargar el paquete en PyPI cada vez que [publique una versión](/github/administering-a-repository/managing-releases-in-a-repository). 

En este ejemplo, deberá crear dos [tokens de API de PyPI](https://pypi.org/help/#apitoken). Puedes utilizar secretos para almacenar los tokens de acceso o las credenciales que se necesitan publicar en tu paquete. Para más información, vea ["Creación y uso de secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

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

Para obtener más información sobre el flujo de trabajo de inicio, consulte [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
