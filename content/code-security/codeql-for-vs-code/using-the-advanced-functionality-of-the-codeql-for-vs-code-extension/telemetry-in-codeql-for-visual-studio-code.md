---
title: Telemetry in CodeQL for Visual Studio Code
shortTitle: Telemetry
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
allowTitleToDifferFromFilename: true
intro: 'If {% data variables.product.prodname_vscode_shortname %} telemetry is enabled, {% data variables.product.company_short %} will collect usage data and metrics for the purposes of helping the core developers to improve the {% data variables.product.prodname_codeql %} extension for {% data variables.product.prodname_vscode_shortname %}.'
redirect_from:
  - /code-security/codeql-for-vs-code/about-telemetry-in-codeql-for-visual-studio-code
---

This data will not be shared with any parties outside of {% data variables.product.company_short %}. IP addresses and installation IDs will be retained for a maximum of 30 days. Anonymous data will be retained for a maximum of 180 days.

> [!NOTE]
> Telemetry collection in {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %} follows the {% data variables.product.prodname_vscode_shortname %} telemetry settings. When telemetry collection is disabled, no data will be sent to {% data variables.product.company_short %} servers.

## Why we collect data

{% data variables.product.company_short %} collects aggregated, anonymous usage data and metrics to help us improve {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode_shortname %}. IP addresses and installation IDs are collected only to ensure that anonymous data is not duplicated during aggregation.

## What data is collected

If telemetry is enabled, {% data variables.product.company_short %} collects the following information related to the usage of the extension. The data collected are:

* The identifiers of any {% data variables.product.prodname_codeql %}-related {% data variables.product.prodname_vscode_shortname %} commands that are run. For each command, these are: the timestamp, time taken, and whether or not the command completed successfully.

* Interactions with UI elements, including buttons, links, and other inputs. Interacts that are not recorded are: link targets, text inputs, mouse movement, and mouse hovering.

* Occurrence of exceptions and errors. All sensitive information such as file paths and non-static exception message content are removed before uploading.

* The {% data variables.product.prodname_vscode_shortname %} extension version.

* Randomly generated GUID that uniquely identifies a {% data variables.product.prodname_codeql %} extension installation. This is discarded before aggregation.

* IP address of the client sending the telemetry data. This is discarded before aggregation.

* Whether any {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode_shortname %} extension settings are configured. For more information about customizing settings, see [AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/customizing-settings).

## How long data is retained

IP addresses and GUIDs will be retained for a maximum of 30 days. Anonymous, aggregated data that includes command identifiers, run times, and timestamps will be retained for a maximum of 180 days.

## Access to the data

IP addresses and GUIDs will only be available to the core developers of {% data variables.product.prodname_codeql %}. Aggregated data will be available to {% data variables.product.company_short %} employees.

## What data is not collected

We only collect the minimal amount of data we need to answer the questions about how our users are experiencing this product. To that end, we do not collect the following information:

* {% data variables.product.company_short %} user ID

* {% data variables.product.prodname_codeql %} database names or contents

* Contents of {% data variables.product.prodname_codeql %} queries

* File system paths

* User-input text

* Mouse interactions, such as movement or hovers

## Disabling telemetry reporting

You can disable telemetry collection by setting the global `telemetry.telemetryLevel` setting to `off`. For more information, see the [Visual Studio Code Telemetry page](https://code.visualstudio.com/docs/getstarted/telemetry) in the {% data variables.product.prodname_vscode %} documentation.

## Further reading

* [AUTOTITLE](/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement)
* [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service)
