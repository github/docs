---
title: Enforcing repository management policies in your enterprise
intro: 'You can enforce policies for repository management within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
product: '{% data reusables.gated-features.enterprise-accounts %}'
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
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: Repository management policies
---

## About policies for repository management in your enterprise

You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} manage repositories. You can also allow organization owners to manage policies for repository management. For more information, see "[Creating and managing repositories](/repositories/creating-and-managing-repositories) and "[Organizations and teams](/organizations)."

{% ifversion ghes or ghae %}

## Configuring the default visibility of new repositories

Each time someone creates a new repository within your enterprise, that person must choose a visibility for the repository. When you configure a default visibility setting for the enterprise, you choose which visibility is selected by default. For more information on repository visibility, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

If an enterprise owner disallows members from creating certain types of repositories, members will not be able to create that type of repository even if the visibility setting defaults to that type. For more information, see "[Setting a policy for repository creation](#setting-a-policy-for-repository-creation)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Verwende unter „Default repository visibility“ (Standardmäßige Sichtbarkeit für Repositorys) das Dropdown-Menü und wähle eine Standardsichtbarkeit. ![Drop-down menu to choose the default repository visibility for your enterprise](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## Enforcing a policy for {% ifversion ghec or ghes > 3.1 or ghae-next %}base{% else %}default{% endif %} repository permissions

Across all organizations owned by your enterprise, you can set a {% ifversion ghec or ghes > 3.1 or ghae-next %}base{% else %}default{% endif %} repository permission level (none, read, write, or admin) for organization members, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
4. Under "{% ifversion ghec or ghes > 3.1 or ghae-next %}Base{% else %}Default{% endif %} permissions", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "{% ifversion ghec or ghes > 3.1 or ghae-next %}Base{% else %}Default{% endif %} permissions", use the drop-down menu and choose a policy.
  {% ifversion ghec or ghes > 3.1 or ghae-next %}
  ![Dropdownmenü mit den Optionen für die Richtlinie für Repository-Berechtigungen](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)
  {% else %}
  ![Dropdownmenü mit den Optionen für die Richtlinie für Repository-Berechtigungen](/assets/images/enterprise/business-accounts/repository-permissions-policy-drop-down.png)
  {% endif %}

## Enforcing a policy for repository creation

