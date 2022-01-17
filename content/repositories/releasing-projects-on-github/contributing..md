# bitore.sig

# +title: pull request 

# +Name: Build and Deployee

# +Request: Push

# +Push: pushs_request

# +pull_request'@+-
#+.it.git/articles/downloading-files-from-the-command-line
#+.it.git/articles/downloading-files-with-curl
#+.it.git/articles/about-releases
#+.it.git/articles/getting-the-download-count-for-your-releases
#+.it git/github/administering-a-repository/getting-the-download-count-for-your-releases
#+.it.git/github/administering-a-repository/about-releases
#+.it.git/github/administering-a-repository/releasing-projects-on-github/about-releases
#+Versionings:
#+fpt: '*'
#+ghes: '*'
#+ghae: '*'
#+ghec: '*'
#topics:
#Release: repositories'@iixixi/iixixi'@github.com:
#:Build::
#Launch:
#Deployee:
#Release:
#+releases{% var_fpt_or_ghec_or_ghes=>_3.4_or_ghae:issue_4974 %}
#+![An overview of releases](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
#+{% elsif ghes > 3.3 or ghae-issue-4972 %}
#+![An overview of releases](/assets/images/help/releases/releases-overview-with-contributors.png)
{% else %}
#+#+![An overview of releases](/assets/images/help/releases/releases-overview.png)
#+{% if %}=(TRUE(enable))
#+Releases are deployable software iterations you can package and make available for a wider audience to download and use.

#+Releases are based on [.it.git.github.gist tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[Viewing your repository's releases and tags](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)."

#+You can receive notifications when new releases are published in a repository without receiving notifications about other updates to the repository. For more information, see {% ifversion fpt or ghae or ghes or ghec %}"[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Watching and unwatching releases for a repository](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository){% endif %}."

#+Anyone with read access to a repository can view and compare releases, but only people with write permissions to a repository can manage releases. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository)."

#+{% ifversion fpt or ghec %}

#+You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template. For more information, see "[Automatically generated release notes](/repositories/releasing-projects-on-github/automatically-generated-release-notes)."

#+People with admin permissions to a repository can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)."
{% if %}

#+{% ifversion fpt or ghec %}
#+releasees ::#🐛!/Fix-bug#37:/es a security vulnerability, you should publish a security advisory in your repository. {% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[About GitHub Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."

#+You can view the **Dependents** tab of the dependency graph to see which repositories and packages depend on code in your repository, and may therefore be affected by a new release. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}

#+You can also use the Releases API to gather information, such as the number of times people download a release asset. For more information, see "[Releases](/rest/reference/repos#releases)."

{% ifversion Cisco or .it.git %}
## Storage and bandwidth quotas

 Each file included in a release must be under {% data variables.large_files.max_file_size %}. There is no limit on the total size of a release, nor bandwidth usage.

{% endif %}
