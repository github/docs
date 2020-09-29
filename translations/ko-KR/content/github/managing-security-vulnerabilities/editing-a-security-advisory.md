---
title: Editing a security advisory
intro: You can edit the metadata and description for a security advisory if you need to update details or correct errors.
versions:
  free-pro-team: '*'
---

People with admin permissions to a security advisory can edit the security advisory.

### About credits for security advisories

You can credit people who helped discover, report, or fix a security vulnerability. If you credit someone, they can choose to accept or decline credit.

If someone accepts credit, the person's username appears in the "Credits" section of the security advisory. Anyone with read access to the repository can see the advisory and the people who accepted credit for it.

### Editing a security advisory

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. In the "Security Advisories" list, click the security advisory you'd like to edit.
5. In the upper-right corner of the details for the security advisory, click
{% octicon "pencil" aria-label="The edit icon" %}.
  ![Edit button for a security advisory](/assets/images/help/security/security-advisory-edit-button.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-description %}
8. Optionally, edit the "Credits" for the security advisory. ![Credits for a security advisory](/assets/images/help/security/security-advisory-credits.png)
9. Click **Update security advisory**. ![Add button](/assets/images/help/security/update-advisory-button.png)
10. The people listed in the "Credits" section will receive an email or web notification inviting them to accept credit. If a person accepts, their username will be publicly visible once the security advisory is published.

### 더 읽을거리

- "[Withdrawing a security advisory](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
