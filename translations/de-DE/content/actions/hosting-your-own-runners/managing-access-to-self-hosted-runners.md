---
title: Zugriff auf selbst-gehostete Runner verwalten
intro: 'Du kannst bestimmen, welche Repositories Jobs an die selbst-gehosteten Runner einer Organisation senden können.'
versions:
  free-pro-team: '*'
---

Selbst gehostete Runner, die auf Organisationsebene hinzugefügt wurden, können Jobs für alle Repositories der Organisation verarbeiten. Wenn Du den Zugriff auf deine selbst-gehosteten Runner beschränken möchtest, kannst Du die Richtlinie so konfigurieren, dass sie nur Jobs für private Repositories verarbeiten, oder Du kannst eine Liste berechtigter Repositories definieren.

### Steuern, welche Repositories Zugriff auf die Runner einer Organisation haben

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Klicke neben „selbst-gehostete Runner“ **Repository-Berechtigungen verwalten**. ![Repository-Berechtigungen verwalten](/assets/images/help/settings/actions-runner-manage-permissions.png)

1. Wähle aus dem Dropdown-Menü eine der folgenden Optionen:

   * **Alle Repositories** - Alle öffentlichen und privaten Repositories in der Organisation können Jobs an die selbst-gehosteten Runner der Organisation senden.
   * **Private Repositories** - Nur private Repositories in der Organisation können Jobs an die selbst-gehosteten Runner der Organisation senden.
   * **Ausgewählte Repositories** - Benutze das Repository-Auswahlmenü, um auszuwählen, welche Repositories in der Organisation Aufträge an die selbst-gehosteten Runner senden können.
