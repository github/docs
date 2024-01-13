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
1. In the upper-right corner of the file view, click **Raw**.
{% ifversion code-search-code-view %}

   ![Screenshot of a file. In the header, a button, labeled "Raw," outlined in dark orange.](/assets/images/help/repository/raw-file-button.png)
{% else %}

   ![Screenshot of a file. In the header, a button, labeled "Raw," outlined in dark orange.](/assets/images/enterprise/repository/raw-file-button.png)
{% endif %}
1. Optionally, to copy the raw file content, in the upper-right corner of the file view, click **{% octicon "copy" aria-label="Copy raw content" %}**. {% ifversion code-search-code-view %} To download the raw file, click **{% octicon "download" aria-label="Download raw file" %}**.{% endif %}

## Viewing the line-by-line revision history for a file

Within the blame view, you can view the line-by-line revision history for an entire file.

{% tip %}

**Tip:** On the command line, you can also use `git blame` to view the revision history of lines within a file. For more information, see [Git's `git blame` documentation](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
1. Click to open the file whose line history you want to view.
{% ifversion code-search-code-view %}
1. Above the file content, click **Blame**. This view gives you a line-by-line revision history, with the code in a file separated by commit. Each commit lists the author, commit description, and commit date.
1. To see versions of a file before a particular commit, click {% octicon "versions" aria-label="View blame prior to this change" %}. Alternatively, to see more detail about a particular commit, click the commit message.

      ![Screenshot of a commit in the blame view. The commit message and versions icon are outlined in dark orange.](/assets/images/help/repository/code-view-blame-commit-options.png)

1. To return to the raw code view, above the file content, click **Code**.
   - If you are viewing a Markdown file, above the file content, you can also click **Preview** to return to the view with Markdown formatting applied.
{% else %}
1. In the upper-right corner of the file view, click **Blame** to open the blame view.

   ![Screenshot showing the header for a file. The "Blame" button is outlined in dark orange.](/assets/images/enterprise/repository/blame-button.png)
1. To see earlier revisions of a specific line, or reblame, click {% octicon "versions" aria-label="View blame prior to this change" %} until you've found the changes you're interested in viewing.

   ![Screenshot of the "Blame" view of a file. To the right of a commit message, the versions icon is outlined in dark orange.](/assets/images/enterprise/repository/git-blame.png)
{% endif %}

{% ifversion blame-ignore-revs %}

## Ignore commits in the blame view

All revisions specified in the `.git-blame-ignore-revs` file, which must be in the root directory of your repository, are hidden from the blame view using Git's `git blame --ignore-revs-file` configuration setting. For more information, see [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) in the Git documentation.

1. In the root directory of your repository, create a file named `.git-blame-ignore-revs`.
1. Add the commit hashes you want to exclude from the blame view to that file. We recommend the file to be structured as follows, including comments:

    ```shell
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

1. Commit and push the changes.

Now when you visit the blame view, the listed revisions will not be included in the blame. You'll see an **Ignoring revisions in .git-blame-ignore-revs** banner indicating that some commits may be hidden:

<!--Page used for the screenshots below: https://github.com/electron/electron/blame/main/lib/browser/ipc-main-internal.ts -->

{% ifversion fpt or ghec %}
![Screenshot of the blame view for the "ipc-main-internal.ts" file. A blue banner states that the information is "Ignoring revisions in .git-blame-ignore-revs." The link to the .git-blame-ignore-revs file is outlined in dark orange.](/assets/images/help/repository/blame-ignore-revs-file.png)
{% else %}
![Screenshot of the blame view for the "ipc-main-internal.ts" file. A blue banner states that the information is "Ignoring revisions in .git-blame-ignore-revs." The link to the .git-blame-ignore-revs file is outlined in dark orange.](/assets/images/enterprise/repository/blame-ignore-revs-file.png)
{% endif %}

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

If the blame view for a file shows **Ignoring revisions in .git-blame-ignore-revs**, you can still bypass `.git-blame-ignore-revs` and see the normal blame view. In the URL, append a `~` to the SHA and the **Ignoring revisions in .git-blame-ignore-revs** banner will disappear.
