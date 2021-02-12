{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
{% warning %}

**警告：** 匿名GistはWebブラウザーからは削除できません。 匿名Gistを削除するには、{% data variables.contact.contact_support %}に連絡してください。 削除したいGistのURLを提供してください。

{% endwarning %}
{% endif %}
