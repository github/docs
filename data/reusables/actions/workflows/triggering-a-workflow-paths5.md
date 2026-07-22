The filter determines if a workflow should run by evaluating the changed files and running them against the `paths-ignore` or `paths` list. If there are no files changed, the workflow will not run.

{% data variables.product.prodname_dotcom %} generates the list of changed files using two-dot diffs for pushes and three-dot diffs for pull requests:
* **Pull requests:** Three-dot diffs are a comparison between the most recent version of the topic branch and the commit where the topic branch was last synced with the base branch.
* **Pushes to existing branches:** A two-dot diff compares the head and base SHAs directly with each other.
* **Pushes to new branches:** A two-dot diff against the parent of the ancestor of the deepest commit pushed.

In some situations, {% data variables.product.prodname_actions %} applies limits that change how filtered workflows run:

* If a push contains more than 1,000 commits, the workflow will **always** run.
* If generating the diff times out, the workflow will **always** run.
* If the generated diff contains more than 3,000 files and the files the workflow filter matches are not in the first 3,000 returned by the filter, the workflow will **not** run.

If you observe these behaviors, you might need to make your filters more specific, or change how you work with pushes and pull requests to generate simpler diffs.

For more information, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests).
