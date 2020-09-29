---
title: 在 GitHub 上使用 Jupyter Notebook 文件
intro: '当您在 {% data variables.product.product_location %} 上添加具有 *.ipynb* 扩展名的 Jupyter Notebook 或 IPython Notebook 文件时，它们将在您的仓库中呈现为静态 HTML 文件。'
redirect_from:
  - /articles/working-with-jupyter-notebook-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


笔记本的交互式功能（例如自定义的 JavaScript 图）在 {% data variables.product.product_location %} 上的仓库中不起作用。 有关示例，请参阅 [*Linking and Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/master/tutorial/06%20-%20Linking%20and%20Interactions.ipynb)。

要查看呈现 JavaScript 内容的 Jupyter notebook 或与其他人共享您的笔记本文件，您可以使用 [nbviewer](https://nbviewer.jupyter.org/)。 有关示例，请参阅在 nbviewer 上呈现的 [*Linking and Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/master/tutorial/06%20-%20Linking%20and%20Interactions.ipynb)。

要查看 Jupyter Notebook 的完全交互式版本，您可以在本地设置笔记本服务器。 更多信息请参阅“[Jupyter 的正式文档](http://jupyter.readthedocs.io/en/latest/index.html)”。

### 疑难解答

如果您在静态 HTML 中呈现 Jupyter Notebook 文件时遇到问题，您可以通过在命令行中使用 [`nbconvert` 命令](https://github.com/jupyter/nbconvert)，在本地转换该文件：

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### 延伸阅读

- [Jupyter Notebook 的 GitHub 仓库](https://github.com/jupyter/jupyter_notebook)
- [Jupyter Notebook 的图片库](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
