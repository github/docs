---
title: Sichtbarkeit für die Organisationsmitgliedschaft konfigurieren
intro: 'You can set visibility for new organization members across your enterprise to public or private. Darüber hinaus können Sie Mitglieder daran hindern, die für sie standardmäßig festgelegte Sichtbarkeit zu ändern.'
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
---

{% if enterpriseServerVersions contains currentVersion %}
Mithilfe eines Befehlszeilenprogramms können Sie Ihre Standardeinstellung zudem für alle aktuellen Organisationsmitglieder auf Ihrer Instanz erzwingen. Wenn Sie beispielsweise möchten, dass die Sichtbarkeit jedes Organisationsmitglieds öffentlich sein soll, können Sie in den Administratoreinstellungen die Standardeinstellung auf öffentlich festlegen, die Standardeinstellung für alle neuen Mitglieder erzwingen und anschließend das Befehlszeilenprogramm verwenden, um die Einstellung für die öffentliche Sichtbarkeit für Bestandsmitglieder zu erzwingen.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
3. Verwenden Sie unter „Default organization membership visibility“ (Standardmäßige Sichtbarkeit der Organisationsmitgliedschaft) das Dropdownmenü, und klicken Sie auf **Private** (Privat) oder **Public** (Öffentlich). ![Dropdownmenü mit der Option, um die standardmäßige Sichtbarkeit der Organisationsmitgliedschaft als öffentlich oder privat zu konfigurieren](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Optional können Sie **Enforce on organization members** (Für Organisationsmitglieder erzwingen) aktivieren, um Mitglieder daran zu hindern, die für sie standardmäßig festgelegte Sichtbarkeit zu ändern. ![Checkbox to enforce the default setting on all members](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% if enterpriseServerVersions contains currentVersion %}
5. Wenn Sie Ihre neue Sichtbarkeitseinstellung für alle Bestandsmitglieder erzwingen möchten, sollten Sie das Befehlszeilenprogramm `ghe-org-membership-update` verwenden. For more information, see "[Command-line utilities](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-membership-update)."{% endif %}
