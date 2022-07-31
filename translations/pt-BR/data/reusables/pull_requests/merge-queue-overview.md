A merge queue can increase the rate at which pull requests are merged into a busy target branch while ensuring that all required branch protection checks pass.

Once a pull request has passed all of the required branch protection checks, a user with write access to the repository can add that pull request to a merge queue.

A merge queue may use {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[{% data variables.product.prodname_actions %}](/actions/)".
