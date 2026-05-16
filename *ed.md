========================================================
== dumpstate: 2023-04-11 21:17:56
========================================================

Build: QP1A.190711.020 release-keys
Build fingerprint: 'Alcatel/5007A/Tokyo_Lite:10/QP1A.190711.020/v4GAW-0:user/release-keys'
Bootloader: unknown
Radio: MOLY.LR12A.R3.MP.V78.3.P81
Network: TELCEL
Module Metadata version: 292900701
Kernel: Linux version 4.9.190+ (nobody@android-build) (gcc version 4.9.x 20150123 (prerelease) (GCC) ) #1 SMP PREEMPT Thu Aug 25 01:36:11 CST 2022
Command line: console=tty0 console=ttyS0,921600n1 vmalloc=400M 				slub_debug=OFZPU page_owner=on 				swiotlb=noforce androidboot.hardware=mt6765 				maxcpus=8 loop.max_part=7 				firmware_class.path=/vendor/firmware has_battery_removed=0 androidboot.boot_devices=bootdevice,11230000.mmc root=/dev/ram androidboot.vbmeta.device=PARTUUID=54060b67-fa74-5c82-6116-44821e54dced androidboot.vbmeta.avb_version=1.1 androidboot.vbmeta.device_state=locked androidboot.veritymode=enforcing androidboot.veritymode.managed=yes androidboot.verifiedbootstate=green bootopt=64S3,32S1,32S1 buildvariant=user androidboot.ecid=13334070 androidboot.subvariant=ATT androidboot.product=Tokyo_Lite androidboot.variant=latam5007a androidboot.name=5007A androidboot.model=5007A androidboot.code=5007A androidboot.rpmb_status=1 androidboot.product.hardware.sku=5007Alatam5007aatt_ss androidboot.cu=5007A-2CUFMX11 androidboot.brand=Alcatel androidboot.ui_style=Alcatel androidboot.multisim=1 androidboot.atm=disabled androidboot.meta_log_disable=0 dsize=2G oem_uart=0 printk.disable_uart=1 bootprof.pl_t=1026 bootprof.lk_t=2140 bootprof.logo_t=890 androidboot.serialno=9H7LUGPBAML785QG androidboot.bootreason=reboot gpt=1 usb2jtag_mode=0 mrdump_ddrsv=yes mrdump_cb=0x10e800,0x1400 androidboot.dtb_idx=0 androidboot.dtbo_idx=0
Uptime: up 0 weeks, 0 days, 12 hours, 37 minutes
Bugreport format version: 2.0
Dumpstate info: id=1 pid=19239 dry_run=0 args=/system/bin/dumpstate -d -p -B -z -o /data/user_de/0/com.android.shell/files/bugreports/bugreport extra_options=BUGREPORT_FULL

------ DUMPSYS CRITICAL (/system/bin/dumpsys) ------
-------------------------------------------------------------------------------
DUMP OF SERVICE CRITICAL SurfaceFlinger:
Build configuration: [sf PRESENT_TIME_OFFSET=0 FORCE_HWC_FOR_RBG_TO_YUV=1 MAX_VIRT_DISPLAY_DIM=0 RUNNING_WITHOUT_SYNC_FRAMEWORK=0 NUM_FRAMEBUFFER_SURFACE_BUFFERS=3] [libui] [libgui]

Display identification data:
Display 0 (HWC display 0): no identification data

Wide-Color information:
Device has wide color built-in display: 0
Device uses color management: 0
DisplayColorSetting: Managed
Display 0 color modes:
    ColorMode::NATIVE (0)
    Current color mode: ColorMode::NATIVE (0)

Sync configuration: [using: EGL_ANDROID_native_fence_sync EGL_KHR_wait_sync]

VSYNC configuration:
         app phase:   8300000 ns	         SF phase:   8300000 ns
   early app phase:   8300000 ns	   early SF phase:   8300000 ns
GL early app phase:   8300000 ns	GL early SF phase:   8300000 ns
    present offset:         0 ns	     VSYNC period:  16625103 ns

Scheduler enabled.+  Smart 90 for video detection: off

app: state=VSync VSyncState={displayId=0, count=1235190}
  pending events (count=0):
  connections (count=38):
    Connection{0xb2125690, VSyncRequest::None}
    Connection{0xadfd7770, VSyncRequest::None}
    Connection{0xb0230000, VSyncRequest::None}
    Connection{0xb0230190, VSyncRequest::None}
    Connection{0xb02301e0, VSyncRequest::None}
    Connection{0xb0230230, VSyncRequest::None}
    Connection{0xb0230050, VSyncRequest::None}
    Connection{0xb0232fd0, VSyncRequest::None}
    Connection{0xb0232ad0, VSyncRequest::None}
    Connection{0xb0231720, VSyncRequest::None}
    Connection{0xb0232bc0, VSyncRequest::None}
    Connection{0xb0232c10, VSyncRequest::None}
    Connection{0xb0234b00, VSyncRequest::Single}
    Connection{0xb02346f0, VSyncRequest::None}
    Connection{0xb0234880, VSyncRequest::None}
    Connection{0xb02fb140, VSyncRequest::None}
    Connection{0xad6ac590, VSyncRequest::None}
    Connection{0xad6ac220, VSyncRequest::None}
    Connection{0xad6fa2c0, VSyncRequest::None}
    Connection{0xad6fa680, VSyncRequest::None}
    Connection{0xad6fa4f0, VSyncRequest::None}
    Connection{0xb02fd990, VSyncRequest::None}
    Connection{0xb02fbf00, VSyncRequest::None}
    Connection{0xb02ff510, VSyncRequest::None}
    Connection{0xb02ff790, VSyncRequest::None}
    Connection{0xb02fdc60, VSyncRequest::None}
    Connection{0xad5f50e0, VSyncRequest::None}
    Connection{0xad6fcd40, VSyncRequest::None}
    Connection{0xad6ae480, VSyncRequest::None}
    Connection{0xb02f34a0, VSyncRequest::None}
    Connection{0xad7f3a90, VSyncRequest::None}
    Connection{0xad7f4bc0, VSyncRequest::None}
    Connection{0xb02f2190, VSyncRequest::None}
    Connection{0xad7f6600, VSyncRequest::None}
    Connection{0xb02f5b60, VSyncRequest::None}
    Connection{0xb02f56b0, VSyncRequest::None}
    Connection{0xad84acd0, VSyncRequest::None}
    Connection{0xad84ae10, VSyncRequest::None}

Static screen stats:
  < 1 frames: 5237.770 s (14.0%)
  < 2 frames: 5510.579 s (14.7%)
  < 3 frames: 543.564 s (1.5%)
  < 4 frames: 257.965 s (0.7%)
  < 5 frames: 89.522 s (0.2%)
  < 6 frames: 656.120 s (1.8%)
  < 7 frames: 269.377 s (0.7%)
  7+ frames: 24820.471 s (66.4%)

Total missed frame count: 185753
HWC missed frame count: 185751
GPU missed frame count: 16915

