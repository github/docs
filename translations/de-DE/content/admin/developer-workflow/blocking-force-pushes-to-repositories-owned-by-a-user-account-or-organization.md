---
title: 'Erzwungene Push-Vorgänge an Repositorys blockieren, die einem Benutzerkonto oder einer Organisation gehören'
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account/
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization/
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
intro: 'Sie können erzwungene Push-Vorgänge („git push --force“) auf allen Branches oder einfach an den Standardbranch der Repositorys blockieren, die einem Benutzerkonto oder einer Organisation gehören.'
versions:
  enterprise-server: '*'
---

Repositorys übernehmen die Einstellungen für erzwungene Push-Vorgänge vom Benutzerkonto oder von der Organisation, zu dem bzw. zu der sie gehören. Benutzerkonten und Organisationen übernehmen wiederum die Einstellungen für erzwungene Push-Vorgänge von den Einstellungen für erzwungene Push-Vorgänge der gesamten Appliance.

Sie können die standardmäßig übernommenen Einstellungen überschreiben, indem Sie die Einstellungen für ein Benutzerkonto oder für eine Organisation konfigurieren.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Wählen Sie unter „Repository default settings“ (Repository-Standardeinstellungen) im Abschnitt in the „Force pushes“ (Erzwungene Push-Vorgänge) Folgendes aus:
    - **Block** (Blockieren), um alle erzwungenen Push-Vorgänge an alle Branches zu blockieren.
    - **Block to the default branch** (Übertragung an den Standardbranch blockieren), damit die an den Standardbranch übertragenen erzwungenen Push-Vorgänge blockiert werden. ![Erzwungene Push-Vorgänge blockieren](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. Wählen Sie optional **Enforce on all repositories** (Auf allen Repositorys erzwingen) aus, um Repository-spezifische Einstellungen zu überschreiben. Appliance-weite Richtlinien werden dadurch **nicht** überschrieben. ![Erzwungene Push-Vorgänge blockieren](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png) Die Änderung wird sofort wirksam. Wenn Sie Ihre Meinung ändern, können Sie erzwungene Push-Vorgänge wieder zulassen.

### Weiterführende Informationen

- „[Erzwungene Push-Vorgänge an ein Repository blockieren](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)“
- „[Erzwungene Push-Vorgänge an Ihre Appliance blockieren](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)“
