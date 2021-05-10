---
title: Trabalhar com arquivos do Jupyter Notebook no GitHub
intro: 'Quando você adiciona arquivos do Jupyter Notebook ou do IPython Notebook com uma extensão *.ipynb* no {% data variables.product.product_location %}, eles são renderizados como arquivos HTML estáticos no repositório.'
redirect_from:
  - /articles/working-with-jupyter-notebook-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---


Os recursos interativos do notebook, como plots personalizados de JavaScript, não funcionam no seu repositório no {% data variables.product.product_location %}. Para ver um exemplo, consulte [*Linking e Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Para exibir o Jupyter Notebook com conteúdo JavaScript renderizado ou compartilhar arquivos do seu notebook com outras pessoas, use [nbviewer](https://nbviewer.jupyter.org/). Para ver um exemplo, consulte [*Linking e Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) representados no nbviewer.

Para exibir uma versão totalmente interativa do Jupyter Notebook, configure um servidor de notebook localmente. Para obter mais informações, consulte a [documentação oficial do Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Solução de Problemas

Se você estiver tendo problemas para renderizar arquivos do Jupyter Notebook em HTML estático, converta o arquivo localmente na linha de comando usando o comando [`nbconvert`](https://github.com/jupyter/nbconvert):

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### Leia mais

- [Repositório do GitHub do Jupyter Notebook](https://github.com/jupyter/jupyter_notebook)
- [Galeria de Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
