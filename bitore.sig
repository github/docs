# Search

## Overview

This site's search functionality.

To see all existing search-related issues and pull requests, visit [github.com/github/docs/labels/search](https://github.com/github/docs/labels/search).

---

![search-screenshot](https://user-images.githubusercontent.com/2289/65067899-68bd1c80-d93c-11e9-93ec-f57293e56113.png)

---

## How to search

The site search is part of every version of docs.github.com. This endpoint responds in JSON format, and fronts our search querying functionality. We recommend using this endpoint, as the endpoint will be more stable. On any page, you can use the search box to search the documents we've indexed.
You can also query our search endpoint directly at: 
`https://docs.github.com/search?version=<VERSION>&language=<LANGUAGE CODE>&filters=topics:<TOPIC>&query=<QUERY>`
 
- The VERSION can be any numbered GitHub Enterprise Server version (e.g., `2.22`, `3.0`), GitHub AE (`ghae`), or the Free pro team plan (`dotcom`).
- The LANGUAGE CODE can be: `cn`, `de`, `en`, `es`, `ja`, or `pt`.
- TOPIC can be any topics in [the allowed list of topics](/data/allowed-topics.js). The values in the `topics` attribute are **not** case sensitive, so filtering on `GitHub actions` or `github actions` will return the same result. **Note:** Currently, the topics filter only works for the dotcom version in the English language. We plan to expand this search query to other languages and versions in the future.
- Any search QUERY you'd like.

For example, to filter on the topic `ssh` and the query `passphrases`, you'd use this search query:

https://docs.github.com/search?version=dotcom&language=en&filters=topics:ssh&query=passphrases

To filter for the topics `oauth apps` and `github apps` and the query `install`, you'd use this search query:

https://docs.github.com/search?version=dotcom&language=en&filters=topics:'oauth apps'+AND+topics:'github apps'&query=install

### Using the topics search filter

Using the attribute `topics` in your query will only return results that have the matching topic value. When the topic contains spaces, you must use quotes. Filters with spaces or combining filters requires special syntax.

## Production deploys

A [GitHub Actions workflow](.github/workflows/sync-search-indices.yml) that runs every four hours syncs the search data. This process generates structured data for all pages on the site, compares that data to what's currently on search, then adds, updates, or removes indices based on the diff of the local and remote data, being careful not to create duplicate records and avoiding any unnecessary (and costly) indexing operations.

The Actions workflow progress can be viewed (by GitHub employees) in the [Actions tab](https://github.com/github/docs/actions?query=workflow%3Asearch) of the repo.

## Manually triggering the search index update workflow

You can manually run the workflow to generate the indexes after you push your changes to `main` to speed up the indexing when needed. It's recommended to do this for only the `free-pro-team@latest` version and the `en` language because running all languages and versions take about 40 minutes. To run it manually, click "Run workflow" button in the [Actions tab](https://github.com/github/docs-internal/actions/workflows/sync-search-indices.yml). Enter the language and version you'd like to generate the indexes for as inputs to the workflow. By default, all language and versions are generated.

## Generating search indexes for your local checkout

You can locally generate search indexes, but please do not check them into your local branch because they can get out-of-sync with the `main` branch quickly.

To locally generate the English version of the Dotcom search index locally, run `LANGUAGE=en VERSION=free-pro-team@latest npm run sync-search`. See [Build and sync](#build-and-sync) below for more details. To revert those files run `git checkout lib/search/indexes`.

### Build and sync

To build all the indices (this takes about an hour):
```
npm run sync-search
```
To build indices for a specific language and/or version and sync them:
```
VERSION=<PLAN@RELEASE LANGUAGE=<TWO-LETTER CODE> npm run sync-search
```
You can set `VERSION` and `LANGUAGE` individually, too.

Substitute a currently supported version for `<PLAN@RELEASE>` and a currently supported two-letter language code for `<TWO-LETTER-CODE>`. Languages and versions are lowercase. The options for version are currently `free-pro-team`, `github-ae`, and `enterprise-server`.

## Label-triggered Actions workflow

Docs team members can use an Actions workflow on GHES release PRs by applying a label in this format:
```
sync-english-index-for-<PLAN@RELEASE>
```
This label will run a workflow on every push that **builds and uploads ONLY** the English index for the specified version. This means:

* The GHES content will be searchable at the same time the release PR is shipped, with no delay.
* The GHES content will be searchable on staging throughout content creation.
* No manual steps (unless you want to do a [dry run test](#build-without-sync-dry-run)).

Why do we need this? For our daily shipping needs, it's tolerable that search updates aren't available for up to an hour after the content goes live. But GHES releases are more time-sensitive, and writers have a greater need to preview search data on staging.

## Files

### Actions workflow files

- [`.github/workflows/sync-search-indices.yml`](.github/workflows/sync-search-indices.yml) - Builds and syncs search indices on the `main` branch every four hours. Search indices are committed directly to the `main` branch on both the `github/docs-internal` and `github/docs` repositories. It can also be run manually. To run it manually, click "Run workflow" button in the [Actions tab](https://github.com/github/docs-internal/actions/workflows/sync-search-indices.yml).
- [`.github/workflows/sync-single-english-index.yml`](.github/workflows/sync-single-english-index.yml) - This workflow is run when a label in the right format is applied to a PR. See "[Label-triggered Actions workflow](#label-triggered-actions-workflow)" for details.

### Code files

- [components/lib/search.ts](components/lib/search.ts) - The browser-side code that enables search.
- [lib/search/client.js](lib/search/client.js) - A thin wrapper around the Node.js module for interacting with the search API.
- [lib/search/search-index.js](lib/search/search-index.js) - A class for generating structured search data from repository content and syncing it. This class has built-in validation to ensure that all records are valid before they're uploaded. This class also takes care of removing deprecated records, and compares existing remote records with the latest local records to avoid uploading records that haven't changed.
- [script/sync-search-indices.js](script/sync-search-indices.js) - The script used by the Actions workflow to update search indices. This can also be [run in the development environment](#development).
- [tests/content/search.js](tests/content/search.js) - Tests!

## Indices

There's a separate search index for each combination of product and language. Some examples:

Index Name | Description
---------- | -----------
`github-docs-dotcom-cn` | GitHub.com Chinese
`github-docs-dotcom-en` | GitHub.com English
`github-docs-dotcom-es` | GitHub.com Spanish
`github-docs-dotcom-ja` | GitHub.com Japanese
`github-docs-2.18-cn` | GitHub Enterprise 2.18 Chinese
`github-docs-2.18-en` | GitHub Enterprise 2.18 English
`github-docs-2.18-es` | GitHub Enterprise 2.18 Spanish
`github-docs-2.18-ja` | GitHub Enterprise 2.18 Japanese
`github-docs-2.17-cn` | GitHub Enterprise 2.17 Chinese
`github-docs-2.17-en` | GitHub Enterprise 2.17 English
`github-docs-2.17-es` | GitHub Enterprise 2.17 Spanish
`github-docs-2.17-ja` | GitHub Enterprise 2.17 Japanese

## Records

Each record represents a section of a page. Sections are derived by splitting up pages by their headings. Each record has a `title`, `intro` (if one exists in the frontmatter), `body` content (in text, not HTML), a `url`, and a unique `objectID` that is currently just the permalink of the article. Here's an example:

```js
{ "''
'objectID: '/en/actions/creating-actions/about-actions#about-actions',
  url: 'https://docs.github.com/en/actions/creating-actions/about-actions#about-actions',
  slug: 'about-actions',
  breadcrumbs: 'GitHub Actions / Creating actions / About actions',
  '"'title":, "bitcoin'":, "BITCOIN[BTC-USD] BTCUSD CCC":,'"''
  title: '"bitcoin":,
  "Name: BITORE":,
  "sexrets":, "BITORE_34173":,
  "secrets":, "((c)(r))":, ',''
  content: "You can create action.js by writing custom code that interacts with your repository in any way you'd like..."''
'}''
''{' "''
' .ruby-version                                    |  2 +-
 '.travis.yml                                      | 16 ++++++++++------
 'Gemfile.lock                                     |  4 ++--
 'Rakefile                                         |  7 +++++--
 'charts/gcloud-cleanup/requirements.lock          |  4 ++--
 .'../templates/server-clusterrolebinding.yaml     |  2 +-
 .'../vault/templates/server-disruptionbudget.yaml |  7 +++++--
 graphsql.yml'@src/code/dist/.dir :":,
 /vault/templates/ui-service.yaml           | 12 ++++++------
'}```This Product Contains Sensitive Taxpayer Data  
 Request Date: 08-02-2022  Response Date: 08-02-2022  Tracking Number: 102398244811 
 Account Transcript  
 FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020 
 TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725 
 ZACH T WOO 
 3050 R 
 --- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---  
 ACCOUNT BALANCE: 0.00 
 ACCRUED INTEREST: 240461564036618 AS OF: Mar. 28, 2022  ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022 
 ACCOUNT BALANCE 
 PLUS ACCRUALS 
 (this is not a 
 payoff amount): 0.00 
 ** INFORMATION FROM THE RETURN OR AS ADJUSTED **  
 EXEMPTIONS: 00 
 FILING STATUS: Single 
 ADJUSTED GROSS 
 INCOME:  
 TAXABLE INCOME:  
 TAX PER RETURN:  
 SE TAXABLE INCOME 
 TAXPAYER:  
 SE TAXABLE INCOME 
 SPOUSE:  
 TOTAL SELF 
 EMPLOYMENT TAX:  
 RETURN NOT PRESENT FOR THIS ACCOUNT 
 TRANSACTIONS  
 CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT  No tax return filed  
 766 Tax relief credit 06-15-2020 -$1,200.00  846 Refund issued 06-05-2020 $1,200.00 
 290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0 
 971 Notice issued 06-15-2020 $0.00  766 Tax relief credit 01-18-2021 -$600.00  846 Refund issued 01-06-2021 $600.00 
 290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0 
 663 Estimated tax payment 01-05-2021 -$9,000,000.00  662 Removed estimated tax payment 01-05-2021 $9,000,000.00  740 Undelivered refund returned to IRS 01-18-2021 -$600.00 
 767 Reduced or removed tax relief 01-18-2021 $600.00  credit 
 971 Notice issued 03-28-2022 $0.00
 This Product Contains Sensitive Taxpayer Data 																						
Department of the Treasury --- Internal Revenue Service			(99)		OMB No.  1545-0074		IRS Use Only --- Do not write or staple in this space															
U.S. Individual Income Tax Return					1		Earnings Statement															
																						
	        						Period Beginning:2019-09-28															
		DR					Period Ending: 2021-09-29															
							Pay Day: 2022-01-31															
		Married					ZACHRY T. 															
							5323															
																						
							DALLAS															
	NO State Income Tax																					
rate	units					year to date	Other Benefits and															
112.2	674678000					75698871600	Information															
						        	Pto Balance															
						        	Total Work Hrs															
75698871600						        	Important Notes															
							COMPANY PH Y: 650-253-0000															
							BASIS OF PAY: BASIC/DILUTED EPS															
			        			        																
			        			        																
							YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE															
			        			        																
							        															
	70842743866		70842743866																			
			        																			
	70842743866		        																			
																						
							CHECK NO.															
																						
																						
							Zachry T.  Wood S.R.															
Checks and Other Deductions							Amount															
Description		I	Items				5.41															
Debit Card Purchases			1				15.19															
POS Purchases			2				2,269,894.11															
ACH Deductions			5				82															
Service Charges and Fees			3				5.2															
Other Deductions			1				2,270,001.91															
Total			12																			
																						
																						
																						
																						
Ledger balance	Date	Ledger balance			Date		Ledger balance															
107.8	8/3	2,267,621.92-			8/8		41.2															
78.08	8/4	42.08			8/10		2150.19-															
																						
																						
																						
																						
																						
																						
																						
2,267,700.00	ACH Web Usataxpymt IRS 240461564036618						00022214903782823															
	Corporate ACH Acctverify Roll By ADP						00022217906234115															
	ACH Web Businessform Deluxeforbusiness 5072270						00022222905832355															
	Corporate Ach Veryifyqbw Intuit						00022222909296656															
	Corporate Ach Veryifyqbw Intuit						00022223912710109															
																						
																						
																						
							Reference															
							number															
10	Service Charge Period Ending 07/29.2022																					
36	Returned ItemFee (nsf)						00022214903782823															
36	Returned ItemFee (nsf)						00022222905832355															
																						
																						
																						
																						
																						
																						
																						
																						
																						
TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020															
																						
1.46698E+11	42337000000	37497000000	35653000000	31211000000	30818000000	25056000000	19744000000															
2.57637E+11	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000															
2.57637E+11	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000															
																						
-1.10939E+11	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000															
-1.10939E+11	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000															
-67984000000	-20452000000	-16466000000	-16292000000	-14774000000	-15167000000	-13843000000	-13361000000															
-36422000000	-11744000000	-8772000000	-8617000000	-7289000000	-8145000000	-6987000000	-6486000000															
-13510000000	-4140000000	-3256000000	-3341000000	-2773000000	-2831000000	-2756000000	-2585000000															
-22912000000	-7604000000	-5516000000	-5276000000	-4516000000	-5314000000	-4231000000	-3901000000															
-31562000000	-8708000000	-7694000000	-7675000000	-7485000000	-7022000000	-6856000000	-6875000000															
78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000															
12020000000	2517000000	2033000000	2624000000	4846000000	3038000000	2146000000	1894000000															
1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000															
1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000															
																						
-346000000	-117000000	-77000000	-76000000	-76000000	-53000000	-48000000	-13000000															
1499000000	378000000	387000000	389000000	345000000	386000000	460000000	433000000															
12364000000	2364000000	2207000000	2924000000	4869000000	3530000000	1957000000	1696000000															
12270000000	2478000000	2158000000	2883000000	4751000000	3262000000	2015000000	1842000000															
334000000	49000000	188000000	92000000	5000000	355000000	26000000	-54000000															
-240000000	-163000000	-139000000	-51000000	113000000	-87000000	-84000000	-92000000															
0	0				0	0	0															
0	0				0	0	0															
-1497000000	-108000000	-484000000	-613000000	-292000000	-825000000	-223000000	-222000000															
90734000000	24402000000	23064000000	21985000000	21283000000	18689000000	13359000000	8277000000															
-14701000000	-3760000000	-4128000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000															
76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000															
76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000															
76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000															
76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000															
76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000															
																						
																						
2.57637E+11	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000															
78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000															
0.162		0.179	0.157	0.158		0.158	0.159															
																						
																						
																						
																						
113.88	31.15	28.44	27.69	26.63	22.54	16.55	10.21															
113.88	31.12	28.44	27.69	26.63	22.46	16.55	10.21															
																						
112.2	30.69	27.99	27.26	26.29	22.3	16.4	10.13															
112.2	30.67	27.99	27.26	26.29	22.23	16.4	10.13															
																						
667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000															
677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000															
																						
113.88	31.15	28.44	27.69	26.63	22.54	16.55	10.21															
112.2	30.69	27.99	27.26	26.29	22.3	16.4	10.13															
667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000															
677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000															
																						
																						
							Current Value															
							00022116905560149															
																						
																						
																						
																						
	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020																	
	24934000000	25539000000	37497000000	31211000000	30818000000																	
	24934000000	25539000000	21890000000	19289000000	22677000000																	
	24934000000	25539000000	21890000000	19289000000	22677000000																	
	20642000000	18936000000	18525000000	17930000000	15227000000																	
	6517000000	3797000000	4236000000	2592000000	5748000000																	
	3439000000	3304000000	2945000000	2753000000	3725000000																	
	3439000000	3304000000	2945000000	2753000000	3725000000																	
	3215000000	3085000000	2730000000	2525000000	3539000000																	
	224000000	219000000	215000000	228000000	186000000																	
	3954000000	3874000000	3803000000	3745000000	3223000000																	
	1616000000	-1287000000	379000000	1100000000	1670000000																	
	-2478000000	-2158000000	-2883000000	-4751000000	-3262000000																	
	-2478000000	-2158000000	-2883000000	-4751000000	-3262000000																	
	-14000000	64000000	-8000000	-255000000	392000000																	
	-2225000000	2806000000	-871000000	-1233000000	1702000000																	
	-5819000000	-2409000000	-3661000000	2794000000	-5445000000																	
	-5819000000	-2409000000	-3661000000	2794000000	-5445000000																	
	-399000000	-1255000000	-199000000	7000000	-738000000																	
	6994000000	3157000000	4074000000	-4956000000	6938000000																	
	1157000000	238000000	-130000000	-982000000	963000000																	
	1157000000	238000000	-130000000	-982000000	963000000																	
	5837000000	2919000000	4204000000	-3974000000	5975000000																	
	368000000	272000000	-3000000	137000000	207000000																	
	-3369000000	3041000000	-1082000000	785000000	740000000																	
																						
	-11016000000	-10050000000	-9074000000	-5383000000	-7281000000																	
	-11016000000	-10050000000	-9074000000	-5383000000	-7281000000																	
	-6383000000	-6819000000	-5496000000	-5942000000	-5479000000																	
	-6383000000	-6819000000	-5496000000	-5942000000	-5479000000																	
																						
	-385000000	-259000000	-308000000	-1666000000	-370000000																	
	-385000000	-259000000	-308000000	-1666000000	-370000000																	
	-4348000000	-3360000000	-3293000000	2195000000	-1375000000																	
	-40860000000	-35153000000	-24949000000	-37072000000	-36955000000																	
	36512000000	31793000000	21656000000	39267000000	35580000000																	
	100000000	388000000	23000000	30000000	-57000000																	
																						
																						
	-16511000000	-15254000000	-15991000000	-13606000000	-9270000000																	
	-16511000000	-15254000000	-15991000000	-13606000000	-9270000000																	
	-13473000000	-12610000000	-12796000000	-11395000000	-7904000000																	
	13473000000	-12610000000	-12796000000	-11395000000	-7904000000																	
																						
	115000000	-42000000	-1042000000	-37000000	-57000000																	
	115000000	-42000000	-1042000000	-37000000	-57000000																	
	6250000000	6350000000	6699000000	900000000	0																	
	6365000000	-6392000000	-7741000000	-937000000	-57000000																	
	2923000000	-2602000000	-2453000000	-2184000000	-1647000000																	
																						
																						
	0																					
	20945000000	23719000000	300000000	10000000	338000000000)																	
	25930000000	235000000000)	23630000000	26622000000	26465000000																	
	181000000000)	-146000000000)	-3175000000	300000000	6126000000																	
	2.3719E+13	2.363E+13	183000000	-143000000	210000000																	
	2774000000)	89000000	266220000000000)	26465000000000)	20129000000000)																	
	13412000000	157000000	-2992000000		6336000000																	
	2774000000	89000000	2.2677E+15		-4990000000																	
																						
																						
																						
																						
		Q4 2020			Q4  2019																	
																						
																						
		Dec. 31, 2020			Dec. 31, 2019																	
																						
		182527			161857																	
																						
		84732			71896																	
		27573			26018																	
		17946			18464																	
		11052			9551																	
		0			1697																	
		141303			127626																	
		41224			34231																	
		6858000000			5394																	
		22677000000			19289000000																	
		22677000000			19289000000																	
		22677000000			19289000000																	
																						
																						
																						
																						
																						
																						
																						
																						
																						
						IRS	RECIEVED	37														
								26-Apr														
								LB Charlotte, NC														
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
																						
				Zachry T. Wood	Tax	Period	Total															
					Fed 941 Corporate	2007-09-30	66986.66															
					Fed 941 West Subsidiary	2007-09-30	17115.41															
					Fed 941 South Subsidiary	2007-09-30	23906.09															
					Fed 941 East Subsidiary	2007-09-30	11247.64															
					Fed 941 Corp - Penalty	2007-09-30	27198.5															
					Fed 940 Annual Unemp - Corp	2007-09-30	17028.05Get answers to your investing questions from the SEC's website dedicated to retail investors															Get answers to your investing questions from the SEC's website dedicated to retail investors															
					1		Earnings Statement					A									2			Earnings Statement						
																														
