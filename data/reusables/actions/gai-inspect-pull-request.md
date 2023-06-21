### Inspecting the pull request

The output from a successful run of the `migrate` command contains a link to the new pull request that adds the converted workflow to your repository.

Some important elements of the pull request include:

- In the pull request description, a section called **Manual steps**, which lists steps that you must manually complete before you can finish migrating your pipelines to {% data variables.product.prodname_actions %}. For example, this section might tell you to create any secrets used in your workflows.
- The converted workflows file. Select the **Files changed** tab in the pull request to view the workflow file that will be added to your {% data variables.product.product_name %} repository.

When you are finished inspecting the pull request, you can merge it to add the workflow to your {% data variables.product.product_name %} repository.
