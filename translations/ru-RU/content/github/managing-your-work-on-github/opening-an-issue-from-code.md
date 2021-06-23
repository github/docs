---
title: Opening an issue from code
intro: You can open a new issue from a specific line or lines of code in a file or pull request.
permissions: People with read permissions can create an issue in a repository where issues are enabled.
redirect_from:
  - /articles/opening-an-issue-from-code
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

When you open an issue from code, the issue contains a snippet showing the line or range of code you chose. You can only open an issue in the same repository where the code is stored.

![Code snippet rendered in an issue opened from code](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.administrators-can-disable-issues %}

{% data reusables.repositories.navigate-to-repo %}
2. Locate the code you want to reference in an issue:
    - To open an issue about code in a file, navigate to the file.
    - To open an issue about code in a pull request, navigate to the pull request and click {% octicon "diff" aria-label="The file diff icon" %} **Files changed**. Then, browse to the file that contains the code you want include in your comment, and click **View**.
{% data reusables.repositories.choose-line-or-range %}
4. To the left of the code range, click
{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. In the drop-down menu, click **Reference in new issue**.
  ![Kebab menu with option to open a new issue from a selected line](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

### Дополнительная литература

- "[Creating an issue](/github/managing-your-work-on-github/creating-an-issue)"
- "[Getting permanent links to files](/github/managing-files-in-a-repository/getting-permanent-links-to-files)"
- "[Creating a permanent link to a code snippet](/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)"
