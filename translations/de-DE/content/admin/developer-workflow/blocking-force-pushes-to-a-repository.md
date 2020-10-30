---
title: Erzwungene Push-Vorgänge an ein Repository blockieren
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository/
  - /enterprise/admin/articles/block-force-pushes/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
intro: Sie können erzwungene Push-Vorgänge („git push --force“) auf allen Branches – oder einfach an den Standardbranch – eines Repositorys blockieren.
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Wählen Sie **Block** (Blockieren) oder **Block to the default branch** (Übertragung an Standardbranch blockieren) unter **Push and Pull** (Übertragen und abrufen) aus. ![Erzwungene Push-Vorgänge blockieren](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

Die Änderung wird sofort wirksam. Wenn Sie Ihre Meinung später ändern, können Sie erzwungene Push-Vorgänge ohne Weiteres wieder zulassen.

## Weiterführende Informationen

- „[Erzwungene Push-Vorgänge an Repositorys blockieren, die einem Benutzerkonto oder einer Organisation gehören](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)“
- „[Erzwungene Push-Vorgänge an Ihre Appliance blockieren](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)“
