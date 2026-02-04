---
title: Troubleshooting common issues with GitHub Spark
intro: 'This guide describes common issues with {% data variables.product.prodname_spark_short %} and how to resolve them.'
versions:
  feature: spark
topics:
  - Copilot
shortTitle: Troubleshoot Spark
contentType: how-tos
category:
  - Troubleshooting Copilot
---

## Error: "Live preview is interrupted. Try refreshing the page to reconnect."

There is a known compatibility issue between Apple's Safari browser and the way {% data variables.product.prodname_spark_short %} renders its live preview.

To resolve the issue, switch to a different browser such as Google Chrome, Microsoft Edge or Mozilla Firefox.

## Error: "HTTP 413 status code ("Payload Too Large")"

{% data variables.product.prodname_spark_short %} uses a key-value store for app data. The combined size of the key (the label) and payload (the actual data) must be less than 512kB. If you save data over this limit, you'll get a HTTP 413 status code ("Payload Too Large") error.

To resolve the error, reduce the size of data you're trying to save, or split the data into smaller records.

## App fails to build after adding an external library

{% data variables.product.prodname_spark_short %} uses an opinionated stack (React, TypeScript) for reliability. You can add external libraries to your spark, but compatibility isn’t guaranteed and you should test additions thoroughly. For best results, you should work within {% data variables.product.prodname_spark_short %}'s SDK and core framework.