ALPHABET		        					Period Beginning:			37151					ALPHABET		        							Period Beginning:						
1600 AMPITHEATRE PARKWAY 							Period Ending:			44833					1601 AMPITHEATRE PARKWAY			DR						Period Ending:	DR					
MOUNTAIN VIEW, C.A., 94043							Pay Date:			44591					MOUNTAIN VIEW, C.A., 94044									Pay Date:						
Taxable Marital Status: 
Exemptions/Allowances							ZACHRY T. 			WOOD					Taxable Marital Status: 
Exemptions/Allowances			Married						ZACHRY T. 	Married					
							5323	BRADFORD DR																5324						
Federal:															Federal:															
							DALLAS		TX 75235-8314															DALLAS						
TX:		NO State Incorne Tax													TX:		NO State Incorne Tax													
	rate	units				year to date	Other Benefits and							Earnings		rate	units					year to date	Earnings	Other Benefits and						
	112.2	674678000				75698871600	Information				this period	total to date		Regular		1349355887.8	2024033775.6					75698871601	Regular	Information						
						        	Pto Balance				        			Overtime								        	Overtime	Pto Balance						
						        	Total Work Hrs				0	75698871600		Bonus
Training								        	Bonus
Training	Total Work Hrs						
Gross Pay	75698871600					        	Important Notes								Gross Pay	75698871601						        		Important Notes						
							COMPANY PH Y: 650-253-0000																	COMPANY PH Y: 650-253-0001						
