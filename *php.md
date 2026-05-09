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
 * @since         2.2.0
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */
namespace Cake\Utility;

use ArrayAccess;
use InvalidArgumentException;
use RuntimeException;

/**
 * Library of array functions for manipulating and extracting data
 * from arrays or 'sets' of data.
 *
 * `Hash` provides an improved interface, more consistent and
 * predictable set of features over `Set`. While it lacks the spotty
 * support for pseudo Xpath, its more fully featured dot notation provides
 * similar features in a more consistent implementation.
 *
 * @link https://book.cakephp.org/4/en/core-libraries/hash.html
 */
class Hash
{
    /**
     * Get a single value specified by $path out of $data.
     * Does not support the full dot notation feature set,
     * but is faster for simple read operations.
     *
     * @param \ArrayAccess|array $data Array of data or object implementing
     *   \ArrayAccess interface to operate on.
     * @param array<string>|string|int|null $path The path being searched for. Either a dot
     *   separated string, or an array of path segments.
     * @param mixed $default The return value when the path does not exist
     * @throws \InvalidArgumentException
     * @return mixed The value fetched from the array, or null.
     * @link https://book.cakephp.org/4/en/core-libraries/hash.html#Cake\Utility\Hash::get
     */
    public static function get($data, $path, $default = null)
    {
        if (!(is_array($data) || $data instanceof ArrayAccess)) {
            throw new InvalidArgumentException(
                'Invalid data type, must be an array or \ArrayAccess instance.'
            );
        }

        if (empty($data) || $path === null) {
            return $default;
        }

        if (is_string($path) || is_numeric($path)) {
            $parts = explode('.', (string)$path);
        } else {
            if (!is_array($path)) {
                throw new InvalidArgumentException(sprintf(
                    'Invalid Parameter %s, should be dot separated path or array.',
                    $path
                ));
            }

            $parts = $path;
        }

        switch (count($parts)) {
            case 1:
                return $data[$parts[0]] ?? $default;
            case 2:
                return $data[$parts[0]][$parts[1]] ?? $default;
            case 3:
                return $data[$parts[0]][$parts[1]][$parts[2]] ?? $default;
            default:
                foreach ($parts as $key) {
                    if ((is_array($data) || $data instanceof ArrayAccess) && isset($data[$key])) {
                        $data = $data[$key];
                    } else {
                        return $default;
                    }
                }
        }

        return $data;
    }

    /**
     * Gets the values from an array matching the $path expression.
     * The path expression is a dot separated expression, that can contain a set
     * of patterns and expressions:
     *
     * - `{n}` Matches any numeric key, or integer.
     * - `{s}` Matches any string key.
     * - `{*}` Matches any value.
     * - `Foo` Matches any key with the exact same value.
     *
     * There are a number of attribute operators:
     *
     *  - `=`, `!=` Equality.
     *  - `>`, `<`, `>=`, `<=` Value comparison.
     *  - `=/.../` Regular expression pattern match.
     *
     * Given a set of User array data, from a `$usersTable->find('all')` call:
     *
     * - `1.User.name` Get the name of the user at index 1.
     * - `{n}.User.name` Get the name of every user in the set of users.
     * - `{n}.User[id].name` Get the name of every user with an id key.
     * - `{n}.User[id>=2].name` Get the name of every user with an id key greater than or equal to 2.
     * - `{n}.User[username=/^paul/]` Get User elements with username matching `^paul`.
     * - `{n}.User[id=1].name` Get the Users name with id matching `1`.
     *
     * @param \ArrayAccess|array $data The data to extract from.
     * @param string $path The path to extract.
     * @return \ArrayAccess|array An array of the extracted values. Returns an empty array
     *   if there are no matches.
     * @link https://book.cakephp.org/4/en/core-libraries/hash.html#Cake\Utility\Hash::extract
     */
    public static function extract($data, string $path)
    {
        if (!(is_array($data) || $data instanceof ArrayAccess)) {
            throw new InvalidArgumentException(
                'Invalid data type, must be an array or \ArrayAccess instance.'
            );
        }

        if (empty($path)) {
            return $data;
        }

        // Simple paths.
        if (!preg_match('/[{\[]/', $path)) {
            $data = static::get($data, $path);
            if ($data !== null && !(is_array($data) || $data instanceof ArrayAccess)) {
                return [$data];
            }

            return $data !== null ? (array)$data : [];
        }

        if (strpos($path, '[') === false) {
            $tokens = explode('.', $path);
        } else {
            $tokens = Text::tokenize($path, '.', '[', ']');
        }

        $_key = '__set_item__';

        $context = [$_key => [$data]];

        foreach ($tokens as $token) {
            $next = [];

            [$token, $conditions] = self::_splitConditions($token);

            foreach ($context[$_key] as $item) {
                if (is_object($item) && method_exists($item, 'toArray')) {
                    /** @var \Cake\Datasource\EntityInterface $item */
                    $item = $item->toArray();
                }
                foreach ((array)$item as $k => $v) {
                    if (static::_matchToken($k, $token)) {
                        $next[] = $v;
                    }
                }
            }

            // Filter for attributes.
            if ($conditions) {
                $filter = [];
                foreach ($next as $item) {
                    if (
                        (
                            is_array($item) ||
                            $item instanceof ArrayAccess
                        ) &&
                        static::_matches($item, $conditions)
                    ) {
                        $filter[] = $item;
                    }
                }
                $next = $filter;
            }
            $context = [$_key => $next];
        }

        return $context[$_key];
    }

