<?php
declare(strict_types=1);

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @since         1.2.0
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */
namespace Cake\Utility;

use Cake\Core\Exception\CakeException;
use InvalidArgumentException;
use Transliterator;

/**
 * Text handling methods.
 */
class Text
{
    /**
     * Default transliterator.
     *
     * @var \Transliterator|null Transliterator instance.
     */
    protected static $_defaultTransliterator;

    /**
     * Default transliterator id string.
     *
     * @var string $_defaultTransliteratorId Transliterator identifier string.
     */
    protected static $_defaultTransliteratorId = 'Any-Latin; Latin-ASCII; [\u0080-\u7fff] remove';

    /**
     * Default HTML tags which must not be counted for truncating text.
     *
     * @var array<string>
     */
    protected static $_defaultHtmlNoCount = [
        'style',
        'script',
    ];

    /**
     * Generate a random UUID version 4
     *
     * Warning: This method should not be used as a random seed for any cryptographic operations.
     * Instead, you should use the openssl or mcrypt extensions.
     *
     * It should also not be used to create identifiers that have security implications, such as
     * 'unguessable' URL identifiers. Instead, you should use {@link \Cake\Utility\Security::randomBytes()}` for that.
     *
     * @see https://www.ietf.org/rfc/rfc4122.txt
     * @return string RFC 4122 UUID
     * @copyright Matt Farina MIT License https://github.com/lootils/uuid/blob/master/LICENSE
     */
    public static function uuid(): string
    {
        return sprintf(
            '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            // 32 bits for "time_low"
            random_int(0, 65535),
            random_int(0, 65535),
            // 16 bits for "time_mid"
            random_int(0, 65535),
            // 12 bits before the 0100 of (version) 4 for "time_hi_and_version"
            random_int(0, 4095) | 0x4000,
            // 16 bits, 8 bits for "clk_seq_hi_res",
            // 8 bits for "clk_seq_low",
            // two most significant bits holds zero and one for variant DCE1.1
            random_int(0, 0x3fff) | 0x8000,
            // 48 bits for "node"
            random_int(0, 65535),
            random_int(0, 65535),
            random_int(0, 65535)
        );
    }

    /**
     * Tokenizes a string using $separator, ignoring any instance of $separator that appears between
     * $leftBound and $rightBound.
     *
     * @param string $data The data to tokenize.
     * @param string $separator The token to split the data on.
     * @param string $leftBound The left boundary to ignore separators in.
     * @param string $rightBound The right boundary to ignore separators in.
     * @return array<string> Array of tokens in $data.
     */
    public static function tokenize(
        string $data,
        string $separator = ',',
        string $leftBound = '(',
        string $rightBound = ')'
    ): array {
        if (empty($data)) {
            return [];
        }

        $depth = 0;
        $offset = 0;
        $buffer = '';
        $results = [];
        $length = mb_strlen($data);
        $open = false;

        while ($offset <= $length) {
            $tmpOffset = -1;
            $offsets = [
                mb_strpos($data, $separator, $offset),
                mb_strpos($data, $leftBound, $offset),
                mb_strpos($data, $rightBound, $offset),
            ];
            for ($i = 0; $i < 3; $i++) {
                if ($offsets[$i] !== false && ($offsets[$i] < $tmpOffset || $tmpOffset === -1)) {
                    $tmpOffset = $offsets[$i];
                }
            }
            if ($tmpOffset !== -1) {
                $buffer .= mb_substr($data, $offset, $tmpOffset - $offset);
                $char = mb_substr($data, $tmpOffset, 1);
                if (!$depth && $char === $separator) {
                    $results[] = $buffer;
                    $buffer = '';
                } else {
                    $buffer .= $char;
                }
                if ($leftBound !== $rightBound) {
                    if ($char === $leftBound) {
                        $depth++;
                    }
                    if ($char === $rightBound) {
                        $depth--;
                    }
                } else {
                    if ($char === $leftBound) {
                        if (!$open) {
                            $depth++;
                            $open = true;
                        } else {
                            $depth--;
                            $open = false;
                        }
                    }
                }
                $tmpOffset += 1;
                $offset = $tmpOffset;
            } else {
                $results[] = $buffer . mb_substr($data, $offset);
                $offset = $length + 1;
            }
        }
        if (empty($results) && !empty($buffer)) {
            $results[] = $buffer;
        }

        if (!empty($results)) {
            return array_map('trim', $results);
        }

        return [];
    }

