---
title: Creating gists
intro: 'You can create two kinds of gists: {% ifversion ghae %}internal{% else %}public{% endif %} and secret. Create {% ifversion ghae %}an internal{% else %}a public{% endif %} gist if you''re ready to share your ideas with {% ifversion ghae %}enterprise members{% else %}the world{% endif %} or a secret gist if you''re not.'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
  - /github/writing-on-github/creating-gists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---
## About gists

Every gist is a Git repository, which means that it can be forked and cloned. {% ifversion not ghae %}If you are signed in to {% data variables.product.product_name %} when{% else %}When{% endif %} you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your {% data variables.gists.gist_homepage %}.

Gists can be {% ifversion ghae %}internal{% else %}public{% endif %} or secret. {% ifversion ghae %}Internal{% else %}Public{% endif %} gists show up in {% data variables.gists.discover_url %}, where {% ifversion ghae %}enterprise members{% else %}people{% endif %} can browse new gists as they're created. They're also searchable, so you can use them if you'd like other people to find and see your work.

Secret gists don't show up in {% data variables.gists.discover_url %} and are not searchable. Secret gists aren't private. If you send the URL of a secret gist to {% ifversion ghae %}another enterprise member{% else %}a friend{% endif %}, they'll be able to see it. However, if {% ifversion ghae %}any other enterprise member{% else %}someone you don't know{% endif %} discovers the URL, they'll also be able to see your gist. If you need to keep your code away from prying eyes, you may want to [create a private repository](/articles/creating-a-new-repository) instead.

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% ifversion ghes %}

If your site administrator has disabled private mode, you can also use anonymous gists, which can be public or secret.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

You'll receive a notification when:
- You are the author of a gist.
- Someone mentions you in a gist.
- You subscribe to a gist, by clicking **Subscribe** at the top of any gist.

{% ifversion fpt or ghes %}

You can pin gists to your profile so other people can see them easily. For more information, see "[Pinning items to your profile](/articles/pinning-items-to-your-profile)."

{% endif %}

You can discover {% ifversion ghae %}internal{% else %}public{% endif %} gists others have created by going to the {% data variables.gists.gist_homepage %} and clicking **All Gists**. This will take you to a page of all gists sorted and displayed by time of creation or update. You can also search gists by language with {% data variables.gists.gist_search_url %}. Gist search uses the same search syntax as [code search](/articles/searching-code).

Since gists are Git repositories, you can view their full commit history, complete with diffs. You can also fork or clone gists. For more information, see ["Forking and cloning gists"](/articles/forking-and-cloning-gists).

You can download a ZIP file of a gist by clicking the **Download ZIP** button at the top of the gist. You can embed a gist in any text field that supports Javascript, such as a blog post. To get the embed code, click the clipboard icon next to the **Embed** URL of a gist. To embed a specific gist file, append the **Embed** URL with `?file=FILENAME`.

{% ifversion fpt %}

Gist supports mapping GeoJSON files. These maps are displayed in embedded gists, so you can easily share and embed maps. For more information, see "[Mapping GeoJSON files on {% data variables.product.product_name %}](/articles/mapping-geojson-files-on-github)."

{% endif %}

## Creating a gist

Follow the steps below to create a gist.

{% ifversion fpt or ghes or ghae %}
{% note %}

You can also create a gist using the {% data variables.product.prodname_cli %}. For more information, see "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" in the {% data variables.product.prodname_cli %} documentation.

Alternatively, you can drag and drop a text file from your desktop directly into the editor.

{% endnote %}
{% endif %}

1. Sign in to {% data variables.product.product_name %}.
2. Navigate to your {% data variables.gists.gist_homepage %}.
3. Type an optional description and name for your gist.
![Gist name description](/assets/images/help/gist/gist_name_description.png)

4. Type the text of your gist into the gist text box. 
![Gist text box](/assets/images/help/gist/gist_text_box.png)

5. Optionally, to create {% ifversion ghae %}an internal{% else %}a public{% endif %} gist, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, then click **Create {% ifversion ghae %}internal{% else %}public{% endif %} gist**. 
![Drop-down menu to select gist visibility]{% ifversion ghae %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Click **Create secret Gist** or **Create {% ifversion ghae %}internal{% else %}public{% endif %} gist**. 
  ![Button to create gist](/assets/images/help/gist/create-secret-gist-button.png)
