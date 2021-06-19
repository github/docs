---
title: Arten erforderlicher Statuschecks
intro: Du kannst die erforderlichen Statusprüfungen entweder als "loose" (locker) oder als "strict" (streng) einrichten. Die Art der erforderlichen Statuschecks bestimmt, ob Dein Branch vor dem Zusammenführen auf dem aktuellen Stand mit dem Basisbranch sein muss.
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/types-of-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

| Art des erforderlichen Statuschecks | Einstellung                                                                                                                                                   | Merge-Anforderungen                                                                    | Erwägungen                                                                                                                                                                                                                                                                                                 |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Streng**                          | Das Kontrollkästchen **Require branches to be up-to-date before merging** (Aktualität der Branches vor dem Zusammenführen erzwingen) ist aktiviert.           | Der Branch **muss** vor dem Zusammenführen auf dem Stand des Basisbranches sein.       | Dies ist das Standardverhalten für erforderliche Statuschecks. Weitere Builds können erforderlich sein, da Du den Head-Branch auf den neuesten Stand bringen musst, nachdem andere Mitarbeiter Pull Requests in den geschützten Basisbranch überführt haben.                                               |
| **Locker**                          | Das Kontrollkästchen **Require branches to be up-to-date before merging** (Aktualität der Branches vor dem Zusammenführen erzwingen) ist **nicht** aktiviert. | Der Branch muss vor dem Zusammenführen **nicht** auf dem Stand des Basisbranches sein. | Es sind weniger Builds erforderlich, da Du den Head-Branch nicht auf den neuesten Stand bringen musst, nachdem andere Mitarbeiter Pull Requests überführt haben. Statuschecks schlagen nach dem Zusammenführen Deines Branches möglicherweise fehl, wenn inkompatible Änderungen am Basisbranch vorliegen. |
| **Deaktiviert**                     | Das Kontrollkästchen **Require status checks to pass before merging** (Statuschecks müssen vor dem Zusammenführen bestanden werden) ist **deaktiviert**.      | Für den Branch gelten keine Merge-Einschränkungen.                                     | Wenn die erforderlichen Statuschecks nicht aktiviert sind, können Mitarbeiter den Branch unabhängig von seinem Stand gegenüber dem Basisbranch jederzeit zusammenführen. Die Wahrscheinlich inkompatibler Änderungen erhöht sich dadurch jedoch.                                                           |

### Weiterführende Informationen

- „[Informationen zu erforderlichen Statuschecks](/articles/about-required-status-checks)“
- „[Erforderliche Statuschecks aktivieren](/articles/enabling-required-status-checks)“
