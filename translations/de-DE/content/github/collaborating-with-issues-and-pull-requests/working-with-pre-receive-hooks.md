---
title: Mit Pre-Receive-Hooks arbeiten
intro: '*Pre-Receive-Hooks* erzwingen Regeln für Beiträge, bevor Commits per Push-Vorgang an ein Repository übertragen werden können.'
redirect_from:
  - /articles/working-with-pre-receive-hooks
versions:
  enterprise-server: '*'
---

Pre-Receive-Hooks führen Tests für an ein Repository übertragenen Code durch, um sicherzustellen, dass die Beiträge die Repository- oder Organisationsrichtlinie erfüllen. Falls die Commit-Inhalte die Tests bestehen, wird der Push in das Repository akzeptiert. Falls die Commit-Inhalte die Tests nicht bestehen, wird der Push nicht akzeptiert.

Falls Dein Push nicht akzeptiert wird, wird eine Fehlermeldung zum fehlgeschlagenen Pre-Receive-Hook angezeigt.

```
$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 916 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: always_reject.sh: failed with exit status 1
remote: error: rejecting all pushes
To https://54.204.174.51/hodor/nope.git
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'https://54.204.174.51/hodor/nope.git'
```

![Fehlermeldung für fehlgeschlagenen Pre-Receive-Hook](/assets/images/help/pull_requests/pre-receive-hook-failed-error.png)

Ihr {% data variables.product.product_name %}-Websiteadministrator kann Pre-Receive-Hooks für Ihre Organisation oder für Ihr Repository erstellen und entfernen. Zudem kann er Organisations- oder Repository-Administratoren erlauben, Pre-Receive-Hooks zu aktivieren oder zu deaktivieren. Weitere Informationen findest Du unter „[Pre-Receive-Hooks zum Erzwingen der Richtlinie verwenden](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/using-pre-receive-hooks-to-enforce-policy).“
