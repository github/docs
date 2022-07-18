---
title: Criar e testar o Python
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto Python.
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
shortTitle: Criar & testar o Python
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar, testar e publicar um pacote no Python.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
Os executores hospedados em {% else %} {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com software pré-instalado, que inclui Python e PyPy. Você não precisa instalar nada! Para obter uma lista completa do software atualizado e das versões pré-instaladas do Python e PyPy, consulte "[Especificações para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Recomendamos que você tenha um entendimento básico do Python, PyPy e pip. Para obter mais informações, consulte:
- [Primeiros passos com o Python](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [Gerenciador de pacotes do Pip](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

## Usando o fluxo de trabalho inicial do Python

{% data variables.product.prodname_dotcom %} fornece um fluxo de trabalho inicial do Python que deve funcionar na maioria dos projetos do Python. Este guia inclui exemplos que você pode usar para personalizar o fluxo de trabalho inicial. Para obter mais informações, consulte o [fluxo de trabalho inicial do Python](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

Para iniciar rapidamente, adicione o fluxo de trabalho inicial para o diretório `.github/workflows` do seu repositório.

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

## Especificar uma versão do Python

Para usar uma versão pré-instalada do Python ou do PyPy em um executor hospedado em {% data variables.product.prodname_dotcom %}, use a ação `setup-python`. Esta ação encontra uma versão específica do Python ou do PyPy na cache das ferramenatas em cada executor e adiciona os binários necessários ao `PATH`, que persiste para o restante do trabalho. Se uma versão específica do Python não for pré-instalada na cache de ferramentas, a `setup-python` ação fará o download e irá configurar a versão apropriada do repositório [`python-versions`](https://github.com/actions/python-versions).

Using the `setup-action` is the recommended way of using Python with {% data variables.product.prodname_actions %} because it ensures consistent behavior across different runners and different versions of Python. Se você estiver usando um executor auto-hospedado, você deverá instalar Python e adicioná-lo ao `PATH`. Para obter mais informações, consulte a ação [`setup-python`](https://github.com/marketplace/actions/setup-python).

A tabela abaixo descreve os locais para o armazenamento de ferramentas em cada executor hospedado em {% data variables.product.prodname_dotcom %}.

|                                      | Ubuntu                          | Mac                                      | Windows                                    |
| ------------------------------------ | ------------------------------- | ---------------------------------------- | ------------------------------------------ |
| **Diretório da cache da ferramenta** | `/opt/hostedtoolcache/*`        | `/Users/runner/hostedtoolcache/*`        | `C:\hostedtoolcache\windows\*`         |
| **Cache da ferramenta do Python**    | `/opt/hostedtoolcache/Python/*` | `/Users/runner/hostedtoolcache/Python/*` | `C:\hostedtoolcache\windows\Python\*` |
| **Cache da ferramenta do PyPy**      | `/opt/hostedtoolcache/PyPy/*`   | `/Users/runner/hostedtoolcache/PyPy/*`   | `C:\hostedtoolcache\windows\PyPy\*`   |

Se você estiver usando um executor auto-hospedado, você poderá configurá-lo para usar a ação `setup-python` para gerenciar suas dependências. Para obter mais informações, consulte [usando o setup-python com um executor auto-hospedado](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) na README do `setup-python`.

O {% data variables.product.prodname_dotcom %} é compatível com a sintaxe semântica de versionamento. Para obter mais informações, consulte "[Usar o versionamento semântico](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)" e "[Especificação do versionamento semântico](https://semver.org/)".

### Usar várias versões do Python

```yaml{:copy}
nome: Pacote Python

em: [push]

trabalhos:
  criar:

    runs-on: ubuntu-latest
    estratégia:
      # Você pode usar as versões do PyPy em python-version.
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

### Usar uma versão específica do Python

Você pode configurar uma versão específica do python. Por exemplo, 3,9. Como alternativa, você pode usar a sintaxe da versão semântica para obter a última versão secundária. Este exemplo usa a última versão secundária do Python 3.

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

### Excluir uma versão

Se especificar uma versão do Python que estiver indisponível, `setup-python` ocorrerá uma falha com um erro como: `##[error]Version 3.4 with arch x64 not found`. A mensagem de erro inclui as versões disponíveis.

Também é possível usar a palavra-chave `excluir` no seu fluxo de trabalho se houver uma configuração do Python que você não deseja executar. Para obter mais informações, consulte a sintaxe "[ para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)."

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

### Usar a versão padrão do Python

Recomendamos usar `setup-python` para configurar a versão do Python usada nos seus fluxos de trabalho, porque isso ajuda a deixar as suas dependências explícitas. Se você não usar `setup-python`, a versão padrão do Python definida em `PATH` será usada em qualquer shell quando você chamar `python`. A versão-padrão do Python varia entre executores hospedados no {% data variables.product.prodname_dotcom %}, o que pode causar mudanças inesperadas ou usar uma versão mais antiga do que o esperado.

| Executor hospedado em{% data variables.product.prodname_dotcom %} | Descrição                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ubuntu                                                            | Os executores do Ubuntu têm várias versões do sistema do Python instaladas em `/usr/bin/python` e `/usr/bin/python3`. As versões do Python que vêm empacotadas com o Ubuntu são adicionais às versões que o {% data variables.product.prodname_dotcom %} instala na cache das ferramentas.                                                                                                               |
| Windows                                                           | Excluindo as versões do Python que estão na cache de ferramentas, o Windows não é compatível com uma versão equivalente do sistema do Python. Para manter um comportamento consistente com outros executores e permitir que o Python seja usado de forma inovadora sem a ação `setup-python` , {% data variables.product.prodname_dotcom %} adiciona algumas versões da cache das ferramentas ao `PATH`. |
| macOS                                                             | Os executores do macOS têm mais de uma versão do sistema do Python instalada, além das versões que fazem parte da cache de ferramentas. As versões do sistema do Python estão localizadas no diretório `/usr/local/Cellar/python/*`.                                                                                                                                                                     |

## Instalar dependências

Os executores hospedados em {% data variables.product.prodname_dotcom %} têm instalado o gerenciador do pacote pip. Você pode usar o pip para instalar dependências do registro de pacotes do PyPI antes de criar e testar o seu código. Por exemplo, o YAML abaixo instala ou atualiza o instalador de pacotes `pip` e as os pacotes `setuptools` e `wheel`.

{% ifversion actions-caching %}Você também pode armazenar dependências em cache para acelerar seu fluxo de trabalho. Para obter mais informações, consulte "[Armazenando as dependências em cache para acelerar fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".{% endif %}

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

### Arquivo de requisitos

Depois de atualizar o `pip`, um o próximo passo típico é instalar as dependências de *requirements.txt*. Para obter mais informações, consulte [pip](https://pip.pypa.io/en/stable/cli/pip_install/#example-requirements-file).

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

### Memorizar dependências

Você pode armazenar em cache e restaurar as dependências usando a ação [`setup-python`](https://github.com/actions/setup-python).

O exemplo a seguir armazena dependências para pip.

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

Por padrão, a ação `setup-python` busca o arquivo de dependência (`requirements.txt` para pip `Pipfile.lock` para pipenv ou `poetry.lock` para poetry) em todo o repositório. Para obter mais informações, consulte "[Armazenando em cache as dependências de pacotes](https://github.com/actions/setup-python#caching-packages-dependencies)" no README do `setup-python`.

Se você tiver um requisito personalizado ou precisar de melhores controles para cache, você poderá usar a ação [`cache`](https://github.com/marketplace/actions/cache). O Pip armazena dependências em diferentes locais, dependendo do sistema operacional do executor. O caminho que você precisa efetuar o armazenamento em cache pode ser diferente do exemplo do Ubuntu acima, dependendo do sistema operacional que você usa. Para obter mais informações, consulte [Exemplos de armazenamento em cache do Python](https://github.com/actions/cache/blob/main/examples.md#python---pip) no repositório de ação `cache`.

{% endif %}

## Testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código.

### Testar com pytest e pytest-cov

Este exemplo instala ou atualiza `pytest` e `pytest-cov`. Em seguida, os testes são executados e retornados no formato JUnit enquanto os resultados da cobertura do código são emitidos em Cobertura. Para obter mais informações, consulte [JUnit](https://junit.org/junit5/) e [Cobertura](https://cobertura.github.io/cobertura/).

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

### UsarFlake8 para código lint

O exemplo a seguir instala ou atualiza o `flake8` e o usa para limpar todos os arquivos. Para obter mais informações, consulte [Flake8](http://flake8.pycqa.org/en/latest/).

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

O passo de limpeza de código foi configurado com `continue-on-error: true`. Isto impedirá que o fluxo de trabalho falhe se a etapa de limpeza de código não for bem-sucedida. Após corrigir todos os erros de limpeza de código, você poderá remover essa opção para que o fluxo de trabalho capture novos problemas.

### Executar testes com tox

Com {% data variables.product.prodname_actions %}, você pode executar testes com tox e distribuir o trabalho para vários trabalhos. Você precisará invocar tox usando a opção `-e py` para escolher a versão do Python no seu `PATH`, em vez de especificar uma versão específica. Para obter mais informações, consulte [tox](https://tox.readthedocs.io/en/latest/).

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

## Empacotar dados do fluxo de trabalho como artefatos

Você pode fazer o upload de artefatos para visualização após a conclusão de um fluxo de trabalho. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

O exemplo a seguir demonstra como você pode usar a ação `upload-artefact` para arquivar os resultados de teste da execução do `pytest`. Para obter mais informações, consulte a ação <[`upload-artifact`](https://github.com/actions/upload-artifact).

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

## Publicar nos registros do pacote

Você pode configurar seu fluxo de trabalho para publicar seu pacote do Python em um pacote de registro assim que seu CI teste passar. Esta seção demonstra como você pode usar {% data variables.product.prodname_actions %} para fazer o upload do seu pacote para o PyPI toda vez que [publicar uma versão](/github/administering-a-repository/managing-releases-in-a-repository).

Para este exemplo, você deverá criar dois [tokens da API do PyPI](https://pypi.org/help/#apitoken). Você pode usar segredos para armazenar os tokens de acesso ou credenciais necessárias para publicar o seu pacote. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

Para obter mais informações sobre o fluxo de trabalho inicial, consulte [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
