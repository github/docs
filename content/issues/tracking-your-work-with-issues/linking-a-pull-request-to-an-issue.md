---
title: Linking a pull request to an issue
intro: You can link a pull request to an issue to show that a fix is in progress and to automatically close the issue when the pull request is merged.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Link PR to issue
---
{% note %}

**Note:** The special keywords in a pull request description are interpreted when the pull request targets the repository's *default* branch. However, if the PR's base is *any other branch*, then these keywords are ignored, no links are created and merging the PR has no effect on the issues. **If you want to link a pull request to an issue using a keyword, the PR must be on the default branch.**

{% endnote %}

## About linked issues and pull requests

You can link an issue to a pull request {% ifversion fpt or ghes or ghae or ghec %}manually or {% endif %}using a supported keyword in the pull request description.

When you link a pull request to the issue the pull request addresses, collaborators can see that someone is working on the issue.

When you merge a linked pull request into the default branch of a repository, its linked issue is automatically closed. For more information about the default branch, see "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

## Linking a pull request to an issue using a keyword

You can link a pull request to an issue by using a supported keyword in the pull request's description or in a commit message (please note that the pull request must be on the default branch).

* close
* closes
* closed
* fix
* fixes
* fixed
* resolve
* resolves
* resolved

If you use a keyword to reference a pull request comment in another pull request, the pull requests will be linked. Merging the referencing pull request will also close the referenced pull request.

The syntax for closing keywords depends on whether the issue is in the same repository as the pull request.

