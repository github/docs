---
title: Criar e testar o Python
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto Python.
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

### Introdução

Este guia mostra como criar, testar e publicar um pacote no Python.

{% if currentVersion == "github-ae@latest" %} Para obter instruções sobre como ter certeza de que o {% data variables.actions.hosted_runner %} possui o software necessário instalado, consulte "[Criar imagens personalizadas](/actions/using-github-hosted-runners/creating-custom-images)".
Os executores hospedados em {% else %} {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com software pré-instalado, que inclui Python e PyPy. Você não precisa instalar nada! Para obter uma lista completa do software atualizado e das versões pré-instaladas do Python e PyPy, consulte "[Especificações para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

### Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Recomendamos que você tenha um entendimento básico do Python, PyPy e pip. Para obter mais informações, consulte:
- [Primeiros passos com o Python](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [Gerenciador de pacotes do Pip](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

### Introdução com o modelo do fluxo de trabalho do Python

O {% data variables.product.prodname_dotcom %} fornece um modelo de fluxo de trabalho do Python que deve funcionar na maioria dos projetos Python. Este guia inclui exemplos que você pode usar para personalizar o modelo. Para obter mais informações, consulte o [modelo de fluxo de trabalho do Python](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

Para iniciar rapidamente, adicione o modelo ao diretório `.github/workflows` do repositório.

{% raw %}
```yaml{:copy}
nome: Pacote do Python

em: [push]

trabalhos:
  criar:

    runs-on: ubuntu-latest
    estratégia:
      matriz:
        python-version: [2.7, 3.5, 3.6, 3.7, 3.8]

    etapas:
    - usa: actions/checkout@v2
    - nome: Configura o Python ${{ matrix.python-version }}
      usa: actions/setup-python@v2
      com:
        python-version: ${{ matrix.python-version }}
    - nome: Instalar dependências
      executar: |
        python -m pip install --upgrade pip
        pip install flake8 pytest
        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
    - nome : Lint with flake8
      executar: |
        # interrompe a criação em caso de erros de sintaxe do Python ou de nomes indefinidos
        flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
        # exit-zero trata todos os errors como avisos. O editor do GitHub tem 127 caracteres
        flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
    - nome: Testar com pytest
      executar: |
        pytest
```
{% endraw %}

### Especificar uma versão do Python

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

#### Usar várias versões do Python

{% raw %}
```yaml{:copy}
nome: Pacote Python

em: [push]

trabalhos:
  criar:

    runs-on: ubuntu-latest
    estratégia:
      # Você pode usar as versões do PyPy em python-version.
      # Por exemplo, pypy2 and pypy3
      matriz:
        python-version: [2.7, 3.5, 3.6, 3.7, 3.8]

    etapas:
    - usa: actions/checkout@v2
    - nome: Configura o Python ${{ matrix.python-version }}
      usa: actions/setup-python@v2
      com:
        python-version: ${{ matrix.python-version }}
    # Você pode testar a sua matriz imprimindo a versão atual do Python
    - nome: Exibe a versão do Python
      executar: python -c "import sys; print(sys.version)"
```
{% endraw %}

#### Usar uma versão específica do Python

Você pode configurar uma versão específica do python. Por exemplo, 3,8. Como alternativa, você pode usar a sintaxe da versão semântica para obter a última versão secundária. Este exemplo usa a última versão secundária do Python 3.

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

#### Excluir uma versão

Se especificar uma versão do Python que estiver indisponível, `setup-python` ocorrerá uma falha com um erro como: `##[error]Version 3.4 with arch x64 not found`. A mensagem de erro inclui as versões disponíveis.

Também é possível usar a palavra-chave `excluir` no seu fluxo de trabalho se houver uma configuração do Python que você não deseja executar. Para obter mais informações, consulte a sintaxe "[ para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)."

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

#### Usar a versão padrão do Python

Recomendamos usar `setup-python` para configurar a versão do Python usada nos seus fluxos de trabalho, porque isso ajuda a deixar as suas dependências explícitas. Se você não usar `setup-python`, a versão padrão do Python definida em `PATH` será usada em qualquer shell quando você chamar `python`. A versão-padrão do Python varia entre executores hospedados no {% data variables.product.prodname_dotcom %}, o que pode causar mudanças inesperadas ou usar uma versão mais antiga do que o esperado.

| Executor hospedado em{% data variables.product.prodname_dotcom %} | Descrição                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ubuntu                                                            | Os executores do Ubuntu têm várias versões do sistema do Python instaladas em `/usr/bin/python` e `/usr/bin/python3`. As versões do Python que vêm empacotadas com o Ubuntu são adicionais às versões que o {% data variables.product.prodname_dotcom %} instala na cache das ferramentas.                                                                                                               |
| Windows                                                           | Excluindo as versões do Python que estão na cache de ferramentas, o Windows não é compatível com uma versão equivalente do sistema do Python. Para manter um comportamento consistente com outros executores e permitir que o Python seja usado de forma inovadora sem a ação `setup-python` , {% data variables.product.prodname_dotcom %} adiciona algumas versões da cache das ferramentas ao `PATH`. |
| macOS                                                             | Os executores do macOS têm mais de uma versão do sistema do Python instalada, além das versões que fazem parte da cache de ferramentas. As versões do sistema do Python estão localizadas no diretório `/usr/local/Cellar/python/*`.                                                                                                                                                                     |

### Instalar dependências

Os executores hospedados em {% data variables.product.prodname_dotcom %} têm instalado o gerenciador do pacote pip. Você pode usar o pip para instalar dependências do registro de pacotes do PyPI antes de criar e testar o seu código. Por exemplo, o YAML abaixo instala ou atualiza o instalador de pacotes `pip` e as os pacotes `setuptools` e `wheel`.

Ao usar executores hospedados em {% data variables.product.prodname_dotcom %}, você também poderá armazenar em cache dependências para acelerar seu fluxo de trabalho. Para obter mais informações, consulte "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Memorizar dependências para acelerar fluxos de trabalho</a>".

{% raw %}
```yaml{:copy}
etapas:
- usa: actions/checkout@v2
- nome: Configurar Python
  usa: actions/setup-python@v2
  com:
    python-version: '3.x'
- Nome: Instalar dependências
  executar: python -m pip install --upgrade pip setuptools wheel
```
{% endraw %}

#### Arquivo de requisitos

Depois de atualizar o `pip`, um o próximo passo típico é instalar as dependências de *requirements.txt*.

{% raw %}
```yaml{:copy}
etapas:
- usa: actions/checkout@v2
- nome: Configurar Python
  usa: actions/setup-python@v2
  com:
    python-version: '3.x'
- nome: Instalar dependências
  executar: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
```
{% endraw %}

#### Memorizar dependências

Ao usar executores hospedados em {% data variables.product.prodname_dotcom %}, você poderá armazenar em cache dependências usando uma chave única e restaurar as dependências quando você executar fluxos de trabalho futuros usando a ação [`cache`](https://github.com/marketplace/actions/cache). Para obter mais informações, consulte "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Memorizar dependências para acelerar fluxos de trabalho</a>".

O Pip armazena dependências em diferentes locais, dependendo do sistema operacional do executor. O caminho que você precisa efetuar o armazenamento em cache pode ser diferente do exemplo do Ubuntu abaixo, dependendo do sistema operacional que você usa. Para obter mais informações, consulte [Exemplos de armazenamento em cache do Python](https://github.com/actions/cache/blob/main/examples.md#python---pip).

{% raw %}
```yaml{:copy}
etapas:
- usa: actions/checkout@v2
- nome: Setup Python
  usa: actions/setup-python@v2
  com:
    python-version: '3.x'
- nome: Cache pip
  usa: actions/cache@v2
  com:
    # Este caminho é específico para o Ubuntu
    caminho: ~/.cache/pip
    # Observe se há uma correspondência da cache para o arquivo de requisitos correspondente
    chave: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
    restore-keys: |
      ${{ runner.os }}-pip-
      ${{ runner.os }}-
- nome: Instalar dependências
  executar: pip install -r requirements.txt
```
{% endraw %}

{% note %}

**Observação:** Dependendo do número de dependências, pode ser mais rápido para usar o armazenamento de dependências. Os projetos com muitas dependências grandes devem ver um aumento no desempenho conforme reduz o tempo necessário para fazer o download. Os projetos com menos dependências podem não ver um aumento significativo no desempenho e até mesmo ver um ligeiro diminuir devido à forma como o pip instala dependências armazenadas em cache. O desempenho varia de projeto para projeto.

{% endnote %}

### Testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código.

#### Testar com pytest e pytest-cov

Este exemplo instala ou atualiza `pytest` e `pytest-cov`. Em seguida, os testes são executados e retornados no formato JUnit enquanto os resultados da cobertura do código são emitidos em Cobertura. Para obter mais informações, consulte [JUnit](https://junit.org/junit5/) e [Cobertura](https://cobertura.github.io/cobertura/).

{% raw %}
```yaml{:copy}
etapas:
- usa: actions/checkout@v2
- nome: Set up Python
  usa: actions/setup-python@v2
  com:
    python-version: '3.x'
- nome: Instalar dependências
  executar: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
- Nome: Testar com pytest
  executar: |
    pip install pytest
    pip install pytest-cov
    pytest tests.py --doctest-modules --junitxml=junit/test-results.xml --cov=com --cov-report=xml --cov-report=html
```
{% endraw %}

#### UsarFlake8 para código lint

O exemplo a seguir instala ou atualiza o `flake8` e o usa para limpar todos os arquivos. Para obter mais informações, consulte [Flake8](http://flake8.pycqa.org/en/latest/).

{% raw %}
```yaml{:copy}
etapas:
- usa: actions/checkout@v2
- nome: Configurar Python
  usa: actions/setup-python@v2
  com:
    python-version: '3.x'
- nome: Instalar dependências
  executar: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
- nome: Lint with flake8
  run: |
    pip install flake8
    flake8 .
```
{% endraw %}

#### Executar testes com tox

Com {% data variables.product.prodname_actions %}, você pode executar testes com tox e distribuir o trabalho para vários trabalhos. Você precisará invocar tox usando a opção `-e py` para escolher a versão do Python no seu `PATH`, em vez de especificar uma versão específica. Para obter mais informações, consulte [tox](https://tox.readthedocs.io/en/latest/).

{% raw %}
```yaml{:copy}
nome: Pacote Python

em: [push]

trabalhos:
  criar:

    runs-on: ubuntu-latest
    estratégia:
      matriz:
        python: [2.7, 3.7, 3.8]

    etapa:
      - usa: actions/checkout@v2
      - nome: Setup Python
        usa: actions/setup-python@v2
        com:
          python-version: ${{ matrix.python }}
      - nome: Instalar Toxe e todos os outros pacotes
        executar: pip install tox
      - nome: Executar Tox
        # Executar tox usando a versão do Python no `PATH`
        run: tox -e py
```
{% endraw %}

### Empacotar dados do fluxo de trabalho como artefatos

Você pode fazer o upload de artefatos para visualização após a conclusão de um fluxo de trabalho. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

O exemplo a seguir demonstra como você pode usar a ação `upload-artefact` para arquivar os resultados de teste da execução do `pytest`. Para obter mais informações, consulte a ação <[`upload-artifact`](https://github.com/actions/upload-artifact).

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

### Publicar nos registros do pacote

Você pode configurar o seu fluxo de trabalho para publicar seu pacote de Python em qualquer registro de pacote que você desejar quando forem aprovados os seus testes de CI.

Você pode armazenar qualquer token de acesso ou credenciais necessárias para publicar seu pacote usando segredos. O exemplo a seguir cria e publica um pacote no PyPI usando `twine` e `dist`. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

{% raw %}
```yaml{:copy}
Nome: Fazer o upload no pacote Python

em:
  versão:
    tipos: [created]

trabalhos:
  implementar:
    runs-on: ubuntu-latest
    etapas:
    - usa: actions/checkout@v2
    - nome: Configurar Python
      usa: actions/setup-python@v2
      com:
        python-version: '3.x'
    - nome: Instalar dependências
      executar: |
        python -m pip install --upgrade pip
        pip install setuptools wheel twine
    - nome: Criar e publicar
      env:
        TWINE_USERNAME: ${{ secrets.PYPI_USERNAME }}
        TWINE_PASSWORD: ${{ secrets.PYPI_PASSWORD }}
      executar: |
        python setup.py sdist bdist_wheel
        twine upload dist/*
```
{% endraw %}

Para obter mais informações sobre o fluxo de trabalho do modelo, consulte [`python-publish`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
