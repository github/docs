---
title: Working with push protection in the GitHub UI
shortTitle: Work with push protection in the GitHub UI
intro: 'TODO'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
---

## About push protection in the {% data variables.product.prodname_dotcom %} UI

Push protection prevents you from accidentally committing secrets to a repository by blocking commits containing supported secrets.

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

You should either:

* **Remove** the secret from the commit. For more information, see "[Resolving a blocked commit in the {% data variables.product.prodname_dotcom %} UI](#resolving-a-blocked-commit-in-the-github-ui)."
* **Review** the instructions in the dialog box {% ifversion push-protection-delegated-bypass %}to see what options are available to you{% endif %} to allow the push. For more information, see "[Bypassing push protection when working in the {% data variables.product.prodname_dotcom %} UI](#bypassing-push-protection-when-working-in-the-github-ui)"{% ifversion push-protection-delegated-bypass %} and "[Requesting bypass privileges when working in the {% data variables.product.prodname_dotcom %} UI](#requesting-bypass-privileges-when-working-in-the-github-ui){% endif %}."

{% ifversion push-protection-block-uploads %}

{% data variables.product.prodname_dotcom %} will also block the commit if you attempt to upload files containing supported secrets. The dialog box will show you which files contain the secret. You should remove the secret from the files before attempting to upload the files again.

{% data reusables.secret-scanning.push-protection-web-UI-uploads-beta %}

{% endif %}

{% data variables.product.prodname_dotcom %} will only display one detected secret at a time in the web UI. If a particular secret has already been detected in the repository and an alert already exists, {% data variables.product.prodname_dotcom %} will not block that secret.

Organization owners can provide a custom link that will be displayed when a push is blocked. This custom link can contain resources and advice specific to your organization. For example, the custom link can point to a README file with information about the organization's secret vault, which teams and individuals to escalate questions to, or the organization's approved policy for working with secrets and rewriting commit history.

You may be able to bypass the block by specifying a reason for allowing the secret to be committed. For more information on how to bypass push protection and commit the blocked secret, see "[Bypassing push protection when working in the {% data variables.product.prodname_dotcom %} UI](#bypassing-push-protection-when-working-in-the-github-ui)."

{% ifversion push-protection-delegated-bypass %} Alternatively, you may be required to submit a request for "bypass privileges" in order to commit the secret. For information on how to request permission to bypass push protection and allow the secret, see "[Requesting bypass privileges when working in the {% data variables.product.prodname_dotcom %} UI](#requesting-bypass-privileges-when-working-in-the-github-ui)."

{% endif %}

## Resolving a blocked push from the command line

TODO
To resolve a blocked push, you must remove the secret from all of the commits it appears in.
* If the secret was introduced by your latest commit, see "[Removing a secret introduced by the latest commit on your branch](#removing-a-secret-introduced-by-the-latest-commit-on-your-branch)."
* If the secret appears in multiple earlier commits, see "[Removing a secret introduced by an earlier commit on your branch](#removing-a-secret-introduced-by-an-earlier-commit-on-your-branch)."

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
1. Commit your changes using `git commit --amend`.
1. Run `git rebase --continue` to finish the rebase.
1. Push your changes with `git push`.

## Bypassing push protection when working in the {% data variables.product.prodname_dotcom %} UI

If {% data variables.product.prodname_dotcom %} blocks a secret that you believe is safe to commit, you {% ifversion push-protection-delegated-bypass %}may be able to {% else %}can {% endif %}bypass the block by specifying a reason for allowing the secret.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. In dialog box that appeared when {% data variables.product.prodname_dotcom %} blocked your commit, review the name and location of the secret.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
{% data reusables.secret-scanning.push-protection-public-repos-bypass %}
1. Click **Allow secret**.

{% ifversion push-protection-delegated-bypass %}

## Requesting bypass privileges when working in the {% data variables.product.prodname_dotcom %} UI

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

If your push has been blocked by push protection and you believe the secret is safe to push, you can request permission to bypass the block. Your request is sent to a designated group of reviewers, who will either approve or deny the request.

Requests expire after 7 days.

{% data reusables.secret-scanning.push-protection-visit-URL %}
{% data reusables.secret-scanning.push-protection-bypass-request-add-comment %}
{% data reusables.secret-scanning.push-protection-submit-bypass-request %}
{% data reusables.secret-scanning.push-protection-bypass-request-check-email %}

{% data reusables.secret-scanning.push-protection-bypass-request-decision-email %}

If your request is approved, you can push the commit (or commits) containing the secret to the repository, as well as any future commits that contain the same secret.

If your request is denied, you will need to remove the secret from all commits containing the secret before pushing again. For information on how to remove a blocked secret, see "[Resolving a blocked push from the command line](#resolving-a-blocked-push-from-the-command-line)."

{% endif %}

## Further reading

* TODO
