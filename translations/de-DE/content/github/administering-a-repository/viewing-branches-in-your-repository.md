---
title: Branches in Deinem Repository anzeigen
intro: 'Branches sind entscheidend für die Zusammenarbeit auf {% data variables.product.product_name %}. Sie lassen sich bestmöglich auf der Branches-Seite anzeigen.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
3. Mithilfe der im oberen Bereich der Seite befindlichen Navigation kannst Du spezifische Listen der Branches anzeigen:
    - **Your branches** (Deine Branches): In Repositorys, in denen Du Push-Berechtigung hast, zeigt die Ansicht **Yours** (Deine) alle Branches an, an die Du Elemente übertragen hast, wobei die neuesten Branches zuerst angezeigt werden.
    - **Active branches** (Aktive Branches): Die Ansicht **Active** (Aktiv) zeigt alle Branches an, zu denen in den letzten drei Monaten Commits beigetragen wurden, wobei die Branches mit den neuesten Commits zuerst angezeigt werden.
    - **Stale branches** (Alte Branches): Die Ansicht **Stale** (Alt) zeigt alle Branches an, zu denen in den letzten drei Monaten keine Commits beigetragen wurden, wobei die Branches mit den ältesten Commits zuerst angezeigt werden. Verwende diese Liste, um zu bestimmen, [welche Branches gelöscht werden sollen](/articles/creating-and-deleting-branches-within-your-repository).
    - **All branches** (Alle Branches): Die Ansicht **All** (Alle) zeigt den Standardbranch, gefolgt von allen anderen Branches, wobei die Branches mit den neuesten Commits zuerst angezeigt werden.

4. Optionally, use the search field on the top right. It provides a simple, case-insensitive, sub-string search on the branch name. It does not support any additional query syntax.

![Die Branches-Seite für das Atom-Repository](/assets/images/help/branches/branches-overview-atom.png)

### Weiterführende Informationen

- „[Branches in Ihrem Repository erstellen und löschen](/articles/creating-and-deleting-branches-within-your-repository)“
- „[Nicht verwendete Branches löschen](/articles/deleting-unused-branches)“
