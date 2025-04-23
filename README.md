------------------------------------------------------------------------------------------------------------------------------------------------------|*Skip to content
Navigation Menu
tr4200812
[  ] 🦋-

Code
Issues
6
Pull requests
2
Discussions
Actions
Projects
Wiki
Security
Create new page

Write
Preview
    
Skip to content
Navigation Menu
tr4200812
-

Code
Issues
16
Pull requests
2
Discussions
Actions
Projects
Wiki
Security
Editing _Footer
 
 
_Footer
Write
Preview
    
Edit mode: 
MediaWiki
![1000075064](https://github.com/user-attachments/assets/f62767a7-e9ff-406b-b271-2646f0a2d8bc
) ![1000089420](https://github.com/user-attachments/assets/fc691e81-ad78-4cd3-aa3e-e5ba89c5b9a7
)

[hero-light-sm.webm](https://github.com/user-attachments/assets/12ca1ebe-d8a4-4570-a803-8547c28740d9
) '🪯##"

Edit mode: Markdown Block Elements Span Elements Miscellaneous Paragraphs & Breaks Headers Blockquotes Lists Code Blocks Horizontal Rules To create a paragraph, simply create a block of text that is not separated by one or more blank lines. Blocks of text separated by one or more blank lines will be parsed as paragraphs.

If you want to create a line break, end a line with two or more spaces, then hit Return/Enter.

File fome tr4200812 [n00i1kat]

Attach files by dragging & dropping, selecting or pasting them. Edit message

"

 //
> ### -- phpMyAdmin SQL Dump > ### -- version 3.5.2.2 > ### -- http://www.phpmyadmin.net
 > ### -- > ### -- Host: 127.0.0.1 > ### -- Generation Time: Aug 16, 2025 at 11:03 PM > ### -- Server version: 5.5.27 > ### -- PHP Version: 5.4.7

^ > ### SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; > ### SET time_zone = "+00:00";
^ > ### -- > ### -- Database: `shadow` > ### -- > ### https://gist.github.com/1bcfdd571ed00ffd61f0a7cce2aa9772.git
 > ### -- -------------------------------------------------------- > ### .. image:: https://wakatime.com/badge/user/208f5cf8-67e3-484e-a050-5bbdfc460c1a.svg
 > ### :target: ### ## ### `> > ### *** > ### `
> ### -- > ### -- Table structure for table `shdw_admin` > ### --

