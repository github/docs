name: Improve existing content
description: Make a suggestion to improve the content in an existing article.
labels:
  - content
body:
  - type: markdown
    attributes:
      value: |
        **HUBBERS!!** This is the github/docs open source repo. You may want to open an issue in the internal-only github/docs-content repo instead.

        * Before you file an issue read the [Contributing guide](https://docs.github.com/en/contributing).
        * Check to make sure someone hasn't already opened a similar [issue](https://github.com/github/docs/issues).

  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: This project has a Code of Conduct that all participants are expected to understand and follow.
      options:
        - label: I have read and agree to the GitHub Docs project's [Code of Conduct](https://github.com/github/docs/blob/main/.github/CODE_OF_CONDUCT.md)
          required: true

  - type: textarea
    attributes:
      label: What article on docs.github.com is affected?
      description: Please link to the article you'd like to see updated.
    validations:
      required: true

  - type: textarea
    attributes:
      label: What part(s) of the article would you like to see updated?
      description: |
        - Give as much detail as you can to help us understand the change you want to see. 
        - Why should the docs be changed? What use cases does it support? 
        - What is the expected outcome or behavior?
    validations:
      required: true

  - type: textarea
    attributes:
      label: Additional information
      description: |
        - Are you able to reliably reproduce the problem? How often does it occur? How many users are affected?
        - Add any other context or screenshots about the feature here.
    validations:
      required: false