Linked issue | Syntax | Example
--------------- | ------ | ------
Issue in the same repository | *KEYWORD* #*ISSUE-NUMBER* | `Closes #10`
Issue in a different repository | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`
Multiple issues | Use full syntax for each issue | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

{% ifversion fpt or ghes or ghae or ghec %}Only manually linked pull requests can be manually unlinked. To unlink an issue that you linked using a keyword, you must edit the pull request description to remove the keyword.{% endif %}

You can also use closing keywords in a commit message. The issue will be closed when you merge the commit into the default branch, but the pull request that contains the commit will not be listed as a linked pull request.


{% ifversion fpt or ghes or ghae or ghec %}
## Manually linking a pull request to an issue

Anyone with write permissions to a repository can manually link a pull request to an issue.

You can manually link up to ten issues to each pull request. The issue and pull request must be in the same repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. In the list of pull requests, click the pull request that you'd like to link to an issue.
4. In the right sidebar, click **Linked issues**.
  ![Linked issues in the right sidebar](/assets/images/help/pull_requests/linked-issues.png)
5. Click the issue you want to link to the pull request.
  ![Drop down to link issue](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

## Further reading

- "[Autolinked references and URLs](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
compiler.cpp:11:23: error: stray '#' in program
   11 | Microsoft (R) Visual C# Compiler version 3.6.0-4.20224.5 (ec77c100)
      |                       ^
compiler.cpp:11:42: error: too many decimal points in number
   11 | Microsoft (R) Visual C# Compiler version 3.6.0-4.20224.5 (ec77c100)
      |                                          ^~~~~
compiler.cpp:11:48: error: too many decimal points in number
   11 | Microsoft (R) Visual C# Compiler version 3.6.0-4.20224.5 (ec77c100)
      |                                                ^~~~~~~~~
compiler.cpp:29:69: warning: multi-character character constant [-Wmultichar]
   29 | compiler.csharp(17,35): error CS8635: Unexpected character sequence '...'
      |                                                                     ^~~~~
compiler.cpp:167:70: warning: multi-character character constant [-Wmultichar]
  167 | compiler.csharp(128,98): error CS8635: Unexpected character sequence '...'
      |                                                                      ^~~~~
compiler.cpp:180:70: warning: multi-character character constant [-Wmultichar]
  180 | compiler.csharp(140,35): error CS8635: Unexpected character sequence '...'
      |                                                                      ^~~~~
compiler.cpp:258:95: warning: missing terminating " character
  258 | E. Users, conbmied i8. users, by subject, etc. E8.i Humanities E8.2 Social sciences $8.3 *Pure" science E8.4 Applied sci, tech. E8.9 Other subjects E9. 'Other persons 'F. Societal roles, etc. FO., All categories F1. Of LIS in general F2. With publishing media 173. With parent, bodies F4. With users, etc. F5. Among libraries F6. With government F7.-Copyright F8. Intellect. freedom F9. Other - G. Orientation, etc. GO. All categories G1. Librarianship G2. Information science G3. Educational media, G4. Communications. G5. Psychology. G6. Sociology. G7. Political science 0 G8. Economici °' Other . -c+ .. . , 1-,* 0 H. Disc., prof. aspects, 0 Hi. All categories
      |                                                                                               ^
compiler.cpp:258:95: error: missing terminating " character
  258 | E. Users, conbmied i8. users, by subject, etc. E8.i Humanities E8.2 Social sciences $8.3 *Pure" science E8.4 Applied sci, tech. E8.9 Other subjects E9. 'Other persons 'F. Societal roles, etc. FO., All categories F1. Of LIS in general F2. With publishing media 173. With parent, bodies F4. With users, etc. F5. Among libraries F6. With government F7.-Copyright F8. Intellect. freedom F9. Other - G. Orientation, etc. GO. All categories G1. Librarianship G2. Information science G3. Educational media, G4. Communications. G5. Psychology. G6. Sociology. G7. Political science 0 G8. Economici °' Other . -c+ .. . , 1-,* 0 H. Disc., prof. aspects, 0 Hi. All categories
      |                                                                                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:259:33: error: stray '`' in program
  259 | 0414. H2. Intellect. foundation `-}13. Organizations, etc. H4. Qualifications
      |                                 ^
compiler.cpp:260:25: warning: missing terminating ' character
  260 | 1 H9. Other aspects cDto'1 X 0
      |                         ^
compiler.cpp:260:25: error: missing terminating ' character
  260 | 1 H9. Other aspects cDto'1 X 0
      |                         ^~~~~~
compiler.cpp:261:25: warning: missing terminating ' character
  261 | . c+ Xxx rt) X 13) xxx 0' XXX XXX xx
      |                         ^
compiler.cpp:261:25: error: missing terminating ' character
  261 | . c+ Xxx rt) X 13) xxx 0' XXX XXX xx
      |                         ^~~~~~~~~~~~
compiler.cpp:262:1: warning: missing terminating ' character
  262 | ' CD X°xxxxxxxxx
      | ^
compiler.cpp:262:1: error: missing terminating ' character
  262 | ' CD X°xxxxxxxxx
      | ^~~~~~~~~~~~~~~~~
compiler.cpp:265:1: warning: missing terminating " character
  265 | " XXXXX M XXX.X.X CD $12 XXXX 0CDcD0cs
      | ^
compiler.cpp:265:1: error: missing terminating " character
  265 | " XXXXX M XXX.X.X CD $12 XXXX 0CDcD0cs
      | ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:274:1: warning: missing terminating ' character
  274 | ' XXXXXXX
      | ^
compiler.cpp:274:1: error: missing terminating ' character
  274 | ' XXXXXXX
      | ^~~~~~~~~
compiler.cpp:275:1: warning: missing terminating " character
  275 | " XXX fAM. 0Inc+ xx ra, to0Table 5. Course content and teaching methods As described by respondents using CERLIS
      | ^
compiler.cpp:275:1: error: missing terminating " character
  275 | " XXX fAM. 0Inc+ xx ra, to0Table 5. Course content and teaching methods As described by respondents using CERLIS
      | ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:277:12: warning: missing terminating ' character
  277 | AO BO CO D6'E3 FO go J4 L6L7. "Special libraries"* (1)**,
      |            ^
compiler.cpp:277:12: error: missing terminating ' character
  277 | AO BO CO D6'E3 FO go J4 L6L7. "Special libraries"* (1)**,
      |            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:278:108: error: too many decimal points in number
  278 | AO BO C1C2C3C4C4.1C4.2C4.3C5C5.1C5.2C5.3C7 D3 E3E7:all able to . attend college F1F3F4F5 G1G2G4G6G7G8 H2H3 .11.12J3J4
      |                                                                                                            ^~~~~~~~~~
compiler.cpp:280:44: warning: missing terminating " character
  280 | A1A2A3A4A5A6A11, B1B2B3 D7 F1F2 G2 H1 M N. "Database retrieval
      |                                            ^
compiler.cpp:280:44: error: missing terminating " character
  280 | A1A2A3A4A5A6A11, B1B2B3 D7 F1F2 G2 H1 M N. "Database retrieval
      |                                            ^~~~~~~~~~~~~~~~~~~
compiler.cpp:281:8: warning: missing terminating " character
  281 | systems" (27)
      |        ^
compiler.cpp:281:8: error: missing terminating " character
  281 | systems" (27)
      |        ^~~~~~
compiler.cpp:283:90: warning: missing terminating " character
  283 | A1A2A3A4A8A9A10A11 B3 C1C2C3C4C4.1C4.2C4.3C5 D162D3D4D6 EO . F2F3F6 G1G2G3 H1H2 JO L7 M. "Acquisitions and
      |                                                                                          ^
compiler.cpp:283:90: error: missing terminating " character
  283 | A1A2A3A4A8A9A10A11 B3 C1C2C3C4C4.1C4.2C4.3C5 D162D3D4D6 EO . F2F3F6 G1G2G3 H1H2 JO L7 M. "Acquisitions and
      |                                                                                          ^~~~~~~~~~~~~~~~~
compiler.cpp:284:26: warning: missing terminating " character
  284 | organization of materials" (26)
      |                          ^
compiler.cpp:284:26: error: missing terminating " character
  284 | organization of materials" (26)
      |                          ^~~~~~
compiler.cpp:291:150: error: stray '\357' in program
  291 | A1A2A3A7A8A15 B4B5 D1D2D3D4D5 F3F5F6 H1H2H3. "Seminar in￾library administration" (18) , A1A2A3A15 BO CO DO EO FOF9:departmental relationships,intra￾library relationships(i.e4tech. serv. & other
      |                                                                                                                                                      ^
compiler.cpp:291:151: error: stray '\277' in program
  291 | A1A2A3A7A8A15 B4B5 D1D2D3D4D5 F3F5F6 H1H2H3. "Seminar in￾library administration" (18) , A1A2A3A15 BO CO DO EO FOF9:departmental relationships,intra￾library relationships(i.e4tech. serv. & other
      |                                                                                                                                                       ^
compiler.cpp:291:152: error: stray '\276' in program
  291 | A1A2A3A7A8A15 B4B5 D1D2D3D4D5 F3F5F6 H1H2H3. "Seminar in￾library administration" (18) , A1A2A3A15 BO CO DO EO FOF9:departmental relationships,intra￾library relationships(i.e4tech. serv. & other
      |                                                                                                                                                        ^
compiler.cpp:292:29: warning: missing terminating " character
  292 | depts. G1G2 H1H2 J4 L7 M N. "Management and
      |                             ^
compiler.cpp:292:29: error: missing terminating " character
  292 | depts. G1G2 H1H2 J4 L7 M N. "Management and
      |                             ^~~~~~~~~~~~~~~
compiler.cpp:293:19: warning: missing terminating " character
  293 | technical services" (24)
      |                   ^
compiler.cpp:293:19: error: missing terminating " character
  293 | technical services" (24)
      |                   ^~~~~~
compiler.cpp:299:40: warning: missing terminating " character
  299 | A1A2A4A11 81828385 CO D7D8 EO G2 H2H3. "Abstrtcting and
      |                                        ^
compiler.cpp:299:40: error: missing terminating " character
  299 | A1A2A4A11 81828385 CO D7D8 EO G2 H2H3. "Abstrtcting and
      |                                        ^~~~~~~~~~~~~~~~
compiler.cpp:300:9: warning: missing terminating " character
  300 | indexing" (3)
      |         ^
compiler.cpp:300:9: error: missing terminating " character
  300 | indexing" (3)
      |         ^~~~~
compiler.cpp:315:4: warning: missing terminating ' character
  315 | P1 '5P6P8P15 Q1Q2Q7Q10 2R3R6R11
      |    ^
compiler.cpp:315:4: error: missing terminating ' character
  315 | P1 '5P6P8P15 Q1Q2Q7Q10 2R3R6R11
      |    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:332:3: warning: missing terminating ' character
  332 | . 'AUTHOR
      |   ^
compiler.cpp:332:3: error: missing terminating ' character
  332 | . 'AUTHOR
      |   ^~~~~~~
compiler.cpp:339:8: error: invalid digit "8" in octal constant
  339 | IR 010(088
      |        ^~~
compiler.cpp:348:15: warning: missing terminating ' character
  348 | Classification'Research Group; Dewey Decimal
      |               ^
compiler.cpp:348:15: error: missing terminating ' character
  348 | Classification'Research Group; Dewey Decimal
      |               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:352:102: error: stray '`' in program
  352 | In order to provide access to individual educators and researchers in library science/on the basis of` their
      |                                                                                                      ^
compiler.cpp:355:28: warning: multi-character character constant [-Wmultichar]
  355 | Classification Research Gro'up's Classificatiofi of Library a d Information Science. Established to classify people rather an \.documents, CERLIS is designed for self-Classification by th individual to be classified. The test version of CERLIS was sent to a random sample of 100 full-'ti'me personnelsintlibrary education ,prbgrams, and 28 persong responded with completed classification
      |                            ^~~~~
compiler.cpp:355:127: error: stray '\' in program
  355 | Classification Research Gro'up's Classificatiofi of Library a d Information Science. Established to classify people rather an \.documents, CERLIS is designed for self-Classification by th individual to be classified. The test version of CERLIS was sent to a random sample of 100 full-'ti'me personnelsintlibrary education ,prbgrams, and 28 persong responded with completed classification
      |                                                                                                                               ^
compiler.cpp:355:285: warning: multi-character character constant [-Wmultichar]
  355 | Classification Research Gro'up's Classificatiofi of Library a d Information Science. Established to classify people rather an \.documents, CERLIS is designed for self-Classification by th individual to be classified. The test version of CERLIS was sent to a random sample of 100 full-'ti'me personnelsintlibrary education ,prbgrams, and 28 persong responded with completed classification
      |                                                                                                                                                                                                                                                                                             ^~~~~~
compiler.cpp:358:19: warning: missing terminating ' character
  358 | ..)r 0 . ,..... ,-'
      |                   ^
compiler.cpp:358:19: error: missing terminating ' character
compiler.cpp:359:8: warning: missing terminating ' character
  359 | 40' ',.'
      |        ^
compiler.cpp:359:8: error: missing terminating ' character
compiler.cpp:361:98: warning: missing terminating ' character
  361 | , . . ..%1- ******0******4***t**i*********,*4i;k*******14;4t******************i***** z I. ....,,,' .. -1...
      |                                                                                                  ^
compiler.cpp:361:98: error: missing terminating ' character
  361 | , . . ..%1- ******0******4***t**i*********,*4i;k*******14;4t******************i***** z I. ....,,,' .. -1...
      |                                                                                                  ^~~~~~~~~~
compiler.cpp:363:38: warning: character constant too long for its type
  363 | , t et_ it ran be made * ;- from the '-drigihal,. document: * . **'*****,-*********************************.**4**t**,*4***My preferred pronoun is...
      |                                      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:368:45: warning: missing terminating " character
  368 | *Includes use of subject headings and other "natural
      |                                             ^
compiler.cpp:368:45: error: missing terminating " character
  368 | *Includes use of subject headings and other "natural
      |                                             ^~~~~~~~
compiler.cpp:369:9: warning: missing terminating " character
  369 | language" systems with controlled vocabularies (e.g. PRECIS)
      |         ^
compiler.cpp:369:9: error: missing terminating " character
  369 | language" systems with controlled vocabularies (e.g. PRECIS)
      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:376:32: warning: missing terminating ' character
  376 | Includes in-depth analysis and 'the provision of in-depth access to Lnformation in documents using automatic or
      |                                ^
compiler.cpp:376:32: error: missing terminating ' character
  376 | Includes in-depth analysis and 'the provision of in-depth access to Lnformation in documents using automatic or
      |                                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:378:187: warning: missing terminating " character
  378 | controlled vocabularies and/or classification schemes. -. Also includes abstracts, indexes and files resulting from these operations, as well as file structuak filing and , filing.rules," and search strategy.
      |                                                                                                                                                                                           ^
compiler.cpp:378:187: error: missing terminating " character
  378 | controlled vocabularies and/or classification schemes. -. Also includes abstracts, indexes and files resulting from these operations, as well as file structuak filing and , filing.rules," and search strategy.
      |                                                                                                                                                                                           ^~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:389:9: warning: missing terminating " character
  389 | periods,"check also the
      |         ^
compiler.cpp:389:9: error: missing terminating " character
  389 | periods,"check also the
      |         ^~~~~~~~~~~~~~~
compiler.cpp:395:115: error: stray '\357' in program
  395 | Use this category only, when a principal-aspect of your specialization, course,or research is education for librar￾ianship or information science in general. If you focus on education or training in particular operations or aspects
      |                                                                                                                   ^
compiler.cpp:395:116: error: stray '\277' in program
  395 | Use this category only, when a principal-aspect of your specialization, course,or research is education for librar￾ianship or information science in general. If you focus on education or training in particular operations or aspects
      |                                                                                                                    ^
compiler.cpp:395:117: error: stray '\276' in program
  395 | Use this category only, when a principal-aspect of your specialization, course,or research is education for librar￾ianship or information science in general. If you focus on education or training in particular operations or aspects
      |                                                                                                                     ^
compiler.cpp:397:56: error: stray '\357' in program
  397 | For education in education for librarianship or informa￾tion science, however, check both category A14 and section M.
      |                                                        ^
compiler.cpp:397:57: error: stray '\277' in program
  397 | For education in education for librarianship or informa￾tion science, however, check both category A14 and section M.
      |                                                         ^
compiler.cpp:397:58: error: stray '\276' in program
  397 | For education in education for librarianship or informa￾tion science, however, check both category A14 and section M.
      |                                                          ^
compiler.cpp:411:5: error: stray '`' in program
  411 | . x `'
      |     ^
compiler.cpp:411:6: warning: missing terminating ' character
  411 | . x `'
      |      ^