    /**
     * Replaces variable placeholders inside a $str with any given $data. Each key in the $data array
     * corresponds to a variable placeholder name in $str.
     * Example:
     * ```
     * Text::insert(':name is :age years old.', ['name' => 'Bob', 'age' => '65']);
     * ```
     * Returns: Bob is 65 years old.
     *
     * Available $options are:
     *
     * - before: The character or string in front of the name of the variable placeholder (Defaults to `:`)
     * - after: The character or string after the name of the variable placeholder (Defaults to null)
     * - escape: The character or string used to escape the before character / string (Defaults to `\`)
     * - format: A regex to use for matching variable placeholders. Default is: `/(?<!\\)\:%s/`
     *   (Overwrites before, after, breaks escape / clean)
     * - clean: A boolean or array with instructions for Text::cleanInsert
     *
     * @param string $str A string containing variable placeholders
     * @param array $data A key => val array where each key stands for a placeholder variable name
     *     to be replaced with val
     * @param array<string, mixed> $options An array of options, see description above
     * @return string
     */
    public static function insert(string $str, array $data, array $options = []): string
    {
        $defaults = [
            'before' => ':', 'after' => '', 'escape' => '\\', 'format' => null, 'clean' => false,
        ];
        $options += $defaults;
        if (empty($data)) {
            return $options['clean'] ? static::cleanInsert($str, $options) : $str;
        }

        if (strpos($str, '?') !== false && is_numeric(key($data))) {
            deprecationWarning(
                'Using Text::insert() with `?` placeholders is deprecated. ' .
                'Use sprintf() with `%s` placeholders instead.'
            );

            $offset = 0;
            while (($pos = strpos($str, '?', $offset)) !== false) {
                $val = array_shift($data);
                $offset = $pos + strlen($val);
                $str = substr_replace($str, $val, $pos, 1);
            }

            return $options['clean'] ? static::cleanInsert($str, $options) : $str;
        }

        $format = $options['format'];
        if ($format === null) {
            $format = sprintf(
                '/(?<!%s)%s%%s%s/',
                preg_quote($options['escape'], '/'),
                str_replace('%', '%%', preg_quote($options['before'], '/')),
                str_replace('%', '%%', preg_quote($options['after'], '/'))
            );
        }

        $dataKeys = array_keys($data);
        $hashKeys = array_map('md5', $dataKeys);
        /** @var array<string, string> $tempData */
        $tempData = array_combine($dataKeys, $hashKeys);
        krsort($tempData);

        foreach ($tempData as $key => $hashVal) {
            $key = sprintf($format, preg_quote($key, '/'));
            $str = preg_replace($key, $hashVal, $str);
        }
        /** @var array<string, mixed> $dataReplacements */
        $dataReplacements = array_combine($hashKeys, array_values($data));
        foreach ($dataReplacements as $tmpHash => $tmpValue) {
            $tmpValue = is_array($tmpValue) ? '' : (string)$tmpValue;
            $str = str_replace($tmpHash, $tmpValue, $str);
        }

        if (!isset($options['format']) && isset($options['before'])) {
            $str = str_replace($options['escape'] . $options['before'], $options['before'], $str);
        }

        return $options['clean'] ? static::cleanInsert($str, $options) : $str;
    }

    /**
     * Cleans up a Text::insert() formatted string with given $options depending on the 'clean' key in
     * $options. The default method used is text but html is also available. The goal of this function
     * is to replace all whitespace and unneeded markup around placeholders that did not get replaced
     * by Text::insert().
     *
     * @param string $str String to clean.
     * @param array<string, mixed> $options Options list.
     * @return string
     * @see \Cake\Utility\Text::insert()
     */
    public static function cleanInsert(string $str, array $options): string
    {
        $clean = $options['clean'];
        if (!$clean) {
            return $str;
        }
        if ($clean === true) {
            $clean = ['method' => 'text'];
        }
        if (!is_array($clean)) {
            $clean = ['method' => $options['clean']];
        }
        switch ($clean['method']) {
            case 'html':
                $clean += [
                    'word' => '[\w,.]+',
                    'andText' => true,
                    'replacement' => '',
                ];
                $kleenex = sprintf(
                    '/[\s]*[a-z]+=(")(%s%s%s[\s]*)+\\1/i',
                    preg_quote($options['before'], '/'),
                    $clean['word'],
                    preg_quote($options['after'], '/')
                );
                $str = preg_replace($kleenex, $clean['replacement'], $str);
                if ($clean['andText']) {
                    $options['clean'] = ['method' => 'text'];
                    $str = static::cleanInsert($str, $options);
                }
                break;
            case 'text':
                $clean += [
                    'word' => '[\w,.]+',
                    'gap' => '[\s]*(?:(?:and|or)[\s]*)?',
                    'replacement' => '',
                ];

                $kleenex = sprintf(
                    '/(%s%s%s%s|%s%s%s%s)/',
                    preg_quote($options['before'], '/'),
                    $clean['word'],
                    preg_quote($options['after'], '/'),
                    $clean['gap'],
                    $clean['gap'],
                    preg_quote($options['before'], '/'),
                    $clean['word'],
                    preg_quote($options['after'], '/')
                );
                $str = preg_replace($kleenex, $clean['replacement'], $str);
                break;
        }

        return $str;
    }

