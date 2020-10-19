---
title: Enforcing repository management policies in your enterprise
intro: 'Enterprise-Inhaber können bestimmte Richtlinien zur Repository-Verwaltung für alle Organisationen erzwingen, die einem Enterprise-Konto gehören, oder zulassen, dass Richtlinien in jeder Organisation festgelegt werden.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings/
  - /enterprise/admin/articles/setting-git-push-limits/
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance/
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository/
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository/
  - /enterprise/admin/articles/block-force-pushes/
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account/
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization/
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization/
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
versions:
  enterprise-server: '*'
---

### Standardmäßige Sichtbarkeit neuer Repositorys auf Ihrer Appliance konfigurieren

Jedes Mal, wenn jemand ein neues Repository auf {% data variables.product.product_location_enterprise %} anlegt, muss diese Person eine Sichtbarkeit für das Repository auswählen. Wenn Du eine Standard-Sichtbarkeitseinstellung für die Instanz einstellst, wählst Du aus, welche Sichtbarkeit standardmäßig gilt. Weitere Informationen zu Repository-Sichtbarkeiten findest Du unter „[Informationen zur Sichtbarkeit eines Repositorys](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)“.

Wenn ein Site-Administrator Mitgliedern das Erstellen bestimmter Arten Repositorys verwehrt, werden Mitglieder nicht in der Lage sein, ein Repository dieser Art zu erstellen, selbst wenn die Einstellung zur Sichtbarkeit diesen Typ als Standard vorgibt. Weitere Informationen finden Sie unter „[Repository-Erstellung auf Ihrer Instanz einschränken](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)“.

{% tip %}

