---
title: Streamen des Überwachungsprotokolls für ein Unternehmen
intro: 'Du kannst Überwachungs- und Git-Ereignisdaten aus {% data variables.product.prodname_dotcom %} in ein externes Datenverwaltungssystem streamen.'
miniTocMaxHeadingLevel: 3
versions:
  feature: audit-log-streaming
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Stream audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
ms.openlocfilehash: 81eb88f760016390a321798589e7994542c9f312
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710339'
---
{% ifversion ghes %} {% note %}

**Hinweis:** Das Streamen von Überwachungsprotokollen ist derzeit für {% data variables.product.product_name %} als Betaversion verfügbar. Änderungen sind vorbehalten.

{% endnote %} {% endif %}

## Informationen zum Streamen von Überwachungsprotokollen

Zum Schutz deines geistigen Eigentums und zur Einhaltung von Vorschriften in deinem Unternehmen kannst du Streaming verwenden. Dabei werden Kopien von Überwachungsprotokolldaten gespeichert, und es wird Folgendes überwacht: {% data reusables.audit_log.audited-data-list %}

Das Streamen von Überwachungsdaten bietet folgende Vorteile:

* **Datenuntersuchung** Du kannst gestreamte Ereignisse mithilfe deines bevorzugten Tools zum Abfragen großer Datenmengen untersuchen. Der Stream enthält sowohl Überwachungsereignisse als auch Git-Ereignisse für das gesamte Unternehmenskonto.{% ifversion pause-audit-log-stream %}
* **Datenkontinuität**. Du kannst den Stream für bis zu sieben Tage anhalten, ohne dass Überwachungsdaten verloren gehen.{% endif %}
* **Datenaufbewahrung** Du kannst deine exportierten Überwachungsprotokolle und Git-Ereignisdaten solange wie erforderlich speichern.

Unternehmensinhaber*innen können Streams jederzeit einrichten{% ifversion pause-audit-log-stream %}, anhalten{% endif %} oder löschen. Mit dem Stream werden die Überwachungsdaten und Git-Ereignisdaten für alle Organisationen in einem Unternehmen exportiert.

## Einrichten des Überwachungsprotokollstreamings