    /**
     * Wraps text to a specific width, can optionally wrap at word breaks.
     *
     * ### Options
     *
     * - `width` The width to wrap to. Defaults to 72.
     * - `wordWrap` Only wrap on words breaks (spaces) Defaults to true.
     * - `indent` String to indent with. Defaults to null.
     * - `indentAt` 0 based index to start indenting at. Defaults to 0.
     *
     * @param string $text The text to format.
     * @param array<string, mixed>|int $options Array of options to use, or an integer to wrap the text to.
     * @return string Formatted text.
     */
    public static function wrap(string $text, $options = []): string
    {
        if (is_numeric($options)) {
            $options = ['width' => $options];
        }
        $options += ['width' => 72, 'wordWrap' => true, 'indent' => null, 'indentAt' => 0];
        if ($options['wordWrap']) {
            $wrapped = self::wordWrap($text, $options['width'], "\n");
        } else {
            $wrapped = trim(chunk_split($text, $options['width'] - 1, "\n"));
        }
        if (!empty($options['indent'])) {
            $chunks = explode("\n", $wrapped);
            for ($i = $options['indentAt'], $len = count($chunks); $i < $len; $i++) {
                $chunks[$i] = $options['indent'] . $chunks[$i];
            }
            $wrapped = implode("\n", $chunks);
        }

        return $wrapped;
    }

    /**
     * Wraps a complete block of text to a specific width, can optionally wrap
     * at word breaks.
     *
     * ### Options
     *
     * - `width` The width to wrap to. Defaults to 72.
     * - `wordWrap` Only wrap on words breaks (spaces) Defaults to true.
     * - `indent` String to indent with. Defaults to null.
     * - `indentAt` 0 based index to start indenting at. Defaults to 0.
     *
     * @param string $text The text to format.
     * @param array<string, mixed>|int $options Array of options to use, or an integer to wrap the text to.
     * @return string Formatted text.
     */
    public static function wrapBlock(string $text, $options = []): string
    {
        if (is_numeric($options)) {
            $options = ['width' => $options];
        }
        $options += ['width' => 72, 'wordWrap' => true, 'indent' => null, 'indentAt' => 0];

        if (!empty($options['indentAt']) && $options['indentAt'] === 0) {
            $indentLength = !empty($options['indent']) ? strlen($options['indent']) : 0;
            $options['width'] -= $indentLength;

            return self::wrap($text, $options);
        }

        $wrapped = self::wrap($text, $options);

        if (!empty($options['indent'])) {
            $indentationLength = mb_strlen($options['indent']);
            $chunks = explode("\n", $wrapped);
            $count = count($chunks);
            if ($count < 2) {
                return $wrapped;
            }
            $toRewrap = '';
            for ($i = $options['indentAt']; $i < $count; $i++) {
                $toRewrap .= mb_substr($chunks[$i], $indentationLength) . ' ';
                unset($chunks[$i]);
            }
            $options['width'] -= $indentationLength;
            $options['indentAt'] = 0;
            $rewrapped = self::wrap($toRewrap, $options);
            $newChunks = explode("\n", $rewrapped);

            $chunks = array_merge($chunks, $newChunks);
            $wrapped = implode("\n", $chunks);
        }

        return $wrapped;
    }

    /**
     * Unicode and newline aware version of wordwrap.
     *
     * @phpstan-param non-empty-string $break
     * @param string $text The text to format.
     * @param int $width The width to wrap to. Defaults to 72.
     * @param string $break The line is broken using the optional break parameter. Defaults to '\n'.
     * @param bool $cut If the cut is set to true, the string is always wrapped at the specified width.
     * @return string Formatted text.
     */
    public static function wordWrap(string $text, int $width = 72, string $break = "\n", bool $cut = false): string
    {
        $paragraphs = explode($break, $text);
        foreach ($paragraphs as &$paragraph) {
            $paragraph = static::_wordWrap($paragraph, $width, $break, $cut);
        }

        return implode($break, $paragraphs);
    }

