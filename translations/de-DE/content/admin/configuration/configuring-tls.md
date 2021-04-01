---
title: TLS konfigurieren
intro: 'Sie können Transport Layer Security (TLS) auf {% data variables.product.product_location %} konfigurieren, damit Sie ein von einer vertrauenswürdigen Zertifizierungsstelle signiertes Zertifikat verwenden können.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration/
  - /enterprise/admin/guides/installation/about-tls/
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

### Informationen zu Transport Layer Security

TLS, das SSL ersetzt hat, wird beim erstmaligen Start von {% data variables.product.prodname_ghe_server %} mit einem selbstsignierten Zertifikat aktiviert und konfiguriert. Da Webbrowser und Git-Clients selbstsignierten Zertifikaten nicht vertrauen, melden diese Clients Zertifikatswarnungen, bis Sie TLS deaktivieren oder ein von einer vertrauenswürdigen Zertifizierungsstelle wie Let's Encrypt signiertes Zertifikat hochladen.

Die {% data variables.product.prodname_ghe_server %}-Appliance sendet HTTP Strict Transport Security-Header, wenn SSL aktiviert ist. Wenn TLS deaktiviert wird, verlieren die Benutzer den Zugriff auf die Appliance, da ihre Browser eine Protokollherabstufung auf HTTP nicht zulassen. Weitere Informationen finden Sie unter „[HTTP Strict Transport Security (HSTS)](https://de.wikipedia.org/wiki/HTTP_Strict_Transport_Security)“ auf Wikipedia.

{% data reusables.enterprise_installation.terminating-tls %}

Sie müssen TLS für Ihre Instanz aktivieren, um Benutzern zu erlauben, FIDO U2F für die Zwei-Faktor-Authentifizierung zu verwenden. Weitere Informationen finden Sie unter „[Zwei-Faktor-Authentifizierung konfigurieren](/articles/configuring-two-factor-authentication)“.

### Vorrausetzungen

Um TLS in der Produktion zu verwenden, müssen Sie über ein Zertifikat verfügen, das ein unverschlüsseltes PEM-Format aufweist und von einer vertrauenswürdigen Zertifizierungsstelle signiert wurde.

Darüber hinaus schreibt Ihr Zertifikat Subject Alternative Names vor, die für die in „[Subdomain-Isolation aktivieren](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)“ aufgelisteten Subdomains konfiguriert sind, und es muss die gesamte Zertifikatskette enthalten, wenn es von einer zwischengeschalteten Zertifizierungsstelle signiert wurde. Weitere Informationen finden Sie unter „[Subject Alternative Name](http://en.wikipedia.org/wiki/SubjectAltName)“ auf Wikipedia.

Du kannst mit dem Befehl `ghe-ssl-generate-csr` eine Anfrage zur Signierung des Zertifikats (CSR) für Deine Instanz erzeugen. Weitere Informationen finden Sie unter „[Befehlszeilenprogramme](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)“.

### Benutzerdefiniertes TLS-Zertifikat hochladen

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
4. Wählen Sie unter „TLS Protocol support“ (TLS-Protokollunterstützung) die Protokolle aus, die zugelassen werden sollen. ![Optionsfelder mit Optionen zur Auswahl von TLS-Protokollen](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. Klicken Sie unter „Certificate“ (Zertifikat) auf **Choose File** (Datei auswählen), um ein TLS-Zertifikat oder eine Zertifikatskette (im PEM-Format) zur Installation auszuwählen. Diese Datei hat in der Regel eine *.pem*-, *.crt*- oder *.cer*-Erweiterung. ![Schaltfläche zum Suchen der TLS-Zertifikatsdatei](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. Klicken Sie unter „Unencrypted key“ (Unverschlüsselter Schlüssel) auf **Choose File** (Datei auswählen), um einen TLS-Schlüssel (im PEM-Format) zur Installation auszuwählen. Diese Datei hat in der Regel eine *.key*-Erweiterung. ![Schaltfläche zum Suchen der TLS-Schlüsseldatei](/assets/images/enterprise/management-console/install-tls-key.png)

  {% warning %}

  **Warnung**: Ihr TLS-Schlüssel darf keine Passphrase aufweisen. Weitere Informationen finden Sie unter „[Passphrase aus Ihrer Schlüsseldatei entfernen](/enterprise/{{ currentVersion }}/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)“.

  {% endwarning %}
{% data reusables.enterprise_management_console.save-settings %}

### Informationen zur Let's Encrypt-Unterstützung

Let's Encrypt ist eine öffentliche Zertifizierungsstelle, die kostenlose, automatisierte TLS-Zertifikate ausstellt, denen Browsern vertrauen, die das ACME-Protokoll verwenden. Sie können Let's Encrypt-Zertifikate auf Ihrer Appliance automatisch abrufen und verlängern, ohne dass eine manuelle Wartung erforderlich ist.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Wenn Sie die Automatisierung der TLS-Zertifikatsverwaltung mit Let's Encrypt aktivieren, kontaktiert {% data variables.product.product_location %} die Let's Encrypt-Server, um ein Zertifikat abzurufen. Zum Verlängern eines Zertifikats müssen die Let's Encrypt-Server die Steuerung des konfigurierten Domain-Namens mit eingehenden HTTP-Anforderungen validieren.

Darüber hinaus können Sie das Befehlszeilenprogramm `ghe-ssl-acme` auf {% data variables.product.product_location %} verwenden, um ein Let's Encrypt-Zertifikat automatisch zu generieren. Weitere Informationen finden Sie unter „[Befehlszeilenprogramme](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-ssl-acme)“.

### TLS mit Let's Encrypt konfigurieren

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
5. Wählen Sie **Enable automation of TLS certificate management using Let's Encrypt** (Automatisierung der TLS-Zertifikatsverwaltung mit Let's Encrypt aktivieren) aus. ![Kontrollkästchen zum Aktivieren von Let's Encrypt](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% data reusables.enterprise_management_console.privacy %}
7. Klicken Sie auf **Request TLS certificate** (TLS-Zertifikat anfordern). ![Schaltfläche „Request TLS certificate“ (TLS-Zertifikat anfordern)](/assets/images/enterprise/management-console/request-tls-button.png)
8. Klicken Sie auf **Save configuration** (Konfiguration speichern).