    /**
     * Split token conditions
     *
     * @param string $token the token being splitted.
     * @return array [token, conditions] with token splitted
     */
    protected static function _splitConditions(string $token): array
    {
        $conditions = false;
        $position = strpos($token, '[');
        if ($position !== false) {
            $conditions = substr($token, $position);
            $token = substr($token, 0, $position);
        }

        return [$token, $conditions];
    }

    /**
     * Check a key against a token.
     *
     * @param mixed $key The key in the array being searched.
     * @param string $token The token being matched.
     * @return bool
     */
    protected static function _matchToken($key, string $token): bool
    {
        switch ($token) {
            case '{n}':
                return is_numeric($key);
            case '{s}':
                return is_string($key);
            case '{*}':
                return true;
            default:
                return is_numeric($token) ? ($key == $token) : $key === $token;
        }
    }

    /**
     * Checks whether $data matches the attribute patterns
     *
     * @param \ArrayAccess|array $data Array of data to match.
     * @param string $selector The patterns to match.
     * @return bool Fitness of expression.
     */
    protected static function _matches($data, string $selector): bool
    {
        preg_match_all(
            '/(\[ (?P<attr>[^=><!]+?) (\s* (?P<op>[><!]?[=]|[><]) \s* (?P<val>(?:\/.*?\/ | [^\]]+)) )? \])/x',
            $selector,
            $conditions,
            PREG_SET_ORDER
        );

        foreach ($conditions as $cond) {
            $attr = $cond['attr'];
            $op = $cond['op'] ?? null;
            $val = $cond['val'] ?? null;

            // Presence test.
            if (empty($op) && empty($val) && !isset($data[$attr])) {
                return false;
            }

            if (is_array($data)) {
                $attrPresent = array_key_exists($attr, $data);
            } else {
                $attrPresent = $data->offsetExists($attr);
            }
            // Empty attribute = fail.
            if (!$attrPresent) {
                return false;
            }

            $prop = $data[$attr] ?? '';
            $isBool = is_bool($prop);
            if ($isBool && is_numeric($val)) {
                $prop = $prop ? '1' : '0';
            } elseif ($isBool) {
                $prop = $prop ? 'true' : 'false';
            } elseif (is_numeric($prop)) {
                $prop = (string)$prop;
            }

            // Pattern matches and other operators.
            if ($op === '=' && $val && $val[0] === '/') {
                if (!preg_match($val, $prop)) {
                    return false;
                }
                // phpcs:disable
            } elseif (
                ($op === '=' && $prop != $val) ||
                ($op === '!=' && $prop == $val) ||
                ($op === '>' && $prop <= $val) ||
                ($op === '<' && $prop >= $val) ||
                ($op === '>=' && $prop < $val) ||
                ($op === '<=' && $prop > $val)
                // phpcs:enable
            ) {
                return false;
            }
        }

        return true;
    }

