---
title: Rollen für ein Enterprise-Kontos
intro: Zur Steuerung des Zugriffs auf die Einstellungen und Daten Deines Enterprise-Kontos kannst Du den Benutzern Deines Enterprise-Kontos verschiedene Rollen zuweisen.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Weitere Informationen zum Hinzufügen von Personen zu Deinem Enterprise-Konto findest Du unter „[Personen zur Verwaltung Deines Enterprise-Kontos einladen](/articles/inviting-people-to-manage-your-enterprise-account).“

### Informationen zu den Rollen eines Enterprise-Kontos

Enterprise-Konten beinhalten eine Reihe von Administratorrollen, die Du den Benutzern Deines Unternehmens zuweisen kannst. Die einzelnen Administratorrollen sind spezifischen Geschäftsfunktionen zugeordnet und beinhalten Berechtigungen für bestimmte Aufgaben innerhalb des Enterprise-Kontos.

{% data reusables.enterprise-accounts.enterprise-administrators %}

### Enterprise-Inhaber

Enterprise-Inhaber haben vollständige Kontrolle über das Enterprise-Konto und können jede Aktion durchführen. Hierzu gehören folgende Aufgaben:
- Administratoren verwalten
- Organisationen im Unternehmen hinzufügen und entfernen
- Enterprise-Einstellungen verwalten
- Richtlinien organisationsübergreifend durchsetzen
- Abrechnungseinstellungen verwalten

Keinen Zugriff haben Enterprise-Inhaber auf die Einstellungen und Inhalte der einzelnen Organisationen, es sei denn, sie sind auch Inhaber einer Organisation oder ihnen wird direkter Zugriff auf das Repository einer Organisation erteilt. Umgekehrt haben die Inhaber einer Organisation innerhalb eines Enterprise-Kontos keinen Zugriff auf das Enterprise-Konto selbst, es sei denn, sie sind auch Enterprise-Inhaber.

Du kannst Deinem Enterprise-Konto beliebig viele Enterprise-Inhaber hinzufügen. Enterprise-Inhaber müssen über ein persönliches Konto auf {% data variables.product.prodname_dotcom %} verfügen. Zum Schutz des Geschäfts hat sich als Best Practice bewährt, nur wenigen Personen innerhalb eines Unternehmens die Berechtigungen eines Enterprise-Inhabers zu erteilen.

### Enterprise-Mitglieder

Mitglieder der Organisationen Deines Enterprise-Kontos sind automatisch auch Mitglieder des Enterprise-Kontos. Mitglieder können in Organisationen zusammenarbeiten und können Organisationseigentümer sein, aber Mitglieder können nicht auf die Einstellungen für Enterprise-Konten zugreifen oder diese konfigurieren, auch nicht die Abrechnungseinstellungen.

Die Mitglieder Deines Enterprise-Kontos können über unterschiedliche Zugriffsstufen auf die einzelnen Organisationen Deines Enterprise-Kontos und die Repositorys innerhalb dieser Organisationen verfügen. Du kannst anzeigen, auf welche Ressourcen die einzelnen Personen Zugriff haben. Weitere Informationen findest Du unter „[Personen Deines Enterprise-Kontos anzeigen](/articles/viewing-people-in-your-enterprise-account).“

Weitere Informationen zu den Berechtigungen auf Organisationsebene findest Du unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization).“

Externe Mitarbeiter mit Zugriff auf Repositorys Deiner Organisation werden ebenfalls auf der Registerkarte „People“ (Personen) Deines Enterprise-Kontos aufgeführt, sind jedoch keine Enterprise-Mitglieder und haben keinerlei Zugriff auf das Enterprise-Konto. Weitere Informationen zu den Berechtigungen externer Mitarbeiter findest Du unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization#outside-collaborators).“

### Abrechnungsmanager

Abrechnungsmanager haben lediglich Zugriff auf die Abrechnungseinstellungen des Enterprise-Kontos. Abrechnungsmanager eines Enterprise-Kontos können folgende Aufgaben durchführen:
- Benutzerlizenzen, {% data variables.large_files.product_name_short %}-Pakete und andere Abrechnungseinstellungen anzeigen und verwalten
- Liste der Abrechnungsmanager anzeigen
- Andere Abrechnungsmanager hinzufügen oder entfernen

Abrechnungsmanager haben keinen Zugriff auf die Organisationen und Repositorys Deines Enterprise-Kontos. Sie können auch keine Enterprise-Inhaber hinzufügen oder entfernen. Abrechnungsmanager müssen über ein persönliches Konto auf {% data variables.product.prodname_dotcom %} verfügen.

### Weiterführende Informationen

- „[Informationen zu Enterprise-Konten](/articles/about-enterprise-accounts)“
