---
title: TLS konfigurieren
intro: 'Du kannst Transport Layer Security (TLS) auf {% data variables.product.product_location %} konfigurieren, damit du ein von einer vertrauenswürdigen Zertifizierungsstelle signiertes Zertifikat verwenden kannst.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration
  - /enterprise/admin/guides/installation/about-tls
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
  - /admin/configuration/configuring-tls
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: c11f78b69f5b251a63c0796d46bca4d6c926f002
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682333'
---
## Informationen zu Transport Layer Security

TLS, das SSL ersetzt hat, wird beim erstmaligen Start von {% data variables.product.prodname_ghe_server %} mit einem selbstsignierten Zertifikat aktiviert und konfiguriert. Da Webbrowser und Git-Clients selbstsignierten Zertifikaten nicht vertrauen, melden diese Clients Zertifikatswarnungen, bis du TLS deaktivierst oder ein von einer vertrauenswürdigen Zertifizierungsstelle wie Let's Encrypt signiertes Zertifikat hochlädst.

Die {% data variables.product.prodname_ghe_server %}-Appliance sendet HTTP Strict Transport Security-Header, wenn SSL aktiviert ist. Wenn TLS deaktiviert wird, verlieren die Benutzer den Zugriff auf die Appliance, da ihre Browser eine Protokollherabstufung auf HTTP nicht zulassen. Weitere Informationen findest du in Wikipedia unter „[HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)“.

{% data reusables.enterprise_installation.terminating-tls %}

Du musst TLS für deine Instanz aktivieren, um Benutzern zu erlauben, FIDO U2F für die Zwei-Faktor-Authentifizierung zu verwenden. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication).

## Voraussetzungen

Um TLS in der Produktion zu verwenden, musst du über ein Zertifikat verfügen, das ein unverschlüsseltes PEM-Format aufweist und von einer vertrauenswürdigen Zertifizierungsstelle signiert wurde.

Zudem erfordert das Zertifikat alternative Antragstellernamen, die für die unter „[Aktivieren von Unterdomänenisolation ](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)“ aufgeführten Unterdomänen konfiguriert sind, und muss die vollständige Zertifikatskette einschließen, wenn es von einer Zwischenzertifizierungsstelle signiert wurde. Weitere Informationen findest du in Wikipedia unter „[Alternativer Antragstellername](http://en.wikipedia.org/wiki/SubjectAltName)“.

Du kannst mit dem Befehl `ghe-ssl-generate-csr` eine Zertifikatsignaturanforderung für deine Instanz erzeugen. Weitere Informationen findest du unter [Befehlszeilenprogramme](/enterprise/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr).

Der Schlüssel muss ein RSA-Schlüssel sein und darf keine Passphrase aufweisen. Weitere Informationen findest du unter „[Entfernen der Passphrase aus der Schlüsseldatei](/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)“.

## Benutzerdefiniertes TLS-Zertifikat hochladen

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
4. Wähle unter „TLS Protocol support“ (TLS-Protokollunterstützung) die Protokolle aus, die zugelassen werden sollen.
  ![Optionsfelder mit Optionen zur Auswahl von TLS-Protokollen](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. Klicke unter „Zertifikat“ auf **Datei auswählen**, um ein TLS-Zertifikat oder eine Zertifikatskette (im PEM-Format) zur Installation auszuwählen. Diese Datei hat in der Regel die Erweiterung *.pem*, *.crt* oder *.cer*.
  ![Schaltfläche zum Suchen der TLS-Zertifikatsdatei](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. Klicke unter „Unverschlüsselter Schlüssel“ auf **Datei auswählen**, um den zu installierenden RSA-Schlüssel (im PEM-Format) auszuwählen. Diese Datei hat in der Regel die Erweiterung *.key*.
  ![Schaltfläche zum Suchen der TLS-Schlüsseldatei](/assets/images/enterprise/management-console/install-tls-key.png)

{% data reusables.enterprise_management_console.save-settings %}

## Informationen zur Let's Encrypt-Unterstützung

Let's Encrypt ist eine öffentliche Zertifizierungsstelle, die kostenlose, automatisierte TLS-Zertifikate ausstellt, denen Browsern vertrauen, die das ACME-Protokoll verwenden. Du kannst Let's Encrypt-Zertifikate auf deiner Appliance automatisch abrufen und verlängern, ohne dass eine manuelle Wartung erforderlich ist.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Wenn du die Automatisierung der TLS-Zertifikatsverwaltung mit Let's Encrypt aktivierst, kontaktiert {% data variables.product.product_location %} die Let's Encrypt-Server, um ein Zertifikat abzurufen. Zum Verlängern eines Zertifikats müssen die Let's Encrypt-Server die Steuerung des konfigurierten Domain-Namens mit eingehenden HTTP-Anforderungen validieren.

Darüber hinaus kannst du das Befehlszeilenprogramm `ghe-ssl-acme` auf {% data variables.product.product_location %} verwenden, um ein Let's Encrypt-Zertifikat automatisch zu generieren. Weitere Informationen findest du unter [Befehlszeilenprogramme](/enterprise/admin/guides/installation/command-line-utilities#ghe-ssl-acme).

## TLS mit Let's Encrypt konfigurieren

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
5. Wähle **Automatisierung der TLS-Zertifikatsverwaltung mit Let's Encrypt aktivieren** aus.
  ![Kontrollkästchen zum Aktivieren von Let's Encrypt](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% data reusables.enterprise_management_console.privacy %}
7. Klicke auf **TLS-Zertifikat anfordern**.
  ![Schaltfläche „TLS-Zertifikat anfordern“](/assets/images/enterprise/management-console/request-tls-button.png)
8. Warte, bis sich der Status von „STARTED“ in „DONE“ ändert.
   ![Let's Encrypt-Status](/assets/images/enterprise/management-console/lets-encrypt-status.png)
9. Klicke auf **Konfiguration speichern**.
