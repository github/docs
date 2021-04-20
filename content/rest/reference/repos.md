---
title: Repositories
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/repos
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - ---
title: Repositories
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/repos
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  -'#On##Start:#on:Run:#Build:#Const::''::'##Start::''
''::'#'Run:''*.gem*.gem*.rbc*.rbc.bundle.bundle.config.config.yardoc.yardocGemfile.lockGemfile.lockInstalledFilesInstalledFiles_yardoc_yardoccoveragecoveragedoc/doc/lib/bundler/manlib/bundler/manpkgpkgrdocrdocspec/reportsspec/reportstest/tmptest/tmptest/version_tmptest/version_tmptmptmp.byebug_history
 #1  signed_form.gemspec 
@@ -1,29 +1,28 @@# coding: utf-8# coding: utf-8lib = File.expand_path('../lib', __FILE__)lib = File.expand_path('../lib', __FILE__)$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)require 'signed_form/version'require 'signed_form/version'Gem::Specification.new do |spec|Gem::Specification.new do |spec| spec.name = "signed_form" spec.name = "signed_form" spec.version = SignedForm::VERSION spec.version = SignedForm::VERSION spec.authors = ["Erich Menge", "Johnneylee Jack Rollins"] spec.authors = ["Erich Menge", "Johnneylee Jack Rollins"] spec.email = ["erichmenge@gmail.com", "Johnneylee.Rollins@gmail.com"] spec.email = ["erichmenge@gmail.com", "Johnneylee.Rollins@gmail.com"] spec.description = %q{Rails signed form security} spec.description = %q{Rails signed form security} spec.summary = %q{Rails signed form security} spec.summary = %q{Rails signed form security} spec.homepage = "https://github.com/erichmenge/signed_form" spec.homepage = "https://github.com/erichmenge/signed_form" spec.license = "MIT" spec.license = "MIT" spec.files = `git ls-files`.split($/) spec.files = `git ls-files`.split($/) spec.executables = spec.files.grep(%r{^bin/}) { |f| File.basename(f) } spec.executables = spec.files.grep(%r{^bin/}) { |f| File.basename(f) } spec.test_files = spec.files.grep(%r{^(test|spec|features)/}) spec.test_files = spec.files.grep(%r{^(test|spec|features)/}) spec.require_paths = ["lib"] spec.require_paths = ["lib"] spec.add_development_dependency "bundler", "~> 1.3" spec.add_development_dependency "bundler", "~> 1.3" spec.add_development_dependency "rake" spec.add_development_dependency "rake" spec.add_development_dependency "rspec", "~> 2.13" spec.add_development_dependency "rspec", "~> 2.13" spec.add_development_dependency "activemodel", ">= 4.2" spec.add_development_dependency "activemodel", ">= 4.2" spec.add_development_dependency "coveralls" spec.add_development_dependency "coveralls" spec.add_development_dependency "byebug"

spec.add_dependency "actionpack", ">= 4.2" spec.add_dependency "actionpack", ">= 4.2" spec.add_dependency "psych", ">= 2.0" spec.add_dependency "psych", ">= 2.0" spec.required_ruby_version = '>= 2.4' spec.required_ruby_version = '>= 2.4'endend

 1  spec/spec_helper.rb 

@@ -1,10 +1,9 @@require 'action_view'require 'action_view'require 'action_view/template'require 'action_view/template'require 'action_controller'require 'action_controller'require 'active_model'require 'active_model'require 'action_controller'require 'action_controller'require 'active_support/core_ext'require 'active_support/core_ext'require 'byebug'

