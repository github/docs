---
title: Customizing your repository's social media preview
intro: You can customize the image displayed on social media platforms when someone links to your repository.
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Until you add an image, repository links expand to show basic information about the repository and the owner's avatar. Adding an image to your repository can help identify your project across various social platforms.

{% if currentVersion != "github-ae@latest" %}You can upload an image to a private repository, but your image can only be shared from a public repository.{% endif %}

{% tip %}
Tip: Your image should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend keeping the image at 640 by 320 pixels.
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Social preview," click **Edit**
    - To add a new image, click **Upload an image...**.
    - To remove an image, click **Remove image**

    ![Social preview dropdown](/assets/images/help/repository/social-preview.png)
