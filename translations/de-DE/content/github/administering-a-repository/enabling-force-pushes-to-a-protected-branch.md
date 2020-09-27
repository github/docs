---
title: Erzwungene Pushes zu einem geschützten Branch aktivieren
intro: Du kannst erzwungene Pushes in einen geschützten Branch erlauben.
product: '{{ site.data.reusables.gated-features.protected-branches }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Jeder Benutzer mit Administratorberechtigungen in einem Repository kann erzwungene Pushes aktivieren.

### Über erzwungene Pushes zu geschützten Branches

Standardmäßig sind erzwungene Pushes auf allen geschützten Branches blockiert. Wenn Du erzwungene Pushes zu einem geschützten Branch aktivierst, kann jeder Benutzer mit mindestens Schreibberechtigungen im Repository Pushes zum Branch erzwingen, inbegriffen Benutzer mit Administratorberechtigungen.

Das Aktivieren erzwungener Pushes wird keine anderen Branch-Schutzregeln überschreiben. Wenn ein Branch beispielsweise einen linearen Commit-Verlauf verlangt, kannst Du keine Merge-Commit-Pushes zu diesem Branch erzwingen.

{% if currentVersion != "free-pro-team@latest" %}Du kannst keine erzwungenen Pushes für einen geschützten Branch aktivieren, wenn ein Websiteadministrator erzwungene Pushes auf alle Branches in Deinem Repository blockiert hat. Weitere Informationen findest Du unter „[Blockieren von erzwungenen Pushes zu Repositorys, die einem Benutzerkonto oder einer Organisation gehören](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

Wenn ein Websiteadministrator erzwungene Pushes nur auf den Standardbranch blockiert hat, kannst Du erzwungene Pushes trotzdem für jeden anderen geschützten Branch aktivieren.{% endif %}

{{ site.data.reusables.repositories.protected-branches-options }}

### Erzwungene Pushes aktivieren

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.repository-branches }}
{{ site.data.reusables.repositories.add-branch-protection-rules }}
6. Wähle unter „Rules applied to everyone including administrators" (Regeln für jedermann, Administratoren inbegriffen) **Allow force pushes** (Erlaube erzwungene Pushes). ![Option „Allow force pushes" (Erlaube erzwungene Pushes)](/assets/images/help/repository/allow-force-pushes.png)
7. Klicke auf **Create** (Erstellen).
