---
title: Projekte mit JIRA verwalten
intro: 'Sie können JIRA in {% data variables.product.prodname_enterprise %} zur Projektverwaltung integrieren.'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
versions:
  enterprise-server: '*'
---

### JIRA mit einer {% data variables.product.prodname_enterprise %}-Organisation verbinden

1. Melden Sie sich unter „http[s]://[hostname]/login“ bei Ihrem {% data variables.product.prodname_enterprise %}-Konto an.
1. Klicken Sie in der oberen rechten Ecke einer beliebigen Seite auf das Symbol (Zahnrad) mit den Kontoeinstellungen.
1. Klicken Sie auf der linken Seitenleiste auf den Namen Ihrer Organisation.
1. Klicke in der linken Seitenleiste auf **Applications** (Anwendungen).
1. Klicken Sie in der oberen rechten Ecke des Felds **Organization applications** (Organisationsanwendungen) auf **Register new application** (Neue Anwendung registrieren).
1. Tragen Sie die Anwendungseinstellungen ein:
    - Geben Sie „JIRA“ im Feld **Application name** (Anwendungsname) ein.
    - Geben Sie die vollständige URL Ihrer JIRA-Instanz im Feld **Homepage URL** (URL für Startseite) ein.
    - Geben Sie die vollständige URL Ihrer JIRA-Instanz im Feld **Authorization callback URL** (Autorisierungsrückruf-URL) ein.
1. Klicke auf **Register application** (Anwendung registrieren).
1. Beachten Sie oben auf der Seite die **Client-ID** und das **Clientgeheimnis**. Sie benötigen diese Angaben zum Konfigurieren Ihrer JIRA-Instanz.

### Konfiguration der JIRA-Instanz

1. Melden Sie sich auf Ihrer JIRA-Instanz mit administrativem Zugriff bei einem Konto an.
1. Klicken Sie im oberen Bereich der Seite auf das Symbol (Zahnrad) für Einstellungen.
1. Wählen Sie im Dropdownmenü für die Einstellungen **Add-Ons** aus.
1. Klicken Sie auf der linken Seitenleiste unter **Source control** (Quellcodeverwaltung) auf **DVCS accounts** (DVCS-Konto).
1. Klicken Sie auf **Link Bitbucket or GitHub account** (Bitbucket oder GitHub-Konto verknüpfen).
1. Tragen Sie im Modalfenster **Add New Account** (Neues Konto hinzufügen) Ihre {% data variables.product.prodname_enterprise %}-Einstellungen ein:
    - Wählen Sie **GitHub Enterprise** im Dropdownmenü **Host** aus.
    - Geben Sie im Feld **Team or User Account** den Namen Ihrer {% data variables.product.prodname_enterprise %}-Organisation oder Ihres persönlichen Kontos ein.
    - Geben Sie im Feld **OAuth Key** (OAuth-Schlüssel) die Client-ID Ihrer {% data variables.product.prodname_enterprise %}-Entwickleranwendung ein.
    - Geben Sie im Feld **OAuth Secret** (OAuth-Geheimnis) das Clientgeheimnis für Ihre {% data variables.product.prodname_enterprise %}-Entwickleranwendung ein.
    - Deaktivieren Sie **Auto Link New Repositories** (Neue Repositorys automatisch verknüpfen), wenn die Ihrer {% data variables.product.prodname_enterprise %}-Organisation oder Ihrem persönlichen Konto zugehörigen neuen Repositorys nicht verknüpft werden sollen.
    - Deaktivieren Sie **Enable Smart Commits** (Intelligente Commits aktivieren), wenn Sie intelligente Commits nicht aktivieren möchten.
    - Klicke auf **Add** (Hinzufügen).
1. Überprüfen Sie die Berechtigungen, die Sie Ihrem {% data variables.product.prodname_enterprise %}-Konto erteilen, und klicken Sie auf **Authorize application** (Anwendung autorisieren).
1. Geben Sie zum Fortfahren ggf. Ihr Passwort ein.
