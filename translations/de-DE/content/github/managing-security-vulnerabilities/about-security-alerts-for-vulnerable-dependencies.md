---
title: Sicherheitswarnungen für angreifbare Abhängigkeiten
intro: '{% data variables.product.product_name %} sendet Sicherheitswarnungen, wenn wir Schwachstellen entdecken, die Dein Repository betreffen.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zu Sicherheitslücken

{% data reusables.repositories.a-vulnerability-is %} Abhängig vom Schweregrad und der Art und Weise, wie Dein Projekt die Abhängigkeit verwendet, können Schwachstellen eine Reihe von Problemen für Dein Projekt verursachen, wie auch für die Personen, die es verwenden. Du kannst Schwachstellen für bestimmte Arten von Abhängigkeiten in Deinem {% data variables.product.product_name %}-Repository verfolgen und beheben.

Wenn {% data variables.product.prodname_dotcom %} eine Schwachstelle in der {% data variables.product.prodname_advisory_database %} oder auf [WhiteSource](https://www.whitesourcesoftware.com/GitHubSecurityAlerts) in einer der Abhängigkeiten auf dem entsprechenden Diagramm Deines Repositorys entdeckt, senden wir Dir eine Sicherheitswarnung. Weitere Informationen über die {% data variables.product.prodname_advisory_database %} findest Du unter „<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">Sicherheitslücken in der {% data variables.product.prodname_advisory_database %} durchsuchen</a>."

{% if currentVersion == "free-pro-team@latest" %}
### Warnungen und automatisierte Sicherheitsupdates für angreifbare Abhängigkeiten
{% else %}
### Sicherheitswarnungen für angreifbare Abhängigkeiten
{% endif %}

Wenn eine Schwachstelle zur GitHub Advisory Database hinzugefügt wird, identifizieren wir{% if currentVersion == "free-pro-team@latest" %} öffentliche{% endif %} Repositorys{% if currentVersion == "free-pro-team@latest" %} (sowie private Repositorys die sich für die Schwachstellenentdeckung angemeldet haben){% endif %}, welche die betroffene Version der Abhängigkeit einsetzen{% if currentVersion == "free-pro-team@latest" %}, senden eine Sicherheitswarnung an die Repository-Betreuer und erstellen ein automatisiertes Sicherheitsupdate{% else %} und senden eine Sicherheitswarnung an die Repository-Betreuer{% endif %}.

Jede Sicherheitswarnung enthält einen Schweregrad{% if currentVersion == "free-pro-team@latest" %}, einen Link zur betroffenen Datei in Deinem Projekt und einen Link zu einem Pull Request mit einem automatisierten Sicherheitsupdate zur Behebung der Schwachstelle{% else %} sowie einen Link zur betroffenen Datei in Deinem Projekt{% endif %}. Sofern verfügbar enthält die Benachrichtigung weitere Details über die Schwachstelle.

Du kannst alle Warnungen, die ein bestimmtes Projekt betreffen,{% if currentVersion == "free-pro-team@latest" %} auf der Registerkarte „Alerts“ (Warnungen) des Repositorys oder{% endif %} im Abhängigkeitsdiagramm des Repositorys sehen.{% if currentVersion == "free-pro-team@latest" %}Weitere Informationen findest Du unter „[Angreifbare Abhängigkeiten in Deinem Repository anzeigen und aktualisieren](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository).“{% endif %}

Standardmäßig senden wir Sicherheitswarnungen an Personen mit Administratorberechtigungen in den betroffenen Repositorys. {% data variables.product.product_name %} gibt identifizierte Schwachstellen für ein Repository niemals öffentlich bekannt.{% if currentVersion == "free-pro-team@latest" %} Du kannst auch Sicherheitswarnungen für zusätzliche Personen oder Teams aktivieren, die in organisationseigenen Repositorys arbeiten. Weitere Informationen findest Du unter „[Warnungen für angreifbare Abhängigkeiten in den Repositorys Deiner Organisation verwalten](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)“.{% endif %}

{% data reusables.repositories.enable-security-alerts %}
{% if currentVersion == "free-pro-team@latest" %}
Automatisierte Sicherheitsupdates aktualisieren angreifbare Abhängigkeiten auf die Mindestversion, die die Schwachstelle behebt. Automatisierte Sicherheitsupdates werden automatisch in Repositorys aktiviert, die das Abhängigkeitsdiagramm und Sicherheitswarnungen verwenden, Du kannst jedoch automatische Pull Requests deaktivieren und stattdessen Sicherheitsupdates manuell erstellen. Weitere Informationen findest Du unter „[Automatisierte Sicherheitsupdates konfigurieren](/github/managing-security-vulnerabilities/configuring-automated-security-updates).“

{% data variables.product.prodname_dotcom %} erkennt angreifbare Abhängigkeiten in _öffentlichen_ Repositorys und warnt standardmäßig vor ihnen. Um Sicherheitswarnungen für angreifbare Abhängigkeiten in einem _privaten_ Repository zu erhalten, muss ein Inhaber oder eine Person mit Administratorberechtigungen für das Repository das Abhängigkeitsdiagramm und Sicherheitswarnungen im Repository aktivieren. Weitere Informationen findest Du unter „[Datennutzung für Dein privates Repository zulassen oder ablehnen](/articles/opting-into-or-out-of-data-use-for-your-private-repository).“
{% endif %}

Eine Liste der unterstützten Sprachen, in denen {% data variables.product.product_name %} Schwachstellen und Abhängigkeiten erkennen kann, findest Du unter „[Pakete auflisten, von denen ein Repository abhängig ist](/articles/listing-the-packages-that-a-repository-depends-on).“

{% warning %}

**Hinweis**: Es kann nicht garantiert werden, dass die Sicherheitsfunktionen von {% data variables.product.product_name %}, beispielsweise Sicherheitswarnungen, alle Schwachstellen erkennen können. Obwohl wir immer versuchen, unsere Schwachstellen-Datenbank aktuell zu halten und Dir unsere neuesten Informationen zur Verfügung zu stellen, können wir nicht alles erfassen oder Dich innerhalb eines garantierten Zeitrahmens über bekannte Schwachstellen informieren. Diese Funktionen ersetzen nicht die menschliche Überprüfung jeder Abhängigkeit auf potenzielle Schwachstellen oder andere Issues. Daher empfehlen wir, einen Sicherheitsdienst zu konsultieren oder bei Bedarf einen gründlichen Schwachstellen-Review durchzuführen.

{% endwarning %}

### Benachrichtigungen für Sicherheitswarnungen konfigurieren

Standardmäßig erhältst Du Sicherheitswarnungen per E-Mail{% if currentVersion == "free-pro-team@latest" %}, sortiert nach der spezifischen Schwachstelle{% endif %}. Du kannst Sicherheitswarnungen auch in einer wöchentlichen E-Mail erhalten, die Warnungen für bis zu 10 Deiner Repositorys zusammenfasst, in Deinen Web-Benachrichtigungen oder in der {% data variables.product.product_name %}-Benutzeroberfläche. Weitere Informationen findest Du unter {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}„[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#security-alert-options){% else %}„[Auslieferungsmethode Deiner Benachrichtigungen wählen](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} Weitere Informationen findest Du unter {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}„[Benachrichtigungen konfigurieren](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}„[Über E-Mail-Benachrichtigungen](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}.{% endif %}

### Weiterführende Informationen

{% if currentVersion == "free-pro-team@latest" %}- „[Automatisierte Sicherheitsupdates konfigurieren](/github/managing-security-vulnerabilities/configuring-automated-security-updates)"
- „[Angreifbare Abhängigkeiten in Deinem Repository anzeigen und aktualisieren](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)“
- „[Grundlegendes zur Verwendung und zum Schutz Deiner Daten in {% data variables.product.product_name %}](/categories/understanding-how-github-uses-and-protects-your-data)“{% endif %}
- [Definition für „Schwachstelle“](https://cve.mitre.org/about/terminology.html#vulnerability) von MITRE
