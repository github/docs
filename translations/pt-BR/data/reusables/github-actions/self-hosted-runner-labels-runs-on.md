Para especificar um executor auto-hospedado para o seu trabalho, configure `runs-on` no seu arquivo de fluxo de trabalho com etiquetas de executores auto-hospedados.

All self-hosted runners have the `self-hosted` label. Using only this label will select any self-hosted runner. To select runners that meet certain criteria, such as operating system or architecture, we recommend providing an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed. When you specify an array of labels, jobs will be queued on runners that have all the labels that you specify.

Although the `self-hosted` label is not required, we strongly recommend specifying it when using self-hosted runners to ensure that your job does not unintentionally specify any current or future {% data variables.product.prodname_dotcom %}-hosted runners.
