---
title: Restoring a deleted repository
intro: 'Bestimmte gelöschte Repositorys können wiederhergestellt werden, sodass ihr Inhalt wieder zur Verfügung steht.'
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

Alle Benutzer können gelöschte Repositorys wiederherstellen, die zu ihrem eigenen Benutzerkonto gehörten. Organisationsinhaber können gelöschte Repositorys wiederherstellen, die im Eigentum der Organisation standen.

### Informationen zur Repository-Wiederherstellung

Ein gelöschte Repository kann innerhalb von 90 Tagen wiederhergestellt werden. Dies gilt allerdings nicht, wenn das Repository Teil eines Fork-Netzwerks war, das derzeit nicht leer ist. Ein Fork-Netzwerk besteht aus einem übergeordneten Repository, den Forks des Repositorys und den Forks dieser Repository-Forks. Wenn Dein Repository Teil eines Fork-Netzwerks war, kann es nur dann wiederhergestellt werden, wenn alle anderen Repositorys im Netzwerk gelöscht oder vom Netzwerk getrennt wurden. Weitere Informationen zu Forks findest Du unter „[Informationen zu Forks](/articles/about-forks).“

Soll ein Repository wiederhergestellt werden, das Teil eines derzeit nicht leeren Fork-Netzwerks war, wenden Sie sich an {% data variables.contact.contact_support %}.

Wenn Du ein Repository löschst, kann es bis zu einer Stunde dauern, bis dieses Repository wiederhergestellt werden kann.

Beim Wiederherstellen eines Repositorys werden etwaige Releaseanhänge oder Teamberechtigungen nicht wiederhergestellt. Issues that are restored will not be labeled.

### Gelöschtes Repository eines Benutzerkontos wiederherstellen

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.repo-tab %}
{% data reusables.user_settings.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### Gelöschtes Repository einer Organisation wiederherstellen


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### Weiterführende Informationen

- „[Repository löschen](/articles/deleting-a-repository)“
