---
title: Erste Schritte mit GitHub AE
intro: 'Erste Schritte beim Einrichten und Konfigurieren von {% data variables.product.product_name %} für {% data variables.location.product_location %}.'
versions:
  ghae: '*'
ms.openlocfilehash: 957a922a2493abd8f625cdb9e9d6650283820222
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180061'
---
In diesem Leitfaden erfährst du, wie du Einstellungen für {% data variables.location.product_location %} in {% data variables.product.product_name %} als Unternehmensadministrator*in einrichtest, konfigurierst und verwaltest. Weitere Informationen zu {% data variables.product.product_name %} findest du unter [Informationen zu {% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae).

## Teil 1: Einrichten von {% data variables.product.product_name %}
Um mit {% data variables.product.product_name %} zu beginnen, kannst du dein Unternehmenskonto erstellen, {% data variables.product.product_name %} initialisieren, eine Liste zugelassener IP-Adressen sowie die Benutzerauthentifizierung und Bereitstellung konfigurieren und die Abrechnung für {% data variables.location.product_location %} verwalten.

### 1. Erstellen deines {% data variables.product.product_name %}-Unternehmenskontos
Zuerst musst du {% data variables.product.product_name %} erwerben. Weitere Informationen erhältst du vom [Vertriebsteam für {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

{% data reusables.github-ae.initialize-enterprise %}

### 2. Initialisieren von {% data variables.product.product_name %}
Nachdem {% data variables.product.company_short %} das Besitzerkonto für {% data variables.location.product_location %} in {% data variables.product.product_name %} erstellt hat, erhältst du eine E-Mail, um dich anzumelden und die Initialisierung abzuschließen. Während der Initialisierung benennst du als Unternehmensbesitzer*in {% data variables.location.product_location %}, konfigurierst SAML-SSO, erstellst Richtlinien für alle Organisationen in {% data variables.location.product_location %} und konfigurierst einen Supportkontakt für deine Enterprise-Mitglieder. Weitere Informationen findest du unter [Initialisieren von {% data variables.product.prodname_ghe_managed %}](/admin/configuration/configuring-your-enterprise/initializing-github-ae).

### 3. Einschränken des Netzwerkzugriffs
Du kannst eine Liste bestimmter, zugelassener IP-Adressen konfigurieren, um den Zugriff auf Ressourcen im Besitz von Organisationen in deinem Unternehmenskonto einzuschränken. Weitere Informationen findest du unter [Einschränken des Netzwerkdatenverkehrs in deinem Unternehmen mit einer Liste zugelassener IP-Adressen](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

### 4. Verwalten der Identität und des Zugriffs für {% data variables.location.product_location %}
Du kannst den Zugriff auf {% data variables.location.product_location %} in {% data variables.product.product_name %} über einen Identitätsanbieter (IdP) mithilfe von SAML-SSO (Single Sign-On, einmaliges Anmelden) für die Benutzerauthentifizierung und SCIM (System for Cross-Domain Identity Management) für die Benutzerbereitstellung zentral verwalten. Nachdem du die Bereitstellung konfiguriert hast, kannst du der Anwendung Benutzer über den IdP zuweisen bzw. deren Zuweisung aufheben und Benutzerkonten im Unternehmen erstellen oder deaktivieren. Weitere Informationen findest du unter [Informationen zur Identitäts- und Zugriffsverwaltung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise).

### 5. Verwalten der Abrechnung für {% data variables.location.product_location %}
Besitzer*innen des Abonnements für {% data variables.location.product_location %} in {% data variables.product.product_name %} können Abrechnungsdetails für {% data variables.product.product_name %} im Azure-Portal einsehen. Weitere Informationen findest du unter [Verwalten der Abrechnung für ein Unternehmen](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise).

## Teil 2: Organisieren und Verwalten von Enterprise-Mitgliedern
Als Unternehmensbesitzer*in für {% data variables.product.product_name %} kannst du Einstellungen auf Benutzer-, Repository-, Team- und Organisationsebene verwalten. Du kannst Mitglieder von {% data variables.location.product_location %} verwalten, Organisationen erstellen und verwalten, Richtlinien für die Repositoryverwaltung festlegen und Teams erstellen und verwalten.

### 1. Verwalten von Mitgliedern von {% data variables.location.product_location %}
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Erstellen von Organisationen
{% data reusables.getting-started.creating-organizations %}

### 3. Hinzufügen von Mitgliedern zu Organisationen
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Erstellen von Teams
{% data reusables.getting-started.creating-teams %}

### 5. Festlegen von Berechtigungsstufen für Organisationen und Repositorys
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Erzwingen von Repositoryverwaltungsrichtlinien
{% data reusables.getting-started.enforcing-repo-management-policies %}

## Teil 3: Sicheres Erstellen
Um die Sicherheit von {% data variables.location.product_location %} zu erhöhen, kannst du {% data variables.location.product_location %} überwachen und Sicherheits- und Analysefeatures für deine Organisationen konfigurieren.

### 1. Überwachen von {% data variables.location.product_location %}
Du kannst {% data variables.location.product_location %} mit deinem Aktivitätsdashboard und dem Überwachungsprotokoll überwachen. Weitere Informationen findest du unter [Überwachung von Aktivitäten in deinem Unternehmen](/admin/monitoring-activity-in-your-enterprise).

### 2. Konfigurieren von Sicherheitsfeatures für deine Organisationen
{% data reusables.getting-started.configuring-security-features %}

## Teil 4: Anpassen und Automatisieren der Arbeit in {% data variables.location.product_location %}
Du kannst die Arbeit in Organisationen in {% data variables.location.product_location %} mit der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API sowie mit {% data variables.product.prodname_actions %} und {% data variables.product.prodname_pages %} anpassen und automatisieren.

### 1. Verwenden der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API
{% data reusables.getting-started.api %}

### 2. Erstellen von {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

Weitere Informationen zum Aktivieren und Konfigurieren von {% data variables.product.prodname_actions %} für {% data variables.product.product_name %} findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae).

### 3. Verwenden von {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}
## Teil 5: Verwenden der Lern- und Supportressourcen von {% data variables.product.prodname_dotcom %}
Die Mitglieder deines Unternehmens können mit unseren Lernressourcen mehr über Git und {% data variables.product.prodname_dotcom %} erfahren, und du kannst mit {% data variables.product.prodname_dotcom %} Enterprise Support genau den Support erhalten, den du benötigst.

### 1. Informationen zu {% data variables.product.product_name %} in {% data variables.product.prodname_docs %}
Du kannst die Dokumentation zu den mit {% data variables.product.prodname_ghe_managed %} verfügbaren Features lesen. Weitere Informationen findest du unter [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

### 2. Lernen mit {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Arbeiten mit {% data variables.product.prodname_dotcom %} Enterprise Support
{% data reusables.getting-started.contact-support-enterprise %}
