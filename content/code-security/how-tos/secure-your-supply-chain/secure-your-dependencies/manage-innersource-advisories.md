---
title: Managing innersource advisories
shortTitle: Manage innersource advisories
intro: Create, distribute, and withdraw enterprise-scoped advisories to alert your internal repositories to vulnerabilities and ship fixes automatically.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
category:
  - Secure your dependencies
---

For background on how innersource advisories work and who can create them, see [AUTOTITLE](/code-security/concepts/vulnerability-reporting-and-management/innersource-advisories). 

## Prerequisites

Innersource advisories can only be created in enterprises with an active {% data variables.product.prodname_GH_code_security %} or {% data variables.product.prodname_GHAS %} license.

## Creating innersource advisories

To create an innersource advisory:

1. Create and install a {% data variables.product.prodname_github_app %} with the `enterprise_innersource_vulnerabilities` permission.
1. Generate a token associated with the app that has `write` access to this permission.
1. Create a description of the vulnerability using the OSV format, and `POST` it to the REST API endpoint `/enterprises/{enterprise}/innersource-vulnerabilities/sync`.

Each of these steps is described in more detail below.

### Step 1: Create a {% data variables.product.prodname_github_app %}

Register a {% data variables.product.prodname_github_app %} that is owned by your enterprise, and grant it the `enterprise_innersource_vulnerabilities` permission with `read and write` access. See [AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/registering-a-github-app). 

After registering the app, install it on your enterprise so that it can act on the enterprise's behalf.

### Step 2: Generate an access token

Authenticate as the {% data variables.product.prodname_github_app %} installation to generate an installation access token. This token carries the `enterprise_innersource_vulnerabilities` permission and is used to authenticate your requests to the REST API. See [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app).

### Step 3: Upload an advisory description

Describe the vulnerability using the OSV format, then `POST` the payload to `/enterprises/{enterprise}/innersource-vulnerabilities/sync`, using the installation access token to authenticate. The payload identifies the affected package and the range of vulnerable versions. If a fixed version is available, include a `fixed` field with the version number so that {% data variables.product.prodname_dependabot %} can open pull requests to update affected repositories.

For detailed information on the advisory schema, see [AUTOTITLE](/rest/enterprise-admin/security-advisories#sync-innersource-vulnerabilities-for-an-enterprise).

## Using innersource advisories

After you create an innersource advisory, repositories in the enterprise that use the affected component will receive alerts and updates.

1. Ensure that the repositories in your enterprise have {% data variables.product.prodname_dependabot_alerts %} and updates enabled. You can enforce this at scale using a security configuration. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration).
1. Watch the dependent repositories' {% data variables.product.prodname_dependabot_alerts %} page for a new alert about the affected component. The alert will have a distinct "Innersource" label on it to distinguish it from open source advisory alerts.
1. If your advisory payload included a `fixed` field with a version number that matches an available package, {% data variables.product.prodname_dependabot %} will also create a pull request that updates the package manager's manifest file. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates).

## Withdrawing innersource advisories

When there are no more vulnerable versions of an affected component in use, or if an advisory is superseded, it can be helpful to withdraw it. 

To withdraw an advisory, use the same REST API endpoint as the creation step, but adjust the payload to include a `withdrawn` key, whose value is a `date-time` field indicating when the vulnerability was withdrawn.

## OSV format support and limitations

