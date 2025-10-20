---
title: Managing the lifecycle of artifact attestations
shortTitle: Manage attestations
intro: Search for and delete attestations that you no longer need.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /actions/how-tos/security-for-github-actions/using-artifact-attestations/managing-the-lifecycle-of-artifact-attestations
---

{% data reusables.actions.lifecycle-of-attestations %}

## Finding attestations

1. Navigate to the repository where the attestation was produced.
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, under "Management," click **{% octicon "verified" aria-hidden="true" aria-label="verified" %} Attestations**.
1. The attestations are sorted by creation date, newest first. Use the "Search or filter" bar to search for an attestation or filter the results.

### Searching and filtering

Enter **free text** to search by subject name. This returns all attestations with subject names that partially match your search string. Multiple attestations can have the same subject name.

Use the `created` filter to filter by creation date. To enter a custom date range, click today's date then edit the default query.

* For example: `created:<2025-04-03`.
* Supported operators: `> <`.

Use the `predicate` filter to filter by the kind of attestation. A predicate is the type of claim that an attestation makes about an artifact, such as "this artifact was built during a particular workflow run and originates from this repository."

* Provenance attestations were created with the `attest-build-provenance` action.
* SBOM attestations were created with the `attest-sbom` action.
* Custom predicate type patterns are **not** supported in the search field, but are supported by the API.

## Deleting attestations

Before deleting an attestation, we recommend downloading a copy of it. Once the attestation is deleted, consumers with a verification process in place will **no longer be able to use the associated artifact**, and you will no longer be able to find the attestation on {% data variables.product.github %}.

1. In the list of attestations, select the checkbox next to the attestations you want to delete. You can select multiple attestations at a time.
1. Click **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete**.
1. Read the message, then confirm by clicking **Delete attestations**.

## Managing attestations with the API

To manage attestations in bulk with the REST API, see [AUTOTITLE](/rest/users/attestations).