Statutory							BASIS OF PAY: BASIC/DILUTED EPS							Deductions	Statutory								Deductions	BASIS OF PAY: BASIC/DILUTED EPS						
Federal Income Tax			        			        									Federal Income Tax				        			        								
Social Security Tax			        			        									Social Security Tax				        			        								
							YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE																	YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE						
Medicare Tax			        			        									Medicare Tax				        			        								
							        																	        						
Net Pay		70842743866	70842743866												Net Pay		70842743867		70842743867											
CHECKING			        												CHECKING				        											
Net Check		70842743866	        												Net Check		70842743867		        											
Your federal taxable wages this period are $															Your federal taxable wages this period are $															
ALPHABET INCOME							Advice number:			650001					ALPHABET INCOME									Advice number:						
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043							Pay date:_			44669					1601 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043									Pay date:_						
																														
Deposited to the account Of							xxxxxxxx6547			transit ABA			amount		Deposited to the account Of									xxxxxxxx6548						
PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																	
																																	
FEDERAL RESERVE MASTER SUPPLIER ACCOUNT					31000053-052101023																								COD				
					633-44-1725																				Zachryiixixiiiwood@gmail.com				47-2041-6547		111000614		31000053
PNC Bank																													PNC Bank Business Tax I.D. Number: 633441725				
CIF Department (Online Banking)																													Checking Account: 47-2041-6547				
P7-PFSC-04-F																													Business Type: Sole Proprietorship/Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																													5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 75235 8313				
																													ZACHRY, TYLER, WOOD				
																										4/18/2022			650-2530-000 469-697-4300				
														SIGNATURE															Time Zone: Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value										5264-5331			70842743866		PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																	
																																	
