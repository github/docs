When viewing a Markdown file, you can click {% ifversion code-view-ui %}**Code**{% else %}{% octicon "code" aria-label="The code icon" %}{% endif %} at the top of the file to disable Markdown rendering and view the file's source instead.

{% ifversion code-view-ui %}

  ![Screenshot of a Markdown file in a {% data variables.product.prodname_dotcom %} repository showing options for interacting with the file. A button, labeled "Code", is outlined in dark orange.](/assets/images/help/writing/display-markdown-as-source-global-nav-update.png)

{% else %}

  ![Screenshot of a Markdown file in a {% data variables.product.prodname_dotcom %} repository showing options for interacting with the file. The button to display the source blob is outlined in dark orange.](/assets/images/help/writing/display-markdown-as-source.png)

{% endif %}

Disabling Markdown rendering enables you to use source view features, such as line linking, which is not possible when viewing rendered Markdown files.
