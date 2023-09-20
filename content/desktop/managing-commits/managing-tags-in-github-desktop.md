---
title: Managing tags in GitHub Desktop
shortTitle: Managing tags
intro: 'You can use {% data variables.product.prodname_desktop %} to create, push, and view tags.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags-in-github-desktop
versions:
  feature: desktop
---
## About tags in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} allows you to create annotated tags. Tags are associated with commits, so you can use a tag to mark an individual point in your repository's history, including a version number for a release. For more information about release tags, see "[AUTOTITLE](/repositories/releasing-projects-on-github/about-releases)."

{% data reusables.desktop.tags-push-with-commits %}

## Creating a tag

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.create-tag %}
{% data reusables.desktop.name-tag %}
{% data reusables.desktop.confirm-tag %}

## Viewing tags

{% data reusables.desktop.history-tab %}
1. Click the commit.
   {% note %}

   **Note**: {% data variables.product.prodname_desktop %} displays an arrow {% octicon "arrow-up" aria-label="The up arrow icon" %} if the tag has not been pushed to the remote repository.

   {% endnote %}

   ![Screenshot of a list of commits in the "History" tab. Next to a commit, a "hello-tag" label and an "up arrow" icon are outlined in orange.](/assets/images/help/desktop/viewing-tags-in-history.png)

1. All tags associated with the commit are visible in that commit's metadata.

   ![Screenshot of the detailed view of a commit. Above the commit's diff, in the commit's metadata, a tag icon and the label "hello-tag" are outlined in orange.](/assets/images/help/desktop/viewing-tags-in-commit.png)

## Deleting tags

{% note %}

**Note**: You can only delete tags associated with commits that have not yet been pushed.

{% endnote %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.delete-tag %}

## Further reading

- "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation
