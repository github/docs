# Secret scanning

This secret scanning pipeline automates a table displayed on the [Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets) page.

Each day a workflow checks if the [data](src/secret-scanning/data/public-docs.yml) is up-to-date. When there are changes, the workflow automatically creates a pull request to update the `src/secret-scanning/data/public-docs.yml` file. The workflow runs `npm run sync-secret-scanning` to check for updates.

This pipeline uses middleware to check if the path of the URL matches the page that contains the table. The middleware decorates the context with the data, which is displayed on the page using a Markdown table and Liquid. For example:

```markdown
<!-- FPT version of table -->
{% ifversion fpt %}

| Provider | Token | Partner | User | Push protection
|----|:----|:----:|:----:|:----:|
{%- for entry in secretScanningData %}
| {{ entry.provider }} | {{ entry.secretType }} | {% if entry.isPublic %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.isPrivateWithGhas %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} | {% if entry.hasPushProtection %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Unsupported" %}{% endif %} |
{%- endfor %}
```
