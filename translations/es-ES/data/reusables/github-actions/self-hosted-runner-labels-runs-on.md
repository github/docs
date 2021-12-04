Para especificar un ejecutor auto-hospedado para tu trabajo, configura `runs-on` en tu archivo de flujo de trabajo con las etiquetas de dicho ejecutor.

Todos los ejecutores auto-hospedados tienen la etiqueta `self-hosted`. El utilizar únicamente esta etiqueta seleccionará cualquier ejecutor auto-hospedado. To select runners that meet certain criteria, such as operating system or architecture, we recommend providing an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed. When you specify an array of labels, jobs will be queued on runners that have all the labels that you specify.

Although the `self-hosted` label is not required, we strongly recommend specifying it when using self-hosted runners to ensure that your job does not unintentionally specify any current or future {% data variables.product.prodname_dotcom %}-hosted runners.
