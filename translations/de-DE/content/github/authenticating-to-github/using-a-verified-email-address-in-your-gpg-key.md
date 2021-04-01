---
title: Eine verifizierte E-Mail-Adresse in Deinem GPG-Schlüssel verwenden
intro: 'Bei der Verifizierung einer Signatur überprüft {% data variables.product.product_name %}, ob die E-Mail-Adresse des Beitragenden oder des Taggers mit einer E-Mail-Adresse aus den Identitäten des GPG-Schlüssels übereinstimmt und ob es sich dabei im Konto des Benutzers um eine verifizierte E-Mail-Adresse handelt. Dadurch wird sichergestellt, dass der Schlüssel zu Dir gehört und dass Du den Commit oder das Tag erstellt hast.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - identity
  - access management
---

{% if currentVersion == "free-pro-team@latest" %}
Wenn Du Deine GitHub-E-Mail-Adresse verifizieren musst, findest Du weitere Informationen unter „[Deine E-Mail-Adresse verifizieren](/articles/verifying-your-email-address/).“
{% endif %}Wenn Du eine E-Mail-Adresse aktualisieren oder zu Deinem GPG-Schlüssel hinzufügen musst, findest Du weitere Informationen unter „[Eine E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key).“

Commits und Tags können verschiedene E-Mail-Adressen enthalten. Für Commits gibt es den Autor (die Person, die den Code geschrieben hat) und den Beitragenden (die Person, die den Commit zur Struktur hinzugefügt hat). Wenn Du mit Git einen Commit signierst, wird unabhängig davon, ob es sich um einen Merge, um Cherry-Picking oder um einen normalen `git commit` handelt, die Beitragender-E-Mail-Adresse Deine eigene sein, auch wenn die Autoren-E-Mail-Adresse eine andere ist. Tags sind einfacher. Die Tagger-E-Mail-Adresse ist immer der Benutzer, der das Tag erstellt hat.

Wenn Du Deine Beitragender- oder Tagger-E-Mail-Adresse ändern musst, findest Du weitere Informationen unter „[E-Mail-Adresse für Commits festlegen](/articles/setting-your-commit-email-address/).“

### Weiterführende Informationen

- „[Informationen zur Verifizierung einer Commit-Signatur](/articles/about-commit-signature-verification)“
