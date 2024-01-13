---
title: About source code imports using the command line
intro: 'You can use command line tools to import source code and its revision history to {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About source code imports
---


{% ifversion fpt or ghec %}

If you want to import a Git repository that is stored on a code hosting service that is publicly available on the internet, we recommend using GitHub Importer. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-github-importer)."

If your source code is not tracked by Git or is not publicly available, you can use the command line instead.

{% else %}

You can use the command line to import source code and, if the code has been tracked using a version control system like Git, the code's revision history.

{% endif %}

- To import a Git repository that is stored on a code hosting service{% ifversion fpt or ghec %} that is not accessible from the public internet{% endif %}, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)."
- To import code that is only stored locally, and is either tracked by Git or not tracked by any version control system, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)."
- To import code that is tracked by any version control system other than Git, first convert the repository to Git, then push the Git repository to {% data variables.product.product_name %}.
{% ifversion fpt or ghec or ghae %}
  - "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)"
  - "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-mercurial-repository)"
  - "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-team-foundation-version-control-repository)"
{% else %}
  - End users can use third-party conversion tools.
    - "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)"
    - "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-mercurial-repository)"
    - "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-team-foundation-version-control-repository)"
  - Site administrators can use the administrative shell. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-from-other-version-control-systems-with-the-administrative-shell)."
{% endif %}

All of these tools import source code and revision history, only. If you also want to import your settings and your collaboration history, such as issues and pull requests, you'll need to use more advanced tools. To determine the best tool to use for your migration, see "[AUTOTITLE](/migrations/overview/planning-your-migration-to-github)."

{% ifversion fpt or ghec %}

## Further reading

- "[AUTOTITLE](/get-started/using-git/troubleshooting-the-2-gb-push-limit)"
{% endif %}
