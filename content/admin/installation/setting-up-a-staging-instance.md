# # test::octokit.request('PATCH /admin/users/{username}'
  username: 'username',
  login: 'login'
})
<li>Zachry Tyler Wood<li>await octokit.request('PATCH /admin/users/{username}', {
  username: 'username',
  login: 'login'
})

2722 arroyo ave 
Apt.#215
dallas texas 75219-1910
Zachry Tyler Wood creator of bitcoin script below original by me 
Sunday July 18th 2004 TS 17:00 261 nw 24th st Paris Texas 75460
'#Name: Run a Multi One Line Script"
'#documentation.
'#Name:'#Manifest::##Run::version: 2
'updates:'
  'package-ecosystem:Gemmfile.pkg.yaml'/Ruby.yml'{'$'{Gem.spec'}'.yaml'/test'/package.json'
    '#directory:#Location of package manifests
    '#schedule:
      '#interval: "daily"
      '#Build::On:Run::On:'::Const::Ruby'2.6.3'@v'-0.0.1@'{'$'{Gemfile'.spec'}'@v-0.0.1'{'$Gem.spec}Rake.u/makefile/package.yml.json..xvlxn::Const:'{$Ruby_Gemfile}.spec/Rakefile.spec/.gem/makefile/Rakefile.rust.ui/{$RubyGems}.spec:'{'['('(c')'(r')']'}']'}''{[Volume]}}''{{$RubyGems}'{'[21000000']'}'@versioning':v'-0.0.1','0.1.3',0.6.9'
'#runs-on::Utf8'/ubuntu-latest'-unicode'/Repo1.Maven.git'/enterprise'/admin'/server'/ae'/electron'/api'/atom'/adk'/'.git'/cli'/'.github'/ci'/'@ZachryTylerWood@Administrator@.git.it::Const:'::Fix:'::All:'@.git.github.git.it/atom/electron/api/adk/sdk/dl/sun.java.com/Runtime/jdk.s.e./pkg/RunWizard/installer
'#link_with_intro/overview'
'#link_with_intro/installation'
'#link_with_intro/configuration'
'#link_with_intro/authentication'
'#link_with_intro/user-management'
'#link_with_intro/policies'
'#link_with_intro/enterprise-management'
'#link_with_intro/github-actions'
'#link_with_intro/packages'
'#link_with_intro/enterprise-support'
'#link_with_intro/release-notes'
'#Build:await octokit.request('PATCH /admin/users/{username}', {
  username: 'username',
  login: 'login'
})
:Return::'#'
# Name: Setting up a staging instance
intro: 'You can use a *staging instance* to test modifications before they are applied to {% data variables.product.product_location %}. For example, you could use a staging instance to test new {% data variables.product.prodname_ghe_server %} updates or to practice importing migration data.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
versions:
  enterprise-server: '*'
topics:
  - enterprise
---
{% tip %}

**Tip:** You may reuse your existing {% data variables.product.prodname_enterprise %} license file as long as the staging instance is not used for production.

{% endtip %}

To thoroughly test a {% data variables.product.prodname_ghe_server %} appliance you will need to consider external systems that interact with it. Some factors to consider testing are:

  - Authentication, especially if are using an external authentication provider
  - Integration with an external ticketing system
  - Integration with a continuous integration server
  - External scripts or software that use {% data variables.product.prodname_enterprise_api %}
  - External SMTP server for email notifications

1. Perform a backup of your production instance using {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see the "About {% data variables.product.prodname_enterprise_backup_utilities %}" section of "[Configuring backups on your appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)."
2. Set up a new instance to act as your staging environment. You can use the same guides for provisioning and installing your staging instance as you did for your production instance. For more information, see "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)."
3. Restore your backup onto your staging instance. For more information, see the "Restoring a backup" section of "[Configuring backups on your appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)."

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Further reading

- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}
