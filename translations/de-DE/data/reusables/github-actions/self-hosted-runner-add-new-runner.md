1. Klicke unter „Self-hosted runners" (selbst-gehostete Läufer) auf **Add runner** (Läufer hinzufügen).

1. Wähle das Betriebssystem und die Architektur Deiner selbst-gehosteten Läufermaschine aus. ![Selbst-gehostetes Läuferbetriebssystem auswählen](/assets/images/help/settings/actions-runner-architecture-os.png)


1. Du wirst Anweisungen sehen, wie Du die Läuferanwendung herunterlädst und sie auf Deiner selbst-gehosteten Läufermaschine installierst.

   Öffne eine Shell auf Deiner selbst-gehosteten Läufermaschine und führe jeden Shell-Befehl in der angezeigten Reihenfolge aus.

   {% note %}

   **Hinweis:** Wenn Du unter Windows die selbst gehostete Läuferanwendung als Dienst installieren möchtest, musst Du eine Shell mit Administratorberechtigungen öffnen. Wir empfehlen auch, dass Du `C:\actions-runner` als Verzeichnis für die selbst-gehostete Läuferanwendung verwendest, damit Windows System-Konten auf das Läuferverzeichnis zugreifen können.

   {% endnote %}

   Die Anweisungen führen Dich durch die Vervollständigung dieser Aufgaben:
   - Herunterladen und Extrahieren der selbst-gehosteten Läuferanwendung.
   - Ausführen des `config` Skript zum Konfigurieren der selbst-gehosteten Läuferanwendung und die Registrierung mit {% data variables.product.prodname_actions %}. Das `config` Skript benötigt die Ziel-URL und einen automatisch generierten, zeitlich limitierten Token, um die Anfrage zu authentifizieren.
     - Unter Windows fragt das `config` Skript auch, ob Du die selbst-gehostete Läuferanwendung als Dienst installieren möchtest. Für Linux und macOS kannst Du einen Dienst installieren, nachdem Du das Hinzufügen des Läufers beendet hast. Weitere Informationen findest Du unter ["Konfigurieren der selbst-gehosteten Läuferanwendung als Dienst".](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)
   - Ausführen der selbst-gehosteten Läuferanwendung zum Verbinden der Maschine mit {% data variables.product.prodname_actions %}.
