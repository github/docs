---
title: Using keywords in issues and pull requests
intro: Use keywords to link an issue and pull request or to mark an issue or pull request as a duplicate.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Issues
  - Pull requests
---

## Einen Pull Request zu einem Issue verknüpfen

To link a pull request to an issue to{% ifversion fpt or ghes or ghae %} show that a fix is in progress and to{% endif %} automatically close the issue when someone merges the pull request, type one of the following keywords followed by a reference to the issue. For example, `Closes #10` or `Fixes octo-org/octo-repo#100`.

* close (schließen)
* closes (wird geschlossen)
* closed (geschlossen)
* fix (korrigieren)
* fixes (korrigiert)
* fixed (ist korrigiert)
* beheben
* resolves (löst)
* resolved (gelöst)

Weitere Informationen findest Du unter "[Pull Request mit einem Issue verknüpfen](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)."

## Marking an issue or pull request as a duplicate

Um einen Issue oder Pull Request als Duplikat zu markieren, gib „Duplikat von“ gefolgt von der Nummer des Issues oder Pull Requests, der dupliziert wird, in den Text eines neuen Kommentars ein. For more information, see "[Marking issues or pull requests as a duplicate](/issues/tracking-your-work-with-issues/marking-issues-or-pull-requests-as-a-duplicate)."
