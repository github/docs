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
2. In the upper-right corner of the file view, click **Raw**.
![Screenshot of the Raw button in the file header](/assets/images/help/repository/raw-file-button.png)
3. Optionally, to copy the raw file content, in the upper-right corner of the file view, click **{% octicon "copy" aria-label="The copy icon" %}**.

## Viewing the line-by-line revision history for a file

With the blame view, you can view the line-by-line revision history for an entire file, or view the revision history of a single line within a file by clicking {% octicon "versions" aria-label="The prior blame icon" %}. Each time you click {% octicon "versions" aria-label="The prior blame icon" %}, you'll see the previous revision information for that line, including who committed the change and when.

![Git blame view](/assets/images/help/repository/git_blame.png)

In a file or pull request, you can also use the {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} menu to view Git blame for a selected line or range of lines.

![Kebab menu with option to view Git blame for a selected line](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Tip:** On the command line, you can also use `git blame` to view the revision history of lines within a file. For more information, see [Git's `git blame` documentation](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Click to open the file whose line history you want to view.
3. In the upper-right corner of the file view, click **Blame** to open the blame view.
![Blame button](/assets/images/help/repository/blame-button.png)
4. To see earlier revisions of a specific line, or reblame, click {% octicon "versions" aria-label="The prior blame icon" %} until you've found the changes you're interested in viewing.
![Prior blame button](/assets/images/help/repository/prior-blame-button.png)

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

## Bypassing `.git-blame-ignore-revs` in the blame view

If the blame view for a file shows **Ignoring revisions in .git-blame-ignore-revs**, you can still bypass `.git-blame-ignore-revs` and see the normal blame view. In the URL, append a `~` to the SHA and the **Ignoring revisions in .git-blame-ignore-revs** will disappear.