Buffering stats:
  [Layer name] <Active time> <Two buffer> <Double buffered> <Triple buffered>
  [StatusBar#0] 1324.43 0.283 0.648 0.352
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.documentbrowser.filebrowser.FileBrowserRegularActivity#0] 1160.40 0.060 0.130 0.870
  [com.microsoft.office.officehubrow/com.microsoft.office.officemobile.OfficeMobileWordActivity#0] 857.50 0.237 0.663 0.337
  [NavigationBar0#0] 747.80 0.734 0.907 0.093
  [com.microsoft.office.officehubrow/com.microsoft.office.officemobile.OfficeMobileExcelActivity#0] 421.37 0.308 0.669 0.331
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.start.activity.RootHostActivity#0] 381.08 0.087 0.419 0.581
  [com.google.android.gm/com.google.android.gm.ConversationListActivityGmail#0] 309.98 0.247 0.674 0.326
  [com.google.android.apps.photos/com.google.android.apps.photos.home.HomeActivity#0] 294.62 0.280 0.789 0.211
  [com.google.android.gm/com.google.android.gm.ui.MailActivityGmail#0] 292.32 0.249 0.660 0.340
  [com.tcl.android.launcher/com.tcl.android.launcher.Launcher#0] 285.42 0.296 0.558 0.442
  [com.google.android.apps.docs/com.google.android.apps.viewer.PdfViewerActivity#0] 268.50 0.557 0.801 0.199
  [com.alphainventor.filemanager/com.alphainventor.filemanager.activity.MainActivity#0] 263.90 0.140 0.301 0.699
  [com.facebook.katana/com.facebook.katana.LoginActivity#1] 259.43 0.131 0.436 0.564
  [com.facebook.katana/com.facebook.katana.LoginActivity#0] 256.23 0.150 0.629 0.371
  [com.whatsapp/com.whatsapp.Conversation#0] 216.92 0.339 0.694 0.306
  [com.whatsapp/com.whatsapp.voipcalling.VoipActivityV2#0] 194.55 0.296 0.673 0.327
  [com.facebook.katana/com.facebook.browser.lite.BrowserLite2Activity#0] 167.58 0.229 0.600 0.400
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.documentbrowser.filebrowser.SearchActivity#1] 153.43 0.787 0.919 0.081
  [com.tcl.android.launcher/com.tcl.android.launcher.Launcher#1] 137.87 0.365 0.532 0.468
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.start.activity.RootHostActivity#2] 129.03 0.145 0.467 0.533
  [com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0] 117.18 0.552 0.791 0.209
  [com.microsoft.office.officehubrow/com.microsoft.office.officemobile.Pdf.OfficeMobilePdfActivity#0] 113.76 0.079 0.417 0.583
  [com.dropbox.android/com.dropbox.android.activity.DbxMainActivity#0] 106.81 0.304 0.602 0.398
  [com.globalhitss.claro.pay/com.globalhitss.claro.pay.ui.activities.MainActivity#0] 105.52 0.017 0.131 0.869
  [com.android.vending/com.android.vending.AssetBrowserActivity#0] 103.42 0.170 0.439 0.561
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.start.activity.RootHostActivity#3] 96.80 0.010 0.798 0.202
  [com.whatsapp/com.whatsapp.HomeActivity#0] 93.69 0.317 0.778 0.222
  [com.banregio.hey/com.banregio.be.dashboard.activity.DashboardActivity#0] 93.57 0.344 0.435 0.565
  [com.officedocument.word.docx.document.viewer/word.alldocument.edit.ui.activity.MainActivity#0] 85.78 0.129 0.919 0.081
  [com.google.android.apps.photos/com.google.android.apps.photos.archive.view.ArchivedPhotosActivity#0] 83.69 0.199 0.846 0.154
  [com.android.chrome/com.google.android.apps.chrome.Main#0] 82.99 0.514 0.883 0.117
  [InputMethod#0] 79.64 0.730 0.994 0.006
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.home.HomeActivity#0] 78.98 0.270 0.677 0.323
  [com.google.android.apps.photos/com.google.android.apps.photos.picker.impl.SearchablePickerActivity#0] 74.54 0.433 0.847 0.153
  [com.dropbox.android/com.dropbox.android.gallery_picker.GalleryPickerActivity#1] 58.73 0.000 1.000 0.000
  [com.microsoft.office.outlook/com.acompli.acompli.CentralActivity#0] 57.82 0.111 0.363 0.637
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.documentbrowser.filebrowser.SearchActivity#0] 57.42 0.530 0.666 0.334
  [com.google.android.apps.docs/com.google.android.apps.docs.drive.app.navigation.NavigationActivity#0] 56.50 0.525 0.725 0.275
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.documentbrowser.filebrowser.FileBrowserRegularActivity#1] 51.42 0.044 0.183 0.817
  [android/com.android.internal.app.ChooserActivity#0] 51.19 0.077 0.532 0.468
  [com.alphainventor.filemanager/com.alphainventor.filemanager.texteditor.TextEditorActivity#0] 50.75 0.874 0.967 0.033
  [com.android.chrome/org.chromium.chrome.browser.customtabs.CustomTabActivity#0] 48.36 0.679 0.838 0.162
  [com.whatsapp/com.whatsapp.camera.CameraActivity#0] 46.87 0.002 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.picker.external.ExternalPickerActivity#0] 46.15 0.375 0.608 0.392
  [mx.gob.sat/mx.gob.sat.mx.gob.sat.controller.MainActivity#1] 43.57 0.000 1.000 0.000
  [com.microsoft.office.officehubrow/com.microsoft.office.officemobile.OfficeMobileWordActivity#1] 41.68 0.594 0.934 0.066
  [com.dropbox.android/com.dropbox.android.gallery_picker.GalleryPickerActivity#0] 40.53 0.092 0.177 0.823
  [com.pixlr.express/com.pixlr.express.PixlrExpressActivity#1] 40.46 0.519 0.743 0.257
  [com.dropbox.android/com.dropbox.android.gallery.activity.FolderGalleryActivity#0] 39.90 0.048 0.209 0.791
  [com.google.android.apps.photos/com.google.android.apps.photos.localmedia.ui.LocalPhotosActivity#0] 39.75 0.093 0.531 0.469
  [com.google.android.apps.docs/com.google.android.apps.viewer.drive.InternalProjectorActivity#0] 38.98 0.371 0.663 0.337
  [com.whatsapp/com.whatsapp.Conversation#1] 37.77 0.372 0.715 0.285
  [com.tct.dialer/com.android.incallui.InCallActivity#0] 35.80 0.010 0.054 0.946
  [com.google.android.documentsui/com.android.documentsui.files.FilesActivity#0] 35.06 0.208 0.390 0.610
  [mx.gob.sat/mx.gob.sat.mx.gob.sat.controller.MainActivity#0] 34.69 0.587 1.000 0.000
  [com.microsoft.office.officehubrow/com.microsoft.office.officesuite.OfficeSuiteActivity#0] 34.55 0.150 0.456 0.544
  [com.microsoft.office.officehubrow/com.microsoft.office.officemobile.OfficeMobileExcelActivity#1] 32.17 0.854 0.970 0.030
  [SurfaceView - com.microsoft.office.officehubrow/com.microsoft.office.officemobile.Pdf.OfficeMobilePdfActivity#0] 31.84 0.209 0.798 0.202
  [com.docxoffice.alldoc.officereader.viewer/com.docxoffice.alldocreader.view.activity.SplashActivity#0] 30.40 0.055 0.311 0.689
  [com.google.android.apps.photos/com.google.android.apps.photos.envelope.AlbumActivity#0] 26.02 0.037 0.350 0.650
  [com.docxoffice.alldoc.officereader.viewer/com.docxoffice.v2.ui.MainActivityV2#0] 24.78 0.000 0.455 0.545
  [com.banregio.hey/com.banregio.be.login.LoginActivity#0] 23.64 0.309 0.505 0.495
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.documentbrowser.filepreview.FilePreviewActivity#0] 23.50 0.471 0.952 0.048
  [SurfaceView - com.pixlr.express/com.pixlr.camera.CameraActivity#0] 22.78 1.000 1.000 0.000
  [ru.zdevs.zarchiver/ru.zdevs.zarchiver.activity.OpenAsDlg#0] 22.63 0.653 0.745 0.255
  [com.banregio.hey/com.banregio.be.accountsCards.presentation.CardsDetailActivity#0] 22.43 0.620 0.706 0.294
  [com.microsoft.office.officehubrow/com.microsoft.office.officesuite.ImageToTableAliasActivity#0] 22.34 0.371 0.740 0.260
  [com.banregio.hey/com.banregio.be.myProfile.presentation.MyProfileActivity#0] 22.15 0.777 0.881 0.119
  [com.android.htmlviewer/com.android.htmlviewer.HTMLViewerActivity#0] 21.66 0.000 0.000 1.000
  [com.alphainventor.filemanager/com.alphainventor.filemanager.activity.MainActivity#1] 20.09 0.547 0.693 0.307
  [com.banregio.hey/com.banregio.be.transferencias.TransfersActivity#0] 19.49 0.691 0.879 0.121
  [PopupWindow:a3e2c69#0] 18.05 0.688 0.875 0.125
  [BootAnimation#0] 16.49 1.000 1.000 0.000
  [com.facebook.orca/com.facebook.messenger.neue.MainActivity#0] 15.88 0.806 0.953 0.047
  [ru.zdevs.zarchiver/ru.zdevs.zarchiver.ZArchiver#0] 15.77 0.359 0.512 0.488
  [com.facebook.katana/com.facebook.katana.immersiveactivity.ImmersiveActivity#0] 15.70 0.091 0.594 0.406
  [com.android.settings/com.android.settings.SubSettings#0] 15.43 0.140 0.334 0.666
  [com.officedocument.word.docx.document.viewer/word.alldocument.edit.ui.activity.SplashActivity#0] 15.24 0.000 0.266 0.734
  [com.google.android.documentsui/com.android.documentsui.picker.PickActivity#0] 15.22 0.114 0.750 0.250
  [com.whatsapp/com.whatsapp.contact.picker.ContactPicker#0] 14.31 0.200 0.641 0.359
  [com.stripe.android.dashboard/com.stripe.dashboard.ui.DashboardActivity#0] 13.92 0.210 0.565 0.435
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.passcode.PasscodeActivity#0] 13.82 0.943 1.000 0.000
  [PopupWindow:81ea743#0] 13.81 0.527 0.674 0.326
  [PopupWindow:e2a5ac2#0] 13.61 0.000 0.000 1.000
  [BiometricDialogView#0] 13.10 0.422 0.678 0.322
  [com.microsoft.office.officehubrow/com.microsoft.office.lens.lenscommon.ui.LensActivity#0] 12.05 0.446 0.597 0.403
  [com.microsoft.office.officehubrow/com.microsoft.office.officemobile.OfficeMobileActivity#0] 11.75 0.472 0.671 0.329
  [com.whatsapp/com.whatsapp.mediacomposer.MediaComposerActivity#0] 11.49 0.163 0.493 0.507
  [ru.zdevs.zarchiver/ru.zdevs.zarchiver.ZArchiver#1] 11.22 0.513 0.687 0.313
  [com.android.settings/com.android.settings.FallbackHome#0] 10.51 0.000 0.000 1.000
  [com.google.android.apps.nbu.files/com.google.android.libraries.social.licenses.LicenseMenuActivity#0] 10.29 0.896 1.000 0.000
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.start.activity.RootHostActivity#1] 10.14 0.421 0.654 0.346
  [com.google.android.apps.messaging/com.google.android.apps.messaging.main.MainActivity#0] 9.53 0.312 0.517 0.483
  [PopupWindow:2cbc4ae#0] 9.52 0.703 0.811 0.189
  [PopupWindow:60e0a1a#0] 9.45 0.810 0.883 0.117
  [com.tct.dialer/com.android.dialer.app.DialtactsActivity#0] 9.07 0.194 0.378 0.622
  [ColorFade#0] 8.98 0.383 0.499 0.501
  [com.banregio.hey/com.banregio.captainflint.activity.CFSimpleViewActivity#0] 8.42 0.954 1.000 0.000
  [com.officedocument.word.docx.document.viewer/word.alldocument.edit.ui.activity.SplashActivity#1] 8.29 0.000 0.700 0.300
  [com.banregio.hey/com.banregio.be.news.presentation.NewsActivity#0] 8.22 0.908 1.000 0.000
  [com.globalhitss.claro.pay/com.globalhitss.claro.pay.historyclaro.ui.activities.HistoryActivity#0] 8.22 0.557 0.974 0.026
  [com.globalhitss.claro.pay/com.globalhitss.claro.pay.ui.activities.MainActivity#1] 8.18 0.966 1.000 0.000
  [VolumeDialogImpl#0] 8.05 0.165 0.369 0.631
  [android/com.android.internal.app.ResolverActivity#0] 7.98 0.511 1.000 0.000
  [com.officedocument.word.docx.document.viewer/office.file.ui.OpenFileActivity#0] 7.92 0.029 1.000 0.000
  [mx.gob.sat/mx.gob.sat.mx.gob.sat.controller.notification.MyNotifications#0] 7.86 0.958 1.000 0.000
  [com.docxoffice.alldoc.officereader.viewer/com.docxoffice.alldocreader.view.activity.ReadAllDocActivity#0] 7.80 0.526 0.851 0.149
  [com.whatsapp/com.whatsapp.mediaview.MediaViewActivity#0] 7.32 0.265 0.265 0.735
  [com.android.settings/com.android.settings.Settings$DataUsageSummaryActivity#0] 7.14 0.668 0.778 0.222
  [PopupWindow:87ac2d4#0] 7.12 0.343 0.343 0.657
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.documentbrowser.fileinfoscreen.FileInfoActivity#0] 6.97 0.527 0.953 0.047
  [com.dropbox.android/com.dropbox.android.activity.DbxMainActivity#2] 6.74 1.000 1.000 0.000
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.settings.SettingsActivity#0] 6.66 0.693 0.819 0.181
  [#0] 6.48 0.313 0.566 0.434
  [com.whatsapp/com.whatsapp.profile.ViewProfilePhoto#0] 6.47 0.000 0.213 0.787
  [com.dropbox.android/com.dropbox.preview.v3.PreviewV3Activity#0] 6.36 0.128 0.275 0.725
  [com.facebook.katana/com.facebook.katana.LoginActivity#2] 6.30 0.400 0.536 0.464
  [com.dropbox.android/com.dropbox.dbapp.purchase_journey.ui.view.PromptUpsellActivity#0] 6.22 0.000 0.842 0.158
  [com.microsoft.office.officehubrow/com.microsoft.office.officemobile.OfficeMobileExcelActivity#2] 6.05 0.356 0.664 0.336
  [com.banregio.hey/com.banregio.be.news.presentation.NewsActivity#1] 6.02 0.210 0.400 0.600
  [com.microsoft.office.officehubrow/com.facebook.ads.AudienceNetworkActivity#0] 5.64 0.265 1.000 0.000
  [com.banregio.hey/com.banregio.be.capitals.CapitalsActivity#0] 5.63 0.949 0.988 0.012
  [com.facebook.katana/com.facebook.katana.immersiveactivity.ImmersiveActivity#1] 5.57 0.460 0.624 0.376
  [com.facebook.katana/com.facebook.composer.activity.ComposerActivity#0] 5.39 0.591 0.918 0.082
  [com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#1] 5.37 0.213 0.213 0.787
  [com.banregio.hey/com.banregio.be.softtoken.SoftTokenActivity#0] 5.35 0.183 0.183 0.817
  [com.google.android.apps.docs/com.google.android.apps.viewer.PdfViewerActivity#1] 5.30 0.775 0.923 0.077
  [com.facebook.katana/com.facebook.fbavatar.FbAvatarEditorActivity#0] 4.88 0.148 0.374 0.626
  [com.docxoffice.alldoc.officereader.viewer/com.docxoffice.alldocreader.view.activity.docreader.DocReaderActivity#0] 4.85 0.609 1.000 0.000
  [com.pixlr.express/com.pixlr.express.SettingPreferences#0] 4.75 1.000 1.000 0.000
  [com.dropbox.android/com.dropbox.product.android.dbapp.search.impl.view.SearchActivity#0] 4.70 0.449 0.945 0.055
  [com.facebook.katana/com.facebook.composer.minutiae.activity.MinutiaeTabbedPickerActivity#0] 4.67 0.126 1.000 0.000
  [Notificación#0] 4.64 0.404 0.704 0.296
  [com.google.android.googlequicksearchbox/com.google.android.googlequicksearchbox.InternalGoogleAppActivityEntrypoint#0] 4.63 0.167 0.167 0.833
  [com.globalhitss.claro.pay/com.globalkit.microapps.minimalviewframe.view.ViewFrame#0] 4.49 0.867 1.000 0.000
  [com.officedocument.word.docx.document.viewer/com.google.android.gms.ads.AdActivity#0] 4.44 1.000 1.000 0.000
  [com.android.settings/com.android.settings.applications.InstalledAppDetails#0] 4.38 0.710 0.910 0.090
  [com.banregio.hey/com.banregio.be.myProfile.presentation.MyProfileActivity#2] 4.34 0.770 0.821 0.179
  [com.banregio.hey/com.banregio.be.transferencias.TransfersActivity#1] 4.31 0.363 0.408 0.592
  [com.google.android.apps.photos/com.google.android.apps.photos.utilities.UtilitiesActivity#0] 4.27 0.600 0.686 0.314
  [magnifier surface#0] 4.25 0.143 1.000 0.000
  [com.banregio.hey/com.banregio.be.preoffer.presentation.PreofferActivity#0] 4.22 0.413 1.000 0.000
  [Magnification Overlay#0] 4.20 0.650 1.000 0.000
  [PopupWindow:b4597e6#0] 4.08 0.480 1.000 0.000
  [com.android.vending/com.google.android.finsky.activities.MainActivity#0] 4.07 0.204 0.972 0.028
  [com.facebook.katana/com.facebook.timeline.coverphoto.avatarcover.presenter.AvatarCoverPhotoActivity#0] 4.06 0.924 1.000 0.000
  [com.banregio.hey/com.banregio.be.helpCenter.HelpCenterActivity#0] 4.04 0.156 0.502 0.498
  [PopupWindow:443bcdd#0] 4.04 0.000 0.000 1.000
  [com.facebook.katana/com.facebook.browser.lite.BrowserLiteInMainProcessActivity#0] 3.98 0.909 1.000 0.000
  [com.whatsapp/com.whatsapp.voipcalling.VoipActivityV2#1] 3.93 0.636 0.802 0.198
  [com.whatsapp/com.whatsapp.profile.ProfileInfoActivity#0] 3.88 0.532 0.736 0.264
  [com.google.android.apps.photos/com.google.android.apps.photos.pager.HostPhotoPagerActivity#0] 3.83 0.300 0.300 0.700
  [com.TotalPlay.totalplay/mx.com.totalplay.core2.home.Core2SplashActivity#0] 3.72 0.370 1.000 0.000
  [com.banregio.hey/com.banregio.be.transferencias.TransfersActivity#2] 3.69 0.904 0.904 0.096
  [BatteryChargingTips#0] 3.62 0.886 1.000 0.000
  [com.banregio.hey/com.banregio.be.transferencias.bank.BankActivity#0] 3.62 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.tickets.presentation.TicketsActivity#0] 3.53 1.000 1.000 0.000
  [com.google.android.apps.docs/com.google.android.apps.docs.common.shareitem.legacy.UploadActivity#1] 3.53 0.000 0.000 1.000
  [com.docxoffice.alldoc.officereader.viewer/com.google.android.gms.ads.AdActivity#0] 3.49 0.410 1.000 0.000
  [com.facebook.katana/com.facebook.browser.lite.BrowserLite2Activity#1] 3.48 0.507 1.000 0.000
  [com.whatsapp/com.whatsapp.gallerypicker.GalleryPicker#0] 3.40 0.136 0.281 0.719
  [com.facebook.katana/com.facebook.inspiration.activity.InspirationCameraActivity#0] 3.35 0.853 1.000 0.000
  [org.toshi/org.toshi.MainActivity#1] 3.31 0.000 0.387 0.613
  [com.google.android.gm/com.google.android.gm.ComposeActivityGmail#0] 3.21 0.899 1.000 0.000
  [com.dropbox.android/com.dropbox.android.activity.SimpleDropboxDirectoryPickerActivity#0] 3.21 0.142 1.000 0.000
  [com.banregio.hey/com.banregio.be.financialHealth.presentation.FinancialHealthActivity#0] 3.19 0.126 0.201 0.799
  [com.google.android.permissioncontroller/com.android.packageinstaller.permission.ui.GrantPermissionsActivity#0] 3.19 0.867 0.867 0.133
  [com.banregio.hey/com.banregio.be.capitals.CapitalsActivity#1] 3.19 0.521 0.521 0.479
  [com.facebook.katana/com.facebook.timeline.actionbar.ProfileDynamicActionBarOverflowActivity#2] 3.11 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.myProfile.presentation.MyProfileActivity#1] 2.96 0.873 0.906 0.094
  [PopupWindow:42aec49#0] 2.95 0.000 1.000 0.000
  [com.whatsapp/com.whatsapp.settings.Settings#0] 2.93 0.317 0.654 0.346
  [SurfaceView - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0] 2.91 0.884 1.000 0.000
  [com.tct.simsettings/com.tct.networksetting.MobileNetworkSettings#0] 2.88 0.506 0.573 0.427
  [PopupWindow:821ed1f#0] 2.87 0.465 1.000 0.000
  [com.TotalPlay.totalplay/mx.com.totalplay.core41.home.HomeActivity#0] 2.87 0.000 1.000 0.000
  [com.microsoft.office.officehubrow/com.microsoft.office.officemobile.Pdf.OfficeMobilePdfActivity#1] 2.86 0.438 0.656 0.344
  [mx.gob.sat/mx.gob.sat.mx.gob.sat.controller.mainactivitymvvm.MovimientosRFC#0] 2.85 0.242 1.000 0.000
  [PopupWindow:3e44a61#0] 2.81 0.790 0.890 0.110
  [com.pixlr.express/com.pixlr.template.TemplateListActivity#0] 2.80 0.000 0.000 1.000
  [com.banregio.hey/com.banregio.be.accountsCards.presentation.movementdetail.JSilverMovementDetailActivity#1] 2.80 0.911 0.911 0.089
  [PopupWindow:1930810#0] 2.80 0.314 0.893 0.107
  [com.google.android.apps.photos/com.google.android.apps.photos.localmedia.ui.LocalPhotosActivity#1] 2.76 0.889 1.000 0.000
  [com.microsoft.office.officehubrow/com.microsoft.office.officesuite.PdfToWordAliasActivity#0] 2.71 0.329 0.668 0.332
  [com.google.android.googlequicksearchbox/com.google.android.apps.lens.MainActivity#0] 2.63 0.000 0.000 1.000
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.safefolder.auth.SafeFolderAuthActivity#0] 2.61 1.000 1.000 0.000
  [com.facebook.katana/com.facebook.timeline.stagingground.StagingGroundActivity#0] 2.60 0.822 0.822 0.178
  [com.banregio.hey/com.banregio.be.myProfile.presentation.introBusinessInformation.IntroBusinessInformationActivity#0] 2.60 0.849 0.849 0.151
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.receive.ui.ReceiveActivity#0] 2.59 0.600 1.000 0.000
  [com.google.android.apps.docs/com.google.android.apps.docs.common.shareitem.UploadMenuActivity#0] 2.58 0.511 0.705 0.295
  [com.android.chrome/com.google.android.apps.chrome.Main#1] 2.54 0.705 0.816 0.184
  [com.banregio.hey/com.banregio.be.softtoken.SoftTokenActivity#2] 2.54 1.000 1.000 0.000
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.receive.ui.ReceiveActivity#1] 2.47 0.391 0.507 0.493
  [com.globalhitss.claro.pay/com.globalhitss.claro.pay.ui.activities.SplashScreen#1] 2.46 1.000 1.000 0.000
  [com.android.settings/com.android.settings.Settings$UsageAccessSettingsActivity#0] 2.42 0.231 0.231 0.769
  [SurfaceView - com.google.android.youtube/com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity#0] 2.34 0.000 1.000 0.000
  [PopupWindow:c8bb93d#0] 2.33 0.255 0.255 0.745
  [com.tct.simsettings/com.tct.networksetting.MobileNetworkSettings#1] 2.32 1.000 1.000 0.000
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.favorites.browser.FavoritesActivity#0] 2.27 0.000 0.204 0.796
  [com.google.android.gm/com.google.android.gm.photo.GmailPhotoViewActivity#0] 2.22 0.450 0.450 0.550
  [com.officedocument.word.docx.document.viewer/word.alldocument.edit.ui.activity.MainActivity#1] 2.21 1.000 1.000 0.000
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.documentbrowser.filebrowser.SearchActivity#2] 2.15 0.000 0.000 1.000
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.home.HomeActivity#1] 2.00 0.000 1.000 0.000
  [com.pixlr.express/com.pixlr.express.StartupActivity#0] 1.95 0.670 0.670 0.330
  [com.android.chrome/org.chromium.chrome.browser.customtabs.CustomTabActivity#1] 1.91 0.167 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.mars.grid.MarsGridActivity#1] 1.89 1.000 1.000 0.000
  [com.google.android.youtube/com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity#0] 1.88 0.438 0.869 0.131
  [com.google.android.apps.photos/com.google.android.apps.photos.mars.grid.MarsGridActivity#2] 1.82 0.284 0.890 0.110
  [com.pixlr.express/com.pixlr.express.PixlrExpressActivity#0] 1.82 0.000 0.000 1.000
  [com.docxoffice.alldoc.officereader.viewer/com.facebook.ads.AudienceNetworkActivity#0] 1.80 0.000 1.000 0.000
  [SurfaceView - com.android.chrome/com.google.android.apps.chrome.Main#1] 1.75 0.799 1.000 0.000
  [SurfaceView - com.google.android.apps.photos/com.google.android.apps.photos.home.HomeActivity#0] 1.68 0.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.codi.CodiActivity#0] 1.63 0.893 1.000 0.000
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.settings.about.AboutActivity#0] 1.57 0.843 0.843 0.157
  [mx.gob.sat/mx.gob.sat.mx.gob.sat.controller.indicadoresmvvm.IndicadoresEconomicosMVVM#0] 1.52 0.652 1.000 0.000
  [com.google.android.googlequicksearchbox/com.google.android.apps.gsa.staticplugins.opa.OpaActivity#0] 1.50 0.000 0.154 0.846
  [com.microsoft.office.officehubrow/com.microsoft.office.lens.lenscommon.ui.LensActivity#1] 1.49 0.000 0.743 0.257
  [com.docxoffice.alldoc.officereader.viewer/com.docxoffice.alldocreader.view.activity.SplashActivity#1] 1.48 0.000 0.000 1.000
  [com.banregio.hey/com.banregio.be.dashboard.activity.DashboardActivity#1] 1.47 0.203 1.000 0.000
  [mx.gob.sat/mx.gob.sat.mx.gob.sat.controller.visorpdf.VisorPDF#0] 1.45 0.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.myProfile.presentation.MyProfileActivity#3] 1.39 1.000 1.000 0.000
  [com.whatsapp/com.whatsapp.crop.CropImage#0] 1.38 1.000 1.000 0.000
  [com.android.settings/com.android.settings.Settings$ConfigureNotificationSettingsActivity#0] 1.36 0.408 0.712 0.288
  [com.banregio.hey/com.banregio.be.dashboard.generalsettings.GeneralSettingsActivity#1] 1.35 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.biometrics.termsofservice.BiometricsTosActivity#0] 1.34 1.000 1.000 0.000
  [PopupWindow:383575f#0] 1.30 0.768 0.768 0.232
  [com.banregio.hey/com.banregio.be.accountsCards.presentation.settings.AccountCardsSettingsActivity#0] 1.28 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.helpCenter.HelpCenterActivity#1] 1.25 0.677 1.000 0.000
  [com.facebook.katana/com.facebook.photos.pandora.ui.PandoraTabPagerActivity#0] 1.23 0.000 0.260 0.740
  [com.google.android.apps.docs/com.google.android.apps.docs.doclist.documentopener.DocumentOpenerActivityDelegate#1] 1.19 1.000 1.000 0.000
  [PopupWindow:a3752ab#0] 1.16 0.370 0.566 0.434
  [com.android.systemui/com.android.systemui.recents.RecentsAppChooseActivity#0] 1.13 0.893 1.000 0.000
  [com.banregio.hey/com.banregio.be.accountsCards.presentation.settings.AccountCardsSettingsActivity#1] 1.11 0.609 0.609 0.391
  [PopupWindow:13b5b57#0] 1.10 0.728 1.000 0.000
  [PopupWindow:2314fa4#0] 1.08 0.515 0.647 0.353
  [PopupWindow:592123b#0] 1.07 0.534 0.534 0.466
  [PopupWindow:5f38141#0] 1.06 0.479 0.799 0.201
  [PopupWindow:449e9af#0] 1.05 0.705 0.705 0.295
  [com.google.android.apps.docs/com.google.android.apps.docs.common.entrypicker.EntryPickerActivity#0] 1.03 0.642 1.000 0.000
  [ #0] 1.03 0.265 0.572 0.428
  [com.banregio.hey/com.banregio.be.myFinances.presentation.MyFinancesActivity#0] 1.01 0.388 0.878 0.122
  [com.banregio.hey/com.banregio.be.login.LoginActivity#1] 1.00 1.000 1.000 0.000
  [PopupWindow:d45dc74#0] 1.00 0.543 1.000 0.000
  [PopupWindow:3a6536d#0] 1.00 0.705 0.705 0.295
  [com.banregio.hey/com.banregio.be.softtoken.SoftTokenActivity#1] 0.99 0.460 0.460 0.540
  [PopupWindow:7cc3ac7#0] 0.98 0.710 0.710 0.290
  [AtchDlg:com.google.android.gm/com.google.android.gm.ui.MailActivityGmail#0] 0.98 1.000 1.000 0.000
  [PopupWindow:d94f08d#0] 0.96 1.000 1.000 0.000
  [PopupWindow:d77b1bb#0] 0.96 0.705 0.705 0.295
  [PopupWindow:b71517a#0] 0.95 0.286 0.681 0.319
  [PopupWindow:c848935#0] 0.95 0.639 1.000 0.000
  [com.banregio.hey/com.banregio.captainflint.activity.CFSimpleViewActivity#1] 0.94 0.293 1.000 0.000
  [PopupWindow:9c44a4f#0] 0.94 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.tokenmovil.TokenActivity#0] 0.93 0.773 0.773 0.227
  [com.google.android.captiveportallogin/com.android.captiveportallogin.CaptivePortalLoginActivity#0] 0.92 1.000 1.000 0.000
  [PopupWindow:f0f56d#0] 0.92 0.000 1.000 0.000
  [AssistDisclosure#0] 0.91 0.000 0.000 1.000
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.wallets.activity.WalletsActivity#0] 0.90 0.140 1.000 0.000
  [com.google.android.packageinstaller/com.android.packageinstaller.PackageInstallerActivity#0] 0.89 1.000 1.000 0.000
  [PopupWindow:43f635#0] 0.88 0.668 0.668 0.332
  [PopupWindow:7799e29#0] 0.87 0.317 0.317 0.683
  [DockedStackDivider#0] 0.86 0.389 1.000 0.000
  [com.google.android.youtube/com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity#1] 0.83 0.000 1.000 0.000
  [com.docxoffice.alldoc.officereader.viewer/com.docxoffice.v2.ui.MainActivityV2#1] 0.82 0.000 1.000 0.000
  [com.dropbox.android/com.dropbox.product.dbapp.desktoplink.DesktopLinkActivity#0] 0.82 0.683 1.000 0.000
  [PopupWindow:7990aeb#0] 0.82 0.473 0.665 0.335
  [Splash Screen com.docxoffice.alldoc.officereader.viewer#0] 0.80 0.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.SplashActivity#0] 0.80 0.229 1.000 0.000
  [com.google.android.apps.docs/com.google.android.apps.docs.drive.app.navigation.NavigationActivity#1] 0.79 0.000 0.757 0.243
  [com.android.settings/com.android.settings.applications.InstalledAppDetails#1] 0.78 0.923 0.923 0.077
  [com.google.android.gms/com.google.android.gms.location.settings.LocationOffWarningActivity#0] 0.78 0.000 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.home.HomeActivity#2] 0.77 0.326 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.mars.entry.MarsOnboardingActivity#0] 0.77 1.000 1.000 0.000
  [com.whatsapp/com.whatsapp.gallery.NewMediaPicker#0] 0.76 0.000 0.000 1.000
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.start.activity.RootHostActivity#4] 0.76 0.141 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.archive.view.ArchivedPhotosActivity#2] 0.75 0.312 1.000 0.000
  [com.google.android.packageinstaller/com.android.packageinstaller.UninstallerActivity#0] 0.74 0.606 0.606 0.394
  [PopupWindow:bd6d323#0] 0.74 0.000 0.630 0.370
  [com.android.settings/com.android.settings.Settings$ManageAppExternalSourcesActivity#0] 0.73 1.000 1.000 0.000
  [com.facebook.katana/com.facebook.inspiration.platformsharing.activity.InpirationCameraShareDefaultAlias#1] 0.73 0.000 0.000 1.000
  [com.banregio.hey/com.banregio.be.beneficiaries.BeneficiariesActivity#1] 0.73 0.589 1.000 0.000
  [PopupWindow:73bd15f#0] 0.72 0.594 0.594 0.406
  [com.google.android.packageinstaller/com.android.packageinstaller.InstallSuccess#0] 0.72 1.000 1.000 0.000
  [SurfaceView - com.android.chrome/com.google.android.apps.chrome.Main#0] 0.72 0.164 1.000 0.000
  [PopupWindow:583ac96#0] 0.71 0.576 0.576 0.424
  [PopupWindow:6d7da68#0] 0.71 0.000 0.426 0.574
  [PopupWindow:880ce5#0] 0.71 0.579 0.579 0.421
  [com.banregio.hey/com.banregio.be.beneficiaries.BeneficiariesActivity#0] 0.70 0.120 0.120 0.880
  [PopupWindow:17d097#0] 0.70 0.564 0.564 0.436
  [com.banregio.hey/com.banregio.be.TosAppActivity#0] 0.70 0.796 1.000 0.000
  [PopupWindow:9d99752#0] 0.69 0.000 0.000 1.000
  [PopupWindow:5efac3c#0] 0.69 0.305 1.000 0.000
  [PopupWindow:759d999#0] 0.69 0.000 0.561 0.439
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.settings.notifications.NotificationsActivity#0] 0.69 0.000 0.000 1.000
  [com.microsoft.office.officehubrow/com.microsoft.office.officesuite.EditPdfAliasActivity#0] 0.68 0.000 1.000 0.000
  [com.docxoffice.alldoc.officereader.viewer/com.docxoffice.alldocreader.view.activity.ReadAllDocActivity#1] 0.68 1.000 1.000 0.000
  [com.google.android.permissioncontroller/com.android.packageinstaller.permission.ui.ManagePermissionsActivity#0] 0.66 1.000 1.000 0.000
  [PopupWindow:65f3b51#0] 0.66 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.tickets.presentation.TicketsActivity#1] 0.65 1.000 1.000 0.000
  [PopupWindow:e777818#0] 0.65 1.000 1.000 0.000
  [com.google.android.packageinstaller/com.android.packageinstaller.InstallStaging#0] 0.64 0.000 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.mars.grid.MarsGridActivity#0] 0.63 0.257 1.000 0.000
  [PopupWindow:5ed563d#0] 0.63 0.000 0.000 1.000
  [PopupWindow:8217f57#0] 0.62 1.000 1.000 0.000
  [PopupWindow:8ca0875#0] 0.62 0.000 0.000 1.000
  [PopupWindow:74c1f3b#0] 0.61 0.522 0.522 0.478
  [PopupWindow:e282bd9#0] 0.61 0.000 0.000 1.000
  [PopupWindow:9b3945c#0] 0.60 0.509 0.509 0.491
  [com.alphainventor.filemanager/com.alphainventor.filemanager.viewer.ImageViewerActivity#0] 0.60 0.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.bankstatement.BankStatementActivity#0] 0.60 0.000 1.000 0.000
  [com.dropbox.android/com.dropbox.android.activity.DbxMainActivity#1] 0.58 0.154 0.154 0.846
  [PopupWindow:14be357#0] 0.57 0.000 0.499 0.501
  [PopupWindow:cc23544#0] 0.57 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.financialHealth.presentation.FinancialHealthActivity#1] 0.56 0.000 0.000 1.000
  [mx.gob.sat/mx.gob.sat.mx.gob.sat.controller.SplashActivity#0] 0.56 0.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.bankstatement.BankStatementActivity#1] 0.55 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.tokenmovil.TokenActivity#2] 0.55 1.000 1.000 0.000
  [com.dropbox.android/com.dropbox.android.onboarding.TfeOnboardingActivity#0] 0.55 0.706 0.706 0.294
  [com.google.android.documentsui/com.android.documentsui.picker.PickActivity#1] 0.55 0.510 0.510 0.490
  [SurfaceView - com.tcl.camera/com.android.camera.CaptureActivity#0] 0.54 1.000 1.000 0.000
  [com.whatsapp/com.whatsapp.voipcalling.VoipActivityV2#2] 0.54 0.491 0.491 0.509
  [mx.gob.sat/mx.gob.sat.mx.gob.sat.controller.mainactivitymvvm.CertificadorSelloDigital#1] 0.54 0.486 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.localmedia.ui.LocalPhotosActivity#2] 0.53 0.555 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.albums.grid.DeviceFoldersActivity#0] 0.50 0.311 1.000 0.000
  [com.android.phone/com.android.phone.EmergencyDialer#0] 0.49 0.000 0.000 1.000
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.safefolder.browser.SafeFolderBrowserActivity#1] 0.48 0.000 0.000 1.000
  [com.tcl.android.launcher/com.tcl.android.launcher.dragndrop.AddItemActivity#0] 0.47 0.592 1.000 0.000
  [PopupWindow:7940eb6#0] 0.46 0.000 0.698 0.302
  [PopupWindow:212a1d5#0] 0.45 0.301 1.000 0.000
  [com.google.android.apps.docs/com.google.android.apps.docs.common.drives.doclist.actions.activity.DoclistActionsMenuWrapperActivity#0] 0.45 0.170 0.170 0.830
  [com.banregio.hey/com.banregio.be.immediatesaving.ImmediateSavingActivity#0] 0.41 1.000 1.000 0.000
  [PopupWindow:a3761cf#0] 0.40 1.000 1.000 0.000
  [PopupWindow:2f6d22c#0] 0.40 0.000 0.428 0.572
  [PopupWindow:5b97084#0] 0.39 0.000 1.000 0.000
  [com.wallet.crypto.trustapp/com.wallet.crypto.trustapp.ui.receive.ui.ReceiveActivity#2] 0.39 0.000 0.628 0.372
  [com.google.android.documentsui/com.android.documentsui.inspector.InspectorActivity#0] 0.39 0.000 1.000 0.000
  [PopupWindow:dca780d#0] 0.38 0.574 0.574 0.426
  [com.facebook.katana/com.facebook.timeline.actionbar.ProfileDynamicActionBarOverflowActivity#0] 0.37 0.000 1.000 0.000
  [com.google.android.apps.nbu.files/com.google.android.apps.nbu.files.snoozing.settings.SnoozedCardListActivity#0] 0.36 1.000 1.000 0.000
  [com.alphainventor.filemanager/com.alphainventor.filemanager.viewer.VideoPlayerActivity#0] 0.36 0.000 1.000 0.000
  [PopupWindow:9568a2e#0] 0.34 0.177 0.177 0.823
  [com.pixlr.express/com.pixlr.express.StartupActivity#1] 0.33 1.000 1.000 0.000
  [com.alphainventor.filemanager/com.alphainventor.filemanager.activity.MainActivity#2] 0.33 0.346 1.000 0.000
  [com.facebook.orca/com.facebook.messenger.neue.MainActivity#1] 0.33 0.276 0.276 0.724
  [PopupWindow:d36164c#0] 0.29 0.000 1.000 0.000
  [com.alphainventor.filemanager/com.alphainventor.filemanager.activity.ArchiveActivity#0] 0.29 0.000 1.000 0.000
  [ru.zdevs.zarchiver/ru.zdevs.zarchiver.ZArchiver#3] 0.28 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.introCardRequest.IntroCardRequestSplashActivity#0] 0.28 1.000 1.000 0.000
  [mx.gob.sat/mx.gob.sat.mx.gob.sat.controller.mainactivitymvvm.EFirmaInformation#1] 0.28 1.000 1.000 0.000
  [com.facebook.katana/com.facebook.inspiration.activity.InspirationCameraActivity#1] 0.27 1.000 1.000 0.000
  [com.microsoft.office.officehubrow/com.microsoft.office.officesuite.PdfToWordAliasActivity#1] 0.27 0.000 1.000 0.000
  [PopupWindow:7d9da0e#0] 0.26 0.199 1.000 0.000
  [com.banregio.hey/com.banregio.be.codi.CodiActivity#1] 0.26 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.dashboard.activity.DashboardActivity#2] 0.25 1.000 1.000 0.000
  [com.android.settings/com.android.settings.applications.InstalledAppDetails#2] 0.24 1.000 1.000 0.000
  [com.android.settings/com.android.settings.applications.InstalledAppDetails#3] 0.23 0.000 1.000 0.000
  [com.android.systemui/com.android.systemui.recents.RecentsAppChooseActivity#1] 0.21 1.000 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.archive.view.ArchivedPhotosActivity#1] 0.21 0.680 0.680 0.320
  [PopupWindow:867e3ea#0] 0.21 1.000 1.000 0.000
  [PopupWindow:9827d6d#0] 0.20 0.339 0.339 0.661
  [PopupWindow:ab2f2df#0] 0.20 1.000 1.000 0.000
  [com.banregio.hey/com.banregio.be.tokenmovil.TokenActivity#1] 0.18 1.000 1.000 0.000
  [PopupWindow:4e49f41#0] 0.18 0.474 1.000 0.000
  [PopupWindow:8c5697c#0] 0.18 0.673 0.673 0.327
  [PopupWindow:da23212#0] 0.17 1.000 1.000 0.000
  [com.facebook.orca/com.facebook.messenger.neue.MainActivity#2] 0.17 0.000 1.000 0.000
  [PopupWindow:45c0035#0] 0.16 0.609 0.609 0.391
  [com.banregio.hey/com.banregio.be.transferencias.bank.BankActivity#1] 0.15 0.000 1.000 0.000
  [com.officedocument.word.docx.document.viewer/office.file.ui.OpenFileActivity#1] 0.15 1.000 1.000 0.000
  [PopupWindow:8004967#0] 0.15 0.570 0.570 0.430
  [PopupWindow:1f3957c#0] 0.14 0.536 0.536 0.464
  [com.android.settings/com.android.settings.SubSettings#1] 0.12 1.000 1.000 0.000
  [ru.zdevs.zarchiver/ru.zdevs.zarchiver.ZArchiver#2] 0.12 1.000 1.000 0.000
  [com.google.android.gms/com.google.android.gms.auth.api.phone.ui.UserConsentPromptActivity#1] 0.12 1.000 1.000 0.000
  [com.google.android.apps.photos/com.google.android.apps.photos.home.HomeActivity#1] 0.11 0.000 1.000 0.000
  [PopupWindow:7cd1311#0] 0.11 0.000 1.000 0.000
  [com.google.android.packageinstaller/com.android.packageinstaller.PackageInstallerActivity#1] 0.10 0.000 0.000 1.000
  [com.facebook.katana/com.facebook.browser.lite.BrowserLiteInMainProcessActivity#1] 0.09 1.000 1.000 0.000
  [PopupWindow:395200b#0] 0.09 0.000 1.000 0.000

Visible layers (count = 64)
GraphicBufferProducers: 10, max 4096
+ ContainerLayer (Display Root#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000002, tr=[0.00, 0.00][0.00, 0.00]
      parent=none
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (mBelowAppWindowsContainers#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=Display Root#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (WallpaperWindowToken{b6c3244 token=android.os.Binder@b6fe757}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=mBelowAppWindowsContainers#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (ce291c0 com.android.systemui.ImageWallpaper#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=WallpaperWindowToken{b6c3244 token=android.os.Binder@b6fe757}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (com.android.systemui.ImageWallpaper#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=( 720,1520), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=1, invalidate=1, dataspace=Default, defaultPixelFormat=RGBx_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000003, tr=[0.00, 0.00][0.00, 0.00]
      parent=ce291c0 com.android.systemui.ImageWallpaper#0
      zOrderRelativeOf=none
      activeBuffer=[ 720x1520: 736,RGBA_8888], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={windowType:2013, ownerUID:10070}
mTexName=8 mCurrentTexture=-1
mCurrentCrop=[0,0,0,0] mCurrentTransform=0
mAbandoned=0
- BufferQueue mMaxAcquiredBufferCount=1 mMaxDequeuedBufferCount=2
  mDequeueBufferCannotBlock=0 mAsyncMode=0
  mQueueBufferCanDrop=0 mLegacyBufferDrop=1
  default-size=[720x1520] default-format=2 transform-hint=00 frame-counter=1
FIFO(0):
 this=0xb0223000 (mConsumerName=com.android.systemui.ImageWallpaper#0, mConnectedApi=0, mConsumerUsageBits=2304, mId=5, mPid=579, producer=[-1:com.android.systemui], consumer=[579:/system/bin/surfaceflinger])
Slots:
  [00:0x0] state=FREE    
  [01:0x0] state=FREE    
  [02:0x0] state=FREE    
    *BufferQueueDump mIsBackupBufInited=0, mAcquiredBufs(size=0)
     [-1] mLastAcquiredBuf->mGraphicBuffer->handle=0xb216f400
     FPS ring buffer:

+ ContainerLayer (com.android.server.wm.DisplayContent$TaskStackContainers@459e66b#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        1, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=Display Root#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (animationLayer#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.server.wm.DisplayContent$TaskStackContainers@459e66b#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (Stack=0#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0, 720, 1520], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.server.wm.DisplayContent$TaskStackContainers@459e66b#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ColorLayer (animation background stackId=0#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=0, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=Stack=0#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (Task=1311#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=Stack=0#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={taskId:1311}

+ ContainerLayer (AppWindowToken{80aa02e token=Token{ef112a9 ActivityRecord{7d62630 u0 com.tcl.android.launcher/.Launcher t1311}}}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=Task=1311#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (c21cf0f com.tcl.android.launcher/com.tcl.android.launcher.Launcher#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=AppWindowToken{80aa02e token=Token{ef112a9 ActivityRecord{7d62630 u0 com.tcl.android.launcher/.Launcher t1311}}}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (homeAnimationLayer#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        2, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.server.wm.DisplayContent$TaskStackContainers@459e66b#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (Stack=316#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        3, pos=(0,0), size=(   0,   0), crop=[  0,   0, 720, 1520], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.server.wm.DisplayContent$TaskStackContainers@459e66b#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ColorLayer (animation background stackId=316#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=0, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=Stack=316#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (Task=1624#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=Stack=316#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={taskId:1624}

+ ColorLayer (Letterbox - top#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=       -1, pos=(0,0), size=(   0,   0), crop=[  0,   0, 720,  56], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=AppWindowToken{28526be token=Token{8de5979 ActivityRecord{ec40640 u0 mx.gob.sat/.mx.gob.sat.controller.SplashActivity t1624}}}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (AppWindowToken{28526be token=Token{8de5979 ActivityRecord{ec40640 u0 mx.gob.sat/.mx.gob.sat.controller.SplashActivity t1624}}}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=Task=1624#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (AppWindowToken{f1b3f2c token=Token{400f6df ActivityRecord{c9ec17e u0 mx.gob.sat/.mx.gob.sat.controller.MainActivity t1624}}}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        1, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=Task=1624#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (Stack=317#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        5, pos=(0,0), size=(   0,   0), crop=[  0,   0, 720, 1520], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.server.wm.DisplayContent$TaskStackContainers@459e66b#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ColorLayer (animation background stackId=317#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=0, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=Stack=317#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (Task=1625#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=Stack=317#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={taskId:1625}

+ ContainerLayer (AppWindowToken{1403a39 token=Token{171f200 ActivityRecord{9922083 u0 com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity t1625}}}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=Task=1625#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (8d486c6 com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=AppWindowToken{1403a39 token=Token{171f200 ActivityRecord{9922083 u0 com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity t1625}}}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (Bounds for - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=       -2, pos=(0,0), size=(   0,   0), crop=[  0,   0, 720, 1520], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=RGBx_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}
mTexName=3867 mCurrentTexture=-1
mCurrentCrop=[0,0,0,0] mCurrentTransform=0
mAbandoned=0
- BufferQueue mMaxAcquiredBufferCount=1 mMaxDequeuedBufferCount=2
  mDequeueBufferCannotBlock=0 mAsyncMode=0
  mQueueBufferCanDrop=0 mLegacyBufferDrop=1
  default-size=[1x1] default-format=2 transform-hint=00 frame-counter=0
FIFO(0):
 this=0xacb7b000 (mConsumerName=Bounds for - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0, mConnectedApi=0, mConsumerUsageBits=2304, mId=3768, mPid=579, producer=[-1:], consumer=[579:/system/bin/surfaceflinger])
Slots:
  [00:0x0] state=FREE    
  [01:0x0] state=FREE    
  [02:0x0] state=FREE    
    *BufferQueueDump mIsBackupBufInited=0, mAcquiredBufs(size=0)
     FPS ring buffer:

+ BufferLayer (SurfaceView - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#1)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=       -1, pos=(0,56), size=( 720,1368), crop=[  0,   0, 720, 1368], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=RGBA_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}
mTexName=3875 mCurrentTexture=-1
mCurrentCrop=[0,0,0,0] mCurrentTransform=0
mAbandoned=0
- BufferQueue mMaxAcquiredBufferCount=1 mMaxDequeuedBufferCount=2
  mDequeueBufferCannotBlock=0 mAsyncMode=0
  mQueueBufferCanDrop=0 mLegacyBufferDrop=1
  default-size=[720x1368] default-format=1 transform-hint=00 frame-counter=0
FIFO(0):
 this=0xacbfc000 (mConsumerName=SurfaceView - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#1, mConnectedApi=0, mConsumerUsageBits=2304, mId=3774, mPid=579, producer=[-1:], consumer=[579:/system/bin/surfaceflinger])
Slots:
  [00:0x0] state=FREE    
  [01:0x0] state=FREE    
  [02:0x0] state=FREE    
    *BufferQueueDump mIsBackupBufInited=0, mAcquiredBufs(size=0)
     FPS ring buffer:

+ ColorLayer (Background for -SurfaceView - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#1)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,56), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=0, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000003, tr=[0.00, 0.00][0.00, 0.00]
      parent=SurfaceView - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#1
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (com.android.chrome/ChromeNativeWindowSurface#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,56), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=0, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=SurfaceView - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#1
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (com.android.chrome/ChromeChildSurface#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=1 count=1)
    [  0,  56, 720, 1424]
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,56), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=1, invalidate=0, dataspace=BT709 sRGB Full range, defaultPixelFormat=RGBA_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000002, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.chrome/ChromeNativeWindowSurface#0
      zOrderRelativeOf=none
      activeBuffer=[ 720x1368: 736,RGBA_8888], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=1 count=1)
    [  0,   0, 720, 1520]
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=( 720,1520), crop=[  0,   0, 720, 1520], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=0, dataspace=Default, defaultPixelFormat=RGBA_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=8d486c6 com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0
      zOrderRelativeOf=none
      activeBuffer=[ 720x1520: 736,RGBA_8888], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={windowType:1, ownerUID:10157}
mTexName=3866 mCurrentTexture=1
mCurrentCrop=[0,0,0,0] mCurrentTransform=0
mAbandoned=0
- BufferQueue mMaxAcquiredBufferCount=1 mMaxDequeuedBufferCount=2
  mDequeueBufferCannotBlock=0 mAsyncMode=0
  mQueueBufferCanDrop=0 mLegacyBufferDrop=1
  default-size=[720x1520] default-format=1 transform-hint=00 frame-counter=749
FIFO(0):
 this=0xad79e000 (mConsumerName=com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0, mConnectedApi=1, mConsumerUsageBits=2304, mId=3767, mPid=579, producer=[17105:com.android.chrome], consumer=[579:/system/bin/surfaceflinger])
Slots:
 >[01:0xacb8ce80] state=ACQUIRED 0xad807e40 frame=749 [ 720x1520: 736,  1]
  [00:0xacb8c3e0] state=FREE     0xad809100 frame=747 [ 720x1520: 736,  1]
  [02:0xad80f340] state=FREE     0xad8459c0 frame=748 [ 720x1520: 736,  1]
    *BufferQueueDump mIsBackupBufInited=0, mAcquiredBufs(size=1)
     [00] handle=0xad807e40, fence=0xb0215948, time=0x24c9337d9d5d, xform=0x00
     FPS ring buffer:
     (0) 21:17:17.147 fps=7.83  dur=1404.34       max=1014.98       min=5.51 
     (1) 21:17:19.679 fps=0.39  dur=2531.84       max=2531.84       min=2531.84
     (2) 21:17:20.880 fps=13.32 dur=1201.16       max=747.96        min=4.61 
     (3) 21:17:26.486 fps=0.18  dur=5606.13       max=5606.13       min=5606.13
     (4) 21:17:27.769 fps=0.78  dur=1282.51       max=1282.51       min=1282.51
     (5) 21:17:36.359 fps=0.23  dur=8590.36       max=7839.38       min=750.98
     (6) 21:17:55.408 fps=1.47  dur=19049.16      max=18441.03      min=3.74 
     (7) 21:17:13.339 fps=35.25 dur=1191.58       max=319.15        min=10.59
     (8) 21:17:14.737 fps=12.16 dur=1398.42       max=1146.21       min=6.07 
     (9) 21:17:15.743 fps=2.98  dur=1005.69       max=963.11        min=15.00

+ ContainerLayer (boostedAnimationLayer#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        6, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.server.wm.DisplayContent$TaskStackContainers@459e66b#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (splitScreenDividerAnchor#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=       14, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=com.android.server.wm.DisplayContent$TaskStackContainers@459e66b#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (WindowToken{c3d84a7 android.os.BinderProxy@5003dc1}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        1, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=mAboveAppWindowsContainers#0
      zOrderRelativeOf=splitScreenDividerAnchor#0
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (4c68d54 DockedStackDivider#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,1211), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=WindowToken{c3d84a7 android.os.BinderProxy@5003dc1}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (mAboveAppWindowsContainers#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        2, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=Display Root#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (WindowToken{158dd87 android.view.ViewRootImpl$W@70f9c6}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=mAboveAppWindowsContainers#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (3bfa4b4 NotchShortcut#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=WindowToken{158dd87 android.view.ViewRootImpl$W@70f9c6}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (NotchShortcut#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   1,   1), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=RGBA_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000003, tr=[0.00, 0.00][0.00, 0.00]
      parent=3bfa4b4 NotchShortcut#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={windowType:2041, ownerUID:1000}
mTexName=6 mCurrentTexture=-1
mCurrentCrop=[0,0,0,0] mCurrentTransform=0
mAbandoned=0
- BufferQueue mMaxAcquiredBufferCount=1 mMaxDequeuedBufferCount=2
  mDequeueBufferCannotBlock=0 mAsyncMode=0
  mQueueBufferCanDrop=0 mLegacyBufferDrop=1
  default-size=[1x1] default-format=1 transform-hint=00 frame-counter=0
FIFO(0):
 this=0xb0222000 (mConsumerName=NotchShortcut#0, mConnectedApi=1, mConsumerUsageBits=2304, mId=3, mPid=579, producer=[1169:system_server], consumer=[579:/system/bin/surfaceflinger])
Slots:
  [02:0xadfb96e0] state=FREE     0xb216f280 frame=0 [   1x   1:  32,  1]
  [01:0xadfb91e0] state=FREE     0xb216f1c0 frame=0 [   1x   1:  32,  1]
  [00:0xb02685a0] state=FREE     0xb216f100 frame=0 [   1x   1:  32,  1]
    *BufferQueueDump mIsBackupBufInited=0, mAcquiredBufs(size=0)
     FPS ring buffer:

+ ContainerLayer (WindowToken{2e5db2 android.os.BinderProxy@86cc567}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        2, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=mAboveAppWindowsContainers#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (820a2fe AssistPreviewPanel#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,1520), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=WindowToken{2e5db2 android.os.BinderProxy@86cc567}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (WindowToken{f69de32 android.view.ViewRootImpl$W@e56363d}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        3, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=mAboveAppWindowsContainers#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (632c4d7 RatioBar#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,1280), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=WindowToken{f69de32 android.view.ViewRootImpl$W@e56363d}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (RatioBar#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,1280), size=( 720, 144), crop=[  0,   0, 720, 144], cornerRadius=0.000000, isProtected=0, isOpaque=1, invalidate=1, dataspace=Default, defaultPixelFormat=RGBA_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000003, tr=[0.00, 0.00][0.00, 0.00]
      parent=632c4d7 RatioBar#0
      zOrderRelativeOf=none
      activeBuffer=[ 720x 144: 736,RGBA_8888], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={windowType:2039, ownerUID:1000}
mTexName=5 mCurrentTexture=1
mCurrentCrop=[0,0,0,0] mCurrentTransform=0
mAbandoned=0
- BufferQueue mMaxAcquiredBufferCount=1 mMaxDequeuedBufferCount=2
  mDequeueBufferCannotBlock=0 mAsyncMode=0
  mQueueBufferCanDrop=0 mLegacyBufferDrop=1
  default-size=[720x144] default-format=1 transform-hint=00 frame-counter=76
FIFO(0):
 this=0xb0221000 (mConsumerName=RatioBar#0, mConnectedApi=1, mConsumerUsageBits=2304, mId=2, mPid=579, producer=[1169:system_server], consumer=[579:/system/bin/surfaceflinger])
Slots:
 >[01:0xb0268780] state=ACQUIRED 0xb028c300 frame=76 [ 720x 144: 736,  1]
  [02:0xb0268640] state=FREE     0xb028c3c0 frame=74 [ 720x 144: 736,  1]
  [00:0xb02686e0] state=FREE     0xb028c240 frame=75 [ 720x 144: 736,  1]
    *BufferQueueDump mIsBackupBufInited=0, mAcquiredBufs(size=1)
     [00] handle=0xb028c300, fence=0xb0205168, time=0x232b9e24b8c1, xform=0x00
     FPS ring buffer:
     (0) 17:13:31.512 fps=0.00  dur=219919.72     max=219919.72     min=219919.72
     (1) 17:19:27.701 fps=0.01  dur=187420.13     max=187420.13     min=187420.13
     (2) 18:04:13.805 fps=0.00  dur=2686103.41    max=2686103.41    min=2686103.41
     (3) 18:26:50.620 fps=0.00  dur=1356814.95    max=1356814.95    min=1356814.95
     (4) 18:48:14.575 fps=0.00  dur=1283955.07    max=1283955.07    min=1283955.07
     (5) 20:03:54.785 fps=0.00  dur=4540209.95    max=4540209.95    min=4540209.95
     (6) 20:48:19.88  fps=0.00  dur=2664303.17    max=2664303.17    min=2664303.17
     (7) 17:03:08.633 fps=0.00  dur=1125638.25    max=1125638.25    min=1125638.25
     (8) 17:04:28.678 fps=0.02  dur=50794.54      max=50794.54      min=50794.54
     (9) 17:08:30.105 fps=0.01  dur=158911.62     max=158911.62     min=158911.62

+ ContainerLayer (mImeWindowsContainers#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=       -1, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=Display Root#0
      zOrderRelativeOf=WindowToken{8ab247 android.os.BinderProxy@57a0a61}#0
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (WindowToken{452e8ce android.os.Binder@dc099c9}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=mImeWindowsContainers#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (ccce8ca InputMethod#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,56), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=WindowToken{452e8ce android.os.Binder@dc099c9}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (WindowToken{8ab247 android.os.BinderProxy@57a0a61}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        4, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=mAboveAppWindowsContainers#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (749ba74 StatusBar#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=WindowToken{8ab247 android.os.BinderProxy@57a0a61}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (StatusBar#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=1 count=1)
    [  0,   0, 720,  56]
  Region SurfaceDamageRegion (this=1 count=1)
    [  0,   0, 720,  56]
      layerStack=   0, z=        0, pos=(0,0), size=( 720,  56), crop=[  0,   0, 720,  56], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=0, dataspace=Default, defaultPixelFormat=RGBA_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=749ba74 StatusBar#0
      zOrderRelativeOf=none
      activeBuffer=[ 720x  56: 736,RGBA_8888], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={windowType:2000, ownerUID:10070}
mTexName=4 mCurrentTexture=2
mCurrentCrop=[0,0,0,0] mCurrentTransform=0
mAbandoned=0
- BufferQueue mMaxAcquiredBufferCount=1 mMaxDequeuedBufferCount=2
  mDequeueBufferCannotBlock=0 mAsyncMode=0
  mQueueBufferCanDrop=0 mLegacyBufferDrop=1
  default-size=[720x56] default-format=1 transform-hint=00 frame-counter=82934
FIFO(0):
 this=0xb0227000 (mConsumerName=StatusBar#0, mConnectedApi=1, mConsumerUsageBits=2304, mId=7, mPid=579, producer=[1390:com.android.systemui], consumer=[579:/system/bin/surfaceflinger])
Slots:
 >[02:0xb02e8880] state=ACQUIRED 0xacc5c900 frame=82934 [ 720x  56: 736,  1]
  [00:0xacb8d600] state=FREE     0xb028e040 frame=82932 [ 720x  56: 736,  1]
  [01:0xacb8bb20] state=FREE     0xacc5c6c0 frame=82933 [ 720x  56: 736,  1]
    *BufferQueueDump mIsBackupBufInited=0, mAcquiredBufs(size=1)
     [00] handle=0xacc5c900, fence=0xb0205048, time=0x24c93eff199c, xform=0x00
     FPS ring buffer:
     (0) 21:17:51.566 fps=0.58  dur=1714.83       max=1714.83       min=1714.83
     (1) 21:17:52.886 fps=1.52  dur=1319.97       max=1314.45       min=5.52 
     (2) 21:17:54.587 fps=13.52 dur=1701.27       max=996.53        min=5.58 
     (3) 21:17:55.596 fps=1.98  dur=1008.48       max=1000.34       min=8.14 
     (4) 21:17:41.503 fps=10.81 dur=1202.88       max=915.91        min=6.16 
     (5) 21:17:44.522 fps=0.99  dur=3019.00       max=2286.00       min=4.65 
     (6) 21:17:45.535 fps=1.97  dur=1013.20       max=1003.98       min=9.22 
     (7) 21:17:47.47  fps=1.32  dur=1511.25       max=1502.19       min=9.05 
     (8) 21:17:48.536 fps=4.03  dur=1489.14       max=917.19        min=5.92 
     (9) 21:17:49.851 fps=1.52  dur=1315.28       max=1308.41       min=6.87 

+ ContainerLayer (WindowToken{972005 android.os.BinderProxy@aa66f}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        5, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=mAboveAppWindowsContainers#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (4f8585a NavigationBar0#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,1424), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=WindowToken{972005 android.os.BinderProxy@aa66f}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (NavigationBar0#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=1 count=1)
    [  0, 1424, 720, 1520]
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,1424), size=( 720,  96), crop=[  0,   0, 720,  96], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=0, dataspace=Default, defaultPixelFormat=RGBA_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=4f8585a NavigationBar0#0
      zOrderRelativeOf=none
      activeBuffer=[ 720x  96: 736,RGBA_8888], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={windowType:2019, ownerUID:10070}
mTexName=3822 mCurrentTexture=1
mCurrentCrop=[0,0,0,0] mCurrentTransform=0
mAbandoned=0
- BufferQueue mMaxAcquiredBufferCount=1 mMaxDequeuedBufferCount=2
  mDequeueBufferCannotBlock=0 mAsyncMode=0
  mQueueBufferCanDrop=0 mLegacyBufferDrop=1
  default-size=[720x96] default-format=1 transform-hint=00 frame-counter=492
FIFO(0):
 this=0xb02a9000 (mConsumerName=NavigationBar0#0, mConnectedApi=1, mConsumerUsageBits=2304, mId=3722, mPid=579, producer=[1390:com.android.systemui], consumer=[579:/system/bin/surfaceflinger])
Slots:
 >[01:0xad80dae0] state=ACQUIRED 0xad7ef480 frame=492 [ 720x  96: 736,  1]
  [00:0xacb8b6c0] state=FREE     0xacb81040 frame=490 [ 720x  96: 736,  1]
  [02:0xad80d900] state=FREE     0xad8070c0 frame=491 [ 720x  96: 736,  1]
    *BufferQueueDump mIsBackupBufInited=0, mAcquiredBufs(size=1)
     [00] handle=0xad7ef480, fence=0xb02050c8, time=0x24c938fbafba, xform=0x00
     FPS ring buffer:
     (0) 21:17:17.1   fps=6.74  dur=2521.21       max=2064.61       min=4.16 
     (1) 21:17:20.751 fps=2.13  dur=3749.07       max=3548.51       min=11.00
     (2) 21:17:40.570 fps=0.66  dur=19819.03      max=19567.80      min=3.81 
     (3) 21:17:52.841 fps=0.08  dur=12271.00      max=12271.00      min=12271.00
     (4) 21:17:55.370 fps=5.93  dur=2528.98       max=2300.80       min=4.85 
     (5) 21:16:30.949 fps=1.22  dur=11465.45      max=11249.36      min=9.49 
     (6) 21:17:01.426 fps=0.46  dur=30476.79      max=30257.00      min=13.72
     (7) 21:17:03.656 fps=5.83  dur=2230.02       max=2031.40       min=13.17
     (8) 21:17:07.534 fps=3.35  dur=3878.55       max=3683.16       min=8.62 
     (9) 21:17:14.480 fps=4.18  dur=6945.74       max=6473.91       min=13.62

+ ContainerLayer (WindowToken{cfd314a android.os.Binder@8df4c97}#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        6, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=mAboveAppWindowsContainers#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (68b03f0 Menú de Accesibilidad#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,1424), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000000, tr=[0.00, 0.00][0.00, 0.00]
      parent=WindowToken{cfd314a android.os.Binder@8df4c97}#0
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (Input Consumer pip_input_consumer#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0, 720, 1520], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=none
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (Input Consumer recents_animation_input_consumer#1)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        0, pos=(0,0), size=(   0,   0), crop=[  0,   0, 720, 1520], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=none
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ ContainerLayer (Display Overlays#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=        1, pos=(0,0), size=(   0,   0), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=Unknown/None, color=(0.000,0.000,0.000,1.000), flags=0x00000002, tr=[0.00, 0.00][0.00, 0.00]
      parent=none
      zOrderRelativeOf=none
      activeBuffer=[   0x   0:   0,Unknown/None], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}

+ BufferLayer (Magnification Overlay#0)
  Region TransparentRegion (this=0 count=0)
  Region VisibleRegion (this=0 count=0)
  Region SurfaceDamageRegion (this=0 count=0)
      layerStack=   0, z=   270000, pos=(0,0), size=( 720,1520), crop=[  0,   0,  -1,  -1], cornerRadius=0.000000, isProtected=0, isOpaque=0, invalidate=1, dataspace=Default, defaultPixelFormat=RGBA_8888, color=(0.000,0.000,0.000,1.000), flags=0x00000001, tr=[0.00, 0.00][0.00, 0.00]
      parent=Display Overlays#0
      zOrderRelativeOf=none
      activeBuffer=[ 720x1520: 736,RGBA_8888], tr=[0.00, 0.00][0.00, 0.00] queued-frames=0, mRefreshPending=0, metadata={}
mTexName=7 mCurrentTexture=1
mCurrentCrop=[0,0,0,0] mCurrentTransform=0
mAbandoned=0
- BufferQueue mMaxAcquiredBufferCount=1 mMaxDequeuedBufferCount=2
  mDequeueBufferCannotBlock=0 mAsyncMode=0
  mQueueBufferCanDrop=0 mLegacyBufferDrop=1
  default-size=[720x1520] default-format=1 transform-hint=00 frame-counter=215
FIFO(0):
 this=0xad645000 (mConsumerName=Magnification Overlay#0, mConnectedApi=2, mConsumerUsageBits=2304, mId=4, mPid=579, producer=[1169:system_server], consumer=[579:/system/bin/surfaceflinger])
Slots:
 >[01:0xad704cc0] state=ACQUIRED 0xadf83ac0 frame=215 [ 720x1520: 736,  1]
  [02:0xb0269a40] state=FREE     0xb028c900 frame=213 [ 720x1520: 736,  1]
  [00:0xad7040e0] state=FREE     0xb028ea00 frame=214 [ 720x1520: 736,  1]
    *BufferQueueDump mIsBackupBufInited=0, mAcquiredBufs(size=1)
     [00] handle=0xadf83ac0, fence=0xb02059c8, time=0x1eb909007cb8, xform=0x00
     FPS ring buffer:
     (0) 18:13:45.675 fps=0.11  dur=18267.10      max=18250.50      min=16.60
     (1) 19:26:46.199 fps=0.00  dur=4380523.66    max=4380024.78    min=14.94
     (2) 19:26:47.559 fps=8.09  dur=1360.53       max=1130.44       min=14.52
     (3) 19:26:48.572 fps=8.89  dur=1012.49       max=849.02        min=15.80
     (4) 10:35:10.738 fps=12.04 dur=2158.90       max=1554.46       min=15.11
     (5) 10:35:13.995 fps=0.31  dur=3256.75       max=3256.75       min=3256.75
     (6) 11:48:15.208 fps=0.01  dur=2658747.82    max=2658196.73    min=8.53 
     (7) 11:48:22.942 fps=1.29  dur=7733.26       max=7486.13       min=16.25
     (8) 18:13:26.395 fps=0.00  dur=20204876.93   max=20204329.19   min=15.83
     (9) 18:13:27.408 fps=19.74 dur=1013.15       max=600.49        min=8.80 


Composition layers
* compositionengine::Layer 0xb028fa8c (com.android.systemui.ImageWallpaper#0)
    frontend:
      isSecure=false geomUsesSourceCrop=true geomBufferUsesDisplayInverseTransform=false geomLayerTransform 0x00000000 (ROT_0 ) 0x00 (IDENTITY )
    1.0000  0.0000  0.0000
    0.0000  1.0000  0.0000
    0.0000  0.0000  1.0000

      geomBufferSize=[0 0 720 1520] geomContentCrop=[0 0 720 1520] geomCrop=[0 0 -1 -1] geomBufferTransform=0 
        Region geomActiveTransparentRegion (this=0xb028fb38, count=1)
    [  0,   0,   0,   0]
      geomLayerBounds=[0.000000 0.000000 720.000000 1520.000000] 
      blend=NONE (1) alpha=1.000000 
      type=0 appId=0 composition type=DEVICE (2) 
      buffer: buffer=0xb0268820 slot=0 
      sideband stream=0x0 
      color=[0 0 0] 
      dataspace=UNKNOWN (0) hdr metadata types=0 colorTransform=[[1.000,0.000,0.000,0.000][0.000,1.000,0.000,0.000][0.000,0.000,1.000,0.000][0.000,0.000,0.000,1.000]]
* compositionengine::Layer 0xb028f00c (animation background stackId=0#0)
    frontend:
      isSecure=false geomUsesSourceCrop=false geomBufferUsesDisplayInverseTransform=false geomLayerTransform 0x00000000 (ROT_0 ) 0x00 (IDENTITY )
    1.0000  0.0000  0.0000
    0.0000  1.0000  0.0000
    0.0000  0.0000  1.0000

      geomBufferSize=[0 0 -1 -1] geomContentCrop=[0 0 -1 -1] geomCrop=[0 0 -1 -1] geomBufferTransform=0 
        Region geomActiveTransparentRegion (this=0xb028f0b8, count=1)
    [  0,   0,   0,   0]
      geomLayerBounds=[0.000000 0.000000 0.000000 0.000000] 
      blend=INVALID (0) alpha=1.000000 
      type=0 appId=0 composition type=INVALID (0) 
      buffer: buffer=0x0 slot=-1 
      sideband stream=0x0 
      color=[0 0 0] 
      dataspace=UNKNOWN (0) hdr metadata types=0 colorTransform=[[1.000,0.000,0.000,0.000][0.000,1.000,0.000,0.000][0.000,0.000,1.000,0.000][0.000,0.000,0.000,1.000]]
* compositionengine::Layer 0xb2182b4c (animation background stackId=316#0)
    frontend:
      isSecure=false geomUsesSourceCrop=false geomBufferUsesDisplayInverseTransform=false geomLayerTransform 0x00000000 (ROT_0 ) 0x00 (IDENTITY )
    1.0000  0.0000  0.0000
    0.0000  1.0000  0.0000
    0.0000  0.0000  1.0000

      geomBufferSize=[0 0 -1 -1] geomContentCrop=[0 0 -1 -1] geomCrop=[0 0 -1 -1] geomBufferTransform=0 
        Region geomActiveTransparentRegion (this=0xb2182bf8, count=1)
    [  0,   0,   0,   0]
      geomLayerBounds=[0.000000 0.000000 0.000000 0.000000] 
      blend=INVALID (0) alpha=1.000000 
      type=0 appId=0 composition type=INVALID (0) 
      buffer: buffer=0x0 slot=-1 
      sideband stream=0x0 
      color=[0 0 0] 
      dataspace=UNKNOWN (0) hdr metadata types=0 colorTransform=[[1.000,0.000,0.000,0.000][0.000,1.000,0.000,0.000][0.000,0.000,1.000,0.000][0.000,0.000,0.000,1.000]]
* compositionengine::Layer 0xb218458c (Letterbox - top#0)
    frontend:
      isSecure=false geomUsesSourceCrop=false geomBufferUsesDisplayInverseTransform=false geomLayerTransform 0x00000000 (ROT_0 ) 0x05 (SCALE TRANSLATE )
    1.0498  0.0000  -17.9197
    0.0000  1.0498  -37.8304
    0.0000  0.0000  1.0000

      geomBufferSize=[0 0 -1 -1] geomContentCrop=[0 0 -1 -1] geomCrop=[0 0 720 56] geomBufferTransform=0 
        Region geomActiveTransparentRegion (this=0xb2184638, count=1)
    [  0,   0,   0,   0]
      geomLayerBounds=[17.069986 36.036652 702.930054 56.000000] 
      blend=PREMULTIPLIED (2) alpha=0.399902 
      type=0 appId=0 composition type=SOLID_COLOR (3) 
      buffer: buffer=0x0 slot=-1 
      sideband stream=0x0 
      color=[0 0 0] 
      dataspace=UNKNOWN (0) hdr metadata types=0 colorTransform=[[1.000,0.000,0.000,0.000][0.000,1.000,0.000,0.000][0.000,0.000,1.000,0.000][0.000,0.000,0.000,1.000]]
* compositionengine::Layer 0xb218394c (animation background stackId=317#0)
    frontend:
      isSecure=false geomUsesSourceCrop=false geomBufferUsesDisplayInverseTransform=false geomLayerTransform 0x00000000 (ROT_0 ) 0x00 (IDENTITY )
    1.0000  0.0000  0.0000
    0.0000  1.0000  0.0000
    0.0000  0.0000  1.0000

      geomBufferSize=[0 0 -1 -1] geomContentCrop=[0 0 -1 -1] geomCrop=[0 0 -1 -1] geomBufferTransform=0 
        Region geomActiveTransparentRegion (this=0xb21839f8, count=1)
    [  0,   0,   0,   0]
      geomLayerBounds=[0.000000 0.000000 0.000000 0.000000] 
      blend=INVALID (0) alpha=1.000000 
      type=0 appId=0 composition type=INVALID (0) 
      buffer: buffer=0x0 slot=-1 
      sideband stream=0x0 
      color=[0 0 0] 
      dataspace=UNKNOWN (0) hdr metadata types=0 colorTransform=[[1.000,0.000,0.000,0.000][0.000,1.000,0.000,0.000][0.000,0.000,1.000,0.000][0.000,0.000,0.000,1.000]]
* compositionengine::Layer 0xb0290c0c (Bounds for - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#0)
    frontend:
      isSecure=false geomUsesSourceCrop=false geomBufferUsesDisplayInverseTransform=false geomLayerTransform 0x00000000 (ROT_0 ) 0x00 (IDENTITY )
    1.0000  0.0000  0.0000
    0.0000  1.0000  0.0000
    0.0000  0.0000  1.0000

      geomBufferSize=[0 0 -1 -1] geomContentCrop=[0 0 -1 -1] geomCrop=[0 0 -1 -1] geomBufferTransform=0 
        Region geomActiveTransparentRegion (this=0xb0290cb8, count=1)
    [  0,   0,   0,   0]
      geomLayerBounds=[0.000000 0.000000 0.000000 0.000000] 
      blend=INVALID (0) alpha=1.000000 
      type=0 appId=0 composition type=INVALID (0) 
      buffer: buffer=0x0 slot=-1 
      sideband stream=0x0 
      color=[0 0 0] 
      dataspace=UNKNOWN (0) hdr metadata types=0 colorTransform=[[1.000,0.000,0.000,0.000][0.000,1.000,0.000,0.000][0.000,0.000,1.000,0.000][0.000,0.000,0.000,1.000]]
* compositionengine::Layer 0xb029130c (SurfaceView - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#1)
    frontend:
      isSecure=false geomUsesSourceCrop=false geomBufferUsesDisplayInverseTransform=false geomLayerTransform 0x00000000 (ROT_0 ) 0x00 (IDENTITY )
    1.0000  0.0000  0.0000
    0.0000  1.0000  0.0000
    0.0000  0.0000  1.0000

      geomBufferSize=[0 0 -1 -1] geomContentCrop=[0 0 -1 -1] geomCrop=[0 0 -1 -1] geomBufferTransform=0 
        Region geomActiveTransparentRegion (this=0xb02913b8, count=1)
    [  0,   0,   0,   0]
      geomLayerBounds=[0.000000 0.000000 0.000000 0.000000] 
      blend=INVALID (0) alpha=1.000000 
      type=0 appId=0 composition type=INVALID (0) 
      buffer: buffer=0x0 slot=-1 
      sideband stream=0x0 
      color=[255 255 255] 
      dataspace=UNKNOWN (0) hdr metadata types=0 colorTransform=[[1.000,0.000,0.000,0.000][0.000,1.000,0.000,0.000][0.000,0.000,1.000,0.000][0.000,0.000,0.000,1.000]]
* compositionengine::Layer 0xb02906cc (Background for -SurfaceView - com.android.chrome/org.chromium.chrome.browser.ChromeTabbedActivity#1)
    frontend:
      isSecure=false geomUsesSourceCrop=false geomBufferUsesDisplayInverseTransform=false geomLayerTransform 0x00000000 (ROT_0 ) 0x00 (IDENTITY )
    1.0000  0.0000  0.0000
    0.0000  1.0000  0.0000
    0.0000  0.0000  1.0000

      geomBufferSize=[0 0 -1 -1] geomContentCrop=[0 0 -1 -1…