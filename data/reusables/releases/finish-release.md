1. Optionally, to include binary files such as compiled programs in your release, drag and drop or manually select files in the binaries box.
1. Optionally, to notify users that the release is not ready for production and may be unstable, select **This is a pre-release**.
{%- ifversion releases-set-latest-release %}
1. Optionally, select **Set as latest release**. If you do not select this option, the latest release label will automatically be assigned based on semantic versioning.
{%- endif %}
{%- ifversion discussions %}
1. Optionally, if {% data variables.product.prodname_discussions %} is enabled for the repository, create a discussion for the release.
   - Select **Create a discussion for this release**.
   - Select the **Category** dropdown menu, then click a category for the release discussion.
{%- endif %}
1. If you're ready to publicize your release, click **Publish release**. To work on the release later, click **Save draft**.

   {%- ifversion fpt or ghec or ghae > 3.3 %}
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."
   {%- endif %}