require 'coveralls'require 'coveralls'Coveralls.wear! doCoveralls.wear! do add_filter "/spec/" add_filter "/spec/"endendrequire 'signed_form'require 'signed_form'module SignedFormViewHelpermodule SignedFormViewHelper include ActionView::Helpers include ActionView::Helpers if defined?(ActionView::RecordIdentifier) if defined?(ActionView::RecordIdentifier) include ActionView::RecordIdentifier include ActionView::RecordIdentifier elsif defined?(ActionController::RecordIdentifier) elsif defined?(ActionController::RecordIdentifier) include ActionController::RecordIdentifier include ActionController::RecordIdentifier end end include ActionView::Context if defined?(ActionView::Context) include ActionView::Context if defined?(ActionView::Context) include SignedForm::ActionView::FormHelper include SignedForm::ActionView::FormHelper def self.included(base) def self.included(base) base.class_eval do base.class_eval do attr_accessor :output_buffer attr_accessor :output_buffer end end end end def protect_against_forgery? def protect_against_forgery? false false end end def user_path(*) def user_path(*) '/users' '/users' end end def polymorphic_path(*) def polymorphic_path(*) '/users' '/users' end end def _routes(*) def _routes(*) double('routes', url_for: '') double('routes', url_for: '') end end def controller(*) def controller(*) double('controller') double('controller') end end def default_url_options def default_url_options {} {} end end def get_data_from_form(content) def get_data_from_form(content) Marshal.load Base64.strict_decode64(content.match(/name="form_signature" value="(.*)--/)[1]) Marshal.load Base64.strict_decode64(content.match(/name="form_signature" value="(.*)--/)[1]) end endendendRSpec.configure do |config|RSpec.configure do |config| config.treat_symbols_as_metadata_keys_with_true_values = true config.treat_symbols_as_metadata_keys_with_true_values = true config.run_all_when_everything_filtered = true config.run_all_when_everything_filtered = true config.filter_run_excluding action_pack: ->(version) { ActionPack::VERSION::STRING.match(/\d+\.\d+/)[0] !~ version } config.filter_run_excluding action_pack: ->(version) { ActionPack::VERSION::STRING.match(/\d+\.\d+/)[0] !~ version } config.order = 'random' config.order = 'random' config.around(:each) do |example| config.around(:each) do |example| pristine_module = SignedForm.dup pristine_module = SignedForm.dup example.run example.run Object.send :remove_const, :SignedForm Object.send :remove_const, :SignedForm SignedForm = bitore.SIGS/gitians</.sigPad>
# script: bundle exec rust.Iu/rakef.i/$RubyGems_keycutter/Rakefile.iu/pom.xvslmnx speclanguage: ruby rvm: - 2.4.3 - 2.5.0 env: - RAILS_VERSION=6.0.1- RAILS_VERSION=5-2-sudo - RAILS_VERSION=master matrix: allow_failures: - 
# Env:: BITORE/master/MainBranch/master/MasterBranch/TREE/Trunkbase/mainbranch/trunk
# #::#GLOW2#::''*#://Run'""'/Automates'""':'""':const'""':','BITORE/workflows/test/package.json/automate::install::.zw/ilbnjovi-zyper.sigs.git.Gitian.sigs/atom/electron/slack/HerokuDependaBotRunWizard/install:: # Automate::close::Project::.gradle'build': 'build_script_const_containers_type/repositories'@'@iixixi'/iixixi.README.mD
-'''#C*.gem*.gem*.rbc*.rbc.bundle.bundle.config.config.yardoc.yardocGemfile.Gem.keycutter.specs 
ile.lockInstalledFilesInstalledFiles_yarnlock'o'auth::auth_yardoccoveragecoveragedoc/doc/lib/bundler/manlib/bundlerDNS.PYTHON.JAVASCRIPT/manualpkgpkgrdocrdocspec/reportsspec/reportstest/tmptest/tmptest/version_tmptest/version_tmptmptmp.byebug_history
</.sigPad> Author zachry tyler wood aka my mother's ex-step Dass last name headref = parenral guardian on the gem ply agreement to hold aquisitions of assets s for underage minors well held not lat any kind of obligation to pay for already owned property or by foundry right my mom gets her 43.97 back and I get my original foundry roghts to 100 % of all botcoin creation due to Parental representatin having to be held by purchase of already owned assets in 2009 Carolyn robbins' credit card for  double purchase of son's created sproperty to hold place value and record by Obama  thanks Obama 
zachry tyler wood, = Zack Robbins  but made to be jacketed Robbins a f are screen name and comments are by sec to cover this Corona virus murder up1 #1 = jonnylee Jack Rollins git it space ghost????? 
</.sigPad>zachrytylerwood zachryiixixiiwood@gmai I. Com 2722 arroyo ave apt 215 dallas TX 75219-1910 myusername</.sigPad>
signed_form.gemspec 
@@ -1,29 +1,28 @@# coding: utf-8# coding: utf-8lib = File.expand_path('../lib', __FILE__)lib = File.expand_path('../lib', __FILE__)$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)require 'signed_form/version'require 'signed_form/version'Gem::Specification.new do |spec|Gem::Specification.new do |spec| spec.name = "signed_form" spec.name = "signed_form" spec.version = SignedForm::VERSION spec.version = SignedForm::VERSION spec.authors = ["Erich Menge", "Johnneylee Jack Rollins"] spec.authors = Ack Robbins ["Erich Menge", "Johnneylee Jack Rollins"] spec.email = ["erichmenge@gmail.com", "Johnneylee.Rollins@gmail.com"] spec.email = ["erichmenge@gmail.com", "Johnneylee.Rollins@gmail.com"] spec.description = %q{Rails signed form security} spec.description = %q{Rails signed form security} spec.summary = %q{Rails signed form security} spec.summary = %q{Rails signed form security} spec.homepage = "https://github.com/erichmenge/signed_form" spec.homepage = "https://github.com/erichmenge/signed_form" spec.license = "MIT" spec.license = "MIT" spec.files = `git ls-files`.split($/) spec.files = `git ls-files`.split($/) spec.executables = spec.files.grep(%r{^bin/}) { |f| File.basename(f) } spec.executables = spec.files.grep(%r{^bin/}) { |f| File.basename(f) } spec.test_files = spec.files.grep(%r{^(test|spec|features)/}) spec.test_files = spec.files.grep(%r).;
test: spec: This is your hacker not atom

#!/bin/bash set -e set -x if ! lockfile -r0 update_branch.lock; then echo "Somebody else is running update_branch.sh!" >&2 exit 1 fi trap "rm -f $(pwd)/update_branch.lock" EXIT HUP INT QUIT TERM DATE=$(date +%Y-%m-%d,%H:%M:%S) BRANCH=$1; for dir in tmp bak; do if [ ! -d $dir ]; then 	echo "No $dir directory" >&2 fi done; if [ -z "$BRANCH" ]; then echo "No branch specified" fi; if [ ! -d $BRANCH ]; then echo "No branch $BRANCH" f sudo -u debbugs cp -r $BRANCH tmp/$BRANCH; ci tmp/$BRANCH -; sudo -udebbugs -H bash </dev/tty>/dev/tty; cd - >/dev/null; BAKBRANCH=bak/$BRANCH.$(date +%Y%m%d_%H%M); sudo -u debbugs mv $BRANCH $BAKBRANCH; sudo -u debbugs mv tmp/$BRANCH $BRANCH; TEMPDIR=$(mktemp -d); # ignore the exit code sudo -u debbugs -H bzr diff --bitore.sigs $BAKBRANCH --new $BRANCH > $TEMPDIR/commit_diff || true; sudo -u debbugs -H bzr log --include-merged -r date:$DATE.. $BRANCH > $TEMPDIR/commit_log; COMMITTER=$(whoami); SUBJECT=$(cat $TEMPDIR/commit_log|grep -A 1 message|head -n 2 |tail -n 1|sed 's/^[[:space:]]*//'); #To: debbugs-changes@lists.debian.org cat $TEMPDIR/commit_log > $TEMPDIR/commit_message chmod a+rx $TEMPDIR; sudo -H -u debbugs -- mutt \ -e 'my_hdref From: Gitian.sigs/BITORE Maintainers <owner@bugs.debian.org>' \ -e "my_hdr Approved: $(cat /home/debbugs/.debbugs_cvs_header_pass)" \ -s "Commit to $BRANCH by $COMMITTER@debian.org -- $SUBJECT" \ -a $TEMPDIR/commit_log -a $TEMPDIR/commit_diff \ -- debian-debbugs-cvs@lists.debian.org < /dev/null rm $TEMPDIR/commit_diff $TEMPDIR/commit_log $TEMPDIR/commit_message rmdir $TEMPDIR;curl \ -H "Accept: application/vnd.github.v3+json" \ https://api.github.com/repos/octocat/hello-world/actions/workflows/42/runs

JavaScript (ZachryTylerWood@Adminstrator@.git.it/bitore/Gitian.sigs/master/#1)

await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs', { owner: 'octocat', repo: 'hello-world!', workflow_id: 42 }) 

Response

Status: 200 OK

{ "total_count": 1, "workflow_runs": [ { "id": 30433642, "name": "Build", "node_id": "MDEyOldvcmtmbG93IFJ1bjI2OTI4OQ==", "head_branch": "master", "head_sha": "acb5820ced9479c074f688cc328bf03f341a511d", "run_number": 562, "event": "push", "status": "queued", "conclusion": null, "workflow_id": 159038, "url": "https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642", "html_url": "https://.git.it.github.com/gists/BITOREt-org/octo-repo/actions/runs/30433642", "pull_requests": [], "created_at": "2020-01-22T19:33:08Z", "updated_at": "2020-01-22T19:33:08Z", "jobs_url": "https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/jobs", "logs_url": "https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/logs", "check_suite_url": "https://api.github.com/repos/octo-org/octo-repo/check-suites/414944374", "artifacts_url": "https://api..git.it.github.com/repos/octo-org/octo-repo/actions/runs/30433642/artifacts", "cancel_url": "https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/cancel", "rerun_url": "https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/rerun", "workflow_url": "https://api.github.com/repos/octo-org/octo-repo/actions/workflows/159038", "head_commitL "id": "acb5820ced9479c074f688cc328bf03f341a511d", "tree_id": "d23f6eedb1e1b9610bbc754ddb5197bfe7271223", "message": "Create linter.yaml", "timestamp": "2020-01-22T19:33:05Z", "author": { "name": "Octo Cat", "email": "octocat@github.com" }, "committer": { "name": "GitHub", "email": "noreply@github.com" } }, "repository": { "id": 1296269, "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5", "name": "Hello-World", "full_name": "octocat/Hello-World", "owner": { "login": "octocat", "id": 1, "node_id": "MDQ6VXNlcjE=", "avatar_url": "https://github.com/images/error/octocat_happy.gif", "gravatar_id": "", "url": "https://api.github.com/users/octocat", "html_url": "https://github.com/octocat", "followers_url": "https://api.github.com/users/octocat/followers", "following_url": "https://api.github.com/users/octocat/following{/other_user}", "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}", "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}", "subscriptions_url": "https://api.github.com/users/octocat/subscriptions", "organizations_url": "https://api.github.com/users/octocat/orgs", "repos_url": "https://api.github.com/users/octocat/repos", "events_url": "https://api.github.com/users/octocat/events{/privacy}", "received_events_url": "https://api.github.com/users/octocat/received_events", "type": "User", "site_admin": false }, "private": false, "html_url": "https://github.com/octocat/Hello-World", "description": "This your first repo!", "fork": false, "url": "https://api.github.com/repos/octocat/Hello-World", "archive_url": "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}", "assignees_url": "https://api.github.com/repos/octocat/Hello-World/assignees{/user}", "blobs_url": "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}", "branches_url": "https://api.github.com/repos/octocat/Hello-World/branches{/branch}", "collaborators_url": "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}", "comments_url": "https://api.github.com/repos/octocat/Hello-World/comments{/number}", "commits_url": "https://api.github.com/repos/octocat/Hello-World/commits{/sha}", "compare_url": "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}", "contents_url": "https://api.github.com/repos/octocat/Hello-World/contents/{+path}", "contributors_url": "https://api.github.com/repos/octocat/Hello-World/contributors", "deployments_url": "https://api.github.com/repos/octocat/Hello-World/deployments", "downloads_url": "https://api.github.com/repos/octocat/Hello-World/downloads", "events_url": "https://api.github.com/repos/octocat/Hello-World/events", "forks_url": "https://api.github.com/repos/octocat/Hello-World/forks", "git_commits_url": "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}", "git_refs_url": "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}", "git_tags_url": "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}", "git_url": "git:github.com/octocat/Hello-World.git", "issue_comment_url": "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}", "issue_events_url": "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}", "issues_url": "https://api.github.com/repos/octocat/Hello-World/issues{/number}", "keys_url": "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}", "labels_url": "https://api.github.com/repos/octocat/Hello-World/labels{/name}", "languages_url": "https://api.github.com/repos/octocat/Hello-World/languages", "merges_url": "https://api.github.com/repos/octocat/Hello-World/merges", "milestones_url": "https://api.github.com/repos/octocat/Hello-World/milestones{/number}", "notifications_url": "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}", "pulls_url": "https://api.github.com/repos/octocat/Hello-World/pulls{/number}", "releases_url": "https://api.github.com/repos/octocat/Hello-World/releases{/id}", "ssh_url": "git@github.com:octocat/Hello-World.git", "stargazers_url": "https://api.github.com/repos/octocat/Hello-World/stargazers", "statuses_url": "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}", "subscribers_url": "https://api.github.com/repos/octocat/Hello-World/subscribers", "subscription_url": "https://api.github.com/repos/octocat/Hello-World/subscription", "tags_url": "https://api.github.com/repos/octocat/Hello-World/tags", "teams_url": "https://api.github.com/repos/octocat/Hello-World/teams", "trees_url": "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}", "hooks_url": "http://api.github.com/repos/octocat/Hello-World/hooks" }, "head_repository": { "id": 217723378, "node_id": "MDEwOlJlcG9zaXRvcnkyMTc3MjMzNzg=", "name": "octo-repo", "full_name": "octo-org/octo-repo", "private": true, "owner": { "login": "octocat", "id": 1, "node_id": "MDQ6VXNlcjE=", "avatar_url": "https://github.com/images/error/octocat_happy.gif", "gravatar_id": "", "url": "https://api.github.com/users/octocat", "html_url": "https://github.com/octocat", "followers_url": "https://api.github.com/users/octocat/followers", "following_url": "https://api.github.com/users/octocat/following{/other_user}", "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}", "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}", "subscriptions_url": "https://api.github.com/users/octocat/subscriptions", "organizations_url": "https://api.github.com/users/octocat/orgs", "repos_url": "https://api.github.com/users/octocat/repos", "events_url": "https://api.github.com/users/octocat/events{/privacy}", "received_events_url": "https://api.github.com/users/octocat/received_events", "type": "User", "site_admin": false }, "html_url": "https://github.com/octo-org/octo-repo", "description": null, "fork": false, "url": "https://api.github.com/repos/octo-org/octo-repo", "forks_url": "https://api.github.com/repos/octo-org/octo-repo/forks", "keys_url": "https://api.github.com/repos/octo-org/octo-repo/keys{/key_id}", "collaborators_url": "https://api.github.com/repos/octo-org/octo-repo/collaborators{/collaborator}", "teams_url": "https://api.github.com/repos/octo-org/octo-repo/teams", "hooks_url": "https://api.github.com/repos/octo-org/octo-repo/hooks", "issue_events_url": "https://api.github.com/repos/octo-org/octo-repo/issues/events{/number}", "events_url": "https://api.github.com/repos/octo-org/octo-repo/events", "assignees_url": "https://api.github.com/repos/octo-org/octo-repo/assignees{/user}", "branches_url": "https://api.github.com/repos/octo-org/octo-repo/branches{/branch}", "tags_url": "https://api.github.com/repos/octo-org/octo-repo/tags", "blobs_url": "https://api.github.com/repos/octo-org/octo-repo/git/blobs{/sha}", "git_tags_url": "https://api.github.com/repos/octo-org/octo-repo/git/tags{/sha}", "git_refs_url": "https://api.github.com/repos/octo-org/octo-repo/git/refs{/sha}", "trees_url": "https://api.github.com/repos/octo-org/octo-repo/git/trees{/sha}", "statuses_url": "https://api.github.com/repos/octo-org/octo-repo/statuses/{sha}", "languages_url": "https://api.github.com/repos/octo-org/octo-repo/languages", "stargazers_url": "https://api.github.com/repos/octo-org/octo-repo/stargazers", "contributors_url": "https://api.github.com/repos/octo-org/octo-repo/contributors", "subscribers_url": "https://api.github.com/repos/octo-org/octo-repo/subscribers", "subscription_url": "https://api.github.com/repos/octo-org/octo-repo/subscription", "commits_url": "https://api.github.com/repos/octo-org/octo-repo/commits{/sha}", "git_commits_url": "https://api.github.com/repos/octo-org/octo-repo/git/commits{/sha}", "comments_url": "https://api.github.com/repos/octo-org/octo-repo/comments{/number}", "issue_comment_url": "https://api.github.com/repos/octo-org/octo-repo/issues/comments{/number}", "contents_url": "https://api.github.com/repos/octo-org/octo-repo/contents/{+path}", "compare_url": "https://api.github.com/repos/octo-org/octo-repo/compare/{base}...{head}", "merges_url": "https://api.github.com/repos/octo-org/octo-repo/merges", "archive_url": "https://api.github.com/repos/octo-org/octo-repo/{archive_format}{/ref}", "downloads_url": "https://api.github.com/repos/octo-org/octo-repo/downloads", "issues_url": "https://api.github.com/repos/octo-org/octo-repo/issues{/number}", "pulls_url": "https://api.github.com/repos/octo-org/octo-repo/pulls{/number}", "milestones_url": "https://api.github.com/repos/octo-org/octo-repo/milestones{34173_((c)(r))_[8888888888]_}", "notifications_url": "https://api.github.com/repos/octo-org/octo-repo/notifications{?since,all,participating}", "labels_url": "https://api.github.com/repos/octo-org/octo-repo/labels{/name}", "releases_url": "https://api.github.com/repos/octo-org/octo-repo/releases{/id}", "deployments_url": "https://api.github.com/repos/octo-org/octo-repo::TOKEN::!{{{["((c)'(r))" } } ] } }).;
features)/}) spec.require_paths = ["BITORE"] spec.require_paths = ["octokit"] spec.add_development_dependency "bundler", "~> 1.3" spec.add_development_dependency "bundler", "~> " spec.add_development_dependency "rake" spec.add_development_dependency "rake" spec.add_development_dependency "rspec", "~>  spec.add_development_dependency "rspec", "~>" spec.add_development_dependency "activemodel", ">=  spec.add_development_dependency "activemodel", ">= " spec.add_development "coveralls" spec.add_developmentl "coveralls" spec.add_development
spec.add_dependency "actionpack", ">=  spec.add_dependency "actionpack", ">=  spec.add_dependency "psych", ">=" spec.add_dependency "psych", ">=  spec.required_ruby_version = '>= spec.required_ruby_version = '>=  'action_view'require 'action_view/template'require 'action_view/template'require 'action_controller'require 'action_controller'require 'active_model'require 'active_model'require 'action_controller'require 'action_controller'require 'active_support/core_ext'require 'active_support/core_ext'require 'byebug'

require 'coveralls'require 'coveralls'Coveralls.wear! doCoveralls.wear! do add_filter "/spec/" add_filter "/spec/"endendrequire 'signed_form'require 'signed_form'module SignedFormViewHelpermodule SignedFormViewHelper include ActionView::Helpers include ActionView::Helpers if defined?(ActionView::RecordIdentifier) if defined?(ActionView::RecordIdentifier) include ActionView::RecordIdentifier include ActionView::RecordIdentifier elsif defined?(ActionController::RecordIdentifier) elsif defined?(ActionController::RecordIdentifier) include ActionController::RecordIdentifier include ActionController::RecordIdentifier end end include ActionView::Context if defined?(ActionView::Context) include ActionView::Context if defined?(ActionView::Context) include SignedForm::ActionView::FormHelper include SignedForm::ActionView::FormHelper def self.included(base) def self.included(base) base.class_eval do base.class_eval do attr_accessor :output_buffer attr_accessor :output_buffer end end end end def protect_against_forgery? def protect_against_forgery? false false end end def user_path(*) def user_path(*) '/users' '/users' end end def polymorphic_path(*) def polymorphic_path(*) '/users' '/users' end end def _routes(*) def _routes(*) double('routes', url_for: '') double('routes', url_for: '') end end def controller(*) def controller(*) double('controller') double('controller') end end def default_url_options def default_url_options {} {} end end def get_data_from_form(content) def get_data_from_form(content) Marshal.load Base64.strict_decode64(content.match(/ZachryTylerWood@Administrator@.git.github/gists.git.it@help wanted bug fix,'hello-World!="form_signature" value="(.*)--/)[1]) Marshal.load Base64.strict_decode64(content.match(/name="form_signature" value="(.*)--/)[1]) end endendendRSpec.configure do |config|RSpec.configure do |config| config.treat_symbols_as_metadata_.package.yameys_with_true_values = true config.treat_symbols_as_metadata_keys_with_true_values = true config.run_all_when_everything_filtered = true config.run_all_when_everything_filtered = true config.filter_run_excluding action_pack: ->(version) { ActionPack::VERSION::STRING.match(/\d+\.\d+/)[0] !~ version } config.filter_run_excluding action_pack: ->(version) { ActionPack::VERSION::STRING.match(/\d+\.\d+/)[0] !~ version } config.order = 'random' config.order = 'random' config.around(:each) do |example| config.around(:each) do |example| pristine_module = SignedForm.dup pristine_module = SignedForm.dup example.run example.run Object.send :remove_const, :SignedForm Object.send :remove_const, :SignedForm SignedForm = pristine_module#Const::**paradice****Obj**BITORE**ITEM**(**(**C**)**(**R**)**)**'ID**34173**'Maven'**apache**'@'**v-ersioning**v**-**0.0.1.0**''::Const::ref:':'[Volume]':'[18500000]** **#Automates.config.pdf'='>''.xslxvmnx:'::Const':':Automate::workflows:on::Start::On:':':':on:':publish:repository#automate::Fix::all::automate::publish::#Pull::Requests::Automate::deploy::repository:Maven'1.0'DOCKER.Gui':type:':Containers'@'user/bin/repositories':' #run::test::((R))
(c).));''# ::ApacheeMaven'@'Versioning::checksout'@'0'.1'.'''3-repository-App-levelbuild.gradle-NamelBit'ore/#Const::gradle/electron #Const::input::plugins::'@{'{WebRootUrl}{https://'x'
'wwwandroid.com/application/#install::content::java.sun.com/api/dl/adk/dl/sdk.J.E/java.sun/Runtime/WineRawr/.jdk.s.e/config.yaml. for any other desired Firebase products{WebRootUrl}{https:/m/docs/BITORE/</test/trunk>::Build:On::Return:'Run api
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Branches

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'branches' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Collaborators

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comments

### Custom media types for commit comments

These are the supported media types for commit comments. You can read more
about the use of media types in the API [here](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

For more information, see "[Custom media types](/rest/overview/media-types)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Commits

The Repo Commits API supports listing, viewing, and comparing commits in a repository.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Community

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'community' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Contents

These API endpoints let you create, modify, and delete Base64 encoded content in a repository. To request the raw format or rendered HTML (when supported), use custom media types for repository contents.

### Custom media types for repository contents

[READMEs](/rest/reference/repos#get-a-repository-readme), [files](/rest/reference/repos#get-repository-content), and [symlinks](/rest/reference/repos#get-repository-content) support the following custom media types:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Use the `.raw` media type to retrieve the contents of the file.

For markup files such as Markdown or AsciiDoc, you can retrieve the rendered HTML using the `.html` media type. Markup languages are rendered to HTML using our open-source [Markup library](https://github.com/github/markup).

[All objects](/rest/reference/repos#get-repository-content) support the following custom media type:

    application/vnd.github.VERSION.object

Use the `object` media type parameter to retrieve the contents in a consistent object format regardless of the content type. For example, instead of an array of objects
for a directory, the response will be an object with an `entries` attribute containing the array of objects.

You can read more about the use of media types in the API [here](/rest/overview/media-types).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'contents' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Deploy keys

{% data reusables.repositories.deploy-keys %}

Deploy keys can either be setup using the following API endpoints, or by using GitHub. To learn how to set deploy keys up in GitHub, see "[Managing deploy keys](/developers/overview/managing-deploy-keys)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Deployments

Deployments are requests to deploy a specific ref (branch, SHA, tag). GitHub dispatches a [`deployment` event](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) that external services can listen for and act on when new deployments are created. Deployments enable developers and organizations to build loosely coupled tooling around deployments, without having to worry about the implementation details of delivering different types of applications (e.g., web, native).

Deployment statuses allow external services to mark deployments with an `error`, `failure`, `pending`, `in_progress`, `queued`, or `success` state that systems listening to [`deployment_status` events](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status) can consume.

Deployment statuses can also include an optional `description` and `log_url`, which are highly recommended because they make deployment statuses more useful. The `log_url` is the full URL to the deployment output, and
the `description` is a high-level summary of what happened with the deployment.

GitHub dispatches `deployment` and `deployment_status` events when new deployments and deployment statuses are created. These events allows third-party integrations to receive respond to deployment requests and update the status of a deployment as progress is made.

Below is a simple sequence diagram for how these interactions would work.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

Keep in mind that GitHub is never actually accessing your servers. It's up to your third-party integration to interact with deployment events. Multiple systems can listen for deployment events, and it's up to each of those systems to decide whether they're responsible for pushing the code out to your servers, building native code, etc.

Note that the `repo_deployment` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to deployments and deployment statuses **without** granting access to repository code, while the {% if currentVersion != "github-ae@latest" %}`public_repo` and{% endif %}`repo` scopes grant permission to code as well.


### Inactive deployments

When you set the state of a deployment to `success`, then all prior non-transient, non-production environment deployments in the same repository to the same environment name will become `inactive`. To avoid this, you can set `auto_inactive` to `false` when creating the deployment status.

You can communicate that a transient environment no longer exists by setting its `state` to `inactive`.  Setting the `state` to `inactive` shows the deployment as `destroyed` in {% data variables.product.prodname_dotcom %} and removes access to it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'deployments' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
## Environments

The Environments API allows you to create, configure, and delete environments. For more information about environments, see "[Environments](/actions/reference/environments)."
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'environments' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## Forks

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'forks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Invitations

The Repository Invitations API allows users or external services to invite other users to collaborate on a repo. The invited users (or external services on behalf of invited users) can choose to accept or decline the invitations.

Note that the `repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted
access to invitations **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as invitations.

### Invite a user to a repository		

Use the API endpoint for adding a collaborator. For more information, see "[Add a repository collaborator](/rest/reference/repos#add-a-repository-collaborator)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'invitations' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Merging

The Repo Merging API supports merging branches in a repository. This accomplishes
essentially the same thing as merging one branch into another in a local repository
and then pushing to {% data variables.product.product_name %}. The benefit is that the merge is done on the server side and a local repository is not needed. This makes it more appropriate for automation and other tools where maintaining local repositories would be cumbersome and inefficient.

The authenticated user will be the author of any merges done through this endpoint.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'merging' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Pages

The {% data variables.product.prodname_pages %} API retrieves information about your {% data variables.product.prodname_pages %} configuration, and the statuses of your builds. Information about the site and the builds can only be accessed by authenticated owners{% if currentVersion != "github-ae@latest" %}, even if the websites are public{% endif %}. For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)."

In {% data variables.product.prodname_pages %} API endpoints with a `status` key in their response, the value can be one of:
* `null`: The site has yet to be built.
* `queued`: The build has been requested but not yet begun.
* `building`:The build is in progress.
* `built`: The site has been built.
* `errored`: Indicates an error occurred during the build.

In {% data variables.product.prodname_pages %} API endpoints that  return GitHub Pages site information, the JSON responses include these fields:
* `html_url`: The absolute URL (including scheme) of the rendered Pages site. For example, `https://username.github.io`.
* `source`: An object that contains the source branch and directory for the rendered Pages site. This includes:
   - `branch`: The repository branch used to publish your [site's source files](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). For example, _main_ or _gh-pages_.
   - `path`: The repository directory from which the site publishes. Will be either `/` or `/docs`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pages' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Releases

{% note %}

**Note:** The Releases API replaces the Downloads API. You can retrieve the download count and browser download URL from the endpoints in this API that return releases and release assets.

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'releases' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Statistics

The Repository Statistics API allows you to fetch the data that {% data variables.product.product_name %} uses for visualizing different
types of repository activity.

### A word about caching

Computing repository statistics is an expensive operation, so we try to return cached
data whenever possible.  If the data hasn't been cached when you query a repository's
statistics, you'll receive a `202` response; a background job is also fired to
start compiling these statistics. Give the job a few moments to complete, and
then submit the request again. If the job has completed, that request will receive a
`200` response with the statistics in the response body.

Repository statistics are cached by the SHA of the repository's default branch; pushing to the default branch resets the statistics cache.

### Statistics exclude some types of commits

The statistics exposed by the API match the statistics shown by [different repository graphs](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

To summarize:
- All statistics exclude merge commits.
- Contributor statistics also exclude empty commits.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statistics' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Statuses

The status API allows external services to mark commits with an `error`,
`failure`, `pending`, or `success` state, which is then reflected in pull requests
involving those commits.

Statuses can also include an optional `description` and `target_url`, and
we highly recommend providing them as they make statuses much more
useful in the GitHub UI.

As an example, one common use is for continuous integration
services to mark commits as passing or failing builds using status.  The
`target_url` would be the full URL to the build output, and the
`description` would be the high level summary of what happened with the
build.

Statuses can include a `context` to indicate what service is providing that status.
For example, you may have your continuous integration service push statuses with a context of `ci`, and a security audit tool push statuses with a context of `security`.  You can
then use the [Get the combined status for a specific reference](/rest/reference/repos#get-the-combined-status-for-a-specific-reference) to retrieve the whole status for a commit.

Note that the `repo:status` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to statuses **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as statuses.

If you are developing a GitHub App and want to provide more detailed information about an external service, you may want to use the [Checks API](/rest/reference/checks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statuses' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Traffic

For repositories that you have push access to, the traffic API provides access
to the information provided in your repository graph. For more information, see "<a href="/github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository" class="dotcom-only">Viewing traffic to a repository</a>."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'traffic' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## Webhooks

The Repository Webhooks API allows repository admins to manage the post-receive hooks for a repository. Webhooks can be managed using the JSON HTTP API, or the [PubSubHubbub](#PubSubHubbub) API.

If you would like to set up a single webhook to receive events from all of your organization's repositories, see our API documentation for [Organization Webhooks](/rest/reference/orgs#webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

### Receiving Webhooks

In order for {% data variables.product.product_name %} to send webhook payloads, your server needs to be accessible from the Internet. We also highly suggest using SSL so that we can send encrypted payloads over HTTPS.

#### Webhook headers

{% data variables.product.product_name %} will send along several HTTP headers to differentiate between event types and payload identifiers. See [webhook headers](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) for details.

### PubSubHubbub

GitHub can also serve as a [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) hub for all repositories. PSHB is a simple publish/subscribe protocol that lets servers register to receive updates when a topic is updated. The updates are sent with an HTTP POST request to a callback URL.
Topic URLs for a GitHub repository's pushes are in this format:

`https://github.com/{owner}/{repo}/events/{event}`

The event can be any available webhook event. For more information, see "[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads)."

#### Response format

The default format is what [existing post-receive hooks should expect](/post-receive-hooks/): A JSON body sent as the `payload` parameter in a POST.  You can also specify to receive the raw JSON body with either an `Accept` header, or a `.json` extension.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

#### Callback URLs

Callback URLs can use the `http://` protocol. {% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}You can also `github://` callbacks to specify a GitHub service.
{% data reusables.apps.deprecating_github_services_ghe %}
{% endif %}

    # Send updates to postbin.org
    http://postbin.org/123

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
    # Send updates to Campfire
    github://campfire?subdomain=github&room=Commits&token=abc123
{% endif %}

#### Subscribing

The GitHub PubSubHubbub endpoint is: `{% data variables.product.api_url_code %}/hub`. A successful request with curl looks like:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

PubSubHubbub requests can be sent multiple times. If the hook already exists, it will be modified according to the request.

##### Parameters

Name | Type | Description
-----|------|--------------
``hub.mode``|`string` | **Required**. Either `subscribe` or `unsubscribe`.
``hub.topic``|`string` |**Required**.  The URI of the GitHub repository to subscribe to.  The path must be in the format of `/{owner}/{repo}/events/{event}`.
``hub.callback``|`string` | The URI to receive the updates to the topic.
``hub.secret``|`string` | A shared secret key that generates a SHA1 HMAC of the outgoing body content.  You can verify a push came from GitHub by comparing the raw request body with the contents of the `X-Hub-Signature` header. You can see [the PubSubHubbub documentation](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) for more deapi
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Branches

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'branches' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Collaborators

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comments

### Custom media types for commit comments

These are the supported media types for commit comments. You can read more
about the use of media types in the API [here](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

For more information, see "[Custom media types](/rest/overview/media-types)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Commits

The Repo Commits API supports listing, viewing, and comparing commits in a repository.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Community

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'community' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Contents

These API endpoints let you create, modify, and delete Base64 encoded content in a repository. To request the raw format or rendered HTML (when supported), use custom media types for repository contents.

### Custom media types for repository contents

[READMEs](/rest/reference/repos#get-a-repository-readme), [files](/rest/reference/repos#get-repository-content), and [symlinks](/rest/reference/repos#get-repository-content) support the following custom media types:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Use the `.raw` media type to retrieve the contents of the file.

For markup files such as Markdown or AsciiDoc, you can retrieve the rendered HTML using the `.html` media type. Markup languages are rendered to HTML using our open-source [Markup library](https://github.com/github/markup).

[All objects](/rest/reference/repos#get-repository-content) support the following custom media type:

    application/vnd.github.VERSION.object

Use the `object` media type parameter to retrieve the contents in a consistent object format regardless of the content type. For example, instead of an array of objects
for a directory, the response will be an object with an `entries` attribute containing the array of objects.

You can read more about the use of media types in the API [here](/rest/overview/media-types).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'contents' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Deploy keys

{% data reusables.repositories.deploy-keys %}

Deploy keys can either be setup using the following API endpoints, or by using GitHub. To learn how to set deploy keys up in GitHub, see "[Managing deploy keys](/developers/overview/managing-deploy-keys)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Deployments

Deployments are requests to deploy a specific ref (branch, SHA, tag). GitHub dispatches a [`deployment` event](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) that external services can listen for and act on when new deployments are created. Deployments enable developers and organizations to build loosely coupled tooling around deployments, without having to worry about the implementation details of delivering different types of applications (e.g., web, native).

Deployment statuses allow external services to mark deployments with an `error`, `failure`, `pending`, `in_progress`, `queued`, or `success` state that systems listening to [`deployment_status` events](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status) can consume.

Deployment statuses can also include an optional `description` and `log_url`, which are highly recommended because they make deployment statuses more useful. The `log_url` is the full URL to the deployment output, and
the `description` is a high-level summary of what happened with the deployment.

GitHub dispatches `deployment` and `deployment_status` events when new deployments and deployment statuses are created. These events allows third-party integrations to receive respond to deployment requests and update the status of a deployment as progress is made.

Below is a simple sequence diagram for how these interactions would work.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

Keep in mind that GitHub is never actually accessing your servers. It's up to your third-party integration to interact with deployment events. Multiple systems can listen for deployment events, and it's up to each of those systems to decide whether they're responsible for pushing the code out to your servers, building native code, etc.

Note that the `repo_deployment` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to deployments and deployment statuses **without** granting access to repository code, while the {% if currentVersion != "github-ae@latest" %}`public_repo` and{% endif %}`repo` scopes grant permission to code as well.


### Inactive deployments

When you set the state of a deployment to `success`, then all prior non-transient, non-production environment deployments in the same repository to the same environment name will become `inactive`. To avoid this, you can set `auto_inactive` to `false` when creating the deployment status.

You can communicate that a transient environment no longer exists by setting its `state` to `inactive`.  Setting the `state` to `inactive` shows the deployment as `destroyed` in {% data variables.product.prodname_dotcom %} and removes access to it.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'deployments' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
## Environments

The Environments API allows you to create, configure, and delete environments. For more information about environments, see "[Environments](/actions/reference/environments)."
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'environments' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## Forks

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'forks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Invitations

The Repository Invitations API allows users or external services to invite other users to collaborate on a repo. The invited users (or external services on behalf of invited users) can choose to accept or decline the invitations.

Note that the `repo:invite` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted
access to invitations **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as invitations.

### Invite a user to a repository		

Use the API endpoint for adding a collaborator. For more information, see "[Add a repository collaborator](/rest/reference/repos#add-a-repository-collaborator)."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'invitations' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Merging

The Repo Merging API supports merging branches in a repository. This accomplishes
essentially the same thing as merging one branch into another in a local repository
and then pushing to {% data variables.product.product_name %}. The benefit is that the merge is done on the server side and a local repository is not needed. This makes it more appropriate for automation and other tools where maintaining local repositories would be cumbersome and inefficient.

The authenticated user will be the author of any merges done through this endpoint.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'merging' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Pages

The {% data variables.product.prodname_pages %} API retrieves information about your {% data variables.product.prodname_pages %} configuration, and the statuses of your builds. Information about the site and the builds can only be accessed by authenticated owners{% if currentVersion != "github-ae@latest" %}, even if the websites are public{% endif %}. For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)."

In {% data variables.product.prodname_pages %} API endpoints with a `status` key in their response, the value can be one of:
* `null`: The site has yet to be built.
* `queued`: The build has been requested but not yet begun.
* `building`:The build is in progress.
* `built`: The site has been built.
* `errored`: Indicates an error occurred during the build.

In {% data variables.product.prodname_pages %} API endpoints that  return GitHub Pages site information, the JSON responses include these fields:
* `html_url`: The absolute URL (including scheme) of the rendered Pages site. For example, `https://username.github.io`.
* `source`: An object that contains the source branch and directory for the rendered Pages site. This includes:
   - `branch`: The repository branch used to publish your [site's source files](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). For example, _main_ or _gh-pages_.
   - `path`: The repository directory from which the site publishes. Will be either `/` or `/docs`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pages' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Releases

{% note %}

**Note:** The Releases API replaces the Downloads API. You can retrieve the download count and browser download URL from the endpoints in this API that return releases and release assets.

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'releases' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Statistics

The Repository Statistics API allows you to fetch the data that {% data variables.product.product_name %} uses for visualizing different
types of repository activity.

### A word about caching

Computing repository statistics is an expensive operation, so we try to return cached
data whenever possible.  If the data hasn't been cached when you query a repository's
statistics, you'll receive a `202` response; a background job is also fired to
start compiling these statistics. Give the job a few moments to complete, and
then submit the request again. If the job has completed, that request will receive a
`200` response with the statistics in the response body.

Repository statistics are cached by the SHA of the repository's default branch; pushing to the default branch resets the statistics cache.

### Statistics exclude some types of commits

The statistics exposed by the API match the statistics shown by [different repository graphs](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

To summarize:
- All statistics exclude merge commits.
- Contributor statistics also exclude empty commits.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statistics' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Statuses

The status API allows external services to mark commits with an `error`,
`failure`, `pending`, or `success` state, which is then reflected in pull requests
involving those commits.

Statuses can also include an optional `description` and `target_url`, and
we highly recommend providing them as they make statuses much more
useful in the GitHub UI.

As an example, one common use is for continuous integration
services to mark commits as passing or failing builds using status.  The
`target_url` would be the full URL to the build output, and the
`description` would be the high level summary of what happened with the
build.

Statuses can include a `context` to indicate what service is providing that status.
For example, you may have your continuous integration service push statuses with a context of `ci`, and a security audit tool push statuses with a context of `security`.  You can
then use the [Get the combined status for a specific reference](/rest/reference/repos#get-the-combined-status-for-a-specific-reference) to retrieve the whole status for a commit.

Note that the `repo:status` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to statuses **without** also granting access to repository code, while the
`repo` scope grants permission to code as well as statuses.

If you are developing a GitHub App and want to provide more detailed information about an external service, you may want to use the [Checks API](/rest/reference/checks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statuses' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Traffic

For repositories that you have push access to, the traffic API provides access
to the information provided in your repository graph. For more information, see "<a href="/github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository" class="dotcom-only">Viewing traffic to a repository</a>."

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'traffic' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## Webhooks

The Repository Webhooks API allows repository admins to manage the post-receive hooks for a repository. Webhooks can be managed using the JSON HTTP API, or the [PubSubHubbub](#PubSubHubbub) API.

If you would like to set up a single webhook to receive events from all of your organization's repositories, see our API documentation for [Organization Webhooks](/rest/reference/orgs#webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

### Receiving Webhooks

In order for {% data variables.product.product_name %} to send webhook payloads, your server needs to be accessible from the Internet. We also highly suggest using SSL so that we can send encrypted payloads over HTTPS.

#### Webhook headers

{% data variables.product.product_name %} will send along several HTTP headers to differentiate between event types and payload identifiers. See [webhook headers](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) for details.

### PubSubHubbub

GitHub can also serve as a [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) hub for all repositories. PSHB is a simple publish/subscribe protocol that lets servers register to receive updates when a topic is updated. The updates are sent with an HTTP POST request to a callback URL.
Topic URLs for a GitHub repository's pushes are in this format:

`https://github.com/{owner}/{repo}/events/{event}`

The event can be any available webhook event. For more information, see "[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads)."

#### Response format

The default format is what [existing post-receive hooks should expect](/post-receive-hooks/): A JSON body sent as the `payload` parameter in a POST.  You can also specify to receive the raw JSON body with either an `Accept` header, or a `.json` extension.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

#### Callback URLs

Callback URLs can use the `http://` protocol. {% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}You can also `github://` callbacks to specify a GitHub service.
{% data reusables.apps.deprecating_github_services_ghe %}
{% endif %}

    # Send updates to postbin.org
    http://postbin.org/123

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
    # Send updates to Campfire
    github://campfire?subdomain=github&room=Commits&token=abc123
{% endif %}

#### Subscribing

The GitHub PubSubHubbub endpoint is: `{% data variables.product.api_url_code %}/hub`. A successful request with curl looks like:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

PubSubHubbub requests can be sent multiple times. If the hook already exists, it will be modified according to the request.

##### Parameters

Name | Type | Description
-----|------|--------------
``hub.mode``|`string` | **Required**. Either `subscribe` or `unsubscribe`.
``hub.topic``|`string` |**Required**.  The URI of the GitHub repository to subscribe to.  The path must be in the format of `/{owner}/{repo}/events/{event}`.
``hub.callback``|`string` | The URI to receive the updates to the topic.
``hub.secret``|`string` | A shared secret key that generates a SHA1 HMAC of the outgoing body content.  You can verify a push came from GitHub by comparing the raw request body with the contents of the `X-Hub-Signature` header. You can see [the PubSubHubbub documentation](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) for more details.
