最初にバージョンアップデートを有効にすると、古くなった依存関係が大量にあり、中には最新バージョンまでにいくつものバージョンが存在しているものもあるかもしれません。 {% data variables.product.prodname_dependabot %} checks for outdated dependencies as soon as it's enabled. 設定が更新するマニフェストファイルの数に応じて、設定ファイルの追加後数分のうちに、バージョンアップデートの新しいプルリクエストが発行されるかもしれません。

To keep pull requests manageable and easy to review, {% data variables.product.prodname_dependabot %} raises a maximum of five pull requests to start bringing dependencies up to the latest version. 次にスケジュールされているアップデートの前にこれらの最初のプルリクエストをいくつかマージしたなら、それ以降のプルリクエストは最大で5つ（この上限は変更できます）オープンされます。
