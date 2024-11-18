---
title: Customizing your repository's social media preview
intro: You can customize the image displayed on social media platforms when someone links to your repository.
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/managing-repository-settings/customizing-your-repositorys-social-media-preview
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Social media preview
---
Until you add an image, repository links expand to show basic information about the repository and the owner's avatar. Adding an image to your repository can help identify your project across various social platforms.

## Adding an image to customize the social media preview of your repository

{% ifversion repo-rules %}You can upload an image to a public repository, or to a private repository to which you have previously uploaded an image. Your image can only be shared from a public repository.{% else %}You can upload an image to a private repository, but your image can only be shared from a public repository.{% endif %}

{% tip %}

**Tip:** Your image should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend a size of at least 640 by 320 pixels (1280 by 640 pixels for best display).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Social preview", click **Edit**.
    * To add a new image, click **Upload an image...**.
    * To remove an image, click **Remove image**.

    ![Screenshot of the "Social Preview" section. The "Edit" button is highlighted with an orange outline, and a dropdown displays the options for uploading or removing an image.](/assets/images/help/repository/social-preview.png)

## About transparency

We support PNG images with transparency. Many communication platforms support a dark mode, so using a transparent social preview may be beneficial.

When using an image with transparency, keep in mind how it may look on different color backgrounds or platforms that don't support transparency.

{% tip %}

**Tip:** If you aren't sure, we recommend using an image with a solid background.
{% endtip %}
