Merge queues for pull requests can increase the rate at which pull requests are merged into a busy default branch, whilst ensuring that CI checks pass. 

Once a pull request has passed any required checks and approvals, a contributor can add the pull request to the merge queue. The queue then creates a temporary branch with that pull request and any pull requests ahead of it in the queue, and triggers any required continuous integration (CI) checks. Once CI checks pass, {% data variables.product.product_name %} merges the pull request by fast-forwarding the default branch.
