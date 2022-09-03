---
title: Managing releases in a repository
intro: You can create releases to bundle and deliver iterations of a project to users.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
---
## About release management

You can create new releases with release notes, @mentions of contributors, and links to binary files, as well as edit or delete existing releases.

{% ifversion fpt or ghec %}
You can also publish an action from a specific release in {% data variables.product.prodname_marketplace %}. For more information, see "[Publishing an action in the {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace)."

You can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)."
{% endif %}

## Creating a release

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Click **Draft a new release**.

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}![Releases draft button](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Releases draft button](/assets/images/help/releases/draft_release_button.png){% endif %}
4. {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}Click **Choose a tag**, type{% else %}Type{% endif %} a version number for your release{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}, and press **Enter**{% endif %}. Alternatively, select an existing tag.

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
5. If you are creating a new tag, click **Create new tag**.

   ![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
   {% else %}
   ![Releases tagged version](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
5. If you have created a new tag, use the drop-down menu to select the branch that contains the project you want to release.

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png)
   {% else %}![Releases tagged branch](/assets/images/enterprise/releases/releases-tag-branch.png){% endif %}
{%- data reusables.releases.previous-release-tag %}
6. Type a title and description for your release.
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %}
   If you @mention any {% data variables.product.product_name %} users in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users.
   {%- endif %}
   {% ifversion fpt or ghec or ghes > 3.3 %} Alternatively, you can automatically generate your release notes by clicking {% ifversion previous-release-tag %}**Generate release notes**{% else %}**Auto-generate release notes**{% endif %}.{% endif %}{% ifversion previous-release-tag %}
   ![Releases description](/assets/images/help/releases/releases_description_auto.png){% else %}
   ![Releases description](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}
1. Optionally, to include binary files such as compiled programs in your release, drag and drop or manually select files in the binaries box.
   ![Providing a DMG with the Release](/assets/images/help/releases/releases_adding_binary.gif)
2. To notify users that the release is not ready for production and may be unstable, select **This is a pre-release**.
   ![Checkbox to mark a release as prerelease](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion discussions %}