FEDERAL RESERVE MASTER SUPPLIER ACCOUNT					31000053-052101023																								COD				
					633-44-1725																				Zachryiixixiiiwood@gmail.com				47-2041-6547		111000614		31000053
PNC Bank																													PNC Bank Business Tax I.D. Number: 633441725				
CIF Department (Online Banking)																													Checking Account: 47-2041-6547				
P7-PFSC-04-F																													Business Type: Sole Proprietorship/Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																													5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 75235 8313				
																													ZACHRY, TYLER, WOOD				
																										4/18/2022			650-2530-000 469-697-4300				
														SIGNATURE															Time Zone: Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value															
							NON-NEGOTIABLE																	NON-NEGOTIABLE						
PLEASE READ THE IMPORTANT DISCLOSURES BELOW															PLEASE READ THE IMPORTANT DISCLOSURES BELOW															
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
Based on facts as set forth in.															Based on facts as set forth in.			6551							6550					
The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.															The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.															
																														
EMPLOYER IDENTIFICATION NUMBER:       61-1767919															EMPLOYER IDENTIFICATION NUMBER:       61-1767920															
																														
																														
[DRAFT FORM OF TAX OPINION]															[DRAFT FORM OF TAX OPINION]															
																														
																														
											1																			
																														
ALPHABET															ALPHABET															
ZACHRY T WOOD															ZACHRY T WOOD															
5323 BRADFORD DR															5324 BRADFORD DR															
DALLAS TX 75235-8314															DALLAS TX 75235-8315															
ORIGINAL REPORT															ORIGINAL REPORT															
Income, Rents, & Royalty															Income, Rents, & Royalty															
INCOME STATEMENT 	61-1767919														INCOME STATEMENT 	61-1767920														
	88-1303491															88-1303492														
GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019					GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2022	Q3 2022	Q2 2022	Q1 2022	Q4 2021	Q3 2021		Q2 2021	Q3 2021					
																														
Gross Profit	1.46698E+11	42337000000	35653000000	31211000000	30818000000	25056000000	19744000000	22177000000	25055000000	22931000000					Gross Profit	-2178236363.6	-9195472727.3	-16212709090.9	-23229945454.5	-30247181818.2	-37264418181.8	-44281654545.5		-51298890909.1	37497000000					
Total Revenue as Reported, Supplemental	2.57637E+11	75325000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000					Total Revenue as Reported, Supplemental	-1286309090.9	-13385163636.4	-25484018181.8	-37582872727.3	-49681727272.7	-61780581818.2	-73879436363.6		-85978290909.1	65118000000					
	2.57637E+11	75325000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	64133000000	34071000000						1957800000	-9776581818.2	-21510963636.4	-33245345454.5	-44979727272.7	-56714109090.9	-68448490909.1		-80182872727.3	65118000000					
Other Revenue										6428000000					Other Revenue															
Cost of Revenue	-1.10939E+11	-32988000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000					Cost of Revenue	-891927272.7	4189690909.1	9271309090.9	14352927272.7	19434545454.5	24516163636.4	29597781818.2		34679400000	-27621000000					
Cost of Goods and Services	-1.10939E+11	-32988000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000					Cost of Goods and Services	-891927272.7	4189690909.1	9271309090.9	14352927272.7	19434545454.5	24516163636.4	29597781818.2		34679400000	-27621000000					
Operating Income/Expenses	-67984000000	-20452000000	-16292000000	-14774000000	-15167000000	-13843000000	-13361000000	-14200000000	-15789000000	-13754000000					Operating Income/Expenses	-3640563636.4	-882445454.5	1875672727.3	4633790909.1	7391909090.9	10150027272.7	12908145454.5		15666263636.4	-16466000000					
Selling, General and Administrative Expenses	-36422000000	-11744000000	-8617000000	-7289000000	-8145000000	-6987000000	-6486000000	-7380000000	-8567000000	-7200000000					Selling, General and Administrative Expenses	-1552200000	-28945454.55	1494309090.9	3017563636.4	4540818181.8	6064072727.3	7587327272.7		9110581818.2	-8772000000					
General and Administrative Expenses	-13510000000	-4140000000	-3341000000	-2773000000	-2831000000	-2756000000	-2585000000	-2880000000	-2829000000	-2591000000					General and Administrative Expenses	-544945454.5	23200000	591345454.5	1159490909.1	1727636363.6	2295781818.2	2863927272.7		3432072727.3	-3256000000					
Selling and Marketing Expenses	-22912000000	-7604000000	-5276000000	-4516000000	-5314000000	-4231000000	-3901000000	-4500000000	-5738000000	-4609000000					Selling and Marketing Expenses	-1007254545.5	-52145454.55	902963636.4	1858072727.3	2813181818.2	3768290909.1	4723400000		5678509090.9	-5516000000					
Research and Development Expenses	-31562000000	-8708000000	-7675000000	-7485000000	-7022000000	-6856000000	-6875000000	-6820000000	-7222000000	-6554000000					Research and Development Expenses	-2088363636.4	-853500000	381363636.4	1616227272.7	2851090909.1	4085954545.5	5320818181.8		6555681818.2	-7694000000					
Total Operating Profit/Loss	78714000000	21885000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000					Total Operating Profit/Loss	-5818800000	-10077918181.8	-14337036363.6	-18596154545.5	-22855272727.3	-27114390909.1	-31373509090.9		-35632627272.7	21031000000					
Non-Operating Income/Expenses, Total	12020000000	2517000000	2624000000	4846000000	3038000000	2146000000	1894000000	-220000000	1438000000	-549000000					Non-Operating Income/Expenses, Total	-1369181818.2	-2079000000	-2788818181.8	-3498636363.6	-4208454545.5	-4918272727.3	-5628090909.1		-6337909090.9	2033000000					
Total Net Finance Income/Expense	1153000000	261000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000					Total Net Finance Income/Expense	464490909.1	462390909.1	460290909.1	458190909.1	456090909.1	453990909.1	451890909.1		449790909.1	310000000					
Net Interest Income/Expense	1153000000	261000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000					Net Interest Income/Expense	464490909.1	462390909.1	460290909.1	458190909.1	456090909.1	453990909.1	451890909.1		449790909.1	310000000					
																														
