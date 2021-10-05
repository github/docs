Para especificar um executor auto-hospedado para o seu trabalho, configure `runs-on` no seu arquivo de fluxo de trabalho com etiquetas de executores auto-hospedados.

All self-hosted runners have the `self-hosted` label. Using only this label will select any self-hosted runner. To select runners that meet certain criteria, such as operating system or architecture, provide an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed.