1. Optionally, if {% data variables.product.prodname_discussions %} are enabled in the repository, select **Create a discussion for this release**, then select the **Category** drop-down menu and click a category for the release discussion.
  ![Checkbox to create a release discussion and drop-down menu to choose a category](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. If you're ready to publicize your release, click **Publish release**. To work on the release later, click **Save draft**.
   ![Publish release and Draft release buttons](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4972 or ghae-issue-4974 %}
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[Viewing your repository's releases and tags](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
   ![Published release with @mentioned contributors](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
   {% else %}
   ![Published release with @mentioned contributors](/assets/images/help/releases/releases-overview-with-contributors.png)
   {% endif %}
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release.

   ```shell
   gh release create <em>tag</em>
   ```

2. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_release_create). For example, this command creates a prerelease with the specified title and notes.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae-issue-4972 or ghec %}
If you @mention any {% data variables.product.product_name %} users in the notes, the published release on {% data variables.product.prodname_dotcom_the_website %} will include a **Contributors** section with an avatar list of all the mentioned users.
{% endif %}

{% endcli %}

## Editing a release

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. On the right side of the page, next to the release you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}.
  ![Edit a release](/assets/images/help/releases/edit-release-pencil.png)
{% else %}
3. On the right side of the page, next to the release you want to edit, click **Edit release**.
  ![Edit a release](/assets/images/help/releases/edit-release.png)
{% endif %}
4. Edit the details for the release in the form, then click **Update release**.{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %} If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.{% endif %}
  ![Update a release](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Releases cannot currently be edited with {% data variables.product.prodname_cli %}.

{% endcli %}

## Deleting a release

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. On the right side of the page, next to the release you want to delete, click {% octicon "trash" aria-label="The trash icon" %}.
  ![Delete a release](/assets/images/help/releases/delete-release-trash.png)
{% else %}
3. Click the name of the release you wish to delete.
  ![Link to view release](/assets/images/help/releases/release-name-link.png)
4. In the upper-right corner of the page, click **Delete**.
  ![Delete release button](/assets/images/help/releases/delete-release.png)
{% endif %}
5. Click **Delete this release**.
  ![Confirm delete release](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation.

   ```shell
   gh release <em>tag</em> +<<live>>	Notes	2022	Notes	2022 % of Income	$27,571,307,641,451 	$27,571,307,641,451 
						
Income						
$275,713,076,415 	Note: 1	212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
Total Income		212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
						
Gross Profit		212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
						
Operating Expenses						
620 - Entertainment		1,270,014,771.11		0.60%	1,270,014,771.11	1,270,014,771.11
676 - Dues & Subscriptions		(64,454,859,587.62)		-30.33%	(64,454,859,587.62)	(64,454,859,587.62)
Total Operating Expenses		(63,184,844,816.51)		-29.73%	(63,184,844,816.51)	(63,184,844,816.51)
						
Operating Income		275,713,076,414.51	Note: 0	129.73%	275,713,076,414.51	275,713,076,414.51
						
Net Income		275,713,076,414.51		129.73%	275,713,076,414.51	275,713,076,414.51
<<feed=.RSS>>Report			USOA ABS Top Parents				

							
Rank	Parent 1				Issuance ($m) 2	% of Issuance	Transactions
1	Blackstone Credit (fka GSO Capital Partners)				$6,648.1	6.4%	13
2	Palmer Square Capital Management				$3,761.7	3.6%	7Sector / Subsector			Collateralized Loans (CLOs) / -				
Period			Year-to-Date 2022				
Export Timestamp			Aug 24, 2022 5:27 pm ET				
3	Prudential Financial Inc				$3,524.3	3.4%	8
4	Apollo Global Management				$3,516.1	3.4%	7
5	Ares Management LP				$3,510.8	3.4%	8
6	Credit Suisse Asset Management (CSAM)				$3,404.8	3.3%	6
7	Bain Capital LP				$3,349.0	3.2%	7
8	Elmwood Asset Management				$3,348.0	3.2%	7
9	GC Advisors (Golub Capital)				$3,310.5	3.2%	6
10	Neuberger Berman Investment Advisers				$3,173.8	3.1%	6
11	KKR & Co Inc				$2,946.3	2.8%	7
12	Octagon Credit Investors				$2,896.5	2.8%	5
13	Carlyle Group				$2,653.8	2.6%	6
14	BlackRock Inc				$2,604.9	2.5%	6
15	CIFC Asset Management				$2,569.5	2.5%	6
16	TIAA				$2,344.3	2.3%	6
17	Oak Hill Advisors				$1,891.7	1.8%	4
18	GoldenTree Asset Management LP				$1,880.6	1.8%	4
19	AGL Credit Management LP				$1,880.1	1.8%	5
20	Clearlake Capital Group LP (fka WhiteStar Asset Management)				$1,830.5	1.8%	4
21	ONEX Corp				$1,564.8	1.5%	4
22	First Eagle Investment				$1,460.0	1.4%	4
23	CVC Capital Partners				$1,409.4	1.4%	3
24	Assured Guaranty Ltd (fka BlueMountain Capital Management)				$1,338.8	1.3%	3
25	Morgan Stanley				$1,244.5	1.2%	3
	All Others				$35,343.4	34.2%	95
	Total				$103,405.9	100.0%	240
<<live>>	Notes	2022	Notes	2022 % of Income	$27,571,307,641,451 	$27,571,307,641,451 
						
Income						
$275,713,076,415 	Note: 1	212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
Total Income		212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
						
Gross Profit		212,528,231,598.00		100.00%	212,528,231,598.00	212,528,231,598.00
						
Operating Expenses						
620 - Entertainment		1,270,014,771.11		0.60%	1,270,014,771.11	1,270,014,771.11
676 - Dues & Subscriptions		(64,454,859,587.62)		-30.33%	(64,454,859,587.62)	(64,454,859,587.62)
Total Operating Expenses		(63,184,844,816.51)		-29.73%	(63,184,844,816.51)	(63,184,844,816.51)
						
Operating Income		275,713,076,414.51	Note: 0	129.73%	275,713,076,414.51	275,713,076,414.51
						
Net Income		275,713,076,414.51		129.73%	275,713,076,414.51	275,713,076,414.51
<<feed=.RSS>>Report			USOA ABS Top Parents								
Source: variety of public and private sources. 							
1. Parent refers to the ultimate parent or originator of the loans and receivables.							
2. Issuance excludes securities that were retained by the sponsor or an affiliate.							
							
See a mistake? Let us know: support@finsight.com							
							
Disclaimer: The report is subject to Finsight's Terms of Use and Privacy Policy, available at www.finsight.com. Information found here is not a solicitation or recommendation to buy, sell or hold securities. Finsight is not offering securities for sale. In addition, nothing contained in this report creates any contract or right of action against Finsight. This report is offered solely as a service to current and potential customers of Finsight and we make no warranties, expressed or implied, regarding the accuracy of the information contained herein.							
							
							
							
							
							
							
©Finsight Group, Inc. All rights reserved.							
xslmnlxlsvn.json.jpng=package.json=version="1.0" encoding="ISO-8859-1" ?><feed xmlns="http://www.w3.org/2005/Atom"><title>Latest Filings - Fri, 02 Sep 2022 01:52:38 EDT</title><link rel="alternate" href="/cgi-bin/browse-edgar?action=getcurrent"/><link rel="self" href="/cgi-bin/browse-edgar?action=getcurrent"/><id>https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent</id><author><name>ZACHRY_TYLER_WOOD_III</name><email>ZachryTWood111@www.chase.com</email></author><updated>2022-09-02T01:52:38-04:00</updated><entry><title>4 - CHASE ADAM (0001254843) (Reporting)</title><link rel="alternate" type="text/html" href="https://www.sec.gov/Archives/edgar/data/1254843/000141588922009229/0001415889-22-009229-index.htm"/><summary type="html"> <b>Filed:</b> 2022-09-01 <b>AccNo:</b> 0001415889-22-009229 <b>Size:</b> 6 KB</summary><updated>2022-09-01T17:06:07-04:00</updated><category scheme="https://www.sec.gov/" label="form type" term="4"/><id>urn:tag:sec.gov,2008:accession-number=0001415889-22-009229</id></entry><entry><title>4 - CHASE CORP (0000830524) (Issuer)</title><link rel="alternate" type="text/html" href="https://www.sec.gov/Archives/edgar/data/830524/000141588922009229/0001415889-22-009229-index.htm"/><summary type="html"> <b>Filed:</b> 2022-09-01 <b>AccNo:</b> 0001415889-22-009229 <b>Size:</b> 6 KB</summary><updated>2022-09-01T17:06:07-04:00</updated><category scheme="https://www.sec.gov/" label="form type" term="4"/><id>urn:tag:sec.gov,2008:accession-number=0001415889-22-009229</id></entry><entry><title>8-K - CHASE CORP (0000830524) (Filer)</title><link rel="alternate" type="text/html" href="https://www.sec.gov/Archives/edgar/data/830524/000155837022014123/0001558370-22-014123-index.htm"/><summary type="html"> <b>Filed:</b> 2022-09-01 <b>AccNo:</b> 0001558370-22-014123 <b>Size:</b> 269 KB<br>Item 5.02: Departure of Directors or Certain Officers; Election of Directors; Appointment of Certain Officers: Compensatory Arrangements of Certain Officers<br>Item 9.01: Financial Statements and Exhibits</summary><updated>2022-09-01T16:28:29-04:00</updated><category scheme="https://www.sec.gov/" label="form type" term="8-K"/><id>urn:tag:sec.gov,2008:accession-number=0001558370-22-014123</id></entry></feed>	price	market_cap	total_volume
Longitude+latitude=- [22/7]'*''*'#' ':'':'Approves':''.''*''*'
   ```

{% endcli %}
