---
title: Creating a permanent link to a code snippet
intro: You can create a permanent link to a specific line or range of lines of code in a specific version of a file or pull request.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
---
## Linking to code

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
4. To the left of the line or range of lines, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. In the drop-down menu, click **Copy permalink**.
  ![Kebab menu with option to copy a permanent link for a selected line](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Navigate to the conversation where you want to link to the code snippet.
6. Paste your permalink into a comment, and click **Comment**.
  ![Pasted permalink in a comment in the same repository](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Linking to Markdown

You can link to specific lines in Markdown files by loading the Markdown file without Markdown rendering. To load a Markdown file without rendering, you can use the `?plain=1` parameter at the end of the url for the file. For example, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

You can link to a specific line in the Markdown file the same way you can in code. Append `#L` with the line number or numbers at the end of the url. For example, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` will highlight line 14 in the plain README.md file.

## Further reading

- "[Creating an issue](/articles/creating-an-issue/)"
- "[Opening an issue from code](/articles/opening-an-issue-from-code/)"
- "[Reviewing changes in pull requests](/articles/reviewing-changes-in-pull-requests/)"
