# Data

This directory contains data files that are parsed and made available to pages in the `site.data` object.

All YML and Markdown files in this directory are configured to be translated by default.

## Features

Feature files are used for feature-based versioning. See [features/README.md](features/README.md).

## Glossaries

We provide a customer-facing glossary on the site. Other glossary files are used by our translation pipeline. See [glossaries/README.md](glossaries/README.md).

## GraphQL

GraphQL schema files are kept in sync with `github/github` via scheduled workflows. See [graphql/README.md](graphql/README.md).

## Reusables

Reusables are long strings of reusable text. See [reusables/README.md](reusables/README.md).

## Variables

Variables are short strings of reusable text. See [variables/README.md](variables/README.md).

## Webhooks

Webhook payload JSON files are used in the [`webhook events docs`](../content/developers/webhooks-and-events/webhook-events-and-payloads.md).

## ui.yml

`ui.yml` contains localized strings used in layouts.

## Learning Tracks

Learning tracks are a collection of articles that help you master a particular subject. See [learning-tracks/README.md](learning-tracks/README.md).

## Versioning

Many YAML files in this directory's subdirectories, like [features](features), [glossaries](glossaries), [variables](variables), and [learning tracks](learning-tracks), as well as Markdown files within the [reusables](reusables) directory, can include YAML versioning or Liquid versioning within Markdown strings. See the README.md files in the subdirectories for details.
