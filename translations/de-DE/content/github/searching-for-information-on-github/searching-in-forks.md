---
title: Forks durchsuchen
intro: '[Forks](/articles/about-forks) werden in Suchergebnissen standardmäßig nicht berücksichtigt. Du kannst aber wählen, dass Forks in Repository-Suchen und, sofern sie bestimmte Kriterien erfüllen, auch in Codesuchen eingeschlossen werden.'
redirect_from:
  - /articles/searching-in-forks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Um Forks in die Ergebnisse von [Repository-Suchen](/articles/searching-for-repositories) einzuschließen, musst Du Deiner Abfrage `fork:true` oder `fork:only` hinzufügen.

Bei [Codesuchen](/articles/searching-code) werden Forks nur indiziert, wenn für sie mehr Sterne vergeben wurden als für das dem Fork übergeordnete Repository. Code in Forks, die weniger Sterne als das übergeordnete Repository aufweisen, können nicht durchsucht werden. Wenn Du Forks mit mehr Sternen als das übergeordnete Repository in den Ergebnissen von Codesuchen aufnehmen möchtest, musst du Deiner Abfrage `fork:true` oder `fork:only` hinzufügen.

Der Qualifizierer `fork:true` findet alle Ergebnisse, die mit Deiner Suchabfrage übereinstimmen, auch diejenigen aus Forks. Der Qualifizierer `fork:only` findet Ergebnisse, die mit Deiner Suchabfrage übereinstimmen, _nur_ in Forks.

| Qualifizierer | Beispiel                                                                                                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fork:true`   | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) gleicht alle Repositorys mit dem Wort „github“ ab, auch Forks.                                                   |
|               | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) sucht Java-Code mit dem Wort „android“ sowohl in Forks als auch in normalen Repositorys. |
| `fork:only`   | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) gleicht alle Fork-Repositorys ab, die das Wort „github“ enthalten.                                               |
|               | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) sucht Repositorys mit mehr als 500 Forks und gibt nur diejenigen zurück, die Forks sind.             |

### Weiterführende Informationen

- „[Informationen zu Forks](/articles/about-forks)“
- „[Informationen zur Suche auf GitHub](/articles/about-searching-on-github)“
