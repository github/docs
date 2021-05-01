---
title: Backing up a repository
intro: 'You can use{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Git and{% endif %} the API {% if currentVersion == "free-pro-team@latest" %}or a third-party tool {% endif %}to back up your repository.'
redirect_from:
  - /articles/backing-up-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% if currentVersion == "free-pro-team@latest" %}

To download an archive of your repository, you can use the API for user or organization migrations. For more information, see "[Migrations](/rest/reference/migrations)."
{% else %}

You can download and back up your repositories manually:

- To download a repository's Git data to your local machine, you'll need to clone the repository. For more information, see "[Cloning a repository](/articles/cloning-a-repository)."
- You can also download your repository's wiki. For more information, see "[Adding or editing wiki pages](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)."

When you clone a repository or wiki, only Git data, such as project files and commit history, is downloaded. You can use our API to export other elements of your {% data variables.product.product_name %} repository to your local machine:

- [Issues](/rest/reference/issues#list-issues-for-a-repository)
- [Pull requests](/rest/reference/pulls#list-pull-requests)
- [Forks](/rest/reference/repos#list-forks)
- [Comments](/rest/reference/issues#list-issue-comments-for-a-repository)
- [Milestones](/rest/reference/issues#list-milestones)
- [Labels](/rest/reference/issues#list-labels-for-a-repository)
- [Watchers](/rest/reference/activity#list-watchers)
- [Stargazers](/rest/reference/activity#list-stargazers)
- [Projects](/rest/reference/projects#list-repository-projects)
{% endif %}

Once you have {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}a local version of all the content you want to back up, you can create a zip archive and {% else %}downloaded your archive, you can {% endif %}copy it to an external hard drive and/or upload it to a cloud-based backup service such as [Google Drive](https://www.google.com/drive/) or [Dropbox](https://www.dropbox.com/).

{% if currentVersion == "free-pro-team@latest" %}
### Third-party backup tools

A number of self-service tools exist that automate backups of repositories. Unlike archival projects, which archive _all_ public repositories on {% data variables.product.product_name %} that have not opted out and make the data accessible to anyone, backup tools will download data from _specific_ repositories and organize it within a new branch or directory. For more information about archival projects, see "[About archiving content and data on {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)." For more information about self-service backup tools, see the [Backup Utilities category on {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