> ### CREATE TABLE IF NOT EXISTS https://wakatime.com/@208f5cf8-67e3-484e-a050-5bbdfc460c1a
`shdw_options` ( > ### `id` bigint(20) NOT NULL AUTO_INCREMENT, > ### `siteName` varchar(100) NOT NULL, > ### `siteTagline` varchar(100) NOT NULL DEFAULT 'A super amazing site.', > ### `siteSummary` text NULL, > ### `currentApp` varchar(150) NOT NULL DEFAULT 'ninjablack', > ### `language` ENUM( > ### 'Afrikaans', -- AF > ### 'Albanian', -- SQ > ### 'Arabic', -- AR > ### 'Armenian', -- HY > ### 'Basque', -- EU > ### 'Bengali', -- BN > ### 'Bulgarian', -- BG > ### 'Catalan', -- CA > ### 'Cambodian', -- KM > ### 'Chinese (Mandarin)', -- ZH > ### 'Croatian', -- HR > ### 'Czech', -- CS > ### 'Danish', -- DA > ### 'Dutch', -- NL > ### 'English', -- EN > ### 'Estonian', -- ET > ### 'Fiji', -- FJ > ### 'Finnish', -- FI > ### 'French', -- FR > ### 'Georgian', -- KA > ### 'German', -- DE > ### 'Greek', -- EL > ### 'Gujarati', -- GU > ### 'Hebrew', -- HE > ### 'Hindi', -- HI > ### 'Hungarian', -- HU > ### 'Icelandic', -- IS > ### 'Indonesian', -- ID > ### 'Irish', -- GA > ### 'Italian', -- IT > ### 'Japanese', -- JA > ### 'Javanese', -- JW > ### 'Korean', -- KO > ### 'Latin', -- LA > ### 'Latvian', -- LV > ### 'Lithuanian', -- LT > ### 'Macedonian', -- MK > ### 'Malay', -- MS > ### 'Malayalam', -- ML > ### 'Maltese', -- MT > ### 'Maori', -- MI > ### 'Marathi', -- MR > ### 'Mongolian', -- MN > ### 'Nepali', -- Nepali > ### 'Norwegian', -- NO > ### 'Persian', -- FA > ### 'Polish', -- PL > ### 'Portuguese', -- PT > ### 'Punjabi', -- PA > ### 'Quechua', -- QU > ### 'Romanian', -- RO > ### 'Russian', -- RU > ### 'Samoan', -- SM > ### 'Serbian', -- SR > ### 'Slovak', -- SK > ### 'Slovenian', -- SL > ### 'Spanish', -- ES > ### 'Swahili', -- SW > ### 'Swedish ', -- SV > ### 'Tamil', -- TA > ### 'Tatar', -- TT > ### 'Telugu', -- TE > ### 'Thai', -- TH > ### 'Tibetan', -- BO > ### 'Tonga', -- TO > ### 'Turkish', -- TR > ### 'Ukrainian', -- UK > ### 'Urdu', -- UR > ### 'Uzbek', -- UZ > ### 'Vietnamese', -- VI > ### 'Welsh', -- CY > ### 'Xhosa' -- XH > ### ) NOT NULL DEFAULT 'English', > ### `timezone` ENUM( > ### 'GMTMINUS1200INTERNATIONALDATELINEWEST', -- (GMT-12:00) International Date Line West > ### 'GMTMINUS1100MIDWAYISLAND_SAMOA', -- (GMT-11:00) Midway Island, Samoa > ### 'GMTMINUS1000HAWAII', -- (GMT-10:00) Hawaii > ### 'GMTMINUS0900ALASKA', -- (GMT-09:00) Alaska > ### 'GMTMINUS0800PACIFICTIME', -- (GMT-08:00) Pacific Time (US & Canada) > ### 'GMTMINUS0800TIJUANA_BAJACALIFORNIA', -- GMT-08:00) Tijuana, Baja California > ### 'GMTMINUS0700ARIZONA', -- (GMT-07:00) Arizona > ### 'GMTMINUS0700MOUNTAINTIME', -- (GMT-07:00) Mountain Time (US & Canada) > ### 'GMTMINUS0700CHIHUAHUA_LAPAZ_MAZATLAN', -- (GMT-07:00) Chihuahua, La Paz, Mazatlan > ### 'GMTMINUS0600CENTRALAMERICA', -- (GMT-06:00) Central America > ### 'GMTMINUS0600CENTRALTIME', -- (GMT-06:00) Central Time (US & Canada) > ### 'GMTMINUS0600GUADALAJARA_MEXICOCITY', -- (GMT-06:00) Guadalajara, Mexico City, Monterrey > ### 'GMTMINUS0600SASKATCHEWAN', -- (GMT-06:00) Saskatchewan > ### 'GMTMINUS0500BOGOTA_LIMA_QUITO_RIOBRANCO', -- (GMT-05:00) Bogota, Lima, Quito, Rio Branco > ### 'GMTMINUS0500EASTERNTIME', -- GMT-05:00) Eastern Time (US & Canada) > ### 'GMTMINUS0500INDIANA', -- (GMT-05:00) Indiana (East) > ### 'GMTMINUS0430CARACAS', -- (GMT-04:30) Caracas > ### 'GMTMINUS0400ASUNCION', -- (GMT-04:00) Asuncion > ### 'GMTMINUS0400ATLANTICTIME', -- (GMT-04:00) Atlantic Time (Canada) > ### 'GMTMINUS0400LAPAZ', -- (GMT-04:00) La Paz > ### 'GMTMINUS0400MANAUS', -- (GMT-04:00) Manaus > ### 'GMTMINUS0400SANTIAGO', -- (GMT-04:00) Santiago > ### 'GMTMINUS0330NEWFOUNDLAND', -- (GMT-03:30) Newfoundland > ### 'GMTMINUS0300BRASILIA', -- (GMT-03:00) Brasilia > ### 'GMTMINUS0300BUENOSAIRES', -- (GMT-03:00) Buenos Aires > ### 'GMTMINUS0300BUENOSAIRES_GEORGETOWN', -- (GMT-03:00) Buenos Aires, Georgetown > ### 'GMTMINUS0300GREENLAND', -- (GMT-03:00) Greenland > ### 'GMTMINUS0300MONTEVIDEO', -- (GMT-03:00) Montevideo > ### 'GMTMINUS0300_SALVADOR', -- (GMT-03:00) Salvador > ### 'GMTMINUS0200MIDATLANTIC', -- (GMT-02:00) Mid-Atlantic > ### 'GMTMINUS0100AZORES', -- (GMT-01:00) Azores > ### 'GMTMINUS0100CAPEVERDIS', -- (GMT-01:00) Cape Verde Is. > ### 'GMT_CASABLANCA', -- (GMT) Casablanca > ### 'GMT_COORDINATEDUNIVERSALTIME', -- (GMT) Coordinated Universal Time > ### 'GMT_CASABLANCA_MONTROVIA_REYKJAVIK', -- (GMT) Casablanca, Monrovia, Reykjavik > ### 'GMT_DUBLIN_EDINBURGH_LISBON_LONDON', -- (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London > ### 'GMTPLUS0100_AMSTERDAM_BERLIN_BERN_ROME', -- (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna > ### 'GMTPLUS0100BELGRADE_BRATISLAVA_BUDAPEST', -- (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague > ### 'GMTPLUS0100BRUSSELS_COPENHAGEN_MADRID', -- (GMT+01:00) Brussels, Copenhagen, Madrid, Paris > ### 'GMTPLUS0100SARAJEVO_SKOPJE_WARSAW_ZAGREB', -- (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb > ### 'GMTPLUS0100WESTCENTRALAFRICA', -- (GMT+01:00) West Central Africa > ### 'GMTPLUS0200AMMAN', -- (GMT+02:00) Amman > ### 'GMTPLUS0200ATHENS_BUCHAREST_ISTANBUL', -- (GMT+02:00) Athens, Bucharest, Istanbul > ### 'GMTPLUS0200BEIRUT', -- (GMT+02:00) Beirut > ### 'GMTPLUS0200MINSK', -- (GMT+02:00) Minsk > ### 'GMTPLUS0200CAIRO', -- (GMT+02:00) Cairo > ### 'GMTPLUS0200_DAMASCUS', -- (GMT+02:00) Damascus > ### 'GMTPLUS0200HARARE_PRETORIA', -- (GMT+02:00) Harare, Pretoria > ### 'GMTPLUS0200HELSINKI_KYIV_RIGA_VILNIUS', -- (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius > ### 'GMTPLUS0200JERUSALEM', -- (GMT+02:00) Jerusalem > ### 'GMTPLUS0200WINDHOEK', -- (GMT+02:00) Windhoek > ### 'GMTPLUS0300BAGHDAD', -- (GMT+03:00) Baghdad > ### 'GMT_PLUS0300KALININGRAD_MINSK', -- (GMT+03:00) Kaliningrad, Minsk > ### 'GMTPLUS0300KUWAIT_RIYADH', -- (GMT+03:00) Kuwait, Riyadh > ### 'GMTPLUS0300MOSCOW_STPETERSBURG_VOLGOGRAD', -- (GMT+04:00) Moscow, St. Petersburg, Volgograd > ### 'GMTPLUS0400PORTLOUIS', -- (GMT+04:00) Port Louis > ### 'GMTPLUS0300NAIROBI', -- (GMT+03:00) Nairobi > ### 'GMTPLUS0300TBILISI', -- (GMT+03:00) Tbilisi > ### 'GMTPLUS0330TEHRAN', -- (GMT+03:30) Tehran > ### 'GMTPLUS0400ABUDHABI_MUSCAT', -- (GMT+04:00) Abu Dhabi, Muscat > ### 'GMTPLUS0400BAKU', -- (GMT+04:00) Baku > ### 'GMTPLUS0400CAUCASUSSTANDARDTIME', -- (GMT+04:00) Caucasus Standard Time > ### 'GMTPLUS0400CAUCASUSSTANDARDTIME', -- (GMT+04:00) Caucasus Standard Time > ### 'GMTPLUS0400YEREVAN', -- (GMT+04:00) Yerevan > ### 'GMTPLUS0430KABUL', -- (GMT+04:30) Kabul > ### 'GMTPLUS0500EKATERINBURG', -- (GMT+05:00) Ekaterinburg > ### 'GMTPLUS0500ISLAMABAD_KARACHI', -- (GMT+05:00) Islamabad, Karachi > ### 'GMTPLUS0500ISLAMABAD_KARACHI_TASHKENT', -- (GMT+05:00) Tashkent > ### 'GMTPLUS0530CHENNAI_KOLKATA_MUMBAI', -- (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi > ### 'GMTPLUS0530SRIJAYAWARDENEPURA', -- (GMT+05:30) Sri Jayawardenepura > ### 'GMTPLUS0545KATHMANDU', -- (GMT+05:45) Kathmandu > ### 'GMTPLUS0600ALMATY_NOVOSIBIRSK', -- (GMT+06:00) Almaty, Novosibirsk > ### 'GMTPLUS0600ASTANA_DHAKA', -- (GMT+06:00) Astana, Dhaka > ### 'GMTPLUS0600DHAKA', -- (GMT+06:00) Dhaka > ### 'GMTPLUS0630_YANGON', -- (GMT+06:30) Yangon (Rangoon) > ### 'GMTPLUS0700_BANGKOK_HANOI_JAKARTA', -- (GMT+07:00) Bangkok, Hanoi, Jakarta > ### 'GMTPLUS0700KRASNOYARSK', -- (GMT+07:00) Krasnoyarsk > ### 'GMTPLUS0800BEIJING_CHONGQING_HONGKONG', -- (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi > ### 'GMTPLUS0800IRKUTSK_ULAANBATAAR', -- (GMT+08:00) Irkutsk, Ulaan Bataar > ### 'GMTPLUS0800_ULAANBAATAR', -- (GMT+08:00) Ulaanbaatar > ### 'GMTPLUS0800KUALALUMPUR_SINGAPORE', -- (GMT+08:00) Kuala Lumpur, Singapore > ### 'GMTPLUS0800PERTH', -- (GMT+08:00) Perth > ### 'GMTPLUS0800TAIPEI', -- (GMT+08:00) Taipei > ### 'GMTPLUS0900OSAKA_SAPPORO_TOKYO', -- (GMT+09:00) Osaka, Sapporo, Tokyo > ### 'GMTPLUS0900SEOUL', -- (GMT+09:00) Seoul > ### 'GMTPLUS0900YAKUTSK', -- (GMT+09:00) Yakutsk > ### 'GMTPLUS0930ADELAIDE', -- (GMT+09:30) Adelaide > ### 'GMTPLUS0930DARWIN', -- (GMT+09:30) Darwin > ### 'GMTPLUS1000BRISBANE', -- (GMT+10:00) Brisbane > ### 'GMTPLUS1000CANBERRA_MELBOURNE_SYDNEY', -- (GMT+10:00) Canberra, Melbourne, Sydney > ### 'GMTPLUS1000GUAM_PORTMORESBY', -- (GMT+10:00) Guam, Port Moresby > ### 'GMTPLUS1000HOBART', -- (GMT+10:00) Hobart > ### 'GMTPLUS1000VLADIVOSTOK', -- (GMT+10:00) Vladivostok > ### 'GMTPLUS0600MAGADAN', -- (GMT+12:00) Magadan > ### 'GMTPLUS1100MAGADAN_SOLOMONIS', -- (GMT+11:00) Magadan, Solomon Is., New Caledonia > ### 'GMTPLUS1200AUCKLAND_WELLINGTON', -- (GMT+12:00) Auckland, Wellington > ### 'GMTPLUS1200FIJI_KAMCHATKA_MARSHALLIS', -- (GMT+12:00) Fiji, Kamchatka, Marshall Is. > ### 'GMTPLUS1300NUKU_ALOFA' -- (GMT+13:00) Nuku'alofa > ### ) NOT NULL DEFAULT 'GMT_COORDINATEDUNIVERSALTIME', > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_users` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_users` ( > ### `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, > ### `role` enum('master','admin','member', 'author','designer','developer','affiliate') NOT NULL DEFAULT 'member', > ### `prefix` varchar(40) NULL, > ### `firstName` varchar(40) NOT NULL, > ### `middleName` varchar(40) NULL, > ### `maiden` VARCHAR(40) NULL, > ### `lastName` varchar(80) NOT NULL, > ### `suffix` varchar(40) NULL, > ### `username` varchar(30) NOT NULL, > ### `pass` varchar(100) NOT NULL, > ### `securityQuestion1` TINYTEXT NULL, > ### `securityQuestion2` TINYTEXT NULL, > ### `securityQuestion3` TINYTEXT NULL, > ### `dateRegistered` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `lastLoginDate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `lastLoginIp` VARCHAR(39) NOT NULL, > ### `dateModified` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `releaseLevel` ENUM('alpha','beta','standard') DEFAULT 'standard', > ### `dateExpires` date DEFAULT NULL, > ### `birthdate` DATE NULL, > ### `sex` ENUM('male','female') NULL, > ### `primaryEmail` VARCHAR(80) NOT NULL, > ### `additionalEmails` TINYTEXT NULL, -- stored as serialized array for multiple emails > ### `phone` TINYTEXT NULL, -- stored as serialized array for multiple phones > ### `address` TEXT NULL, -- stored as serialized array for multiple addresses > ### `profilePictureImg` VARCHAR(2056) NOT NULL DEFAULT 'default-profile-picture.jpg', > ### `spreadImg` TEXT NOT NULL, -- stored as serialized array for multiple spread images > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `username` (`username`), > ### UNIQUE KEY `primaryEmail` (`primaryEmail`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1000000000;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_login_failed_attempts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_login_failed_attempts` ( > ### `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, > ### `username` VARCHAR( 2056 ) NULL, > ### `email` VARCHAR( 2056 ) NULL, > ### `pass` VARCHAR(2056) NOT NULL, > ### `datetimeFailed` TIMESTAMP NOT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_carts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_carts` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other') NOT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_categories` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_categories` ( > ### `id` tinyint(5) unsigned NOT NULL AUTO_INCREMENT, > ### `category` varchar(40) NOT NULL, > ### `description` tinytext, > ### `image` varchar(45) DEFAULT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_customers` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_customers` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `email` varchar(80) NOT NULL, > ### `firstName` varchar(20) NOT NULL, > ### `lastName` varchar(40) NOT NULL, > ### `address1` varchar(80) NOT NULL, > ### `address2` varchar(80) DEFAULT NULL, > ### `city` varchar(60) NOT NULL, > ### `state` char(2) NOT NULL, > ### `zip` mediumint(5) unsigned zerofill NOT NULL, > ### `phone` int(10) NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `email` (`email`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_orders` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_orders` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `customerId` int(10) unsigned NOT NULL, > ### `total` decimal(7,2) unsigned DEFAULT NULL, > ### `shipping` decimal(5,2) unsigned NOT NULL, > ### `ccNumber` mediumint(4) unsigned NOT NULL, > ### `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `customer_id` (`customerId`), > ### KEY `order_date` (`orderDate`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_order_contents` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_order_contents` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `pricePer` decimal(5,2) unsigned NOT NULL, > ### `shipDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `ship_date` (`shipDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### 160 > ### 161 > ### 162 > ### 163 > ### 164 > ### 165 > ### 166 > ### 167 > ### 168 > ### 169 > ### 170 > ### 171 > ### 172 > ### 173 > ### 174 > ### 175 > ### 176 > ### 177 > ### 178 > ### 179 > ### 180 > ### 181 > ### 182 > ### 183 > ### 184 > ### 185 > ### 186 > ### 187 > ### 188 > ### 189 > ### 190 > ### 191 > ### 192 > ### 193 > ### 194 > ### 195 > ### 196 > ### 197 > ### 198 > ### 199 > ### 200 > ### 201 > ### 202 > ### 203 > ### 204 > ### 205 > ### 206 > ### 207 > ### 208 > ### 209 > ### 210 > ### 211 > ### 212 > ### 213 > ### 214 > ### 215 > ### 216 > ### 217 > ### 218 > ### 219 > ### 220 > ### 221 > ### 222 > ### 223 > ### 224 > ### 225 > ### 226 > ### 227 > ### 228 > ### 229 > ### 230 > ### 231 > ### 232 > ### 233 > ### 234 > ### 235 > ### 236 > ### 237 > ### 238 > ### 239 > ### 240 > ### 241 > ### 242 > ### 243 > ### 244 > ### 245 > ### 246 > ### 247 > ### 248 > ### 249 > ### 250 > ### 251 > ### 252 > ### 253 > ### 254 > ### 255 > ### 256 > ### 257 > ### 258 > ### 259 > ### 260 > ### 261 > ### 262 > ### 263 > ### 264 > ### 265 > ### 266 > ### 267 > ### 268 > ### 269 > ### 270 > ### 271 > ### 272 > ### 273 > ### 274 > ### 275 > ### 276 > ### 277 > ### 278 > ### 279 > ### 280 > ### 281 > ### 282 > ### 283 > ### 284 > ### 285 > ### 286 > ### 287 > ### 288 > ### 289 > ### 290 > ### 291 > ### 292 > ### 293 > ### 294 > ### 295 > ### 296 > ### 297 > ### 298 > ### 299 > ### 300 > ### 301 > ### 302 > ### 303 > ### 304 > ### 305 > ### 306 > ### 307 > ### 308 > ### 309 > ### 310 > ### 311 > ### 312 > ### 313 > ### 314 > ### 315 > ### 316 > ### 317 > ### 318 > ### 319 > ### 320 > ### 321 > ### 322 > ### 323 > ### 324 > ### 325 > ### 326 > ### 327 > ### 328 > ### 329 > ### 330 > ### 331 > ### 332 > ### 333 > ### 334 > ### 335 > ### 336 > ### 337 > ### 338 > ### 339 > ### 340 > ### 341 > ### 342 > ### 343 > ### 344 > ### 345 > ### 346 > ### 347 > ### 348 > ### 349 > ### 350 > ### 351 > ### 352 > ### 353 > ### 354 > ### 355 > ### 356 > ### 357 > ### 358 > ### 359 > ### 360 > ### 361 > ### 362 > ### 363 > ### 364 > ### 365 > ### 366 > ### 367 > ### 368 > ### 369 > ### 370 > ### 371 > ### 372 > ### 373 > ### 374 > ### 375 > ### 376 > ### 377 > ### 378 > ### 379 > ### 380 > ### 381 > ### 382 > ### 383 > ### 384 > ### 385 > ### 386 > ### 387 > ### 388 > ### 389 > ### 390 > ### 391 > ### 392 > ### 393 > ### 394 > ### 395 > ### 396 > ### 397 > ### 398 > ### 399 > ### 400 > ### 401 > ### 402 > ### 403 > ### 404 > ### 405 > ### 406 > ### 407 > ### 408 > ### 409 > ### 410 > ### 411 > ### 412 > ### 413 > ### 414 > ### 415 > ### 416 > ### 417 > ### 418 > ### 419 > ### 420 > ### 421 > ### 422 > ### 423 > ### 424 > ### 425 > ### 426 > ### 427 > ### 428 > ### 429 > ### 430 > ### 431 > ### 432 > ### 433 > ### 434 > ### 435 > ### 436 > ### 437 > ### 438 > ### 439 > ### 440 > ### 441 > ### 442 > ### 443 > ### 444 > ### 445 > ### 446 > ### 447 > ### 448 > ### 449 > ### 450 > ### 451 > ### 452 > ### 453 > ### 454 > ### 455 > ### 456 > ### 457 > ### 458 > ### 459 > ### 460 > ### 461 > ### 462 > ### 463 > ### 464 > ### 465 > ### 466 > ### 467 > ### 468 > ### 469 > ### 470 > ### 471 > ### 472 > ### 473 > ### 474 > ### 475 > ### 476 > ### 477 > ### 478 > ### 479 > ### 480 > ### 481 > ### 482 > ### 483 > ### 484 > ### 485 > ### 486 > ### 487 > ### 488 > ### 489 > ### 490 > ### 491 > ### 492 > ### 493 > ### 494 > ### 495 > ### 496 > ### 497 > ### 498 > ### 499 > ### 500 > ### 501 > ### 502 > ### 503 > ### 504 > ### 505 > ### 506 > ### 507 > ### 508 > ### 509 > ### 510 > ### 511 > ### 512 > ### 513 > ### 514 > ### 515 > ### 516 > ### 517 > ### 518 > ### 519 > ### 520 > ### 521 > ### 522 > ### 523 > ### 524 > ### 525 > ### 526 > ### 527 > ### 528 > ### 529 > ### 530 > ### 531 > ### 532 > ### 533 > ### 534 > ### 535 > ### 536 > ### 537 > ### 538 > ### 539 > ### 540 > ### 541 > ### 542 > ### 543 > ### 544 > ### 545 > ### 546 > ### 547 > ### 548 > ### 549 > ### 550 > ### 551 > ### 552 > ### 553 > ### 554 > ### 555 > ### 556 > ### 557 > ### 558 > ### 559 > ### 560 > ### 561 > ### 562 > ### 563 > ### 564 > ### 565 > ### 566 > ### 567 > ### 568 > ### 569 > ### 570 > ### 571 > ### 572 > ### 573 > ### 574 > ### 575 > ### 576 > ### 577 > ### 578 > ### 579 > ### 580 > ### 581 > ### 582 > ### 583 > ### 584 > ### 585 > ### 586 > ### 587 > ### 588 > ### 589 > ### 590 > ### 591 > ### 592 > ### 593 > ### 594 > ### 595 > ### 596 > ### 597 > ### 598 > ### 599 > ### 600 > ### 601 > ### 602 > ### 603 > ### 604 > ### 605 > ### 606 > ### 607 > ### 608 > ### 609 > ### 610 > ### 611 > ### 612 > ### 613 > ### 614 > ### 615 > ### 616 > ### 617 > ### 618 > ### 619 > ### 620 > ### 621 > ### 622 > ### 623 > ### 624 > ### 625 > ### 626 > ### 627 > ### 628 > ### 629 > ### 630 > ### 631 > ### 632 > ### 633 > ### 634 > ### 635 > ### 636 > ### 637 > ### 638 > ### -- phpMyAdmin SQL Dump > ### -- version 3.5.2.2 > ### -- http://www.phpmyadmin.net
 > ### -- > ### -- Host: 127.0.0.1 > ### -- Generation Time: Aug 16, 2013 at 09:59 PM > ### -- Server version: 5.5.27 > ### -- PHP Version: 5.4.7

> ### SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; > ### SET time_zone = "+00:00";

> ### /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */; > ### /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */; > ### /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */; > ### /*!40101 SET NAMES utf8 */;

> ### -- > ### -- Database: `shadow` > ### --

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_admin` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_admin` ( > ### `id` bigint(20) NOT NULL AUTO_INCREMENT, > ### `adminEmail` varchar(80) NOT NULL, > ### `adminPhone` smallint(15) DEFAULT NULL, > ### `adminPhoneExt` smallint(10) DEFAULT NULL, > ### `siteName` varchar(100) NOT NULL, > ### `siteTagline` varchar(100) NOT NULL, > ### `siteSummary` text, > ### `currentApp` varchar(150) NOT NULL DEFAULT 'ninjablack1', > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_carts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_carts` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other') NOT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_categories` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_categories` ( > ### `id` tinyint(5) unsigned NOT NULL AUTO_INCREMENT, > ### `category` varchar(40) NOT NULL, > ### `description` tinytext, > ### `image` varchar(45) DEFAULT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

> ### -- > ### -- Dumping data for table `shdw_categories` > ### --

> ### INSERT INTO `shdw_categories` (`id`, `category`, `description`, `image`) VALUES > ### (1, 'Allergy', NULL, NULL), > ### (2, 'Cancer Support', NULL, NULL), > ### (3, 'Children', NULL, NULL), > ### (4, 'Circulation', NULL, NULL), > ### (5, 'Cleansing & Detox', NULL, NULL), > ### (6, 'Digestion', NULL, NULL), > ### (7, 'Eyes', NULL, NULL), > ### (8, 'Immune', NULL, NULL), > ### (9, 'Men/Women', NULL, NULL), > ### (10, 'Oral Health', NULL, NULL), > ### (11, 'Pain', NULL, NULL), > ### (12, 'Skin', NULL, NULL), > ### (13, 'Sleep', NULL, NULL), > ### (14, 'Sports', NULL, NULL), > ### (15, 'Sleep', NULL, NULL), > ### (16, 'Urinary Track', NULL, NULL), > ### (17, 'Weight', NULL, NULL), > ### (18, 'Mind & Body', NULL, NULL);

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_customers` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_customers` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `email` varchar(80) NOT NULL, > ### `firstName` varchar(20) NOT NULL, > ### `lastName` varchar(40) NOT NULL, > ### `address1` varchar(80) NOT NULL, > ### `address2` varchar(80) DEFAULT NULL, > ### `city` varchar(60) NOT NULL, > ### `state` char(2) NOT NULL, > ### `zip` mediumint(5) unsigned zerofill NOT NULL, > ### `phone` int(10) NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `email` (`email`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_orders` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_orders` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `customerId` int(10) unsigned NOT NULL, > ### `total` decimal(7,2) unsigned DEFAULT NULL, > ### `shipping` decimal(5,2) unsigned NOT NULL, > ### `ccNumber` mediumint(4) unsigned NOT NULL, > ### `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `customer_id` (`customerId`), > ### KEY `order_date` (`orderDate`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_order_contents` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_order_contents` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `pricePer` decimal(5,2) unsigned NOT NULL, > ### `shipDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `ship_date` (`shipDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_pages` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_pages` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `parentId` int(10) unsigned DEFAULT NULL, > ### `creatorId` int(10) unsigned NOT NULL, > ### `title` varchar(100) NOT NULL, > ### `content` text NOT NULL, > ### `slug` varchar(100) NOT NULL, > ### `dateUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, > ### `dateAdded` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `viewFile` text, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=73 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_products` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_products` ( > ### `id` int(11) unsigned NOT NULL AUTO_INCREMENT, > ### `name` tinytext NOT NULL, > ### `manufacturer` VARCHAR(100), > ### `seller` text NULL, > ### `category` varchar(50) NOT NULL, > ### `description` tinytext NOT NULL, > ### `features` text NULL, > ### `ingredients` text NULL, > ### `availability` enum('Available for sale','Hidden but available for sale','Coming soon','Disabled') NOT NULL DEFAULT 'Available for sale', > ### `weight` decimal(5,2) unsigned NOT NULL, > ### `image` varchar(2056) NOT NULL, > ### `price` decimal(5,2) unsigned NOT NULL, > ### `salePrice` decimal(5,2) unsigned, > ### `specialOffers` text NULL, > ### `SKU` VARCHAR(10) DEFAULT NULL, > ### `UPC` int(10) unsigned DEFAULT NULL, > ### `stock` mediumint(8) unsigned NOT NULL DEFAULT '100', > ### `shippingDetails` text NULL, > ### `ratingReview` text NULL, > ### `slug` varchar(2056) NOT NULL, > ### `externalLink` varchar(2056) NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `SKU` (`SKU`), > ### UNIQUE KEY `UPC` (`UPC`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_sales` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_sales` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `productType` VARCHAR(100) DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `price` decimal(5,2) unsigned NOT NULL, > ### `startDate` date NOT NULL, > ### `endDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `start_date` (`startDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_sizes` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_sizes` ( > ### `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT, > ### `size` varchar(40) NOT NULL, > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `size` (`size`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_transactions` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_transactions` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `type` varchar(18) NOT NULL, > ### `amount` decimal(7,2) NOT NULL, > ### `responseCode` tinyint(1) unsigned NOT NULL, > ### `responseReason` tinytext, > ### `transactionId` bigint(20) unsigned NOT NULL, > ### `response` text NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `order_id` (`orderId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_wish_lists` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_wish_lists` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- STORED PROCEDURES > ### --****_``_**** > ### *** ![1000086060](https://github.com/user-attachments/assets/b41fa5f1-1108-464b-8a1d-e114d65c7603
) ![1000075416](https://github.com/user-attachments/assets/eb040fd8-638e-44bf-8dc3-c23ec708020c
) ![1000075064]()https://github.com/user-attachments/assets/c06b9dd3-d33e-4968-8de3-125cc43d1e32


Edit message
Write a small message here explaining this change. (Optional)
Footer
© 2025 GitHub, Inc.
This branch has conflicts that must be resolved
Use the command line to resolve conflicts before continuing.
• Dockerfile
• config/kubernetes/production/deployments/webapp.yaml
• content/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot.md
• content/copilot/about-github-copilot/subscription-plans-for-github-copilot.md
• content/copilot/about-github-copilot/what-is-github-copilot.md
• content/copilot/customizing-copilot/index.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/about-individual-copilot-plans-and-benefits.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-started-with-a-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/disabling-github-copilot-free.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/extending-the-capabilities-of-github-copilot-in-your-personal-account.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/viewing-and-changing-your-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization.md
• content/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests.md
• content/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot.md
• content/copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot.md
• content/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself.md
• content/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat.md
•  
• § Etemal Flame - Ann ธิติมา
content/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task.md
• content/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks.md
Resolve conflicts
Enable auto-merge (rebase)
 

Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
1. Editing _Footer · tr4200812/- WikiEdit mode: 
This branch has conflicts that must be resolved
Use the command line to resolve conflicts before continuing.
• Dockerfile
• config/kubernetes/production/deployments/webapp.yaml
• content/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot.md
• content/copilot/about-github-copilot/subscription-plans-for-github-copilot.md
• content/copilot/about-github-copilot/what-is-github-copilot.md
• content/copilot/customizing-copilot/index.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/about-individual-copilot-plans-and-benefits.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-started-with-a-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/disabling-github-copilot-free.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/extending-the-capabilities-of-github-copilot-in-your-personal-account.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/viewing-and-changing-your-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization.md
• content/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests.md
• content/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot.md
• content/copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot.md
• content/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself.md
• content/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat.md
• content/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task.md
• content/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks.md
Resolve conflicts
Enable auto-merge (rebase)


Textile
Phrase Modifiers
Block Modifiers
Links / Images
Links
Images
To display an image, simply wrap the image’s URL in ! (exclamation points). If you want to link the image to a URL, you can blend the image and link syntax: place your image URL in the exclamation points and suffix that with a colon and your URL. For example, an image at http://myurl/image.png that should link to http://myurl/ should be written as !http://myurl/image.png!:http://myurl/.

`*
*
```github
docs

Code
Issues
238
Pull requests
143
Actions
Projects
3
Security
Insights
View tr4200812’s profile
Create new issue
Improve existing content
·
Choose a different template
Add a title
*
?
HUBBERS!! This is the github/docs open source repo. You may want to open an issue in the internal-only github/docs-content repo instead.

Before you file an issue read the Contributing guide.
Check to make sure someone hasn’t already opened a similar issue.

Code of Conduct
This project has a Code of Conduct that all participants are expected to understand and follow.

I have read and agree to the GitHub Docs project’s Code of Conduct
*
What article on docs.github.com is affected?
*
Please link to the article you’d like to see updated.

Markdown Editor
Markdown input: preview mode selected.
Write
PreviewSkip to content
Navigation Menu
github
docs

Code
Issues
241
Pull requests
143
Actions
Projects
3
Security
Insights
- #37672
Open
@tr4200812
Description
tr4200812
opened 2 minutes ago
Body input
Markdown input: edit mode selected.
WritSkip to content
Navigation Menu
tr4200812
[  ] 🦋-

Code
Issues
6
Pull requests
2
Discussions
Actions
Projects
Wiki
Security
Create new page

Write
Preview
    
Skip to content
Navigation Menu
tr4200812
-

Code
Issues
16
Pull requests
2
Discussions
Actions
Projects
Wiki
Security
Editing _Footer
 
 
_Footer
Write
Preview
    
Edit mode: 
MediaWiki
![1000075064](https://github.com/user-attachments/assets/f62767a7-e9ff-406b-b271-2646f0a2d8bc
) ![1000089420](https://github.com/user-attachments/assets/fc691e81-ad78-4cd3-aa3e-e5ba89c5b9a7
)

[hero-light-sm.webm](https://github.com/user-attachments/assets/12ca1ebe-d8a4-4570-a803-8547c28740d9
) '🪯##"

Edit mode: Markdown Block Elements Span Elements Miscellaneous Paragraphs & Breaks Headers Blockquotes Lists Code Blocks Horizontal Rules To create a paragraph, simply create a block of text that is not separated by one or more blank lines. Blocks of text separated by one or more blank lines will be parsed as paragraphs.

If you want to create a line break, end a line with two or more spaces, then hit Return/Enter.

File fome tr4200812 [n00i1kat]

Attach files by dragging & dropping, selecting or pasting them. Edit message

"

 //
> ### -- phpMyAdmin SQL Dump > ### -- version 3.5.2.2 > ### -- http://www.phpmyadmin.net
 > ### -- > ### -- Host: 127.0.0.1 > ### -- Generation Time: Aug 16, 2025 at 11:03 PM > ### -- Server version: 5.5.27 > ### -- PHP Version: 5.4.7

^ > ### SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; > ### SET time_zone = "+00:00";
^ > ### -- > ### -- Database: `shadow` > ### -- > ### https://gist.github.com/1bcfdd571ed00ffd61f0a7cce2aa9772.git
 > ### -- -------------------------------------------------------- > ### .. image:: https://wakatime.com/badge/user/208f5cf8-67e3-484e-a050-5bbdfc460c1a.svg
 > ### :target: ### ## ### `> > ### *** > ### `
> ### -- > ### -- Table structure for table `shdw_admin` > ### --

> ### CREATE TABLE IF NOT EXISTS https://wakatime.com/@208f5cf8-67e3-484e-a050-5bbdfc460c1a
`shdw_options` ( > ### `id` bigint(20) NOT NULL AUTO_INCREMENT, > ### `siteName` varchar(100) NOT NULL, > ### `siteTagline` varchar(100) NOT NULL DEFAULT 'A super amazing site.', > ### `siteSummary` text NULL, > ### `currentApp` varchar(150) NOT NULL DEFAULT 'ninjablack', > ### `language` ENUM( > ### 'Afrikaans', -- AF > ### 'Albanian', -- SQ > ### 'Arabic', -- AR > ### 'Armenian', -- HY > ### 'Basque', -- EU > ### 'Bengali', -- BN > ### 'Bulgarian', -- BG > ### 'Catalan', -- CA > ### 'Cambodian', -- KM > ### 'Chinese (Mandarin)', -- ZH > ### 'Croatian', -- HR > ### 'Czech', -- CS > ### 'Danish', -- DA > ### 'Dutch', -- NL > ### 'English', -- EN > ### 'Estonian', -- ET > ### 'Fiji', -- FJ > ### 'Finnish', -- FI > ### 'French', -- FR > ### 'Georgian', -- KA > ### 'German', -- DE > ### 'Greek', -- EL > ### 'Gujarati', -- GU > ### 'Hebrew', -- HE > ### 'Hindi', -- HI > ### 'Hungarian', -- HU > ### 'Icelandic', -- IS > ### 'Indonesian', -- ID > ### 'Irish', -- GA > ### 'Italian', -- IT > ### 'Japanese', -- JA > ### 'Javanese', -- JW > ### 'Korean', -- KO > ### 'Latin', -- LA > ### 'Latvian', -- LV > ### 'Lithuanian', -- LT > ### 'Macedonian', -- MK > ### 'Malay', -- MS > ### 'Malayalam', -- ML > ### 'Maltese', -- MT > ### 'Maori', -- MI > ### 'Marathi', -- MR > ### 'Mongolian', -- MN > ### 'Nepali', -- Nepali > ### 'Norwegian', -- NO > ### 'Persian', -- FA > ### 'Polish', -- PL > ### 'Portuguese', -- PT > ### 'Punjabi', -- PA > ### 'Quechua', -- QU > ### 'Romanian', -- RO > ### 'Russian', -- RU > ### 'Samoan', -- SM > ### 'Serbian', -- SR > ### 'Slovak', -- SK > ### 'Slovenian', -- SL > ### 'Spanish', -- ES > ### 'Swahili', -- SW > ### 'Swedish ', -- SV > ### 'Tamil', -- TA > ### 'Tatar', -- TT > ### 'Telugu', -- TE > ### 'Thai', -- TH > ### 'Tibetan', -- BO > ### 'Tonga', -- TO > ### 'Turkish', -- TR > ### 'Ukrainian', -- UK > ### 'Urdu', -- UR > ### 'Uzbek', -- UZ > ### 'Vietnamese', -- VI > ### 'Welsh', -- CY > ### 'Xhosa' -- XH > ### ) NOT NULL DEFAULT 'English', > ### `timezone` ENUM( > ### 'GMTMINUS1200INTERNATIONALDATELINEWEST', -- (GMT-12:00) International Date Line West > ### 'GMTMINUS1100MIDWAYISLAND_SAMOA', -- (GMT-11:00) Midway Island, Samoa > ### 'GMTMINUS1000HAWAII', -- (GMT-10:00) Hawaii > ### 'GMTMINUS0900ALASKA', -- (GMT-09:00) Alaska > ### 'GMTMINUS0800PACIFICTIME', -- (GMT-08:00) Pacific Time (US & Canada) > ### 'GMTMINUS0800TIJUANA_BAJACALIFORNIA', -- GMT-08:00) Tijuana, Baja California > ### 'GMTMINUS0700ARIZONA', -- (GMT-07:00) Arizona > ### 'GMTMINUS0700MOUNTAINTIME', -- (GMT-07:00) Mountain Time (US & Canada) > ### 'GMTMINUS0700CHIHUAHUA_LAPAZ_MAZATLAN', -- (GMT-07:00) Chihuahua, La Paz, Mazatlan > ### 'GMTMINUS0600CENTRALAMERICA', -- (GMT-06:00) Central America > ### 'GMTMINUS0600CENTRALTIME', -- (GMT-06:00) Central Time (US & Canada) > ### 'GMTMINUS0600GUADALAJARA_MEXICOCITY', -- (GMT-06:00) Guadalajara, Mexico City, Monterrey > ### 'GMTMINUS0600SASKATCHEWAN', -- (GMT-06:00) Saskatchewan > ### 'GMTMINUS0500BOGOTA_LIMA_QUITO_RIOBRANCO', -- (GMT-05:00) Bogota, Lima, Quito, Rio Branco > ### 'GMTMINUS0500EASTERNTIME', -- GMT-05:00) Eastern Time (US & Canada) > ### 'GMTMINUS0500INDIANA', -- (GMT-05:00) Indiana (East) > ### 'GMTMINUS0430CARACAS', -- (GMT-04:30) Caracas > ### 'GMTMINUS0400ASUNCION', -- (GMT-04:00) Asuncion > ### 'GMTMINUS0400ATLANTICTIME', -- (GMT-04:00) Atlantic Time (Canada) > ### 'GMTMINUS0400LAPAZ', -- (GMT-04:00) La Paz > ### 'GMTMINUS0400MANAUS', -- (GMT-04:00) Manaus > ### 'GMTMINUS0400SANTIAGO', -- (GMT-04:00) Santiago > ### 'GMTMINUS0330NEWFOUNDLAND', -- (GMT-03:30) Newfoundland > ### 'GMTMINUS0300BRASILIA', -- (GMT-03:00) Brasilia > ### 'GMTMINUS0300BUENOSAIRES', -- (GMT-03:00) Buenos Aires > ### 'GMTMINUS0300BUENOSAIRES_GEORGETOWN', -- (GMT-03:00) Buenos Aires, Georgetown > ### 'GMTMINUS0300GREENLAND', -- (GMT-03:00) Greenland > ### 'GMTMINUS0300MONTEVIDEO', -- (GMT-03:00) Montevideo > ### 'GMTMINUS0300_SALVADOR', -- (GMT-03:00) Salvador > ### 'GMTMINUS0200MIDATLANTIC', -- (GMT-02:00) Mid-Atlantic > ### 'GMTMINUS0100AZORES', -- (GMT-01:00) Azores > ### 'GMTMINUS0100CAPEVERDIS', -- (GMT-01:00) Cape Verde Is. > ### 'GMT_CASABLANCA', -- (GMT) Casablanca > ### 'GMT_COORDINATEDUNIVERSALTIME', -- (GMT) Coordinated Universal Time > ### 'GMT_CASABLANCA_MONTROVIA_REYKJAVIK', -- (GMT) Casablanca, Monrovia, Reykjavik > ### 'GMT_DUBLIN_EDINBURGH_LISBON_LONDON', -- (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London > ### 'GMTPLUS0100_AMSTERDAM_BERLIN_BERN_ROME', -- (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna > ### 'GMTPLUS0100BELGRADE_BRATISLAVA_BUDAPEST', -- (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague > ### 'GMTPLUS0100BRUSSELS_COPENHAGEN_MADRID', -- (GMT+01:00) Brussels, Copenhagen, Madrid, Paris > ### 'GMTPLUS0100SARAJEVO_SKOPJE_WARSAW_ZAGREB', -- (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb > ### 'GMTPLUS0100WESTCENTRALAFRICA', -- (GMT+01:00) West Central Africa > ### 'GMTPLUS0200AMMAN', -- (GMT+02:00) Amman > ### 'GMTPLUS0200ATHENS_BUCHAREST_ISTANBUL', -- (GMT+02:00) Athens, Bucharest, Istanbul > ### 'GMTPLUS0200BEIRUT', -- (GMT+02:00) Beirut > ### 'GMTPLUS0200MINSK', -- (GMT+02:00) Minsk > ### 'GMTPLUS0200CAIRO', -- (GMT+02:00) Cairo > ### 'GMTPLUS0200_DAMASCUS', -- (GMT+02:00) Damascus > ### 'GMTPLUS0200HARARE_PRETORIA', -- (GMT+02:00) Harare, Pretoria > ### 'GMTPLUS0200HELSINKI_KYIV_RIGA_VILNIUS', -- (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius > ### 'GMTPLUS0200JERUSALEM', -- (GMT+02:00) Jerusalem > ### 'GMTPLUS0200WINDHOEK', -- (GMT+02:00) Windhoek > ### 'GMTPLUS0300BAGHDAD', -- (GMT+03:00) Baghdad > ### 'GMT_PLUS0300KALININGRAD_MINSK', -- (GMT+03:00) Kaliningrad, Minsk > ### 'GMTPLUS0300KUWAIT_RIYADH', -- (GMT+03:00) Kuwait, Riyadh > ### 'GMTPLUS0300MOSCOW_STPETERSBURG_VOLGOGRAD', -- (GMT+04:00) Moscow, St. Petersburg, Volgograd > ### 'GMTPLUS0400PORTLOUIS', -- (GMT+04:00) Port Louis > ### 'GMTPLUS0300NAIROBI', -- (GMT+03:00) Nairobi > ### 'GMTPLUS0300TBILISI', -- (GMT+03:00) Tbilisi > ### 'GMTPLUS0330TEHRAN', -- (GMT+03:30) Tehran > ### 'GMTPLUS0400ABUDHABI_MUSCAT', -- (GMT+04:00) Abu Dhabi, Muscat > ### 'GMTPLUS0400BAKU', -- (GMT+04:00) Baku > ### 'GMTPLUS0400CAUCASUSSTANDARDTIME', -- (GMT+04:00) Caucasus Standard Time > ### 'GMTPLUS0400CAUCASUSSTANDARDTIME', -- (GMT+04:00) Caucasus Standard Time > ### 'GMTPLUS0400YEREVAN', -- (GMT+04:00) Yerevan > ### 'GMTPLUS0430KABUL', -- (GMT+04:30) Kabul > ### 'GMTPLUS0500EKATERINBURG', -- (GMT+05:00) Ekaterinburg > ### 'GMTPLUS0500ISLAMABAD_KARACHI', -- (GMT+05:00) Islamabad, Karachi > ### 'GMTPLUS0500ISLAMABAD_KARACHI_TASHKENT', -- (GMT+05:00) Tashkent > ### 'GMTPLUS0530CHENNAI_KOLKATA_MUMBAI', -- (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi > ### 'GMTPLUS0530SRIJAYAWARDENEPURA', -- (GMT+05:30) Sri Jayawardenepura > ### 'GMTPLUS0545KATHMANDU', -- (GMT+05:45) Kathmandu > ### 'GMTPLUS0600ALMATY_NOVOSIBIRSK', -- (GMT+06:00) Almaty, Novosibirsk > ### 'GMTPLUS0600ASTANA_DHAKA', -- (GMT+06:00) Astana, Dhaka > ### 'GMTPLUS0600DHAKA', -- (GMT+06:00) Dhaka > ### 'GMTPLUS0630_YANGON', -- (GMT+06:30) Yangon (Rangoon) > ### 'GMTPLUS0700_BANGKOK_HANOI_JAKARTA', -- (GMT+07:00) Bangkok, Hanoi, Jakarta > ### 'GMTPLUS0700KRASNOYARSK', -- (GMT+07:00) Krasnoyarsk > ### 'GMTPLUS0800BEIJING_CHONGQING_HONGKONG', -- (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi > ### 'GMTPLUS0800IRKUTSK_ULAANBATAAR', -- (GMT+08:00) Irkutsk, Ulaan Bataar > ### 'GMTPLUS0800_ULAANBAATAR', -- (GMT+08:00) Ulaanbaatar > ### 'GMTPLUS0800KUALALUMPUR_SINGAPORE', -- (GMT+08:00) Kuala Lumpur, Singapore > ### 'GMTPLUS0800PERTH', -- (GMT+08:00) Perth > ### 'GMTPLUS0800TAIPEI', -- (GMT+08:00) Taipei > ### 'GMTPLUS0900OSAKA_SAPPORO_TOKYO', -- (GMT+09:00) Osaka, Sapporo, Tokyo > ### 'GMTPLUS0900SEOUL', -- (GMT+09:00) Seoul > ### 'GMTPLUS0900YAKUTSK', -- (GMT+09:00) Yakutsk > ### 'GMTPLUS0930ADELAIDE', -- (GMT+09:30) Adelaide > ### 'GMTPLUS0930DARWIN', -- (GMT+09:30) Darwin > ### 'GMTPLUS1000BRISBANE', -- (GMT+10:00) Brisbane > ### 'GMTPLUS1000CANBERRA_MELBOURNE_SYDNEY', -- (GMT+10:00) Canberra, Melbourne, Sydney > ### 'GMTPLUS1000GUAM_PORTMORESBY', -- (GMT+10:00) Guam, Port Moresby > ### 'GMTPLUS1000HOBART', -- (GMT+10:00) Hobart > ### 'GMTPLUS1000VLADIVOSTOK', -- (GMT+10:00) Vladivostok > ### 'GMTPLUS0600MAGADAN', -- (GMT+12:00) Magadan > ### 'GMTPLUS1100MAGADAN_SOLOMONIS', -- (GMT+11:00) Magadan, Solomon Is., New Caledonia > ### 'GMTPLUS1200AUCKLAND_WELLINGTON', -- (GMT+12:00) Auckland, Wellington > ### 'GMTPLUS1200FIJI_KAMCHATKA_MARSHALLIS', -- (GMT+12:00) Fiji, Kamchatka, Marshall Is. > ### 'GMTPLUS1300NUKU_ALOFA' -- (GMT+13:00) Nuku'alofa > ### ) NOT NULL DEFAULT 'GMT_COORDINATEDUNIVERSALTIME', > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_users` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_users` ( > ### `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, > ### `role` enum('master','admin','member', 'author','designer','developer','affiliate') NOT NULL DEFAULT 'member', > ### `prefix` varchar(40) NULL, > ### `firstName` varchar(40) NOT NULL, > ### `middleName` varchar(40) NULL, > ### `maiden` VARCHAR(40) NULL, > ### `lastName` varchar(80) NOT NULL, > ### `suffix` varchar(40) NULL, > ### `username` varchar(30) NOT NULL, > ### `pass` varchar(100) NOT NULL, > ### `securityQuestion1` TINYTEXT NULL, > ### `securityQuestion2` TINYTEXT NULL, > ### `securityQuestion3` TINYTEXT NULL, > ### `dateRegistered` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `lastLoginDate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `lastLoginIp` VARCHAR(39) NOT NULL, > ### `dateModified` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `releaseLevel` ENUM('alpha','beta','standard') DEFAULT 'standard', > ### `dateExpires` date DEFAULT NULL, > ### `birthdate` DATE NULL, > ### `sex` ENUM('male','female') NULL, > ### `primaryEmail` VARCHAR(80) NOT NULL, > ### `additionalEmails` TINYTEXT NULL, -- stored as serialized array for multiple emails > ### `phone` TINYTEXT NULL, -- stored as serialized array for multiple phones > ### `address` TEXT NULL, -- stored as serialized array for multiple addresses > ### `profilePictureImg` VARCHAR(2056) NOT NULL DEFAULT 'default-profile-picture.jpg', > ### `spreadImg` TEXT NOT NULL, -- stored as serialized array for multiple spread images > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `username` (`username`), > ### UNIQUE KEY `primaryEmail` (`primaryEmail`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1000000000;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_login_failed_attempts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_login_failed_attempts` ( > ### `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, > ### `username` VARCHAR( 2056 ) NULL, > ### `email` VARCHAR( 2056 ) NULL, > ### `pass` VARCHAR(2056) NOT NULL, > ### `datetimeFailed` TIMESTAMP NOT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_carts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_carts` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other') NOT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_categories` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_categories` ( > ### `id` tinyint(5) unsigned NOT NULL AUTO_INCREMENT, > ### `category` varchar(40) NOT NULL, > ### `description` tinytext, > ### `image` varchar(45) DEFAULT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_customers` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_customers` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `email` varchar(80) NOT NULL, > ### `firstName` varchar(20) NOT NULL, > ### `lastName` varchar(40) NOT NULL, > ### `address1` varchar(80) NOT NULL, > ### `address2` varchar(80) DEFAULT NULL, > ### `city` varchar(60) NOT NULL, > ### `state` char(2) NOT NULL, > ### `zip` mediumint(5) unsigned zerofill NOT NULL, > ### `phone` int(10) NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `email` (`email`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_orders` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_orders` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `customerId` int(10) unsigned NOT NULL, > ### `total` decimal(7,2) unsigned DEFAULT NULL, > ### `shipping` decimal(5,2) unsigned NOT NULL, > ### `ccNumber` mediumint(4) unsigned NOT NULL, > ### `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `customer_id` (`customerId`), > ### KEY `order_date` (`orderDate`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_order_contents` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_order_contents` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `pricePer` decimal(5,2) unsigned NOT NULL, > ### `shipDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `ship_date` (`shipDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### 160 > ### 161 > ### 162 > ### 163 > ### 164 > ### 165 > ### 166 > ### 167 > ### 168 > ### 169 > ### 170 > ### 171 > ### 172 > ### 173 > ### 174 > ### 175 > ### 176 > ### 177 > ### 178 > ### 179 > ### 180 > ### 181 > ### 182 > ### 183 > ### 184 > ### 185 > ### 186 > ### 187 > ### 188 > ### 189 > ### 190 > ### 191 > ### 192 > ### 193 > ### 194 > ### 195 > ### 196 > ### 197 > ### 198 > ### 199 > ### 200 > ### 201 > ### 202 > ### 203 > ### 204 > ### 205 > ### 206 > ### 207 > ### 208 > ### 209 > ### 210 > ### 211 > ### 212 > ### 213 > ### 214 > ### 215 > ### 216 > ### 217 > ### 218 > ### 219 > ### 220 > ### 221 > ### 222 > ### 223 > ### 224 > ### 225 > ### 226 > ### 227 > ### 228 > ### 229 > ### 230 > ### 231 > ### 232 > ### 233 > ### 234 > ### 235 > ### 236 > ### 237 > ### 238 > ### 239 > ### 240 > ### 241 > ### 242 > ### 243 > ### 244 > ### 245 > ### 246 > ### 247 > ### 248 > ### 249 > ### 250 > ### 251 > ### 252 > ### 253 > ### 254 > ### 255 > ### 256 > ### 257 > ### 258 > ### 259 > ### 260 > ### 261 > ### 262 > ### 263 > ### 264 > ### 265 > ### 266 > ### 267 > ### 268 > ### 269 > ### 270 > ### 271 > ### 272 > ### 273 > ### 274 > ### 275 > ### 276 > ### 277 > ### 278 > ### 279 > ### 280 > ### 281 > ### 282 > ### 283 > ### 284 > ### 285 > ### 286 > ### 287 > ### 288 > ### 289 > ### 290 > ### 291 > ### 292 > ### 293 > ### 294 > ### 295 > ### 296 > ### 297 > ### 298 > ### 299 > ### 300 > ### 301 > ### 302 > ### 303 > ### 304 > ### 305 > ### 306 > ### 307 > ### 308 > ### 309 > ### 310 > ### 311 > ### 312 > ### 313 > ### 314 > ### 315 > ### 316 > ### 317 > ### 318 > ### 319 > ### 320 > ### 321 > ### 322 > ### 323 > ### 324 > ### 325 > ### 326 > ### 327 > ### 328 > ### 329 > ### 330 > ### 331 > ### 332 > ### 333 > ### 334 > ### 335 > ### 336 > ### 337 > ### 338 > ### 339 > ### 340 > ### 341 > ### 342 > ### 343 > ### 344 > ### 345 > ### 346 > ### 347 > ### 348 > ### 349 > ### 350 > ### 351 > ### 352 > ### 353 > ### 354 > ### 355 > ### 356 > ### 357 > ### 358 > ### 359 > ### 360 > ### 361 > ### 362 > ### 363 > ### 364 > ### 365 > ### 366 > ### 367 > ### 368 > ### 369 > ### 370 > ### 371 > ### 372 > ### 373 > ### 374 > ### 375 > ### 376 > ### 377 > ### 378 > ### 379 > ### 380 > ### 381 > ### 382 > ### 383 > ### 384 > ### 385 > ### 386 > ### 387 > ### 388 > ### 389 > ### 390 > ### 391 > ### 392 > ### 393 > ### 394 > ### 395 > ### 396 > ### 397 > ### 398 > ### 399 > ### 400 > ### 401 > ### 402 > ### 403 > ### 404 > ### 405 > ### 406 > ### 407 > ### 408 > ### 409 > ### 410 > ### 411 > ### 412 > ### 413 > ### 414 > ### 415 > ### 416 > ### 417 > ### 418 > ### 419 > ### 420 > ### 421 > ### 422 > ### 423 > ### 424 > ### 425 > ### 426 > ### 427 > ### 428 > ### 429 > ### 430 > ### 431 > ### 432 > ### 433 > ### 434 > ### 435 > ### 436 > ### 437 > ### 438 > ### 439 > ### 440 > ### 441 > ### 442 > ### 443 > ### 444 > ### 445 > ### 446 > ### 447 > ### 448 > ### 449 > ### 450 > ### 451 > ### 452 > ### 453 > ### 454 > ### 455 > ### 456 > ### 457 > ### 458 > ### 459 > ### 460 > ### 461 > ### 462 > ### 463 > ### 464 > ### 465 > ### 466 > ### 467 > ### 468 > ### 469 > ### 470 > ### 471 > ### 472 > ### 473 > ### 474 > ### 475 > ### 476 > ### 477 > ### 478 > ### 479 > ### 480 > ### 481 > ### 482 > ### 483 > ### 484 > ### 485 > ### 486 > ### 487 > ### 488 > ### 489 > ### 490 > ### 491 > ### 492 > ### 493 > ### 494 > ### 495 > ### 496 > ### 497 > ### 498 > ### 499 > ### 500 > ### 501 > ### 502 > ### 503 > ### 504 > ### 505 > ### 506 > ### 507 > ### 508 > ### 509 > ### 510 > ### 511 > ### 512 > ### 513 > ### 514 > ### 515 > ### 516 > ### 517 > ### 518 > ### 519 > ### 520 > ### 521 > ### 522 > ### 523 > ### 524 > ### 525 > ### 526 > ### 527 > ### 528 > ### 529 > ### 530 > ### 531 > ### 532 > ### 533 > ### 534 > ### 535 > ### 536 > ### 537 > ### 538 > ### 539 > ### 540 > ### 541 > ### 542 > ### 543 > ### 544 > ### 545 > ### 546 > ### 547 > ### 548 > ### 549 > ### 550 > ### 551 > ### 552 > ### 553 > ### 554 > ### 555 > ### 556 > ### 557 > ### 558 > ### 559 > ### 560 > ### 561 > ### 562 > ### 563 > ### 564 > ### 565 > ### 566 > ### 567 > ### 568 > ### 569 > ### 570 > ### 571 > ### 572 > ### 573 > ### 574 > ### 575 > ### 576 > ### 577 > ### 578 > ### 579 > ### 580 > ### 581 > ### 582 > ### 583 > ### 584 > ### 585 > ### 586 > ### 587 > ### 588 > ### 589 > ### 590 > ### 591 > ### 592 > ### 593 > ### 594 > ### 595 > ### 596 > ### 597 > ### 598 > ### 599 > ### 600 > ### 601 > ### 602 > ### 603 > ### 604 > ### 605 > ### 606 > ### 607 > ### 608 > ### 609 > ### 610 > ### 611 > ### 612 > ### 613 > ### 614 > ### 615 > ### 616 > ### 617 > ### 618 > ### 619 > ### 620 > ### 621 > ### 622 > ### 623 > ### 624 > ### 625 > ### 626 > ### 627 > ### 628 > ### 629 > ### 630 > ### 631 > ### 632 > ### 633 > ### 634 > ### 635 > ### 636 > ### 637 > ### 638 > ### -- phpMyAdmin SQL Dump > ### -- version 3.5.2.2 > ### -- http://www.phpmyadmin.net
 > ### -- > ### -- Host: 127.0.0.1 > ### -- Generation Time: Aug 16, 2013 at 09:59 PM > ### -- Server version: 5.5.27 > ### -- PHP Version: 5.4.7

> ### SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; > ### SET time_zone = "+00:00";

> ### /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */; > ### /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */; > ### /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */; > ### /*!40101 SET NAMES utf8 */;

> ### -- > ### -- Database: `shadow` > ### --

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_admin` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_admin` ( > ### `id` bigint(20) NOT NULL AUTO_INCREMENT, > ### `adminEmail` varchar(80) NOT NULL, > ### `adminPhone` smallint(15) DEFAULT NULL, > ### `adminPhoneExt` smallint(10) DEFAULT NULL, > ### `siteName` varchar(100) NOT NULL, > ### `siteTagline` varchar(100) NOT NULL, > ### `siteSummary` text, > ### `currentApp` varchar(150) NOT NULL DEFAULT 'ninjablack1', > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_carts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_carts` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other') NOT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_categories` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_categories` ( > ### `id` tinyint(5) unsigned NOT NULL AUTO_INCREMENT, > ### `category` varchar(40) NOT NULL, > ### `description` tinytext, > ### `image` varchar(45) DEFAULT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

> ### -- > ### -- Dumping data for table `shdw_categories` > ### --

> ### INSERT INTO `shdw_categories` (`id`, `category`, `description`, `image`) VALUES > ### (1, 'Allergy', NULL, NULL), > ### (2, 'Cancer Support', NULL, NULL), > ### (3, 'Children', NULL, NULL), > ### (4, 'Circulation', NULL, NULL), > ### (5, 'Cleansing & Detox', NULL, NULL), > ### (6, 'Digestion', NULL, NULL), > ### (7, 'Eyes', NULL, NULL), > ### (8, 'Immune', NULL, NULL), > ### (9, 'Men/Women', NULL, NULL), > ### (10, 'Oral Health', NULL, NULL), > ### (11, 'Pain', NULL, NULL), > ### (12, 'Skin', NULL, NULL), > ### (13, 'Sleep', NULL, NULL), > ### (14, 'Sports', NULL, NULL), > ### (15, 'Sleep', NULL, NULL), > ### (16, 'Urinary Track', NULL, NULL), > ### (17, 'Weight', NULL, NULL), > ### (18, 'Mind & Body', NULL, NULL);

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_customers` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_customers` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `email` varchar(80) NOT NULL, > ### `firstName` varchar(20) NOT NULL, > ### `lastName` varchar(40) NOT NULL, > ### `address1` varchar(80) NOT NULL, > ### `address2` varchar(80) DEFAULT NULL, > ### `city` varchar(60) NOT NULL, > ### `state` char(2) NOT NULL, > ### `zip` mediumint(5) unsigned zerofill NOT NULL, > ### `phone` int(10) NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `email` (`email`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_orders` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_orders` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `customerId` int(10) unsigned NOT NULL, > ### `total` decimal(7,2) unsigned DEFAULT NULL, > ### `shipping` decimal(5,2) unsigned NOT NULL, > ### `ccNumber` mediumint(4) unsigned NOT NULL, > ### `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `customer_id` (`customerId`), > ### KEY `order_date` (`orderDate`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_order_contents` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_order_contents` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `pricePer` decimal(5,2) unsigned NOT NULL, > ### `shipDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `ship_date` (`shipDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_pages` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_pages` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `parentId` int(10) unsigned DEFAULT NULL, > ### `creatorId` int(10) unsigned NOT NULL, > ### `title` varchar(100) NOT NULL, > ### `content` text NOT NULL, > ### `slug` varchar(100) NOT NULL, > ### `dateUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, > ### `dateAdded` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `viewFile` text, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=73 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_products` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_products` ( > ### `id` int(11) unsigned NOT NULL AUTO_INCREMENT, > ### `name` tinytext NOT NULL, > ### `manufacturer` VARCHAR(100), > ### `seller` text NULL, > ### `category` varchar(50) NOT NULL, > ### `description` tinytext NOT NULL, > ### `features` text NULL, > ### `ingredients` text NULL, > ### `availability` enum('Available for sale','Hidden but available for sale','Coming soon','Disabled') NOT NULL DEFAULT 'Available for sale', > ### `weight` decimal(5,2) unsigned NOT NULL, > ### `image` varchar(2056) NOT NULL, > ### `price` decimal(5,2) unsigned NOT NULL, > ### `salePrice` decimal(5,2) unsigned, > ### `specialOffers` text NULL, > ### `SKU` VARCHAR(10) DEFAULT NULL, > ### `UPC` int(10) unsigned DEFAULT NULL, > ### `stock` mediumint(8) unsigned NOT NULL DEFAULT '100', > ### `shippingDetails` text NULL, > ### `ratingReview` text NULL, > ### `slug` varchar(2056) NOT NULL, > ### `externalLink` varchar(2056) NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `SKU` (`SKU`), > ### UNIQUE KEY `UPC` (`UPC`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_sales` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_sales` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `productType` VARCHAR(100) DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `price` decimal(5,2) unsigned NOT NULL, > ### `startDate` date NOT NULL, > ### `endDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `start_date` (`startDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_sizes` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_sizes` ( > ### `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT, > ### `size` varchar(40) NOT NULL, > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `size` (`size`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_transactions` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_transactions` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `type` varchar(18) NOT NULL, > ### `amount` decimal(7,2) NOT NULL, > ### `responseCode` tinyint(1) unsigned NOT NULL, > ### `responseReason` tinytext, > ### `transactionId` bigint(20) unsigned NOT NULL, > ### `response` text NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `order_id` (`orderId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_wish_lists` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_wish_lists` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- STORED PROCEDURES > ### --****_``_**** > ### *** ![1000086060](https://github.com/user-attachments/assets/b41fa5f1-1108-464b-8a1d-e114d65c7603
) ![1000075416](https://github.com/user-attachments/assets/eb040fd8-638e-44bf-8dc3-c23ec708020c
) ![1000075064]()https://github.com/user-attachments/assets/c06b9dd3-d33e-4968-8de3-125cc43d1e32


Edit message
Write a small message here explaining this change. (Optional)
Footer
© 2025 GitHub, Inc.
This branch has conflicts that must be resolved
Use the command line to resolve conflicts before continuing.
• Dockerfile
• config/kubernetes/production/deployments/webapp.yaml
• content/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot.md
• content/copilot/about-github-copilot/subscription-plans-for-github-copilot.md
• content/copilot/about-github-copilot/what-is-github-copilot.md
• content/copilot/customizing-copilot/index.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/about-individual-copilot-plans-and-benefits.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-started-with-a-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/disabling-github-copilot-free.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/extending-the-capabilities-of-github-copilot-in-your-personal-account.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/viewing-and-changing-your-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization.md
• content/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests.md
• content/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot.md
• content/copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot.md
• content/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself.md
• content/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat.md
•  
• § Etemal Flame - Ann ธิติมา
content/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task.md
• content/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks.md
Resolve conflicts
Enable auto-merge (rebase)
 

Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
1. Editing _Footer · tr4200812/- WikiEdit mode: 
This branch has conflicts that must be resolved
Use the command line to resolve conflicts before continuing.
• Dockerfile
• config/kubernetes/production/deployments/webapp.yaml
• content/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot.md
• content/copilot/about-github-copilot/subscription-plans-for-github-copilot.md
• content/copilot/about-github-copilot/what-is-github-copilot.md
• content/copilot/customizing-copilot/index.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/about-individual-copilot-plans-and-benefits.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-started-with-a-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/disabling-github-copilot-free.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/extending-the-capabilities-of-github-copilot-in-your-personal-account.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/viewing-and-changing-your-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization.md
• content/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests.md
• content/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot.md
• content/copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot.md
• content/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself.md
• content/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat.md
• content/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task.md
• content/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks.md
Resolve conflicts
Enable auto-merge (rebase)


Textile
Phrase Modifiers
Block Modifiers
Links / Images
Links
Images
To display an image, simply wrap the image’s URL in ! (exclamation points). If you want to link the image to a URL, you can blend the image and link syntax: place your image URL in the exclamation points and suffix that with a colon and your URL. For example, an image at http://myurl/image.png that should link to http://myurl/ should be written as !http://myurl/image.png!:http://myurl/.

`*
*
```github
docs

Code
Issues
238
Pull requests
143
Actions
Projects
3
Security
Insights
View tr4200812’s profile
Create new issue
Improve existing content
·
Choose a different template
Add a title
*
?
HUBBERS!! This is the github/docs open source repo. You may want to open an issue in the internal-only github/docs-content repo instead.

Before you file an issue read the Contributing guide.
Check to make sure someone hasn’t already opened a similar issue.

Code of Conduct
This project has a Code of Conduct that all participants are expected to understand and follow.

I have read and agree to the GitHub Docs project’s Code of Conduct
*
What article on docs.github.com is affected?
*
Please link to the article you’d like to see updated.

Markdown Editor
Markdown input: preview mode selected.
Write
PreviewSkip to content
Navigation Menu
github
docs

Code
Issues
241
Pull requests
143
Actions
Projects
3
Security
Insights
- #37672
Open
@tr4200812
Description
tr4200812
opened 2 minutes ago
Body input
Markdown input: edit mode selected.
WritSkip to content
Navigation Menu
tr4200812
[  ] 🦋-

Code
Issues
6
Pull requests
2
Discussions
Actions
Projects
Wiki
Security
Create new page

Write
Preview
    
Skip to content
Navigation Menu
tr4200812
-

Code
Issues
16
Pull requests
2
Discussions
Actions
Projects
Wiki
Security
Editing _Footer
 
 
_Footer
Write
Preview
    
Edit mode: 
MediaWiki
![1000075064](https://github.com/user-attachments/assets/f62767a7-e9ff-406b-b271-2646f0a2d8bc
) ![1000089420](https://github.com/user-attachments/assets/fc691e81-ad78-4cd3-aa3e-e5ba89c5b9a7
)

[hero-light-sm.webm](https://github.com/user-attachments/assets/12ca1ebe-d8a4-4570-a803-8547c28740d9
) '🪯##"

Edit mode: Markdown Block Elements Span Elements Miscellaneous Paragraphs & Breaks Headers Blockquotes Lists Code Blocks Horizontal Rules To create a paragraph, simply create a block of text that is not separated by one or more blank lines. Blocks of text separated by one or more blank lines will be parsed as paragraphs.

If you want to create a line break, end a line with two or more spaces, then hit Return/Enter.

File fome tr4200812 [n00i1kat]

Attach files by dragging & dropping, selecting or pasting them. Edit message

"

 //
> ### -- phpMyAdmin SQL Dump > ### -- version 3.5.2.2 > ### -- http://www.phpmyadmin.net
 > ### -- > ### -- Host: 127.0.0.1 > ### -- Generation Time: Aug 16, 2025 at 11:03 PM > ### -- Server version: 5.5.27 > ### -- PHP Version: 5.4.7

^ > ### SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; > ### SET time_zone = "+00:00";
^ > ### -- > ### -- Database: `shadow` > ### -- > ### https://gist.github.com/1bcfdd571ed00ffd61f0a7cce2aa9772.git
 > ### -- -------------------------------------------------------- > ### .. image:: https://wakatime.com/badge/user/208f5cf8-67e3-484e-a050-5bbdfc460c1a.svg
 > ### :target: ### ## ### `> > ### *** > ### `
> ### -- > ### -- Table structure for table `shdw_admin` > ### --

> ### CREATE TABLE IF NOT EXISTS https://wakatime.com/@208f5cf8-67e3-484e-a050-5bbdfc460c1a
`shdw_options` ( > ### `id` bigint(20) NOT NULL AUTO_INCREMENT, > ### `siteName` varchar(100) NOT NULL, > ### `siteTagline` varchar(100) NOT NULL DEFAULT 'A super amazing site.', > ### `siteSummary` text NULL, > ### `currentApp` varchar(150) NOT NULL DEFAULT 'ninjablack', > ### `language` ENUM( > ### 'Afrikaans', -- AF > ### 'Albanian', -- SQ > ### 'Arabic', -- AR > ### 'Armenian', -- HY > ### 'Basque', -- EU > ### 'Bengali', -- BN > ### 'Bulgarian', -- BG > ### 'Catalan', -- CA > ### 'Cambodian', -- KM > ### 'Chinese (Mandarin)', -- ZH > ### 'Croatian', -- HR > ### 'Czech', -- CS > ### 'Danish', -- DA > ### 'Dutch', -- NL > ### 'English', -- EN > ### 'Estonian', -- ET > ### 'Fiji', -- FJ > ### 'Finnish', -- FI > ### 'French', -- FR > ### 'Georgian', -- KA > ### 'German', -- DE > ### 'Greek', -- EL > ### 'Gujarati', -- GU > ### 'Hebrew', -- HE > ### 'Hindi', -- HI > ### 'Hungarian', -- HU > ### 'Icelandic', -- IS > ### 'Indonesian', -- ID > ### 'Irish', -- GA > ### 'Italian', -- IT > ### 'Japanese', -- JA > ### 'Javanese', -- JW > ### 'Korean', -- KO > ### 'Latin', -- LA > ### 'Latvian', -- LV > ### 'Lithuanian', -- LT > ### 'Macedonian', -- MK > ### 'Malay', -- MS > ### 'Malayalam', -- ML > ### 'Maltese', -- MT > ### 'Maori', -- MI > ### 'Marathi', -- MR > ### 'Mongolian', -- MN > ### 'Nepali', -- Nepali > ### 'Norwegian', -- NO > ### 'Persian', -- FA > ### 'Polish', -- PL > ### 'Portuguese', -- PT > ### 'Punjabi', -- PA > ### 'Quechua', -- QU > ### 'Romanian', -- RO > ### 'Russian', -- RU > ### 'Samoan', -- SM > ### 'Serbian', -- SR > ### 'Slovak', -- SK > ### 'Slovenian', -- SL > ### 'Spanish', -- ES > ### 'Swahili', -- SW > ### 'Swedish ', -- SV > ### 'Tamil', -- TA > ### 'Tatar', -- TT > ### 'Telugu', -- TE > ### 'Thai', -- TH > ### 'Tibetan', -- BO > ### 'Tonga', -- TO > ### 'Turkish', -- TR > ### 'Ukrainian', -- UK > ### 'Urdu', -- UR > ### 'Uzbek', -- UZ > ### 'Vietnamese', -- VI > ### 'Welsh', -- CY > ### 'Xhosa' -- XH > ### ) NOT NULL DEFAULT 'English', > ### `timezone` ENUM( > ### 'GMTMINUS1200INTERNATIONALDATELINEWEST', -- (GMT-12:00) International Date Line West > ### 'GMTMINUS1100MIDWAYISLAND_SAMOA', -- (GMT-11:00) Midway Island, Samoa > ### 'GMTMINUS1000HAWAII', -- (GMT-10:00) Hawaii > ### 'GMTMINUS0900ALASKA', -- (GMT-09:00) Alaska > ### 'GMTMINUS0800PACIFICTIME', -- (GMT-08:00) Pacific Time (US & Canada) > ### 'GMTMINUS0800TIJUANA_BAJACALIFORNIA', -- GMT-08:00) Tijuana, Baja California > ### 'GMTMINUS0700ARIZONA', -- (GMT-07:00) Arizona > ### 'GMTMINUS0700MOUNTAINTIME', -- (GMT-07:00) Mountain Time (US & Canada) > ### 'GMTMINUS0700CHIHUAHUA_LAPAZ_MAZATLAN', -- (GMT-07:00) Chihuahua, La Paz, Mazatlan > ### 'GMTMINUS0600CENTRALAMERICA', -- (GMT-06:00) Central America > ### 'GMTMINUS0600CENTRALTIME', -- (GMT-06:00) Central Time (US & Canada) > ### 'GMTMINUS0600GUADALAJARA_MEXICOCITY', -- (GMT-06:00) Guadalajara, Mexico City, Monterrey > ### 'GMTMINUS0600SASKATCHEWAN', -- (GMT-06:00) Saskatchewan > ### 'GMTMINUS0500BOGOTA_LIMA_QUITO_RIOBRANCO', -- (GMT-05:00) Bogota, Lima, Quito, Rio Branco > ### 'GMTMINUS0500EASTERNTIME', -- GMT-05:00) Eastern Time (US & Canada) > ### 'GMTMINUS0500INDIANA', -- (GMT-05:00) Indiana (East) > ### 'GMTMINUS0430CARACAS', -- (GMT-04:30) Caracas > ### 'GMTMINUS0400ASUNCION', -- (GMT-04:00) Asuncion > ### 'GMTMINUS0400ATLANTICTIME', -- (GMT-04:00) Atlantic Time (Canada) > ### 'GMTMINUS0400LAPAZ', -- (GMT-04:00) La Paz > ### 'GMTMINUS0400MANAUS', -- (GMT-04:00) Manaus > ### 'GMTMINUS0400SANTIAGO', -- (GMT-04:00) Santiago > ### 'GMTMINUS0330NEWFOUNDLAND', -- (GMT-03:30) Newfoundland > ### 'GMTMINUS0300BRASILIA', -- (GMT-03:00) Brasilia > ### 'GMTMINUS0300BUENOSAIRES', -- (GMT-03:00) Buenos Aires > ### 'GMTMINUS0300BUENOSAIRES_GEORGETOWN', -- (GMT-03:00) Buenos Aires, Georgetown > ### 'GMTMINUS0300GREENLAND', -- (GMT-03:00) Greenland > ### 'GMTMINUS0300MONTEVIDEO', -- (GMT-03:00) Montevideo > ### 'GMTMINUS0300_SALVADOR', -- (GMT-03:00) Salvador > ### 'GMTMINUS0200MIDATLANTIC', -- (GMT-02:00) Mid-Atlantic > ### 'GMTMINUS0100AZORES', -- (GMT-01:00) Azores > ### 'GMTMINUS0100CAPEVERDIS', -- (GMT-01:00) Cape Verde Is. > ### 'GMT_CASABLANCA', -- (GMT) Casablanca > ### 'GMT_COORDINATEDUNIVERSALTIME', -- (GMT) Coordinated Universal Time > ### 'GMT_CASABLANCA_MONTROVIA_REYKJAVIK', -- (GMT) Casablanca, Monrovia, Reykjavik > ### 'GMT_DUBLIN_EDINBURGH_LISBON_LONDON', -- (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London > ### 'GMTPLUS0100_AMSTERDAM_BERLIN_BERN_ROME', -- (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna > ### 'GMTPLUS0100BELGRADE_BRATISLAVA_BUDAPEST', -- (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague > ### 'GMTPLUS0100BRUSSELS_COPENHAGEN_MADRID', -- (GMT+01:00) Brussels, Copenhagen, Madrid, Paris > ### 'GMTPLUS0100SARAJEVO_SKOPJE_WARSAW_ZAGREB', -- (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb > ### 'GMTPLUS0100WESTCENTRALAFRICA', -- (GMT+01:00) West Central Africa > ### 'GMTPLUS0200AMMAN', -- (GMT+02:00) Amman > ### 'GMTPLUS0200ATHENS_BUCHAREST_ISTANBUL', -- (GMT+02:00) Athens, Bucharest, Istanbul > ### 'GMTPLUS0200BEIRUT', -- (GMT+02:00) Beirut > ### 'GMTPLUS0200MINSK', -- (GMT+02:00) Minsk > ### 'GMTPLUS0200CAIRO', -- (GMT+02:00) Cairo > ### 'GMTPLUS0200_DAMASCUS', -- (GMT+02:00) Damascus > ### 'GMTPLUS0200HARARE_PRETORIA', -- (GMT+02:00) Harare, Pretoria > ### 'GMTPLUS0200HELSINKI_KYIV_RIGA_VILNIUS', -- (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius > ### 'GMTPLUS0200JERUSALEM', -- (GMT+02:00) Jerusalem > ### 'GMTPLUS0200WINDHOEK', -- (GMT+02:00) Windhoek > ### 'GMTPLUS0300BAGHDAD', -- (GMT+03:00) Baghdad > ### 'GMT_PLUS0300KALININGRAD_MINSK', -- (GMT+03:00) Kaliningrad, Minsk > ### 'GMTPLUS0300KUWAIT_RIYADH', -- (GMT+03:00) Kuwait, Riyadh > ### 'GMTPLUS0300MOSCOW_STPETERSBURG_VOLGOGRAD', -- (GMT+04:00) Moscow, St. Petersburg, Volgograd > ### 'GMTPLUS0400PORTLOUIS', -- (GMT+04:00) Port Louis > ### 'GMTPLUS0300NAIROBI', -- (GMT+03:00) Nairobi > ### 'GMTPLUS0300TBILISI', -- (GMT+03:00) Tbilisi > ### 'GMTPLUS0330TEHRAN', -- (GMT+03:30) Tehran > ### 'GMTPLUS0400ABUDHABI_MUSCAT', -- (GMT+04:00) Abu Dhabi, Muscat > ### 'GMTPLUS0400BAKU', -- (GMT+04:00) Baku > ### 'GMTPLUS0400CAUCASUSSTANDARDTIME', -- (GMT+04:00) Caucasus Standard Time > ### 'GMTPLUS0400CAUCASUSSTANDARDTIME', -- (GMT+04:00) Caucasus Standard Time > ### 'GMTPLUS0400YEREVAN', -- (GMT+04:00) Yerevan > ### 'GMTPLUS0430KABUL', -- (GMT+04:30) Kabul > ### 'GMTPLUS0500EKATERINBURG', -- (GMT+05:00) Ekaterinburg > ### 'GMTPLUS0500ISLAMABAD_KARACHI', -- (GMT+05:00) Islamabad, Karachi > ### 'GMTPLUS0500ISLAMABAD_KARACHI_TASHKENT', -- (GMT+05:00) Tashkent > ### 'GMTPLUS0530CHENNAI_KOLKATA_MUMBAI', -- (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi > ### 'GMTPLUS0530SRIJAYAWARDENEPURA', -- (GMT+05:30) Sri Jayawardenepura > ### 'GMTPLUS0545KATHMANDU', -- (GMT+05:45) Kathmandu > ### 'GMTPLUS0600ALMATY_NOVOSIBIRSK', -- (GMT+06:00) Almaty, Novosibirsk > ### 'GMTPLUS0600ASTANA_DHAKA', -- (GMT+06:00) Astana, Dhaka > ### 'GMTPLUS0600DHAKA', -- (GMT+06:00) Dhaka > ### 'GMTPLUS0630_YANGON', -- (GMT+06:30) Yangon (Rangoon) > ### 'GMTPLUS0700_BANGKOK_HANOI_JAKARTA', -- (GMT+07:00) Bangkok, Hanoi, Jakarta > ### 'GMTPLUS0700KRASNOYARSK', -- (GMT+07:00) Krasnoyarsk > ### 'GMTPLUS0800BEIJING_CHONGQING_HONGKONG', -- (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi > ### 'GMTPLUS0800IRKUTSK_ULAANBATAAR', -- (GMT+08:00) Irkutsk, Ulaan Bataar > ### 'GMTPLUS0800_ULAANBAATAR', -- (GMT+08:00) Ulaanbaatar > ### 'GMTPLUS0800KUALALUMPUR_SINGAPORE', -- (GMT+08:00) Kuala Lumpur, Singapore > ### 'GMTPLUS0800PERTH', -- (GMT+08:00) Perth > ### 'GMTPLUS0800TAIPEI', -- (GMT+08:00) Taipei > ### 'GMTPLUS0900OSAKA_SAPPORO_TOKYO', -- (GMT+09:00) Osaka, Sapporo, Tokyo > ### 'GMTPLUS0900SEOUL', -- (GMT+09:00) Seoul > ### 'GMTPLUS0900YAKUTSK', -- (GMT+09:00) Yakutsk > ### 'GMTPLUS0930ADELAIDE', -- (GMT+09:30) Adelaide > ### 'GMTPLUS0930DARWIN', -- (GMT+09:30) Darwin > ### 'GMTPLUS1000BRISBANE', -- (GMT+10:00) Brisbane > ### 'GMTPLUS1000CANBERRA_MELBOURNE_SYDNEY', -- (GMT+10:00) Canberra, Melbourne, Sydney > ### 'GMTPLUS1000GUAM_PORTMORESBY', -- (GMT+10:00) Guam, Port Moresby > ### 'GMTPLUS1000HOBART', -- (GMT+10:00) Hobart > ### 'GMTPLUS1000VLADIVOSTOK', -- (GMT+10:00) Vladivostok > ### 'GMTPLUS0600MAGADAN', -- (GMT+12:00) Magadan > ### 'GMTPLUS1100MAGADAN_SOLOMONIS', -- (GMT+11:00) Magadan, Solomon Is., New Caledonia > ### 'GMTPLUS1200AUCKLAND_WELLINGTON', -- (GMT+12:00) Auckland, Wellington > ### 'GMTPLUS1200FIJI_KAMCHATKA_MARSHALLIS', -- (GMT+12:00) Fiji, Kamchatka, Marshall Is. > ### 'GMTPLUS1300NUKU_ALOFA' -- (GMT+13:00) Nuku'alofa > ### ) NOT NULL DEFAULT 'GMT_COORDINATEDUNIVERSALTIME', > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_users` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_users` ( > ### `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, > ### `role` enum('master','admin','member', 'author','designer','developer','affiliate') NOT NULL DEFAULT 'member', > ### `prefix` varchar(40) NULL, > ### `firstName` varchar(40) NOT NULL, > ### `middleName` varchar(40) NULL, > ### `maiden` VARCHAR(40) NULL, > ### `lastName` varchar(80) NOT NULL, > ### `suffix` varchar(40) NULL, > ### `username` varchar(30) NOT NULL, > ### `pass` varchar(100) NOT NULL, > ### `securityQuestion1` TINYTEXT NULL, > ### `securityQuestion2` TINYTEXT NULL, > ### `securityQuestion3` TINYTEXT NULL, > ### `dateRegistered` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `lastLoginDate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `lastLoginIp` VARCHAR(39) NOT NULL, > ### `dateModified` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `releaseLevel` ENUM('alpha','beta','standard') DEFAULT 'standard', > ### `dateExpires` date DEFAULT NULL, > ### `birthdate` DATE NULL, > ### `sex` ENUM('male','female') NULL, > ### `primaryEmail` VARCHAR(80) NOT NULL, > ### `additionalEmails` TINYTEXT NULL, -- stored as serialized array for multiple emails > ### `phone` TINYTEXT NULL, -- stored as serialized array for multiple phones > ### `address` TEXT NULL, -- stored as serialized array for multiple addresses > ### `profilePictureImg` VARCHAR(2056) NOT NULL DEFAULT 'default-profile-picture.jpg', > ### `spreadImg` TEXT NOT NULL, -- stored as serialized array for multiple spread images > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `username` (`username`), > ### UNIQUE KEY `primaryEmail` (`primaryEmail`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1000000000;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_login_failed_attempts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_login_failed_attempts` ( > ### `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, > ### `username` VARCHAR( 2056 ) NULL, > ### `email` VARCHAR( 2056 ) NULL, > ### `pass` VARCHAR(2056) NOT NULL, > ### `datetimeFailed` TIMESTAMP NOT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_carts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_carts` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other') NOT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_categories` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_categories` ( > ### `id` tinyint(5) unsigned NOT NULL AUTO_INCREMENT, > ### `category` varchar(40) NOT NULL, > ### `description` tinytext, > ### `image` varchar(45) DEFAULT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_customers` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_customers` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `email` varchar(80) NOT NULL, > ### `firstName` varchar(20) NOT NULL, > ### `lastName` varchar(40) NOT NULL, > ### `address1` varchar(80) NOT NULL, > ### `address2` varchar(80) DEFAULT NULL, > ### `city` varchar(60) NOT NULL, > ### `state` char(2) NOT NULL, > ### `zip` mediumint(5) unsigned zerofill NOT NULL, > ### `phone` int(10) NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `email` (`email`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_orders` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_orders` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `customerId` int(10) unsigned NOT NULL, > ### `total` decimal(7,2) unsigned DEFAULT NULL, > ### `shipping` decimal(5,2) unsigned NOT NULL, > ### `ccNumber` mediumint(4) unsigned NOT NULL, > ### `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `customer_id` (`customerId`), > ### KEY `order_date` (`orderDate`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_order_contents` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_order_contents` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `pricePer` decimal(5,2) unsigned NOT NULL, > ### `shipDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `ship_date` (`shipDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### 160 > ### 161 > ### 162 > ### 163 > ### 164 > ### 165 > ### 166 > ### 167 > ### 168 > ### 169 > ### 170 > ### 171 > ### 172 > ### 173 > ### 174 > ### 175 > ### 176 > ### 177 > ### 178 > ### 179 > ### 180 > ### 181 > ### 182 > ### 183 > ### 184 > ### 185 > ### 186 > ### 187 > ### 188 > ### 189 > ### 190 > ### 191 > ### 192 > ### 193 > ### 194 > ### 195 > ### 196 > ### 197 > ### 198 > ### 199 > ### 200 > ### 201 > ### 202 > ### 203 > ### 204 > ### 205 > ### 206 > ### 207 > ### 208 > ### 209 > ### 210 > ### 211 > ### 212 > ### 213 > ### 214 > ### 215 > ### 216 > ### 217 > ### 218 > ### 219 > ### 220 > ### 221 > ### 222 > ### 223 > ### 224 > ### 225 > ### 226 > ### 227 > ### 228 > ### 229 > ### 230 > ### 231 > ### 232 > ### 233 > ### 234 > ### 235 > ### 236 > ### 237 > ### 238 > ### 239 > ### 240 > ### 241 > ### 242 > ### 243 > ### 244 > ### 245 > ### 246 > ### 247 > ### 248 > ### 249 > ### 250 > ### 251 > ### 252 > ### 253 > ### 254 > ### 255 > ### 256 > ### 257 > ### 258 > ### 259 > ### 260 > ### 261 > ### 262 > ### 263 > ### 264 > ### 265 > ### 266 > ### 267 > ### 268 > ### 269 > ### 270 > ### 271 > ### 272 > ### 273 > ### 274 > ### 275 > ### 276 > ### 277 > ### 278 > ### 279 > ### 280 > ### 281 > ### 282 > ### 283 > ### 284 > ### 285 > ### 286 > ### 287 > ### 288 > ### 289 > ### 290 > ### 291 > ### 292 > ### 293 > ### 294 > ### 295 > ### 296 > ### 297 > ### 298 > ### 299 > ### 300 > ### 301 > ### 302 > ### 303 > ### 304 > ### 305 > ### 306 > ### 307 > ### 308 > ### 309 > ### 310 > ### 311 > ### 312 > ### 313 > ### 314 > ### 315 > ### 316 > ### 317 > ### 318 > ### 319 > ### 320 > ### 321 > ### 322 > ### 323 > ### 324 > ### 325 > ### 326 > ### 327 > ### 328 > ### 329 > ### 330 > ### 331 > ### 332 > ### 333 > ### 334 > ### 335 > ### 336 > ### 337 > ### 338 > ### 339 > ### 340 > ### 341 > ### 342 > ### 343 > ### 344 > ### 345 > ### 346 > ### 347 > ### 348 > ### 349 > ### 350 > ### 351 > ### 352 > ### 353 > ### 354 > ### 355 > ### 356 > ### 357 > ### 358 > ### 359 > ### 360 > ### 361 > ### 362 > ### 363 > ### 364 > ### 365 > ### 366 > ### 367 > ### 368 > ### 369 > ### 370 > ### 371 > ### 372 > ### 373 > ### 374 > ### 375 > ### 376 > ### 377 > ### 378 > ### 379 > ### 380 > ### 381 > ### 382 > ### 383 > ### 384 > ### 385 > ### 386 > ### 387 > ### 388 > ### 389 > ### 390 > ### 391 > ### 392 > ### 393 > ### 394 > ### 395 > ### 396 > ### 397 > ### 398 > ### 399 > ### 400 > ### 401 > ### 402 > ### 403 > ### 404 > ### 405 > ### 406 > ### 407 > ### 408 > ### 409 > ### 410 > ### 411 > ### 412 > ### 413 > ### 414 > ### 415 > ### 416 > ### 417 > ### 418 > ### 419 > ### 420 > ### 421 > ### 422 > ### 423 > ### 424 > ### 425 > ### 426 > ### 427 > ### 428 > ### 429 > ### 430 > ### 431 > ### 432 > ### 433 > ### 434 > ### 435 > ### 436 > ### 437 > ### 438 > ### 439 > ### 440 > ### 441 > ### 442 > ### 443 > ### 444 > ### 445 > ### 446 > ### 447 > ### 448 > ### 449 > ### 450 > ### 451 > ### 452 > ### 453 > ### 454 > ### 455 > ### 456 > ### 457 > ### 458 > ### 459 > ### 460 > ### 461 > ### 462 > ### 463 > ### 464 > ### 465 > ### 466 > ### 467 > ### 468 > ### 469 > ### 470 > ### 471 > ### 472 > ### 473 > ### 474 > ### 475 > ### 476 > ### 477 > ### 478 > ### 479 > ### 480 > ### 481 > ### 482 > ### 483 > ### 484 > ### 485 > ### 486 > ### 487 > ### 488 > ### 489 > ### 490 > ### 491 > ### 492 > ### 493 > ### 494 > ### 495 > ### 496 > ### 497 > ### 498 > ### 499 > ### 500 > ### 501 > ### 502 > ### 503 > ### 504 > ### 505 > ### 506 > ### 507 > ### 508 > ### 509 > ### 510 > ### 511 > ### 512 > ### 513 > ### 514 > ### 515 > ### 516 > ### 517 > ### 518 > ### 519 > ### 520 > ### 521 > ### 522 > ### 523 > ### 524 > ### 525 > ### 526 > ### 527 > ### 528 > ### 529 > ### 530 > ### 531 > ### 532 > ### 533 > ### 534 > ### 535 > ### 536 > ### 537 > ### 538 > ### 539 > ### 540 > ### 541 > ### 542 > ### 543 > ### 544 > ### 545 > ### 546 > ### 547 > ### 548 > ### 549 > ### 550 > ### 551 > ### 552 > ### 553 > ### 554 > ### 555 > ### 556 > ### 557 > ### 558 > ### 559 > ### 560 > ### 561 > ### 562 > ### 563 > ### 564 > ### 565 > ### 566 > ### 567 > ### 568 > ### 569 > ### 570 > ### 571 > ### 572 > ### 573 > ### 574 > ### 575 > ### 576 > ### 577 > ### 578 > ### 579 > ### 580 > ### 581 > ### 582 > ### 583 > ### 584 > ### 585 > ### 586 > ### 587 > ### 588 > ### 589 > ### 590 > ### 591 > ### 592 > ### 593 > ### 594 > ### 595 > ### 596 > ### 597 > ### 598 > ### 599 > ### 600 > ### 601 > ### 602 > ### 603 > ### 604 > ### 605 > ### 606 > ### 607 > ### 608 > ### 609 > ### 610 > ### 611 > ### 612 > ### 613 > ### 614 > ### 615 > ### 616 > ### 617 > ### 618 > ### 619 > ### 620 > ### 621 > ### 622 > ### 623 > ### 624 > ### 625 > ### 626 > ### 627 > ### 628 > ### 629 > ### 630 > ### 631 > ### 632 > ### 633 > ### 634 > ### 635 > ### 636 > ### 637 > ### 638 > ### -- phpMyAdmin SQL Dump > ### -- version 3.5.2.2 > ### -- http://www.phpmyadmin.net
 > ### -- > ### -- Host: 127.0.0.1 > ### -- Generation Time: Aug 16, 2013 at 09:59 PM > ### -- Server version: 5.5.27 > ### -- PHP Version: 5.4.7

> ### SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; > ### SET time_zone = "+00:00";

> ### /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */; > ### /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */; > ### /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */; > ### /*!40101 SET NAMES utf8 */;

> ### -- > ### -- Database: `shadow` > ### --

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_admin` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_admin` ( > ### `id` bigint(20) NOT NULL AUTO_INCREMENT, > ### `adminEmail` varchar(80) NOT NULL, > ### `adminPhone` smallint(15) DEFAULT NULL, > ### `adminPhoneExt` smallint(10) DEFAULT NULL, > ### `siteName` varchar(100) NOT NULL, > ### `siteTagline` varchar(100) NOT NULL, > ### `siteSummary` text, > ### `currentApp` varchar(150) NOT NULL DEFAULT 'ninjablack1', > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_carts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_carts` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other') NOT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_categories` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_categories` ( > ### `id` tinyint(5) unsigned NOT NULL AUTO_INCREMENT, > ### `category` varchar(40) NOT NULL, > ### `description` tinytext, > ### `image` varchar(45) DEFAULT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

> ### -- > ### -- Dumping data for table `shdw_categories` > ### --

> ### INSERT INTO `shdw_categories` (`id`, `category`, `description`, `image`) VALUES > ### (1, 'Allergy', NULL, NULL), > ### (2, 'Cancer Support', NULL, NULL), > ### (3, 'Children', NULL, NULL), > ### (4, 'Circulation', NULL, NULL), > ### (5, 'Cleansing & Detox', NULL, NULL), > ### (6, 'Digestion', NULL, NULL), > ### (7, 'Eyes', NULL, NULL), > ### (8, 'Immune', NULL, NULL), > ### (9, 'Men/Women', NULL, NULL), > ### (10, 'Oral Health', NULL, NULL), > ### (11, 'Pain', NULL, NULL), > ### (12, 'Skin', NULL, NULL), > ### (13, 'Sleep', NULL, NULL), > ### (14, 'Sports', NULL, NULL), > ### (15, 'Sleep', NULL, NULL), > ### (16, 'Urinary Track', NULL, NULL), > ### (17, 'Weight', NULL, NULL), > ### (18, 'Mind & Body', NULL, NULL);

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_customers` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_customers` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `email` varchar(80) NOT NULL, > ### `firstName` varchar(20) NOT NULL, > ### `lastName` varchar(40) NOT NULL, > ### `address1` varchar(80) NOT NULL, > ### `address2` varchar(80) DEFAULT NULL, > ### `city` varchar(60) NOT NULL, > ### `state` char(2) NOT NULL, > ### `zip` mediumint(5) unsigned zerofill NOT NULL, > ### `phone` int(10) NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `email` (`email`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_orders` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_orders` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `customerId` int(10) unsigned NOT NULL, > ### `total` decimal(7,2) unsigned DEFAULT NULL, > ### `shipping` decimal(5,2) unsigned NOT NULL, > ### `ccNumber` mediumint(4) unsigned NOT NULL, > ### `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `customer_id` (`customerId`), > ### KEY `order_date` (`orderDate`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_order_contents` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_order_contents` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `pricePer` decimal(5,2) unsigned NOT NULL, > ### `shipDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `ship_date` (`shipDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_pages` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_pages` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `parentId` int(10) unsigned DEFAULT NULL, > ### `creatorId` int(10) unsigned NOT NULL, > ### `title` varchar(100) NOT NULL, > ### `content` text NOT NULL, > ### `slug` varchar(100) NOT NULL, > ### `dateUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, > ### `dateAdded` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `viewFile` text, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=73 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_products` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_products` ( > ### `id` int(11) unsigned NOT NULL AUTO_INCREMENT, > ### `name` tinytext NOT NULL, > ### `manufacturer` VARCHAR(100), > ### `seller` text NULL, > ### `category` varchar(50) NOT NULL, > ### `description` tinytext NOT NULL, > ### `features` text NULL, > ### `ingredients` text NULL, > ### `availability` enum('Available for sale','Hidden but available for sale','Coming soon','Disabled') NOT NULL DEFAULT 'Available for sale', > ### `weight` decimal(5,2) unsigned NOT NULL, > ### `image` varchar(2056) NOT NULL, > ### `price` decimal(5,2) unsigned NOT NULL, > ### `salePrice` decimal(5,2) unsigned, > ### `specialOffers` text NULL, > ### `SKU` VARCHAR(10) DEFAULT NULL, > ### `UPC` int(10) unsigned DEFAULT NULL, > ### `stock` mediumint(8) unsigned NOT NULL DEFAULT '100', > ### `shippingDetails` text NULL, > ### `ratingReview` text NULL, > ### `slug` varchar(2056) NOT NULL, > ### `externalLink` varchar(2056) NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `SKU` (`SKU`), > ### UNIQUE KEY `UPC` (`UPC`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_sales` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_sales` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `productType` VARCHAR(100) DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `price` decimal(5,2) unsigned NOT NULL, > ### `startDate` date NOT NULL, > ### `endDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `start_date` (`startDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_sizes` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_sizes` ( > ### `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT, > ### `size` varchar(40) NOT NULL, > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `size` (`size`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_transactions` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_transactions` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `type` varchar(18) NOT NULL, > ### `amount` decimal(7,2) NOT NULL, > ### `responseCode` tinyint(1) unsigned NOT NULL, > ### `responseReason` tinytext, > ### `transactionId` bigint(20) unsigned NOT NULL, > ### `response` text NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `order_id` (`orderId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_wish_lists` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_wish_lists` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- STORED PROCEDURES > ### --****_``_**** > ### *** ![1000086060](https://github.com/user-attachments/assets/b41fa5f1-1108-464b-8a1d-e114d65c7603
) ![1000075416](https://github.com/user-attachments/assets/eb040fd8-638e-44bf-8dc3-c23ec708020c
) ![1000075064]()https://github.com/user-attachments/assets/c06b9dd3-d33e-4968-8de3-125cc43d1e32


Edit message
Write a small message here explaining this change. (Optional)
Footer
© 2025 GitHub, Inc.
This branch has conflicts that must be resolved
Use the command line to resolve conflicts before continuing.
• Dockerfile
• config/kubernetes/production/deployments/webapp.yaml
• content/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot.md
• content/copilot/about-github-copilot/subscription-plans-for-github-copilot.md
• content/copilot/about-github-copilot/what-is-github-copilot.md
• content/copilot/customizing-copilot/index.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/about-individual-copilot-plans-and-benefits.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-started-with-a-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/disabling-github-copilot-free.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/extending-the-capabilities-of-github-copilot-in-your-personal-account.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/viewing-and-changing-your-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization.md
• content/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests.md
• content/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot.md
• content/copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot.md
• content/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself.md
• content/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat.md
•  
• § Etemal Flame - Ann ธิติมา
content/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task.md
• content/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks.md
Resolve conflicts
Enable auto-merge (rebase)
 

Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
1. Editing _Footer · tr4200812/- WikiEdit mode: 
This branch has conflicts that must be resolved
Use the command line to resolve conflicts before continuing.
• Dockerfile
• config/kubernetes/production/deployments/webapp.yaml
• content/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot.md
• content/copilot/about-github-copilot/subscription-plans-for-github-copilot.md
• content/copilot/about-github-copilot/what-is-github-copilot.md
• content/copilot/customizing-copilot/index.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/about-individual-copilot-plans-and-benefits.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-started-with-a-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/disabling-github-copilot-free.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/extending-the-capabilities-of-github-copilot-in-your-personal-account.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/viewing-and-changing-your-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization.md
• content/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests.md
• content/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot.md
• content/copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot.md
• content/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself.md
• content/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat.md
• content/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task.md
• content/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks.md
Resolve conflicts
Enable auto-merge (rebase)


Textile
Phrase Modifiers
Block Modifiers
Links / Images
Links
Images
To display an image, simply wrap the image’s URL in ! (exclamation points). If you want to link the image to a URL, you can blend the image and link syntax: place your image URL in the exclamation points and suffix that with a colon and your URL. For example, an image at http://myurl/image.png that should link to http://myurl/ should be written as !http://myurl/image.png!:http://myurl/.

`*
*
```github
docs

Code
Issues
238
Pull requests
143
Actions
Projects
3
Security
Insights
View tr4200812’s profile
Create new issue
Improve existing content
·
Choose a different template
Add a title
*
?
HUBBERS!! This is the github/docs open source repo. You may want to open an issue in the internal-only github/docs-content repo instead.

Before you file an issue read the Contributing guide.
Check to make sure someone hasn’t already opened a similar issue.

Code of Conduct
This project has a Code of Conduct that all participants are expected to understand and follow.

I have read and agree to the GitHub Docs project’s Code of Conduct
*
What article on docs.github.com is affected?
*
Please link to the article you’d like to see updated.

Markdown Editor
Markdown input: preview mode selected.
Write
PreviewSkip to content
Navigation Menu
github
docs

Code
Issues
241
Pull requests
143
Actions
Projects
3
Security
Insights
- #37672
Open
@tr4200812
Description
tr4200812
opened 2 minutes ago
Body input
Markdown input: edit mode selected.
WritSkip to content
Navigation Menu
tr4200812
[  ] 🦋-

Code
Issues
6
Pull requests
2
Discussions
Actions
Projects
Wiki
Security
Create new page

Write
Preview
    
Skip to content
Navigation Menu
tr4200812
-

Code
Issues
16
Pull requests
2
Discussions
Actions
Projects
Wiki
Security
Editing _Footer
 
 
_Footer
Write
Preview
    
Edit mode: 
MediaWiki
![1000075064](https://github.com/user-attachments/assets/f62767a7-e9ff-406b-b271-2646f0a2d8bc
) ![1000089420](https://github.com/user-attachments/assets/fc691e81-ad78-4cd3-aa3e-e5ba89c5b9a7
)

[hero-light-sm.webm](https://github.com/user-attachments/assets/12ca1ebe-d8a4-4570-a803-8547c28740d9
) '🪯##"

Edit mode: Markdown Block Elements Span Elements Miscellaneous Paragraphs & Breaks Headers Blockquotes Lists Code Blocks Horizontal Rules To create a paragraph, simply create a block of text that is not separated by one or more blank lines. Blocks of text separated by one or more blank lines will be parsed as paragraphs.

If you want to create a line break, end a line with two or more spaces, then hit Return/Enter.

File fome tr4200812 [n00i1kat]

Attach files by dragging & dropping, selecting or pasting them. Edit message

"

 //
> ### -- phpMyAdmin SQL Dump > ### -- version 3.5.2.2 > ### -- http://www.phpmyadmin.net
 > ### -- > ### -- Host: 127.0.0.1 > ### -- Generation Time: Aug 16, 2025 at 11:03 PM > ### -- Server version: 5.5.27 > ### -- PHP Version: 5.4.7

^ > ### SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; > ### SET time_zone = "+00:00";
^ > ### -- > ### -- Database: `shadow` > ### -- > ### https://gist.github.com/1bcfdd571ed00ffd61f0a7cce2aa9772.git
 > ### -- -------------------------------------------------------- > ### .. image:: https://wakatime.com/badge/user/208f5cf8-67e3-484e-a050-5bbdfc460c1a.svg
 > ### :target: ### ## ### `> > ### *** > ### `
> ### -- > ### -- Table structure for table `shdw_admin` > ### --

> ### CREATE TABLE IF NOT EXISTS https://wakatime.com/@208f5cf8-67e3-484e-a050-5bbdfc460c1a
`shdw_options` ( > ### `id` bigint(20) NOT NULL AUTO_INCREMENT, > ### `siteName` varchar(100) NOT NULL, > ### `siteTagline` varchar(100) NOT NULL DEFAULT 'A super amazing site.', > ### `siteSummary` text NULL, > ### `currentApp` varchar(150) NOT NULL DEFAULT 'ninjablack', > ### `language` ENUM( > ### 'Afrikaans', -- AF > ### 'Albanian', -- SQ > ### 'Arabic', -- AR > ### 'Armenian', -- HY > ### 'Basque', -- EU > ### 'Bengali', -- BN > ### 'Bulgarian', -- BG > ### 'Catalan', -- CA > ### 'Cambodian', -- KM > ### 'Chinese (Mandarin)', -- ZH > ### 'Croatian', -- HR > ### 'Czech', -- CS > ### 'Danish', -- DA > ### 'Dutch', -- NL > ### 'English', -- EN > ### 'Estonian', -- ET > ### 'Fiji', -- FJ > ### 'Finnish', -- FI > ### 'French', -- FR > ### 'Georgian', -- KA > ### 'German', -- DE > ### 'Greek', -- EL > ### 'Gujarati', -- GU > ### 'Hebrew', -- HE > ### 'Hindi', -- HI > ### 'Hungarian', -- HU > ### 'Icelandic', -- IS > ### 'Indonesian', -- ID > ### 'Irish', -- GA > ### 'Italian', -- IT > ### 'Japanese', -- JA > ### 'Javanese', -- JW > ### 'Korean', -- KO > ### 'Latin', -- LA > ### 'Latvian', -- LV > ### 'Lithuanian', -- LT > ### 'Macedonian', -- MK > ### 'Malay', -- MS > ### 'Malayalam', -- ML > ### 'Maltese', -- MT > ### 'Maori', -- MI > ### 'Marathi', -- MR > ### 'Mongolian', -- MN > ### 'Nepali', -- Nepali > ### 'Norwegian', -- NO > ### 'Persian', -- FA > ### 'Polish', -- PL > ### 'Portuguese', -- PT > ### 'Punjabi', -- PA > ### 'Quechua', -- QU > ### 'Romanian', -- RO > ### 'Russian', -- RU > ### 'Samoan', -- SM > ### 'Serbian', -- SR > ### 'Slovak', -- SK > ### 'Slovenian', -- SL > ### 'Spanish', -- ES > ### 'Swahili', -- SW > ### 'Swedish ', -- SV > ### 'Tamil', -- TA > ### 'Tatar', -- TT > ### 'Telugu', -- TE > ### 'Thai', -- TH > ### 'Tibetan', -- BO > ### 'Tonga', -- TO > ### 'Turkish', -- TR > ### 'Ukrainian', -- UK > ### 'Urdu', -- UR > ### 'Uzbek', -- UZ > ### 'Vietnamese', -- VI > ### 'Welsh', -- CY > ### 'Xhosa' -- XH > ### ) NOT NULL DEFAULT 'English', > ### `timezone` ENUM( > ### 'GMTMINUS1200INTERNATIONALDATELINEWEST', -- (GMT-12:00) International Date Line West > ### 'GMTMINUS1100MIDWAYISLAND_SAMOA', -- (GMT-11:00) Midway Island, Samoa > ### 'GMTMINUS1000HAWAII', -- (GMT-10:00) Hawaii > ### 'GMTMINUS0900ALASKA', -- (GMT-09:00) Alaska > ### 'GMTMINUS0800PACIFICTIME', -- (GMT-08:00) Pacific Time (US & Canada) > ### 'GMTMINUS0800TIJUANA_BAJACALIFORNIA', -- GMT-08:00) Tijuana, Baja California > ### 'GMTMINUS0700ARIZONA', -- (GMT-07:00) Arizona > ### 'GMTMINUS0700MOUNTAINTIME', -- (GMT-07:00) Mountain Time (US & Canada) > ### 'GMTMINUS0700CHIHUAHUA_LAPAZ_MAZATLAN', -- (GMT-07:00) Chihuahua, La Paz, Mazatlan > ### 'GMTMINUS0600CENTRALAMERICA', -- (GMT-06:00) Central America > ### 'GMTMINUS0600CENTRALTIME', -- (GMT-06:00) Central Time (US & Canada) > ### 'GMTMINUS0600GUADALAJARA_MEXICOCITY', -- (GMT-06:00) Guadalajara, Mexico City, Monterrey > ### 'GMTMINUS0600SASKATCHEWAN', -- (GMT-06:00) Saskatchewan > ### 'GMTMINUS0500BOGOTA_LIMA_QUITO_RIOBRANCO', -- (GMT-05:00) Bogota, Lima, Quito, Rio Branco > ### 'GMTMINUS0500EASTERNTIME', -- GMT-05:00) Eastern Time (US & Canada) > ### 'GMTMINUS0500INDIANA', -- (GMT-05:00) Indiana (East) > ### 'GMTMINUS0430CARACAS', -- (GMT-04:30) Caracas > ### 'GMTMINUS0400ASUNCION', -- (GMT-04:00) Asuncion > ### 'GMTMINUS0400ATLANTICTIME', -- (GMT-04:00) Atlantic Time (Canada) > ### 'GMTMINUS0400LAPAZ', -- (GMT-04:00) La Paz > ### 'GMTMINUS0400MANAUS', -- (GMT-04:00) Manaus > ### 'GMTMINUS0400SANTIAGO', -- (GMT-04:00) Santiago > ### 'GMTMINUS0330NEWFOUNDLAND', -- (GMT-03:30) Newfoundland > ### 'GMTMINUS0300BRASILIA', -- (GMT-03:00) Brasilia > ### 'GMTMINUS0300BUENOSAIRES', -- (GMT-03:00) Buenos Aires > ### 'GMTMINUS0300BUENOSAIRES_GEORGETOWN', -- (GMT-03:00) Buenos Aires, Georgetown > ### 'GMTMINUS0300GREENLAND', -- (GMT-03:00) Greenland > ### 'GMTMINUS0300MONTEVIDEO', -- (GMT-03:00) Montevideo > ### 'GMTMINUS0300_SALVADOR', -- (GMT-03:00) Salvador > ### 'GMTMINUS0200MIDATLANTIC', -- (GMT-02:00) Mid-Atlantic > ### 'GMTMINUS0100AZORES', -- (GMT-01:00) Azores > ### 'GMTMINUS0100CAPEVERDIS', -- (GMT-01:00) Cape Verde Is. > ### 'GMT_CASABLANCA', -- (GMT) Casablanca > ### 'GMT_COORDINATEDUNIVERSALTIME', -- (GMT) Coordinated Universal Time > ### 'GMT_CASABLANCA_MONTROVIA_REYKJAVIK', -- (GMT) Casablanca, Monrovia, Reykjavik > ### 'GMT_DUBLIN_EDINBURGH_LISBON_LONDON', -- (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London > ### 'GMTPLUS0100_AMSTERDAM_BERLIN_BERN_ROME', -- (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna > ### 'GMTPLUS0100BELGRADE_BRATISLAVA_BUDAPEST', -- (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague > ### 'GMTPLUS0100BRUSSELS_COPENHAGEN_MADRID', -- (GMT+01:00) Brussels, Copenhagen, Madrid, Paris > ### 'GMTPLUS0100SARAJEVO_SKOPJE_WARSAW_ZAGREB', -- (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb > ### 'GMTPLUS0100WESTCENTRALAFRICA', -- (GMT+01:00) West Central Africa > ### 'GMTPLUS0200AMMAN', -- (GMT+02:00) Amman > ### 'GMTPLUS0200ATHENS_BUCHAREST_ISTANBUL', -- (GMT+02:00) Athens, Bucharest, Istanbul > ### 'GMTPLUS0200BEIRUT', -- (GMT+02:00) Beirut > ### 'GMTPLUS0200MINSK', -- (GMT+02:00) Minsk > ### 'GMTPLUS0200CAIRO', -- (GMT+02:00) Cairo > ### 'GMTPLUS0200_DAMASCUS', -- (GMT+02:00) Damascus > ### 'GMTPLUS0200HARARE_PRETORIA', -- (GMT+02:00) Harare, Pretoria > ### 'GMTPLUS0200HELSINKI_KYIV_RIGA_VILNIUS', -- (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius > ### 'GMTPLUS0200JERUSALEM', -- (GMT+02:00) Jerusalem > ### 'GMTPLUS0200WINDHOEK', -- (GMT+02:00) Windhoek > ### 'GMTPLUS0300BAGHDAD', -- (GMT+03:00) Baghdad > ### 'GMT_PLUS0300KALININGRAD_MINSK', -- (GMT+03:00) Kaliningrad, Minsk > ### 'GMTPLUS0300KUWAIT_RIYADH', -- (GMT+03:00) Kuwait, Riyadh > ### 'GMTPLUS0300MOSCOW_STPETERSBURG_VOLGOGRAD', -- (GMT+04:00) Moscow, St. Petersburg, Volgograd > ### 'GMTPLUS0400PORTLOUIS', -- (GMT+04:00) Port Louis > ### 'GMTPLUS0300NAIROBI', -- (GMT+03:00) Nairobi > ### 'GMTPLUS0300TBILISI', -- (GMT+03:00) Tbilisi > ### 'GMTPLUS0330TEHRAN', -- (GMT+03:30) Tehran > ### 'GMTPLUS0400ABUDHABI_MUSCAT', -- (GMT+04:00) Abu Dhabi, Muscat > ### 'GMTPLUS0400BAKU', -- (GMT+04:00) Baku > ### 'GMTPLUS0400CAUCASUSSTANDARDTIME', -- (GMT+04:00) Caucasus Standard Time > ### 'GMTPLUS0400CAUCASUSSTANDARDTIME', -- (GMT+04:00) Caucasus Standard Time > ### 'GMTPLUS0400YEREVAN', -- (GMT+04:00) Yerevan > ### 'GMTPLUS0430KABUL', -- (GMT+04:30) Kabul > ### 'GMTPLUS0500EKATERINBURG', -- (GMT+05:00) Ekaterinburg > ### 'GMTPLUS0500ISLAMABAD_KARACHI', -- (GMT+05:00) Islamabad, Karachi > ### 'GMTPLUS0500ISLAMABAD_KARACHI_TASHKENT', -- (GMT+05:00) Tashkent > ### 'GMTPLUS0530CHENNAI_KOLKATA_MUMBAI', -- (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi > ### 'GMTPLUS0530SRIJAYAWARDENEPURA', -- (GMT+05:30) Sri Jayawardenepura > ### 'GMTPLUS0545KATHMANDU', -- (GMT+05:45) Kathmandu > ### 'GMTPLUS0600ALMATY_NOVOSIBIRSK', -- (GMT+06:00) Almaty, Novosibirsk > ### 'GMTPLUS0600ASTANA_DHAKA', -- (GMT+06:00) Astana, Dhaka > ### 'GMTPLUS0600DHAKA', -- (GMT+06:00) Dhaka > ### 'GMTPLUS0630_YANGON', -- (GMT+06:30) Yangon (Rangoon) > ### 'GMTPLUS0700_BANGKOK_HANOI_JAKARTA', -- (GMT+07:00) Bangkok, Hanoi, Jakarta > ### 'GMTPLUS0700KRASNOYARSK', -- (GMT+07:00) Krasnoyarsk > ### 'GMTPLUS0800BEIJING_CHONGQING_HONGKONG', -- (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi > ### 'GMTPLUS0800IRKUTSK_ULAANBATAAR', -- (GMT+08:00) Irkutsk, Ulaan Bataar > ### 'GMTPLUS0800_ULAANBAATAR', -- (GMT+08:00) Ulaanbaatar > ### 'GMTPLUS0800KUALALUMPUR_SINGAPORE', -- (GMT+08:00) Kuala Lumpur, Singapore > ### 'GMTPLUS0800PERTH', -- (GMT+08:00) Perth > ### 'GMTPLUS0800TAIPEI', -- (GMT+08:00) Taipei > ### 'GMTPLUS0900OSAKA_SAPPORO_TOKYO', -- (GMT+09:00) Osaka, Sapporo, Tokyo > ### 'GMTPLUS0900SEOUL', -- (GMT+09:00) Seoul > ### 'GMTPLUS0900YAKUTSK', -- (GMT+09:00) Yakutsk > ### 'GMTPLUS0930ADELAIDE', -- (GMT+09:30) Adelaide > ### 'GMTPLUS0930DARWIN', -- (GMT+09:30) Darwin > ### 'GMTPLUS1000BRISBANE', -- (GMT+10:00) Brisbane > ### 'GMTPLUS1000CANBERRA_MELBOURNE_SYDNEY', -- (GMT+10:00) Canberra, Melbourne, Sydney > ### 'GMTPLUS1000GUAM_PORTMORESBY', -- (GMT+10:00) Guam, Port Moresby > ### 'GMTPLUS1000HOBART', -- (GMT+10:00) Hobart > ### 'GMTPLUS1000VLADIVOSTOK', -- (GMT+10:00) Vladivostok > ### 'GMTPLUS0600MAGADAN', -- (GMT+12:00) Magadan > ### 'GMTPLUS1100MAGADAN_SOLOMONIS', -- (GMT+11:00) Magadan, Solomon Is., New Caledonia > ### 'GMTPLUS1200AUCKLAND_WELLINGTON', -- (GMT+12:00) Auckland, Wellington > ### 'GMTPLUS1200FIJI_KAMCHATKA_MARSHALLIS', -- (GMT+12:00) Fiji, Kamchatka, Marshall Is. > ### 'GMTPLUS1300NUKU_ALOFA' -- (GMT+13:00) Nuku'alofa > ### ) NOT NULL DEFAULT 'GMT_COORDINATEDUNIVERSALTIME', > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_users` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_users` ( > ### `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, > ### `role` enum('master','admin','member', 'author','designer','developer','affiliate') NOT NULL DEFAULT 'member', > ### `prefix` varchar(40) NULL, > ### `firstName` varchar(40) NOT NULL, > ### `middleName` varchar(40) NULL, > ### `maiden` VARCHAR(40) NULL, > ### `lastName` varchar(80) NOT NULL, > ### `suffix` varchar(40) NULL, > ### `username` varchar(30) NOT NULL, > ### `pass` varchar(100) NOT NULL, > ### `securityQuestion1` TINYTEXT NULL, > ### `securityQuestion2` TINYTEXT NULL, > ### `securityQuestion3` TINYTEXT NULL, > ### `dateRegistered` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `lastLoginDate` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `lastLoginIp` VARCHAR(39) NOT NULL, > ### `dateModified` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `releaseLevel` ENUM('alpha','beta','standard') DEFAULT 'standard', > ### `dateExpires` date DEFAULT NULL, > ### `birthdate` DATE NULL, > ### `sex` ENUM('male','female') NULL, > ### `primaryEmail` VARCHAR(80) NOT NULL, > ### `additionalEmails` TINYTEXT NULL, -- stored as serialized array for multiple emails > ### `phone` TINYTEXT NULL, -- stored as serialized array for multiple phones > ### `address` TEXT NULL, -- stored as serialized array for multiple addresses > ### `profilePictureImg` VARCHAR(2056) NOT NULL DEFAULT 'default-profile-picture.jpg', > ### `spreadImg` TEXT NOT NULL, -- stored as serialized array for multiple spread images > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `username` (`username`), > ### UNIQUE KEY `primaryEmail` (`primaryEmail`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1000000000;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_login_failed_attempts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_login_failed_attempts` ( > ### `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, > ### `username` VARCHAR( 2056 ) NULL, > ### `email` VARCHAR( 2056 ) NULL, > ### `pass` VARCHAR(2056) NOT NULL, > ### `datetimeFailed` TIMESTAMP NOT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_carts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_carts` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other') NOT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_categories` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_categories` ( > ### `id` tinyint(5) unsigned NOT NULL AUTO_INCREMENT, > ### `category` varchar(40) NOT NULL, > ### `description` tinytext, > ### `image` varchar(45) DEFAULT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_customers` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_customers` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `email` varchar(80) NOT NULL, > ### `firstName` varchar(20) NOT NULL, > ### `lastName` varchar(40) NOT NULL, > ### `address1` varchar(80) NOT NULL, > ### `address2` varchar(80) DEFAULT NULL, > ### `city` varchar(60) NOT NULL, > ### `state` char(2) NOT NULL, > ### `zip` mediumint(5) unsigned zerofill NOT NULL, > ### `phone` int(10) NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `email` (`email`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_orders` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_orders` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `customerId` int(10) unsigned NOT NULL, > ### `total` decimal(7,2) unsigned DEFAULT NULL, > ### `shipping` decimal(5,2) unsigned NOT NULL, > ### `ccNumber` mediumint(4) unsigned NOT NULL, > ### `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `customer_id` (`customerId`), > ### KEY `order_date` (`orderDate`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_order_contents` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_order_contents` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `pricePer` decimal(5,2) unsigned NOT NULL, > ### `shipDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `ship_date` (`shipDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### 160 > ### 161 > ### 162 > ### 163 > ### 164 > ### 165 > ### 166 > ### 167 > ### 168 > ### 169 > ### 170 > ### 171 > ### 172 > ### 173 > ### 174 > ### 175 > ### 176 > ### 177 > ### 178 > ### 179 > ### 180 > ### 181 > ### 182 > ### 183 > ### 184 > ### 185 > ### 186 > ### 187 > ### 188 > ### 189 > ### 190 > ### 191 > ### 192 > ### 193 > ### 194 > ### 195 > ### 196 > ### 197 > ### 198 > ### 199 > ### 200 > ### 201 > ### 202 > ### 203 > ### 204 > ### 205 > ### 206 > ### 207 > ### 208 > ### 209 > ### 210 > ### 211 > ### 212 > ### 213 > ### 214 > ### 215 > ### 216 > ### 217 > ### 218 > ### 219 > ### 220 > ### 221 > ### 222 > ### 223 > ### 224 > ### 225 > ### 226 > ### 227 > ### 228 > ### 229 > ### 230 > ### 231 > ### 232 > ### 233 > ### 234 > ### 235 > ### 236 > ### 237 > ### 238 > ### 239 > ### 240 > ### 241 > ### 242 > ### 243 > ### 244 > ### 245 > ### 246 > ### 247 > ### 248 > ### 249 > ### 250 > ### 251 > ### 252 > ### 253 > ### 254 > ### 255 > ### 256 > ### 257 > ### 258 > ### 259 > ### 260 > ### 261 > ### 262 > ### 263 > ### 264 > ### 265 > ### 266 > ### 267 > ### 268 > ### 269 > ### 270 > ### 271 > ### 272 > ### 273 > ### 274 > ### 275 > ### 276 > ### 277 > ### 278 > ### 279 > ### 280 > ### 281 > ### 282 > ### 283 > ### 284 > ### 285 > ### 286 > ### 287 > ### 288 > ### 289 > ### 290 > ### 291 > ### 292 > ### 293 > ### 294 > ### 295 > ### 296 > ### 297 > ### 298 > ### 299 > ### 300 > ### 301 > ### 302 > ### 303 > ### 304 > ### 305 > ### 306 > ### 307 > ### 308 > ### 309 > ### 310 > ### 311 > ### 312 > ### 313 > ### 314 > ### 315 > ### 316 > ### 317 > ### 318 > ### 319 > ### 320 > ### 321 > ### 322 > ### 323 > ### 324 > ### 325 > ### 326 > ### 327 > ### 328 > ### 329 > ### 330 > ### 331 > ### 332 > ### 333 > ### 334 > ### 335 > ### 336 > ### 337 > ### 338 > ### 339 > ### 340 > ### 341 > ### 342 > ### 343 > ### 344 > ### 345 > ### 346 > ### 347 > ### 348 > ### 349 > ### 350 > ### 351 > ### 352 > ### 353 > ### 354 > ### 355 > ### 356 > ### 357 > ### 358 > ### 359 > ### 360 > ### 361 > ### 362 > ### 363 > ### 364 > ### 365 > ### 366 > ### 367 > ### 368 > ### 369 > ### 370 > ### 371 > ### 372 > ### 373 > ### 374 > ### 375 > ### 376 > ### 377 > ### 378 > ### 379 > ### 380 > ### 381 > ### 382 > ### 383 > ### 384 > ### 385 > ### 386 > ### 387 > ### 388 > ### 389 > ### 390 > ### 391 > ### 392 > ### 393 > ### 394 > ### 395 > ### 396 > ### 397 > ### 398 > ### 399 > ### 400 > ### 401 > ### 402 > ### 403 > ### 404 > ### 405 > ### 406 > ### 407 > ### 408 > ### 409 > ### 410 > ### 411 > ### 412 > ### 413 > ### 414 > ### 415 > ### 416 > ### 417 > ### 418 > ### 419 > ### 420 > ### 421 > ### 422 > ### 423 > ### 424 > ### 425 > ### 426 > ### 427 > ### 428 > ### 429 > ### 430 > ### 431 > ### 432 > ### 433 > ### 434 > ### 435 > ### 436 > ### 437 > ### 438 > ### 439 > ### 440 > ### 441 > ### 442 > ### 443 > ### 444 > ### 445 > ### 446 > ### 447 > ### 448 > ### 449 > ### 450 > ### 451 > ### 452 > ### 453 > ### 454 > ### 455 > ### 456 > ### 457 > ### 458 > ### 459 > ### 460 > ### 461 > ### 462 > ### 463 > ### 464 > ### 465 > ### 466 > ### 467 > ### 468 > ### 469 > ### 470 > ### 471 > ### 472 > ### 473 > ### 474 > ### 475 > ### 476 > ### 477 > ### 478 > ### 479 > ### 480 > ### 481 > ### 482 > ### 483 > ### 484 > ### 485 > ### 486 > ### 487 > ### 488 > ### 489 > ### 490 > ### 491 > ### 492 > ### 493 > ### 494 > ### 495 > ### 496 > ### 497 > ### 498 > ### 499 > ### 500 > ### 501 > ### 502 > ### 503 > ### 504 > ### 505 > ### 506 > ### 507 > ### 508 > ### 509 > ### 510 > ### 511 > ### 512 > ### 513 > ### 514 > ### 515 > ### 516 > ### 517 > ### 518 > ### 519 > ### 520 > ### 521 > ### 522 > ### 523 > ### 524 > ### 525 > ### 526 > ### 527 > ### 528 > ### 529 > ### 530 > ### 531 > ### 532 > ### 533 > ### 534 > ### 535 > ### 536 > ### 537 > ### 538 > ### 539 > ### 540 > ### 541 > ### 542 > ### 543 > ### 544 > ### 545 > ### 546 > ### 547 > ### 548 > ### 549 > ### 550 > ### 551 > ### 552 > ### 553 > ### 554 > ### 555 > ### 556 > ### 557 > ### 558 > ### 559 > ### 560 > ### 561 > ### 562 > ### 563 > ### 564 > ### 565 > ### 566 > ### 567 > ### 568 > ### 569 > ### 570 > ### 571 > ### 572 > ### 573 > ### 574 > ### 575 > ### 576 > ### 577 > ### 578 > ### 579 > ### 580 > ### 581 > ### 582 > ### 583 > ### 584 > ### 585 > ### 586 > ### 587 > ### 588 > ### 589 > ### 590 > ### 591 > ### 592 > ### 593 > ### 594 > ### 595 > ### 596 > ### 597 > ### 598 > ### 599 > ### 600 > ### 601 > ### 602 > ### 603 > ### 604 > ### 605 > ### 606 > ### 607 > ### 608 > ### 609 > ### 610 > ### 611 > ### 612 > ### 613 > ### 614 > ### 615 > ### 616 > ### 617 > ### 618 > ### 619 > ### 620 > ### 621 > ### 622 > ### 623 > ### 624 > ### 625 > ### 626 > ### 627 > ### 628 > ### 629 > ### 630 > ### 631 > ### 632 > ### 633 > ### 634 > ### 635 > ### 636 > ### 637 > ### 638 > ### -- phpMyAdmin SQL Dump > ### -- version 3.5.2.2 > ### -- http://www.phpmyadmin.net
 > ### -- > ### -- Host: 127.0.0.1 > ### -- Generation Time: Aug 16, 2013 at 09:59 PM > ### -- Server version: 5.5.27 > ### -- PHP Version: 5.4.7

> ### SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; > ### SET time_zone = "+00:00";

> ### /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */; > ### /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */; > ### /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */; > ### /*!40101 SET NAMES utf8 */;

> ### -- > ### -- Database: `shadow` > ### --

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_admin` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_admin` ( > ### `id` bigint(20) NOT NULL AUTO_INCREMENT, > ### `adminEmail` varchar(80) NOT NULL, > ### `adminPhone` smallint(15) DEFAULT NULL, > ### `adminPhoneExt` smallint(10) DEFAULT NULL, > ### `siteName` varchar(100) NOT NULL, > ### `siteTagline` varchar(100) NOT NULL, > ### `siteSummary` text, > ### `currentApp` varchar(150) NOT NULL DEFAULT 'ninjablack1', > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_carts` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_carts` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other') NOT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_categories` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_categories` ( > ### `id` tinyint(5) unsigned NOT NULL AUTO_INCREMENT, > ### `category` varchar(40) NOT NULL, > ### `description` tinytext, > ### `image` varchar(45) DEFAULT NULL, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

> ### -- > ### -- Dumping data for table `shdw_categories` > ### --

> ### INSERT INTO `shdw_categories` (`id`, `category`, `description`, `image`) VALUES > ### (1, 'Allergy', NULL, NULL), > ### (2, 'Cancer Support', NULL, NULL), > ### (3, 'Children', NULL, NULL), > ### (4, 'Circulation', NULL, NULL), > ### (5, 'Cleansing & Detox', NULL, NULL), > ### (6, 'Digestion', NULL, NULL), > ### (7, 'Eyes', NULL, NULL), > ### (8, 'Immune', NULL, NULL), > ### (9, 'Men/Women', NULL, NULL), > ### (10, 'Oral Health', NULL, NULL), > ### (11, 'Pain', NULL, NULL), > ### (12, 'Skin', NULL, NULL), > ### (13, 'Sleep', NULL, NULL), > ### (14, 'Sports', NULL, NULL), > ### (15, 'Sleep', NULL, NULL), > ### (16, 'Urinary Track', NULL, NULL), > ### (17, 'Weight', NULL, NULL), > ### (18, 'Mind & Body', NULL, NULL);

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_customers` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_customers` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `email` varchar(80) NOT NULL, > ### `firstName` varchar(20) NOT NULL, > ### `lastName` varchar(40) NOT NULL, > ### `address1` varchar(80) NOT NULL, > ### `address2` varchar(80) DEFAULT NULL, > ### `city` varchar(60) NOT NULL, > ### `state` char(2) NOT NULL, > ### `zip` mediumint(5) unsigned zerofill NOT NULL, > ### `phone` int(10) NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `email` (`email`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_orders` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_orders` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `customerId` int(10) unsigned NOT NULL, > ### `total` decimal(7,2) unsigned DEFAULT NULL, > ### `shipping` decimal(5,2) unsigned NOT NULL, > ### `ccNumber` mediumint(4) unsigned NOT NULL, > ### `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `customer_id` (`customerId`), > ### KEY `order_date` (`orderDate`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_order_contents` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_order_contents` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `pricePer` decimal(5,2) unsigned NOT NULL, > ### `shipDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `ship_date` (`shipDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_pages` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_pages` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `parentId` int(10) unsigned DEFAULT NULL, > ### `creatorId` int(10) unsigned NOT NULL, > ### `title` varchar(100) NOT NULL, > ### `content` text NOT NULL, > ### `slug` varchar(100) NOT NULL, > ### `dateUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, > ### `dateAdded` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### `viewFile` text, > ### PRIMARY KEY (`id`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=73 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_products` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_products` ( > ### `id` int(11) unsigned NOT NULL AUTO_INCREMENT, > ### `name` tinytext NOT NULL, > ### `manufacturer` VARCHAR(100), > ### `seller` text NULL, > ### `category` varchar(50) NOT NULL, > ### `description` tinytext NOT NULL, > ### `features` text NULL, > ### `ingredients` text NULL, > ### `availability` enum('Available for sale','Hidden but available for sale','Coming soon','Disabled') NOT NULL DEFAULT 'Available for sale', > ### `weight` decimal(5,2) unsigned NOT NULL, > ### `image` varchar(2056) NOT NULL, > ### `price` decimal(5,2) unsigned NOT NULL, > ### `salePrice` decimal(5,2) unsigned, > ### `specialOffers` text NULL, > ### `SKU` VARCHAR(10) DEFAULT NULL, > ### `UPC` int(10) unsigned DEFAULT NULL, > ### `stock` mediumint(8) unsigned NOT NULL DEFAULT '100', > ### `shippingDetails` text NULL, > ### `ratingReview` text NULL, > ### `slug` varchar(2056) NOT NULL, > ### `externalLink` varchar(2056) NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `SKU` (`SKU`), > ### UNIQUE KEY `UPC` (`UPC`) > ### ) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_sales` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_sales` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `productType` VARCHAR(100) DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `price` decimal(5,2) unsigned NOT NULL, > ### `startDate` date NOT NULL, > ### `endDate` date DEFAULT NULL, > ### PRIMARY KEY (`id`), > ### KEY `start_date` (`startDate`), > ### KEY `product_type` (`productType`,`productId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_sizes` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_sizes` ( > ### `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT, > ### `size` varchar(40) NOT NULL, > ### PRIMARY KEY (`id`), > ### UNIQUE KEY `size` (`size`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_transactions` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_transactions` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `orderId` int(10) unsigned NOT NULL, > ### `type` varchar(18) NOT NULL, > ### `amount` decimal(7,2) NOT NULL, > ### `responseCode` tinyint(1) unsigned NOT NULL, > ### `responseReason` tinytext, > ### `transactionId` bigint(20) unsigned NOT NULL, > ### `response` text NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### PRIMARY KEY (`id`), > ### KEY `order_id` (`orderId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- Table structure for table `shdw_wish_lists` > ### --

> ### CREATE TABLE IF NOT EXISTS `shdw_wish_lists` ( > ### `id` int(10) unsigned NOT NULL AUTO_INCREMENT, > ### `quantity` tinyint(3) unsigned NOT NULL, > ### `userSessionId` char(32) NOT NULL, > ### `productType` enum('coffee','other','sale') DEFAULT NULL, > ### `productId` mediumint(8) unsigned NOT NULL, > ### `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, > ### `dateModified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00', > ### PRIMARY KEY (`id`), > ### KEY `product_type` (`productType`,`productId`), > ### KEY `user_session_id` (`userSessionId`) > ### ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

> ### -- --------------------------------------------------------

> ### -- > ### -- STORED PROCEDURES > ### --****_``_**** > ### *** ![1000086060](https://github.com/user-attachments/assets/b41fa5f1-1108-464b-8a1d-e114d65c7603
) ![1000075416](https://github.com/user-attachments/assets/eb040fd8-638e-44bf-8dc3-c23ec708020c
) ![1000075064]()https://github.com/user-attachments/assets/c06b9dd3-d33e-4968-8de3-125cc43d1e32


Edit message
Write a small message here explaining this change. (Optional)
Footer
© 2025 GitHub, Inc.
This branch has conflicts that must be resolved
Use the command line to resolve conflicts before continuing.
• Dockerfile
• config/kubernetes/production/deployments/webapp.yaml
• content/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot.md
• content/copilot/about-github-copilot/subscription-plans-for-github-copilot.md
• content/copilot/about-github-copilot/what-is-github-copilot.md
• content/copilot/customizing-copilot/index.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/about-individual-copilot-plans-and-benefits.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-started-with-a-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/disabling-github-copilot-free.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/extending-the-capabilities-of-github-copilot-in-your-personal-account.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/viewing-and-changing-your-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization.md
• content/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests.md
• content/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot.md
• content/copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot.md
• content/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself.md
• content/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat.md
•  
• § Etemal Flame - Ann ธิติมา
content/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task.md
• content/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks.md
Resolve conflicts
Enable auto-merge (rebase)
 

Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
1. Editing _Footer · tr4200812/- WikiEdit mode: 
This branch has conflicts that must be resolved
Use the command line to resolve conflicts before continuing.
• Dockerfile
• config/kubernetes/production/deployments/webapp.yaml
• content/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot.md
• content/copilot/about-github-copilot/subscription-plans-for-github-copilot.md
• content/copilot/about-github-copilot/what-is-github-copilot.md
• content/copilot/customizing-copilot/index.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/about-individual-copilot-plans-and-benefits.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-free-access-to-copilot-pro-as-a-student-teacher-or-maintainer.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/getting-started-with-copilot-on-your-personal-account/getting-started-with-a-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/disabling-github-copilot-free.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/extending-the-capabilities-of-github-copilot-in-your-personal-account.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber.md
• content/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/viewing-and-changing-your-copilot-plan.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/about-billing-for-github-copilot-in-your-enterprise.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization.md
• content/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization.md
• content/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests.md
• content/copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot.md
• content/copilot/rolling-out-github-copilot-at-scale/managing-your-companys-spending-on-github-copilot.md
• content/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself.md
• content/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat.md
• content/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task.md
• content/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks.md
Resolve conflicts
Enable auto-merge (rebase)


Textile
Phrase Modifiers
Block Modifiers
Links / Images
Links
Images
To display an image, simply wrap the image’s URL in ! (exclamation points). If you want to link the image to a URL, you can blend the image and link syntax: place your image URL in the exclamation points and suffix that with a colon and your URL. For example, an image at http://myurl/image.png that should link to http://myurl/ should be written as !http://myurl/image.png!:http://myurl/.

`*
*
```github
docs

Code
Issues
238
Pull requests
143
Actions
Projects
3
Security
Insights
View tr4200812’s profile
Create new issue
Improve existing content
·
Choose a different template
Add a title
*
?
HUBBERS!! This is the github/docs open source repo. You may want to open an issue in the internal-only github/docs-content repo instead.

Before you file an issue read the Contributing guide.
Check to make sure someone hasn’t already opened a similar issue.

Code of Conduct
This project has a Code of Conduct that all participants are expected to understand and follow.

I have read and agree to the GitHub Docs project’s Code of Conduct
*
What article on docs.github.com is affected?
*
Please link to the article you’d like to see updated.

Markdown Editor
Markdown input: preview mode selected.
Write
PreviewSkip to content
Navigation Menu
github
docs

Code
Issues
241
Pull requests
143
Actions
Projects
3
Security
Insights
- #37672
Open
@tr4200812
Description
tr4200812
opened 2 minutes ago
Body input
Markdown input: edit mode selected.
Writ|||------------------------------------------------------------------------------------------------------------------------------------------------------

# GitHub Docs <!-- omit in toc -->
[![Build GitHub Docs On Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new/?repo=github)

This repository contains the documentation website code and Markdown source files for [docs.github.com](https://docs.github.com).

GitHub's Docs team works on pre-production content in a private repo that regularly syncs with this public repo.

Use the table of contents icon <img alt="Table of contents icon" src="./contributing/images/table-of-contents.png" width="25" height="25" /> on the top right corner of this document to navigate to a specific section quickly.

## Contributing

We accept different types of contributions, including some that don't require you to write a single line of code. For detailed instructions on how to get started with our project, see [About contributing to GitHub Docs](https://docs.github.com/en/contributing/collaborating-on-github-docs/about-contributing-to-github-docs).

### Ways to contribute

On the GitHub Docs site, you can contribute by clicking the **Make a contribution** button at the bottom of the page to open a pull request for quick fixes like typos, updates, or link fixes.

You can also contribute by creating a local environment or opening a Codespace. For more information, see [Setting up your environment to work on GitHub Docs](https://docs.github.com/en/contributing/setting-up-your-environment-to-work-on-github-docs).

<img alt="Contribution call-to-action" src="./contributing/images/contribution_cta.png" width="400">

For more complex contributions, please open an issue using the most appropriate [issue template](https://github.com/github/docs/issues/new/choose) to describe the changes you'd like to see.

If you're looking for a way to contribute, you can scan through our [help wanted board](https://github.com/github/docs/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) to find open issues already approved for work.

### And that's it!

If you're having trouble with your GitHub account, contact [Support](https://support.github.com).

That's how you can easily become a member of the GitHub Docs community. :sparkles:

## READMEs

In addition to the README "Big news: Sonar has entered a definitive agreement to acquire Tidelift! →
Skip to main content

SUPPORT

1 TR4200812TR4200812 

Tidelift My activities
Request #11414

<ay><Subject>

Tr4200812
3 minutes ago
ami-095a30de50879de25Change

"

Tidelift security policy

Tidelift acts as the security contact for many open source projects. If you were referred here by a project to report a security issue… you've come to the right place!

 

We would also appreciate reports of security issues in the Tidelift service itself.

 

Vulnerability Response

Your report will be acknowledged within 2 business days.

 

Any information shared with the Tidelift security team stays within Tidelift and will not be disseminated except as required to get the issue fixed or to coordinate a vendor response.

 

As a security issue moves through our process we will keep the reporter updated.

 

Our goal is to disclose bugs as soon as possible once a user mitigation is available. We will set a disclosure date once the bug is well-understood (in consultation with the bug reporter and the relevant project maintainers).

 

Report a Vulnerability

To make a report, please email our security team at security@tidelift.com.

 

You may optionally encrypt your report with GPG, using our key 8B1A1BB3EBA92594

 

Here's that key inline:

 

-----BEGIN PGP PUBLIC KEY BLOCK-----

 

mQINBFv+kvkBEADAFo9zo0NRL03Bd3a8uagDmwRxGec2tk4OBV6Vt78ei0w9N+vK

A8VVUimF05DYApRWK8PCPjE3Ca7cwvyrizClANi9XyiQ1FpiDYAsUuay8ak5oC9Z

wCr2e7CrwZRInDimPx4Wb5P+//awIcr4756xRnlV64zGbv0RWfzSCXAGCQ+SrcIK

FRKIxS4y3hepk33PAgTlMHK/2nuYgyOxWxknPbfCFIv+E/kE6tYF7zyuj9fxw496

92kCZGWABffv8G1nFGcd6cw3ZDGGz8dQ9ss5CZLLXdhbtbpLTJ5a3NPKKoB/CjG6

0uYZhtJtx+GJ1d88+SbuDZaS4tzshjd718neA9eFsYQk+sbFxwBGSTuc9Rnd0j4X

2IJQ1bBC4+Med9cxJeRo1Xij0FPoJ6T2RmDB7Yq5I/aW4iYnPE2L/4rWfyS6QsA/

SvcszwaoyEIax3kN3D8vw7eM1BIGxy7fL0NhZUrRcfrOcMQaZG1DSU+AtfST8Xre

hrCxFt4FzCttu8v5yV40krPRCOmEB8sfsc3gNdIskv75AnPPNLKE26rLO4AhtDT2

dsyCDAMtJj/VgqaQr1Lj18kbmB19fLlwF9SxmGVJxFSCzUKmsNydssgX+8lOuoHK

vlN1ONLQE5gdr6O9OOPb7H4mfFIQrKJhGaLkaaXPFGZuZUQoR3lGPzNwbQARAQAB

tClUaWRlbGlmdCBTZWN1cml0eSA8c2VjdXJpdHlAdGlkZWxpZnQuY29tPokCTgQT

AQgAOBYhBJ7REX+eX7sB41Oa/YsaG7PrqSWUBQJb/pL5AhsDBQsJCAcCBhUKCQgL

AgQWAgMBAh4BAheAAAoJEIsaG7PrqSWUSk0QALYXHxqw/thSFz/uMOHneA25QGK7

QHLalkBEHM17DE+xK5mlYva3WW8COlvSJVWa22AdXGivfeEymeooBLm6OER91D2t

fYrO+/ktZKlsQOLzIlLUYhAC/GvUJ4odkb+cJO3Z89vlUU+jt4UZ8kaksKoj+cMr

bY9wPPhPbq3+rDhmhsAKe5OiAiP+EBd5SMBc+67g6pwXdcGU33vuhfj5Xp3HsWhc

fhjJpMz/5PXwBDLyh1w+4n0MG/rj8m2vGPWd302lEESwvAjIJ2e0Gu/vYjwa6DLy

bKTMsnNt3CaEaRGRzf7lvF3jC1rWHllFNyHiygPF5oGrdMB7RLz3IAoEN7pLH2+H

hGws8qftiagse46XIByBkkaocNS4HezRVOrASudilwfJHRvvglBGWBdf80DvuZMR

j+xn5i/tAe4fNW3TQkQ57JtCbCPC5VLvMpauG1n9+Fo3QzmXuh1Qp3tVLDzJ/1AC

aF0Uf3VHT/v7HJ3+YPzfVZZ1GZsXlcGDSO8hYqrUPMhC1Fv66paq57HS3YnN0K8d

NWBfQk8A56LooaFAyI2srAPQonpLEMum+i1p97PjS9fBsz7x9tclb3KYyS+FADY7

O4TZakyynW59Zbi3WJ8SQT5KotEW7YSg3NO8yVCV0io2m07y1GqHwHEPYCEvgT3S

5GOmOOmTwTpVZGyQuQINBFv+kvkBEACnaM3GsXzecBFBL3lfVAyx26PY2ySkFq18

KhGawYM9RqNtomyz+dCx3EyH556nJxcOlRh7AAJEI8f+pRUy54+5SDeVe0fBrWoC

TzbtrfPuCiN5Z2m5P+g7NCec8hYJpWB+f8l4rmg4Lr9/VYeg5ChUiKCCEMMMpJL6

SgUl1Da2/77eyQOKiPk0ioe8yDNBaU17zSxawmHtDH0zBk8vmpcP8jDYa1fsn9yP

44RC8G/rKHubevRuiIMuYNSuOAM/sloV8Nhh//umQLG4OXxlen+b15tVRByfVwfI

ZPIPK1wAjCGWtQnHbNyriM0ci5dNP5XWcwOkNUFQRskcB+pDmy6llld695CxJ+HT

3b8SR1dMWzdb1B2XaNaAp+yUug9Jnqyqnd3is2NIWNaHmuhoTt1YEzj3wjCQqOsv

6SkGSDQYLR6P+OcC/lHtVKCPfo4e9/ktulU3bwKvRU1lz1uJluGOM3wn1DXdQ7aL

IbmRN2hBlbcIRQkA5sR0och1aQ6bajAU24CmWSvQUCqD4eLcD0gIsTSekHke2602

jopORV8mGZYnoDW23mEKlKlK5WccZSY1R/qpP4uAMh/OcXXsVLGG+wmvNG9W0V6J

VZq30SXhp6scZwbwDYi7RPip84QFF/c8bSv6Ddapl97nk+MyhKqNhPp6yvqXgvGN

LbbzvUZYeQARAQABiQI1BBgBCAAgFiEEntERf55fuwHjU5r9ixobs+upJZQFAlv+

kvkCGwwACgkQixobs+upJZTcmg/4gxdokX9jWlnUI1IBzBe+3Lra9xz9Dg3X3Vpm

yMJ+RCTUOYbMCBsXEZEC7Jbji5jmFuwcKcjov0LLXTsEMoCaezrMMR8HEaYKwBFp

pBoiooCsVtXuFHxGgiswvas8Tf4zfHKReA958BCmBoa0MXysFzsORrcbM6v6fcdA

gBClxvxzCebHNlmJAUf4w8bb/s5/NmoPT5mWhasS2EF7G8GyTJoxLc2nOXfvjDG4

HZehuEavxaVp5B1RbzwQyGm/FiI13G7OAYHZNMCwkq5T4rTSMRaf5D29P6CoVC48

bXWgkXrehEr3iB3r5wQxBVQ6kwiuuCbIA+hbJ+Sj0zo5t426s8hCnEyo2NgHm/ot

JAle6g6iTbmU1x7xs6+VHklG9MULH3JWkErVI3VJbjXw4R0Ikj3AuFr66h283tKq

ezl4/3JRa/5npVtXZbskGqoSkoP+VR+pGdkiXPOk0RD1RiwIpl7zNgOLkLVBElaf

lPdoLPf4NKlVoQ0eyU2pinNSXXLKLngrjeHZ8U67a4mCRmCn3qOaZ4GEW83hYxzO

myw7ZxuCoX4jplxHsngOcwDdaQC27IERixXwsoqjmYzTwAuEbwVHlh+OsvfvwkPH

D5lIM0xv0XFARFBSJlIPdIqiLwvy8cuGYHzItmGEG4kKHhgm1w3TehbzKm5bAWdw

QOc3YA==

=Uo3n

-----END PGP PUBLIC KEY BLOCK-----"

 


CC

No file chosenAdd filemaincontent://media/external/downloads/1000075067 or drop files here
Tr4200812 submitted this request

Status
Open
Priority
—
Topic
—thx for you

© Tidelift

Theme by Lotus Themes

Twitter LinkedIn
Return to top"
 reading right now, this repo includes other READMEs that describe the purpose of each subdirectory in more detail:

- [content/README.md](content/README.md)
- [content/graphql/README.md](content/graphql/README.md)
- [content/rest/README.md](content/rest/README.md)
- [contributing/README.md](contributing/README.md)
- [data/README.md](data/README.md)
- [data/reusables/README.md](data/reusables/README.md)
- [data/variables/README.md](data/variables/README.md)
- [src/README.md](src/README.md)

## License

The GitHub product documentation in the assets, content, and data folders are licensed under a [CC-BY license](LICENSE).

All other code in this repository is licensed under the [MIT license](LICENSE-CODE).

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).

## Thanks :purple_heart:

Thanks for all your contributions and efforts towards improving the GitHub documentation. We thank you for being part of our :sparkles: community :sparkles:!
Restrict who can dismiss pull request reviews
Specify people, teams, or apps allowed to dismiss pull request reviews.
European Div/กฎหมายของสหภาพยุโรป - EUR-Lexhttps://youtube.com/@bigeyebypunch8002?si=NDxDHCXTn20qT5qUbigeyebypunch8002?si=NDxDHCXTn20qT5qUcontent://media/external/downloads/1000075067¤||__Welcome* !['🪯##"      Edit mode:  Markdown Block Elements Span Elements Miscellaneous Paragraphs & Breaks Headers Blockquotes Lists Code Blocks Horizontal Rules To create a paragraph, simply create a block of text that is not separated by one or more blank lines. Blocks of text separated by one or more blank lines will be parsed as paragraphs.  If you want to create a line break, end a line with two or more spaces, then hit Return/Enter.   File fome tr4200812 [n00i1kat]  Attach files by dragging & dropping, selecting or pasting them. Edit message  "  // > ### -- phpMyAdmin SQL Dump > ### -- version 3.5.2.2 > ### -- http://www.phpmyadmin.net > ### -- > ### -- Host: 127.0.0.1 > ### -- Generation Time: Aug 16, 2025 at 11:03 PM > ### -- Server version: 5.5.27 > ### -- PHP Version: 5.4.7 ------------------------------------------------------------------------------------------------^ > ### SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO"; > ### SET time_zone = "+00:00"; ------------------------------------------------------------------](https://github.com/tr4200812/N00i1kat/blame/a41c7d51b07f4366143aa59a6180a6a900838850/.eslintrc.cjs=========) to the N00i1kat wiki! ***  ****|ORDEROFTHEGENERAL|COURT |
(Seventh Chamber)
25 February 2025 (*)
( Action for annulment – <Energy> – Regulation (EU) 2023/2405 – Obligation placed on aviation fuel suppliers to ensure that all aviation fuel made available to aircraft operators at each EU airport contains the minimum shares of sustainable aviation fuels – Lack of individual concern – Inadmissibility )
In Case T‑45/24,
ePURE, de Europese Producenten Unie van Hernieuwbare Ethanol, established in Etterbeek (Belgium),
Pannonia Bio Zrt., established in Budapest (Hungary),
represented by M.-S. Dibling and J. Pauwelyn, lawyers,
applicants,
v
European Parliament, represented by E. Ni Chaoimh and I. Terwinghe, acting as Agents,
and
Council of the European Union, represented by N. Rouam, R. Liudvinavičiūtė and D. Bringuier, acting as Agents,
defendants,
THE GENERAL COURT (Seventh Chamber),
composed of K. Kowalik-Bańczyk, President, E. Buttigieg (Rapporteur) and I. Dimitrakopoulos, Judges,
Registrar: V. Di Bucci,
having regard to the written part of the procedure, in particular:
–        the application lodged at the General Court Registry on 24 January 2024,
–        the plea of inadmissibility put forward by the Council by separate document lodged at the Court Registry on 10 April 2024,
–        the plea of inadmissibility put forward by the Parliament by separate document lodged at the Court Registry on 18 April 2024,
–        the applications to intervene lodged at the Court Registry by the European Commission on 29 April 2024 and by Renewable Fuels Association, Growth Energy, U. S. Grains Council and LanzaJet on 2 May 2024,
–        the applicants’ observations on the pleas of inadmissibility, lodged at the Court Registry on 31 May 2024,
–        the application for omission of certain information vis-à-vis the public made by the applicants by separate document on 31 May 2024 under Article 66a of the Rules of Procedure of the General Court,
makes the following
Order
1        By their action under Article 263 TFEU, the applicants, ePURE, de Europese Producenten Unie van Hernieuwbare Ethanol (‘ePURE’), and Pannonia Bio Zrt., seek annulment of Article 3(8)(c) and Article 4(1), (4) and (5) of, and Annex I to, Regulation (EU) 2023/2405 of the European Parliament and of the Council of 18 October 2023 on ensuring a level playing field for sustainable air transport (ReFuelEU Aviation) (OJ L 2023/2405; ‘the contested regulation’), inasmuch as they exclude biofuels produced from food and feed crops and from intermediate crops (together, ‘crop-based biofuels’) from the definition and/or minimum shares of sustainable aviation fuels and impose a minimum share for synthetic aviation fuels (‘the contested provisions’).
 Background to the dispute
 The applicants
2        ePURE is a non-profit organisation incorporated under the laws of Belgium which comprises 21 members. Of those members, 18 produce and supply renewable ethanol in the European Union. According to Article 3 of its articles of association, ePURE aims to promote a sustainable and competitive European industry producing ethanol from biomass (that is to say, from crops, waste and residues) and to promote the use of that product as a fuel as well as other uses of that product. All its producing members make renewable ethanol from crops. Some of its producing members also make ethanol from waste and residues, notably advanced renewable ethanol. The sustainable ethanol produced by ePURE’s members is mainly used as fuel.
3        Pannonia Bio is a company established in Hungary that is a producer and supplier in the European Union of renewable ethanol made from crops, waste and residues; it is not a member of ePURE.
 The EU regulatory framework on renewable energy
4        On 11 December 2018, the European Parliament and the Council of the European Union adopted Directive (EU) 2018/2001 on the promotion of the use of energy from renewable sources (OJ 2018 L 328, p. 82; ‘the RED’).
5        It is apparent in particular from Article 1 of the RED that that directive sets a binding EU target for the overall share of energy from renewable sources in the European Union’s gross final consumption of energy in 2030.
6        Under point 1 of the second paragraph of Article 2 of the RED, biofuels, bioliquids and biomass fuels are considered to be ‘renewable energy’.
7        Pursuant to Article 25(1) of the RED, in order to mainstream the use of renewable energy in the transport sector, each Member State of the European Union is to set an obligation on fuel suppliers to ensure that the share of renewable energy within the final consumption of energy in the transport sector is at least 14% by 2030.
 The contested regulation and the contested provisions
8        On 18 October 2023, the Parliament and the Council adopted the contested regulation.
9        Recital 13 of the contested regulation states, inter alia, that general rules on renewable energy for the transport sector established in the RED have not proven effective to operate a transition from fossil fuels to sustainable aviation fuels (SAF) in air transport.
10      Recital 23 of the contested regulation states that ‘feed and food crop-based fuels should not be promoted’ and that ‘this approach is in line Union policy … considering their lower environmental benefits, lower performance in terms of greenhouse gas emissions reduction potential and broader sustainability concerns’.
11      It is apparent from Article 1 of the contested regulation that the subject matter of that regulation is the establishment of harmonised rules on the uptake and supply of SAF, and from Article 2 of that regulation that the regulation applies to aircraft operators, to EU airports and their respective EU airport managing bodies, and to aviation fuel suppliers.
12      Article 3(7) of the contested regulation specifies that SAF include synthetic aviation fuels, aviation biofuels and recycled carbon aviation fuels.
13      Pursuant to Article 3(8)(c) of the contested regulation, the concept of ‘aviation biofuels’ includes aviation fuels which are ‘biofuels’, as defined in the RED, with the exception of biofuels produced from food and feed crops as defined in that directive, and which comply with the sustainability and lifecycle emissions saving criteria laid down in that directive and are certified in compliance with that directive.
14      Article 4(1) of the contested regulation introduces an obligation on aviation fuel suppliers to ensure that all aviation fuel made available to aircraft operators at each EU airport contains a minimum share of SAF, including a minimum share of synthetic aviation fuel in accordance with the values and dates of application set out in Annex I to that regulation.
15      Article 4(4) of the contested regulation limits the amount of aviation biofuels other than biofuels produced from the feedstock listed in Annex IX to the RED which may be taken into account for the purposes of meeting the minimum shares referred to in Article 4(1) and set out in Annex I to that regulation. The fuels in question must account for a maximum of 3% of aviation fuels supplied for the purpose of complying with those minimum shares.
16      Article 4(5) of the contested regulation provides that, subject to exceptions, SAF produced from ‘food and feed crops’, as defined in point 40 of the second paragraph of Article 2 of the RED, intermediate crops, palm fatty acid distillate and palm and soy-derived materials, as well as soap stock and its derivatives, are excluded from the calculation of the minimum shares referred to in Article 4(1) and set out in Annex I to that regulation.
17      Lastly, Annex I to the contested regulation, headed ‘Shares of SAF referred to in Article 4’, sets out, inter alia, the minimum shares that apply to synthetic fuel.
 Forms of order sought
18      The applicants claim, in essence, that the Court should:
–        annul the contested provisions;
–        order the Parliament and the Council to pay the costs.
19      The Council contends that the Court should:
–        dismiss the action as inadmissible;
–        order the applicants to pay the costs.
20      The Parliament contends that the Court should:
–        dismiss the action as inadmissible;
–        in the alternative, should the Court reject its plea of inadmissibility or reserve its decision on admissibility, give the defendants new time limits to submit their observations on the substance of the case, pursuant to Article 130(8) of the Rules of Procedure of the General Court;
–        in any event, order the applicants to pay the costs.
21      In their observations on the pleas of inadmissibility, the applicants claim that the Court should:
–        reject the pleas of inadmissibility and consider the case on its merits;
–        in the alternative, given that the direct and individual concern of the applicants is intertwined with factual and legal peculiarities and complexities that relate to the merits of the case, reserve its decision on admissibility until it rules on the substance of the case, in accordance with Article 130(7) of the Rules of Procedure.
 Law
 The pleas of inadmissibility
22      Pursuant to Article 130(1) and (7) of the Rules of Procedure, the Court may, if the defendant so requests, rule on the question of inadmissibility without considering the merits of the case. In the present case, the Court considers that it has sufficient information from the material in the case file and has decided to give a decision without taking further steps in the proceedings.
23      In support of their pleas of inadmissibility, the Council and the Parliament submit that the applicants do not have standing to bring proceedings under the fourth paragraph of Article 263 TFEU against the contested provisions. In their view, the applicants are indeed neither directly nor individually concerned by those provisions.
24      However, the applicants maintain that they are directly and individually concerned by the contested provisions.
25      Pursuant to the fourth paragraph of Article 263 TFEU, any natural or legal person may institute proceedings against an act addressed to that person or which is of direct and individual concern to that person, and against a regulatory act which is of direct concern to that person and does not entail implementing measures.
26      It should be noted at the outset that the applicants are not the addressees of the contested regulation for the purposes of the first situation referred to in the fourth paragraph of Article 263 TFEU.
27      Moreover, it is apparent from the contested regulation that it was adopted under the ordinary legislative procedure and, therefore, that it is not a regulatory act but a legislative act. It follows that the applicants do not have a right of action on the basis of the third situation referred to in the fourth paragraph of Article 263 TFEU either.
28      Accordingly, in order to establish their standing to bring proceedings, the applicants must demonstrate that they are covered by the second situation referred to in the fourth paragraph of Article 263 TFEU, that is to say that the contested provisions are of direct and individual concern to them.
29      In that regard, it must be borne in mind that the conditions of (i) direct concern and (ii) individual concern, laid down in the second limb of the fourth paragraph of Article 263 TFEU, are distinct and cumulative (see, to that effect, judgment of 3 October 2013, Inuit Tapiriit Kanatami and Others v Parliament and Council, C‑583/11 P, EU:C:2013:625, paragraphs 75 and 76 and the case-law cited).
30      In the circumstances of the present case, it is necessary to examine first whether the second condition, relating to whether the applicants are individually concerned, is satisfied.
 Whether Pannonia Bio is individually concerned
31      In the first place, the applicants submit that Pannonia Bio is individually concerned on the ground that it is part of a legally differentiated and closed group of operators which were identifiable at the time the contested regulation was adopted.
32      In that regard, the applicants claim that a group of persons may be individually concerned by a measure if it alters rights which those persons acquired prior to the adoption of that measure. Pannonia Bio is part of the closed group of operators composed of suppliers of renewable crop-based ethanol which were operating at the time the contested provisions were adopted and which, on the basis of the right conferred on them by the RED to supply that ethanol to all transport sectors and the legitimate expectations created by that directive, made considerable investments in the development and production of such ethanol. In addition, Pannonia Bio, as well as the members of ePURE, were ready and willing to invest in the conversion process called ‘alcohol to jet’ (‘ATJ’) in order to supply ATJ produced from crops to EU airports. The contested provisions do not allow other producers of renewable crop-based ethanol to join that group, with the result that it is closed. Indeed, there is no SAF market without regulatory intervention and no supplier of crop-based ethanol can enter it because of the prohibition imposed by the contested provisions on crop-based biofuels in the aviation sector.
33      In the second place, the applicants claim that the contested provisions specifically affect the rights and commercial interests of Pannonia Bio.
34      In that regard, the applicants note that, in judgments on State aid matters, the Court of Justice has recognised that the test of individual concern may be satisfied where the applicant adduces evidence to show that the measure at issue is liable to have a substantial adverse effect on its position on the market concerned and that, for that purpose, an adverse position on the market can be established by the loss of an opportunity to make a profit or a less favourable development than would have been the case without that measure. In the present case, in their view, the material situation and commercial interests of Pannonia Bio have been severely impacted by the contested provisions, since they exclude the crop-based biofuels it produces from the SAF market.
35      It must be recalled that, according to settled case-law, in order to be regarded as individually concerned by a measure not addressed to that person, a natural or legal person must be affected by that measure by reason of certain attributes which are peculiar to them or by reason of factual circumstances which differentiate them from all other persons and thereby distinguish them individually in the same way as the addressee (judgments of 15 July 1963, Plaumann v Commission, 25/62, EU:C:1963:17, p. 107, and of 18 October 2018, Internacional de Productos Metálicos v Commission, C‑145/17 P, EU:C:2018:839, paragraph 34).
36      Consequently, the fact that it is possible to determine more or less precisely the number, or even the identity, of the persons to whom a measure applies by no means implies that that measure must be regarded as being of individual concern to those persons where it is established that that application takes effect by virtue of an objective legal or factual situation defined by the measure in question (judgments of 23 April 2009, Sahlstedt and Others v Commission, C‑362/06 P, EU:C:2009:243, paragraph 31, and of 18 October 2018, Internacional de Productos Metálicos v Commission, C‑145/17 P, EU:C:2018:839, paragraph 35).
37      In the present case, pursuant to Article 2 thereof, the contested regulation applies to aircraft operators, to EU airports and their respective EU airport managing bodies, and to aviation fuel suppliers as defined in Article 3(19) of the same regulation. It is of general application, in that it applies to objectively determined situations and produces legal effects with respect to categories of persons envisaged in general and in the abstract.
38      As regards the contested provisions, it should be noted, first, that the exclusion of crop-based biofuels from the definition of SAF and from the minimum shares of SAF available at EU airports, provided for in Article 3(8)(c) and Article 4(5) of that regulation respectively, applies to all current or potential suppliers of aviation fuel.
39      The exclusions at issue do not therefore affect Pannonia Bio by reason of certain attributes which are peculiar to it or by reason of factual circumstances which differentiate it from the persons referred to in paragraph 37 above, and in particular from all other current or potential producers of that type of biofuel.
40      Second, the cap of 3% of aviation fuels, provided for in Article 4(4) of the contested regulation, applies to all current or potential suppliers of ‘aviation biofuels other than [biofuels produced from the feedstock listed in Annex IX to the RED], supplied across Union airports by each aviation fuel supplier’.
41      It is apparent from Article 3(8)(c) of the contested regulation, read in conjunction with points 24, 33 and 40 of the second paragraph of Article 2 of the RED, that the biofuels concerned by the cap in question are those produced from waste, residues and ligno-cellulosic materials which are not listed in Annex IX to that directive.
42      The applicants submit that the cap in question applies to crop-based biofuels. That interpretation is, however, inconsistent with the definition of ‘aviation biofuels’ laid down in Article 3(8)(c) of the contested regulation.
43      However, assuming that the cap in question does apply to all current or potential suppliers of crop-based biofuels, it would not affect Pannonia Bio by reason of certain attributes which are peculiar to it or by reason of factual circumstances which differentiate it from all other current or potential suppliers of biofuels covered by it.
44      Third, the minimum shares set for synthetic fuel in the context of the minimum shares of SAF, referred to in Article 4(4) of, and Annex I to, the contested regulation, apply to all current or potential suppliers of those fuels.
45      The minimum shares set in question therefore do not affect Pannonia Bio either by reason of certain attributes peculiar to it or by reason of factual circumstances which differentiate it from all current or potential suppliers of biofuels other than synthetic fuel.
46      Thus, Pannonia Bio is affected by the contested provisions only in its objective capacity as a producer of biofuel, produced from crops, waste or residues, which may be supplied to aircraft operators in the same way as any other economic operator which is currently or potentially in the same situation.
47      That conclusion is not called into question by the applicants’ arguments.
48      As regards, in the first place, the applicants’ line of argument alleging, in essence, that the contested provisions alter the right which the RED conferred on Pannonia Bio to supply renewable ethanol to all transport sectors, it is true that the fact that a measure is, by its nature and scope, a measure of general application inasmuch as it applies to the interested persons in general, does not prevent it from being of individual concern to some (judgment of 23 April 2009, Sahlstedt and Others v Commission, C‑362/06 P, EU:C:2009:243, paragraph 29, and order of 7 April 2022, Bloom v Parliament and Council, T‑645/21, not published, EU:T:2022:230, paragraph 41).
49      Where a measure affects a group of persons who were identified or identifiable when that measure was adopted by reason of criteria specific to the members of the group, those persons might nevertheless be individually concerned by that measure inasmuch as they form part of a limited class of economic operators, and that can be the case particularly when the same measure alters rights acquired by the individual prior to its adoption (see, to that effect, judgments of 13 March 2008, Commission v Infront WM, C‑125/06 P, EU:C:2008:159, paragraphs 71 and 72, and of 18 October 2018, Internacional de Productos Metálicos v Commission, C‑145/17 P, EU:C:2018:839, paragraph 36).
50      As the applicants have pointed out, an action against a measure of general application brought by undertakings holding acquired rights has been held to be admissible, for example because the measure had an adverse affect on existing authorisations (judgment of 22 June 2006, Belgium and Forum 187 v Commission, C‑182/03 and C‑217/03, EU:C:2006:416, paragraph 63) or on exclusive broadcasting rights, making it possible to regard the holders of those rights, which were clearly identifiable when the contested measure was adopted, as forming part of a ‘limited class’ (judgment of 13 March 2008, Commission v Infront WM, C‑125/06 P, EU:C:2008:159, paragraphs 71 to 77).
51      However, in the present case, first, it is apparent from points 1, 24 and 33 of the second paragraph of Article 2 of the RED that crop-based biofuels are to be regarded as ‘renewable energy’ within the meaning of that directive.
52      Second, pursuant to Article 25(1) of the RED, in order to mainstream the use of renewable energy in the transport sector, each Member State of the European Union is to set an obligation on fuel suppliers to ensure that the share of renewable energy within the final consumption of energy in the transport sector is at least 14% by 2030.
53      Thus, under the RED, crop-based biofuels complying with that directive could be taken into account in order to calculate that 14% minimum share of renewable energy within the final consumption of energy in the transport sector.
54      However, that directive does not oblige Member States to impose on fuel suppliers a minimum share of crop-based biofuel. That directive leaves Member States free to choose the composition of their respective energy mixes (see, to that effect, order of 11 June 2020, Lípidos Santiga v Commission, T‑561/19, not published, EU:T:2020:266, paragraph 32).
55      Therefore, that directive cannot be considered to have conferred on Pannonia Bio a right to supply renewable ethanol produced from crops to all transport sectors.
56      Consequently, Pannonia Bio has not demonstrated that it enjoyed an acquired right, within the meaning of the case-law cited in paragraphs 49 and 50 above, which could have been altered by the contested provisions.
57      Furthermore, even if, as the applicants submit, the RED does confer on producers of crop-based biofuels the right to supply those fuels to the transport sector, the rights allegedly acquired by all those producers would not, in any event, be altered by the contested provisions, which merely concern the determination of minimum shares of SAF.
58      It should be added that, in the light of the case-law cited in paragraphs 49 and 50 above, the ‘legitimate expectations’ allegedly created by the RED, as regards the possibility of supplying ethanol produced from crops to the aviation sector, cannot be sufficient to distinguish the applicants individually.
59      As regards, in the second place, the applicants’ line of argument alleging, in essence, that Pannonia Bio’s material situation and commercial interests have been severely impacted by the contested provisions, it should be borne in mind that the fact that certain operators are more affected economically by a measure of general application than others is not sufficient to distinguish them individually from all other operators, since the application of that measure takes effect by virtue of an objectively determined situation (see order of 21 December 2023, Broad Far (Hong Kong) and M21 v Commission, T‑791/22, not published, EU:T:2023:875, paragraph 44 and the case-law cited).
60      In the present case, it is apparent from paragraphs 37 to 46 above that the contested provisions apply by reason of objectively determined situations.
61      In addition, the mere fact that natural or legal persons may lose a major source of income as a result of new legislation does not prove that they are in a specific situation and is not sufficient to establish that that legislation applies to them individually, those persons having to adduce proof of circumstances which make it possible to consider that the harm allegedly suffered is such as to distinguish them individually from all other economic operators concerned by that legislation in the same way as they are (see order of 21 December 2023, Broad Far (Hong Kong) and M21 v Commission, T‑791/22, not published, EU:T:2023:875, paragraph 45 and the case-law cited).
62      The applicants have not claimed, let alone proved, that there were circumstances which make it possible to consider that the harm allegedly suffered by Pannonia Bio as a result of the contested provisions was such as to distinguish it individually from all other economic operators concerned by that legislation in the same way as it is.
63      Moreover, it should be noted that it is apparent from the applicants’ observations on the pleas of inadmissibility that although ethanol produced by Pannonia Bio from crops may, following the implementation of the ATJ process, be supplied to operators of aircraft which uplift jet fuel at airports located in the European Union, Pannonia Bio does not currently supply SAF. It is therefore not currently active in the SAF market. Contrary to what the applicants claim, Pannonia Bio’s position on the relevant market cannot therefore be regarded as substantially affected (see, to that effect, judgment of 2 September 2021, NeXovation v Commission, C‑665/19 P, EU:C:2021:667, paragraph 28).
64      In any event, the applicants have not established, in respect of Pannonia Bio and certain ePURE members, a loss of profit or a less favourable development than would have been the case in the absence of the contested provisions.
65      In their written observations on the pleas of inadmissibility, the applicants admittedly stated that Pannonia Bio, together with several members of ePURE, had been contacted by multiple airlines, airports, investors, potential partners and technology companies to discuss converting their ethanol into ATJ and gave examples of strategies for investing in ATJ. However, the applicants have not adduced evidence of that contact and those strategies, which, moreover, would not demonstrate that investments were made in that technology. The applicants’ assertion that ‘ePURE members and Pannonia [Bio] are ready and willing to invest in ATJ [technology] for the European market in order to supply … crop[-]based ATJ’ indeed appears to indicate that ePURE members and Pannonia Bio have not yet invested in that technology.
66      Moreover, although the applicants produced documents in support of their argument that Pannonia Bio, and some of the members of ePURE, made substantial investments, after the adoption of the RED, in crop-based ethanol production facilities in the European Union in order to be able to supply the European market for renewable fuels with biofuels, it is not apparent from those documents that those investments were intended to supply the aviation sector and, therefore, that those investments were affected by the contested provisions.
67      It follows that Pannonia Bio is not individually concerned by the contested provisions.
 Whether ePURE is individually concerned
68      Actions brought by associations have been held to be admissible in three well-defined situations: first, where a legal provision expressly grants trade associations a series of procedural rights, second, where the association represents the interests of its members who would be entitled to bring proceedings in their own right and, third, where the association is differentiated by reason of the impact on its own interests as an association, in particular because its negotiating position has been affected by the act in respect of which annulment is sought (see order of 7 April 2022, Bloom v Parliament and Council, T‑645/21, not published, EU:T:2022:230, paragraph 42 and the case-law cited).
69      In the present case, the applicants have not put forward any evidence to suggest that the conditions relating to the first situation referred to in paragraph 68 above could be satisfied.
70      Instead, the applicants put forward arguments relating to the second and third situations referred to in paragraph 68 above.
71      First, the applicants claim that ePURE is individually concerned in so far as it represents the interests of its members which are themselves entitled to bring proceedings for the same reasons Pannonia Bio is entitled to bring proceedings. According to the applicants, they also made investments in the development and production of crop-based ethanol on the basis of the legal framework resulting from the RED and form part of the closed class of operators whose legal situation and commercial interests have been affected by the contested provisions.
72      In that regard, it is sufficient to note that that line of argument is identical to the one put forward in respect of Pannonia Bio. It should, therefore, be rejected on the same grounds.
73      Second, the applicants claim that ePURE was actively involved in the discussions surrounding the legislative process for the adoption of the contested regulation on behalf of its members. According to them, ePURE was in close contact with many Members of Parliament, participated in a stakeholder workshop and proposed legislative amendments.
74      It must be noted that the applicants, in essence, merely rely on the lobbying of decision-makers that ePURE undertook, during the legislative process leading to the adoption of the contested regulation, in order to ensure the protection of the interests which it represents. However, the mere provision of information to the EU institutions during the legislative process leading to the adoption of a measure or the fact that an association has taken the initiative of contacting those institutions with a view to influencing their action, and has been heard or consulted in that context, is not sufficient to establish that the act in question adversely affects a clearly defined negotiating position or a similar position which the applicant occupies and which places it in a factual situation that differentiates it from any other person (see order of 7 April 2022, Bloom v Parliament and Council, T‑645/21, not published, EU:T:2022:230, paragraph 52 and the case-law cited).
75      Thus, the role played by ePURE in the legislative procedure that led to the adoption of the contested regulation cannot be regarded as sufficient to confer on it a particular status comparable to that of a negotiator within the meaning of the case-law cited in paragraph 68 above.
76      Furthermore, as regards the share of the production of crop-based ethanol in the European Union that the applicants allegedly represent, it should be noted, first, that that share has not been established by the applicants. Indeed, Pannonia Bio’s share of that production as indicated by the applicants is not supported by evidence and the share stated for all ePURE members is distorted given that it includes, as is apparent from the applicants’ observations on the pleas of inadmissibility, the share of one member which does not produce renewable crop-based ethanol in the European Union.
77      Second, the applicants do not explain how the share of the production of crop-based ethanol in the European Union that the applicants allegedly represent, if it were established, would permit the inference that they are individually concerned by the contested provisions. If, by relying on that share, the applicants seek to argue that it is possible to determine more or less precisely the number or even the identity of the persons to whom those provisions apply, that argument must be rejected for the reasons set out in paragraphs 36 to 46 above.
78      It follows that ePURE is not individually concerned by the contested provisions either.
79      Accordingly, it must be concluded, without there being any need to examine whether the applicants are directly concerned by those provisions, that they do not have standing to bring proceedings under the second limb of the fourth paragraph of Article 263 TFEU.
80      The Council and the Parliament are therefore justified in claiming that the applicants do not have standing to bring proceedings. Therefore, the pleas of inadmissibility must be upheld and the action must be dismissed as inadmissible.
 The applications to intervene
81      Under Article 142(2) of the Rules of Procedure, the intervention becomes devoid of purpose if the application is declared inadmissible. In the present case, since the action is being dismissed as inadmissible, there is no longer any need to adjudicate on the applications to intervene lodged by the European Commission, Renewable Fuels Association, Growth Energy, U. S. Grains Council and LanzaJet.
 Costs
82      Under Article 134(1) of the Rules of Procedure, the unsuccessful party is to be ordered to pay the costs if they have been applied for in the successful party’s pleadings. Since the Parliament and the Council have applied for costs and the applicants have been unsuccessful, the latter must be ordered to pay the costs.
83      However, as regards the costs relating to the applications to intervene, pursuant to Article 144(10) of the Rules of Procedure, the main parties and the applicants for leave to intervene, namely the Commission, Renewable Fuels Association, Growth Energy, U. S. Grains Council and LanzaJet, are each to bear their own costs.
On those grounds,
THE GENERAL COURT (Seventh Chamber)
hereby orders:
1.      The action is dismissed as inadmissible.
2.      There is no longer any need to adjudicate on the applications to intervene of the European Commission, Renewable Fuels Association, Growth Energy, U. S. Grains Council and LanzaJet.
3.      ePURE, de Europese Producenten Unie van Hernieuwbare Ethanol, and Pannonia Bio Zrt. shall bear their own costs and pay those incurred by the European Parliament and the Council of the European Union, with the exception of those relating to the applications to intervene.
4.      The Parliament, the Council and the applicants for leave to intervene referred to in point 2 of this operative part shall each bear their own costs relating to the applications to intervene.
Luxembourg, 25 February 2025.
V. Di Bucci
 
K. Kowalik-Bańczyk
Registrar
 
President
*      Language of the case: English.


Europe and worldwide offices
European Commission representations
• Link national politics and the public with the European Commission.
• Publicise the Commission's policies locally.
• Inform the Commission about current affairs in their host country.
See all European Commission representations
European Parliament Liaison offices
• Handle questions from the public and the media about the Parliament and EU policies in general.
• Offer educational resources and organise presentations and debates on European topics.
See the European Parliament Liaison offices
EU in the world
• 139 offices across the world, the 'embassies' of the EU.
• Present, explain and implement EU foreign policies which affect their host country.
See all EU offices in the world


Etemal Flame - Ann ธิติมา







|ORDEROFTHEGENERAL|COURT |
(Seventh Chamber)
25 February 2025 (*)
( Action for annulment – <Energy> – Regulation (EU) 2023/2405 – Obligation placed on aviation fuel suppliers to ensure that all aviation fuel made available to aircraft operators at each EU airport contains the minimum shares of sustainable aviation fuels – Lack of individual concern – Inadmissibility )
In Case T‑45/24,
ePURE, de Europese Producenten Unie van Hernieuwbare Ethanol, established in Etterbeek (Belgium),
Pannonia Bio Zrt., established in Budapest (Hungary),
represented by M.-S. Dibling and J. Pauwelyn, lawyers,
applicants,
v
European Parliament, represented by E. Ni Chaoimh and I. Terwinghe, acting as Agents,
and
Council of the European Union, represented by N. Rouam, R. Liudvinavičiūtė and D. Bringuier, acting as Agents,
defendants,
THE GENERAL COURT (Seventh Chamber),
composed of K. Kowalik-Bańczyk, President, E. Buttigieg (Rapporteur) and I. Dimitrakopoulos, Judges,
Registrar: V. Di Bucci,
having regard to the written part of the procedure, in particular:
–        the application lodged at the General Court Registry on 24 January 2024,
–        the plea of inadmissibility put forward by the Council by separate document lodged at the Court Registry on 10 April 2024,
–        the plea of inadmissibility put forward by the Parliament by separate document lodged at the Court Registry on 18 April 2024,
–        the applications to intervene lodged at the Court Registry by the European Commission on 29 April 2024 and by Renewable Fuels Association, Growth Energy, U. S. Grains Council and LanzaJet on 2 May 2024,
–        the applicants’ observations on the pleas of inadmissibility, lodged at the Court Registry on 31 May 2024,
–        the application for omission of certain information vis-à-vis the public made by the applicants by separate document on 31 May 2024 under Article 66a of the Rules of Procedure of the General Court,
makes the following
Order
1        By their action under Article 263 TFEU, the applicants, ePURE, de Europese Producenten Unie van Hernieuwbare Ethanol (‘ePURE’), and Pannonia Bio Zrt., seek annulment of Article 3(8)(c) and Article 4(1), (4) and (5) of, and Annex I to, Regulation (EU) 2023/2405 of the European Parliament and of the Council of 18 October 2023 on ensuring a level playing field for sustainable air transport (ReFuelEU Aviation) (OJ L 2023/2405; ‘the contested regulation’), inasmuch as they exclude biofuels produced from food and feed crops and from intermediate crops (together, ‘crop-based biofuels’) from the definition and/or minimum shares of sustainable aviation fuels and impose a minimum share for synthetic aviation fuels (‘the contested provisions’).
 Background to the dispute
 The applicants
2        ePURE is a non-profit organisation incorporated under the laws of Belgium which comprises 21 members. Of those members, 18 produce and supply renewable ethanol in the European Union. According to Article 3 of its articles of association, ePURE aims to promote a sustainable and competitive European industry producing ethanol from biomass (that is to say, from crops, waste and residues) and to promote the use of that product as a fuel as well as other uses of that product. All its producing members make renewable ethanol from crops. Some of its producing mem