    /**
     * Unicode aware version of wordwrap as helper method.
     *
     * @param string $text The text to format.
     * @param int $width The width to wrap to. Defaults to 72.
     * @param string $break The line is broken using the optional break parameter. Defaults to '\n'.
     * @param bool $cut If the cut is set to true, the string is always wrapped at the specified width.
     * @return string Formatted text.
     */
    protected static function _wordWrap(string $text, int $width = 72, string $break = "\n", bool $cut = false): string
    {
        $parts = [];
        if ($cut) {
            while (mb_strlen($text) > 0) {
                $part = mb_substr($text, 0, $width);
                $parts[] = trim($part);
                $text = trim(mb_substr($text, mb_strlen($part)));
            }

            return implode($break, $parts);
        }

        while (mb_strlen($text) > 0) {
            if ($width >= mb_strlen($text)) {
                $parts[] = trim($text);
                break;
            }

            $part = mb_substr($text, 0, $width);
            $nextChar = mb_substr($text, $width, 1);
            if ($nextChar !== ' ') {
                $breakAt = mb_strrpos($part, ' ');
                if ($breakAt === false) {
                    $breakAt = mb_strpos($text, ' ', $width);
                }
                if ($breakAt === false) {
                    $parts[] = trim($text);
                    break;
                }
                $part = mb_substr($text, 0, $breakAt);
            }

            $part = trim($part);
            $parts[] = $part;
            $text = trim(mb_substr($text, mb_strlen($part)));
        }

        return implode($break, $parts);
    }

    /**
     * Highlights a given phrase in a text. You can specify any expression in highlighter that
     * may include the \1 expression to include the $phrase found.
     *
     * ### Options:
     *
     * - `format` The piece of HTML with that the phrase will be highlighted
     * - `html` If true, will ignore any HTML tags, ensuring that only the correct text is highlighted
     * - `regex` A custom regex rule that is used to match words, default is '|$tag|iu'
     * - `limit` A limit, optional, defaults to -1 (none)
     *
     * @param string $text Text to search the phrase in.
     * @param array<string>|string $phrase The phrase or phrases that will be searched.
     * @param array<string, mixed> $options An array of HTML attributes and options.
     * @return string The highlighted text
     * @link https://book.cakephp.org/4/en/core-libraries/text.html#highlighting-substrings
     */
    public static function highlight(string $text, $phrase, array $options = []): string
    {
        if (empty($phrase)) {
            return $text;
        }

        $defaults = [
            'format' => '<span class="highlight">\1</span>',
            'html' => false,
            'regex' => '|%s|iu',
            'limit' => -1,
        ];
        $options += $defaults;

        if (is_array($phrase)) {
            $replace = [];
            $with = [];

            foreach ($phrase as $key => $segment) {
                $segment = '(' . preg_quote($segment, '|') . ')';
                if ($options['html']) {
                    $segment = "(?![^<]+>)$segment(?![^<]+>)";
                }

                $with[] = is_array($options['format']) ? $options['format'][$key] : $options['format'];
                $replace[] = sprintf($options['regex'], $segment);
            }

            return preg_replace($replace, $with, $text, $options['limit']);
        }

        $phrase = '(' . preg_quote($phrase, '|') . ')';
        if ($options['html']) {
            $phrase = "(?![^<]+>)$phrase(?![^<]+>)";
        }

        return preg_replace(
            sprintf($options['regex'], $phrase),
            $options['format'],
            $text,
            $options['limit']
        );
    }

    /**
     * Truncates text starting from the end.
     *
     * Cuts a string to the length of $length and replaces the first characters
     * with the ellipsis if the text is longer than length.
     *
     * ### Options:
     *
     * - `ellipsis` Will be used as beginning and prepended to the trimmed string
     * - `exact` If false, $text will not be cut mid-word
     *
     * @param string $text String to truncate.
     * @param int $length Length of returned string, including ellipsis.
     * @param array<string, mixed> $options An array of options.
     * @return string Trimmed string.
     */
    public static function tail(string $text, int $length = 100, array $options = []): string
    {
        $default = [
            'ellipsis' => '...', 'exact' => true,
        ];
        $options += $default;
        $ellipsis = $options['ellipsis'];

        if (mb_strlen($text) <= $length) {
            return $text;
        }

        $truncate = mb_substr($text, mb_strlen($text) - $length + mb_strlen($ellipsis));
        if (!$options['exact']) {
            $spacepos = mb_strpos($truncate, ' ');
            $truncate = $spacepos === false ? '' : trim(mb_substr($truncate, $spacepos));
        }

        return $ellipsis . $truncate;
    }