compiler.cpp:411:6: error: missing terminating ' character
compiler.cpp:414:5: error: stray '\302' in program
  414 | Al. °Organization, administration,
      |     ^
compiler.cpp:414:6: error: stray '\260' in program
  414 | Al. °Organization, administration,
      |      ^
compiler.cpp:424:2: error: stray '\302' in program
  424 | x°
      |  ^
compiler.cpp:424:3: error: stray '\260' in program
  424 | x°
      |   ^
compiler.cpp:432:4: warning: missing terminating ' character
  432 | x X'
      |    ^
compiler.cpp:432:4: error: missing terminating ' character
compiler.cpp:436:1: warning: missing terminating ' character
  436 | 'ersonnel
      | ^
compiler.cpp:436:1: error: missing terminating ' character
  436 | 'ersonnel
      | ^~~~~~~~~
compiler.cpp:438:15: warning: missing terminating ' character
  438 | B5. Personnel ' C. Resources, materials
      |               ^
compiler.cpp:438:15: error: missing terminating ' character
  438 | B5. Personnel ' C. Resources, materials
      |               ^~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:454:1: warning: missing terminating ' character
  454 | ' , E. Users, communities
      | ^
compiler.cpp:454:1: error: missing terminating ' character
  454 | ' , E. Users, communities
      | ^~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:476:1: error: stray '\302' in program
  476 | ° - x
      | ^
