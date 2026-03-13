---
title: Working with push protection from the command line
shortTitle: Push protection on the command line
intro: Learn your options for unblocking your push from the command line to {% data variables.product.prodname_dotcom %} if {% data variables.product.prodname_secret_scanning %} detects a secret in your changes.
permissions: '{% data reusables.permissions.push-protection-resolve-block %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
redirect_from:
  - /code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line
---

## Resolving a blocked push

To resolve a blocked push, you must remove the secret from all of the commits it appears in.
* If the secret was introduced by your latest commit, see [Removing a secret introduced by the latest commit on your branch](#removing-a-secret-introduced-by-the-latest-commit-on-your-branch).
* If the secret appears in earlier commits, see [Removing a secret introduced by an earlier commit on your branch](#removing-a-secret-introduced-by-an-earlier-commit-on-your-branch).

### Removing a secret introduced by the latest commit on your branch

1. Remove the secret from your code.
1. To commit the changes, run `git commit --amend --all`. This updates the original commit that introduced the secret instead of creating a new commit.
1. Push your changes with `git push`.

### Removing a secret introduced by an earlier commit on your branch

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
   * In the example, commit `8728dbe67` was the first commit to contain the secret.
1. Start an interactive rebase with `git rebase -i <COMMIT-ID>~1`.
   * For `<COMMIT-ID>`, use the commit identified in step 3. For example, `git rebase -i 8728dbe67~1`.
1. In the editor, choose to edit the commit identified in step 3 by changing `pick` to `edit` on the first line of the text.

   ```text
   edit 8728dbe67 my second commit message
   pick 03d69e5d3 my third commit message
   pick 8053f7b27 my fourth commit message
   ```

1. Save and close the editor to start the interactive rebase.
1. Remove the secret from your code.
1. Add your changes to the staging area using `git add .`.

   >[!NOTE] The full command is `git add .`:
   > * There is a space between `add` and `.`.
   > * The period following the space is part of the command.

1. Commit your changes using `git commit --amend`.
1. Run `git rebase --continue` to finish the rebase.
1. Push your changes with `git push`.

## Bypassing push protection

> [!NOTE] If you don't see the option to bypass a block, you should remove the secret from the commit, or submit a request for "bypass privileges" in order to push the blocked secret. See [Requesting bypass privileges](#requesting-bypass-privileges).

{% data reusables.secret-scanning.push-protection-visit-URL %}
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
{% data reusables.secret-scanning.push-protection-public-repos-bypass %}
1. Click **Allow me to push this secret**.
1. Reattempt the push on the command line within three hours. If you have not pushed within three hours, you will need to repeat this process.

## Requesting bypass privileges

{% data reusables.secret-scanning.push-protection-visit-URL %}
{% data reusables.secret-scanning.push-protection-bypass-request-add-comment %}
{% data reusables.secret-scanning.push-protection-submit-bypass-request %}
{% data reusables.secret-scanning.push-protection-bypass-request-check-email %} {% data reusables.secret-scanning.push-protection-bypass-request-decision-email %}

   * If your request is **approved**, you can push the commit (or commits) containing the secret to the repository, as well as any future commits that contain the same secret.
   * If your request is **denied**, you need to remove the secret from all commits before pushing again. For information on how to remove a blocked secret, see [Resolving a blocked push](#resolving-a-blocked-push).

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui){% ifversion secret-scanning-push-protection-content-endpoints %}
* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-rest-api){% endif %}