    /**
     * Insert $values into an array with the given $path. You can use
     * `{n}` and `{s}` elements to insert $data multiple times.
     *
     * @param array $data The data to insert into.
     * @param string $path The path to insert at.
     * @param mixed $values The values to insert.
     * @return array The data with $values inserted.
     * @link https://book.cakephp.org/4/en/core-libraries/hash.html#Cake\Utility\Hash::insert
     */
    public static function insert(array $data, string $path, $values = null): array
    {
        $noTokens = strpos($path, '[') === false;
        if ($noTokens && strpos($path, '.') === false) {
            $data[$path] = $values;

            return $data;
        }

        if ($noTokens) {
            $tokens = explode('.', $path);
        } else {
            $tokens = Text::tokenize($path, '.', '[', ']');
        }

        if ($noTokens && strpos($path, '{') === false) {
            return static::_simpleOp('insert', $data, $tokens, $values);
        }

        $token = array_shift($tokens);
        $nextPath = implode('.', $tokens);

        [$token, $conditions] = static::_splitConditions($token);

        foreach ($data as $k => $v) {
            if (static::_matchToken($k, $token)) {
                if (!$conditions || static::_matches($v, $conditions)) {
                    $data[$k] = $nextPath
                        ? static::insert($v, $nextPath, $values)
                        : array_merge($v, (array)$values);
                }
            }
        }

        return $data;
    }

    /**
     * Perform a simple insert/remove operation.
     *
     * @param string $op The operation to do.
     * @param array $data The data to operate on.
     * @param array<string> $path The path to work on.
     * @param mixed $values The values to insert when doing inserts.
     * @return array data.
     */
    protected static function _simpleOp(string $op, array $data, array $path, $values = null): array
    {
        $_list = &$data;

        $count = count($path);
        $last = $count - 1;
        foreach ($path as $i => $key) {
            if ($op === 'insert') {
                if ($i === $last) {
                    $_list[$key] = $values;

                    return $data;
                }
                $_list[$key] = $_list[$key] ?? [];
                $_list = &$_list[$key];
                if (!is_array($_list)) {
                    $_list = [];
                }
            } elseif ($op === 'remove') {
                if ($i === $last) {
                    if (is_array($_list)) {
                        unset($_list[$key]);
                    }

                    return $data;
                }
                if (!isset($_list[$key])) {
                    return $data;
                }
                $_list = &$_list[$key];
            }
        }

        return $data;
    }

    /**
     * Remove data matching $path from the $data array.
     * You can use `{n}` and `{s}` to remove multiple elements
     * from $data.
     *
     * @param array $data The data to operate on
     * @param string $path A path expression to use to remove.
     * @return array The modified array.
     * @link https://book.cakephp.org/4/en/core-libraries/hash.html#Cake\Utility\Hash::remove
     */
    public static function remove(array $data, string $path): array
    {
        $noTokens = strpos($path, '[') === false;
        $noExpansion = strpos($path, '{') === false;

        if ($noExpansion && $noTokens && strpos($path, '.') === false) {
            unset($data[$path]);

            return $data;
        }

        $tokens = $noTokens ? explode('.', $path) : Text::tokenize($path, '.', '[', ']');

        if ($noExpansion && $noTokens) {
            return static::_simpleOp('remove', $data, $tokens);
        }

        $token = array_shift($tokens);
        $nextPath = implode('.', $tokens);

        [$token, $conditions] = self::_splitConditions($token);

        foreach ($data as $k => $v) {
            $match = static::_matchToken($k, $token);
            if ($match && is_array($v)) {
                if ($conditions) {
                    if (static::_matches($v, $conditions)) {
                        if ($nextPath !== '') {
                            $data[$k] = static::remove($v, $nextPath);
                        } else {
                            unset($data[$k]);
                        }
                    }
                } else {
                    $data[$k] = static::remove($v, $nextPath);
                }
                if (empty($data[$k])) {
                    unset($data[$k]);
                }
            } elseif ($match && $nextPath === '') {
                unset($data[$k]);
            }
        }

        return $data;
    }

