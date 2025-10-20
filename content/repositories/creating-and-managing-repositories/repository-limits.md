---
title: Repository limits
intro: 'Learn about limitations for repositories.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
---

Certain types of repository resources can be quite large, requiring excessive processing on {% data variables.product.github %}. Because of this, limits are set to ensure requests complete in a reasonable amount of time. Exceeding the recommended maximum limit increases the risk of degraded repository health, which includes, but is not limited to, slow response times for basic Git operations and UI latency.

>[!NOTE] While following these guidelines can improve repository stability, it does not guarantee supportability, as other factors may lead to unexpected behavior.

Most of the limits below affect both {% data variables.product.github %} and the API.

## Repository size

To ensure optimal performance and manageability, we recommend staying within the following maximum limits for repository structure and size.

* **On-disk size**: 10 GB

  On-disk size refers to the size of the `.git` folder (the compressed form of the repository). Large repositories can slow down fetch operations and increase clone times for developers and CI. To manage repository size:

  * Use {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) for binary files.
  * Store programmatically generated files outside of Git, such as in object storage.

* **Directory width (number of entries in a single directory)**: 3,000

  Directories containing numerous frequently modified files can significantly increase repository maintenance costs and degrade the performance of basic Git operations. Segmenting files into a shallow directory structure will reduce the size of these trees and result in less new data created.

* **Directory depth**: 50

  Deep directory trees can make history-walking operations slower.

* **Number of branches**: 5,000

  Large numbers of branches can result in unnecessary data in fetch operations, leading to slow transfer times or in extreme cases throttled repository performance.

## Activity

To avoid throttling and performance issues, we recommend staying within the following operational limits.

* **Push size**: This limit is enforced at 2GB.
* **Single object size**:

  The recommended maximum limit is 1MB. This is enforced at 100MB. To track large files in a Git repository, we recommend using {% data variables.large_files.product_name_short %}. See [AUTOTITLE](/repositories/working-with-files/managing-large-files/about-git-large-file-storage).

* **Git read operations (e.g. fetches, clones)**:

  The recommended maximum limit is 15 operations per second per repository. Large amounts of read operations can result in throttled performance for a repository. Automated processes such as CI, machine users, or third-party applications, can degrade a repository's performance in some cases. Consider optimizing your CI's clone strategy and/or using a repository cache server. Note that shallow clones will impose less cost and burden on the server than full clones and therefore may perform better.

* **Push rate**: The recommended maximum limit is 6 pushes per minute per repository.

## Text limits

{% data variables.product.prodname_dotcom %} displays formatted previews of some files, such as Markdown and Mermaid diagrams. {% data variables.product.prodname_dotcom %} always attempts to render these previews if the files are small (generally less than 2 MB), but more complex files may time out and either fall back to plain text or not be displayed at all. These files are always available in their raw formats, which are served through `{% data variables.product.raw_github_com %}`; for example, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/main/index.html`. Click the **Raw** button to get the raw URL for a file.

## Pull requests limits

To reduce delays and performance issues in repositories with high pull request activity, we recommend staying within the following limits.

* **Open pull requests (against the same branch)**: 1,000

  Having many open pull requests targeting the same branch can slow down mergeability checks or lead to timeouts. If you're using a merge queue, consider disabling the "require this branch to be up to date before merging" setting. This limits mergeability checks to only the pull requests in the queue.

* **Pull request merge rate**: 1 merged pull request per minute

  Each merge triggers mergeability checks for all open pull requests, which can cause performance bottlenecks—especially in busy repositories. This can also lead to a race-to-merge situation that impacts developer productivity. To reduce load, disable the "require this branch to be up to date before merging" setting when using a merge queue.

## Diff limits

Because diffs can become very large, we impose these limits on diffs for commits, pull requests, and compare views:

* In a pull request, no total diff may exceed _20,000 lines that you can load_ or _1 MB_ of raw diff data.
* No single file's diff may exceed _20,000 lines that you can load_ or _500 KB_ of raw diff data. _Four hundred lines_ and _20 KB_ are automatically loaded for a single file.
* The maximum number of files in a single diff is limited to _300_.
* The maximum number of renderable files (such as images, PDFs, and GeoJSON files) in a single diff is limited to _25_.

Some portions of a limited diff may be displayed, but anything exceeding the limit is not shown.

## Commit listings limits

The compare view and pull requests pages display a list of commits between the `base` and `head` revisions. These lists are limited to **250** commits. If they exceed that limit, a note indicates that additional commits are present (but they're not shown).

The maximum count of commits displayed on the Commits tab is **10,000**. Use other tools such as `git rev-list --count mybranch` to count and enumerate a high volume of commits when needed.

{% ifversion fpt or ghec or ghes > 3.16 %}

## Rebase limits

Merging a pull request using the "Rebase and merge" option is limited to **100** commits.  If you have a pull request with more than 100 commits, you need to create a merge commit, squash and merge, or split the commits up into multiple pull requests.

{% endif %}

## Organization and account limits

Organizations and accounts may not exceed **100,000** repositories. When an account surpasses **50,000** repositories, a banner will appear, noting the approaching limit. Additionally, administrators will receive email notifications, and the audit log will update every additional 5,000 repositories created. See [AUTOTITLE](/repositories/creating-and-managing-repositories/about-repositories#about-repository-ownership).

## Integrations and {% data variables.product.prodname_github_apps %}

When building an integration on {% data variables.product.github %}, store user-generated data in their own {% data variables.product.github %} accounts rather than centralizing it in your account. This ensures users retain full control over their work and helps you avoid exceeding repository limits.
