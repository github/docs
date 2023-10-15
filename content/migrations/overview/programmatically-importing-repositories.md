---
title: Programmatically importing repositories
shortTitle: Programmatic repository imports
intro: 'You can programmatically import repositories to {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  feature: source-imports-api-deprecation
type: tutorial
---

## About programmatic import of repositories

In the following guide, you can learn how to programatically run "source and history" migrations of Git repositories to {% data variables.product.prodname_dotcom_the_website %}. Different options are available depending on where the repository is stored.

To learn more about "source and history" and other types of migrations, see "[AUTOTITLE](/migrations/overview/planning-your-migration-to-github)."

The term "source repository" refers to the repository you're importing, and "imported repository" refers to the new repository you're creating.

### About the deprecation of the Source imports REST API

The REST API endpoints to manage source imports allowed the programmatic import of a repositories that are accessible over the internet to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[AUTOTITLE](/rest/migrations/source-imports)" in the REST API documentation.

On April 12, 2024, {% data variables.product.company_short %} will deprecate all of the endpoints listed within "[AUTOTITLE](/rest/migrations/source-imports)" in the REST API documentation. If you currently use these operations, you'll need to make changes to your code or your application will stop working on April 12, 2024.

## Using forks

If the source repository is on {% data variables.product.prodname_dotcom_the_website %}, you may be able to use a fork instead of importing the repository. {% data reusables.repositories.about-forks %} For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

You can programmatically fork a repository using the REST API. For more information, see "[AUTOTITLE](/rest/repos/forks)" in the REST API documentation.

If your use case meets any of the following criteria, you can't use forking instead of directly importing your repository.

- You want the imported repository to be owned by the same user or organization as the source repository.
- You want one user or organization to be able to import the same source repository multiple times.

## Using repository templates

If the source repository is on {% data variables.product.prodname_dotcom_the_website %}, you may be able to use repository templates. {% data reusables.repositories.about-template-repositories %} For more details, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)."

To use repository templates, you must either have read access to an existing repository that's a template, or you must have access to create a template.

You can programatically create a repository from a repository template using the REST API. For more information, see "[AUTOTITLE](/rest/repos/repos)" in the REST API documentation.

## Using {% data variables.product.prodname_importer_proper_name %}

If the source repository is hosted on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_ghe_server %}, Azure DevOps Services, Bitbucket Server, or Bitbucket Data Center, you can import the repository using {% data variables.product.prodname_importer_proper_name %}. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer)."

In addition to your source and version control history, {% data variables.product.prodname_importer_proper_name %} also migrates issues, pull requests, settings, and more.

To use {% data variables.product.prodname_importer_proper_name %}, you must have admin access to the source repository.

You can programatically import repositories with {% data variables.product.prodname_importer_proper_name %} using the GraphQL API.

## Using the Git CLI

If the source repository is a Git repository, you can call the Git CLI programmatically from your code. You can programmatically create a repository using {% data variables.product.prodname_dotcom %}'s REST API, then use commands like `git clone` and `git push` to import the repository to {% data variables.product.prodname_dotcom_the_website %}.

How you call the Git CLI differs depending on your code's language. For example, in Node.js, you can use the `child_process` module, or in Ruby, you can use the `open3` module. For more information, see [Child process](https://nodejs.org/api/child_process.html) in the Node.js documentation or the [ruby/open3 repository](https://github.com/ruby/open3) on {% data variables.product.prodname_dotcom_the_website %}.

To use the Git CLI, you must have access to install Git on the system that hosts your application. For more information, see [Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) in the Git documentation.

## Using {% data variables.product.prodname_cli %}

If the source repository is a Git repository, you can call the {% data variables.product.prodname_cli %} programmatically from your code. You can use `gh repo create` to create a repository. For more information, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

## Further reading

- "[AUTOTITLE](/rest/repos/repos)" in the REST API documentation
