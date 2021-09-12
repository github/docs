---
title: Trabajar con archivos notebook Jupyter en GitHub
intro: 'Cuando agregas archivos notebook Jupyter o notebook iPython con una extensión *.ipynb* en {% data variables.product.product_location %}, se representarán como archivos HTML estáticos en tu repositorio.'
redirect_from:
  - /articles/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-jupyter-notebook-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Las funciones interactivas de notebook, como los gráficos JavaScript personalizados, no funcionarán en tu repositorio en {% data variables.product.product_location %}. Para obtener un ejemplo, consulta [*Enlaces e interacciones.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Para ver tu notebook Jupyter con el contenido representado de JavaScript o para compartir tus archivos notebook con otros, puedes usar [nbviewer](https://nbviewer.jupyter.org/). Para obtener un ejemplo, consulta [*Enlaces e interacciones.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) representados en nbviewer.

Para ver una versión completamente interactiva de tu notebook Jupyter, puedes configurar un servidor notebook de manera local. Para obtener más información, consulta [Documentación oficial de Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Solución de problemas

Si tienes problemas para representar los archivos notebook Jupyter en HTML estático, puedes convertir el archivo de forma local en la línea de comando usando el comando [`nbconvert`](https://github.com/jupyter/nbconvert):

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### Leer más

- [Repositorio GitHub de notebook Jupyter](https://github.com/jupyter/jupyter_notebook)
- [Galería de notebooks Jupyter](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
