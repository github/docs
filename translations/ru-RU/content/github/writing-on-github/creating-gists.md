---
title: Creating gists
intro: 'You can create two kinds of gists: public and secret. Create a public gist if you''re ready to share your ideas with the world or a secret gist if you''re not.'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About gists

Every gist is a Git repository, which means that it can be forked and cloned. If you are signed in to {% data variables.product.product_name %} when you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your {% data variables.gists.gist_homepage %}.

Gists can be public or secret. Public gists show up in {% data variables.gists.discover_url %}, where people can browse new gists as they're created. They're also searchable, so you can use them if you'd like other people to find and see your work. {% data reusables.gist.cannot-convert-public-gists-to-secret %}

Secret gists don't show up in {% data variables.gists.discover_url %} and are not searchable. {% data reusables.gist.cannot-convert-public-gists-to-secret %} Secret gists aren't private. If you send the URL of a secret gist to a friend, they'll be able to see it. However, if someone you don't know discovers the URL, they'll also be able to see your gist. If you need to keep your code away from prying eyes, you may want to [create a private repository](/articles/creating-a-new-repository) instead.

{% if enterpriseServerVersions contains currentVersion %}

If your site administrator has disabled private mode, you can also use anonymous gists, which can be public or secret.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

You'll receive a notification when:
- You are the author of a gist.
- Someone mentions you in a gist.
- You subscribe to a gist, by clicking **Subscribe** at the top any gist.

You can pin gists to your profile so other people can see them easily. For more information, see "[Pinning items to your profile](/articles/pinning-items-to-your-profile)."

You can discover gists others have created by going to the {% data variables.gists.gist_homepage %} and clicking **All Gists**. This will take you to a page of all gists sorted and displayed by time of creation or update. You can also search gists by language with {% data variables.gists.gist_search_url %}. Gist search uses the same search syntax as [code search](/articles/searching-code).

Since gists are Git repositories, you can view their full commit history, complete with diffs. You can also fork or clone gists. For more information, see ["Forking and cloning gists"](/articles/forking-and-cloning-gists).

You can download a ZIP file of a gist by clicking the **Download ZIP** button at the top of the gist. You can embed a gist in any text field that supports Javascript, such as a blog post. To get the embed code, click the clipboard icon next to the **Embed** URL of a gist. To embed a specific gist file, append the **Embed** URL with `?file=FILENAME`.

{% if currentVersion == "free-pro-team@latest" %}

Gist supports mapping GeoJSON files. These maps are displayed in embedded gists, so you can easily share and embed maps. For more information, see "[Mapping GeoJSON files on {% data variables.product.product_name %}](/articles/mapping-geojson-files-on-github)."

{% endif %}

### Creating a gist

You can also drag and drop a text file from your desktop directly into the gist editor.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% note %}

You can also create a gist using the {% data variables.product.prodname_cli %}. For more information, see "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endnote %}
{% endif %}

1. Sign in to {% data variables.product.product_name %}.
2. Navigate to your {% data variables.gists.gist_homepage %}.
3. Type an optional description and name for your gist. ![Gist name description](/assets/images/help/gist/gist_name_description.png)

4. Type the text of your gist into the gist text box. ![Gist text box](/assets/images/help/gist/gist_text_box.png)

5. Do one of the following:
    - To create a public gist, click **Create public gist**.
    - To create a secret gist, click **Create secret Gist**. ![Gist create button](/assets/images/help/gist/gist_create_btn.png)

  {% note %}

  **Note:** {% data reusables.gist.cannot-convert-public-gists-to-secret %}

  {% endnote %}
