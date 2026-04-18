version 6.0
* Default configurations is set for now by extension.json
* Hook "userCan" (deprecated MW 1.35+) was replaced by "getUserPermissionsErrors"
* Global variable $wgUser (deprecated in MW 1.35+) changed by call RequestContext::getMain()->getUser()
  and direct access to the parameters  (deprecated in MW 1.37+) was changed to use of the methods.
* It's same for the class Title, where was changed call for create page from 'makeTitle' to 'makeTitleSafe'
* Class 'MWNamespace' (deprecated in MW 1.34+) replaced by class 'NamespaceInfo'.
* Fix condition for state, if is disallowed access to any special page for the anonymous users.
* Fix in regular expression for the Namespace detect.

version 5.x
* This version was skipped because there were unsupported forks based a branch version 2.6, versioned as 5.x

version 4.1 (form-support)
* Fix for task T281848

version 4.0 (form-support)
* Used hook "EditPage::attemptSave" to protect before save changes if is the self changes page included.

version 3.0.2 (form-support)
* New message 'accescontrol-readonly' in i18 directory
* README file, with info about basic configuration before activation
* AccessControl.cs.xml – wiki manual page for extension (in czech language)

version 3.0.1 (form-support)
* Patch for deny edit access over visualeditor, proposed by user HtheChemist and tested by
  Nicolas Nallet with MediaWiki 1.34.0

version 3.0 (form-support)
* Completly rewrited for templates support by Aleš Kapica
* New syntax for accesslists
* Old syntax is still supported
* Used hook "ParserBeforeStrip" to secure content of pages included by DPL
* Used hook "ModifyExportQuery" to protection page before export
* Used hook "ShowSearchHit" to hide results of pages with hits
* Removed hook:
    UnknownAction (obsolete)
* New variables:
    $wgAccessControlNamespaces Array of numeric values of the namespaces with the accesslists
    $wgAccessToHistory Can allow read history or wiki content of unprotected pages for anonymous users

version 2.6
* Added support for PHP codesniffer checks, internal restructuring of code by Siebrand Mazeland
* Fixes to the above change by Thomas Mulhall

version 2.5
* Actualization of description header
* Fix for uninitialize an variable $rights in function wfFromTemplates() and repair of indents in code
* New the variable $wgAccessControlRedirect to allow set display of search results (default is false)
* New language string accesscontrol-info-box in i18n localization file

version 2.4.1
* minor fix in german translationfile
* cosmetic fixes to avoid code style errors

version 2.4.0
* Migrate to JSON i18n

verison 2.3
* Fixed function wfDoRedirect() and wfFromTemplates()
* Removed unused messages from localization file
* New function wfOnUnknownAction()

version 2.2
* Fix for MediaWiki >= 1.21 by unknown AccessControl user

version 2.1
* Fixed security problem with insert protected page, or template

version 2.0
* Completly rewrited for MediaWiki >= 1.18 by Aleš Kapica
* Removed not used variables:
    $wgAccessControlDebug
    $wgAccessControlDebugFile
    $wgAllowInfo
    $wgAllowUserList
    $wgAccessControlMessages

version 1.3
* Gabor Simon fixed problem in function wfGetUsersFromPages()
* Applying patch from Stephan Herrmann

version 1.2
* Fixed errors in parameter function wfDoControlUserAccess()
* Repairing while lopp in function getContentTag()

version 1.1
* Fixed security bug with accessibility on protected page over #REDIRECT

version 1.0
* Refactored all code
* Added localization file
* Changed separator on one comma (from double)
* Readonly access is can not only group, but user too

version 0.8
*Fixes for hook errors in MediaWiki 1.11.0 included
*Support for the Group of anonymous users added
*UNIQ/QUINU-Bug kind of fixed (own Link-Parser)

version 0.7
*now it's possible to have read-only groups.
*set the english language as default
*refactored some functions for better readability
*it's now possible to use the internal groups from MediaWiki
*Added a TODO-Document

version 0.6
*Bugfix release, touching the article didn't work, so I use a header redirect (bad hack, but works).
*works now also for anonymous users

version 0.5
*Articles with the accesscontrol tag are now touched in advance to displaying it, so the page will not read from the cache
*removed some development junk ;-)
*better documentation of the accesscontrolSettings.php
*added some debugging code

version 0.4
*tested in Version 1.8.2
*added some Tips
*if more then one group is in the <accesscontrol> tag, all groups are now displayed
*there is now an option, where you can turn off the behaviour, that users in the sysop group can see restricted pages
*the "access is allowed only for group..." text is now in the accesscontrolSettings.php for easier localisation

version 0.3
*access is now also controlled for editing the pages (if you access it manually per action=edit in the URL)
*only sysops can now view and edit the "Usergroup:.." pages
*added a changelog ;-)

version 0.2
*some fixes, to make it work under Version 1.7.1
*Sysops can now always access pages, so if you make an error, you have always the opportunity to correct it ;-)

version 0.1
first Version