compiler.cpp:476:2: error: stray '\260' in program
  476 | ° - x
      |  ^
compiler.cpp:487:1: error: too many decimal points in number
  487 | 1..
      | ^~~
compiler.cpp:490:1: warning: missing terminating ' character
  490 | '
      | ^
compiler.cpp:490:1: error: missing terminating ' character
compiler.cpp:493:2: warning: missing terminating ' character
  493 | x'
      |  ^
compiler.cpp:493:2: error: missing terminating ' character
compiler.cpp:513:30: warning: missing terminating " character
  513 | 16. Fahringer, Peggy Louise. "A Classification of Knowledge
      |                              ^
compiler.cpp:513:30: error: missing terminating " character
  513 | 16. Fahringer, Peggy Louise. "A Classification of Knowledge
      |                              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:515:11: warning: missing terminating ' character
  515 | -a Manual 'of Instruction for Maintenance and Use of the
      |           ^
compiler.cpp:515:11: error: missing terminating ' character
  515 | -a Manual 'of Instruction for Maintenance and Use of the
      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:516:12: warning: missing terminating " character
  516 | Collection." Cleveland: School of Library Science, Western
      |            ^
compiler.cpp:516:12: error: missing terminating " character
  516 | Collection." Cleveland: School of Library Science, Western
      |            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:518:25: warning: missing terminating " character
  518 | 17. S oergel, Dagobert. "A Personal Classification of Information
      |                         ^
