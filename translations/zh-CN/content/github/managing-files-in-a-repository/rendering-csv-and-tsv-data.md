---
title: 呈现 CSV 和 TSV 数据
redirect_from:
  - /articles/rendering-csv-and-tsv-data
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

GitHub 支持以 *.csv*（逗号分隔）和 .*tsv*（制表符分隔）文件的形式呈现表格数据。

![呈现的 CSV 示例](/assets/images/help/repository/rendered_csv.png)

查看时，提交到 {% data variables.product.product_name %} 仓库的任何 _.csv_ 或 _.tsv_ 文件都会自动呈现为交互式表格，包括标题和行编号。 默认情况下，我们始终假设第一行是标题行。

您可以通过单击行号链接到特定行，或通过按住 Shift 键选择多行。 只需复制 URL 并将其发送给好友即可。

### 搜索数据

如果想要在数据集中查找特定值，可以在文件正上方的搜索栏中开始输入内容。 行将自动过滤：

![搜索值](/assets/images/help/repository/searching_csvs.gif)

### 处理错误

有时，您可能会发现您的 CSV 或 TSV 文件未呈现。 在这些情况下，原始文本底部会出现一个错误框，提示错误可能是什么。

![CSV 呈现错误消息](/assets/images/help/repository/csv_render_error.png)

常见错误包括：

* 列数不匹配。 即使单元格为空，也必须在每行中具有相同数量的分隔符
* 超出文件大小。 我们的呈现仅适用于最大 512KB 的文件。 大于此限制的任何内容都会降低浏览器的速度。
