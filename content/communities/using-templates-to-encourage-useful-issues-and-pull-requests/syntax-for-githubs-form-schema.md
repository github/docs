---
title: Syntax for GitHub's form schema
intro: 'You can use {% data variables.product.company_short %}''s form schema to configure forms for supported features.'
versions:
  fpt: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
---

{% note %}

**Note:** {% data variables.product.company_short %}'s form schema is currently in beta and subject to change.

{% endnote %}

## About {% data variables.product.company_short %}'s form schema

You can use {% data variables.product.company_short %}'s form schema to configure forms for supported features. For more information, see "[Configuring issue templates for your repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)."

A form is a set of elements for requesting user input. You can configure a form by creating a YAML form definition, which is an array of form elements. Each form element is a set of key-value pairs that determine the type of the element, the properties of the element, and the constraints you want to apply to the element. For some keys, the value is another set of key-value pairs.

For example, the following form definition includes four form elements: a text area for providing the user's operating system, a dropdown menu for choosing the software version the user is running, a checkbox to acknowledge the Code of Conduct, and Markdown that thanks the user for completing the form.

```yaml{:copy}
- type: textarea
  attributes:
    label: Operating System
    description: What operating system are you using?
    placeholder: Example: macOS Big Sur
    value: operating system
  validations:
    required: true
- type: dropdown
  attributes:
    label: Version
    description: What version of our software are you running?
    multiple: false
    options:
      - label: 1.0.2 (Default)
      - label: 1.0.3 (Edge)
  validations:
    required: true
- type: checkboxes
  attributes:
    label: Code of Conduct
    description: The Code of Conduct helps create a safe space for everyone. We require
      that everyone agrees to it.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## Keys

For each form element, you can set the following keys.

| Key | Description | Required | Type | Default | Valid values |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `type` | The type of element that you want to define. | Required | String | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul> |
| `attributes` | A set of key-value pairs that define the properties of the element.  | Required | Hash | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `validations` | A set of key-value pairs that set constraints on the element. | Optional | Hash | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

You can choose from the following types of form elements. Each type has unique attributes and validations.

| Type | Description |
| ---- | ----------- |
| [`markdown`](#markdown) | Markdown text that is displayed in the form to provide extra context to the user, but is **not submitted**. |
| [`textarea`](#textarea) | A multi-line text field. |
| [`input`](#input) | A single-line text field. |
| [`dropdown`](#dropdown) | A dropdown menu. |
| [`checkboxes`](#checkboxes) | A set of checkboxes. |

### `markdown`

You can use a `markdown` element to display Markdown in your form that provides extra context to the user, but is not submitted.

#### Attributes

{% data reusables.form-schema.attributes-intro %}

| Key | Description | Required | Type | Default | Valid values |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `value` | The text that is rendered. Markdown formatting is supported. | Required | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% tip %}

**Tips:** YAML processing will treat the hash symbol as a comment. To insert Markdown headers, wrap your text in quotes.

For multi-line text, you can use the pipe operator.

{% endtip %}

#### Example

```YAML{:copy}
body:
- type: markdown
  value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

You can use a `textarea` element to add a multi-line text field to your form. Contributors can also attach files in `textarea` fields.

#### Attributes

{% data reusables.form-schema.attributes-intro %}

| Key | Description | Required | Type | Default | Valid values |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | A brief description of the expected user input, which is also displayed in the form. | Required | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | A description of the text area to provide context or guidance, which is displayed in the form. | Optional | String | Empty String | {% octicon "dash" aria-label="The dash icon" %} |
| `id` | The identifier for the text area. {% data reusables.form-schema.id-must-be-unique %} If provided, the `id` is the canonical identifier for the field in URL query parameter prefills. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | A semi-opaque placeholder that renders in the text area when empty. | Optional | String | Empty String | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Text that is pre-filled in the text area. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `render` | If a value is provided, submitted text will be formatted into a codeblock. When this key is provided, the text area will not expand for file attachments or Markdown editing. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | Languages known to {% data variables.product.prodname_dotcom %}. For more information, see [the languages YAML file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). |

#### Validations

{% data reusables.form-schema.validations-intro %}

| Key | Description | Required | Type | Default | Valid values |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Example

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `input`

You can use an `input` element to add a single-line text field to your form.

#### Attributes

{% data reusables.form-schema.attributes-intro %}

| Key | Description | Required | Type | Default | Valid values |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | A brief description of the expected user input, which is also displayed in the form. | Required | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `id` | The identifier for the input. {% data reusables.form-schema.id-must-be-unique %} If provided, the `id` is the canonical identifier for the field in URL query parameter prefills. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | A description of the field to provide context or guidance, which is displayed in the form. | Optional | String | Empty String | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | A semi-transparent placeholder that renders in the field when empty. | Optional | String | Empty String | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Text that is pre-filled in the field. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Validations

{% data reusables.form-schema.validations-intro %}

| Key | Description | Required | Type | Default | Valid values |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Example

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the user account page (1-2 times a week)"
  validations:
    required: true
```

### `dropdown`

You can use a `dropdown` element to add a dropdown menu in your form.

#### Attributes

{% data reusables.form-schema.attributes-intro %}

| Key | Description | Required | Type | Default | Valid values |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | A brief description of the expected user input, which is displayed in the form. | Required | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `id` | The identifier for the dropdown. {% data reusables.form-schema.id-must-be-unique %} | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | A description of the dropdown to provide extra context or guidance, which is displayed in the form. | Optional | String | Empty String | {% octicon "dash" aria-label="The dash icon" %} |
| `multiple` | Determines if the user can select more than one option. | Optional | Boolean | false | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | An array of options the user can choose from. Cannot be empty and all choices must be distinct. | Required | String array | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Validations

{% data reusables.form-schema.validations-intro %}

| Key | Description | Required | Type | Default | Valid values |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Example

```YAML{:copy}
body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true
```

### `checkboxes`

You can use the `checkboxes` element to add a set of checkboxes to your form.

#### Attributes

{% data reusables.form-schema.attributes-intro %}

| Key | Description | Required | Type | Default | Valid values |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | A brief description of the expected user input, which is displayed in the form. | Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `id` | The identifier for the set of checkboxes. {% data reusables.form-schema.id-must-be-unique %}| Optional | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | A description of the set of checkboxes, which is displayed in the form. Supports Markdown formatting. | Optional | String | Empty String | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | An array of checkboxes that the user can select. For syntax, see below. | Required | Array | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% data reusables.form-schema.options-syntax %}
{% data reusables.form-schema.required-key %}

#### Example

```YAML{:copy}
body:
- type: checkboxes
  id: operating-systems
  attributes:
    label: Which operating systems have you used?
    description: You may select more than one.
    options:
      - label: macOS
      - label: Windows
      - label: Linux
```

## Further reading

- [YAML](https://yaml.org)
