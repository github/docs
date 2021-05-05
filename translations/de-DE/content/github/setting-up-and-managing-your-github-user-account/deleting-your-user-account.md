---
title: Dein Benutzerkonto löschen
intro: 'Sie können Ihr {% data variables.product.product_name %}-Benutzerkonto jederzeit löschen.'
redirect_from:
  - /articles/deleting-a-user-account/
  - /articles/deleting-your-user-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---

Wenn Du Dein Benutzerkonto löschst, werden alle dazugehörigen Repositorys, Forks von privaten Repositorys, Wikis, Issues, Pull Requests und Seiten Deines Kontos ebenfalls gelöscht. {% if currentVersion == "free-pro-team@latest" %} Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted - instead, they'll be associated with our [Ghost user](https://github.com/ghost).{% else %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted.{% endif %}

{% if currentVersion == "free-pro-team@latest" %} The account name also becomes available to anyone else to use on a new account, and we stop billing you. Die mit dem Konto verknüpfte E-Mail-Adresse wird für die Nutzung mit einem anderen {% data variables.product.product_name %}-Konto frei. {% endif %}

Wenn Du der alleinige Inhaber einer Organisation bist, musst Du die Inhaberschaft auf eine andere Person übertragen oder die Organisation löschen, bevor Du Dein Benutzerkonto löschen kannst. Wenn es noch weitere Inhaber Deiner Organisation gibt, musst Du Dich selbst aus der Organisation löschen, bevor Du Dein Benutzerkonto löschen kannst.

Weitere Informationen findest Du unter:
- „[Inhaberschaft an einer Organisation übertragen](/articles/transferring-organization-ownership)“
- „[Ein Organisationskonto löschen](/articles/deleting-an-organization-account)“
- „[Dich selbst aus einer Organisation entfernen](/articles/removing-yourself-from-an-organization/)“

### Deine Kontoinformationen sichern

Bevor Du Dein Benutzerkonto löschst, erstelle Kopien aller Repositorys, privaten Forks, Wikis, Issues und Pull Requests Deines Kontos.

{% warning %}

**Warnung:** Sobald Dein Benutzerkonto gelöscht wurde, kann GitHub Deine Inhalte nicht wiederherstellen.

{% endwarning %}

### Dein Benutzerkonto löschen

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Klicke unten auf der Seite mit den Kontoeinstellungen unter „Delete account“ (Konto löschen) auf **Delete your account** (Dein Konto löschen). Vor dem Löschen Deines Benutzerkontos musst Du Folgendes tun:
    - Wenn Du der alleinige Inhaber einer Organisation bist, musst Du die Inhaberschaft auf eine andere Person übertragen oder die Organisation löschen.
    - Wenn es andere Inhaber der Organisation gibt, musst Du Dich selbst aus der Organisation entfernen. ![Schaltfläche zum Löschen des Kontos](/assets/images/help/settings/settings-account-delete.png)
4. Fülle das Dialogfeld „Are you sure you want to do this?“ (Möchtest Du das wirklich tun?) aus, um zu bestätigen, dass Du die Folgen der Kontolöschung verstanden hast: ![Dialogfeld zum Bestätigen der Kontolöschung](/assets/images/help/settings/settings-account-deleteconfirm.png)
  {% if currentVersion == "free-pro-team@latest" %}- Recall that all repositories, forks of private repositories, wikis, issues, pull requests and pages owned by your account will be deleted, your billing will end, and your username will be available to anyone for use on {% data variables.product.product_name %}.
  {% else %}– Denke daran, dass alle Repositorys, Forks von privaten Repositorys, Wikis, Issues, Pull Requests und Seiten von Deinem Konto ebenfalls gelöscht werden und Dein Benutzername wieder für die Verwendung auf {% data variables.product.product_name %} freigegeben wird.
  {% endif %}– Gib im ersten Feld Deinen {% data variables.product.product_name %}-Benutzernamen oder Deine E-Mail-Adresse ein.
    - Gib im zweiten Feld den Text von der Aufforderung ein.