Interest Expense Net of Capitalized Interest	-346000000	-117000000	-76000000	-76000000	-53000000	-48000000	-13000000	-21000000	-17000000	-23000000					Interest Expense Net of Capitalized Interest	48654545.45	69900000	91145454.55	112390909.1	133636363.6	154881818.2	176127272.7		197372727.3	-77000000					
Interest Income	1499000000	378000000	389000000	345000000	386000000	460000000	433000000	586000000	621000000	631000000					Interest Income	415836363.6	392490909.1	369145454.5	345800000	322454545.5	299109090.9	275763636.4		252418181.8	387000000					
Net Investment Income	12364000000	2364000000	2924000000	4869000000	3530000000	1957000000	1696000000	-809000000	899000000	-1452000000					Net Investment Income	-2096781818.2	-2909109090.9	-3721436363.6	-4533763636.4	-5346090909.1	-6158418181.8	-6970745454.5		-7783072727.3	2207000000					
Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2883000000	4751000000	3262000000	2015000000	1842000000	-802000000	399000000	-1479000000					Gain/Loss on Investments and Other Financial Instruments	-2243490909.1	-3068572727.3	-3893654545.5	-4718736363.6	-5543818181.8	-6368900000	-7193981818.2		-8019063636.4	2158000000					
Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	92000000	5000000	355000000	26000000	-54000000	74000000	460000000	-14000000					Income from Associates, Joint Ventures and Other Participating Interests	99054545.45	92609090.91	86163636.36	79718181.82	73272727.27	66827272.73	60381818.18		53936363.64	188000000					
Gain/Loss on Foreign Exchange	-240000000	-163000000	-51000000	113000000	-87000000	-84000000	-92000000	-81000000	40000000	41000000					Gain/Loss on Foreign Exchange	47654545.45	66854545.45	86054545.45	105254545.5	124454545.5	143654545.5	162854545.5		182054545.5	-139000000					
Irregular Income/Expenses	0	0			0	0	0	0	0	0					Irregular Income/Expenses	0	0				0	0		0						
Other Irregular Income/Expenses	0	0			0	0	0	0	0	0					Other Irregular Income/Expenses	0	0				0	0		0						
Other Income/Expense, Non-Operating	-1497000000	-108000000	-613000000	-292000000	-825000000	-223000000	-222000000	24000000	-65000000	295000000					Other Income/Expense, Non-Operating	263109090.9	367718181.8	472327272.7	576936363.6	681545454.5	786154545.5	890763636.4		995372727.3	-484000000					
Pretax Income	90734000000	24402000000	21985000000	21283000000	18689000000	13359000000	8277000000	7757000000	10704000000	8628000000					Pretax Income	-7187981818.2	-12156918181.8	-17125854545.5	-22094790909.1	-27063727272.7	-32032663636.4	-37001600000		-41970536363.6	23064000000					
Provision for Income Tax	-14701000000	-3760000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000	-921000000	-33000000	-1560000000					Provision for Income Tax	1695218181.8	2565754545.5	3436290909.1	4306827272.7	5177363636.4	6047900000	6918436363.6		7788972727.3	-4128000000					
Net Income from Continuing Operations	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Net Income from Continuing Operations	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000					
Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Net Income after Extraordinary Items and Discontinued Operations	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000					
Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Net Income after Non-Controlling/Minority Interests	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000					
Net Income Available to Common Stockholders	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Net Income Available to Common Stockholders	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000					
Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000					Diluted Net Income Available to Common Stockholders	-5492763636.4	-9591163636.4	-13689563636.4	-17787963636.4	-21886363636.4	-25984763636.4	-30083163636.4		-34181563636.4	18936000000					
Income Statement Supplemental Section															Income Statement Supplemental Section															
Reported Normalized and Operating Income/Expense Supplemental Section															Reported Normalized and Operating Income/Expense Supplemental Section															
Total Revenue as Reported, Supplemental	2.57637E+11	75325000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000					Total Revenue as Reported, Supplemental	-1286309090.9	-13385163636.4	-25484018181.8	-37582872727.3	-49681727272.7	-61780581818.2	-73879436363.6		-85978290909.1	65118000000					
Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000					Total Operating Profit/Loss as Reported, Supplemental	-5818800000	-10077918181.8	-14337036363.6	-18596154545.5	-22855272727.3	-27114390909.1	-31373509090.9		-35632627272.7	21031000000					
Reported Effective Tax Rate	0.162		0.157	0.158		0.158	0.159	0.119		0.181					Reported Effective Tax Rate	1.162		1.43667E-01	1.33167E-01	1.22667E-01		1.06333E-01		8.68333E-02	0.179					
Reported Normalized Income								6836000000							Reported Normalized Income															
Reported Normalized Operating Profit								7977000000							Reported Normalized Operating Profit															
Other Adjustments to Net Income Available to Common Stockholders															Other Adjustments to Net Income Available to Common Stockholders															
Discontinued Operations															Discontinued Operations															
Basic EPS	113.88	31.15	27.69	26.63	22.54	16.55	10.21	9.96	15.49	10.2					Basic EPS	-8.742909091	-14.93854545	-21.13418182	-27.32981818	-33.52545455	-39.72109091	-45.91672727		-52.11236364	28.44					
Basic EPS from Continuing Operations	113.88	31.12	27.69	26.63	22.46	16.55	10.21	9.96	15.47	10.2					Basic EPS from Continuing Operations	-8.752545455	-14.94781818	-21.14309091	-27.33836364	-33.53363636	-39.72890909	-45.92418182		-52.11945455	28.44					
Basic EPS from Discontinued Operations															Basic EPS from Discontinued Operations															
Diluted EPS	112.2	30.69	27.26	26.29	22.3	16.4	10.13	9.87	15.35	10.12					Diluted EPS	-8.505636364	-14.599	-20.69236364	-26.78572727	-32.87909091	-38.97245455	-45.06581818		-51.15918182	27.99					
Diluted EPS from Continuing Operations	112.2	30.67	27.26	26.29	22.23	16.4	10.13	9.87	15.33	10.12					Diluted EPS from Continuing Operations	-8.515636364	-14.609	-20.70236364	-26.79572727	-32.88909091	-38.98245455	-45.07581818		-51.16918182	27.99					
Diluted EPS from Discontinued Operations															Diluted EPS from Discontinued Operations															
Basic Weighted Average Shares Outstanding	667650000	662664000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000					Basic Weighted Average Shares Outstanding	694313545.5	697258863.6	700204181.8	703149500	706094818.2	709040136.4	711985454.5		714930772.7	665758000					
Diluted Weighted Average Shares Outstanding	677674000	672493000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000					Diluted Weighted Average Shares Outstanding	698675981.8	701033009.1	703390036.4	705747063.6	708104090.9	710461118.2	712818145.5		715175172.7	676519000					
Reported Normalized Diluted EPS								9.87							Reported Normalized Diluted EPS															
Basic EPS	113.88	31.15	27.69	26.63	22.54	16.55	10.21	9.96	15.49	10.2					Basic EPS	-8.742909091	-14.93854545	-21.13418182	-27.32981818	-33.52545455	-39.72109091	-45.91672727		-52.11236364	28.44					
Diluted EPS	112.2	30.69	27.26	26.29	22.3	16.4	10.13	9.87	15.35	10.12					Diluted EPS	-8.505636364	-14.599	-20.69236364	-26.78572727	-32.87909091	-38.97245455	-45.06581818		-51.15918182	27.99					
Basic WASO	667650000	662664000	668958000	673220000	675581000	679449000	681768000	686465000	688804000	692741000					Basic WASO	694313545.5	697258863.6	700204181.8	703149500	706094818.2	709040136.4	711985454.5		714930772.7	665758000					
Diluted WASO	677674000	672493000	679612000	682071000	682969000	685851000	687024000	692267000	695193000	698199000					Diluted WASO	698675981.8	701033009.1	703390036.4	705747063.6	708104090.9	710461118.2	712818145.5		715175172.7	676519000					
Fiscal year end September 28th., 2022. | USD															Fiscal year end September 28th., 2022. | USD															
																														
31622,6:39 PM															31622,6:39 PM															
Morningstar.com Intraday Fundamental Portfolio View Print Report							Print								Morningstar.com Intraday Fundamental Portfolio View Print Report									Print						
																														
3/6/2022 at 6:37 PM										Current Value					3/6/2022 at 6:37 PM															
										1.53352E+13																				
																														
GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2021													GOOGL_income-statement_Quarterly_As_Originally_Reported		Q4 2022													
Cash Flow from Operating Activities, Indirect		24934000000	Q2 2021	Q1 2021	Q4 2020										Cash Flow from Operating Activities, Indirect		24934000001	Q3 2022	Q2 2022	Q1 2022	Q4 2021				Q3 2021					
Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	37497000000	31211000000	30818000000										Net Cash Flow from Continuing Operating Activities, Indirect		35231800000	36975800000	38719800000	40463800000	42207800000				25539000000					
Cash Generated from Operating Activities		24934000000	21890000000	19289000000	22677000000										Cash Generated from Operating Activities		19636600000	18560200000	17483800000	16407400000	15331000000				25539000000					
Income/Loss before Non-Cash Adjustment		20642000000	21890000000	19289000000	22677000000										Income/Loss before Non-Cash Adjustment		21353400000	21135400000	20917400000	20699400000	20481400000				25539000000					
Total Adjustments for Non-Cash Items		6517000000	18525000000	17930000000	15227000000										Total Adjustments for Non-Cash Items		20351200000	21992600000	23634000000	25275400000	26916800000				18936000000					
Depreciation, Amortization and Depletion, Non-Cash Adjustment		3439000000	4236000000	2592000000	5748000000										Depreciation, Amortization and Depletion, Non-Cash Adjustment		4986300000	5327600000	5668900000	6010200000	6351500000				3797000000					
Depreciation and Amortization, Non-Cash Adjustment		3439000000	2945000000	2753000000	3725000000										Depreciation and Amortization, Non-Cash Adjustment		3239500000	3241600000	3243700000	3245800000	3247900000				3304000000					
Depreciation, Non-Cash Adjustment		3215000000	2945000000	2753000000	3725000000										Depreciation, Non-Cash Adjustment		3329100000	3376000000	3422900000	3469800000	3516700000				3304000000					
Amortization, Non-Cash Adjustment		224000000	2730000000	2525000000	3539000000										Amortization, Non-Cash Adjustment		4241600000	4848600000	5455600000	6062600000	6669600000				3085000000					
Stock-Based Compensation, Non-Cash Adjustment		3954000000	215000000	228000000	186000000										Stock-Based Compensation, Non-Cash Adjustment		-1297700000	-2050400000	-2803100000	-3555800000	-4308500000				219000000					
Taxes, Non-Cash Adjustment		1616000000	3803000000	3745000000	3223000000										Taxes, Non-Cash Adjustment		4177700000	4486200000	4794700000	5103200000	5411700000				3874000000					
Investment Income/Loss, Non-Cash Adjustment		-2478000000	379000000	1100000000	1670000000										Investment Income/Loss, Non-Cash Adjustment		3081700000	4150000000	5218300000	6286600000	7354900000				-1287000000					
Gain/Loss on Financial Instruments, Non-Cash Adjustment		-2478000000	-2883000000	-4751000000	-3262000000										Gain/Loss on Financial Instruments, Non-Cash Adjustment		-4354700000	-4770800000	-5186900000	-5603000000	-6019100000				-2158000000					
Other Non-Cash Items		-14000000	-2883000000	-4751000000	-3262000000										Other Non-Cash Items		-5340300000	-6249200000	-7158100000	-8067000000	-8975900000				-2158000000					
Changes in Operating Capital		-2225000000	-8000000	-255000000	392000000										Changes in Operating Capital		1068100000	1559600000	2051100000	2542600000	3034100000				64000000					
Change in Trade and Other Receivables		-5819000000	-871000000	-1233000000	1702000000										Change in Trade and Other Receivables		2617900000	3718200000	4818500000	5918800000	7019100000				2806000000					
Change in Trade/Accounts Receivable		-5819000000	-3661000000	2794000000	-5445000000										Change in Trade/Accounts Receivable		-1122700000	-527600000	67500000	662600000	1257700000				-2409000000					
Change in Other Current Assets		-399000000	-3661000000	2794000000	-5445000000										Change in Other Current Assets		-3290700000	-3779600000	-4268500000	-4757400000	-5246300000				-2409000000					
Change in Payables and Accrued Expenses		6994000000	-199000000	7000000	-738000000										Change in Payables and Accrued Expenses		-3298800000	-4719000000	-6139200000	-7559400000	-8979600000				-1255000000					
Change in Trade and Other Payables		1157000000	4074000000	-4956000000	6938000000										Change in Trade and Other Payables		3108700000	3453600000	3798500000	4143400000	4488300000				3157000000					
Change in Trade/Accounts Payable		1157000000	-130000000	-982000000	963000000										Change in Trade/Accounts Payable		-233200000	-394000000	-554800000	-715600000	-876400000				238000000					
Change in Accrued Expenses		5837000000	-130000000	-982000000	963000000										Change in Accrued Expenses		-2105200000	-3202000000	-4298800000	-5395600000	-6492400000				238000000					
Change in Deferred Assets/Liabilities		368000000	4204000000	-3974000000	5975000000										Change in Deferred Assets/Liabilities		3194700000	3626800000	4058900000	4491000000	4923100000				2919000000					
Change in Other Operating Capital		-3369000000	-3000000	137000000	207000000										Change in Other Operating Capital		1553900000	2255600000	2957300000	3659000000	4360700000				272000000					
Change in Prepayments and Deposits			-1082000000	785000000	740000000										Change in Prepayments and Deposits			-388000000	-891600000	-1395200000	-1898800000				3041000000					
Cash Flow from Investing Activities		-11016000000													Cash Flow from Investing Activities		-11015999999													
Cash Flow from Continuing Investing Activities		-11016000000	-9074000000	-5383000000	-7281000000										Cash Flow from Continuing Investing Activities		-4919700000	-3706000000	-2492300000	-1278600000	-64900000				-10050000000					
Purchase/Sale and Disposal of Property, Plant and Equipment, Net		-6383000000	-9074000000	-5383000000	-7281000000										Purchase/Sale and Disposal of Property, Plant and Equipment, Net		-6772900000	-6485800000	-6198700000	-5911600000	-5624500000				-10050000000					
Purchase of Property, Plant and Equipment		-6383000000	-5496000000	-5942000000	-5479000000										Purchase of Property, Plant and Equipment		-5218300000	-4949800000	-4681300000	-4412800000	-4144300000				-6819000000					
Sale and Disposal of Property, Plant and Equipment			-5496000000	-5942000000	-5479000000										Sale and Disposal of Property, Plant and Equipment			-5040500000	-4683100000	-4325700000	-3968300000				-6819000000					
Purchase/Sale of Business, Net		-385000000													Purchase/Sale of Business, Net		-384999999													
Purchase/Acquisition of Business		-385000000	-308000000	-1666000000	-370000000										Purchase/Acquisition of Business		-1010700000	-1148400000	-1286100000	-1423800000	-1561500000				-259000000					
Purchase/Sale of Investments, Net		-4348000000	-308000000	-1666000000	-370000000										Purchase/Sale of Investments, Net		574500000	1229400000	1884300000	2539200000	3194100000				-259000000					
Purchase of Investments		-40860000000	-3293000000	2195000000	-1375000000										Purchase of Investments		16018900000	24471400000	32923900000	41376400000	49828900000				-3360000000					
Sale of Investments		36512000000	-24949000000	-37072000000	-36955000000										Sale of Investments		-64179300000	-79064600000	-93949900000	-1.08835E+11	-1.23721E+11				-35153000000					
Other Investing Cash Flow		100000000	21656000000	39267000000	35580000000										Other Investing Cash Flow		49209400000	57052800000	64896200000	72739600000	80583000000				31793000000					
Purchase/Sale of Other Non-Current Assets, Net			23000000	30000000	-57000000										Purchase/Sale of Other Non-Current Assets, Net			-236000000	-368800000	-501600000	-634400000				388000000					
Sales of Other Non-Current Assets															Sales of Other Non-Current Assets															
Cash Flow from Financing Activities		-16511000000													Cash Flow from Financing Activities		-13997000000	-12740000000							-15254000000					
Cash Flow from Continuing Financing Activities		-16511000000	-15991000000	-13606000000	-9270000000										Cash Flow from Continuing Financing Activities		-9287400000	-7674400000	-6061400000	-4448400000	-2835400000				-15254000000					
Issuance of/Payments for Common Stock, Net		-13473000000	-15991000000	-13606000000	-9270000000										Issuance of/Payments for Common Stock, Net		-10767000000	-10026000000	-9285000000	-8544000000	-7803000000				-12610000000					
Payments for Common Stock		13473000000	-12796000000	-11395000000	-7904000000										Payments for Common Stock		-18708100000	-22862000000	-27015900000	-31169800000	-35323700000				-12610000000					
Proceeds from Issuance of Common Stock			-12796000000	-11395000000	-7904000000										Proceeds from Issuance of Common Stock				-5806333333.3	-3360333333.3	-914333333.3									
Issuance of/Repayments for Debt, Net		115000000													Issuance of/Repayments for Debt, Net		-199000000	-356000000							-42000000					
Issuance of/Repayments for Long Term Debt, Net		115000000	-1042000000	-37000000	-57000000										Issuance of/Repayments for Long Term Debt, Net		-314300000	-348200000	-382100000	-416000000	-449900000				-42000000					
Proceeds from Issuance of Long Term Debt		6250000000	-1042000000	-37000000	-57000000										Proceeds from Issuance of Long Term Debt		-3407500000	-5307600000	-7207700000	-9107800000	-11007900000				6350000000					
Repayments for Long Term Debt		6365000000	6699000000	900000000	0										Repayments for Long Term Debt		-117000000	-660800000	-1204600000	-1748400000	-2292200000				-6392000000					
Proceeds from Issuance/Exercising of Stock Options/Warrants		2923000000	-7741000000	-937000000	-57000000										Proceeds from Issuance/Exercising of Stock Options/Warrants		-2971300000	-3400800000	-3830300000	-4259800000	-4689300000				-2602000000					
			-2453000000	-2184000000	-1647000000														-1288666666.7	-885666666.7	-482666666.7									
																														
