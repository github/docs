---
title: Running CodeQL queries at scale with multi-repository variant analysis
shortTitle: Queries at scale
versions:
    feature: codeql-vs-code-mrva
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can run {% data variables.product.prodname_codeql %} queries on a large number of repositories on {% data variables.product.prodname_dotcom_the_website %} from {% data variables.product.prodname_vscode %}.'
redirect_from:
  - /code-security/codeql-for-vs-code/running-codeql-queries-at-scale-with-mrva
---

## About running {% data variables.product.prodname_codeql %} queries at scale with multi-repository variant analysis

With multi-repository variant analysis (MRVA), you can run {% data variables.product.prodname_codeql %} queries on a list of up to 1,000 repositories on {% data variables.product.prodname_dotcom_the_website %} from {% data variables.product.prodname_vscode %}.

When you run MRVA against a list of repositories, your query is run against each repository that has a {% data variables.product.prodname_codeql %} database available to analyze. {% data variables.product.company_short %} creates and stores the latest {% data variables.product.prodname_codeql %} database for the default branch of thousands of public repositories, including every repository that runs {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}.

You need to enable {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %} on {% data variables.product.prodname_dotcom_the_website %}, using either default setup or advanced setup, before adding your repository to a list for analysis. For information about enabling {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#configuring-code-scanning-automatically)."

### How MRVA runs queries against  {% data variables.product.prodname_codeql %} databases on {% data variables.product.prodname_dotcom_the_website %}

When you run MRVA, the analysis is run entirely using {% data variables.product.prodname_actions %}. You don't need to create any workflows, but you must specify which {% data variables.product.prodname_dotcom %} repository the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} extension should use as a controller repository. As the analysis of each repository completes, the results are sent to {% data variables.product.prodname_vscode_shortname %} for you to view.

The {% data variables.product.prodname_codeql %} extension builds a {% data variables.product.prodname_codeql %} pack with your library and any library dependencies. The {% data variables.product.prodname_codeql %} pack and your selected repository list are posted to an API endpoint on {% data variables.product.prodname_dotcom_the_website %}, which triggers a {% data variables.product.prodname_actions %} dynamic workflow in your controller repository. The workflow spins up multiple parallel jobs to execute the {% data variables.product.prodname_codeql %} query against the repositories in the list, optimizing query execution. As each repository is analyzed, the results are processed and displayed in {% data variables.product.prodname_vscode_shortname %}.

### Prerequisites

* You must define a controller repository before you can run your first multi-repository variant analysis.

* Controller repositories can be empty, but they must have at least one commit.

* The controller repository visibility can be "public" if you plan to analyze public repositories. The variant analysis will be free.

* The controller repository visibility must be "private" if you need to analyze any private or internal repositories. {% ifversion fpt or ghec %} Any actions minutes used by variant analysis, above the free limit, will be charged to the repository owner. For more information about free minutes and billing, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."{% endif %}

## Setting up a controller repository for MRVA

1. In the "Variant Analysis Repositories" view, click **Set up controller repository** to display a field for the controller repository.

    ![Screenshot of the "Variant Analysis Repositories" view. The button to "Set up controller repository" is highlighted in dark orange.](/assets/images/help/security/codeql-for-vs-code-controller-repository.png)

1. Type the owner and name of the repository on {% data variables.product.prodname_dotcom_the_website %} that you want to use as your controller repository and press the **Enter** key.

1. If you are prompted to authenticate with {% data variables.product.company_short %}, follow the instructions and sign in to your personal or organization account. When you have finished, a prompt from {% data variables.product.company_short %} Authentication may ask for permission to open in {% data variables.product.prodname_vscode %}, click **Open**.

The name of the controller repository is saved in your settings for the {% data variables.product.prodname_codeql %} extension. For information on how to edit the controller repository, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/customizing-settings)."

## Running a query at scale using MRVA

1. By default, the "Variant Analysis Repositories" view shows the default lists of the Top 10, Top 100, and Top 1000 public repositories on {% data variables.product.prodname_dotcom_the_website %} for the language that you are analyzing.

1. Optionally, you can add a new repository, organization, or list. For more information, see "[Creating custom lists of repositories](#creating-a-custom-list-of-repositories)."

1. Select which {% data variables.product.company_short %} repository or repositories you want to run your query against.

    ![Screenshot of the "Variant Analysis Repositories" view. The "octo-org/octo-repo" row is highlighted blue and its "Select" button outlined in orange.](/assets/images/help/security/codeql-for-vs-code-variant-analysis-repo-lists.png)

1. Open the query you want to run, right-click in the query file, and select **{% data variables.product.prodname_codeql %}: Run Variant Analysis** to start variant analysis.

{% note %}

**Note:** To a cancel a variant analysis run, click **Stop query** in the "Variant Analysis Results" view.

{% endnote %}

### Errors and warnings

When you run MRVA, there are two key places where errors and warnings are displayed:

* {% data variables.product.prodname_vscode %} errors: any problems with creating a {% data variables.product.prodname_codeql %} pack and sending the analysis to {% data variables.product.prodname_dotcom_the_website %} are reported as {% data variables.product.prodname_vscode %} errors in the bottom right corner of the application. Information is also available in the "Problems" view.

* "Variant Analysis Results": any problems with the variant analysis run are reported in this view.