Den Überwachungsprotokollstream auf {% data variables.product.product_name %} richtest du ein, indem du die Anweisungen für deinen Anbieter befolgst.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Azure Blob Storage](#setting-up-streaming-to-azure-blob-storage)
- [Azure Event Hubs](#setting-up-streaming-to-azure-event-hubs){% ifversion streaming-datadog %}
- [Datadog](#setting-up-streaming-to-datadog){% endif %}
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Einrichten des Streamings an Amazon S3

{% ifversion streaming-oidc-s3 %} Du kannst das Streaming an S3 mithilfe von Zugriffsschlüsseln einrichten oder die Speicherung langlebiger Geheimnisse in {% data variables.product.product_name %} mithilfe von OpenID Connect (OIDC) verhindern.

- [Einrichten des Streamings an S3 mit Zugriffsschlüsseln](#setting-up-streaming-to-s3-with-access-keys)
- [Einrichten des Streamings an S3 mit OpenID Connect](#setting-up-streaming-to-s3-with-openid-connect)
- [Deaktivieren des Streamings an S3 mit OpenID Connect](#disabling-streaming-to-s3-with-openid-connect)

#### Einrichten des Streamings an S3 mit Zugriffsschlüsseln
{% endif %}

Zum Streamen von Überwachungsprotokollen an den S3-Endpunkt von Amazon musst du über einen Bucket und Zugriffsschlüssel verfügen. Weitere Informationen findest du unter [Erstellen, Konfigurieren und Arbeiten mit Amazon S3-Buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in der AWS-Dokumentation. Stelle zum Schutz deiner Überwachungsprotokolldaten sicher, dass der öffentliche Zugriff auf den Bucket blockiert ist. 

Zum Einrichten des Überwachungsprotokollstreamings von {% data variables.product.prodname_dotcom %} benötigst du Folgendes:
* Den Namen deines Amazon S3-Buckets
* Die ID deines AWS-Zugriffsschlüssels
* Deinen geheimen AWS-Schlüssel

Informationen zum Erstellen oder Zugreifen auf deine Zugriffsschlüssel-ID und ihren geheimen Schlüssel findest du unter [Deine AWS-Anmeldeinformationen](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) in der AWS-Dokumentation.

{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}{% ifversion streaming-oidc-s3 %}
1. Klicke unter „Authentifizierung“ auf **Zugriffsschlüssel**.

   ![Screenshot: Authentifizierungsoptionen für das Streaming in Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-access-keys.png){% endif %}
1. Konfiguriere die Streameinstellungen.

   - Gib unter „Bucket“ den Namen des Buckets ein, an den du streamen möchtest. Beispiel: `auditlog-streaming-test`.
   - Gib unter „Zugriffsschlüssel-ID“ deine Zugriffsschlüssel-ID ein. Beispiel: `ABCAIOSFODNN7EXAMPLE1`.
   - Gib unter „Geheimer Schlüssel“ deinen geheimen Schlüssel ein. Beispiel: `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-oidc-s3 %}
#### Einrichten des Streamings an S3 mit OpenID Connect

{% note %}

**Hinweis:** Das Streaming an Amazon S3 mit OpenID Connect befindet sich derzeit in der Betaversion, und Änderungen sind vorbehalten.

{% endnote %}

1. Füge in AWS den OIDC-Anbieter für {% data variables.product.prodname_dotcom %} zu IAM hinzu. Weitere Informationen findest du in der AWS-Dokumentation zum [Erstellen von OpenID Connect(OIDC)-Identitätsanbietern](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).

   - Verwende `https://oidc-configuration.audit-log.githubusercontent.com` als Anbieter-URL.
   - Verwende `sts.amazonaws.com` als Zielgruppe.
1. Erstelle einen Bucket, und blockiere den öffentlichen Zugriff auf den Bucket. Weitere Informationen findest du unter [Erstellen, Konfigurieren und Arbeiten mit Amazon S3-Buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in der AWS-Dokumentation.
1. Erstelle eine Richtlinie, die es {% data variables.product.company_short %} gestattet, in den Bucket zu schreiben. Für {% data variables.product.prodname_dotcom %} sind nur die folgenden Berechtigungen erforderlich.

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::example-bucket/*"
        }
      ]
   }
   ```
   Weitere Informationen findest du unter [Erstellen von IAM-Richtlinien](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) in der AWS-Dokumentation.
1. Konfiguriere die Rolle und die Vertrauensstellungsrichtlinie für den {% data variables.product.prodname_dotcom %}-IdP. Weitere Informationen findest du in der AWS-Dokumentation unter [Erstellen von Rollen für Web-Identität oder OpenID Connect-Verbund (Konsole)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html).
  
   - Füge die oben erstellte Berechtigungsrichtlinie hinzu, um Schreibvorgänge im Bucket zu ermöglichen.
   - Bearbeite die Vertrauensstellung, und füge das Feld `sub` zu den Validierungsbedingungen hinzu. Ersetze dabei `ENTERPRISE` durch den Namen deines Unternehmens.
     ```
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```
   - Notiere dir den Amazon-Ressourcennamen (ARN) der erstellten Rolle.
{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}
1. Klicke unter „Authentifizierung“ auf **OpenID Connect**.

   ![Screenshot: Authentifizierungsoptionen für das Streaming in Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-oidc.png)
1. Konfiguriere die Streameinstellungen.

   - Gib unter „Bucket“ den Namen des Buckets ein, an den du streamen möchtest. Beispiel: `auditlog-streaming-test`.
   - Gib unter „ARN-Rolle“ die zuvor notierte ARN-Rolle ein. Beispiel: `arn:aws::iam::1234567890:role/github-audit-log-streaming-role`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

#### Deaktivieren des Streamings an S3 mit OpenID Connect

Wenn du das Streaming an S3 mit OIDC aus irgendeinem Grund deaktivieren möchtest, zum Beispiel weil ein Sicherheitsrisiko in OIDC entdeckt wurde, kannst du den OIDC-Anbieter {% data variables.product.prodname_dotcom %} löschen, den du in AWS bei der Einrichtung des Streamings erstellt hast. Weitere Informationen findest du in der AWS-Dokumentation zum [Erstellen von OpenID Connect(OIDC)-Identitätsanbietern](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html).

Richte dann das Streaming mit Zugriffsschlüsseln ein, bis das Sicherheitsrisiko behoben wurde. Weitere Informationen findest du unter [Einrichten des Streamings an S3 mit Zugriffsschlüsseln](#setting-up-streaming-to-s3-with-access-keys).

{% endif %}

### Einrichten des Streamings an Azure Blob Storage

Bevor du in {% data variables.product.prodname_dotcom %} einen Stream einrichtest, musst du in Microsoft Azure ein Speicherkonto und einen Container erstellen. Informationen hierzu findest du in der Microsoft-Dokumentation unter [Einführung in Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction). 

Zum Konfigurieren des Streams in {% data variables.product.prodname_dotcom %} benötigst du die URL eines SAS-Tokens.

**Führe im Microsoft Azure-Portal folgende Schritte durch**:
1. Klicke auf der Startseite auf **Speicherkonten**.
2. Klicke auf den Namen des zu verwendenden Speicherkontos, und klicke dann auf **Container**.
   
   ![Link "Container" in Azure](/assets/images/azure/azure-storage-containers.png)

1. Klicke auf den Namen des Containers, den du verwenden möchtest.
1. Klicke auf **Shared access tokens** (Freigegebene Zugriffstoken). 
   
   ![Link „Shared access tokens“ (Freigegebenes Zugriffstoken) in Azure](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. Ändere im Dropdownmenü **Berechtigungen** die Berechtigungen so, dass nur `Create` und `Write` zulässig ist.
   
   ![Berechtigungen im Dropdownmenü](/assets/images/azure/azure-storage-permissions.png)

1. Lege ein Ablaufdatum fest, das deiner Richtlinie für die Geheimnisrotation entspricht.
1. Klicke auf **SAS-Token und URL generieren**.
1. Kopiere den Wert des angezeigten Felds **Blob-SAS-URL**. Diese URL wird in {% data variables.product.prodname_dotcom %} verwendet.

**Auf {% data variables.product.prodname_dotcom %}**: {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Klicke auf **Configure stream** (Stream konfigurieren), und wähle **Azure Blob Storage** aus.
   
   ![Auswählen von „Azure Blob Storage“ im Dropdownmenü](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. Gib auf der Konfigurationsseite die BLOB-SAS-URL ein, die du in Azure kopiert hast. Das Feld **Container** wird basierend auf der URL automatisch ausgefüllt.

   ![Eingeben der Streameinstellungen](/assets/images/help/enterprises/audit-stream-add-azureblob.png)
  
1. Klicke auf **Check endpoint** (Endpunkt überprüfen), um sich zu vergewissern, dass {% data variables.product.prodname_dotcom %} eine Verbindung mit dem Azure Blob Storage-Endpunkt herstellen und in ihm schreiben kann.
   
   ![Überprüfen des Endpunkts](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Einrichten des Streamings an Azure Event Hubs

In {% data variables.product.prodname_dotcom %} kannst du einen Stream erst einrichten, wenn du in Microsoft Azure über einen Event Hub-Namespace verfügst. Dann musst du im Namespace eine Event Hub-Instanz erstellen. Zum Einrichten des Streams benötigst du die Details dieser Event Hub-Instanz. Informationen hierzu findest du in der Microsoft-Dokumentation [Schnellstart: Erstellen eines Event Hubs mithilfe des Azure-Portals](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create). 

du benötigst zwei Angaben zu deinem Event Hub: den Instanznamen und die Verbindungszeichenfolge. 

**Führe im Microsoft Azure-Portal folgende Schritte durch**:
1. Suche nach „Event Hubs“.

   ![Das Suchfeld des Azure-Portals](/assets/images/azure/azure-resources-search.png )

1. Klicke auf **Event Hubs**. Daraufhin werden die Namen deiner Event Hubs angezeigt. 
   
   ![Eine Liste mit Event Hubs](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. Notiere dich den Namen des Event Hubs, auf den du streamen möchtest.
1. Klicke auf den erforderlichen Event Hub. Wähle anschließend im linken Menü **Richtlinien für gemeinsamen Zugriff** aus.
1. Wähle in der Liste mit den Richtlinien eine Richtlinie für den gemeinsamen Zugriff aus, oder erstelle eine neue Richtlinie.
   
   ![Eine Liste mit Richtlinien für den gemeinsamen Zugriff](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. Klicke auf die Schaltfläche rechts neben dem Feld **Verbindungszeichenfolge – Primärschlüssel**, um die Verbindungszeichenfolge zu kopieren.
   
   ![Verbindungszeichenfolge des Event Hubs](/assets/images/help/enterprises/azure-connection-string.png)

**Auf {% data variables.product.prodname_dotcom %}**: {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Klicke auf **Configure stream** (Stream konfigurieren), und wähle **Azure Event Hubs** aus.
   
   ![„Azure Events Hub“ im Dropdownmenü auswählen](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. Gib auf der Konfigurationsseite Folgendes ein:
   * Den Namen der Azure Event Hubs-Instanz.
   * Verbindungszeichenfolge.
  
   ![Eingeben der Streameinstellungen](/assets/images/help/enterprises/audit-stream-add-azure.png)
   
1. Klicke auf **Check endpoint** (Endpunkt überprüfen), um sich zu vergewissern, dass {% data variables.product.prodname_dotcom %} eine Verbindung mit dem Azure Event Hub-Endpunkt herstellen und in ihm schreiben kann.
   
   ![Überprüfen des Endpunkts](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-datadog %}
### Einrichten des Streamings an Datadog

Um das Streaming an Datadog einzurichten, musst du ein Clienttoken oder einen API-Schlüssel in Datadog erstellen und dann das Überwachungsprotokollstreaming in {% data variables.product.product_name %} mithilfe des Tokens für die Authentifizierung konfigurieren. Du musst keinen Bucket oder einen anderen Speichercontainer in Datadog erstellen.

Nachdem du das Streaming auf Datadog eingerichtet hast, kannst du deine Überwachungsprotokolldaten anzeigen, indem du nach „github.audit.streaming“ filterst. Weitere Informationen findest du unter [Protokollverwaltung](https://docs.datadoghq.com/logs/).

1. Wenn du noch nicht über ein Datadog-Konto verfügst, erstelle jetzt eins.
1. Generiere in Datadog ein Clienttoken oder einen API-Schlüssel, und klicke dann auf **Schlüssel kopieren**. Weitere Informationen findest du unter [API- und Anwendungsschlüssel](https://docs.datadoghq.com/account_management/api-app-keys/) in der Datadog-Dokumentation. {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Wähle das Dropdownmenü **Stream konfigurieren** aus, und klicke auf **Datadog**.
   
   ![Screenshot: Dropdownmenü „Stream konfigurieren“ mit Auswahl von „Datadog“](/assets/images/help/enterprises/audit-stream-choice-datadog.png)
1. Füge unter „Token“ das Token ein, das du zuvor kopiert hast.

   ![Screenshot: Feld „Token“](/assets/images/help/enterprises/audit-stream-datadog-token.png)
1. Wähle das Dropdownmenü „Website“ aus, und klicke auf deine Datadog-Website. Um deine Datadog-Website zu ermitteln, vergleiche deine Datadog-URL mit der Tabelle unter [Datadog-Websites](https://docs.datadoghq.com/getting_started/site/) in der Datadog-Dokumentation.

   ![Screenshot: Dropdownmenü „Website“](/assets/images/help/enterprises/audit-stream-datadog-site.png)
1. Um zu verifizieren, dass {% data variables.product.prodname_dotcom %} eine Verbindung mit dem Datadog-Endpunkt herstellen und Schreibvorgänge durchführen kann, klicke auf **Endpunkt überprüfen**.
   
   ![Überprüfen des Endpunkts](/assets/images/help/enterprises/audit-stream-check.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}
1. Vergewissere dich nach einigen Minuten, dass auf der Registerkarte **Protokolle** in Datadog Überwachungsprotokolldaten angezeigt werden. Wenn keine Überwachungsprotokolldaten angezeigt werden, stelle sicher, dass dein Token und deine Website in {% data variables.product.prodname_dotcom %} korrekt sind.
{% endif %}

### Einrichten des Streamings an Google Cloud Storage

Zum Einrichten des Streamings an Google Cloud Storage musst du in Google Cloud ein Dienstkonto mit den entsprechenden Anmeldeinformationen und Berechtigungen erstellen und anschließend in {% data variables.product.product_name %} mithilfe der Anmeldeinformationen des Dienstkontos für die Authentifizierung das Streamen von Überwachungsprotokollen konfigurieren.

1. Erstelle ein Dienstkonto für Google Cloud. Du musst keine Zugriffssteuerelemente oder IAM-Rollen für das Dienstkonto festlegen. Weitere Informationen findest du in der Google Cloud-Dokumentation zum [Erstellen und Verwalten von Dienstkonten](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating).
1. Erstelle einen JSON-Schlüssel für das Dienstkonto, und speichere den Schlüssel sicher. Weitere Informationen findest du in der Google Cloud-Dokumentation zum [Erstellen und Verwalten von Dienstkontoschlüsseln](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating).
1. Wenn du noch keinen Bucket erstellt hast, erstelle den Bucket. Weitere Informationen findest du in der Google Cloud-Dokumentation zum [Erstellen von Storage-Buckets](https://cloud.google.com/storage/docs/creating-buckets).
1. Weise dem Dienstkonto die Rolle „Storage Object Creator“ für den Bucket zu. Weitere Informationen findest du in der Google Cloud-Dokumentation zum [Verwenden von Cloud IAM-Berechtigungen](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add).
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Klicke im Dropdownmenü „Configure stream“ (Stream konfigurieren) auf **Google Cloud Storage**.

   ![Screenshot: Dropdownmenü „Configure stream“ (Stream konfigurieren)](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. Gib unter „Bucket“ den Namen deines Google Cloud Storage-Buckets ein.

   ![Screenshot: Textfeld „Bucket“](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. Füge unter „JSON Credentials“ (JSON-Anmeldeinformationen) den gesamten Inhalt der Datei für den JSON-Schlüssel deines Dienstkontos ein.

   ![Screenshot: Textfeld „JSON Credentials“ (JSON-Anmeldeinformationen)](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. Klicke auf **Check endpoint** (Endpunkt überprüfen), um sich zu vergewissern, dass {% data variables.product.prodname_dotcom %} eine Verbindung mit dem Google Cloud Storage-Bucket herstellen und in ihm schreiben kann. 

   ![Screenshot: Schaltfläche „Check endpoint“ (Endpunkt überprüfen)](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Einrichten des Streamings an Splunk

Zum Streamen von Überwachungsprotokollen an den HEC-Endpunkt (HTTP Event Collector) von Splunk musst du sicherstellen, dass der Endpunkt so konfiguriert ist, dass HTTPS-Verbindungen zulässig sind. Weitere Informationen findest du in der Splunk-Dokumentation unter [Set up and use HTTP Event Collector in Splunk Web (Einrichten und Verwenden von HTTP Event Collector in Splunk Web)](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector).

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Klicke auf **Configure stream** (Stream konfigurieren), und wähle **Splunk** aus.
   
   ![Wähle im Dropdownmenü „Splunk“ aus.](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. Gib auf der Konfigurationsseite Folgendes ein:
   * Die Domäne, in der die Anwendung gehostet wird, an die gestreamt werden soll.
  
     Wenn du Splunk Cloud verwendest, muss `Domain` auf `http-inputs-<host>` festgelegt sein, wobei `host` die Domäne ist, die du in Splunk Cloud verwendest. Beispiel: `http-inputs-mycompany.splunkcloud.com`. 

   * Der Port, auf dem die Anwendung Daten empfängt.<br>

     Wenn du Splunk Cloud verwendest, muss `Port` auf `443` festgelegt sein, sofern du die Portkonfiguration nicht geändert hast. Wenn du die kostenlose Testversion von Splunk Cloud verwendest, muss `Port` auf `8088` festgelegt sein.

   * Ein Token, das von {% data variables.product.prodname_dotcom %} verwendet werden kann, um die Anwendung eines Drittanbieters zu authentifizieren.
  
   ![Eingeben der Streameinstellungen](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Lass das Kontrollkästchen **Enable SSL verification** (SSL-Überprüfung aktivieren) aktiviert.

    Überwachungsprotokolle werden immer als verschlüsselte Daten übertragen. Wenn diese Option aktiviert ist, wird jedoch das SSL-Zertifikat deiner Splunk-Instanz beim Bereitstellen von Ereignissen durch {% data variables.product.prodname_dotcom %} überprüft. Durch die SSL-Überprüfung wird sichergestellt, dass Ereignisse sicher an deinen URL-Endpunkt übermittelt werden. Du kannst die Auswahl dieser Option deaktivieren, aber es wird empfohlen, die SSL-Überprüfung aktiviert zu lassen.
1. Klicke auf **Check endpoint** (Endpunkt überprüfen), um sich zu vergewissern, dass {% data variables.product.prodname_dotcom %} eine Verbindung mit dem Splunk-Endpunkt herstellen und in ihm schreiben kann.
   ![Überprüfen des Endpunkts](/assets/images/help/enterprises/audit-stream-check-splunk.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion pause-audit-log-stream %}
## Anhalten des Streamings von Überwachungsprotokollen

Durch Anhalten des Streams kannst du an der empfangenden Anwendung Wartungsarbeiten durchführen, ohne Überwachungsdaten zu verlieren. Überwachungsprotokolle werden bis zu sieben Tage auf {% data variables.product.product_location %} gespeichert und dann exportiert, wenn du die Pause für den Stream beendest.

{% ifversion streaming-datadog %} Datadog akzeptiert nur Protokolle, die höchstens 18 Stunden in der Vergangenheit liegen. Wenn du einen Stream an einen Datadog-Endpunkt für mehr als 18 Stunden anhältst, riskierst du, dass Protokolle verloren gehen, die Datadog nach dem Fortsetzen des Streamings nicht mehr akzeptiert.
{% endif %}

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Klicke auf **Pause stream** (Stream anhalten).
   
   ![Den Stream anhalten](/assets/images/help/enterprises/audit-stream-pause.png)

1. Eine Bestätigungsmeldung wird angezeigt. Klicke auf **Pause stream** (Stream anhalten), um den Vorgang zu bestätigen.

Wenn die Anwendung wieder bereit ist, Überwachungsprotokolle zu empfangen, klicke auf **Resume stream** (Stream fortsetzen), um das Streamen von Überwachungsprotokollen erneut zu starten.
{% endif %}

## Löschen des Überwachungsprotokollstreams

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Klicke auf **Delete stream** (Stream löschen).
   
   ![Den Stream löschen](/assets/images/help/enterprises/audit-stream-delete.png)

1. Eine Bestätigungsmeldung wird angezeigt. Klicke auf **Delete stream** (Stream löschen), um den Vorgang zu bestätigen.
