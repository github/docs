---
title: Pushing a branch blocked by push protection
intro: 'Push protection proactively protects you against leaked secrets in your repositories. You can resolve blocked pushes and, once the detected secret is removed, you can push changes to your working branch from the command line or the web UI.'
product: '{% data reusables.gated-features.push-protection-users-and-repos %}'
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
---

## About push protection

Push protection helps to prevent security leaks by scanning for secrets before you push changes to your repository.

When you try to push a secret to a repository secured by push protection, {% data variables.product.prodname_dotcom %} blocks the push. You must remove the secret from your branch before pushing again. For more information on how to resolve a blocked push, see "[Resolving a blocked push on the command line](#resolving-a-blocked-push-on-the-command-line)" and "[Resolving a blocked commit in the web UI](#resolving-a-blocked-commit-in-the-web-ui)" in this article.

If you believe it's safe to allow the secret, you {% ifversion push-protection-delegated-bypass %}may {% endif %}have the option to bypass the protection. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-push-protection)."

For information on the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

## Resolving a blocked push on the command line

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

### Removing a secret introduced by the latest commit on your branch

If the blocked secret was introduced by the latest commit on your branch, you can follow the guidance below.

1. Remove the secret from your code.
1. To commit the changes, run `git commit --amend`. This updates the original commit that introduced the secret instead of creating a new commit.
1. Push your changes with `git push`.

### Removing a secret introduced by an earlier commit on your branch

You can also remove the secret if the secret appears in an earlier commit in the Git history. To do so, you will need to identify which commit first introduced the secret and modify the commit history with an interactive rebase.

1. Examine the error message that displayed when you tried to push your branch, which lists all of the commits that contain the secret.

   ```text
   remote:   —— {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic_title_case %} ——————————————————————
   remote:    locations:
   remote:      - commit: 8728dbe67
   remote:        path: README.md:4
   remote:      - commit: 03d69e5d3
   remote:        path: README.md:4
   remote:      - commit: 8053f7b27
   remote:        path: README.md:4
   ```

1. Next, run `git log` to see a full history of all the commits on your branch, along with their corresponding timestamps.

   ```text
   test-repo (test-branch)]$ git log
   commit 8053f7b27 (HEAD -> main)
   Author: Octocat <1000+octocat@users.noreply.github.com
   Date:   Tue Jan 30 13:03:37 2024 +0100

     my fourth commit message

   commit 03d69e5d3
   Author: Octocat <1000+octocat@users.noreply.github.com>
   Date:   Tue Jan 30 13:02:59 2024 +0100

     my third commit message

   commit 8728dbe67
   Author: Octocat <1000+octocat@users.noreply.github.com
   Date:   Tue Jan 30 13:01:36 2024 +0100

     my second commit message

   commit 6057cbe51
   Author: Octocat <1000+octocat@users.noreply.github.com
   Date:   Tue Jan 30 12:58:24 2024 +0100

     my first commit message

1. Focusing only on the commits that contain the secret, use the output of `git log` to identify which commit comes _earliest_ in your Git history.
   - In the example, commit `8728dbe67` was the first commit to contain the secret.
1. Start an interactive rebase with `git rebase -i <COMMIT-ID>~1`.
   - For `<COMMIT-ID>`, use the commit identified in step 3. For example, `git rebase -i 8728dbe67~1`.
1. In the editor, choose to edit the commit identified in step 3 by changing `pick` to `edit` on the first line of the text.

   ```text
   edit 8728dbe67 my second commit message
   pick 03d69e5d3 my third commit message
   pick 8053f7b27 my fourth commit message
   ```

1. Save and close the editor to start the interactive rebase.
1. Remove the secret from your code.
1. Commit your changes using `git commit --amend`.
1. Run `git rebase --continue` to finish the rebase.
1. Push your changes with `git push`.

## Resolving a blocked commit in the web UI

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

To resolve a blocked commit in the web UI, you need to remove the secret from the file. Once you remove the secret, you will be able to commit your changes.

Alternatively, if you determine that it's safe to allow the secret, use the options displayed in the dialog box to bypass push protection. For more information about bypassing push protection from the web UI, see "[AUTOTITLE](/code-security/secret-scanning/working-with-push-protection#bypassing-push-protection-when-working-with-the-web-ui)."

# Further reading

- "[AUTOTITLE](/code-security/secret-scanning/working-with-push-protection)"
- "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-repositories-and-organizations)"{% ifversion secret-scanning-push-protection-for-users %}
- "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-users)"{% endif %}
