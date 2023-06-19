A merge queue helps increase velocity by automating pull request merges into a busy branch and ensuring the branch is never broken by incompatible changes.

The merge queue provides the same benefits as the **Require branches to be up to date before merging** branch protection, but does not require a pull request author to update their pull request branch and wait for status checks to finish before trying to merge.

Using a merge queue is particularly useful on branches that have a relatively high number of pull requests merging each day from many different users.

Once a pull request has passed all required branch protection checks, a user with write access to the repository can add the pull request to the queue. The merge queue will ensure the pull request's changes pass all required status checks when applied to the latest version of the target branch and any pull requests already in the queue.

A merge queue may use {% data variables.product.prodname_actions %} or your own CI provider to run required checks on pull requests in a merge queue. For more information, see "[AUTOTITLE](/actions)."