**Tipp:** Sie können festlegen, dass nur die Websiteadministratoren die Sichtbarkeit des Repositorys ändern können. Weitere Informationen finden Sie unter „[Benutzerbedingte Änderung der Sichtbarkeit eines Repositorys verhindern](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility)“.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Verwende unter „Default repository visibility“ (Standardmäßige Sichtbarkeit für Repositorys) das Dropdown-Menü und wähle eine Standardsichtbarkeit. ![Dropdownmenü zum Auswählen der standardmäßigen Repository-Sichtbarkeit für Ihre Instanz](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

### Setting a policy for changing a repository's visibility

Wenn Sie Mitglieder daran hindern, die Sichtbarkeit des Repositorys zu ändern, können nur Websiteadministratoren öffentliche Repositorys als privat oder private Repositorys als öffentlich festlegen.

Falls ein Websiteadministrator die Möglichkeit der Repository-Erstellung auf Organisationsinhaber beschränkt hat, können Mitglieder die Sichtbarkeit eines Repositorys nicht ändern. Hat ein Websiteadministrator dagegen die Möglichkeit von Mitgliedern auf die Erstellung privater Repositorys beschränkt, können Mitglieder die Sichtbarkeit eines Repositorys von öffentlich auf privat festlegen. For more information, see "[Setting a policy for repository creation](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Überprüfen Sie unter „Repository visibility change“ (Änderung der Repository-Sichtbarkeit) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

### Setting a policy for repository creation

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Überprüfen Sie unter „Repository creation“ (Repository-Erstellung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% if currentVersion ver_gt "enterprise-server@2.19" %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. Wählen Sie im Dropdownmenü unter „Repository creation“ (Repository-Erstellung) eine Richtlinie aus. ![Dropdownmenü mit Richtlinien zur Repository-Erstellung](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

### Setting a policy for repository deletion and transfer

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Überprüfen Sie unter „Repository deletion and transfer“ (Repository-Löschung und -Übertragung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

### Setting a policy for Git push limits

Um die Größe Deines Repositorys handhabbar zu halten und Performance-Probleme zu vermeiden, konfiguriere ein Dateigrößenlimit für Repositorys auf Deiner Instanz.

Wenn Du Repository-Uploadlimits erzwingst, können Benutzer standardmäßig keine Dateien hinzufügen oder aktualisieren, die größer als 100 MB sind.

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**Hinweis:** Nur Dateien, die größer sind als {% data variables.large_files.warning_size %}, werden mit der Git-Push-Begrenzung abgeglichen. Kontaktieren Sie {% data variables.contact.contact_ent_support %}, wenn Sie eine niedrigere Push-Begrenzung festlegen müssen.

{% endtip %}
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „Repository upload limit“ (Upload-Begrenzung für Repository) das Dropdownmenü, und klicken Sie auf eine maximale Objektgröße.![Dropdownmenü mit Optionen für die maximale Objektgröße](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Optional kannst Du **Für alle Repositorys erzwingen** auswählen, um ein maximales Upload-Limit für alle Repositorys auf {% data variables.product.product_location_enterprise %} zu erzwingen. ![Option zur zwangsweisen Begrenzung der Objektgröße für alle Repositorys](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

### Configuring the merge conflict editor for pull requests between repositories

Indem Sie festlegen, dass Benutzer Mergekonflikte lokal auf ihren Computern auflösen müssen, können Sie verhindern, dass sie über ein Fork versehentlich in ein vorgelagertes Repository schreiben.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Verwenden Sie unter „Merge Conflict editor for pull requests between repositories“ (Editor für Mergekonflikte für Pull Requests zwischen Repositorys) das Dropdownmenü, und klicken Sie auf **Disabled** (Deaktiviert). ![Dropdownmenü mit der Option zum Deaktivieren des Editors für Mergekonflikte](/assets/images/enterprise/settings/conflict-editor-settings.png)

### Configuring force pushes

Jedes Repository übernimmt eine standardmäßige Einstellung für erzwungene Push-Vorgänge des Benutzerkontos oder der Organisation, zu dem bzw. zu der es gehört. Entsprechend übernimmt jede Organisation und jedes Benutzerkonto eine standardmäßige Einstellung für erzwungene Push-Vorgänge aus der Einstellung für erzwungene Push-Vorgänge für die gesamte Appliance. Wenn Sie die Einstellung für erzwungene Push-Vorgänge für die Appliance ändern, wird sie für alle Repositorys für jeden Benutzer in der Organisation geändert.

#### Blocking all force pushes on your appliance

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „Force pushes“ (Erzwungene Push-Vorgänge) das Dropdownmenü, und klicken Sie auf **Allow** (Zulassen), **Block** (Blockieren) oder **Block to the default branch** (Übertragungen an Standardbranch blockieren). ![Dropdownmenü „Force pushes“ (Erzwungene Push-Vorgänge)](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Wählen Sie optional **Enforce on all repositories** (Auf allen Repositorys erzwungen) aus, wodurch die Einstellungen für erzwungene Push-Vorgänge auf Organisations- und Repository-Ebene überschrieben werden.

#### Blocking force pushes to a specific repository

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Wählen Sie **Block** (Blockieren) oder **Block to the default branch** (Übertragung an Standardbranch blockieren) unter **Push and Pull** (Übertragen und abrufen) aus. ![Erzwungene Push-Vorgänge blockieren](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

#### Erzwungene Push-Vorgänge an Repositorys blockieren, die einem Benutzerkonto oder einer Organisation gehören

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
6. Wählen Sie optional **Enforce on all repositories** (Auf allen Repositorys erzwingen) aus, um Repository-spezifische Einstellungen zu überschreiben. Appliance-weite Richtlinien werden dadurch **nicht** überschrieben. ![Erzwungene Push-Vorgänge blockieren](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

### Configuring anonymous Git read access

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

If you have [enabled private mode](/enterprise/admin/configuration/enabling-private-mode) on your instance, you can allow repository administrators to enable anonymous Git read access to public repositories.

Enabling anonymous Git read access allows users to bypass authentication for custom tools on your instance. Wenn Sie oder ein Repository-Administrator diese Zugriffseinstellung für ein Repository aktiviert, verfügen nicht authentifizierte Git-Vorgänge (und jeder mit Netzwerkzugriff auf {% data variables.product.prodname_ghe_server %}) über Lesezugriff auf das Repository, ohne dass eine Authentifizierung erforderlich ist.

If necessary, you can prevent repository administrators from changing anonymous Git access settings for repositories on {% data variables.product.product_location_enterprise %} by locking the repository's access settings. Nachdem Sie die Einstellung für den Git-Lesezugriff eines Repositorys gesperrt haben, kann nur ein Websiteadministrator die Einstellung ändern.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

#### Setting anonymous Git read access for all repositories

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Klicken Sie unter „Anonymous Git read access“ (Anonymer Git-Lesezugriff) auf das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert). ![Dropdownmenü „Anonymous Git read access“ (Anonymer Git-Lesezugriff) mit den angezeigten Menüoptionen „Enabled“ (Aktiviert) und „Disabled“ (Deaktiviert)](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Aktivieren Sie optional **Prevent repository admins from changing anonymous Git read access** (Repository-Administratoren daran hindern, den anonymen Git-Lesezugriff zu ändern), um Repository-Administratoren daran zu hindern, die Einstellungen für den anonymen Git-Lesezugriff in allen Repositorys auf Ihrer Instanz zu ändern. ![Durch die Aktivierung des Kontrollkästchens werden Repository-Administratoren daran gehindert, die Einstellungen für den anonymen Git-Lesezugriff für alle Repositorys auf Ihrer Instanz zu ändern](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

#### Setting anonymous Git read access for a specific repository

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Klicken Sie unter „Danger Zone“ (Gefahrenzone) neben „Enable Anonymous Git read access“ (Anonymen Git-Lesezugriff aktivieren) auf **Enable** (Aktivieren). ![Schaltfläche „Enabled“ (Aktiviert) unter „Enable anonymous Git read access“ (Anonymen Git-Lesezugriff aktivieren) in der „Danger Zone“ (Gefahrenzone) der Websiteadministratoreinstellungen eines Repositorys ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Überprüfen Sie die Änderungen. Klicken Sie zur Bestätigung auf **Yes, enable anonymous Git read access** (Ja, anonymen Git-Lesezugriff aktivieren). ![Bestätigung der Einstellung für anonymen Git-Lesezugriff in einem Popup-Fenster](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Aktivieren Sie optional **Prevent repository admins from changing anonymous Git read access** (Repository-Administratoren daran hindern, den anonymen Git-Lesezugriff zu ändern), um Repository-Administratoren daran zu hindern, diese Einstellung für dieses Repository zu ändern. ![Durch die Aktivierung des Kontrollkästchens werden Repository-Administratoren daran gehindert, den anonymen Git-Lesezugriff für dieses Repository zu ändern](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

