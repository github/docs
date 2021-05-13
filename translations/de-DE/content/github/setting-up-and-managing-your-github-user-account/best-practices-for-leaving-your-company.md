---
title: Best Practices beim Verlassen Deines Unternehmens
intro: 'Ein Wechsel der Arbeitsstelle gehört zum Leben. Wenn Du Dein GitHub-Benutzerkonto für private *und* berufliche Zwecke nutzt, musst Du ein paar Dinge beachten, wenn Du Dein Unternehmen verlässt.'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
versions:
  free-pro-team: '*'
topics:
  - Accounts
---

Bevor Du Dein Unternehmen verlässt, stelle sicher, dass Du die folgenden Angaben in Deinem Benutzerkonto aktualisierst:

- Widerrufe die Verifizierung Deiner beruflichen E-Mail-Adresse, indem Du [sie in den E-Mail-Einstellungen löschst](/articles/changing-your-primary-email-address). Du kannst die Adresse dann ohne erneute Verifizierung wieder hinzufügen, damit zugehörige Commits mit Deinem Konto verknüpft bleiben.
- [Ändere die primäre E-Mail-Adresse](/articles/changing-your-primary-email-address) von der beruflichen in Deine private E-Mail-Adresse um.
{% if currentVersion == "free-pro-team@latest" %}
- [Verifiziere die neue primäre E-Mail-Adresse](/articles/verifying-your-email-address).
{% endif %}
- [Ändere Deinen GitHub-Benutzernamen](/articles/changing-your-github-username), um alle Verweise auf Dein Unternehmen oder Deine Organisation zu entfernen, falls erforderlich.

## Unternehmen verlassen

Wenn Du mit Repositorys gearbeitet hast, die einer Organisation gehören, [entfernen Dich selbst als Mitglied der Organisation](/articles/removing-yourself-from-an-organization). Beachte: Wenn Du der Organisationsinhaber bist, solltest Du zunächst [die Inhaberschaft der Organisation an eine andere Person übertragen](/articles/transferring-organization-ownership).

## Berufliche Verknüpfungen aus persönlichen Repositorys entfernen

Wenn Du beruflich mit einer anderen Person an Repositorys zusammengearbeitet hast, die zum persönlichen Benutzerkonto dieser Person gehören, [entferne Dich selbst als Mitarbeiter](/articles/removing-yourself-from-a-collaborator-s-repository) von diesen Repositorys.

- [Beobachte keine Repositorys mehr](https://github.com/watching), die zu Deiner Arbeit gehören. Du brauchst diese Benachrichtigungen nicht mehr!
- [Übertrage Repositorys, deren Inhaber Du bist](/articles/how-to-transfer-a-repository) und die andere Personen möglicherweise noch bearbeiten müssen, nachdem Du das Unternehmen verlassen hast.
- [Lösche Forks, die Dir gehören](/articles/deleting-a-repository) und die mit Deiner Arbeit zusammenhängen. Sei unbesorgt – beim Löschen eines Forks wird das vorgelagerte Repository nicht gelöscht.
- Lösche lokale Kopien Deiner Forks, sofern auf Deinem Computer vorhanden:

```shell
$ rm -rf <em>arbeitsverzeichnis</em>
```
