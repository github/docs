---
title: Informationen zur erforderlichen Commit-Signatur
intro: 'Mit der obligatorischen Commit-Signatur wird sichergestellt, dass Mitarbeiter nur verifizierte und signierte Commits an einen geschützten Branch übertragen können.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn Du in Deinem Repository Branch-Schutzmaßnahmen erzwungen hast, kannst Du die obligatorische Commit-Signatur einrichten. Weitere Informationen findest Du unter „[Geschützte Branches konfigurieren](/articles/configuring-protected-branches/).“

Wenn du die obligatorische Commit-Signatur in einem Branch aktivierst, können Mitarbeiter {% if currentVersion == "free-pro-team@latest" %}und bots{% endif %} nur Commits übertragen, die für den Branch signiert und verifiziert wurden. Weitere Informationen findest Du unter „[Über die Verifikation von Commit-Signaturen](/articles/about-commit-signature-verification)."

Du kannst jederzeit lokale Commits zum Branch übertragen, wenn die Commits signiert und verifiziert sind. {% if currentVersion == "free-pro-team@latest" %}Du kannst signierte und verifizierte Commits auch mittels Pull Request auf {% data variables.product.product_name %} in einen Branch zusammenführen . Du kannst jedoch auf {% data variables.product.product_name %} keinen Pull Request in einen Branch squashen und zusammenführen, außer wenn Du der Autor des Pull Request bist.{% else %} Du kannst jedoch auf {% data variables.product.product_name %} keinen Pull Request in den Branch zusammenführen.{% endif %} Du kannst Pull Requests lokal {% if currentVersion == "free-pro-team@latest" %}squashen und {% endif %}zusammenführen. Weitere Informationen findest Du unter „[Pull Requests lokal auschecken](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)."{% if currentVersion == "free-pro-team@latest" %} Weitere Informationen zu Merge-Methoden findest Du unter „[Über Merge-Methoden auf {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

{% note %}

**Hinweis:** Durch die Aktivierung der obligatorischen Commit-Signatur auf einem Branch wird die Mitwirkung erschwert. Wenn ein Mitarbeiter einen nicht signierten Commit an einen Branch übermittelt, für den die obligatorische Commit-Signatur aktiviert ist, muss er einen Commit-Rebase durchführen, um eine verifizierte Signatur einzubinden und den Push des neu geschriebenen Commits an den Branch zu erzwingen.

{% endnote %}

Administratoren eines Repositorys können lokale Commits übertragen, die nicht signiert und verifiziert wurden. Du kannst jedoch verlangen, dass Administratoren der obligatorischen Commit-Signatur unterliegen. Weitere Informationen findest Du unter „[Obligatorische Commit-Signatur aktivieren](/articles/enabling-required-commit-signing).“

### Weiterführende Informationen

- „[Informationen zu geschützten Branches](/articles/about-protected-branches)“
