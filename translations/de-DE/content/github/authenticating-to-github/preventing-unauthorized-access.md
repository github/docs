---
title: Nicht autorisierten Zugriff verhindern
intro: 'Sie könnten durch die Medien auf einen Sicherheitsvorfall aufmerksam gemacht werden, z. B. auf die Entdeckung des [Heartbleed-Bugs](http://heartbleed.com/), oder Ihr Computer könnte gestohlen werden, während Sie bei {% data variables.product.product_location %} angemeldet sind. In solchen Fällen kannst Du durch das Ändern Deines Passworts den unerwünschten zukünftigen Zugriff auf Dein Konto und Deine Projekte verhindern.'
redirect_from:
  - /articles/preventing-unauthorized-access
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.product_name %} schreibt ein Passwort vor, um vertrauliche Aktionen durchzuführen, beispielsweise das Hinzufügen neuer SSH-Schlüssel, das Autorisieren von Anwendungen oder die Bearbeitung von Teammitgliedern.

Wenn Du Dein Passwort geändert hast, solltest Du zum Schutz Deines Kontos die folgenden Aktionen durchführen:

- [Aktiviere die Zwei-Faktor-Authentifizierung](/articles/about-two-factor-authentication) für Dein Konto, damit für den Zugriff mehr als nur ein Passwort erforderlich ist.
- [Überprüfe Deine SSH-Schlüssel](/articles/reviewing-your-ssh-keys), [Deployment-Schlüssel](/articles/reviewing-your-deploy-keys) und [autorisierten Integrationen](/articles/reviewing-your-authorized-integrations), und widerrufe nicht autorisierte oder unbekannte Zugriffe in Deinen SSH- und Anwendungseinstellungen.
{% if currentVersion == "free-pro-team@latest" %}
- [Verifiziere alle E-Mail-Adressen](/articles/verifying-your-email-address). Wenn ein Angreifer seine E-Mail-Adresse zu Deinem Konto hinzugefügt hat, könnte er damit eine unerwünschte Zurücksetzung des Passworts erzwingen.
{% endif %}
- [Überprüfe das Sicherheitsprotokoll Deines Kontos](/github/authenticating-to-github/reviewing-your-security-log). So erhältst Du einen Überblick über die verschiedenen Konfigurationen Deiner Repositorys. Beispielsweise kannst Du sicherstellen, dass keine privaten Repositorys in öffentliche Repositorys umgewandelt oder keine Repositorys übertragen wurden.
- [Review the webhooks](/articles/creating-webhooks) on your repositories. Webhooks could allow an attacker to intercept pushes made to your repository.
- [Stelle sicher, dass keine neuen Deployment-Schlüssel](/guides/managing-deploy-keys/#deploy-keys) erstellt wurden. Dadurch könnten externe Server auf Deine Projekte zugreifen.
- Überprüfe Commits, die zuletzt zu Deinen Repositorys durchgeführt wurden.
- Überprüfe die Liste der Mitarbeiter aller Repositorys.
