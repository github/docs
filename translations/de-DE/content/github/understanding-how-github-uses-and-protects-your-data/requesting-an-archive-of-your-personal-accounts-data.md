---
title: Archiv der Daten Ihres persönlichen Kontos anfordern
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user_settings.export-data %}'
versions:
  free-pro-team: '*'
---

{% data variables.product.product_name %} speichert Repository- und Profil-Metadaten aus den Aktivitäten Ihres persönlichen Kontos. Die Daten Ihres persönlichen Kontos können Sie über die Einstellungen auf der {% data variables.product.prodname_dotcom_the_website %} oder mit der API für die Benutzermigration exportieren.

For more information about the data {% data variables.product.product_name %} stores that is available for exporting, see "[Download a user migration archive](/v3/migrations/users/#download-a-user-migration-archive)" and "[About {% data variables.product.product_name %}'s use of your data](/articles/about-github-s-use-of-your-data).

Wenn Sie einen Export Ihrer persönlichen Daten über die Einstellungen auf {% data variables.product.prodname_dotcom_the_website %} anfordern, verpackt {% data variables.product.product_name %} Ihre persönlichen Daten in einer `tar.gz`-Datei. Diese können Sie über einen Download-Link herunterladen, der Ihnen in einer E-Mail an Ihre primäre E-Mail-Adresse gesendet wird.

Der Download-Link läuft standardmäßig nach sieben Tagen ab. Sie können diesen Link aber auch jederzeit vor seinem Ablauf über Ihre Benutzereinstellungen deaktivieren. Weitere Informationen finden Sie unter „[Zugriff auf ein Archiv mit den Daten Ihres persönlichen Kontos löschen](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)“.

Falls Ihr Betriebssystem über keine Funktion zum Entpacken der `tar.gz`-Datei verfügt, können Sie die archivierten Dateien auch mit einem Drittanbietertool extrahieren. Weitere Informationen finden Sie auf Opensource.com unter „[How to unzip a tar.gz file](https://opensource.com/article/17/7/how-unzip-targz-file)“ (So dekomprimieren Sie eine tar.gz-Datei).

Die generierte `tar.gz`-Datei reflektiert die Daten im Zustand beim Start des Datenexports.

### Archiv der Daten Ihres persönlichen Kontos herunterladen

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Klicken Sie unter „Export account data“ (Kontodaten exportieren) auf **Start export** (Export starten) oder **New export** (Neuer Export). ![Schaltfläche zum Starten des Exports Ihrer persönlichen Daten markiert](/assets/images/help/repository/export-personal-data.png) ![Schaltfläche zum Erstellen eines neuen Exports Ihrer persönlichen Daten markiert](/assets/images/help/repository/new-export.png)
4. Sobald der Export zum Download zur Verfügung steht, sendet Ihnen {% data variables.product.product_name %} einen Download-Link an Ihre primäre E-Mail-Adresse.
5. Klicken Sie in der E-Mail auf den Download-Link, und geben Sie Ihr Passwort auf Aufforderung neu ein.
6. Sie werden zu einer `tar.gz`-Datei geleitet, die Sie herunterladen können.

### Zugriff auf ein Archiv mit den Daten Ihres persönlichen Kontos löschen

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Wenn Sie den Ihnen per E-Mail zugesendeten Download-Link vor seinem Ablauf deaktivieren möchten, suchen Sie den Datenexport-Download unter „Export account data“ (Kontodaten exportieren), und klicken Sie auf **Delete** (Löschen). ![Schaltfläche zum Löschen des Pakets mit dem Export Ihrer persönlichen Daten markiert](/assets/images/help/repository/delete-export-personal-account-data.png)
