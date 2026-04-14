# Welcome to GitHub docs contributing guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:.

**📖 For comprehensive contribution guidance, please visit our official documentation at [docs.github.com/en/contributing](https://docs.github.com/en/contributing). This is our canonical source for all contribution processes and policies.**

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

This guide provides repository-specific information to supplement the official contribution documentation. For detailed processes, policies, and best practices, always refer to [docs.github.com/en/contributing](https://docs.github.com/en/contributing).

Use the table of contents icon <img alt="Table of contents icon" src="/contributing/images/table-of-contents.png" width="25" height="25" /> in the top corner of this document to get to a specific section of this guide quickly.

## New contributor guide

**Start here:** Visit [docs.github.com/en/contributing](https://docs.github.com/en/contributing) for complete contributor onboarding and guidelines.

For repository-specific setup, read the [README](../README.md) file. The official docs site also provides these helpful resources:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/git-basics/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Contribution types and what we're looking for
needs.job1.outputs.firstwordname: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
      - id: step2
        run: echo "secondword=world" >> $GITHUB_OUTPUT
        steps.step1.outputs.firstword<?xml version="1.0" encoding="us-ascii"?>
<feed
xmlns="http://www.w3.org/2005/Atom"
xmlns:thr="http://purl.org/syndication/thread/1.0"><title>git.vger.kernel.org archive mirror</title><link
rel="alternate"
type="text/html"
href="https://lore.kernel.org/git/"/><link
rel="self"
href="https://lore.kernel.org/git/new.atom"/><id>mailto:git@vger.kernel.org</id><updated>2026-04-14T01:28:33Z</updated><entry><author><name>Shibo Xia</name><email>sbxia25@gmail.com</email></author><title>Re: How should submodules use different sshCommand during initial update?</title><updated>2026-04-14T01:28:33Z</updated><link
href="https://lore.kernel.org/git/CAAC4ekquR+eCxTWifOR-X5hgd+rSen8eAUy8cxukouUE57xaoA@mail.gmail.com/"/><id>urn:uuid:d330e8c6-6f92-91b3-cf8e-a7a398964946</id><thr:in-reply-to
ref="urn:uuid:3b987c9a-0b2c-0dad-7586-38ee119b41db"
href="https://lore.kernel.org/git/xmqq1pgilufr.fsf@gitster.g/"/><content
type="xhtml"><div
xmlns="http://www.w3.org/1999/xhtml"><pre
style="white-space:pre-wrap">Hi,

Yes, that would help as a workaround.

If I understand correctly, the idea would be to run:

git submodule init

then adjust submodule.&lt;name&gt;.url entries in the superproject config before
the actual clone happens, and only then run:

git submodule update

That does seem workable.

My concern is that this still solves the problem indirectly through URL
rewriting / SSH host aliasing, rather than allowing the submodule&#39;s SSH
behavior itself to be configured more directly.

So I think this answers the practical &#34;how can this be done today?&#34; part,
but I am still wondering whether there is a reason Git should not support a
more direct per-submodule sshCommand-style configuration.

Thanks,
Shibo Xia

Junio C Hamano &lt;gitster@pobox.com&gt; &#20110;2026&#24180;4&#26376;14&#26085;&#21608;&#20108; 00:02&#20889;&#36947;&#65306;
<span
class="q">&gt;
&gt; Shibo Xia &lt;sbxia25@gmail.com&gt; writes:
&gt;
&gt; &gt; My use case is that different submodules may need different SSH identities or
&gt; &gt; different SSH command settings.
&gt;
&gt; Would it help to do &#34;submodule init&#34; separately from &#34;submodule
&gt; update&#34;?  Then you have a chance to tweak the submodule.*.url
&gt; configuration items in the superproject repository before the clone
&gt; actually happens, I would imagine?
</span></pre></div></content></entry><entry><author><name>kawai-m</name><email>kawai-m@tr-advanced.co.jp</email></author><title>RE: Subject: Inquiry: Git versions you provide and Windows 11 compatibility</title><updated>2026-04-14T01:17:01Z</updated><link
href="https://lore.kernel.org/git/OSCPR01MB1345083E588E48B54FD997EEFEC252@OSCPR01MB13450.jpnprd01.prod.outlook.com/"/><id>urn:uuid:7506313b-d8c4-b0d9-a523-36dcf7bb1b1b</id><thr:in-reply-to
ref="urn:uuid:118c6ebc-6ec1-7009-2379-50bcfb205b10"
href="https://lore.kernel.org/git/xmqqv7due43w.fsf@gitster.g/"/><content
type="xhtml"><div
xmlns="http://www.w3.org/1999/xhtml"><pre
style="white-space:pre-wrap">Thank you for your reply.
Understood.

That is all from my side. Thank you in advance for your continued support.

-----Original Message-----
From: Junio C Hamano &lt;gitster@pobox.com&gt; 
Sent: Tuesday, April 14, 2026 10:13 AM
To: &#27827;&#21512; &#20449; &lt;kawai-m@tr-advanced.co.jp&gt;
Cc: git@vger.kernel.org; &#26381;&#37096; &#30410;&#25104; &lt;hattori-m@tr-advanced.co.jp&gt;
Subject: Re: Subject: Inquiry: Git versions you provide and Windows 11 compatibility

We do not ship or distribute any binaries.  Git-for-Windows is a product of another group and your inquiry will be better served there.

  <a
href="https://gitforwindows.org/">https://gitforwindows.org/</a>

</pre></div></content></entry><entry><author><name>Junio C Hamano</name><email>gitster@pobox.com</email></author><title>Re: Subject: Inquiry: Git versions you provide and Windows 11 compatibility</title><updated>2026-04-14T01:13:28Z</updated><link
href="https://lore.kernel.org/git/xmqqv7due43w.fsf@gitster.g/"/><id>urn:uuid:118c6ebc-6ec1-7009-2379-50bcfb205b10</id><thr:in-reply-to
ref="urn:uuid:cccc35a9-586b-91ec-7c78-2831e9957640"
href="https://lore.kernel.org/git/OSCPR01MB134507F2EDA90C775EF1DC571EC252@OSCPR01MB13450.jpnprd01.prod.outlook.com/"/><content
type="xhtml"><div
xmlns="http://www.w3.org/1999/xhtml"><pre
style="white-space:pre-wrap">We do not ship or distribute any binaries.  Git-for-Windows is a
product of another group and your inquiry will be better served
there.

  <a
href="https://gitforwindows.org/">https://gitforwindows.org/</a>

</pre></div></content></entry><entry><author><name>Junio C Hamano</name><email>gitster@pobox.com</email></author><title>Re: [PATCH 06/12] t: prepare execution of potentially failing commands for `set -e`</title><updated>2026-04-14T01:09:12Z</updated><link
href="https://lore.kernel.org/git/xmqq340yfivf.fsf@gitster.g/"/><id>urn:uuid:35863c68-dee2-519e-c53f-7204fd837795</id><thr:in-reply-to
ref="urn:uuid:3352d95c-5538-e6bc-9e19-97efa4b5195e"
href="https://lore.kernel.org/git/xmqqeckifq59.fsf@gitster.g/"/><content
type="xhtml"><div
xmlns="http://www.w3.org/1999/xhtml"><pre
style="white-space:pre-wrap">Junio C Hamano &lt;gitster@pobox.com&gt; writes:

<span
class="q">&gt; I think I know what is lacking in this patch.  Following the above
&gt; section (which is a good conversion), there is this bit that needs a
&gt; similar handling.
&gt;
&gt;  t/lib-git-svn.sh | 4 ++--
&gt;  1 file changed, 2 insertions(+), 2 deletions(-)
&gt;
&gt; diff --git c/t/lib-git-svn.sh w/t/lib-git-svn.sh
&gt; index 2fde2353fd..24c15d17eb 100644
&gt; --- c/t/lib-git-svn.sh
&gt; +++ w/t/lib-git-svn.sh
&gt; @@ -27,13 +27,13 @@ export svnrepo
&gt;  svnconf=$PWD/svnconf
&gt;  export svnconf
&gt;  
&gt; +x=0
&gt;  perl -w -e &#34;
&gt;  use SVN::Core;
&gt;  use SVN::Repos;
&gt;  \$SVN::Core::VERSION gt &#39;1.1.0&#39; or exit(42);
&gt;  system(qw/svnadmin create --fs-type fsfs/, \$ENV{svnrepo}) == 0 or exit(41);
&gt; -&#34; &gt;&#38;3 2&gt;&#38;4
&gt; -x=$?
&gt; +&#34; &gt;&#38;3 2&gt;&#38;4 || x=$?
&gt;  if test $x -ne 0
&gt;  then
&gt;  	if test $x -eq 42; then
</span>
The above is queued as a squash fix-up on top of the topic, but with
the topic merged to &#39;seen&#39;, we seem to be getting a CI failure that
appears specific to macOS.  Compare the failing

  <a
href="https://github.com/git/git/actions/runs/24371204585">https://github.com/git/git/actions/runs/24371204585</a> (aa13593)

with the same tree without the topic

  <a
href="https://github.com/git/git/actions/runs/24369661492">https://github.com/git/git/actions/runs/24369661492</a> (ad8b884)

The only differences between the commits are

$ git diff --compact-summary ad8b884 aa13593
 t/lib-git-daemon.sh                | 13 ++++++++++---
 t/lib-git-svn.sh                   |  7 +++----
 t/lib-httpd.sh                     |  3 +--
 t/t0005-signals.sh                 |  4 ++--
 t/t0008-ignores.sh                 |  4 ++--
 t/t1301-shared-repo.sh             |  2 +-
 t/t3600-rm.sh                      |  2 +-
 t/t4032-diff-inter-hunk-context.sh | 14 ++++++++------
 t/t6002-rev-list-bisect.sh         | 17 ++++++++++-------
 t/t7450-bad-git-dotfiles.sh        | 24 +++++++++++++-----------
 t/t7508-status.sh                  |  4 ++--
 t/t9138-git-svn-authors-prog.sh    |  4 ++--
 t/t9200-git-cvsexportcommit.sh     |  3 +--
 t/t9400-git-cvsserver-server.sh    |  5 +++--
 t/t9401-git-cvsserver-crlf.sh      |  4 ++--
 t/t9402-git-cvsserver-refs.sh      |  4 ++--
 t/t9902-completion.sh              |  2 +-
 t/test-lib-functions.sh            | 12 ++++++++----
 t/test-lib.sh                      |  8 ++++++--
 19 files changed, 78 insertions(+), 58 deletions(-)

which does match what is contained in this topic.


</pre></div></content></entry><entry><author><name>kawai-m</name><email>kawai-m@tr-advanced.co.jp</email></author><title>Subject: Inquiry: Git versions you provide and Windows 11 compatibility</title><updated>2026-04-14T01:07:29Z</updated><link
href="https://lore.kernel.org/git/OSCPR01MB134507F2EDA90C775EF1DC571EC252@OSCPR01MB13450.jpnprd01.prod.outlook.com/"/><id>urn:uuid:cccc35a9-586b-91ec-7c78-2831e9957640</id><content
type="xhtml"><div
xmlns="http://www.w3.org/1999/xhtml"><pre
style="white-space:pre-wrap">Dear Git Development Team,

Thank you for your continued support.

My name is Kawai from the Advanced Engineering Department 1 at Tokai Rika Advanced Co., Ltd.

I would like to confirm the following regarding Git. As part of our migration from Windows 10 to Windows 11, we are investigating whether Git can be used on Windows 11 in the same way as before the upgrade.

Could you please let us know whether the following software versions can be used on Windows 11 without any restrictions?

Git version 2.51.1
Git version 2.26.0
Git version 2.29.2.2
Git version 2.32.0
Git version 2.32.0.2

We apologize for the inconvenience, but we would appreciate your confirmation.

Sincerely,
Kawai
Advanced Engineering Department 1
Tokai Rika Advanced Co., Ltd.
/////////////////////////////////////////////////////////////////////////////////
&#26412;&#12513;&#12540;&#12523;&#12539;&#28155;&#20184;&#36039;&#26009;&#12395;&#27231;&#23494;&#20107;&#38917;&#12364;&#21547;&#12414;&#12428;&#12390;&#12356;&#12427;&#22580;&#21512;&#12364;&#12354;&#12426;&#12289;&#21462;&#25201;&#12356;&#12395;&#12399;&#21313;&#20998;&#12372;&#37197;&#24942;&#39000;&#12356;&#12414;&#12377;
&#65308;&#12513;&#12540;&#12523;&#12481;&#12455;&#12483;&#12463;&#65310;&#12539;&#12539;&#12539;&#65327;&#65323;&#12394;&#12425;&#12304;&#12295;&#12305;&#12289;&#35442;&#24403;&#12375;&#12394;&#12356;&#22580;&#21512;&#12399;&#12304;&#8722;&#12305;
&#12304;&#12295;&#12305;&#23458;&#20808;&#27231;&#23494;&#24773;&#22577;&#28431;&#12360;&#12356;&#65288;&#20363;&#65306;&#26032;&#22411;&#36554;&#21517;&#12539;&#26032;&#12464;&#12524;&#12540;&#12489;&#12289;&#38283;&#30330;&#26085;&#31243;&#31561;&#65289;&#12398;&#24656;&#12428;&#12399;&#12394;&#12356;&#12363;
&#12304;&#8722;&#12305;&#31038;&#22806;&#23451;&#12391;&#28155;&#20184;&#12501;&#12449;&#12452;&#12523;&#12395;&#27231;&#23494;&#24773;&#22577;&#12434;&#21547;&#12416;&#22580;&#21512;&#12289;&#12497;&#12473;&#12527;&#12540;&#12489;&#12434;&#35373;&#23450;&#12375;&#21029;&#12513;&#12540;&#12523;&#12391;&#36865;&#20449;&#12375;&#12383;&#12363;
/////////////////////////////////////////////////////////////////////////////////
----------------------------------------------------
&#26666;&#24335;&#20250;&#31038;&#26481;&#28023;&#29702;&#21270;&#12450;&#12489;&#12496;&#12531;&#12473;&#12488;&#12288;&#31532;1&#25216;&#34899;&#37096;
&#27827;&#21512;&#12288;&#20449;
TEL&#65306;070-8848-1712 (&#20869;&#32218;&#65306;889-2068)
FAX&#65306;052-551-8623
&#12306;450-0002
&#21517;&#21476;&#23627;&#24066;&#20013;&#26449;&#21306;&#21517;&#39365;4&#19969;&#30446;5&#30058;28&#21495; &#26716;&#36890;&#35914;&#30000;&#12499;&#12523;4F
e-mail kawai-m@tr-advanced.co.jp
URL <a
href="http://www.tr-advanced.co.jp/">http://www.tr-advanced.co.jp/</a>
----------------------------------------------------



</pre></div></content></entry><entry><author><name>Taylor Blau</name><email>me@ttaylorr.com</email></author><title>[PATCH 8/8] pack-bitmap: prevent pattern leak on pseudo-merge re-assignment</title><updated>2026-04-13T23:57:03Z</updated><link
href="https://lore.kernel.org/git/8f4e017095210afb79e547832f50bc8fb51017bc.1776124589.git.me@ttaylorr.com/"/><id>urn:uuid:9d8aefb0-6f10-413e-f9de-cd9972a49646</id><thr:in-reply-to
ref="urn:uuid:a11499ff-69c2-981a-85d4-090bb2d7f398"
href="https://lore.kernel.org/git/cover.1776124588.git.me@ttaylorr.com/"/><content
type="xhtml"><div
xmlns="http://www.w3.org/1999/xhtml"><pre
style="white-space:pre-wrap">When &#34;bitmapPseudoMerge.*.pattern&#34; appears more than once for the same
group, `pseudo_merge_config()` frees the old `regex_t *` pointer
but does not call `regfree()` on it first. This leaks whatever internal
state `regcomp()` allocated.

The final cleanup path in `pseudo_merge_group_release()` does call
`regfree()` before `free()`, so only the intermediate replacement is
affected.

Fix this by guarding the replacement with a NULL check and calling
`regfree()` before `free()` when the pointer is non-NULL.

Signed-off-by: Taylor Blau &lt;me@ttaylorr.com&gt;
---
 pseudo-merge.c                  |  5 ++++-
 t/t5333-pseudo-merge-bitmaps.sh | 30 ++++++++++++++++++++++++++++++
 2 files <a href="https://lore.kernel.org/git/8f4e017095210afb79e547832f50bc8fb51017bc.1776124589.git.me@ttaylorr.com/#related">changed</a>, 34 insertions(+), 1 deletion(-)

<span
class="head">diff --git a/pseudo-merge.c b/pseudo-merge.c
index 75bed043602..22b8600d689 100644
--- a/pseudo-merge.c
+++ b/pseudo-merge.c
</span><span
class="hunk">@@ -150,7 +150,10 @@ static int pseudo_merge_config(const char *var, const char *value,
</span> 	if (!strcmp(key, &#34;pattern&#34;)) {
 		struct strbuf re = STRBUF_INIT;
 
<span
class="del">-		free(group-&gt;pattern);
</span><span
class="add">+		if (group-&gt;pattern) {
+			regfree(group-&gt;pattern);
+			free(group-&gt;pattern);
+		}
</span> 		if (*value != &#39;^&#39;)
 			strbuf_addch(&#38;re, &#39;^&#39;);
 		strbuf_addstr(&#38;re, value);
<span
class="head">diff --git a/t/t5333-pseudo-merge-bitmaps.sh b/t/t5333-pseudo-merge-bitmaps.sh
index 46e8e6a8ea1..34d432ce76d 100755
--- a/t/t5333-pseudo-merge-bitmaps.sh
+++ b/t/t5333-pseudo-merge-bitmaps.sh
</span><span
class="hunk">@@ -662,4 +662,34 @@ test_expect_success &#39;sampleRate=0 does not cause division by zero&#39; &#39;
</span> 	)
 &#39;
 
<span
class="add">+test_expect_success &#39;duplicate pseudo-merge pattern does not leak&#39; &#39;
+	git init pseudo-merge-dup-pattern &#38;&#38;
+	test_when_finished &#34;rm -fr pseudo-merge-dup-pattern&#34; &#38;&#38;
+
+	(
+		cd pseudo-merge-dup-pattern &#38;&#38;
+
+		test_commit_bulk 64 &#38;&#38;
+		tag_everything &#38;&#38;
+		git repack -ad &#38;&#38;
+
+		pack=$(ls .git/objects/pack/pack-*.pack) &#38;&#38;
+
+		# Set the same group&#39;\&#39;&#39;s pattern twice. The second
+		# assignment should cleanly release the compiled regex
+		# from the first without leaking.
+		git config bitmapPseudoMerge.test.pattern &#34;refs/tags/&#34; &#38;&#38;
+		git config --add bitmapPseudoMerge.test.pattern &#34;refs/tags/&#34; &#38;&#38;
+		git config bitmapPseudoMerge.test.maxMerges 1 &#38;&#38;
+		git config bitmapPseudoMerge.test.threshold now &#38;&#38;
+		git config bitmapPseudoMerge.test.stableThreshold never &#38;&#38;
+
+		git rev-parse HEAD~63 |
+		test-tool bitmap write &#34;$(basename $pack)&#34; &#38;&#38;
+
+		test_pseudo_merges &gt;merges &#38;&#38;
+		test_line_count = 1 merges
+	)
+&#39;
+
</span> test_done
-- 
2.54.0.rc1.73.g8f4e0170952
</pre></div></content></entry><entry><author><name>Taylor Blau</name><email>me@ttaylorr.com</email></author><title
type="html">[PATCH 7/8] pack-bitmap: reject pseudo-merge &#34;sampleRate&#34; of 0</title><updated>2026-04-13T23:57:00Z</updated><link
href="https://lore.kernel.org/git/1b0f7295c21bf6240bef975e5f3fb9da685f29d3.1776124589.git.me@ttaylorr.com/"/><id>urn:uuid:0c9d280c-73b0-93f9-ec9c-d57bcba9406e</id><thr:in-reply-to
ref="urn:uuid:a11499ff-69c2-981a-85d4-090bb2d7f398"
href="https://lore.kernel.org/git/cover.1776124588.git.me@ttaylorr.com/"/><content
type="xhtml"><div
xmlns="http://www.w3.org/1999/xhtml"><pre
style="white-space:pre-wrap">The &#34;bitmapPseudoMerge.*.sampleRate&#34; configuration controls what
fraction of unstable commits are included in each pseudo-merge group.
The config validation accepts values in the range `[0, 1]`, but a value
of exactly 0 causes a division by zero in `select_pseudo_merges_1()`:

    if (j % (uint32_t)(1.0 / group-&gt;sample_rate))

When `sample_rate` is 0, `1.0 / 0.0` produces `+inf`, and casting
infinity to `uint32_t` is undefined behavior in C. On most platforms
this yields 0, making the subsequent modulo operation (`j % 0`) a
fatal arithmetic trap.

This path was not previously reachable because an earlier bug caused
all pseudo-merge candidates to be classified as &#34;stable&#34; (where the
sampling rate is not used), regardless of their actual commit date. Now
that the date classification is fixed, the unstable path is exercised
and the division by zero can fire.

Fix this by changing the validation to require a strict lower bound and
thus reject 0.

Signed-off-by: Taylor Blau &lt;me@ttaylorr.com&gt;
---
 pseudo-merge.c                  | 4 ++--
 t/t5333-pseudo-merge-bitmaps.sh | 2 +-
 2 files <a href="https://lore.kernel.org/git/1b0f7295c21bf6240bef975e5f3fb9da685f29d3.1776124589.git.me@ttaylorr.com/#related">changed</a>, 3 insertions(+), 3 deletions(-)

<span
class="head">diff --git a/pseudo-merge.c b/pseudo-merge.c
index d79e5fb649a..75bed043602 100644
--- a/pseudo-merge.c
+++ b/pseudo-merge.c
</span><span
class="hunk">@@ -169,8 +169,8 @@ static int pseudo_merge_config(const char *var, const char *value,
</span> 		}
 	} else if (!strcmp(key, &#34;samplerate&#34;)) {
 		group-&gt;sample_rate = git_config_double(var, value, ctx-&gt;kvi);
<span
class="del">-		if (!(0 &lt;= group-&gt;sample_rate &#38;&#38; group-&gt;sample_rate &lt;= 1)) {
-			warning(_(&#34;%s must be between 0 and 1, using default&#34;), var);
</span><span
class="add">+		if (!(0 &lt; group-&gt;sample_rate &#38;&#38; group-&gt;sample_rate &lt;= 1)) {
+			warning(_(&#34;%s must be between 0 (exclusive) and 1, using default&#34;), var);
</span> 			group-&gt;sample_rate = DEFAULT_PSEUDO_MERGE_SAMPLE_RATE;
 		}
 	} else if (!strcmp(key, &#34;threshold&#34;)) {
<span
class="head">diff --git a/t/t5333-pseudo-merge-bitmaps.sh b/t/t5333-pseudo-merge-bitmaps.sh
index 63d2f64361d..46e8e6a8ea1 100755
--- a/t/t5333-pseudo-merge-bitmaps.sh
+++ b/t/t5333-pseudo-merge-bitmaps.sh
</span><span
class="hunk">@@ -639,7 +639,7 @@ test_expect_success &#39;pseudo-merge commits are correctly classified by date&#39; &#39;
</span> 	)
 &#39;
 
<span
class="del">-test_expect_failure &#39;sampleRate=0 does not cause division by zero&#39; &#39;
</span><span
class="add">+test_expect_success &#39;sampleRate=0 does not cause division by zero&#39; &#39;
</span> 	git init pseudo-merge-sample-rate-zero &#38;&#38;
 	test_when_finished &#34;rm -fr pseudo-merge-sample-rate-zero&#34; &#38;&#38;
 	(
-- 
2.54.0.rc1.73.g8f4e0170952

</pre></div></content></entry><entry><author><name>Taylor Blau</name><email>me@ttaylorr.com</email></author><title>[PATCH 6/8] pack-bitmap: parse commits in `find_pseudo_merge_group_for_ref()`</title><updated>2026-04-13T23:56:57Z</updated><link
href="https://lore.kernel.org/git/6d74c0a177a8d910aa0394add38f5d57573eebd9.1776124589.git.me@ttaylorr.com/"/><id>urn:uuid:ed8b8224-9db8-dca5-dd1f-22f7bf9a58b9</id><thr:in-reply-to
ref="urn:uuid:a11499ff-69c2-981a-85d4-090bb2d7f398"
href="https://lore.kernel.org/git/cover.1776124588.git.me@ttaylorr.com/"/><content
type="xhtml"><div
xmlns="http://www.w3.org/1999/xhtml"><pre
style="white-space:pre-wrap">`find_pseudo_merge_group_for_ref()` uses the commit&#39;s date to classify
it as either &#34;stable&#34; (older than the stable threshold) or &#34;unstable&#34;
(otherwise).

However, to find the relevant commit from a given OID, the function
`find_pseudo_merge_group_for_ref()` uses `lookup_commit()` which does
not parse commits.

Because an unparsed commit has its &#34;date&#34; set to zero, every candidate
is placed in the &#34;stable&#34; bucket regardless of its actual committer
timestamp. This means the `bitmapPseudoMerge.*.threshold` and
`stableThreshold` configuration options have no effect: the
stable/unstable split is always determined by comparing against zero
rather than the real commit date.

The net result is that pseudo-merge groups are partitioned by
`stableSize` instead of the intended decay-based sizing, and the
`sampleRate` knob (which only applies to the unstable path) is never
exercised.

Fix this by calling `repo_parse_commit()` after `lookup_commit()`,
bailing out of the callback if parsing fails.

The corresponding test configures two psesteps.step2.outputs.secondwordhttp://www.w3.org/2005/Atom
Content we accept:
* Technical and grammatical corrections
* Typo fixes
* Expanded explanations of existing products or features, when the expansion has a compelling reason
* New content filling important gaps in our documentation. For example, [this pull request](https://github.com/github/docs/pull/38048) added a useful section on security hardening for GitHub Actions.

Content we do not currently accept:
* Edits purely for tone, readability, or efficiency
* Topics that are too niche or a matter of personal preference
* Changes to the underlying site and workflows

These are general guidelines, but if you’re not sure what category your proposed change would fall under, feel free to open an issue to discuss it with us!

## Getting started

📚 **Primary resource:** [docs.github.com/en/contributing](https://docs.github.com/en/contributing) contains our complete contribution workflow and policies.

For repository-specific information:
- See [the introduction to working in the docs repository](/contributing/README.md) :confetti_ball:
- Check our [types of contributions](/contributing/types-of-contributions.md) we accept
- Review our markdown style guidelines in the `/contributing` directory

### Writing style guidelines

When contributing content, please follow these key principles from our [style guide](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide):

- **Clarity and simplicity**: The goal of our writing style is clarity and simplicity.
- **Meaning over grammar**: Grammatical correctness is important, but not as important as clarity and meaning.
- **Second person**: The docs use second-person ("you") to communicate directly with readers.
- **Inclusive language**: Use inclusive language by not assuming gender or ability level, and by avoiding slang and idioms.
- **Accessible technical language**: Jargon is sometimes necessary, but don't assume every reader has your technical expertise.
- **Active voice**: Use active voice wherever possible. Active voice means avoiding "be" verbs like "is" or "are" when you can, but also choosing more dynamic verbs to get your point across. "Press (a key)" is less dynamic than "tap (a key)," for example.
- **Clear terminology**: Avoid technical abbreviations like "repo" and "PR," and Latin abbreviations like "i.e." and "e.g."

For complete style guidance, see our [style guide](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide).

### Issues

**For detailed issue guidelines, see [docs.github.com/en/contributing](https://docs.github.com/en/contributing).**

#### Repository-specific notes:
- Search [existing issues](https://github.com/github/docs/issues) before creating new ones
- Use our [label reference](https://docs.github.com/en/contributing/collaborating-on-github-docs/label-reference) to categorize appropriately
- Follow the issue templates provided in this repository

### Make Changes

**Complete change guidelines are available at [docs.github.com/en/contributing](https://docs.github.com/en/contributing).**

#### Repository-specific options:

**Make changes in the UI:** Click **Make a contribution** at the bottom of any docs page for small changes like typos or broken links.

<img src="/contributing/images/contribution_cta.png" />

**Make changes in a codespace:** See "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)" for documentation-specific setup.

**Make changes locally:** 
1. Fork the repository (see [official forking guide](https://docs.github.com/en/contributing))
2. Install Node.js at the version specified in `.node-version` (see [development guide](../contributing/development.md))
3. Create a working branch and start with your changes

### Commit your update

Follow the guidelines at [docs.github.com/en/contributing](https://docs.github.com/en/contributing) for commit best practices. 

Use our "[Self review checklist](https://docs.github.com/en/contributing/collaborating-on-github-docs/self-review-checklist)" before committing.

### Pull Request

**Complete pull request (PR) guidelines:** [docs.github.com/en/contributing](https://docs.github.com/en/contributing)

**Repository-specific notes:**
- Fill the "Ready for review" template
- [Link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if applicable
- Enable [maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork)

A Docs team member will review following our [standard review process](https://docs.github.com/en/contributing).

### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:.

Once merged, your contributions will be visible on [GitHub docs](https://docs.github.com/en). 

Continue contributing using our [types of contributions guide](/contributing/types-of-contributions.md) or explore more opportunities at [docs.github.com/en/contributing](https://docs.github.com/en/contributing).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