Other Financing Cash Flow															Other Financing Cash Flow															
Cash and Cash Equivalents, End of Period															Cash and Cash Equivalents, End of Period															
Change in Cash		0	300000000	10000000	338000000000)										Change in Cash		1		-280000000	-570000000	338000000000)									
Effect of Exchange Rate Changes		20945000000	23630000000	26622000000	26465000000										Effect of Exchange Rate Changes		28459100000	29853400000	31247700000	32642000000	34036300000				23719000000					
Cash and Cash Equivalents, Beginning of Period		25930000000	-3175000000	300000000	6126000000										Cash and Cash Equivalents, Beginning of Period		25930000001	235000000000)	10384666666.7	15035166666.7	19685666666.7				235000000000)					
Cash Flow Supplemental Section		181000000000)	183000000	-143000000	210000000										Cash Flow Supplemental Section		181000000000)	-146000000000)	110333333.3	123833333.3	137333333.3				-146000000000)					
Change in Cash as Reported, Supplemental		2.3719E+13	2.6622E+13	2.6465E+13	2.0129E+13										Change in Cash as Reported, Supplemental		2.28095E+13	2.2375E+13	2.19405E+13	2.1506E+13	2.10715E+13				2.363E+13					
Income Tax Paid, Supplemental		2774000000	-2992000000		6336000000										Income Tax Paid, Supplemental		-5809000000	-8692000000	-11575000000		6336000001				89000000					
Cash and Cash Equivalents, Beginning of Period		13412000000			-4990000000										Cash and Cash Equivalents, Beginning of Period		-13098000000	-26353000000			-4989999999				157000000					
																														
12 Months Ended															13 Months Ended															
_________________________________________________________															_________________________________________________________															
					Q4  2019													Q4 2021			Q4  2020				Q4 2020					
