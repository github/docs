---
title: Creating a permanent link to a code snippet
intro: You can create a permanent link to a specific line or range of lines of code in a specific version of a file or pull request.
redirect_from:
  - /articles/creating-a-permanent-link-to-a-code-snippet
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

This type of permanent link will render as a code snippet only in the repository it originated in. In other repositories, the permalink code snippet will render as a URL.

![Code snippet rendered in a comment](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**Tip:** To create a permalink for an entire file, see "[Getting permanent links to files](/articles/getting-permanent-links-to-files)."

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Locate the code you'd like to link to:
    - To link to code from a file, navigate to the file.
    - To link to code from a pull request, navigate to the pull request and click {% octicon "diff" aria-label="The file diff icon" %} **Files changed**. Then, browse to the file that contains the code you want include in your comment, and click **View**.
{% data reusables.repositories.choose-line-or-range %}
4. To the left of the line or range of lines, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. In the drop-down menu, click **Copy permalink**. ![Kebab menu with option to copy a permanent link for a selected line](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Navigate to the conversation where you want to link to the code snippet.
6. Paste your permalink into a comment, and click **Comment**. ![Pasted permalink in a comment in the same repository](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

### Дополнительная литература

- "[Creating an issue](/articles/creating-an-issue/)"
- "[Opening an issue from code](/articles/opening-an-issue-from-code/)"
- "[Reviewing changes in pull requests](/articles/reviewing-changes-in-pull-requests/)"
