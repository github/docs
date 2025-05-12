### security
## Top-level configuration options
Required Fields

## name (String): The template's name. Must be unique across all templates, including Markdown templates.
description (String): A description of this template's intended use. This will be shown in the issue template chooser interface.
Optional Fields

## assignees (Array or String): This issue will be automatically assigned to these users. Can be array of usernames or comma-delimited string, e.g. "monalisa,nat"
labels (Array or String): This issue will automatically receive these labels upon creation. Can be array of labels or comma-delimited string, e.g. "bug,needs-triage"
projects (Array or String): This issue will be automatically added to these projects. Can be array of projects or comma-delimited string, e.g. "github/1,github/2"
title (String): Default title that will be pre-populated in the issue submission form.
body (Array): Definition of user inputs.
Input type configuration options
Markdown
Markdown blocks contain arbitrary text that a maintainer can add to a template, to provide extra context or guidance to a contributor. Supports Markdown formatting. This text will not be rendered in the submitted issue body.

## *⚠Required Fields⚠

value (String): The text that will be rendered. Markdown formatting is supported.
Tip #1: YAML processing will cause the hash symbol to be treated as a comment. To insert Markdown headers, wrap your text in quotes.

Tip #2: For multi-line text, you can use the pipe operator.

Example
body:
- type: markdown
  attributes:
    value: "## Welcome!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord.
Input