compiler.cpp:518:25: error: missing terminating " character
  518 | 17. S oergel, Dagobert. "A Personal Classification of Information
      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:519:11: warning: missing terminating " character
  519 | : Science." College Park, KD: College of Library and Information
      |           ^
compiler.cpp:519:11: error: missing terminating " character
  519 | : Science." College Park, KD: College of Library and Information
      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:528:25: warning: missing terminating " character
  528 | 21. Bernier, Charles L. "Thesaurus for Librarianship, and
      |                         ^
compiler.cpp:528:25: error: missing terminating " character
  528 | 21. Bernier, Charles L. "Thesaurus for Librarianship, and
      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
compiler.cpp:529:46: warning: missing terminating " character
  529 | Information: Sciences, Services, and Systems." 11th ed.__ --
      |                                              ^
compiler.cpp:529:46: error: missing terminating " character
  529 | Information: Sciences, Services, and Systems." 11th ed.__ --
      |                                              ^~~~~~~~~~~~~~~
compiler.cpp:533:21: error: exponent has no digits
  533 | E. Michael- een and 4ei.emy A. Digger. London: Aslib, c1973.
      |                     ^~~~~~~
compiler.cpp:11:11: error: expected constructor, destructor, or type conversion before '(' token
   11 | Microsoft (R) Visual C# Compiler version 3.6.0-4.20224.5 (ec77c100)
      |           ^
