---
title: Eine Organisation in einen Benutzer umwandeln
intro: 'Es ist nicht möglich, eine Organisation in einen Benutzer umzuwandeln. Du kannst jedoch ein neues Benutzerkonto erstellen und die Repositorys der Organisation in das Konto übertragen.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Organizations
  - Teams
---

{% if currentVersion == "free-pro-team@latest" %}

1. [Registriere Dich](/articles/signing-up-for-a-new-github-account) für ein neues GitHub-Benutzerkonto.
2. [Ändere die Rolle des Benutzers in einen Inhaber](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} beim neuen Benutzerkonto an.
4. [Übertrage jedes Repository der Organisation](/articles/how-to-transfer-a-repository) in das neue Benutzerkonto.
5. [Lösche die Organisation](/articles/deleting-an-organization-account).
6. [Ändere den Namen des Benutzers](/articles/changing-your-github-username) in den der Organisation.

{% else %}

1. Registriere Dich für ein neues GitHub Enterprise-Benutzerkonto.
2. [Ändere die Rolle des Benutzers in einen Inhaber](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} beim neuen Benutzerkonto an.
4. [Übertrage jedes Repository der Organisation](/articles/how-to-transfer-a-repository) in das neue Benutzerkonto.
5. [Lösche die Organisation](/articles/deleting-an-organization-account).
6. [Ändere den Namen des Benutzers](/articles/changing-your-github-username) in den der Organisation.

{% endif %}
