From b975982be5c88fd1d42056d242c468ab84cdb601 Mon Sep 17 00:00:00 2001
From: "copilot-swe-agent[bot]" <198982749+Copilot@users.noreply.github.com>
Date: Thu, 9 Apr 2026 21:35:30 +0000
Subject: [PATCH 1/2] Initial plan


From cd64f5d1ce76f9cbc7e9c59c1788ae172fbd819b Mon Sep 17 00:00:00 2001
From: "copilot-swe-agent[bot]" <198982749+Copilot@users.noreply.github.com>
Date: Thu, 9 Apr 2026 21:39:26 +0000
Subject: [PATCH 2/2] fix dependabot python package manager versions in docs
 tables

Agent-Logs-Url: https://github.com/github/docs/sessions/3b95ad1e-aafa-4c4f-b902-0aa6e25154c6

Co-authored-by: kbukum1 <171620528+kbukum1@users.noreply.github.com>
---
 .../supply-chain-security/dependabot-options-reference.md | 6 +++---
 data/reusables/dependabot/supported-package-managers.md   | 8 ++++----
 2 files changed, 7 insertions(+), 7 deletions(-)

diff --git a/content/code-security/reference/supply-chain-security/dependabot-options-reference.md b/content/code-security/reference/supply-chain-security/dependabot-options-reference.md
index aba16f7acd76..3bec6e2fc10f 100644
--- a/content/code-security/reference/supply-chain-security/dependabot-options-reference.md
+++ b/content/code-security/reference/supply-chain-security/dependabot-options-reference.md
@@ -569,11 +569,11 @@ Package manager | YAML value      | Supported versions |
 | {% ifversion dependabot-opentofu-support %} |
 | OpenTofu     | `opentofu`       | Not applicable     |
 | {% endif %} |
-| pip| `pip`            | v24.2          |
-| pip-compile | `pip`            | 7.4.1            |
+| pip| `pip`            | 24.2          |
+| pip-compile | `pip`            | 7.5.3            |
 | pipenv         | `pip`            | <= 2024.4.1    |
 | pnpm   | `npm`            | v7, v8 <br>v9, v10 (version updates only)    |
-| poetry         | `pip`            | v2               |
+| poetry         | `pip`            | 2.2.1               |
 | {% ifversion dependabot-pre-commit-support %} |
 | pre-commit | `pre-commit` | Not applicable |
 | {% endif %} |
diff --git a/data/reusables/dependabot/supported-package-managers.md b/data/reusables/dependabot/supported-package-managers.md
index a5a626f523ec..dc9aa4f85ac6 100644
--- a/data/reusables/dependabot/supported-package-managers.md
+++ b/data/reusables/dependabot/supported-package-managers.md
@@ -41,11 +41,11 @@ npm            | `npm`            | v7, v8, v9, v10, v11   | {% octicon "check"
 | {% ifversion dependabot-opentofu-support %} |
 [OpenTofu](#opentofu)    | `opentofu`      | Not applicable  | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | Not applicable |
 | {% endif %} |
-[pip](#pip-and-pip-compile) | `pip`            | v21.1.2          | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
-pipenv         | `pip`            | <= 2021-05-29    | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
-[pip-compile](#pip-and-pip-compile) | `pip`            | 6.1.0            | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
+[pip](#pip-and-pip-compile) | `pip`            | 24.2          | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
+pipenv         | `pip`            | <= 2024.4.1    | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
+[pip-compile](#pip-and-pip-compile) | `pip`            | 7.5.3            | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
 | {% ifversion dependabot-updates-pnpmv9-support %}pnpm{% else %}[pnpm](#pnpm){% endif %}   | `npm`            | v7, v8, v9, v10      | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} {% ifversion dependabot-updates-pnpmv9-support %}{% else %}(v7 and v8 only){% endif %}| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
-poetry         | `pip`            | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
+poetry         | `pip`            | 2.2.1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
 | {% ifversion dependabot-pre-commit-support %} |
 [pre-commit](#pre-commit) | `pre-commit` | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
 | {% endif %} |