{% data variables.product.prodname_dotcom %} accepts vulnerabilities in the [Open Source Vulnerability (OSV) format](https://ossf.github.io/osv-schema/) through the innersource vulnerability sync API. While {% data variables.product.prodname_dotcom %} strives for compatibility with the OSV specification, there are differences between the standard OSV schema and what {% data variables.product.prodname_dotcom %} requires or supports.

### Supported OSV schema version

{% data variables.product.prodname_dotcom %} supports OSV schema versions compatible with `~> 1.0` (i.e., `1.0.0` through `1.x.x`). The recommended schema version is `1.4.0`.

### Affected entry formatting

The OSV specification allows a single `affected` entry to contain multiple `ranges` and multiple `versions` for the same package. {% data variables.product.prodname_dotcom %} normalizes these internally by splitting them into separate entries:

| OSV standard | {% data variables.product.prodname_dotcom %} behavior |
|---|---|
| A single `affected` entry can contain multiple `ranges` | Accepted. Each range is processed as a separate vulnerable version range. |
| A single `affected` entry can contain multiple `versions` | Accepted. Each version is treated as an exact match (`= x.y.z`) and processed as a separate vulnerable version range. |
| A single `affected` entry can mix `ranges` and `versions` | Accepted. Ranges and versions are split into separate entries internally. |
| A `SEMVER` range can contain multiple `introduced`/`fixed` pairs | Accepted. Multiple disjoint intervals (e.g., `[1.0.0, 1.0.2)` and `[3.0.0, 3.2.5)`) within a single range are supported. |

### Supported range types

| Range type | Support |
|---|---|
| `ECOSYSTEM` | **Fully supported.** Supports `introduced`, `fixed`, and `last_affected` events. |
| `SEMVER` | **Fully supported.** Supports `introduced`, `fixed`, and `last_affected` events. The `last_affected` event is parsed as a `<=` upper-bound comparator. |
| `GIT` | **Not supported.** Git commit-based ranges are not processed. |

> [!NOTE]
> - For `ECOSYSTEM` ranges, only one `introduced` and one `fixed` (or `last_affected`) event per range is supported. If you need to express multiple disjoint version ranges for the same package, use separate `affected` entries or separate ranges.
> - `SEMVER` ranges support multiple `introduced`/`fixed` pairs within a single range (e.g., `[1.0.0, 1.0.2)` and `[3.0.0, 3.2.5)` in one events array).
> - `fixed` and `last_affected` **cannot appear together** in the same range. Use one or the other, with preference for `fixed`.

### Required fields

The OSV specification treats several fields as optional, but {% data variables.product.prodname_dotcom %} requires them. Requests missing these fields are **rejected with a 422 error**.

| Field | OSV spec | {% data variables.product.prodname_dotcom %} requirement |
|---|---|---|
| `id` | Required | Required. Used as the external identifier for the vulnerability. |
| `severity` array | Optional | **Required.** Must contain at least one `CVSS_V3` or `CVSS_V4` entry with a non-empty `score` string (e.g., `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`). Requests without a valid CVSS entry are rejected. |
| `affected[].package.ecosystem` | Required | Must be a [supported ecosystem](#ecosystem-mapping) |
| `affected[].ranges` or `affected[].versions` | At least one required | At least one range or version must be present for alert matching |

### Optional fields with automatic derivation

| Field | Behavior |
|---|---|
| `database_specific.severity` | If provided, used as the qualitative severity label (`critical`, `high`, `moderate`, or `low`). If absent, the severity is **automatically derived** from the CVSS vector score. |
| `summary` | If absent, falls back to the `id` field. |
| `details` | If absent, falls back to `summary` or `id`. |

### Supported severity types

| Severity type | Support |
|---|---|
| `CVSS_V3` | **Supported.** Must be a valid CVSS 3.1 vector string. |
| `CVSS_V4` | **Supported.** Must be a valid CVSS 4.0 vector string. |
| Other types | **Not supported.** Will cause a parsing error. |

### Supported reference types

| Reference type | Support |
|---|---|
| `ADVISORY` | Supported |
| `WEB` | Supported |
| `FIX` | Supported |
| `ARTICLE` | Supported |
| `REPORT` | Supported |
| `PACKAGE` | Supported (mapped to source code location) |
| `EVIDENCE` | Supported (ignored during processing) |
| `DETECTION` | **Not supported.** Stripped during processing. |

### Alias support

| Alias format | Support |
|---|---|
| `CVE-YYYY-NNNNN` | **Supported.** Extracted as the CVE identifier. Only the first CVE alias is used. |
| Other formats (GHSA, PYSEC, etc.) | **Not supported.** Stripped during processing. |

> [!NOTE]
> If the vulnerability `id` field starts with `GHSA-`, it is recognized as a GHSA identifier. However, GHSA entries in the `aliases` array are stripped and not preserved.

### Field size constraints

The OSV specification does not define maximum string lengths for any field — all strings are unbounded. However, {% data variables.product.prodname_dotcom %} enforces field size limits based on its internal database schema. These limits cannot be relaxed without breaking synchronization with {% data variables.product.prodname_ghe_server %}, which maintains its own compatible schema.

Submissions exceeding these limits are rejected with a descriptive 422 error indicating which field exceeded the limit and the actual length provided (e.g., `affected[0].first_patched_version is 63 characters (max 50)`).

| OSV field | Maps to | OSV standard limit | {% data variables.product.prodname_dotcom %} limit | Unit |
|---|---|---|---|---|
| `summary` | `vulnerabilities.summary` | No limit (recommended ≤120 chars) | **1,024** | bytes |
| `id` | `vulnerabilities.external_id` | No limit | **2,048** | characters |
| `aliases[]` (CVE entry) | `vulnerabilities.cve_id` | No limit | **20** | characters |
| `severity[].score` (CVSS v3) | `vulnerabilities.cvss_v3` | No limit | **255** | bytes |
| `severity[].score` (CVSS v4) | `vulnerabilities.cvss_v4` | No limit | **255** | characters |
| `affected[].package.ecosystem` | `vulnerable_version_ranges.ecosystem` | No limit | **20** | characters |
| `affected[].package.name` | `vulnerable_version_ranges.affects` | No limit | **255** | characters |
| `affected[].ranges[].events[].fixed` | `vulnerable_version_ranges.fixed_in` | No limit | **50** | characters |
| Computed vulnerable version range | `vulnerable_version_ranges.requirements` | No limit | **65,535** | bytes |

> [!NOTE]
> - The `fixed_in` (first patched version) limit of 50 characters is the most commonly encountered constraint. Some ecosystems use long pre-release version strings (e.g., `1.0.0-alpha.gamma.delta.epsilon.zeta.eta.theta`) that exceed this limit.
> - `varchar` columns are validated by character count; `varbinary` and `text` columns are validated by byte size (relevant for multi-byte UTF-8 characters).
> - These limits are constrained by {% data variables.product.prodname_ghe_server %} schema compatibility. Widening columns on {% data variables.product.prodname_dotcom %} without matching GHES changes would cause advisory sync failures between environments.

### Ecosystem mapping

{% data variables.product.prodname_dotcom %} maps OSV ecosystem names to its internal ecosystem identifiers. The following ecosystems are supported:

| OSV ecosystem | {% data variables.product.prodname_dotcom %} ecosystem |
|---|---|
| `npm` | npm |
| `PyPI` | pip |
| `RubyGems` | RubyGems |
| `Maven` | Maven |
| `NuGet` | NuGet |
| `Packagist` | Composer |
| `Go` | Go |
| `crates.io` | Rust |
| `Hex` | Erlang |
| `Pub` | Pub |
| `SwiftURL` | Swift |
| `GitHub Actions` | GitHub Actions |

### Example: minimal OSV payload for alert generation

The following is a minimal OSV payload that contains all required fields for {% data variables.product.prodname_dotcom %} to create a {% data variables.product.prodname_dependabot %} alert:

```json
{
  "schema_version": "1.4.0",
  "id": "EXAMPLE-2024-001",
  "modified": "2024-01-15T10:00:00Z",
  "summary": "Example vulnerability in example-package",
  "details": "A detailed description of the vulnerability.",
  "aliases": ["CVE-2024-12345"],
  "severity": [
    {
      "type": "CVSS_V3",
      "score": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
    }
  ],
  "affected": [
    {
      "package": {
        "ecosystem": "npm",
        "name": "example-package"
      },
      "ranges": [
        {
          "type": "ECOSYSTEM",
          "events": [
            { "introduced": "0" },
            { "fixed": "1.2.3" }
          ]
        }
      ]
    }
  ],
  "database_specific": {
    "severity": "Critical"
  },
  "references": [
    { "type": "ADVISORY", "url": "https://example.com/advisory" }
  ],
  "published": "2024-01-15T10:00:00Z"
}
```

### Known limitations

* **Maximum 100 vulnerabilities per request.** The sync API accepts at most 100 vulnerabilities in a single request.
* **No `GIT` range type.** Git commit-based version ranges are not supported.
* **Single event types per ECOSYSTEM range.** Each `ECOSYSTEM` range supports one `introduced` and one upper-bound event (`fixed` or `last_affected`). Multiple `introduced`/`fixed` pairs in a single `ECOSYSTEM` range are not supported — use separate ranges or separate `affected` entries instead. (This limitation does not apply to `SEMVER` ranges, which support multiple event pairs.)
* **`fixed` and `last_affected` are mutually exclusive.** A single range cannot contain both `fixed` and `last_affected` events. Use one or the other.
* **GHES sync compatibility.** Field size limits (such as `fixed_in` at 50 characters) are constrained by {% data variables.product.prodname_ghe_server %} schema compatibility requirements.