    /**
     * Truncates text.
     *
     * Cuts a string to the length of $length and replaces the last characters
     * with the ellipsis if the text is longer than length.
     *
     * ### Options:
     *
     * - `ellipsis` Will be used as ending and appended to the trimmed string
     * - `exact` If false, $text will not be cut mid-word
     * - `html` If true, HTML tags would be handled correctly
     * - `trimWidth` If true, $text will be truncated with the width
     *
     * @param string $text String to truncate.
     * @param int $length Length of returned string, including ellipsis.
     * @param array<string, mixed> $options An array of HTML attributes and options.
     * @return string Trimmed string.
     * @link https://book.cakephp.org/4/en/core-libraries/text.html#truncating-text
     */
    public static function truncate(string $text, int $length = 100, array $options = []): string
    {
        $default = [
            'ellipsis' => '...', 'exact' => true, 'html' => false, 'trimWidth' => false,
        ];
        if (!empty($options['html']) && strtolower((string)mb_internal_encoding()) === 'utf-8') {
            $default['ellipsis'] = "\xe2\x80\xa6";
        }
        $options += $default;

        $prefix = '';
        $suffix = $options['ellipsis'];

        if ($options['html']) {
            $ellipsisLength = self::_strlen(strip_tags($options['ellipsis']), $options);

            $truncateLength = 0;
            $totalLength = 0;
            $openTags = [];
            $truncate = '';

            preg_match_all('/(<\/?([\w+]+)[^>]*>)?([^<>]*)/', $text, $tags, PREG_SET_ORDER);
            foreach ($tags as $tag) {
                $contentLength = 0;
                if (!in_array($tag[2], static::$_defaultHtmlNoCount, true)) {
                    $contentLength = self::_strlen($tag[3], $options);
                }

                if ($truncate === '') {
                    if (
                        !preg_match(
                            '/img|br|input|hr|area|base|basefont|col|frame|isindex|link|meta|param/i',
                            $tag[2]
                        )
                    ) {
                        if (preg_match('/<[\w]+[^>]*>/', $tag[0])) {
                            array_unshift($openTags, $tag[2]);
                        } elseif (preg_match('/<\/([\w]+)[^>]*>/', $tag[0], $closeTag)) {
                            $pos = array_search($closeTag[1], $openTags, true);
                            if ($pos !== false) {
                                array_splice($openTags, $pos, 1);
                            }
                        }
                    }

                    $prefix .= $tag[1];

                    if ($totalLength + $contentLength + $ellipsisLength > $length) {
                        $truncate = $tag[3];
                        $truncateLength = $length - $totalLength;
                    } else {
                        $prefix .= $tag[3];
                    }
                }

                $totalLength += $contentLength;
                if ($totalLength > $length) {
                    break;
                }
            }

            if ($totalLength <= $length) {
                return $text;
            }

            $text = $truncate;
            $length = $truncateLength;

            foreach ($openTags as $tag) {
                $suffix .= '</' . $tag . '>';
            }
        } else {
            if (self::_strlen($text, $options) <= $length) {
                return $text;
            }
            $ellipsisLength = self::_strlen($options['ellipsis'], $options);
        }

        $result = self::_substr($text, 0, $length - $ellipsisLength, $options);

        if (!$options['exact']) {
            if (self::_substr($text, $length - $ellipsisLength, 1, $options) !== ' ') {
                $result = self::_removeLastWord($result);
            }

            // If result is empty, then we don't need to count ellipsis in the cut.
            if ($result === '') {
                $result = self::_substr($text, 0, $length, $options);
            }
        }

        return $prefix . $result . $suffix;
    }

    /**
     * Truncate text with specified width.
     *
     * @param string $text String to truncate.
     * @param int $length Length of returned string, including ellipsis.
     * @param array<string, mixed> $options An array of HTML attributes and options.
     * @return string Trimmed string.
     * @see \Cake\Utility\Text::truncate()
     */
    public static function truncateByWidth(string $text, int $length = 100, array $options = []): string
    {
        return static::truncate($text, $length, ['trimWidth' => true] + $options);
    }

