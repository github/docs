import dedent from 'ts-dedent'
import { PlaygroundArticleT } from 'components/playground/types'

const article: PlaygroundArticleT = {
  title: 'Building and testing Python',
  shortTitle: 'Build & test Python',
  topics: ['CI', 'Python'],
  type: 'tutorial',
  slug: 'building-and-testing-python',
  originalArticle: '/actions/guides/building-and-testing-python',
  codeLanguageId: 'py',
  intro: dedent`
    This guide shows you how to build, test, and publish a Python package.

    GitHub-hosted runners have a tools cache with pre-installed software, which includes Python and PyPy. You don't have to install anything! For a full list of up-to-date software and the pre-installed versions of Python and PyPy, see "[Specifications for GitHub-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
  `,
  prerequisites: dedent`
    You should be familiar with YAML and the syntax for GitHub Actions. For more information, see "[Learn GitHub-Actions](/actions/learn-github-actions)."

    We recommend that you have a basic understanding of Python, PyPy, and pip. For more information, see:
    - [Getting started with Python](https://www.python.org/about/gettingstarted/)
    - [PyPy](https://pypy.org/)
    - [Pip package manager](https://pypi.org/project/pip/)
  `,
  contentBlocks: [
    {
      type: 'default',
      codeBlock: {
        id: '0',
      },
      title: 'Starting with the Python workflow template',
      content: dedent`
        GitHub provides a Python workflow template that should work for most Python projects. This guide includes examples that you can use to customize the template. For more information, see the [Python workflow template](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml).

        To get started quickly, add the template to the \`.github/workflows\` directory of your repository.
      `,
    },
    {
      type: 'default',
      codeBlock: {
        id: '0',
      },
      title: 'Specifying a Python version',
      content: dedent`
        To use a pre-installed version of Python or PyPy on a GitHub-hosted runner, use the \`setup-python\` action. This action finds a specific version of Python or PyPy from the tools cache on each runner and adds the necessary binaries to \`PATH\`, which persists for the rest of the job. If a specific version of Python is not pre-installed in the tools cache, the \`setup-python\` action will download and set up the appropriate version from the [\`python-versions\`](https://github.com/actions/python-versions) repository.

        Using the \`setup-python\` action is the recommended way of using Python with GitHub Actions because it ensures consistent behavior across different runners and different versions of Python. If you are using a self-hosted runner, you must install Python and add it to \`PATH\`. For more information, see the [\`setup-python\` action](https://github.com/marketplace/actions/setup-python).
        
        The table below describes the locations for the tools cache in each GitHub-hosted runner.
        
        || Ubuntu | Mac | Windows |
        |------|-------|------|----------|
        |**Tool Cache Directory** |\`/opt/hostedtoolcache/*\`|\`/Users/runner/hostedtoolcache/*\`|\`C:\hostedtoolcache\windows\*\`|
        |**Python Tool Cache**|\`/opt/hostedtoolcache/Python/*\`|\`/Users/runner/hostedtoolcache/Python/*\`|\`C:\hostedtoolcache\windows\Python\*\`|
        |**PyPy Tool Cache**|\`/opt/hostedtoolcache/PyPy/*\`|\`/Users/runner/hostedtoolcache/PyPy/*\`|\`C:\hostedtoolcache\windows\PyPy\*\`|
        
        If you are using a self-hosted runner, you can configure the runner to use the \`setup-python\` action to manage your dependencies. For more information, see [using setup-python with a self-hosted runner](https://github.com/actions/setup-python#using-setup-python-with-a-self-hosted-runner) in the \`setup-python\` README.
        
        GitHub supports semantic versioning syntax. For more information, see "[Using semantic versioning](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)" and the "[Semantic versioning specification](https://semver.org/)."
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '1',
      },
      title: 'Using multiple Python versions',
      content: dedent`
        This example uses a matrix to run the job on multiple Python versions: 2.7, 3.6, 3.7, 3.8, and 3.9. For more information about matrix strategies and contexts, see "[Workflow syntax for GitHub Actions](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" and "[Context and expression syntax for GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions)."
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '2',
      },
      title: 'Using a specific Python version',
      content: dedent`
        You can configure a specific version of python. For example, 3.8. Alternatively, you can use semantic version syntax to get the latest minor release. This example uses the latest minor release of Python 3.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '3',
      },
      title: 'Excluding a version',
      content: dedent`
        If you specify a version of Python that is not available, \`setup-python\` fails with an error such as: \`##[error]Version 3.4 with arch x64 not found\`. The error message includes the available versions.

        You can also use the \`exclude\` keyword in your workflow if there is a configuration of Python that you do not wish to run. For more information, see "[Workflow syntax for GitHub Actions](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)."
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '3',
      },
      title: 'Using the default Python version',
      content: dedent`
        We recommend using \`setup-python\` to configure the version of Python used in your workflows because it helps make your dependencies explicit. If you don't use \`setup-python\`, the default version of Python set in \`PATH\` is used in any shell when you call \`python\`. The default version of Python varies between GitHub-hosted runners, which may cause unexpected changes or use an older version than expected.

        | GitHub-hosted runner | Description |
        |----|----|
        | Ubuntu | Ubuntu runners have multiple versions of system Python installed under \`/usr/bin/python\` and \`/usr/bin/python3\`. The Python versions that come packaged with Ubuntu are in addition to the versions that GitHub installs in the tools cache. |
        | Windows | Excluding the versions of Python that are in the tools cache, Windows does not ship with an equivalent version of system Python. To maintain consistent behavior with other runners and to allow Python to be used out-of-the-box without the \`setup-python\` action, GitHub adds a few versions from the tools cache to \`PATH\`.|
        | macOS | The macOS runners have more than one version of system Python installed, in addition to the versions that are part of the tools cache. The system Python versions are located in the \`/usr/local/Cellar/python/*\` directory. |
      `,
    },
    {
      type: 'default',
      codeBlock: {
        id: '4',
      },
      title: 'Installing dependencies',
      content: dedent`
        GitHub-hosted runners have the pip package manager installed. You can use pip to install dependencies from the PyPI package registry before building and testing your code. This example installs or upgrades the \`pip\` package installer and the \`setuptools\` and \`wheel\` packages.

        When using GitHub-hosted runners, you can also cache dependencies to speed up your workflow. For more information, see "[Caching dependencies to speed up workflows](/actions/guides/caching-dependencies-to-speed-up-workflows)."
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '5',
      },
      title: 'Requirements file',
      content: dedent`
        After you update \`pip\`, a typical next step is to install dependencies from *requirements.txt*.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '6',
      },
      title: 'Caching Dependencies',
      content: dedent`
        When using GitHub-hosted runners, you can cache pip dependencies using a unique key, and restore the dependencies when you run future workflows using the [\`cache\`](https://github.com/marketplace/actions/cache) action. For more information, see "[Caching dependencies to speed up workflows](/actions/guides/caching-dependencies-to-speed-up-workflows)."

        Pip caches dependencies in different locations, depending on the operating system of the runner. The path you'll need to cache may differ from the Ubuntu example shown depending on the operating system you use. For more information, see [Python caching examples](https://github.com/actions/cache/blob/main/examples.md#python---pip).

        **Note:** Depending on the number of dependencies, it may be faster to use the dependency cache. Projects with many large dependencies should see a performance increase as it cuts down the time required for downloading. Projects with fewer dependencies may not see a significant performance increase and may even see a slight decrease due to how pip installs cached dependencies. The performance varies from project to project.
      `,
    },
    {
      type: 'default',
      codeBlock: {
        id: '7',
      },
      title: 'Testing your code',
      content: dedent`
        You can use the same commands that you use locally to build and test your code.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '7',
      },
      title: 'Testing with pytest and pytest-cov',
      content: dedent`
        This example installs or upgrades \`pytest\` and \`pytest-cov\`. Tests are then run and output in JUnit format while code coverage results are output in Cobertura. For more information, see [JUnit](https://junit.org/junit5/) and [Cobertura](https://cobertura.github.io/cobertura/).
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '8',
      },
      title: 'Using Flake8 to lint code',
      content: dedent`
        This example installs or upgrades \`flake8\` and uses it to lint all files. For more information, see [Flake8](http://flake8.pycqa.org/en/latest/).
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '9',
      },
      title: 'Running tests with tox',
      content: dedent`
        With GitHub Actions, you can run tests with tox and spread the work across multiple jobs. You'll need to invoke tox using the \`-e py\` option to choose the version of Python in your \`PATH\`, rather than specifying a specific version. For more information, see [tox](https://tox.readthedocs.io/en/latest/).
      `,
    },
    {
      type: 'default',
      codeBlock: {
        id: '10',
      },
      title: 'Packaging workflow data as artifacts',
      content: dedent`
        You can upload artifacts to view after a workflow completes. For example, you may need to save log files, core dumps, test results, or screenshots. For more information, see "[Persisting workflow data using artifacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

        This example demonstrates how you can use the \`upload-artifact\` action to archive test results from running \`pytest\`. For more information, see the [\`upload-artifact\` action](https://github.com/actions/upload-artifact).
      `,
    },
    {
      type: 'default',
      codeBlock: {
        id: '11',
      },
      title: 'Publishing to package registries',
      content: dedent`
        You can configure your workflow to publish your Python package to a package registry once your CI tests pass. This example demonstrates how you can use GitHub Actions to upload your package to PyPI each time you [publish a release](/github/administering-a-repository/managing-releases-in-a-repository). 

        For this example, you will need to create two [PyPI API tokens](https://pypi.org/help/#apitoken). You can use secrets to store the access tokens or credentials needed to publish your package. For more information, see "[Creating and using encrypted secrets](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

        For more information about the template workflow, see [\`python-publish\`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml).
      `,
    },
  ],
  codeBlocks: {
    '0': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
      name: Python package

      on: [push]

      jobs:
        build:

          runs-on: ubuntu-latest
          strategy:
            matrix:
              python-version: [3.6, 3.7, 3.8, 3.9]

          steps:
            - uses: actions/checkout@v2
            - name: Set up Python \${{ matrix.python-version }}
              uses: actions/setup-python@v2
              with:
                python-version: \${{ matrix.python-version }}
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
      `,
    },
    '1': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
      name: Python package

      on: [push]

      jobs:
        build:

          runs-on: ubuntu-latest
          strategy:
            # You can use PyPy versions in python-version.
            # For example, pypy2 and pypy3
            matrix:
              python-version: [2.7, 3.6, 3.7, 3.8, 3.9]

          steps:
            - uses: actions/checkout@v2
            - name: Set up Python \${{ matrix.python-version }}
              uses: actions/setup-python@v2
              with:
                python-version: \${{ matrix.python-version }}
            # You can test your matrix by printing the current Python version
            - name: Display Python version
              run: python -c "import sys; print(sys.version)"
      `,
    },
    '2': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
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
      `,
    },
    '3': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
      name: Python package

      on: [push]

      jobs:
        build:

          runs-on: \${{ matrix.os }}
          strategy:
            matrix:
              os: [ubuntu-latest, macos-latest, windows-latest]
              python-version: [3.6, 3.7, 3.8, 3.9, pypy2, pypy3]
              exclude:
                - os: macos-latest
                  python-version: 3.6
                - os: windows-latest
                  python-version: 3.6
      `,
    },
    '4': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
        name: Python package

        on: [push]

        jobs:
          build:

            runs-on: ubuntu-latest
            steps:
              - uses: actions/checkout@v2
              - name: Set up Python
                uses: actions/setup-python@v2
                with:
                  python-version: '3.x'
              - name: Install dependencies
                run: python -m pip install --upgrade pip setuptools wheel
        `,
    },
    '5': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
        name: Python package

        on: [push]

        jobs:
          build:

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
                pip install -r requirements.txt
        `,
    },
    '6': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
        name: Python package

        on: [push]

        jobs:
          build:

            runs-on: ubuntu-latest
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
                key: \${{ runner.os }}-pip-\${{ hashFiles('requirements.txt') }}
                restore-keys: |
                  \${{ runner.os }}-pip-
                  \${{ runner.os }}-
            - name: Install dependencies
              run: pip install -r requirements.txt
        `,
    },
    '7': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
        name: Python package

        on: [push]

        jobs:
          build:

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
                pip install -r requirements.txt
            - name: Test with pytest
              run: |
                pip install pytest
                pip install pytest-cov
                pytest tests.py --doctest-modules --junitxml=junit/test-results.xml --cov=com --cov-report=xml --cov-report=html
        `,
    },
    '8': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
        name: Python package

        on: [push]

        jobs:
          build:

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
                pip install -r requirements.txt
            - name: Lint with flake8
              run: |
                pip install flake8
                flake8 .
        `,
    },
    '9': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
        name: Python package

        on: [push]

        jobs:
          build:

            runs-on: ubuntu-latest
            strategy:
              matrix:
                python: [3.7, 3.8, 3.9]

            steps:
              - uses: actions/checkout@v2
              - name: Setup Python
                uses: actions/setup-python@v2
                with:
                  python-version: \${{ matrix.python }}
              - name: Install Tox and any other packages
                run: pip install tox
              - name: Run Tox
                # Run tox using the version of Python in \`PATH\`
                run: tox -e py
      `,
    },
    '10': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
        name: Python package

        on: [push]
        
        jobs:
          build:
        
            runs-on: ubuntu-latest
            strategy:
              matrix:
                python-version: [3.6, 3.7, 3.8, 3.9]
        
            steps:
              - uses: actions/checkout@v2
              - name: Setup Python # Set Python version
                uses: actions/setup-python@v2
                with:
                  python-version: \${{ matrix.python-version }}
              # Install pip and pytest
              - name: Install dependencies
                run: |
                  python -m pip install --upgrade pip
                  pip install pytest
              - name: Test with pytest
                run: pytest tests.py --doctest-modules --junitxml=junit/test-results-\${{ matrix.python-version }}.xml
              - name: Upload pytest test results
                uses: actions/upload-artifact@v2
                with:
                  name: pytest-results-\${{ matrix.python-version }}
                  path: junit/test-results-\${{ matrix.python-version }}.xml
                # Use always() to always run this step to publish test results when there are test failures
                if: \${{ always() }}
      `,
    },
    '11': {
      language: 'yaml',
      fileName: '.github/workflow/example.yml',
      code: dedent`
        # This workflow uses actions that are not certified by GitHub.
        # They are provided by a third-party and are governed by
        # separate terms of service, privacy policy, and support
        # documentation.

        name: Upload Python Package

        on:
          release:
            types: [published]

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
                  pip install build
              - name: Build package
                run: python -m build
              - name: Publish package
                uses: pypa/gh-action-pypi-publish@27b31702a0e7fc50959f5ad993c78deac1bdfc29
                with:
                  user: __token__
                  password: \${{ secrets.PYPI_API_TOKEN }}
      `,
    },
  },
}

export default article