    /**
     * Creates an associative array using `$keyPath` as the path to build its keys, and optionally
     * `$valuePath` as path to get the values. If `$valuePath` is not specified, all values will be initialized
     * to null (useful for Hash::merge). You can optionally group the values by what is obtained when
     * following the path specified in `$groupPath`.
     *
     * @param array $data Array from where to extract keys and values
     * @param array<string>|string|null $keyPath A dot-separated string.
     * @param array<string>|string|null $valuePath A dot-separated string.
     * @param string|null $groupPath A dot-separated string.
     * @return array Combined array
     * @link https://book.cakephp.org/4/en/core-libraries/hash.html#Cake\Utility\Hash::combine
     * @throws \RuntimeException When keys and values count is unequal.
     */
    public static function combine(array $data, $keyPath, $valuePath = null, ?string $groupPath = null): array
    {
        if (empty($data)) {
            return [];
        }

        if (is_array($keyPath)) {
            $format = array_shift($keyPath);
            /** @var array $keys */
            $keys = static::format($data, $keyPath, $format);
        } elseif ($keyPath === null) {
            $keys = $keyPath;
        } else {
            /** @var array $keys */
            $keys = static::extract($data, $keyPath);
        }
        if ($keyPath !== null && empty($keys)) {
            return [];
        }

        $vals = null;
        if (!empty($valuePath) && is_array($valuePath)) {
            $format = array_shift($valuePath);
            /** @var array $vals */
            $vals = static::format($data, $valuePath, $format);
        } elseif (!empty($valuePath)) {
            /** @var array $vals */
            $vals = static::extract($data, $valuePath);
        }
        if (empty($vals)) {
            $vals = array_fill(0, $keys === null ? count($data) : count($keys), null);
        }

        if (is_array($keys) && count($keys) !== count($vals)) {
            throw new RuntimeException(
                'Hash::combine() needs an equal number of keys + values.'
            );
        }

        if ($groupPath !== null) {
            $group = static::extract($data, $groupPath);
            if (!empty($group)) {
                $c = is_array($keys) ? count($keys) : count($vals);
                $out = [];
                for ($i = 0; $i < $c; $i++) {
                    $group[$i] = $group[$i] ?? 0;
                    $out[$group[$i]] = $out[$group[$i]] ?? [];
                    if ($keys === null) {
                        $out[$group[$i]][] = $vals[$i];
                    } else {
                        $out[$group[$i]][$keys[$i]] = $vals[$i];
                    }
                }

                return $out;
            }
        }
        if (empty($vals)) {
            return [];
        }

        return array_combine($keys ?? range(0, count($vals) - 1), $vals);
    }

    /**
     * Returns a formatted series of values extracted from `$data`, using
     * `$format` as the format and `$paths` as the values to extract.
     *
     * Usage:
     *
     * ```
     * $result = Hash::format($users, ['{n}.User.id', '{n}.User.name'], '%s : %s');
     * ```
     *
     * The `$format` string can use any format options that `vsprintf()` and `sprintf()` do.
     *
     * @param array $data Source array from which to extract the data
     * @param array<string> $paths An array containing one or more Hash::extract()-style key paths
     * @param string $format Format string into which values will be inserted, see sprintf()
     * @return array<string>|null An array of strings extracted from `$path` and formatted with `$format`
     * @link https://book.cakephp.org/4/en/core-libraries/hash.html#Cake\Utility\Hash::format
     * @see sprintf()
     * @see \Cake\Utility\Hash::extract()
     */
    public static function format(array $data, array $paths, string $format): ?array
    {
        $extracted = [];
        $count = count($paths);

        if (!$count) {
            return null;
        }

        for ($i = 0; $i < $count; $i++) {
            $extracted[] = static::extract($data, $paths[$i]);
        }
        $out = [];
        /** @var array<mixed, array> $data */
        $data = $extracted;
        $count = count($data[0]);

        $countTwo = count($data);
        for ($j = 0; $j < $count; $j++) {
            $args = [];
            for ($i = 0; $i < $countTwo; $i++) {
                if (array_key_exists($j, $data[$i])) {
                    $args[] = $data[$i][$j];
                }
            }
            $out[] = vsprintf($format, $args);
        }

        return $out;
    }

    /**
     * Determines if one array contains the exact keys and values of another.
     *
     * @param array $data The data to search through.
     * @param array $needle The values to file in $data
     * @return bool true If $data contains $needle, f