compiler.cpp:14:41: error: 'expected' does not name a type
   14 | compiler.csharp(11,13): error CS1002: ; expected
      |                                         ^~~~~~~~
compiler.cpp:15:40: error: 'expected' does not name a type
   15 | compiler.csharp(12,8): error CS1002: ; expected
      |                                        ^~~~~~~~
compiler.cpp:259:35: error: expected declaration before '}' token
  259 | 0414. H2. Intellect. foundation `-}13. Organizations, etc. H4. Qualifications
      |                                   ^
compiler.cpp:259:36: error: expected unqualified-id before numeric constant
  259 | 0414. H2. Intellect. foundation `-}13. Organizations, etc. H4. Qualifications
      |                                    ^~~
compiler.cpp:347:25: error: expected constructor, destructor, or type conversion before 'Resources'
  347 | *Classification; *Human Resources; *Information Science; *Library Education; *Library Research; *Library Science; Library Skills;.Research; Thesauri
      |                         ^~~~~~~~~
compiler.cpp:347:49: error: expected constructor, destructor, or type conversion before 'Science'
  347 | *Classification; *Human Resources; *Information Science; *Library Education; *Library Research; *Library Science; Library Skills;.Research; Thesauri
      |                                                 ^~~~~~~
compiler.cpp:347:67: error: expected constructor, destructor, or type conversion before 'Education'
  347 | *Classification; *Human Resources; *Information Science; *Library Education; *Library Research; *Library Science; Library Skills;.Research; Thesauri
      |                                                                   ^~~~~~~~~
