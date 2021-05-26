---
title: Zuordnung von Commit-Autoren mit GitHub Importer aktualisieren
intro: Während eines Imports kannst Du die Commits in Deinem Repository mit den GitHub-Konten der Commit-Autoren abgleichen.
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
versions:
  free-pro-team: '*'
---
GitHub Importer sucht nach GitHub-Benutzern, deren E-Mail-Adressen mit denen der Autoren der Commits im importierten Repository übereinstimmen. Dann kannst Du einen Commit mit seinem Autoren verbinden, entweder mittels seiner E-Mail-Adresse oder seinem GitHub-Benutzernamen.

### Commit-Autoren aktualisieren

1. Klicke nach dem Import Deines Repositorys auf der Seite mit dem Importstatus auf **Match authors** (Autoren abgleichen). ![Schaltfläche „Match authors“ (Autoren abgleichen)](/assets/images/help/importer/match-authors-button.png)
2. Klicke neben dem Autor, dessen Informationen Du aktualisieren möchtest, auf **Connect** (Verbinden). ![Liste der Commit-Autoren](/assets/images/help/importer/connect-commit-author.png)
3. Gib die E-Mail-Adresse oder den GitHub-Benutzernamen des Autors ein, und drücke die **Eingabetaste**.

### Commits einem GitHub-Benutzer mit einer öffentlichen E-Mail-Adresse zuordnen

Wenn der Autor eines Commits des importierten Repositorys über ein GitHub-Konto verfügt, das der E-Mail-Adresse zugeordnet ist, unter der er seine Commits verfasst, und er seine [E-Mail-Adresse für Commits nicht als privat festgelegt hat](/articles/setting-your-commit-email-address), ordnet GitHub Importer die mit dem Commit verbundene E-Mail-Adresse der öffentlichen E-Mail-Adresse dessen GitHub-Kontos zu. Dadurch wird auch der Commit dem GitHub-Konto des Autors zugeordnet.

### Commits einem GitHub-Benutzer ohne öffentliche E-Mail-Adresse zuordnen

Wenn der Autor eines Commits des importierten Repositorys in seinem GitHub-Profil keine öffentliche E-Mail-Adresse festgelegt hat, seine [E-Mail-Adresse für Commits aber auch nicht als privat festgelegt ist](/articles/setting-your-commit-email-address), kann GitHub Importer die dem Commit zugeordnete E-Mail-Adresse vermutlich nicht dem GitHub-Konto des Autors zuordnen.

Dies kann der Commit-Autor durch Festlegung seiner E-Mail-Adresse als privat lösen. In diesem Fall werden seine Commits `<username>@users.noreply.github.com` zugeordnet und die importierten Commits werden seinem GitHub-Konto zugeordnet.

### Commits über die E-Mail-Adresse zuordnen

Wenn die E-Mail-Adresse des Autors nicht mit seinem GitHub-Konto verbunden ist, kann er auch nach dem Import die [Adresse seinem Konto zuordnen](/articles/adding-an-email-address-to-your-github-account). Die Commits werden ihm dann korrekt zugeordnet.

Wenn der Autor über kein GitHub-Konto verfügt, ordnet GitHub Importer dessen Commits der mit den Commits verbundenen E-Mail-Adresse zu.

### Weiterführende Informationen

- „[Informationen zu GitHub Importer](/articles/about-github-importer)“
- „[Ein Repository mit GitHub Importer importieren](/articles/importing-a-repository-with-github-importer)“
- „[Deinem Konto eine E-Mail-Adresse zuordnen](/articles/adding-an-email-address-to-your-github-account/)“
- „[Commit-E-Mail-Adresse festlegen](/articles/setting-your-commit-email-address)“
