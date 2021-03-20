---
title: Managing files on GitHub
intro: 'On {% data variables.product.product_name %}, you can create, edit, move, and delete files in a repository.'
mapTopic: true
redirect_from:
  - /articles/managing-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

Managing files on GitHub. Navigating code on GitHub. Creating new files. Adding a file to a repository. ...
name: pythonpackage

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      max-parallel: 4
      matrix:
        python-version: [3.5, 3.6, 3.7]

    steps:
    - uses: actions/checkout@v1
    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v1
      with:
        python-version: ${{ matrix.python-version }}
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        python -m pip install pytest flake8 mypy
        python -m pip install .
    - name: General info
      run: |
        organize list
        organize config --path
        organize --version
    - name: Lint with flake8
      run: |
        # stop the build if there are Python syntax errors or undefined names
        flake8 --count --select=E9,F63,F7,F82 --show-source --statistics organize
        # exit-zero treats all errors as warnings. The GitHub editor is 127 chars wide
        flake8 --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics organize
    - name: Test with pytest
      run: |
        pytest
    - name: Check with MyPy
      run: |
        mypy -porganize
