Es gibt einige Einschränkungen für die Benutzung von {% data variables.product.prodname_actions %} und es hängt davon ab, ob Du {% data variables.product.prodname_dotcom %}-gehostete oder selbst gehostete Läufer verwendest. Die Einschränkungen können sich jederzeit ändern.

- **Job execution time** (Auftrags-Ausführungszeit) - Jeder Job in einem Workflow kann bis zu 6 Stunden Ausführungszeit laufen. Wenn ein Auftrag dieses Limit erreicht, wird der Auftrag beendet und kann nicht abgeschlossen werden. Dieses Limit gilt nicht für selbst-gehostete Läufer.
- **Workflow run time** (Workflow-Laufzeit) - Jede Workflow-Ausführung ist auf 72 Stunden begrenzt. Wenn eine Workflow-Ausführung diesen Grenzwert erreicht, wird die Workflow-Ausführung abgebrochen. Dieses Limit gilt auch für selbst-gehostete Läufer.
- **Job queue time** (Job-Warteschlangenzeit) - Jeder Auftrag für selbst-gehostete Läufer kann maximal 24 Stunden lang in die Warteschlange gestellt werden. Wenn ein selbst-gehosteter Läufer die Ausführung des Auftrags nicht innerhalb dieses Limits startet, wird der Auftrag beendet und kann nicht abgeschlossen werden. Dieses Limit gilt nicht für {% data variables.product.prodname_dotcom %}-gehostete Läufer.
- **API requests** (API Anfragen) - Pro Stunde kannst Du bis zu 1000 API-Anfragen über alle Aktionen innerhalb innerhalb eines Repository ausführen. Bei Überschreitung schlagen zusätzliche API-Aufrufe fehl, was dazu führen kann, dass Aufträge fehlschlagen. Dieses Limit gilt auch für selbst-gehostete Läufer.
- **Concurrent Jobs** (parallele Aufträge) - Die Anzahl paralleler Aufträge, die Du in Ihrem Konto ausführen kannst, hängt von Deinem GitHub-Plan ab, wie in der folgenden Tabelle ersichtlich. Bei Überschreitung werden alle zusätzlichen Aufträge in die Warteschlange gestellt. Es gibt keine Parallelitätsgrenzen für selbst-gehostete Läufer.

  | GitHub Plan | Total parallele Aufträge | Maximal parallele macOS-Aufträge |
  | ----------- | ------------------------ | -------------------------------- |
  | Kostenlos   | 20                       | 5                                |
  | Pro         | 40                       | 5                                |
  | Team        | 60                       | 5                                |
  | Enterprise  | 180                      | 50                               |
- **Auftrags-Matrix** - {% data reusables.github-actions.matrix-limits %}
