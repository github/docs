---
title: Informationen zur erforderlichen Commit-Signatur
intro: Mit der obligatorischen Commit-Signatur wird sichergestellt, dass Mitarbeiter nur verifizierte und signierte Commits an einen geschützten Branch übertragen können.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn Du in Deinem Repository Branch-Schutzmaßnahmen erzwungen hast, kannst Du die obligatorische Commit-Signatur einrichten. Weitere Informationen findest Du unter „[Geschützte Branches konfigurieren](/articles/configuring-protected-branches/).“

When you enable required commit signing on a branch, contibutors {% if currentVersion == "free-pro-team@latest" %}and bots{% endif %} can only push commits that have been signed and verified to the branch. Weitere Informationen findest Du unter „[Über die Verifikation von Commit-Signaturen](/articles/about-commit-signature-verification)."

Du kannst jederzeit lokale Commits zum Branch übertragen, wenn die Commits signiert und verifiziert sind. {% if currentVersion == "free-pro-team@latest" %}You can also merge signed and verified commits into the branch using a pull request on {% data variables.product.product_name %}. However, you cannot squash and merge a pull request into the branch on {% data variables.product.product_name %} unless you are the author of the pull request.{% else %} However, you cannot merge pull requests into the branch on {% data variables.product.product_name %}.{% endif %} You can {% if currentVersion == "free-pro-team@latest" %}squash and {% endif %}merge pull requests locally. For more information, see "[Checking out pull requests locally](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)."{% if currentVersion == "free-pro-team@latest" %} For more information about merge methods, see "[About merge methods on {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

{% note %}

**Hinweis:** Durch die Aktivierung der obligatorischen Commit-Signatur auf einem Branch wird die Mitwirkung erschwert. Wenn ein Mitarbeiter einen nicht signierten Commit an einen Branch übermittelt, für den die obligatorische Commit-Signatur aktiviert ist, muss er einen Commit-Rebase durchführen, um eine verifizierte Signatur einzubinden und den Push des neu geschriebenen Commits an den Branch zu erzwingen.

{% endnote %}

Administratoren eines Repositorys können lokale Commits übertragen, die nicht signiert und verifiziert wurden. Du kannst jedoch verlangen, dass Administratoren der obligatorischen Commit-Signatur unterliegen. Weitere Informationen findest Du unter „[Obligatorische Commit-Signatur aktivieren](/articles/enabling-required-commit-signing).“

### Weiterführende Informationen

- „[Informationen zu geschützten Branches](/articles/about-protected-branches)“