    /**
     * Get string length.
     *
     * ### Options:
     *
     * - `html` If true, HTML entities will be handled as decoded characters.
     * - `trimWidth` If true, the width will return.
     *
     * @param string $text The string being checked for length
     * @param array<string, mixed> $options An array of options.
     * @return int
     */
    protected static function _strlen(string $text, array $options): int
    {
        if (empty($options['trimWidth'])) {
            $strlen = 'mb_strlen';
        } else {
            $strlen = 'mb_strwidth';
        }

        if (empty($options['html'])) {
            return $strlen($text);
        }

        $pattern = '/&[0-9a-z]{2,8};|&#[0-9]{1,7};|&#x[0-9a-f]{1,6};/i';
        $replace = preg_replace_callback(
            $pattern,
            function ($match) use ($strlen) {
                $utf8 = html_entity_decode($match[0], ENT_HTML5 | ENT_QUOTES, 'UTF-8');

                return str_repeat(' ', $strlen($utf8, 'UTF-8'));
            },
            $text
        );

        return $strlen($replace);
    }

    /**
     * Return part of a string.
     *
     * ### Options:
     *
     * - `html` If true, HTML entities will be handled as decoded characters.
     * - `trimWidth` If true, will be truncated with specified width.
     *
     * @param string $text The input string.
     * @param int $start The position to begin extracting.
     * @param int|null $length The desired length.
     * @param array<string, mixed> $options An array of options.
     * @return string
     */
    protected static function _substr(string $text, int $start, ?int $length, array $options): string
    {
        if (empty($options['trimWidth'])) {
            $substr = 'mb_substr';
        } else {
            $substr = 'mb_strimwidth';
        }

        $maxPosition = self::_strlen($text, ['trimWidth' => false] + $options);
        if ($start < 0) {
            $start += $maxPosition;
            if ($start < 0) {
                $start = 0;
            }
        }
        if ($start >= $maxPosition) {
            return '';
        }

        if ($length === null) {
            $length = self::_strlen($text, $options);
        }

        if ($length < 0) {
            $text = self::_substr($text, $start, null, $options);
            $start = 0;
            $length += self::_strlen($text, $options);
        }

        if ($length <= 0) {
            return '';
        }

        if (empty($options['html'])) {
            return (string)$substr($text, $start, $length);
        }

        $totalOffset = 0;
        $totalLength = 0;
        $result = '';

        $pattern = '/(&[0-9a-z]{2,8};|&#[0-9]{1,7};|&#x[0-9a-f]{1,6};)/i';
        $parts = preg_split($pattern, $text, -1, PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY);
        foreach ($parts as $part) {
            $offset = 0;

            if ($totalOffset < $start) {
                $len = self::_strlen($part, ['trimWidth' => false] + $options);
                if ($totalOffset + $len <= $start) {
                    $totalOffset += $len;
                    continue;
                }

                $offset = $start - $totalOffset;
                $totalOffset = $start;
            }

            $len = self::_strlen($part, $options);
            if ($offset !== 0 || $totalLength + $len > $length) {
                if (
                    strpos($part, '&') === 0
                    && preg_match($pattern, $part)
                    && $part !== html_entity_decode($part, ENT_HTML5 | ENT_QUOTES, 'UTF-8')
                ) {
                    // Entities cannot be passed substr.
                    continue;
                }

                $part = $substr($part, $offset, $length - $totalLength);
                $len = self::_strlen($part, $options);
            }

            $result .= $part;
            $totalLength += $len;
            if ($totalLength >= $length) {
                break;
            }
        }

        return $result;
    }

    /**
     * Removes the last word from the input text.
     *
     * @param string $text The input text
     * @return string
     */
    protected static function _removeLastWord(string $text): string
    {
        $spacepos = mb_strrpos($text, ' ');

        if ($spacepos !== false) {
            $lastWord = mb_substr($text, $spacepos);

            // Some languages are written without word separation.
            // We recognize a string as a word if it doesn't contain any full-width characters.
            if (mb_strwidth($lastWord) === mb_strlen($lastWord)) {
                $text = mb_substr($text, 0, $spacepos);
            }

            return $text;
        }

        return '';
    }

