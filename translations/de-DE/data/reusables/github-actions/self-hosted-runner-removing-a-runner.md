1. Under **Self-hosted runners**, locate the runner in the list. If your runner is in a group, click {% octicon "chevron-down" aria-label="The downwards chevron" %} to expand the list.
1. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} next to the runner you want to remove, then click **Remove**.

    ![Entfernen einer selbst-gehosteten Läufereinstellung](/assets/images/help/settings/actions-runner-remove.png)
1. Du wirst Anweisungen zum Entfernen des selbst gehosteten Läufers sehen. Vervollständige einen der folgenden Schritte, um den Läufer zu entfernen, abhängig davon, ob er noch zugänglich ist:

    * **Wenn Du Zugriff auf die Läufermaschine hast:** Folge den Anweisungen auf dem Bildschirm für das Betriebssystem Deiner Maschine, um den Befehl zum Entfernen auszuführen. Die Anweisungen beinhalten die erforderliche URL und ein automatisch generiertes, zeitlich begrenztes Token.

        Der Befehl zum Entfernen führt die folgenden Aufgaben aus:

        * Entfernt den Läufer aus {% data variables.product.product_name %}.
        * Entfernt alle selbst-gehosteten Läufer-Anwendungskonfigurationsdateien auf der Maschine.
        * Entfernt alle konfigurierten Dienste, wenn sie nicht im interaktiven Modus ausgeführt werden.

    * **Wenn Du keinen Zugriff auf die Maschine hast:** Klicke auf **Yes, force remove this runner** (Ja, erzwinge das Entfernen dieses Läufers) um {% data variables.product.product_name %} zu zwingen, den Läufer zu entfernen.
