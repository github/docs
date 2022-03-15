要为工作指定自托管的运行器，请在工作流程文件中使用自托管运行器标签配置 `runs-on`。

所有自托管运行器都有 `self-hosted` 标签。 仅使用此标签将选择任何自托管运行器。 To select runners that meet certain criteria, such as operating system or architecture, we recommend providing an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed. When you specify an array of labels, jobs will be queued on runners that have all the labels that you specify.

Although the `self-hosted` label is not required, we strongly recommend specifying it when using self-hosted runners to ensure that your job does not unintentionally specify any current or future {% data variables.product.prodname_dotcom %}-hosted runners.