    /**
     * Extracts an excerpt from the text surrounding the phrase with a number of characters on each side
     * determined by radius.
     *
     * @param string $text String to search the phrase in
     * @param string $phrase Phrase that will be searched for
     * @param int $radius The amount of characters that will be returned on each side of the founded phrase
     * @param string $ellipsis Ending that will be appended
     * @return string Modified string
     * @link https://book.cakephp.org/4/en/core-libraries/text.html#extracting-an-excerpt
     */
    public static function excerpt(string $text, string $phrase, int $radius = 100, string $ellipsis = '...'): string
    {
        if (empty($text) || empty($phrase)) {
            return static::truncate($text, $radius * 2, ['ellipsis' => $ellipsis]);
        }

        $append = $prepend = $ellipsis;

        $phraseLen = mb_strlen($phrase);
        $textLen = mb_strlen($text);

        $pos = mb_stripos($text, $phrase);
        if ($pos === false) {
            return mb_substr($text, 0, $radius) . $ellipsis;
        }

        $startPos = $pos - $radius;
        if ($startPos <= 0) {
            $startPos = 0;
            $prepend = '';
        }

        $endPos = $pos + $phraseLen + $radius;
        if ($endPos >= $textLen) {
            $endPos = $textLen;
            $append = '';
        }

        $excerpt = mb_substr($text, $startPos, $endPos - $startPos);
        $excerpt = $prepend . $excerpt . $append;

        return $excerpt;
    }

    /**
     * Creates a comma separated list where the last two items are joined with 'and', forming natural language.
     *
     * @param array<string> $list The list to be joined.
     * @param string|null $and The word used to join the last and second last items together with. Defaults to 'and'.
     * @param string $separator The separator used to join all the other items together. Defaults to ', '.
     * @return string The glued together string.
     * @link https://book.cakephp.org/4/en/core-libraries/text.html#converting-an-array-to-sentence-form
     */
    public static function toList(array $list, ?string $and = null, string $separator = ', '): string
    {
        if ($and === null) {
            $and = __d('cake', 'and');
        }
        if (count($list) > 1) {
            return implode($separator, array_slice($list, 0, -1)) . ' ' . $and . ' ' . array_pop($list);
        }

        return (string)array_pop($list);
    }

    /**
     * Check if the string contain multibyte characters
     *
     * @param string $string value to test
     * @return bool
     */
    public static function isMultibyte(string $string): bool
    {
        $length = strlen($string);

        for ($i = 0; $i < $length; $i++) {
            $value = ord($string[$i]);
            if ($value > 128) {
                return true;
            }
        }

        return false;
    }

    /**
     * Converts a multibyte character string
     * to the decimal value of the character
     *
     * @param string $string String to convert.
     * @return array
     */
    public static function utf8(string $string): array
    {
        $map = [];

        $values = [];
        $find = 1;
        $length = strlen($string);

        for ($i = 0; $i < $length; $i++) {
            $value = ord($string[$i]);

            if ($value < 128) {
                $map[] = $value;
            } else {
                if (empty($values)) {
                    $find = $value < 224 ? 2 : 3;
                }
                $values[] = $value;

                if (count($values) === $find) {
                    if ($find === 3) {
                        $map[] = (($values[0] % 16) * 4096) + (($values[1] % 64) * 64) + ($values[2] % 64);
                    } else {
                        $map[] = (($values[0] % 32) * 64) + ($values[1] % 64);
                    }
                    $values = [];
                    $find = 1;
                }
            }
        }

        return $map;
    }

    /**
     * Converts the decimal value of a multibyte character string
     * to a string
     *
     * @param array $array Array
     * @return string
     */
    public static function ascii(array $array): string
    {
        $ascii = '';

        foreach ($array as $utf8) {
            if ($utf8 < 128) {
                $ascii .= chr($utf8);
            } elseif ($utf8 < 2048) {
                $ascii .= chr(192 + (($utf8 - ($utf8 % 64)) / 64));
                $ascii .= chr(128 + ($utf8 % 64));
            } else {
                $ascii .= chr(224 + (($utf8 - ($utf8 % 4096)) / 4096));
                $ascii .= chr(128 + ((($utf8 % 4096) - ($utf8 % 64)) / 64));
                $ascii .= chr(128 + ($utf8 % 64));
            }
        }

        return $ascii;
    }

    /**
     * Converts filesize from human readable string to bytes
     *
     * @param string $size Size in human readable string like '5MB', '5M', '500B', '50kb' etc.
     * @param mixed $default Value to be returned when invalid size was used, for example 'Unknown type'
     * @return mixed Number of bytes as integer on success, `$default` on failure if not false
     * @throws \InvalidArgumentException On invalid Unit type.
     * @link https://book.cakephp.org/4/en/core-libraries/text.html#Cake\Utility\Text::parseFileSize
     */
    public static function parseFileSize(string $size, $default = false)
    {
        if (ctype_digit($size)) {
            return (int)$size;
        }
        $size = strtoupper($size);

        $l = -2;
        $i = array_search(substr($size, -2), ['KB', 'MB', 'GB', 'TB', 'PB'], true);
        if ($i === false) {
            $l = -1;
            $i = array_search(substr($size, -1), ['K', 'M', 'G', 'T', 'P'], true);
        }
        if ($i !== false) {
            $size = (float)substr($size, 0, $l);

            return (int)($size * pow(1024, $i + 1));
        }

        if (substr($size, -1) === 'B' && ctype_digit(substr($size, 0, -1))) {
            $size = substr($size, 0, -1);

            return (int)$size;
        }

        if ($default !== false) {
            return $default;
        }
        throw new InvalidArgumentException('No unit type.');
    }

