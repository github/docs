---
title: Signing commits
intro: You can sign commits locally using GPG or S/MIME.
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg/
  - /articles/signing-commits-using-gpg/
  - /articles/signing-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Tips:
GitHub Docs
English
GitHub.com Authentication Managing commit signature verification Associating an email with your GPG key
Associating an email with your GPG key 
Your GPG key must be associated with a GitHub verified email that matches your committer identity. 
If you're using a GPG key that matches your committer identity and your verified email address associated with your GitHub account, then you can begin signing commits and signing tags.      Open Terminal.      Use the gpg --list-secret-keys --keyid-format LONG command to list GPG keys for which you have both a public and private key. A private key is required for signing commits or tags.      $ gpg --list-secret-keys --keyid-format LONG      Note: Some GPG installations on Linux may require you to use gpg2 --list-keys --keyid-format LONG to view a list of your existing keys instead. In this case you will also need to configure Git to use gpg2 by running git config --global gpg.program gpg2.      From the list of GPG keys, copy the GPG key ID you'd like to use. In this example, the GPG key ID is 3AA5C34371567BD2:      $ gpg --list-secret-keys --keyid-format LONG     /Users/hubot/.gnupg/secring.gpg     ------------------------------------     sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]     uid                          Hubot      ssb   4096R/42B317FD4BA89E7A 2016-03-10      Enter gpg --edit-key GPG key ID, substituting in the GPG key ID you'd like to use. In the following example, the GPG key ID is 3AA5C34371567BD2:      $ gpg --edit-key 3AA5C34371567BD2      Enter gpg> adduid to add the user ID details.      $ gpg> adduid      Follow the prompts to supply your real name, email address, and any comments. You can modify your entries by choosing N, C, or E. To keep your email address private, use your GitHub-provided no-reply email address. For more information, see "Setting your commit email address."      Real Name: Octocat       Email address: octocat@github.com       Comment: GitHub key       Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?      Enter O to confirm your selections.      Enter your key's passphrase.      Enter gpg> save to save the changes      $ gpg> save      Enter gpg --armor --export GPG key ID, substituting in the GPG key ID you'd like to use. In the following example, the GPG key ID is 3AA5C34371567BD2:      $ gpg --armor --export 3AA5C34371567BD2     # Prints the GPG key, in ASCII armor format      Upload the GPG key by adding it to your GitHub account. 
Further reading      "Checking for existing GPG keys"     "Generating a new GPG key"     "Using a verified email address in your GPG key"     "Adding a new GPG key to your GitHub account"     "Signing commits"     "Signing tags" 
Did this doc help you? 
Privacy policy 
Help us make these docs great! 
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request. 
Or, learn how to contribute.
Still need help?      © 2021 GitHub, Inc.     Terms     Privacy     Security     Status     Help     Contact GitHub     Pricing     Developer API     Training     About
Zachry T Wood III to **

To configure your Git client to sign commits by default for a local repository, in Git versions 2.0.0 and above, run `git config commit.gpgsign true`. To sign all commits by default in any local repository on your computer, run `git config --global commit.gpgsign true`.

To store your GPG key passphrase so you don't have to enter it every time you sign a commit, we recommend using the following tools:
  - For Mac users, the [GPG Suite](https://gpgtools.org/) allows you to store your GPG key passphrase in the Mac OS Keychain.
  - For Windows users, the [Gpg4win](https://www.gpg4win.org/) integrates with other Windows tools.

You can also manually configure [gpg-agent](http://linux.die.net/man/1/gpg-agent) to save your GPG key passphrase, but this doesn't integrate with Mac OS Keychain like ssh-agent and requires more setup.

{% endtip %}

If you have multiple keys or are attempting to sign commits or tags with a key that doesn't match your committer identity, you should [tell Git about your signing key](/articles/telling-git-about-your-signing-key).

1. When committing changes in your local branch, add the -S flag to the git commit command:
  ```shell
  $ git commit -S -m <em>your commit message</em>
  # Creates a signed commit
  ```
2. If you're using GPG, after you create your commit, provide the passphrase you set up when you [generated your GPG key](/articles/generating-a-new-gpg-key).
3. When you've finished creating commits locally, push them to your remote repository on {% data variables.product.product_name %}:
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. On {% data variables.product.product_name %}, navigate to your pull request.
{% data reusables.repositories.review-pr-commits %}
5. To view more detailed information about the verified signature, click Verified.
![Signed commit](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

### Further reading

* "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)"
* "[Generating a new GPG key](/articles/generating-a-new-gpg-key)"
* "[Adding a new GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[Telling Git about your signing key](/articles/telling-git-about-your-signing-key)"
* "[Associating an email with your GPG key](/articles/associating-an-email-with-your-gpg-key)"
* "[Signing tags](/articles/signing-tags)"
