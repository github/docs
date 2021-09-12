---
title: Anonymen Git-Lesezugriff für ein Repository aktivieren
intro: 'Als Repository-Administrator kannst Du anonyme Git-Lesezugriffe für öffentliche Repositorys aktivieren oder deaktivieren, wenn diese bestimmte Voraussetzungen erfüllen.'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
versions:
  enterprise-server: '*'
---

Repository-Administratoren können die Einstellung für den anonymen Git-Lesezugriff für ein bestimmtes Repository ändern, wenn folgende Voraussetzungen erfüllt sind:
- Ein Websiteadministrator hat den privaten Modus und den anonymen Git-Lesezugriff aktiviert.
- The repository is public on the enterprise and is not a fork.
- Ein Websiteadministrator hat den anonymen Git-Lesezugriff für das Repository nicht deaktiviert.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Klicke neben „Enable anonymous Git read access“ (Anonymen Git-Lesezugriff aktivieren) auf **Enable** (Aktivieren). ![Schaltfläche „Enabled“ (Aktiviert) unter „Anonymous Git read access“ (Anonymer Git-Lesezugriff)](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. Überprüfen Sie die Änderungen. Gib zur Bestätigung den Namen des Repositorys ein, und klicke auf **I understand, enable anonymous Git read access** (Ich habe verstanden und möchte den anonymen Git-Lesezugriff aktivieren).