    /**
     * Get the default transliterator.
     *
     * @return \Transliterator|null Either a Transliterator instance, or `null`
     *   in case no transliterator has been set yet.
     */
    public static function getTransliterator(): ?Transliterator
    {
        return static::$_defaultTransliterator;
    }

    /**
     * Set the default transliterator.
     *
     * @param \Transliterator $transliterator A `Transliterator` instance.
     * @return void
     */
    public static function setTransliterator(Transliterator $transliterator): void
    {
        static::$_defaultTransliterator = $transliterator;
    }

    /**
     * Get default transliterator identifier string.
     *
     * @return string Transliterator identifier.
     */
    public static function getTransliteratorId(): string
    {
        return static::$_defaultTransliteratorId;
    }

    /**
     * Set default transliterator identifier string.
     *
     * @param string $transliteratorId Transliterator identifier.
     * @return void
     */
    public static function setTransliteratorId(string $transliteratorId): void
    {
        $transliterator = transliterator_create($transliteratorId);
        if ($transliterator === null) {
            throw new CakeException('Unable to create transliterator for id: ' . $transliteratorId);
        }

        static::setTransliterator($transliterator);
        static::$_defaultTransliteratorId = $transliteratorId;
    }

    /**
     * Transliterate string.
     *
     * @param string $string String to transliterate.
     * @param \Transliterator|string|null $transliterator Either a Transliterator
     *   instance, or a transliterator identifier string. If `null`, the default
     *   transliterator (identifier) set via `setTransliteratorId()` or
     *   `setTransliterator()` will be used.
     * @return string
     * @see https://secure.php.net/manual/en/transliterator.transliterate.php
     */
    public static function transliterate(string $string, $transliterator = null): string
    {
        if (empty($transliterator)) {
            $transliterator = static::$_defaultTransliterator ?: static::$_defaultTransliteratorId;
        }

        $return = transliterator_transliterate($transliterator, $string);
        if ($return === false) {
            throw new CakeException(sprintf('Unable to transliterate string: %s', $string));
        }

        return $return;
    }

    /**
     * Returns a string with all spaces converted to dashes (by default),
     * characters transliterated to ASCII characters, and non word characters removed.
     *
     * ### Options:
     *
     * - `replacement`: Replacement string. Default '-'.
     * - `transliteratorId`: A valid transliterator id string.
     *   If `null` (default) the transliterator (identifier) set via
     *   `setTransliteratorId()` or `setTransliterator()` will be used.
     *   If `false` no transliteration will be done, only non words will be removed.
     * - `preserve`: Specific non-word character to preserve. Default `null`.
     *   For e.g. this option can be set to '.' to generate clean file names.
     *
     * @param string $string the string you want to slug
     * @param array<string, mixed>|string $options If string it will be use as replacement character
     *   or an array of options.
     * @return string
     * @see setTransliterator()
     * @see setTransliteratorId()
     */
    public static function slug(string $string, $options = []): string
    {
        if (is_string($options)) {
            $options = ['replacement' => $options];
        }
        $options += [
            'replacement' => '-',
            'transliteratorId' => null,
            'preserve' => null,
        ];

        if ($options['transliteratorId'] !== false) {
            $string = static::transliterate($string, $options['transliteratorId']);
        }

        $regex = '^\p{Ll}\p{Lm}\p{Lo}\p{Lt}\p{Lu}\p{Nd}';
        if ($options['preserve']) {
            $regex .= preg_quote($options['preserve'], '/');
        }
        $quotedReplacement = preg_quote((string)$options['replacement'], '/');
        $map = [
            '/[' . $regex . ']/mu' => $options['replacement'],
            sprintf('/^[%s]+|[%s]+$/', $quotedReplacement, $quotedReplacement) => '',
        ];
        if (is_string($options['replacement']) && $options['replacement'] !== '') {
            $map[sprintf('/[%s]+/mu', $quotedReplacement)] = $options['replacement'];
        }
        $string = preg_replace(array_keys($map), $map, $string);

        return $string;
    }
}
