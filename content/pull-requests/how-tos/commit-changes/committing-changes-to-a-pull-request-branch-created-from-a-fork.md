---
title: Committing changes to a pull request branch created from a fork
intro: Commit changes to a pull request branch created from a fork by obtaining the necessary permissions and using Git commands effectively.
redirect_from:
  - /pull-requests/how-tos/create-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Commit to PR branch from fork
category:
  - Commit changes
contentType: how-tos
---

To commit to a pull request branch created from a fork, you need push access to the base repository, permission from the pull request creator, and a user-owned fork without branch restrictions that prevent your push. Only the pull request creator can allow edits to their fork. See [AUTOTITLE](/pull-requests/how-tos/work-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

1. On {% data variables.product.github %}, navigate to the fork where the pull request branch was created.
{% data reusables.repositories.copy-clone-url %}
1. Open your terminal or Git Bash.
1. Change the current working directory to the location where you want to clone the fork.

   ```shell
   cd open-source-projects
   ```

1. Clone the fork, then navigate into the cloned repository.

   ```shell
   git clone https://{% data variables.product.product_url %}/USERNAME/FORK-OF-THE-REPOSITORY
   cd FORK-OF-THE-REPOSITORY
   ```

1. Check out the pull request's compare branch. To find the compare branch, open the pull request and check the branch shown at the top of the page.

   ```shell
   git checkout TEST-BRANCH
   ```

1. Make your changes, then stage and commit them.

   ```shell
   git add .
   git commit -m "YOUR-COMMIT-MESSAGE"
   ```

1. Push your commit to the pull request branch.

   ```shell
   git push origin TEST-BRANCH
   ```

Your new commits appear on the original pull request on {% data variables.location.product_location %}.

## Further reading

* [AUTOTITLE](/pull-requests/reference/forks)
