Um einen selbst-gehosteten Läufer für Deinen Auftrag anzugeben, konfiguriere `runs-on` in Deiner Workflow-Datei mit selbst gehosteten Läuferkennzeichnungen.

All self-hosted runners have the `self-hosted` label. Using only this label will select any self-hosted runner. To select runners that meet certain criteria, such as operating system or architecture, provide an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed.
