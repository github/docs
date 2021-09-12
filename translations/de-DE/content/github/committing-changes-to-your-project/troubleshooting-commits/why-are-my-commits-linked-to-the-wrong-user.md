---
title: Warum sind meine Commits mit dem falschen Benutzer verknüpft?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} verwendet die E-Mail-Adresse im Commit-Header, um den Commit mit einem GitHub-Benutzer zu verknüpfen. If your commits are being linked to another user, or not linked to a user at all, you may need to change your local Git configuration settings{% if currentVersion != "github-ae@latest" %}, add an email address to your account email settings, or do both{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Hinweis**: Falls Deine Commits mit einem anderen Benutzer verknüpft sind, bedeutet dies nicht, dass der Benutzer auf Dein Repository zugreifen kann. Ein Benutzer kann nur dann auf Dein Repository zugreifen, wenn Du ihn als Mitarbeiter oder zu einem Team hinzufügst, das über Zugriff auf das Repository verfügt.

{% endtip %}

### Mit einem anderen Benutzer verknüpfte Commits

If your commits are linked to another user, that means the email address in your local Git configuration settings is connected to that user's account on {% data variables.product.product_name %}. In this case, you can change the email in your local Git configuration settings{% if currentVersion == "github-ae@latest" %} to the address associated with your account on {% data variables.product.product_name %} to link your future commits. Alte Commits werden nicht verknüpft. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %} and add the new email address to your {% data variables.product.product_name %} account to link future commits to your account.

1. To change the email address in your local Git configuration, follow the steps in "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". Falls Du mehrere Maschinen verwendest, musst Du diese Einstellung auf jeder ändern.
2. Add the email address from step 2 to your account settings by following the steps in "[Adding an email address to your GitHub account](/articles/adding-an-email-address-to-your-github-account)".{% endif %}

Die ab diesem Zeitpunkt von Dior durchgeführten Commits werden mit Deinem Konto verknüpft.

### Mit keinem Benutzer verknüpfte Commits

Wenn Deine Commits mit keinem Benutzer verknüpft sind, wird der Name des Commit-Authors nicht als Link zu einem Benutzerprofil dargestellt.

Führe die folgenden Schritte durch, um nach der E-Mail-Adresse zu suchen, die für diese Commits verwendet wurde, und um Commits mit Deinem Konto zu verknüpfen:

1. Navigiere zum Commit. Klicke dazu auf den Link für die Commit-Mitteilung. ![Link für Commit-Mitteilung](/assets/images/help/commits/commit-msg-link.png)
2. Bewege den Mauszeiger rechts neben dem Benutzernamen über das blaue {% octicon "question" aria-label="Question mark" %}, um die Mitteilung zu lesen, weshalb der Commit nicht verknüpft ist. ![Mit Mauszeiger eingeblendete Commit-Mitteilung](/assets/images/help/commits/commit-hover-msg.png)

  - **Unrecognized author (with email address)** If you see this message with an email address, the address you used to author the commit is not connected to your account on {% data variables.product.product_name %}. {% if currentVersion != "github-ae@latest" %}To link your commits, [add the email address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account).{% endif %} If the email address has a Gravatar associated with it, the Gravatar will be displayed next to the commit, rather than the default gray Octocat.
  - **Unrecognized author (no email address)** If you see this message without an email address, you used a generic email address that can't be connected to your account on {% data variables.product.product_name %}.{% if currentVersion != "github-ae@latest" %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}
  - **Invalid email** The email address in your local Git configuration settings is either blank or not formatted as an email address.{% if currentVersion != "github-ae@latest" %} You will need to [set your commit email address in Git](/articles/setting-your-commit-email-address), then [add the new address to your GitHub email settings](/articles/adding-an-email-address-to-your-github-account) to link your future commits. Old commits will not be linked.{% endif %}

{% if currentVersion == "github-ae@latest" %}
You can change the email in your local Git configuration settings to the address associated with your account to link your future commits. Alte Commits werden nicht verknüpft. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."
{% endif %}

{% warning %}

Falls in Deinen lokalen Git-Konfiguration eine generische E-Mail-Adresse oder eine E-Mail-Adresse enthalten war, die bereits an das Konto eines anderen Benutzers angehängt war, werden Deine vorherigen Commits nicht mit Deinem Konto verknüpft. Obwohl Git ermöglicht, dass Du die für vorherige Commits verwendete E-Mail-Adresse ändern kannst, wird dringend davon abgeraten, insbesondere bei einem gemeinsamen Repository.

{% endwarning %}

### Weiterführende Informationen

* „[Commits suchen](/articles/searching-commits)“
