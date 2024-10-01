---
title: Creating gists
intro: 'You can create two kinds of gists: public and secret. Create a public gist if you''re ready to share your ideas with the world or a secret gist if you''re not.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-gist %}'
redirect_from:
  - /articles/about-gists
  - /articles/cannot-delete-an-anonymous-gist
  - /articles/deleting-an-anonymous-gist
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
  - /github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---
## About gists

Gists provide a simple way to share code snippets with others. Every gist is a Git repository, which means that it can be forked and cloned. If you are signed in to {% data variables.product.product_name %} when you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your {% data variables.gists.gist_homepage %}.

Gists can be public or secret. Public gists show up in {% data variables.gists.discover_url %}, where people can browse new gists as they're created. They're also searchable, so you can use them if you'd like other people to find and see your work.

Secret gists don't show up in {% data variables.gists.discover_url %} and are not searchable unless you are logged in and are the author of the secret gist. Secret gists aren't private. If you send the URL of a secret gist to a friend, they'll be able to see it. However, if someone you don't know discovers the URL, they'll also be able to see your gist. If you need to keep your code away from prying eyes, you may want to [create a private repository](/repositories/creating-and-managing-repositories/creating-a-new-repository) instead.

{% data reusables.gist.cannot-convert-public-gists-to-secret %} However, a secret gist can be made public by editing the gist and updating the visibility to public.

{% ifversion ghes %}

If your site administrator has disabled private mode, you can also use anonymous gists, which can be public or secret.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

You'll receive a notification when:
* You are the author of a gist.
* Someone mentions you in a gist.
* You subscribe to a gist, by clicking **Subscribe** at the top of any gist.

You can pin gists to your profile so other people can see them easily. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile)."

You can discover public gists others have created by going to the {% data variables.gists.gist_homepage %} and clicking **All Gists**. This will take you to a page of all gists sorted and displayed by time of creation or update. You can also search gists by language with {% data variables.gists.gist_search_url %}. {% ifversion ghes %}Gist search uses the same search syntax as [code search](/search-github/searching-on-github/searching-code).{% endif %}

Since gists are Git repositories, you can view their full commit history, complete with diffs. You can also fork or clone gists. For more information, see "[AUTOTITLE](/get-started/writing-on-github/editing-and-sharing-content-with-gists/forking-and-cloning-gists)."

You can download a ZIP file of a gist by clicking the **Download ZIP** button at the top of the gist. You can embed a gist in any text field that supports JavaScript, such as a blog post. To get the embed code, click the clipboard icon next to the **Embed** URL of a gist. To embed a specific gist file, append the **Embed** URL with `?file=FILENAME`.

{% ifversion fpt or ghec %}

Gist supports mapping GeoJSON files. These maps are displayed in embedded gists, so you can easily share and embed maps. For more information, see "[AUTOTITLE](/repositories/working-with-files/using-files/working-with-non-code-files#mapping-geojson-files-on-github)."

{% endif %}

## Creating a gist

Follow the steps below to create a gist.

{% note %}

You can also create a gist using the {% data variables.product.prodname_cli %}. For more information, see "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" in the {% data variables.product.prodname_cli %} documentation.

Alternatively, you can drag and drop a text file from your desktop directly into the editor.

{% endnote %}

1. Sign in to {% data variables.product.product_name %}.
1. Navigate to your {% data variables.gists.gist_homepage %}.
1. Optionally, in the "Gist description" field, type a description for your gist.
1. In the "Filename including extension" field, type a file name for your gist, including the file extensions.
1. In the file contents field, type the text of your gist.
1. Optionally, to create a public gist, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, then click **Create public gist**.

   ![Screenshot of the visibility dropdown menu for a new gist. Next to a button labeled "Create secret gist", a dropdown icon is outlined in dark orange.](/assets/images/help/gist/gist-visibility-drop-down.png)
1. Click **Create secret Gist** or **Create public gist**.