Across all organizations owned by your enterprise, you can allow members to create repositories, restrict repository creation to organization owners, or allow owners to administer the setting on the organization level. Wenn Du Mitgliedern erlaubst, Repositorys zu erstellen, kannst Du angeben, ob die Mitglieder eine beliebige Kombination aus öffentlichen, privaten und internen Repositorys erstellen können. {% data reusables.repositories.internal-repo-default %} Weitere Informationen über interne Repositorys findest Du unter „[Ein internes Repository erstellen](/articles/creating-an-internal-repository)."

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Überprüfen Sie unter „Repository creation“ (Repository-Erstellung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. Wählen Sie im Dropdownmenü unter „Repository creation“ (Repository-Erstellung) eine Richtlinie aus. ![Dropdownmenü mit Richtlinien zur Repository-Erstellung](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}

## Enforcing a policy for forking private or internal repositories

Across all organizations owned by your enterprise, you can allow people with access to a private or internal repository to fork the repository, never allow forking of private or internal repositories, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. Under "Repository forking", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Wähle im Dropdownmenü unter „Repository forking“ (Repository-Forking) eine Richtlinie aus. ![Dropdownmenü mit den Optionen für die Richtlinie für das Repository-Forking](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

## Enforcing a policy for inviting{% ifversion ghec %} outside{% endif %} collaborators to repositories

Across all organizations owned by your enterprise, you can allow members to invite{% ifversion ghec %} outside{% endif %} collaborators to repositories, restrict {% ifversion ghec %}outside collaborator {% endif %}invitations to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
3. Under "Repository {% ifversion ghec %}outside collaborators{% elsif ghes or ghae %}invitations{% endif %}", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Under "Repository {% ifversion ghec %}outside collaborators{% elsif ghes or ghae %}invitations{% endif %}", use the drop-down menu and choose a policy.
  {% ifversion ghec %}
  ![Dropdownmenü mit den Optionen für die Richtlinie für Einladungen von externen Mitarbeitern](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)
  {% elsif ghes or ghae %}
  ![Drop-down menu with invitation policy options](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)
  {% endif %}

{% ifversion ghec or ghes or ghae %}

## Enforcing a policy for the default branch name

Across all organizations owned by your enterprise, you can set the default branch name for any new repositories that members create. You can choose to enforce that default branch name across all organizations or allow individual organizations to set a different one.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Default branch name", enter the default branch name that new repositories should use. ![Text box for entering default branch name](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Optionally, to enforce the default branch name for all organizations in the enterprise, select **Enforce across this enterprise**. ![Enforcement checkbox](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Klicke auf **Update** (Aktualisieren). ![Update button](/assets/images/help/business-accounts/default-branch-name-update.png)

{% endif %}

## Enforcing a policy for changes to repository visibility

Across all organizations owned by your enterprise, you can allow members with admin access to change a repository's visibility, restrict repository visibility changes to organization owners, or allow owners to administer the setting on the organization level. When you prevent members from changing repository visibility, only enterprise owners can change the visibility of a repository.

If an enterprise owner has restricted repository creation to organization owners only, then members will not be able to change repository visibility. If an enterprise owner has restricted member repository creation to private repositories only, then members will only be able to change the visibility of a repository to private. For more information, see "[Setting a policy for repository creation](#setting-a-policy-for-repository-creation)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Überprüfen Sie unter „Repository visibility change“ (Änderung der Repository-Sichtbarkeit) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}

## Enforcing a policy for repository deletion and transfer

Across all organizations owned by your enterprise, you can allow members with admin permissions to delete or transfer a repository, restrict repository deletion and transfers to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Überprüfen Sie unter „Repository deletion and transfer“ (Repository-Löschung und -Übertragung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Enforcing a policy for deleting issues

Across all organizations owned by your enterprise, you can allow members with admin access to delete issues in a repository, restrict issue deletion to organization owners, or allow owners to administer the setting on the organization level.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Lies auf der Registerkarte **Repository policies** (Repository-Richtlinien) unter „Repository issue deletion“ (Löschen von Repository-Issues) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Wähle im Dropdownmenü unter „Repository issue deletion“ (Löschen von Repository-Issues) eine Richtlinie aus. ![Dropdownmenü mit den Optionen für die Richtlinie für das Löschen von Issues](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Enforcing a policy for Git push limits

To keep your repository size manageable and prevent performance issues, you can configure a file size limit for repositories in your enterprise.

Wenn Du Repository-Uploadlimits erzwingst, können Benutzer standardmäßig keine Dateien hinzufügen oder aktualisieren, die größer als 100 MB sind.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „Repository upload limit“ (Upload-Begrenzung für Repository) das Dropdownmenü, und klicken Sie auf eine maximale Objektgröße.![Dropdownmenü mit Optionen für die maximale Objektgröße](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Optionally, to enforce a maximum upload limit for all repositories in your enterprise, select **Enforce on all repositories** ![Option zur zwangsweisen Begrenzung der Objektgröße für alle Repositorys](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)

## Configuring the merge conflict editor for pull requests between repositories

Indem Sie festlegen, dass Benutzer Mergekonflikte lokal auf ihren Computern auflösen müssen, können Sie verhindern, dass sie über ein Fork versehentlich in ein vorgelagertes Repository schreiben.

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
1. Verwenden Sie unter „Merge Conflict editor for pull requests between repositories“ (Editor für Mergekonflikte für Pull Requests zwischen Repositorys) das Dropdownmenü, und klicken Sie auf **Disabled** (Deaktiviert). ![Dropdownmenü mit der Option zum Deaktivieren des Editors für Mergekonflikte](/assets/images/enterprise/settings/conflict-editor-settings.png)

## Configuring force pushes

Each repository inherits a default force push setting from the settings of the user account or organization that owns the repository. Each organization and user account inherits a default force push setting from the force push setting for the enterprise. If you change the force push setting for the enterprise, the policy applies to all repositories owned by any user or organization.

### Blocking force pushes to all repositories

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Verwenden Sie unter „Force pushes“ (Erzwungene Push-Vorgänge) das Dropdownmenü, und klicken Sie auf **Allow** (Zulassen), **Block** (Blockieren) oder **Block to the default branch** (Übertragungen an Standardbranch blockieren). ![Dropdownmenü „Force pushes“ (Erzwungene Push-Vorgänge)](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. Wählen Sie optional **Enforce on all repositories** (Auf allen Repositorys erzwungen) aus, wodurch die Einstellungen für erzwungene Push-Vorgänge auf Organisations- und Repository-Ebene überschrieben werden.

### Blocking force pushes to a specific repository

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. Wählen Sie **Block** (Blockieren) oder **Block to the default branch** (Übertragung an Standardbranch blockieren) unter **Push and Pull** (Übertragen und abrufen) aus. ![Erzwungene Push-Vorgänge blockieren](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### Erzwungene Push-Vorgänge an Repositorys blockieren, die einem Benutzerkonto oder einer Organisation gehören

Repositorys übernehmen die Einstellungen für erzwungene Push-Vorgänge vom Benutzerkonto oder von der Organisation, zu dem bzw. zu der sie gehören. User accounts and organizations in turn inherit their force push settings from the force push settings for the enterprise.

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
6. Wählen Sie optional **Enforce on all repositories** (Auf allen Repositorys erzwingen) aus, um Repository-spezifische Einstellungen zu überschreiben. Note that this will **not** override an enterprise-wide policy. ![Erzwungene Push-Vorgänge blockieren](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## Configuring anonymous Git read access

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

{% ifversion ghes %}If you have [enabled private mode](/enterprise/admin/configuration/enabling-private-mode) on your enterprise, you {% else %}You {% endif %}can allow repository administrators to enable anonymous Git read access to public repositories.

Enabling anonymous Git read access allows users to bypass authentication for custom tools on your enterprise. Wenn Sie oder ein Repository-Administrator diese Zugriffseinstellung für ein Repository aktiviert, verfügen nicht authentifizierte Git-Vorgänge (und jeder mit Netzwerkzugriff auf {% data variables.product.product_name %}) über Lesezugriff auf das Repository, ohne dass eine Authentifizierung erforderlich ist.

If necessary, you can prevent repository administrators from changing anonymous Git access settings for repositories on your enterprise by locking the repository's access settings. Nachdem Sie die Einstellung für den Git-Lesezugriff eines Repositorys gesperrt haben, kann nur ein Websiteadministrator die Einstellung ändern.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Setting anonymous Git read access for all repositories

{% data reusables.enterprise-accounts.access-enterprise %}
{% ifversion ghes or ghae %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Klicken Sie unter „Anonymous Git read access“ (Anonymer Git-Lesezugriff) auf das Dropdownmenü, und klicken Sie auf **Enabled** (Aktiviert). ![Dropdownmenü „Anonymous Git read access“ (Anonymer Git-Lesezugriff) mit den angezeigten Menüoptionen „Enabled“ (Aktiviert) und „Disabled“ (Deaktiviert)](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Optionally, to prevent repository admins from changing anonymous Git read access settings in all repositories on your enterprise, select **Prevent repository admins from changing anonymous Git read access**. ![Select checkbox to prevent repository admins from changing anonymous Git read access settings for all repositories on your enterprise](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Setting anonymous Git read access for a specific repository

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. Klicken Sie unter „Danger Zone“ (Gefahrenzone) neben „Enable Anonymous Git read access“ (Anonymen Git-Lesezugriff aktivieren) auf **Enable** (Aktivieren). ![Schaltfläche „Enabled“ (Aktiviert) unter „Enable anonymous Git read access“ (Anonymen Git-Lesezugriff aktivieren) in der „Danger Zone“ (Gefahrenzone) der Websiteadministratoreinstellungen eines Repositorys ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Überprüfen Sie die Änderungen. Klicken Sie zur Bestätigung auf **Yes, enable anonymous Git read access** (Ja, anonymen Git-Lesezugriff aktivieren). ![Bestätigung der Einstellung für anonymen Git-Lesezugriff in einem Popup-Fenster](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Aktivieren Sie optional **Prevent repository admins from changing anonymous Git read access** (Repository-Administratoren daran hindern, den anonymen Git-Lesezugriff zu ändern), um Repository-Administratoren daran zu hindern, diese Einstellung für dieses Repository zu ändern. ![Durch die Aktivierung des Kontrollkästchens werden Repository-Administratoren daran gehindert, den anonymen Git-Lesezugriff für dieses Repository zu ändern](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