Income Statement 															Income Statement 															
USD in "000'"s															USD in "000'"s															
Repayments for Long Term Debt					Dec. 31, 2019										Repayments for Long Term Debt			Dec. 31, 2021			Dec. 31, 2020				Dec. 31, 2020					
Costs and expenses:															Costs and expenses:															
Cost of revenues					161857										Cost of revenues			182528			161858				182527					
Research and development															Research and development															
Sales and marketing					71896										Sales and marketing			84733			71897				84732					
General and administrative					26018										General and administrative			27574			26019				27573					
European Commission fines					18464										European Commission fines			17947			18465				17946					
Total costs and expenses					9551										Total costs and expenses			11053			9552				11052					
Income from operations					1697										Income from operations			1			1698				0					
Other income (expense), net					127626										Other income (expense), net			141304			127627				141303					
Income before income taxes					34231										Income before income taxes			41225			34232				41224					
Provision for income taxes					5394										Provision for income taxes			6858000001			5395				6858000000					
Net income					19289000000										Net income			22677000001			19289000001				22677000000					
*include interest paid, capital obligation, and underweighting					19289000000										*include interest paid, capital obligation, and underweighting			22677000001			19289000001				22677000000					
					19289000000													22677000001			19289000001				22677000000					
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)															
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)															
																														
																														
For Paperwork Reduction Act Notice, see the seperate Instructions.															For Paperwork Reduction Act Notice, see the seperate Instructions.															
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
					Name	Tax Period 	Total	Social Security	Medicare	Withholding											Name	Tax Period 		Total						
					Fed 941 Corporate	39355	66986.66	28841.48	6745.18	31400											Fed 941 Corporate	11820.22		4205.072						
					Fed 941 West Subsidiary	39355	17115.41	7369.14	1723.42	8022.85											Fed 941 West Subsidiary	-8699.723		-16505.352						
					Fed 941 South Subsidiary	39355	23906.09	10292.9	2407.21	11205.98											Fed 941 South Subsidiary	-5905.64		-13685.332						
					Fed 941 East Subsidiary	39355	11247.64	4842.74	1132.57	5272.33											Fed 941 East Subsidiary	-11114.067		-18942.108						
					Fed 941 Corp - Penalty	39355	27198.5	11710.47	2738.73	12749.3											Fed 941 Corp - Penalty	-4550.951		-12318.068						
					Fed 940 Annual Unemp - Corp	39355	17028.05														Fed 940 Annual Unemp - Corp	-5298.9		-27625.85						
																														
																														
				ID:	TxDL: 00037305581	Ssn:	633-44-1725	DoB:     1994-10-15												ID:	TxDL: 00037305582	Ssn:		633-44-1726						
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
																														
														
																						
																						
				ID:	TxDL: 00037305581	Ssn:	633-44-1725       DoB:       1994-10-15															
																						
																						
																			diff --git a/#This/WORKSFLOW/Runs'@.Travis.yml'@bitore.sig/pkg.js b/#This/WORKSFLOW/Runs'@.Travis.yml'@bitore.sig/pkg.js index 84cbcd1..fe4395a 100644 --- a/#This/WORKSFLOW/Runs'@.Travis.yml'@bitore.sig/pkg.js +++ b/#This/WORKSFLOW/Runs'@.Travis.yml'@bitore.sig/pkg.js @@ -10641,189 +10641,7 @@ INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 Employee Information Pay to the order of ZACHRY T WOOD AMPITHEATRE PARKWAY, MOUNTAIN VIEW, California 94043 -As of July 28, 2022 -As filed with the Securities and Exchange Commission on November 22, 2013 -Thursday, Jul 28, 2022 08:50:08 AM GMT-7 -Investment Company Act File No. 811-22915 -UNITED STATES -SECURITIES AND EXCHANGE COMMISSION -Washington, D.C. 20549 -FORM N-1A -REGISTRATION STATEMENT -UNDER -THE SECURITIES ACT OF 1933 x -Pre-Effective Amendment No. ¨ -Post-Effective Amendment No. ¨ -and/or -REGISTRATION STATEMENT -UNDER -THE INVESTMENT COMPANY ACT OF 1940 x -Amendment No. -JPMorgan Trust III -(Exact Name of Registrant as Specified in Charter) -270 Park Avenue -New York, New York 10017 -(Address of Principal Executive Offices) (Zip Code) -Registrant’s Telephone Number, including Area Code: (800) 480-4111 -Frank J. Nasta, Esq. -J.P. Morgan Investment Management Inc. -270 Park Avenue -New York, New York 10017 -WOOD ZACHRY -5323 BRADFORD DR -DALLAS TX 75235-8313 -With copies to: -John T. Fitzgerald, Esq. -JPMorgan Chase & Co. -270 Park Avenue -New York, New York 10017 - -Jon S. Rand, Esq. -Dechert LLP -1095 Avenue of the Americas -New York, NY 10036 -Approximate Date of Proposed Public Offering: As soon as practicable after the effective date of this registration statement. -Pursuant to the provisions of Rule 24f-2 under the Investment Company Act of 1940, Registrant declares that an indefinite number of its shares of common stock are being registered under the Securities Act of 1933 by this registration statement. -The Registrant hereby amends this registration statement on such date or dates as may be necessary to delay its effective date until the Registrant shall file a further amendment which specifically states that this registration statement shall thereafter become effective in accordance with Section 8(a) of the Securities Act of 1933, or until the registration statement shall become effective on such date as the Securities and Exchange Commission, acting pursuant to Section 8(a), may determine. -Reciepient: -Benificiary's Social Security Number (SSN): :xxx-xx-1725 - -ZACH T WOO - -5323 B - - - -Intermidiate - -Payer : - - Payer''s Federal Identification Number (FIN) : :xxxxx6496 - - THE - -101 EA - - - -Origin - -Employee : - - Employee's Employer dentification Number (EIN) : 61767919 - - LAWR E PAGE - - 1600 A - - - - - -Gross - -Member FDIC - -1 Earnings Statement -ALPHABET Period Beginning: -1600 AMPITHEATRE PARKWAY DR Period Ending: -MOUNTAIN VIEW, C.A., 94043 Pay Date: -Taxable Marital Status: -Exemptions/Allowances Married ZACHRY T. -5323 -Federal: -DALLAS -TX: NO State Incorne Tax -rate units year to date Other Benefits and -112.2 674678000 75698871600 Information -Pto Balance -Total Work Hrs -Gross Pay 75698871600 Important Notes -COMPANY PH Y: 650-253-0000 -Statutory BASIS OF PAY: BASIC/DILUTED EPS -Federal Income Tax -Social Security Tax -YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE -Medicare Tax -Net Pay 70842743866 70842743866 -CHECKING -Net Check 70842743866 -Your federal taxable wages this period are $ -ALPHABET INCOME Advice number: -1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Pay date:_ -Deposited to the account Of : xxxxxxxx6547 - -Based on facts as set forth in. - -00519 - -Payer : -Payer's Identification Number (FIN) :xxxxx7919 -LAWR E PAGE -1600 A - -Employer : -Federal Employer's Identification Number (EIN) :88-1656496 -% ZACHRY T WOOD MBR -NASDAQAGOOG -5323 BRADFORD DR -TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020 -Gross Profit 146698000000 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000 -Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 -257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 -Other Revenue -Cost of Revenue -110939000000 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000 -Cost of Goods and Services -110939000000 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000 -Operating Income/Expenses -67984000000 -20452000000 -16466000000 -16292000000 -14774000000 -15167000000 -13843000000 -13361000000 -Selling, General and Administrative Expenses -36422000000 -11744000000 -8772000000 -8617000000 -7289000000 -8145000000 -6987000000 -6486000000 -General and Administrative Expenses -13510000000 -4140000000 -3256000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000 -Selling and Marketing Expenses -22912000000 -7604000000 -5516000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000 -Research and Development Expenses -31562000000 -8708000000 -7694000000 -7675000000 -7485000000 -7022000000 -6856000000 -6875000000 -Total Operating Profit/Loss 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000 -Non-Operating Income/Expenses, Total 12020000000 2517000000 2033000000 2624000000 4846000000 3038000000 2146000000 1894000000 -Total Net Finance Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000 -Net Interest Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000 -Interest Expense Net of Capitalized Interest -346000000 -117000000 -77000000 -76000000 -76000000 -53000000 -48000000 -13000000 -Interest Income 1499000000 378000000 387000000 389000000 345000000 386000000 460000000 433000000 -Net Investment Income 12364000000 2364000000 2207000000 2924000000 4869000000 3530000000 1957000000 1696000000 -Gain/Loss on Investments and Other Financial Instruments 12270000000 2478000000 2158000000 2883000000 4751000000 3262000000 2015000000 1842000000 -Income from Associates, Joint Ventures and Other Participating Interests 334000000 49000000 188000000 92000000 5000000 355000000 26000000 -54000000 -Gain/Loss on Foreign Exchange -240000000 -163000000 -139000000 -51000000 113000000 -87000000 -84000000 -92000000 -Irregular Income/Expenses 0 0 0 0 0 -Other Irregular Income/Expenses 0 0 0 0 0 -Other Income/Expense, Non-Operating -1497000000 -108000000 -484000000 -613000000 -292000000 -825000000 -223000000 -222000000 -Pretax Income 90734000000 24402000000 23064000000 21985000000 21283000000 18689000000 13359000000 8277000000 -Provision for Income Tax -14701000000 -3760000000 -4128000000 -3460000000 -3353000000 -3462000000 -2112000000 -1318000000 -Net Income from Continuing Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 -Net Income after Extraordinary Items and Discontinued Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 -Net Income after Non-Controlling/Minority Interests 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 -Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 -Diluted Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 -Income Statement Supplemental Section -Reported Normalized and Operating Income/Expense Supplemental Section -Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 -Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000 -Reported Effective Tax Rate 0.162 0.179 0.157 0.158 0.158 0.159 -Reported Normalized Income - -Reported Normalized Operating Profit -Other Adjustments to Net Income Available to Common Stockholders -Discontinued Operations -Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 -Basic EPS from Continuing Operations 113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21 -Basic EPS from Discontinued Operations -Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13 -Diluted EPS from Continuing Operations 112.2 30.67 27.99 27.26 26.29 22.23 16.4 10.13 -Diluted EPS from Discontinued Operations -Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 -Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 -Reported Normalized Diluted EPS -Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21 -Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13 -Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 -Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 -Fiscal year end September 28th., 2022. | USD -'0'' 'comments'' 'on'' 'commit'' '2e1a9cf'' +0 comments on commit 2e1a9cf @[zakwarlord7](https://github.com/zakwarlord7/02100021/commits?author=zakwarlord7) Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>			
																						
																						
																						
																						
:Build ::build_script :

**Full Changelog**: https://github.com/zakwarlord7/GitHub-doc/commits/master
## Notes

- It's not strictly necessary to set an `objectID` as the search index will create one automatically, but by creating our own we have a guarantee that subsequent invocations of this upload script will overwrite existing records instead of creating numerous duplicate records with differing IDs.
- Our search querying has typo tolerance. Try spelling something wrong and see what you get!
- Our search querying has lots of controls for customizing each index, so we can add weights to certain attributes and create rules like "title is more important than body", etc. But it works pretty well as-is without any configuration.
- Our search querying has support for "advanced query syntax" for exact matching of quoted expressions and exclusion of words preceded by a `-` sign. This is off by default but we have it enabled in our browser client. The settings in the web interface can be overridden by the search endpoint. See [middleware/search.js]([middleware/search.js).
