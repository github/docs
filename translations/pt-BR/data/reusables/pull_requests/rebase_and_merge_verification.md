When using the **Rebase and Merge** option on a pull request, it's important to note that the commits in the head branch are added to the base branch without commit signature verification. When you use this option, {% data variables.product.prodname_dotcom %} creates a modified commit, using the data and content of the original commit. This means that {% data variables.product.prodname_dotcom %} didn't truly create this commit, and can't therefore sign it as a generic system user.
{% data variables.product.prodname_dotcom %} doesn't have access to the committer's private signing keys, so it can't sign the commit on the user's behalf.

A workaround for this is to rebase and merge locally, and then push the changes to the pull request's base branch.
