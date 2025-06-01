This documentation repository consists mainly of content written in Markdown format. These files are converted into HTML for displaying on a website. Most Markdown files become a single article on the documentation site. Other files contain reusable content which is inserted into multiple articles. The repository also contains YAML files (e.g. for variable text), image files, JavaScript/TypeScript files, etc.

### Using variables

Within Markdown files, with the exception of the `title` field in the metadata at the start of a file, always use the Liquid syntax variables rather than text if a variable has been defined for that text. For example:

| Use this variable | Don't use this text | File where variable is defined |
| --- | --- | --- |
| `{% data variables.product.prodname_dotcom %}` | GitHub | data/variables/product.yml |
| `{% data variables.product.prodname_ghe_server %}` | GitHub Enterprise Server | data/variables/product.yml | 
| `{% data variables.product.prodname_copilot_short %}` | Copilot | data/variables/product.yml | 
| `{% data variables.product.prodname_copilot %}` | GitHub Copilot | data/variables/product.yml | 
| `{% data variables.copilot.copilot_code-review_short %}` | Copilot code review | data/variables/copilot.yml | 
| `{% data variables.enterprise.prodname_managed_user %}` | managed user account | data/variables/enterprise.yml | 
| `{% data variables.code-scanning.codeql_workflow %}` | CodeQL analysis workflow | data/variables/code-scanning.yml | 

There are many more variables. These are stored in various YAML files within the `data/variables` directory.
