---
title: Push-Begrenzungen für Git festlegen
intro: Du kannst eine Größenbegrenzung für Git-Objekte in einem Repository erzwingen.
redirect_from:
  - /enterprise/admin/guides/installation/git-server-settings/
  - /enterprise/admin/articles/setting-git-push-limits/
  - /enterprise/admin/installation/setting-git-push-limits
versions:
  enterprise-server: '*'
---

Um die Größe Deines Repositorys handhabbar zu halten und Performance-Probleme zu vermeiden, konfiguriere ein Dateigrößenlimit für Repositorys auf Deiner Instanz.

Wenn Du Repository-Uploadlimits erzwingst, können Benutzer standardmäßig keine Dateien hinzufügen oder aktualisieren, die größer als 100 MB sind.

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**Hinweis:** Nur Dateien, die größer sind als {% data variables.large_files.warning_size %}, werden mit der Git-Push-Begrenzung abgeglichen. Kontaktieren Sie {% data variables.contact.contact_ent_support %}, wenn Sie eine niedrigere Push-Begrenzung festlegen müssen.

{% endtip %}
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „Repository upload limit“ (Upload-Begrenzung für Repository) das Dropdownmenü, und klicken Sie auf eine maximale Objektgröße.![Dropdownmenü mit Optionen für die maximale Objektgröße](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Optional kannst Du **Für alle Repositorys erzwingen** auswählen, um ein maximales Upload-Limit für alle Repositorys auf {% data variables.product.product_location_enterprise %} zu erzwingen. ![Option zur zwangsweisen Begrenzung der Objektgröße für alle Repositorys](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)
