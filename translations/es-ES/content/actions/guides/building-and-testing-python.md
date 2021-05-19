---
title: Crear y probar en Python
intro: Puedes crear un flujo de trabajo de integración continua (CI) para construir y probar tu proyecto de Python.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-python-with-github-actions
  - /actions/language-and-framework-guides/using-python-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CI
  - Python
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

Esta guía te muestra cómo construir, probar y publicar un paquete de Python.

{% if currentVersion == "github-ae@latest" %} Consulta la sección "[Crear imágenes personalizadas](/actions/using-github-hosted-runners/creating-custom-images)" para obtener las instrucciones para asegurarte de que tu {% data variables.actions.hosted_runner %} tiene instalado el software necesario.
{% else %}Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen una caché de herramientas con un software preinstalado que incluye Python y PyPy. ¡No tienes que instalar nada! Para obtener una lista completa de software actualizado y de las versiones preinstaladas de Python y PyPy, consulta la sección "[Especificaciones para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

### Prerrequisitos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Te recomendamos que tengas una comprensión básica de Python, PyPy y pip. Para obtener más información, consulta:
- [Comenzar con Python](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [Administrador de paquetes pip](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

### Comenzar con la plantilla de flujo de trabajo de Python

{% data variables.product.prodname_dotcom %} proporciona una plantilla de flujo de trabajo de Python que debería funcionar para la mayoría de los proyectos de Python. Esta guía incluye ejemplos que puedes usar para personalizar la plantilla. Para obtener más información, consulta la [Plantilla de flujo de trabajo de Python](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

Para comenzar rápidamente, agrega la plantilla al directorio `.github/workflows` de tu repositorio.

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
          # exit-zero treats all errors as warnings. The GitHub editor is 127 chars wide
          flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
      - name: Test with pytest
        run: |
          pytest
```
{% endraw %}

### Especificar una versión de Python

Para usar una versión preinstalada de Python o PyPy en un ejecutor alojado {% data variables.product.prodname_dotcom %}, usa la acción `setup-python`. Esta acción encuentra una versión específica de Python o PyPy desde la caché de herramientas en cada ejecutor y agrega los binarios necesarios para `PATH`, que persiste durante el resto del trabajo. Si una versión específica de Python no está pre-instalada en el cache de herramientas, la acción `setup-python` se descargará y configurará la versión adecuada desde el repositorio <a hrhttps://github.com/actions/python-versions">`python-versions`</a>.

Usar el `setup-action` es la forma recomendada de usar Python con {% data variables.product.prodname_actions %} porque garantiza un comportamiento consistente a través de diferentes ejecutores y diferentes versiones de Python. Si estás usando un ejecutor alojado, debes instalar Python y añadirlo a `PATH`. Para obtener más información, consulta la acción [`setup-python`](https://github.com/marketplace/actions/setup-python).

La tabla que aparece a continuación describe las ubicaciones de la caché de herramientas en cada ejecutor alojado {% data variables.product.prodname_dotcom %}.

|                                         | Ubuntu                          | Mac                                      | Windows                                    |
| --------------------------------------- | ------------------------------- | ---------------------------------------- | ------------------------------------------ |
| **Directorio de caché de herramientas** | `/opt/hostedtoolcache/*`        | `/Users/runner/hostedtoolcache/*`        | `C:\hostedtoolcache\windows\ *`         |
| **Caché de herramientas de Python**     | `/opt/hostedtoolcache/Python/*` | `/Users/runner/hostedtoolcache/Python/*` | `C:\hostedtoolcache\windows\Python\ *` |
| **Caché de la herramienta de PyPy**     | `/opt/hostedtoolcache/PyPy/*`   | `/Users/runner/hostedtoolcache/PyPy/*`   | `C:\hostedtoolcache\windows\PyPy\ *`   |

Si estás utilizando un ejecutor auto-hospedado, puedes configurarlo para utilizar la acción `setup-python` para administrar tus dependencias. Para obtener más información, consulta la sección [utilizar setup-python con un ejecutor auto-hospedado](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) en el README de `setup-python`.

{% data variables.product.prodname_dotcom %} admite la sintaxis de control de versiones semántico. Para obtener más información, consulta "[Usar versiones semánticas](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)" y "[Especificación de control de versiones semántico](https://semver.org/)."

#### Usar múltiples versiones de Python

{% raw %}
```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      # Puedes usar las versiones de PyPy en python-version.
      # For example, pypy2 and pypy3
      matrix:
        python-version: [2.7, 3.5, 3.6, 3.7, 3.8]

    steps:
      - uses: actions/checkout@v2
      - name: Set up Python ${{ matrix.python-version }}
        uses: actions/setup-python@v2
        with:
          python-version: ${{ matrix.python-version }}
      # You can test your matrix by printing the current Python version
      - name: Display Python version
        run: python -c "import sys; print(sys.version)"
```
{% endraw %}

#### Usar una versión de Python específica

Puedes configurar una versión específica de Python. Por ejemplo, 3.8. Como alternativa, puedes utilizar una sintaxis de versión semántica para obtener el último lanzamiento menor. En este ejemplo se usa el último lanzamiento menor de Python 3.

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

#### Excluir una versión

Si especificas una versión de Python que no está disponible, `setup-python` falla con un error como: `##[error]Versión 3.4 con Arch x64 not found`. El mensaje de error incluye las versiones disponibles.

También puedes usar la palabra clave `exclude` en tu flujo de trabajo si hay una configuración de Python que no deseas ejecutar. Para obtener más información, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)".

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

#### Usar la versión de Python predeterminada

Recomendamos usar `setup-python` para configurar la versión de Python que se usa en tus flujos de trabajo porque ayuda a hacer que tus dependencias sean explícitas. Si no usas `setup-python`, la versión predeterminada de Python establecida en `PATH` se usa en cualquier shell cuando llamas `python`. La versión predeterminada de Python varía entre los ejecutores alojados {% data variables.product.prodname_dotcom %}, que pueden causar cambios inesperados o usar una versión anterior a la esperada.

| Ejecutor alojado {% data variables.product.prodname_dotcom %} | Descripción                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ubuntu                                                        | Los ejecutores de Ubuntu tienen múltiples versiones de Python del sistema instaladas bajo `/usr/bin/python` y `/usr/bin/python3`. Las versiones de Python que vienen empaquetadas con Ubuntu se suman a las versiones que {% data variables.product.prodname_dotcom %} instala en la caché de herramientas.                                                                                                         |
| Windows                                                       | Excluyendo las versiones de Python que están en la caché de herramientas, Windows no se envía con una versión equivalente de Python del sistema. Para mantener un comportamiento consistente con otros ejecutores y para permitir que Python se use de forma integrada sin la acción `setup-python`, {% data variables.product.prodname_dotcom %} agrega algunas versiones desde la caché de herramientas a `PATH`. |
| macOS                                                         | Los ejecutores de macOS tienen más de una versión de Python del sistema instalada, además de las versiones que son parte de la caché de las herramientas. Las versiones de Python del sistema se encuentran en el directorio `/usr/local/Cellar/python/*`.                                                                                                                                                          |

### Instalar dependencias

Los ejecutores alojados {% data variables.product.prodname_dotcom %} tienen instalado el administrador del paquete pip. Puedes usar pip para instalar dependencias desde el registro del paquete de PyPI antes de construir y probar tu código. Por ejemplo, el YAML que aparece a continuación instala o actualiza el instalador del paquete `pip` y los paquetes `setuptools` y `wheel`.

Cuando utilizas ejecutores hospedados en {% data variables.product.prodname_dotcom %}, también puedes guardar las dependencias en el caché para acelerar tu flujo de trabajo. Para obtener más información, consulta la sección "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Almacenar las dependencias en caché para agilizar los flujos de trabajo</a>".

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

#### Archivo de requisitos

Después de actualizar `pip`, un siguiente paso típico es instalar dependencias desde *requirements.txt*.

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

#### Dependencias de almacenamiento en caché

Cuando utilizas ejecutores hospedados en {% data variables.product.prodname_dotcom %}, puedes guardar las dependencias pip en el caché utilizando una clave única y restaurar las dependencias cuando ejecutes flujos de trabajo subsecuentes, utilizando la acción [`cache`](https://github.com/marketplace/actions/cache). Para obtener más información, consulta la sección "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Almacenar las dependencias en caché para agilizar los flujos de trabajo</a>".

Pip almacena en caché las dependencias en diferentes ubicaciones, en función del sistema operativo del ejecutor. La ruta que necesitarás para almacenar en caché puede diferir del ejemplo de Ubuntu que aparece a continuación, según el sistema operativo que uses. Para obtener más información, consulta los [Ejemplos de almacenamiento en caché de Python](https://github.com/actions/cache/blob/main/examples.md#python---pip).

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

**Nota:** Dependiendo de la cantidad de dependencias, puede ser más rápido usar la caché de dependencias. Los proyectos con muchas dependencias de gran tamaño deberían ver un aumento del rendimiento, ya que reduce el tiempo necesario para la descarga. Los proyectos con menos dependencias pueden no ver un aumento significativo del rendimiento e incluso pueden ver una ligera disminución debido a la manera en que pip instala las dependencias almacenadas en caché. El rendimiento varía de un proyecto a otro.

{% endnote %}

### Probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

#### Pruebas con pytest y pytest-cov

Este ejemplo instala o actualiza `pytest` y `pytest-cov`. A continuación, se ejecutan y se emiten pruebas en formato JUnit, mientras que los resultados de la cobertura de código se emiten en Cobertura. Para obtener más información, consulta [JUnit](https://junit.org/junit5/) y [Cobertura](https://cobertura.github.io/Cobertura/).

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

#### Usar Flake8 para el código lint

En el siguiente ejemplo se instala o actualiza `flake8` y se usa para limpiar todos los archivos. Para obtener más información, consulta [Flake8](http://flake8.pycqa.org/en/latest/).

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

#### Ejecutar pruebas con tox

Con {% data variables.product.prodname_actions %}, puedes ejecutar pruebas con tox y repartir el trabajo a través de múltiples trabajos. Necesitarás invocar tox utilizando la opción `-e py` para elegir la versión de Python en tu `PATH`, en lugar de especificar una versión específica. Para obtener más información, consulta [tox](https://tox.readthedocs.io/en/latest/).

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

### Empaquetar datos de flujo de trabajo como artefactos

Puedes cargar artefactos para ver después de que se complete un flujo de trabajo. Por ejemplo, es posible que debas guardar los archivos de registro, los vaciados de memoria, los resultados de las pruebas o las capturas de pantalla. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

En el siguiente ejemplo se muestra cómo puedes usar la acción `upload-artifact` para archivar los resultados de las pruebas de ejecución `pytest`. Para obtener más información, consulta la acción [`upload-artifact`](https://github.com/actions/upload-artifact).

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

### Publicar en registros de paquetes

Puedes configurar tu flujo de trabajo para que publique tu paquete de Python en cualquier registro de paquete que desees cuando pasen tus pruebas de CI.

Puedes almacenar cualquier token de acceso o credenciales que se necesiten para publicar tu paquete utilizando secretos. En el siguiente ejemplo, se crea y se publica un paquete para PyPI mediante `twine` y `dist`. Para obtener más información, consulta "[Crear y usar secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

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

Para obtener más información sobre la plantilla de flujo de trabajo, consulta a [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
