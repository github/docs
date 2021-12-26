{% ifversion fpt %}
{% note %}

**Note:**  Workflow runs triggered by {% data variables.product.prodname_dependabot %} pull requests run as if they are from a forked repository, and therefore use a read-only `GITHUB_TOKEN`. These workflow runs cannot access any secrets. See ["Keeping your GitHub Actions and workflows secure: Preventing pwn requests"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests) for strategies to keep these workflows secure.

{% endnote %}
{% endif %}
