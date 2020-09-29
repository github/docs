---
title: Merging an upstream repository into your fork
intro: 'If you don''t have push (write) access to an upstream repository, then you can pull commits from that repository into your own fork.'
redirect_from:
  - /articles/merging-an-upstream-repository-into-your-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to your local project.
3. Check out the branch you wish to merge to. Usually, you will merge into the default branch.
  ```shell
  $ git checkout <em>master</em>
  ```
4. Pull the desired branch from the upstream repository. This method will retain the commit history without modification.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. If there are conflicts, resolve them. For more information, see "[Addressing merge conflicts](/articles/addressing-merge-conflicts)".
6. Commit the merge.
7. Review the changes and ensure they are satisfactory.
8. Push the merge to your GitHub repository.
  ```shell
  $ git push origin <em>master</em>
  ```
