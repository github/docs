---
title: Informationen zu Branch-Einschränkungen
intro: 'Branches innerhalb von Repositorys, die zu Organisationen gehören, können so konfiguriert werden, dass nur bestimmte Benutzer{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} oder{% endif %} Teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} oder Apps{% endif %} Pushes an den Branch durchführen können.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/about-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn Du Branch-Einschränkungen aktivierst, können nur berechtigte Benutzer{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} oder{% endif %} Teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} oder Apps{% endif %} Pushes an den geschützten Branch durchführen. Weitere Informationen findest Du unter „[Branch-Einschränkungen aktivieren](/articles/enabling-branch-restrictions)" und „[Über geschützte Branches](/articles/about-protected-branches)." Sie können die Benutzer{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}{% else %} oder{% endif %} Teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} oder Apps{% endif %} mit Push-Zugriff auf einen geschützten Branch in den Einstellungen des geschützten Branches anzeigen und bearbeiten.

Den Push-Zugriff auf einen geschützten Branch kannst du nur Benutzern{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% else %} oder{% endif %} Teams{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} oder installierten {% data variables.product.prodname_github_apps %}{% endif %} gewähren, die Schreibzugriff (`write`) auf ein Repository haben.

Benutzer{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} und Apps{% endif %} mit Administratorberechtigungen für ein Repository können immer Pushes an einen geschützten Branch durchführen.

{% tip %}

**Hinweis:** Wenn „Include administrators“ (Administratoren einbeziehen) aktiviert ist und Du die erforderlichen Statuschecks für den Branch aktiviert hast und irgendeiner dieser Statuschecks fehlschlägt, schlägt auch jeder Versuch fehl, Änderungen an den geschützten Branch zu übertragen, selbst für Benutzer{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} und Apps{% endif %} mit Administratorberechtigungen. Weitere Informationen findest Du unter „[Erforderlicher Statuschecks aktivieren](/articles/enabling-required-status-checks)."

{% endtip %}

### Weiterführende Informationen

- „[Informationen zu geschützten Branches](/articles/about-protected-branches)“
- „[Geschützte Branches konfigurieren](/articles/configuring-protected-branches)“
- „[Informationen zu erforderlichen Statuschecks](/articles/about-required-status-checks)“
- „[Erforderliche Statuschecks aktivieren](/articles/enabling-required-status-checks)“
