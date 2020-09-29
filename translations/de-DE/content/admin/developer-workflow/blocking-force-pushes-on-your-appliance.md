---
title: Erzwungene Push-Vorgänge auf Ihrer Appliance blockieren
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
intro: 'Websiteadministratoren können alle erzwungenen Push-Vorgänge („git push --force“) auf einer {% data variables.product.prodname_ghe_server %}-Appliance blockieren.'
versions:
  enterprise-server: '*'
---

Jedes Repository übernimmt eine standardmäßige Einstellung für erzwungene Push-Vorgänge des Benutzerkontos oder der Organisation, zu dem bzw. zu der es gehört. Entsprechend übernimmt jede Organisation und jedes Benutzerkonto eine standardmäßige Einstellung für erzwungene Push-Vorgänge aus der Einstellung für erzwungene Push-Vorgänge für die gesamte Appliance. Wenn Sie die Einstellung für erzwungene Push-Vorgänge für die Appliance ändern, wird sie für alle Repositorys für jeden Benutzer in der Organisation geändert.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „Force pushes“ (Erzwungene Push-Vorgänge) das Dropdownmenü, und klicken Sie auf **Allow** (Zulassen), **Block** (Blockieren) oder **Block to the default branch** (Übertragungen an Standardbranch blockieren). ![Dropdownmenü „Force pushes“ (Erzwungene Push-Vorgänge)](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Wählen Sie optional **Enforce on all repositories** (Auf allen Repositorys erzwungen) aus, wodurch die Einstellungen für erzwungene Push-Vorgänge auf Organisations- und Repository-Ebene überschrieben werden.

### Weiterführende Informationen

- „[Erzwungene Push-Vorgänge an Repositorys blockieren, die einem Benutzerkonto oder einer Organisation gehören](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)“
- „[Erzwungene Push-Vorgänge an ein Repository blockieren](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)“
