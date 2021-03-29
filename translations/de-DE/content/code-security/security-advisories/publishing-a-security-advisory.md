---
title: Einen Sicherheitshinweis veröffentlichen
intro: Du kannst einen Sicherheitshinweis veröffentlichen, um Deine Community über eine Sicherheitslücke in Deinem Projekt zu informieren.
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-security-advisory
versions:
  free-pro-team: '*'
topics:
  - sicherheit
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

Personen mit Administratorberechtigungen für einen Sicherheitshinweis können den Hinweis veröffentlichen.

### Vorrausetzungen

Bevor Du einen Sicherheitshinweis veröffentlichen oder eine CVE-Identifikationsnummer anfordern kannst, musst Du einen Entwurf des Sicherheitshinweises erstellen und Informationen über die Versionen Deines Projekts bereitstellen, die von der Sicherheitslücke betroffen sind. Weitere Informationen findest Du unter „[Einen Sicherheitshinweis erstellen](/github/managing-security-vulnerabilities/creating-a-security-advisory)."

Wenn Du einen Sicherheitshinweis erstellt hast, aber noch keine Details über die Versionen Deines Projekts angegeben hast, die von der Sicherheitslücke betroffen sind, kannst Du den Sicherheitshinweis bearbeiten. Weitere Informationen findest Du unter „[Einen Sicherheitshinweis bearbeiten](/github/managing-security-vulnerabilities/editing-a-security-advisory)."

### Über das Veröffentlichen eines Sicherheitshinweises

Wenn Du einen Sicherheitshinweis veröffentlichst, informierst Du Deine Community über die Sicherheitslücke, die im Sicherheitshinweis adressiert wird. Die Veröffentlichung eines Sicherheitshinweises erleichtert es Deiner Community, die Paket-Abhängigkeiten zu aktualisieren und die Auswirkungen der Sicherheitslücke zu untersuchen.

{% data reusables.repositories.security-advisories-republishing %}

Bevor Du einen Sicherheitshinweis veröffentlichst, kannst Du privat mit anderen zusammenarbeiten, um die Sicherheitslücke in einem temporären privaten Fork zu beheben. Weitere Informationen findest Du unter „[In einem temporären privaten Fork zusammenarbeiten, um eine Sicherheitslücke zu beheben](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability).“

{% warning %}

**Warning**: Whenever possible, you should always add a fix version to a security advisory prior to publishing the advisory. If you don't, the advisory will be published without a fixed version, and {% data variables.product.prodname_dependabot %} will alert your users about the issue, without offering any safe version to update to.

We recommend you take the following steps in these different situations:

- If a fix version is imminently available, and you are able to, wait to disclose the issue when the fix is ready.
- If a fix version is in development but not yet available, mention this in the advisory, and edit the advisory later, after publication.
- If you are not planning to fix the issue, be clear about it in the advisory so that your users don't contact you to ask when a fix will be made. In this case, it is helpful to include steps users can take to mitigate the issue.

{% endwarning %}

When you publish a draft advisory from a public repository, everyone is able to see:

- The current version of the advisory data.
- Any advisory credits that the credited users have accepted.

{% note %}

**Note**: The general public will never have access to the edit history of the advisory, and will only see the published version.

{% endnote %}

Die Veröffentlichung eines Sicherheitshinweises verändert die URL für diesen Sicherheitshinweis nicht, sie bleibt gleich wie vor der Veröffentlichung. Personen mit Lesezugriff auf ein Repository können Sicherheitshinweise sehen. Collaborators on the security advisory can continue to view past conversations, including the full comment stream, in the security advisory unless someone with admin permissions removes the collaborator from the security advisory.

Wenn Du Informationen in einem von Dir veröffentlichten Sicherheitshinweis aktualisieren oder korrigieren musst, kannst Du den Hinweis bearbeiten. Weitere Informationen findest Du unter „[Einen Sicherheitshinweis bearbeiten](/github/managing-security-vulnerabilities/editing-a-security-advisory)."

### CVE-Identifikationsnummer anfordern

Personen mit Administratorberechtigungen auf einem Sicherheitshinweis können einen CVE-Identifikationsnummer für den Hinweis anfordern.

{% data reusables.repositories.request-security-advisory-cve-id %} Weitere Informationen findest Du unter „[Über {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories#cve-identification-numbers)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Klicke in der Liste „Security Advisories" (Sicherheitshinweise) auf den Hinweis für den Du eine CVE-Identifikationsnummer anfordern möchtest. ![Sicherheitshinweis in der Liste](/assets/images/help/security/security-advisory-in-list.png)
5. Benutze das **Publish advisory** (Hinweis veröffentlichen) Dropdownmenü und klicke auf **Request CVE** (CVE-Identifikationsnummer anfordern). ![CVE-Identifikationsnummer im Dropdownmenü anfordern](/assets/images/help/security/security-advisory-drop-down-request-cve.png)
6. Klicke auf **Request CVE** (CVE-Identifikationsnummer anfordern). ![Dropdownmenü „Request CVE" (CVE-Identifikationsnummer anfordern)](/assets/images/help/security/security-advisory-request-cve-button.png)

### Einen Sicherheitshinweis veröffentlichen

Die Veröffentlichung eines Sicherheitshinweises löscht den temporären privaten Fork für den Sicherheitshinweis.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Klicke in der Liste „Security Advisories“ (Sicherheitshinweise) auf den Hinweis, den Du veröffentlichen möchtest. ![Sicherheitshinweis in der Liste](/assets/images/help/security/security-advisory-in-list.png)
5. Klicke unten auf der Seite auf **Publish advisory** (Hinweis veröffentlichen). ![Schaltfläche „Publish advisory“ (Hinweis veröffentlichen)](/assets/images/help/security/publish-advisory-button.png)

### {% data variables.product.prodname_dependabot_alerts %} for published security advisories

{% data reusables.repositories.github-reviews-security-advisories %}

### Weiterführende Informationen

- „[Einen Sicherheitshinweis zurückziehen](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
