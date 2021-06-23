---
title: Tracking changes in a file
intro: You can trace changes to lines in a file and discover how parts of the file evolved over time.
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file/
  - /articles/tracing-changes-in-a-file/
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

With the blame view, you can view the line-by-line revision history for an entire file, or view the revision history of a single line within a file by clicking {% octicon "versions" aria-label="The prior blame icon" %}. Each time you click {% octicon "versions" aria-label="The prior blame icon" %}, you'll see the previous revision information for that line, including who committed the change and when.

![Git blame view](/assets/images/help/repository/git_blame.png)

In a file or pull request, you can also use the {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} menu to view Git blame for a selected line or range of lines.

![Kebab menu with option to view Git blame for a selected line](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Tip:** On the command line, you can also use `git blame` to view the revision history of lines within a file. For more information, see [Git's `git blame` documentation](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Click to open the file whose line history you want to view.
3. In the upper-right corner of the file view, click **Blame** to open the blame view. ![Blame button](/assets/images/help/repository/blame-button.png)
4. To see earlier revisions of a specific line, or reblame, click {% octicon "versions" aria-label="The prior blame icon" %} until you've found the changes you're interested in viewing. ![Prior blame button](/assets/images/help/repository/prior-blame-button.png)
