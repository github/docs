---
title: Backing up a repository
intro: 'You can use{% ifversion ghes or ghae %} Git and{% endif %} the API {% ifversion fpt or ghec %}or a third-party tool {% endif %}to back up your repository.'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
{% ifversion fpt or ghec %}

To download an archive of your repository, you can use the API for user or organization migrations. For more information, see "[AUTOTITLE](/rest/migrations)."
{% else %}

You can download and back up your repositories manually:

- To download a repository's Git data to your local machine, you'll need to clone the repository. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)."
- You can also download your repository's wiki. For more information, see "[AUTOTITLE](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)."

When you clone a repository or wiki, only Git data, such as project files and commit history, is downloaded. You can use our API to export other elements of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} to your local machine:

- [Issues](/rest/issues#list-issues-for-a-repository)
- [Pull requests](/rest/pulls#list-pull-requests)
- [Forks](/rest/repos#list-forks)
- [Comments](/rest/issues#list-issue-comments-for-a-repository)
- [Milestones](/rest/issues#list-milestones)
- [Labels](/rest/issues#list-labels-for-a-repository)
- [Watchers](/rest/activity#list-watchers)
- [Stargazers](/rest/activity#list-stargazers)
- [Projects](/rest/projects#list-repository-projects)
{% endif %}

Once you have {% ifversion ghes or ghae %}a local version of all the content you want to back up, you can create a zip archive and {% else %}downloaded your archive, you can {% endif %}copy it to an external hard drive and/or upload it to a cloud-based backup or storage service such as [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) or [Dropbox](https://www.dropbox.com/dropbox).

{% ifversion fpt or ghec %}

## Third-party backup tools

A number of self-service tools exist that automate backups of repositories. Unlike archival projects, which archive _all_ public repositories on {% data variables.product.product_name %} that have not opted out and make the data accessible to anyone, backup tools will download data from _specific_ repositories and organize it within a new branch or directory. For more information about archival projects, see "[AUTOTITLE](/repositories/archiving-a-github-repository/about-archiving-content-and-data-on-github#about-the-github-archive-program)." For more information about self-service backup tools, see the [Backup Utilities category on {% data variables.product.prodname_marketplace %}](https://github.com/marketplace?category=backup-utilities).
{% endif %}
