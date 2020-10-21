---
title: Sichtbarkeit für die Organisationsmitgliedschaft konfigurieren
intro: Sie können die Sichtbarkeit für neue Organisationsmitglieder auf Ihrer gesamten Instanz auf öffentlich oder auf privat festlegen. Darüber hinaus können Sie Mitglieder daran hindern, die für sie standardmäßig festgelegte Sichtbarkeit zu ändern.
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
versions:
  enterprise-server: '*'
---

Mithilfe eines Befehlszeilenprogramms können Sie Ihre Standardeinstellung zudem für alle aktuellen Organisationsmitglieder auf Ihrer Instanz erzwingen. Wenn Sie beispielsweise möchten, dass die Sichtbarkeit jedes Organisationsmitglieds öffentlich sein soll, können Sie in den Administratoreinstellungen die Standardeinstellung auf öffentlich festlegen, die Standardeinstellung für alle neuen Mitglieder erzwingen und anschließend das Befehlszeilenprogramm verwenden, um die Einstellung für die öffentliche Sichtbarkeit für Bestandsmitglieder zu erzwingen.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
3. Verwenden Sie unter „Default organization membership visibility“ (Standardmäßige Sichtbarkeit der Organisationsmitgliedschaft) das Dropdownmenü, und klicken Sie auf **Private** (Privat) oder **Public** (Öffentlich). ![Dropdownmenü mit der Option, um die standardmäßige Sichtbarkeit der Organisationsmitgliedschaft als öffentlich oder privat zu konfigurieren](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Optional können Sie **Enforce on organization members** (Für Organisationsmitglieder erzwingen) aktivieren, um Mitglieder daran zu hindern, die für sie standardmäßig festgelegte Sichtbarkeit zu ändern. ![Kontrollkästchen zum Erzwingen der Standardeinstellung für alle Mitglieder](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png)
5. Wenn Sie Ihre neue Sichtbarkeitseinstellung für alle Bestandsmitglieder erzwingen möchten, sollten Sie das Befehlszeilenprogramm `ghe-org-membership-update` verwenden. Weitere Informationen finden Sie unter „[Befehlszeilenprogramme](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-membership-update)“.
