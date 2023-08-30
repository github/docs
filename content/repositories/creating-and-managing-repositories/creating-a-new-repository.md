---
title: Creating a new repository
intro: You can create a new repository on your personal account or any organization where you have sufficient permissions.
redirect_from:
  - /creating-a-repo
  - /articles/creating-a-repository-in-an-organization
  - /articles/creating-a-new-organization-repository
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
{% tip %}

**Tip:** Owners can restrict repository creation permissions in an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)."

{% endtip %}

{% tip %}

**Tip**: You can also create a repository using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

{% ifversion create-new-repos-with-query-params %}

## Creating a new repository from the web UI

{% endif %}

{% data reusables.repositories.create_new %}
1. Optionally, to create a repository with the directory structure and files of an existing repository, select the **Choose a template** dropdown menu and click a template repository. You'll see template repositories that are owned by you and organizations you're a member of or that you've used before. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)."
1. Optionally, if you chose to use a template, to include the directory structure and files from all branches in the template, and not just the default branch, select **Include all branches**.
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
1. If you're not using a template, there are a number of optional items you can pre-populate your repository with. If you're importing an existing repository to {% data variables.product.product_name %}, don't choose any of these options, as you may introduce a merge conflict. You can add or create new files using the user interface or choose to add new files using the command line later. For more information, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)," "[AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)," and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)."
    - You can create a README, which is a document describing your project. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."
    - You can create a _.gitignore_ file, which is a set of ignore rules. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/ignoring-files)."{% ifversion fpt or ghec %}
    - You can choose to add a software license for your project. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."{% endif %}
{% data reusables.repositories.select-marketplace-apps %}
{% data reusables.repositories.create-repo %}
{% ifversion fpt or ghec %}
1. At the bottom of the resulting Quick Setup page, under "Import code from an old repository", you can choose to import a project to your new repository. To do so, click **Import code**.
{% endif %}

{% ifversion create-new-repos-with-query-params %}

## Creating a new repository from a URL query

You can use query parameters to pre-fill form fields when creating a new repository. Query parameters are optional parts of a URL you can customize to share a specific web page view, such as search filter results or an issue template on {% data variables.product.prodname_dotcom %}. To specify values for the predefined query parameters, you must match the key and value pair.

Pre-filling form fields with a URL query may be useful if you often want to create repositories with the same default settings. For example, a teacher may want each student in a class to create a repository in their personal account with the same name, description and visibility. Using a URL query, the teacher can create a link that pre-fills the repository name, description and visibility fields and share it with the whole class.

You must have the proper permissions for any action to use the equivalent query parameter. For example, you must have permission to create a repository in an organization to specify the organization as the repository owner in a query parameter. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the invalid query parameters will be ignored and the rest of the URL will function as normal. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

Query parameter | Example | Valid values
---  | --- | ---
`name` | `https://{% data variables.product.product_url %}/new?name=test-repo&owner=avocado-corp` creates a repository called "test-repo" owned by the "avocado-corp" organization. | Any valid repository name. Spaces must be replaced with `+` or `%20`.
`description` | `https://{% data variables.product.product_url %}/new?description=An+exciting+repository&visibility=private&owner=octocat` creates a repo with the description "An exciting repository" with private visibility owned by @octocat. | Any string. Spaces must be replaced with `+` or `%20`.
`visibility` | `https://{% data variables.product.product_url %}/new?visibility=private` creates a repository with private visibility. | `public`<br> `private`<br>{% ifversion not fpt %}`internal`{% endif %}
`owner` | `https://{% data variables.product.product_url %}/new?owner=avocado-corp&visibility=public` creates a public repository owned by the "avocado-corp" organization. | Any valid organization name or username. Alternatively, while signed in use `@me` to specify your user account as the owner.
`template_owner` and `template_name` | `https://{% data variables.product.product_url %}/new?owner=avocado-corp&template_owner=avocado-corp&template_name=octo-repo` creates a repository owned by the "avocado-corp" using the avocado-corp's template "octo-repo". | The username of the template owner and the name of the repository template.
{% endif %}

## Further reading

- "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories)"
- [Open Source Guides](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
