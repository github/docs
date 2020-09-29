---
title: Richtlinien zur Repository-Verwaltung in Deinem Enterprise-Konto erzwingen
intro: 'Enterprise-Inhaber können bestimmte Richtlinien zur Repository-Verwaltung für alle Organisationen erzwingen, die einem Enterprise-Konto gehören, oder zulassen, dass Richtlinien in jeder Organisation festgelegt werden.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  free-pro-team: '*'
---

Weitere Informationen finden Sie unter„[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“.

### Eine Richtlinie zu standardmäßigen Repository-Berechtigungen erzwingen

Für alle Organisationen Deines Enterprise-Kontos kannst Du eine standardmäßige Repository-Berechtigungsebene (keine, Lese-, Schreib- oder Administratorberechtigungen) für Organisationsmitglieder festlegen oder es Inhabern gestatten, diese Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
4. Lies auf der Registerkarte **Repository policies** (Repository-Richtlinien) unter „Default permissions“ (Standardberechtigungen) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle im Dropdownmenü unter „Default permissions“ (Standardberechtigungen) eine Richtlinie aus. ![Dropdownmenü mit den Optionen für die Richtlinie für Repository-Berechtigungen](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)

### Eine Richtlinie zum Erstellen von Repositorys erzwingen

In allen Organisationen Deines Enterprise-Kontos kannst Du festlegen, dass Mitglieder Repositorys erstellen können, die Repository-Erstellung auf Organisationsinhaber einschränken oder es Inhabern ermöglichen, die Einstellung auf Organisationsebene zu verwalten. Wenn Du Mitgliedern erlaubst, Repositorys zu erstellen, kannst Du angeben, ob die Mitglieder eine beliebige Kombination aus öffentlichen, privaten und internen Repositorys erstellen können. {% data reusables.repositories.internal-repo-default %} Weitere Informationen über interne Repositorys findest Du unter „[Ein internes Repository erstellen](/articles/creating-an-internal-repository)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Lies auf der Registerkarte **Repository policies** (Repository-Richtlinien) unter „Repository creation“ (Repository-Erstellung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
6. Klicke auf **Save** (Speichern).

### Eine Richtlinie zum Forken privater oder interner Repositorys erzwingen

Für alle Organisationen Deines Enterprise-Kontos kannst Du Benutzern mit Zugriff auf ein privates oder internes Repository das Forken dieses Repositorys erlauben, das Forken privater oder interner Repositorys immer untersagen oder es Inhabern gestatten, diese Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Lies auf der Registerkarte **Repository policies** (Repository-Richtlinien) unter „Repository forking“ (Repository-Forking) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Wähle im Dropdownmenü unter „Repository forking“ (Repository-Forking) eine Richtlinie aus. ![Dropdownmenü mit den Optionen für die Richtlinie für das Repository-Forking](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png)

### Eine Richtlinie zum Einladen externer Mitarbeiter zu Repositorys erzwingen

In allen Organisationen Deines Enterprise-Kontos kannst Du Mitgliedern das Einladen von externen Mitarbeitern zu Repositorys erlauben, Einladungen externer Mitarbeiter auf Organisationsinhaber beschränken oder es Inhabern ermöglichen, die Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Lies auf der Registerkarte **Repository policies** (Repository-Richtlinien) unter „Repository invitations“ (Repository-Einladungen) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Wählen Sie im Dropdownmenü unter „Repository invitations“ (Repository-Einladungen) eine Richtlinie aus.  
   ![Dropdownmenü mit den Optionen für die Richtlinie für Einladungen von externen Mitarbeitern](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png)

### Eine Richtlinie zum Ändern der Repository-Sichtbarkeit erzwingen

In allen Organisationen Ihres Enterprise-Kontos können Sie Mitgliedern mit Administratorberechtigungen das Ändern der Sichtbarkeit eines Repositorys erlauben, Änderungen der Repository-Sichtbarkeit auf Organisationsinhaber beschränken oder es Inhabern ermöglichen, die Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Lies auf der Registerkarte **Repository policies** (Repository-Richtlinien) unter „Repository visibility change“ (Änderung der Repository-Sichtbarkeit) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-visibility-policy %}

### Eine Richtlinie zum Löschen oder Übertragen von Repositorys erzwingen

In allen Organisationen Ihres Enterprise-Kontos können Sie Mitgliedern mit Administratorberechtigungen das Löschen oder Übertragen eines Repositorys erlauben, das Löschen und Übertragen von Repositorys auf Organisationsinhaber beschränken oder es Inhabern ermöglichen, die Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Lies auf der Registerkarte **Repository policies** (Repository-Richtlinien) unter „Repository deletion and transfer“ (Löschen und Übertragen von Repositorys) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% data reusables.enterprise-accounts.repository-deletion-policy %}

### Eine Richtlinie zum Löschen von Issues erzwingen

In allen Organisationen Ihres Enterprise-Kontos können Sie Mitgliedern mit Administratorberechtigungen das Löschen von Issues in einem Repository erlauben, das Löschen von Issues auf Organisationsinhaber beschränken oder es Inhabern ermöglichen, die Einstellung auf Organisationsebene zu verwalten.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. Lies auf der Registerkarte **Repository policies** (Repository-Richtlinien) unter „Repository issue deletion“ (Löschen von Repository-Issues) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. Wähle im Dropdownmenü unter „Repository issue deletion“ (Löschen von Repository-Issues) eine Richtlinie aus. ![Dropdownmenü mit den Optionen für die Richtlinie für das Löschen von Issues](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

### Enforcing a policy on the default branch name

Across all organizations owned by your enterprise account, you can set the default branch name for any new repositories that members create. You can choose to enforce that default branch name across all organizations or allow individual organizations to set a different one.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
3. On the **Repository policies** tab, under "Default branch name", enter the default branch name that new repositories should use. ![Text box for entering default branch name](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Optionally, to enforce the default branch name for all organizations in the enterprise, select **Enforce across this enterprise**. ![Enforcement checkbox](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Klicke auf **Update** (Aktualisieren). ![Update button](/assets/images/help/business-accounts/default-branch-name-update.png)
