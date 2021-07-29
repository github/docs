---
title: Syntax for issue forms
intro: 'You can define different input types, validations, default assignees, and default labels for your issue forms.'
product: 'Issue forms are available in beta for public repositories on {% data variables.product.prodname_dotcom_the_website %}'
versions:
  fpt: '*'
topics:
  - Community
---

{% data reusables.community.issue-forms-beta %}

## About YAML syntax for issue forms

You can create custom issue forms by adding a YAML form definition file to the `/.github/ISSUE_TEMPLATE` folder in your repository. {% data reusables.actions.learn-more-about-yaml %} You can define different input types, validations, default assignees, and default labels for your issue forms.

When a contributor fills out an issue form, their responses for each input are converted to markdown and added to the body of an issue. Contributors can edit their issues that were created with issue forms and other people can interact with the issues like an issue created through other methods.

This example YAML configuration file defines an issue form using several inputs to report a bug.

{% data reusables.community.issue-forms-sample %}

## Top-level syntax

All issue form configuration files must begin with `name`, `description`, and `body` key-value pairs.

```YAML{:copy}
name:
description:
body:
```

You can set the following top-level keys for each issue form.

| Key | Description | Required | Type |
| :-- | :-- | :-- | :-- | :-- |
| `name` | A name for the issue form template. Must be unique from all other templates, including Markdown templates. | Required | String |
| `description` | A description for the issue form template, which appears in the template chooser interface. | Required | String |
| `body` | Definition of the input types in the form. | Required | Array |
| `assignees` | People who will be automatically assigned to issues created with this template. | Optional | Array or comma-delimited string |
| `labels` | Labels that will automatically be added to issues created with this template. | Optional | String |
| `title` | A default title that will be pre-populated in the issue submission form. | Optional | String |

For the available `body` input types and their syntaxes, see "[Syntax for {% data variables.product.prodname_dotcom %}'s form schema](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)."

## Converting a Markdown issue template to a YAML issue form template

You can use both Markdown and YAML issue templates in your repository. If you want to convert a Markdown issue template to a YAML issue form template, you must create a new YAML file to define the issue form. You can manually transpose an existing Markdown issue template to a YAML issue form. For more information, see "[Configuring issue templates for your repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)."

If you want to use the same file name for your YAML issue form, you must delete the Markdown issue template when you commit the new file to your repository.

An example of a Markdown issue template and a corresponding YAML issue form template are below.

### Markdown issue template

```markdown{:copy}
---
name: 🐞 Bug
about: File a bug/issue
title: '[BUG] <title>'
labels: Bug, Needs Triage
assignees: ''

---

{% raw %}<{% endraw %}!--
Note: Please search to see if an issue already exists for the bug you encountered.
--{% raw %}>{% endraw %}

### Current Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you're experiencing. --{% raw %}>{% endraw %}

### Expected Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you expected to happen. --{% raw %}>{% endraw %}

### Steps To Reproduce:
{% raw %}<{% endraw %}!--
Example: steps to reproduce the behavior:
1. In this environment...
2. With this config...
3. Run '...'
4. See error...
--{% raw %}>{% endraw %}

### Environment:
{% raw %}<{% endraw %}!--
Example:
- OS: Ubuntu 20.04
- Node: 13.14.0
- npm: 7.6.3
--{% raw %}>{% endraw %}

### Anything else:
{% raw %}<{% endraw %}!--
Links? References? Anything that will give us more context about the issue that you are encountering!
--{% raw %}>{% endraw %}
```

### YAML issue form template

```yaml{:copy}
name: 🐞 Bug
description: File a bug/issue
title: "[BUG] <title>"
labels: [Bug, Needs Triage]
body:
- type: checkboxes
  attributes:
    label: Is there an existing issue for this?
    description: Please search to see if an issue already exists for the bug you encountered.
    options:
    - label: I have searched the existing issues
      required: true
- type: textarea
  attributes:
    label: Current Behavior
    description: A concise description of what you're experiencing.
  validations:
    required: false
- type: textarea
  attributes:
    label: Expected Behavior
    description: A concise description of what you expected to happen.
  validations:
    required: false
- type: textarea
  attributes:
    label: Steps To Reproduce
    description: Steps to reproduce the behavior.
    placeholder: |
      1. In this environment...
      2. With this config...
      3. Run '...'
      4. See error...
  validations:
    required: false
- type: textarea
  attributes:
    label: Environment
    description: |
      examples:
        - **OS**: Ubuntu 20.04
        - **Node**: 13.14.0
        - **npm**: 7.6.3
    value: |
        - OS: 
        - Node: 
        - npm: 
    render: markdown
  validations:
    required: false
- type: textarea
  attributes:
    label: Anything else?
    description: |
      Links? References? Anything that will give us more context about the issue you are encountering!
      
      Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
  validations:
    required: false
```

## Further reading

- [YAML](https://yaml.org/)
