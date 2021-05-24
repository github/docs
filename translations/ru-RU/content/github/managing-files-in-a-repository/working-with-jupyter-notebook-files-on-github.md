---
title: Working with Jupyter Notebook files on GitHub
intro: 'When you add Jupyter Notebook or IPython Notebook files with a *.ipynb* extension on {% data variables.product.product_location %}, they will render as static HTML files in your repository.'
redirect_from:
  - /articles/working-with-jupyter-notebook-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---


The interactive features of the notebook, such as custom JavaScript plots, will not work in your repository on {% data variables.product.product_location %}. For an example, see [*Linking and Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

To view your Jupyter notebook with JavaScript content rendered or to share your notebook files with others you can use [nbviewer](https://nbviewer.jupyter.org/). For an example, see [*Linking and Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) rendered on nbviewer.

To view a fully interactive version of your Jupyter Notebook, you can set up a notebook server locally. For more information, see [Jupyter's official documentation](http://jupyter.readthedocs.io/en/latest/index.html).

### Устранение проблем

If you're having trouble rendering Jupyter Notebook files in static HTML, you can convert the file locally on the command line by using the [`nbconvert` command](https://github.com/jupyter/nbconvert):

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### Дополнительная литература

- [Jupyter Notebook's GitHub repository](https://github.com/jupyter/jupyter_notebook)
- [Gallery of Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
