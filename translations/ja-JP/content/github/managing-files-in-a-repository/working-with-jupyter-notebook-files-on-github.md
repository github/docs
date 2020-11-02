---
title: GitHub で Jupyter notebook ファイルを使って作業する
intro: 'Jupyter Notebook または IPython Notebook ファイルに *.ipynb* 拡張子を付けて {% data variables.product.product_location %} に追加すると、それらはリポジトリに静的 HTML ファイルとしてレンダリングされます。'
redirect_from:
  - /articles/working-with-jupyter-notebook-files-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


カスタム JavaScript プロットなど、Notebook のインタラクティブ機能は、{% data variables.product.product_location %} のリポジトリでは機能しません。 For an example, see [*Linking and Interactions.ipynb*](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

レンダリングした JavaScript コンテンツで Jupyter notebook を表示する、または、notebook ファイルを他のユーザーと共有する場合、[nbviewer](https://nbviewer.jupyter.org/) を使用できます。 For an example, see [*Linking and Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) rendered on nbviewer.

Jupyter notebook の完全にインタラクティブなバージョンを表示するには、notebook サーバーをローカルに設定します。 詳細は [Jupyter の公式ドキュメント](http://jupyter.readthedocs.io/en/latest/index.html)を参照してください。

### トラブルシューティング

Jupyter notebook ファイルを静的 HTML でレンダリングできない場合は、[`nbconvert` コマンド](https://github.com/jupyter/nbconvert)を使用してコマンドラインでローカルにファイルを変換できます:

```shell
$ jupyter nbconvert --to html <em>NOTEBOOK-NAME.ipynb</em>
```

### 参考リンク

- [Jupyter notebook の GitHub リポジトリ](https://github.com/jupyter/jupyter_notebook)
- [Jupyter notebooks のギャラリー](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
