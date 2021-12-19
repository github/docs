Merge queues for pull requests can increase the rate at which pull requests are merged into a busy default branch, whilst ensuring that CI checks pass.

Merge queues use {% data variables.product.prodname_actions %}. For more information about actions, see "[{% data variables.product.prodname_actions %}](/actions/)."

Once a pull request has passed any required checks and approvals, a contributor with write access can add the pull request to the merge queue. The queue then creates a temporary branch with that pull request and any pull requests ahead of it in the queue, and triggers any required continuous integration (CI) checks.