## Exploring your results

As soon as a workflow to run your variant analysis on {% data variables.product.company_short %} is running, a "Variant Analysis Results" view opens to display the results as they are ready. You can use this view to monitor progress, see any errors, and access the workflow logs in your controller repository.

![Screenshot of "Variant Analysis Results" showing a run for "FileAccessToHttp.ql". Blue circles show the number of results found or "-" still running.](/assets/images/help/security/codeql-for-vs-code-variant-analysis-results-view.png)

When your variant analysis run is scheduled, the "Results" view automatically opens. Initially, the view shows a list of every repository that was scheduled for analysis. As each repository is analyzed, the view is updated to show a summary of the number of results. To view the detailed results for a repository (including results paths), click the repository name.

For each repository, you can see:

* Number of results found by the query

* Visibility of the repository

* Whether analysis is still running or has finished

* Number of stars the repository has on {% data variables.product.company_short %}

### Seeing the results for a repository

1. Click the repository name to show a summary of each result.

1. Explore the information available for each result using links to the source files on {% data variables.product.prodname_dotcom_the_website %}. For data flow queries, there'll be an additional "Show paths" link.

    ![Screenshot of the "Variant Analysis Results" view, with blue links to GitHub source files. There is a "Show paths" link, highlighted in dark orange.](/assets/images/help/security/codeql-for-vs-code-variant-analysis-result.png)

### Exporting your results

You can export your results for further analysis or to discuss them with collaborators. In the "Results" view, click **Export results** to export the results to a secret gist on {% data variables.product.prodname_dotcom_the_website %} or to a Markdown file in your workspace.

## Selecting a single {% data variables.product.company_short %} repository or organization for analysis

1. In the "Variant Analysis Repositories" view, click **+** to add a new database.

1. From the dropdown menu, select **From a {% data variables.product.company_short %} repository** or **All repositories of {% data variables.product.company_short %} org or owner**.

1. Type the identifier of the repository or organization that you want to use into the field.

## Creating a custom list of repositories

{% note %}

**Note:** {% data variables.product.prodname_codeql %} analysis always requires a {% data variables.product.prodname_codeql %} database to run queries against. When you run variant analysis against a list of repositories, your query will only be executed against the repositories that currently have a {% data variables.product.prodname_codeql %} database available to download.  The best way to make a repository available for variant analysis is to enable {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}. For information about enabling {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#configuring-code-scanning-automatically)."

{% endnote %}

1. In the "Variant Analysis Repositories" view, click the "Add list" icon.

    ![Screenshot of the "Variant Analysis Results" view. The "add-list" icon is highlighted in dark orange.](/assets/images/help/security/codeql-for-vs-code-add-list.png)

1. Type a name for the new list and press **Enter**.

1. Select your list in the view, then click **+** to add a repository to your list.

### Managing your custom lists of repositories

You can manage and edit your custom lists by right-clicking on either the list name, or a repository name within the list, and selecting an option from the context menu.

The custom lists are stored in your workspace in a `databases.json` file. If you want to edit this file directly in {% data variables.product.prodname_vscode %}, you can open it by clicking **{ }** in the view header.

For example, if you want to continue analyzing a set of repositories that had results for your query, click **Copy repository list** in the "Variant Analysis Results" view to add a list of only the repositories that have results to the clipboard as JSON.

In the following example snippet, `my-organization/my-repository` had results for a query:

```json
{
    "name": "new-repo-list",
    "repositories": [
        "my-organization/my-repository"
    ]
}
```

You can then insert the `new-repo-list` of repositories into `databases.json`for easy access in the "Variant Analysis Repositories" view.

### Using {% data variables.product.company_short %} code search to add repositories to a custom list

{% note %}

**Note:** This feature uses the legacy code search via the {% data variables.product.company_short %} code search API. For more information on the syntax to use, see "[AUTOTITLE](/search-github/searching-on-github/searching-code)."

{% endnote %}

You can use code search directly in the {% data variables.product.prodname_codeql %} extension to add a subset of repositories from {% data variables.product.prodname_dotcom_the_website %} to a custom list.

For example, to add all repositories in the `rails` organization on {% data variables.product.company_short %}, search `org:rails`.

You can add a maximum of 1,000 repositories to a custom list per search.

1. In the "Variant Analysis Repositories" view, choose the list that you want to add repositories to. You can create a new list or choose an existing list that already contains repositories.

1. Right-click on the list you have chosen and then click **Add repositories with {% data variables.product.prodname_dotcom%} code search**.

1. In the pop-up that appears at the top of the application, under the search bar, select a language for your search from the choices in the dropdown.

1. In the search bar, type the search query that you want to use and press **Enter**.

You can view the progress of your search in the bottom right corner of the application in a box with the text `Searching for repositories...`. If you click **Cancel**, no repositories will be added to your list. Once complete, you will see the resulting repositories appear in the dropdown under your custom list in the Variant Analysis Repositories view.

Some of the resulting repositories will not have {% data variables.product.prodname_codeql %} databases and some may not allow access by the {% data variables.product.prodname_codeql %} extension for {% data variables.product.prodname_vscode %}. When you run an analysis on the list, the "Variant Analysis Results" view will show you which repositories were analyzed, which denied access, and which had no {% data variables.product.prodname_codeql %} database.
