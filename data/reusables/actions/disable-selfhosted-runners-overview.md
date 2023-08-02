There is no guarantee that self-hosted runners for {% data variables.product.product_name %} will be hosted on ephemeral, clean virtual machines. As a result, they may be compromised by untrusted code in a workflow.

Similarly, anyone who can fork the repository and open a pull request (generally those with read access to the repository) can compromise the self-hosted runner environment, including gaining access to secrets and the `GITHUB_TOKEN` which, depending on its settings, can grant write access to the repository. Although workflows can control access to environment secrets by using environments and required reviews, these workflows are not run in an isolated environment and are still susceptible to the same risks when run on a self-hosted runner.

For these and other reasons, you may decide to prevent people creating self-hosted runners at the repository level.
