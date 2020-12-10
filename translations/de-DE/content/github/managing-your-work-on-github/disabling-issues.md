---
title: Issues deaktivieren
intro: Du kannst Issues für Dein Repository deaktivieren, wenn Du keine Beiträge oder Fehlerberichte akzeptierst.
redirect_from:
  - /articles/disabling-issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Hebe unter „Features“ (Funktionen) die Auswahl des Kontrollkästchens **Issues** (Issues) auf. ![Kontrollkästchen „Remove Issues" (Entfernen von Issues)](/assets/images/help/issues/issues_settings_remove_from_repo.png)

Wenn Du Issues zukünftig erneut aktivieren möchtest, sind alle Issues wieder verfügbar, die zuvor hinzugefügt wurden.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}
Please contact

{% data variables.contact.contact_support %} if you want to turn off issues because of abuse from strangers.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
