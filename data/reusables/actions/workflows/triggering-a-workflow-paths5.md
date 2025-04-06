> [!NOTE]
> If you push more than 1,000 commits, or if {% data variables.product.prodname_dotcom %} does not generate the diff due to a timeout, the workflow will always run.

The filter determines if a workflow should run by evaluating the changed files and running them against the `paths-ignore` or `paths` list. If there are no files changed, the workflow will not run.

{% data variables.product.prodname_dotcom %} generates the list of changed files using two-dot diffs for pushes and three-dot diffs for pull requests:
* **Pull requests:** Three-dot diffs are a comparison between the most recent version of the topic branch and the commit where the topic branch was last synced with the base branch.
* **Pushes to existing branches:** A two-dot diff compares the head and base SHAs directly with each other.
* **Pushes to new branches:** A two-dot diff against the parent of the ancestor of the deepest commit pushed.

Diffs are limited to 300 files. If there are files changed that aren't matched in the first 300 files returned by the filter, the workflow will not run. You may need to create more specific filters so that the workflow will run automatically.

For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)."
