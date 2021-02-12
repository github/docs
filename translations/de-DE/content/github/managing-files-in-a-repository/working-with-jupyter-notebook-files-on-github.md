---
title: Mit Jupyter Notebook-Dateien auf GitHub arbeiten
intro: 'Wenn Sie Jupyter Notebook- oder iPython Notebook-Dateien mit einer *.ipynb*-Erweiterung auf {% data variables.product.product_location %} hinzufügen, werden sie in Ihrem Repository als statische HTML-Dateien gerendert.'
redirect_from:
  - /articles/working-with-jupyter-notebook-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


Die interaktiven Features des Notebooks, beispielsweise benutzerdefinierte JavaScript-Plots, funktionieren in Ihrem Repository auf {% data variables.product.product_location %} nicht. Ein Beispiel findest Du unter [*Linking and Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Du kannst [nbviewer](https://nbviewer.jupyter.org/) verwenden, um Dein Jupyter Notebook mit dargestelltem JavaScript-Inhalt anzuzeigen oder um Deine Notebook-Dateien mit anderen zu teilen. Ein Beispiel zu auf nbviewer gerenderten Elementen findest Du unter [*Linking and Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

Wenn Du eine vollständig interaktive Version Deines Jupyter Notebook anzeigen möchtest, kannst Du einen Notebook-Server lokal einrichten. Weitere Informationen findest Du in der [offiziellen Dokumentation von Jupyter](http://jupyter.readthedocs.io/en/latest/index.html).

### Problemlösungen

Falls Du Probleme hast, Jupyter Notebook-Dateien in statischen HTML-Dateien darzustellen, kannst Du die Datei lokal umwandeln. Benutze dazu den [`nbconvert`-Befehl](https://github.com/jupyter/nbconvert) auf der Befehlszeile:

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### Weiterführende Informationen

- [GitHub-Repository für Jupyter Notebook](https://github.com/jupyter/jupyter_notebook)
- [Galerie der Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
