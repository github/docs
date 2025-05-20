1. Under **Approval for running fork pull request workflows from contributors**, choose which subset of users will require approval before running workflows on their pull requests. Both the pull request author and the actor of the pull request event triggering the workflow will be checked to determine if approval is required. If approval is required, a user with write access to the repository must approve the pull request workflow to be run. See [AUTOTITLE](/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/approving-workflow-runs-from-public-forks).

   >[!WARNING] When requiring approvals only for first-time contributors (the first two settings), a user that has had any commit or pull request merged into the repository will not require approval. A malicious user could meet this requirement by getting a simple typo or other innocuous change accepted by a maintainer, either as part of a pull request they have authored or as part of another user's pull request.

   * **Require approval for first-time contributors who are new to {% data variables.product.prodname_dotcom %}**. Only users who are both new on {% data variables.product.prodname_dotcom %} and who have never had a commit or pull request merged into this repository will require approval to run workflows.  
   * **Require approval for first-time contributors**. Only users who have never had a commit or pull request merged into this repository will require approval to run workflows.
   * **Require approval for all external contributors** All users that are not a member or owner of this repository and not a member of the organization will require approval to run workflows.

1. Click **Save** to apply the settings.