compiler.cpp:347:87: error: expected constructor, destructor, or type conversion before 'Research'
  347 | *Classification; *Human Resources; *Information Science; *Library Education; *Library Research; *Library Science; Library Skills;.Research; Thesauri
      |                                                                                       ^~~~~~~~
compiler.cpp:347:106: error: expected constructor, destructor, or type conversion before 'Science'
  347 | *Classification; *Human Resources; *Information Science; *Library Education; *Library Research; *Library Science; Library Skills;.Research; Thesauri
      |                                                                                                          ^~~~~~~
compiler.cpp:347:115: error: 'Library' does not name a type
  347 | *Classification; *Human Resources; *Information Science; *Library Education; *Library Research; *Library Science; Library Skills;.Research; Thesauri
      |                                                                                                                   ^~~~~~~
compiler.cpp:347:130: error: expected unqualified-id before '.' token
  347 | *Classification; *Human Resources; *Information Science; *Library Education; *Library Research; *Library Science; Library Skills;.Research; Thesauri
      |                                                                                                                                  ^
compiler.cpp:347:141: error: 'Thesauri' does not name a type
  347 | *Classification; *Human Resources; *Information Science; *Library Education; *Library Research; *Library Science; Library Skills;.Research; Thesauri
      |                                                                                                                                             ^~~~~~~~
compiler.cpp:349:17: error: 'Library' does not name a type
  349 | Classification; Library of Congress Classification;, Universal Decimal Classification
      |                 ^~~~~~~
compiler.cpp:349:52: error: expected unqualified-id before ',' token
  349 | Classification; Library of Congress Classification;, Universal Decimal Classification
      |                                                    ^
compiler.cpp:349:64: error: expected constructor, destructor, or type conversion before 'Decimal'
  349 | Classification; Library of Congress Classification;, Universal Decimal Classification
      |                                                                ^~~~~~~
compiler.cpp:361:48: error: 'k' does not name a type
  361 | , . . ..%1- ******0******4***t**i*********,*4i;k*******14;4t******************i***** z I. ....,,,' .. -1...
      |                                                ^
compiler.cpp:361:59: error: expected unqualified-id before numeric constant
  361 | , . . ..%1- ******0******4***t**i*********,*4i;k*******14;4t******************i***** z I. ....,,,' .. -1...
      |                                                           ^~
compiler.cpp:363:27: error: expected unqualified-id before '-' token
  363 | , t et_ it ran be made * ;- from the '-drigihal,. document: * . **'*****,-*********************************.**4**t**,*4***My preferred pronoun is...
      |                           ^
compiler.cpp:531:22: error: 'Gaster' does not name a type
  531 | 22. Gilshrist, Alan; Gaster, K4thleen. A Compressed Term
      |                      ^~~~~~
