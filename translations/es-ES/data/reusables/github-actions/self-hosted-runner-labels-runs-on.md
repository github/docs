Para especificar un ejecutor auto-hospedado para tu trabajo, configura `runs-on` en tu archivo de flujo de trabajo con las etiquetas de dicho ejecutor.

All self-hosted runners have the `self-hosted` label. Using only this label will select any self-hosted runner. To select runners that meet certain criteria, such as operating system or architecture, provide an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed.
