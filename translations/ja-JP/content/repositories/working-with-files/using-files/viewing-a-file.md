---
title: Viewing a file
intro: You can view raw file content or trace changes to lines in a file and discover how parts of the file evolved over time.
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View files and track file changes
---

## Viewing or copying the raw file content

With the raw view, you can view or copy the raw content of a file without any styling.

{% data reusables.repositories.navigate-to-repo %}
1. Click the file that you want to view.
2. In the upper-right corner of the file view, click **Raw**. ![Screenshot of the Raw button in the file header](/assets/images/help/repository/raw-file-button.png)
3. Optionally, to copy the raw file content, in the upper-right corner of the file view, click **{% octicon "copy" aria-label="The copy icon" %}**.

## Viewing the line-by-line revision history for a file

Blame ビューでは、{% octicon "versions" aria-label="The prior blame icon" %} をクリックすることで、ファイル全体の行ごとのリビジョン履歴やファイル内の 1 つの行のリビジョン履歴を表示することができます。 {% octicon "versions" aria-label="The prior blame icon" %} をクリックするたびに、変更をコミットした者と時間を含む、その行の過去のリビジョン情報が表示されます。

![Git blame ビュー](/assets/images/help/repository/git_blame.png)

ファイルやプルリクエストでは、{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} メニューを使って、選択した行や行の範囲の Git blame を表示することもできます。

![選択した行の Git blame を表示するオプションのあるケバブメニュー](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**ヒント:** コマンドライン上で、ファイル内の行のリビジョン履歴を表示するために `git blame` を使うこともできます。 詳細は [Git の `git blame` のドキュメンテーション](https://git-scm.com/docs/git-blame)を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. クリックして、表示したい行の履歴のファイルを開きます。
3. ファイルビューの右上隅で [**Blame**] をクリックして blame ビューを開きます。 ![[Blame] ボタン](/assets/images/help/repository/blame-button.png)
4. 特定の行の過去のリビジョンを表示するには、見てみたい変更が見つかるまで {% octicon "versions" aria-label="The prior blame icon" %} をクリックします。 ![さらに前の状態に遡るボタン](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## Ignore commits in the blame view

All revisions specified in the `.git-blame-ignore-revs` file, which must be in the root directory of your repository, are hidden from the blame view using Git's `git blame --ignore-revs-file` configuration setting. For more information, see [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) in the Git documentation.

1. In the root directory of your repository, create a file named `.git-blame-ignore-revs`.
2. Add the commit hashes you want to exclude from the blame view to that file. We recommend the file to be structured as follows, including comments:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Commit and push the changes.

Now when you visit the blame view, the listed revisions will not be included in the blame. You'll see an **Ignoring revisions in .git-blame-ignore-revs** banner indicating that some commits may be hidden:

![Screenshot of a banner on the blame view linking to the .git-blame-ignore-revs file](/assets/images/help/repository/blame-ignore-revs-file.png)

This can be useful when a few commits make extensive changes to your code. You can use the file when running `git blame` locally as well:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

You can also configure your local git so it always ignores the revs in that file:

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}
