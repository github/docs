---
title: Arbeiten mit Kommentaren
intro: 'Mithilfe der REST-API kannst du auf Kommentare in Pull Requests, Issues oder Commits zugreifen und diese verwalten.'
redirect_from:
  - /guides/working-with-comments
  - /v3/guides/working-with-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 9b3b768d66199fda62bc5e644da9539d5425215e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131329'
---
Für jeden Pull Request stellt {% data variables.product.product_name %} drei Arten von Kommentaransichten bereit: [Kommentare zum gesamten Pull Request][PR comment], [Kommentare zu einer bestimmten Zeile][PR line comment] innerhalb des Pull Request und [Kommentare zu einem bestimmten Commit][commit comment] innerhalb des Pull Request. 

Jede dieser Arten von Kommentaren durchläuft einen anderen Teil der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API.
In diesem Leitfaden erfährst du, wie du auf die einzelnen Arten von Kommentaren zugreifen und diese bearbeiten kannst. Verwende für jedes Beispiel [diesen Beispiel-Pull Request][sample PR], der im Repository „octocat“ vorgenommen wurde. Beispiele findest du wie immer in [unserem Plattformbeispiel-Repository][platform-samples].

## Pull Request-Kommentare

Um auf Kommentare für ein Pull Request zuzugreifen, verwende [die Issues-API][issues].
Dies kann Ihnen zunächst kontraintuitiv vorkommen. Doch sobald du verstehst, dass ein Pull Request nur ein Issue mit Code ist, ergibt es Sinn, die Issues-API zum Erstellen von Kommentaren für ein Pull Request zu verwenden.

Hier erfährst du, wie das Abrufen von Pull Request-Kommentaren funktioniert, indem du ein Ruby-Skript mit [Octokit.rb][octokit.rb] erstellst. Du solltest auch ein [persönliches Zugriffstoken][personal token] erstellen.

Der folgende Code hilft Ihnen, mithilfe von Octokit.rb mit dem Zugreifen auf Kommentare zu einem Pull Request zu beginnen:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.issue_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

Hier rufst du ausdrücklich die Issues-API auf, um die Kommentare abzurufen (`issue_comments`), und stellst sowohl den Repositorynamen (`octocat/Spoon-Knife`) als auch die Pull Request-ID bereit, an der du interessiert bist (`1176`). Anschließend musst du nur die Kommentare durchgehen, um Informationen zu jedem einzelnen abzurufen.

## Pull Request-Kommentare in einer Zeile

In der Diff-Ansicht kannst du eine Diskussion zu einem bestimmten Aspekt einer einzelnen innerhalb des Pull Request vorgenommenen Änderung beginnen. Diese Kommentare erscheinen in den einzelnen Zeilen innerhalb einer geänderten Datei. Die Endpunkt-URL für diese Diskussion stammt aus [der Pull Request-Review-API][PR Review API].

Der folgende Code ruft mit einer einzelnen Pull Request-Nummer alle Pull Request-Kommentare zu Dateien ab:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.pull_request_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]
  path = comment[:path]
  position = comment[:position]

  puts "#{username} made a comment on #{post_date} for the file called #{path}, on line #{position}. It says:\n'#{content}'\n"
end
```

Wie du siehst, ist dieses Beispiel dem obigen sehr ähnlich. Der Unterschied zwischen dieser Ansicht und dem Pull Request-Kommentar ist der Fokus der Unterhaltung.
Ein Kommentar zu einem Pull Request sollte auf Diskussionen oder Ideen zur allgemeinen Richtung des Codes beschränkt sein. Ein Kommentar als Teil eines Pull Request-Reviews sollte sich speziell mit der Art befassen, wie eine bestimmte Änderung in einer Datei implementiert wurde.

## Commitkommentare

Die letzte Art von Kommentar tritt besonders bei einzelnen Commits auf. Aus diesem Grund wird [die Commitkommentar-API][commit comment API] verwendet.

Um die Kommentare für einen Commit abzurufen, solltest du SHA-1 des Commits verwenden.
Mit anderen Worten: Du verwendest keinen Bezeichner, der mit dem Pull Request zusammenhängt. Hier sehen Sie ein Beispiel:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.commit_comments("octocat/Spoon-Knife", "cbc28e7c8caee26febc8c013b0adfb97a4edd96e").each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

Beachte, dass dieser API-Aufruf einzelne Zeilenkommentare sowie Kommentare abruft, die für den gesamten Commit vorgenommen wurden.

[PR comment]: https://github.com/octocat/Spoon-Knife/pull/1176#issuecomment-24114792
[PR line comment]: https://github.com/octocat/Spoon-Knife/pull/1176#discussion_r6252889
[commit comment]: https://github.com/octocat/Spoon-Knife/commit/cbc28e7c8caee26febc8c013b0adfb97a4edd96e#commitcomment-4049848
[sample PR]: https://github.com/octocat/Spoon-Knife/pull/1176
[platform-samples]: https://github.com/github/platform-samples/tree/master/api/ruby/working-with-comments
[issues]: /rest/reference/issues#comments
[personal token]: /articles/creating-an-access-token-for-command-line-use
[octokit.rb]: https://github.com/octokit/octokit.rb
[PR Review API]: /rest/reference/pulls#comments
[commit comment API]: /rest/reference/commits#get-a-commit-comment
