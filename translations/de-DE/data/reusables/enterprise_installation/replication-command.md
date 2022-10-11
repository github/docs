1. Führe den Befehl `ghe-repl-start` aus, um mit der Replikation der Datenspeicher zu beginnen.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **Warnung:** `ghe-repl-start` verursacht einen kurzen Ausfall auf dem primären Server, während dessen Benutzer interne Serverfehler sehen können. Um eine freundlichere Nachricht bereitzustellen, führe `ghe-maintenance -s` auf dem primären Knoten aus, bevor Du `ghe-repl-start` auf dem Replikatknoten ausführst, um die Appliance in den Wartungsmodus zu versetzen. Sobald die Replikation gestartet ist, deaktiviere den Wartungsmodus mit `ghe-maintenance -u`.

    {% endwarning %}
