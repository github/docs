---
title: About releases
intro: 'You can create a release to package software, along with release notes and links to binary files, for other people to use.'
redirect_from:
  - /articles/downloading-files-from-the-command-line/
  - /articles/downloading-files-with-curl/
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About releases

![An overview of releases](/assets/images/help/releases/releases-overview.png)

Releases are deployable software iterations you can package and make available for a wider audience to download and use.

Releases are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[Viewing your repository's releases and tags](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)."

You can receive notifications when new releases are published in a repository without receiving notifications about other updates to the repository. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Watching and unwatching releases for a repository](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository){% endif %}."

Anyone with read access to a repository can view and compare releases, but only people with write permissions to a repository can manage releases. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
People with admin permissions to a repository can choose whether
{% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
If a release fixes a security vulnerability, you should publish a security advisory in your repository.
{% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[About GitHub Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."

You can view the **Dependents** tab of the dependency graph to see which repositories and packages depend on code in your repository, and may therefore be affected by a new release. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}

You can also use the Releases API to gather information, such as the number of times people download a release asset. For more information, see "[Releases](/v3/repos/releases/)."

{% if currentVersion == "free-pro-team@latest" %}
### Storage and bandwidth quotas

 Each file included in a release must be under {% data variables.large_files.max_file_size %}. There is no limit on the total size of a release, nor bandwidth usage.

{% endif %}
