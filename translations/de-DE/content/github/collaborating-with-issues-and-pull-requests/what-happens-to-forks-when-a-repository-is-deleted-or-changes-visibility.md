---
title: Was geschieht mit Forks, wenn ein Repository gelöscht wird oder sich dessen Sichtbarkeit ändert?
intro: Wenn Du Dein Repository löschst oder dessen Sichtbarkeit änderst, wirkt sich dies auf die Forks dieses Repositorys aus.
redirect_from:
  - /articles/changing-the-visibility-of-a-network/
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

#### Privates Repository löschen

Wenn Du ein privates Repository löschst, werden alle zugehörigen privaten Forks ebenfalls gelöscht.

#### Öffentliches Repository löschen

Wenn Du ein öffentliches Repository löschst, wird einer der vorhandenen öffentlichen Forks als das neue übergeordnete Repository ausgewählt. Alle anderen Repositorys werden von diesem neuen übergeordneten Element abgezweigt, und nachfolgende Pull Requests werden an dieses neue übergeordnete Element gesendet.

#### Private Forks und Berechtigungen

{% data reusables.repositories.private_forks_inherit_permissions %}

#### Öffentliches Repository in ein privates Repository ändern

Wenn ein öffentliches Repository auf privat festgelegt wird, werden die zugehörigen öffentlichen Forks in ein neues Netzwerk abgespalten. Wie beim Löschen eines öffentlichen Repositorys wird einer der vorhandenen öffentliches Forks als das neue übergeordnete Repository ausgewählt, und alle anderen Repositorys werden von diesem neuen übergeordneten Element abgezweigt. Nachfolgende Pull Requests werden an dieses neue übergeordnete Element gesendet.

Die Forks eines öffentlichen Repositorys bleiben demnach in ihrem eigenen separaten Repository-Netzwerk öffentlich, selbst nachdem das übergeordnete Repository auf privat eingestellt wurde. Dadurch können Fork-Inhaber ohne Unterbrechung weiterhin arbeiten und zusammenarbeiten. Wenn öffentliche Forks nicht auf diese Weise in ein separates Netzwerk verschoben wurden, benötigen die Inhaber dieser Forks die entsprechenden [Zugriffsberechtigungen](/articles/access-permissions-on-github), um Änderungen vom (inzwischen privaten) übergeordneten Repository abzurufen und um Pull Requests an das übergeordnete Repository abzusenden, auch wenn sie zuvor diese Berechtigungen nicht benötigt haben.

{% if currentVersion != "free-pro-team@latest" %}
Wenn für ein öffentliches Repository der anonyme Git-Lesezugriff aktiviert ist und das Repository auf privat festgelegt wird, verlieren alle Forks des Repositorys den anonymen Git-Lesezugriff und verwenden wieder die standardmäßig deaktivierte Einstellung. Wenn ein geforktes Repository als öffentlich festgelegt wird, kann der anonyme Git-Lesezugriff durch die Repository-Administratoren wieder aktiviert werden. Weitere Informationen finden Sie unter „[Anonymen Git-Lesezugriff für ein Repository aktivieren](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)“.
{% endif %}

##### Privates Repository löschen

Wenn ein öffentliches Repository auf privat festgelegt und anschließend gelöscht wird, bleiben die zugehörigen öffentlichen Forks in einem separaten Netzwerk erhalten.

#### Privates Repository in ein öffentliches Repository ändern

Wenn ein privates Repository auf öffentlich festgelegt wird, werden alle privaten Forks in eigenständige private Repositorys umgewandelt und werden zum übergeordneten Element ihres eigenen neuen Repository-Netzwerks. Private Forks werden niemals automatisch auf öffentlich festgelegt, da sie sensible Commits enthalten können, die nicht veröffentlicht werden sollten.

##### Öffentliches Repository löschen

Wenn ein privates Repository auf öffentlich festgelegt und anschließend gelöscht wird, bleiben die zugehörigen privaten Forks in separaten Netzwerken als eigenständige private Repositorys erhalten.

### Weiterführende Informationen

- „[Sichtbarkeit eines Repositorys festlegen](/articles/setting-repository-visibility)“
- „[Informationen zu Forks](/articles/about-forks)“
- „[Die Forking-Richtlinie für Dein Repository verwalten](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)"
- „[Die Forking-Richtlinie für Deine Organisation verwalten](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization)"
