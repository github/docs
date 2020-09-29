---
title: Pre-Receive-Hooks auf der GitHub Enterprise Server-Appliance verwalten
intro: 'Konfigurieren Sie, wie Personen Pre-Receive-Hooks in ihrer {% data variables.product.prodname_ghe_server %}-Appliance verwenden.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance/
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  enterprise-server: '*'
---

### Pre-Receive-Hooks erstellen

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. Klicken Sie auf **Add pre-receive hook** (Pre-Receive-Hook hinzufügen). ![„Add pre-receive hook“ (Pre-Receive-Hook hinzufügen)](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. Geben Sie im Feld **Hook name** (Hook-Name) den Namen des Hooks ein, den Sie erstellen möchten. ![Pre-Receive-Hook benennen](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. Wählen Sie im Dropdownmenü **Environment** (Umgebung) die Umgebung aus, in welcher der Hook ausgeführt werden soll. ![Hook-Umgebung](/assets/images/enterprise/site-admin-settings/environment.png)
7. Wählen Sie im Dropdownmenü **Select hook repository** (Hook-Repository auswählen) unter **Script** (Skript) das Repository aus, in dem Ihr Pre-Receive-Hook-Skript enthalten ist. Wählen Sie im Dropdownmenü **Select file** (Datei auswählen) den Dateinamen des Pre-Receive-Hook-Skripts aus. ![Hook-Skript](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. Wählen Sie **Use the exit-status to accept or reject pushes** (Exit-Status zum Akzeptieren oder Ablehnen von Push-Vorgängen verwenden) aus, um Ihr Skript zu erzwingen. Wenn Sie diese Option deaktivieren, können Sie das Skript testen, wobei der Exit-Status-Wert ignoriert wird. In diesem Modus kann der Benutzer die Skriptausgabe an der Befehlszeile, nicht aber auf der Benutzeroberfläche anzeigen. ![Exit-Status verwenden](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. Wählen Sie **Enable this pre-receive hook on all repositories by default** (Diesen Pre-Receive-Hook standardmäßig auf allen Repositorys aktivieren) aus, wenn der Pre-Receive-Hook auf allen Repositorys ausgeführt werden soll. ![Option zum Aktivieren des Hooks auf allen Repositorys](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. Wählen Sie **Administrators can enable and disable this hook** (Administratoren können diesen Hook aktivieren und deaktivieren) aus, damit Organisationsmitglieder mit Administrator- oder Inhaberberechtigungen diesen Pre-Receive-Hook aktivieren oder deaktivieren können. ![Option zum Aktivieren oder Deaktivieren des Hooks durch Administratoren](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

### Pre-Receive-Hooks bearbeiten

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Klicken Sie neben dem Pre-Receive-Hook, den Sie bearbeiten möchten, auf {% octicon "pencil" aria-label="The edit icon" %}.![Pre-Receive bearbeiten](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

### Pre-Receive-Hooks löschen

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
2. Klicken Sie neben dem Pre-Receive-Hook, den Sie löschen möchten, auf {% octicon "x" aria-label="X symbol" %}.![Pre-Receive bearbeiten](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

### Pre-Receive-Hooks für eine Organisation konfigurieren

Ein Organisationsadministrator kann die Hook-Berechtigungen nur dann für eine Organisation konfigurieren, wenn der Websiteadministrator bei der Erstellung des Pre-Receive-Hooks die Option **Administrators can enable or disable this hook** (Administratoren können diesen Hook aktivieren oder deaktivieren) ausgewählt hat. Zum Konfigurieren von Pre-Receive-Hooks für ein Repository müssen Sie ein Organisationsadministrator oder -inhaber sein.

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Klicken Sie auf der linken Seitenleiste auf **Hooks**. ![Hooks-Seitenleiste](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. Klicken Sie neben dem Pre-Receive-Hook, den Sie konfigurieren möchten, auf das Dropdownmenü **Hook permissions** (Hook-Berechtigungen). Wählen Sie aus, ob der Pre-Receive-Hook aktiviert oder deaktiviert werden soll, oder legen Sie fest, dass er vom Repository-Administrator konfiguriert werden kann. ![„Hook permissions“ (Hook-Berechtigungen)](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

### Pre-Receive-Hooks für ein Repository konfigurieren

Ein Repository-Inhaber kann einen Hook nur dann konfigurieren, wenn der Websiteadministrator bei der Erstellung des Pre-Receive-Hooks die Option **Administrators can enable or disable this hook** (Administratoren können diesen Hook aktivieren oder deaktivieren) ausgewählt hat. In einer Organisation muss der Organisationsinhaber zudem die Hook-Berechtigung **Configurable** (Konfigurierbar) ausgewählt haben. Zum Konfigurieren von Pre-Receive-Hooks für ein Repository müssen Sie ein Repository-Inhaber sein.

{% data reusables.profile.enterprise_access_profile %}
2. Klicken Sie auf **Repositories** (Repositorys), und wählen Sie aus, für welches Repository Sie die Pre-Receive-Hooks konfigurieren möchten. ![Repositorys](/assets/images/enterprise/repos/repositories.png)
{% data reusables.repositories.sidebar-settings %}
4. Klicken Sie auf der linken Seitenleiste auf **Hooks & Services** (Hooks und Dienste). ![„Hooks & services“ (Hooks und Dienste)](/assets/images/enterprise/repos/hooks-services.png)
5. Klicken Sie neben dem Pre-Receive-Hook, den Sie konfigurieren möchten, auf das Dropdownmenü **Hook permissions** (Hook-Berechtigungen). Wählen Sie aus, ob der Pre-Receive-Hook aktiviert oder deaktiviert werden soll. ![Hook-Berechtigungen für das Repository](/assets/images/enterprise/repos/repo-hook-permissions.png)
