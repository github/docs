要为工作指定自托管的运行器，请在工作流程文件中使用自托管运行器标签配置 `runs-on`。

All self-hosted runners have the `self-hosted` label. Using only this label will select any self-hosted runner. To select runners that meet certain criteria, such as operating system or architecture, provide an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed.
