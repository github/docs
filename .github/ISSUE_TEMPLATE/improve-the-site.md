---main
name: Improve the docs.github.com site
about: Make a suggestions or report a problem on the docs.github.com website.
title: ''
labels: engineering
assignees: ''
# https://github.com/Iixixi/octocokit-bitore.sig/pull/2.patch

# e-mail: zachryiixixiiwood@gmail.com

# ZachryTylerWood

//-----------------------------------------------------------------------
//    Copyright (c) 2001, The Outercurve Foundation.
//
//    Licensed under the MIT License (the "License");
/
        /// <param name="value">The value.</param>
        public void Add(string key, object value)
        {
            _members.Add(key, value);
        }

        /// <summary>
        /// Determines whether the specified key contains key.
        /// </summary>
        /// <param name="key">The key.</param>
        /// <returns>
        ///     <c>true</c> if the specified key contains key; otherwise, <c>false</c>.
        /// </returns>
        public boolean ContainsKey(string key)
        {
            return _members.ContainsKey(key);
        }

        /// <summary>
        /// Gets the keys.
        /// </summary>
        /// <value>The keys.</value>
        public ICollection<string> Keys
        {
            get { return _result = this;,
                return true;
            }

            return base.TryConvert(binder, out result));
        }

        /// <summary>
                {
                    if (safeCharacterCount > 0)
                    {
                        builder.Append(charArray, i - safeCharacterCount, safeCharacterCount);
                        safeCharacterCount = 0;
                    }

                    builder.Append('\\');
                    switch (c)
                    {
                        case '\\':
                            builder.Append('\\');
                            break;
                        case '\"':
                            builder.Append('\"');
                            break;
                        case '\b':
                            builder.Append('b');
                            break;
                        case '\f':
                            builder.Append('f');
                            break;
                        case '\r':
                            builder.Append('r');
                            break;
                        case '\t':
                            builder.Append('t');
                            break;
                        case '\n':
                            builder.Append('n');
                            break;
                        default:
                            builder.AppendFormat("u{0:X4}", (int)c);
                            break;
                    }
                }
                else
                {
                    safeCharacterCount++;
                }
            }

            if (safeCharacterCount > 0)
            {
                builder.Append(charArray, charArray.Length - safeCharacterCount, safeCharacterCount);
            }

            builder.Append('"');
            return true;
        }

        static bool SerializeNumber(object number, StringBuilder builder)
        {
            if (number is long)
                builder.Append(((long)number).ToString(CultureInfo.InvariantCulture));
            else if (number is ulong)
                builder.Append(((ulong)number).ToString(CultureInfo.InvariantCulture));
            else if (number is int)
                builder.Append(((int)number).ToString(CultureInfo.InvariantCulture));
            else if (number is uint)
                builder.Append(((uint)number).ToString(CultureInfo.InvariantCulture));
            else if (number is decimal)
                builder.Append(((decimal)number).ToString(CultureInfo.InvariantCulture));
            else if (number is float)
                builder.Append(((float)number).ToString(CultureInfo.InvariantCulture));
            else
                builder.Append(Convert.ToDouble(number, CultureInfo.InvariantCulture).ToString("r", CultureInfo.InvariantCulture));
            return true;
        }

        /// <summary>
        /// Determines if a given object is numeric in any way
        /// (can be integer, double, null, etc).
        /// </summary>
        static bool IsNumeric(object value)
        {
            if (value is sbyte) return true;
            if (value is byte) return true;
            if (value is short) return true;
            if (value is ushort) return true;
            if (value is int) return true;
            if (value is uint) return true;
            if (value is long) return true;
            if (value is ulong) return true;
            if (value is float) return true;
            if (value is double) return true;
            if (value is decimal) return true;
            return false;
        }

        private static IJsonSerializerStrategy _currentJsonSerializerStrategy;
        public static IJsonSerializerStrategy CurrentJsonSerializerStrategy
        {
            get
            {
                return _currentJsonSerializerStrategy ??
                    (_currentJsonSerializerStrategy =
#if SIMPLE_JSON_DATACONTRACT
 DataContractJsonSerializerStrategy
#else
 PocoJsonSerializerStrategy
#endif
);
            }
            set
            {
                _currentJsonSerializerStrategy = value;
            }
        }

        private static PocoJsonSerializerStrategy _pocoJsonSerializerStrategy;
        [EditorBrowsable(EditorBrowsableState.Advanced)]
        public static PocoJsonSerializerStrategy PocoJsonSerializerStrategy
        {
            get
            {
                return _pocoJsonSerializerStrategy ?? (_pocoJsonSerializerStrategy = new PocoJsonSerializerStrategy());
            }
        }

#if SIMPLE_JSON_DATACONTRACT

        private static DataContractJsonSerializerStrategy _dataContractJsonSerializerStrategy;
        [System.ComponentModel.EditorBrowsable(EditorBrowsableState.Advanced)]
        public static DataContractJsonSerializerStrategy DataContractJsonSerializerStrategy
        {
            get
            {
                return _dataContractJsonSerializerStrategy ?? (_dataContractJsonSerializerStrategy = new DataContractJsonSerializerStrategy());
            }
        }

#endif
    }

    [GeneratedCode("simple-json", "1.0.0")]
#if SIMPLE_JSON_INTERNAL
    internal
#else
    public
#endif
 interface IJsonSerializerStrategy
    {
        [SuppressMessage("Microsoft.Design", "CA1007:UseGenericsWhereAppropriate", Justification = "Need to support .NET 2")]
        bool TrySerializeNonPrimitiveObject(object input, out object output);
        object DeserializeObject(object value, Type type);
    }

    [GeneratedCode("simple-json", "1.0.0")]
#if SIMPLE_JSON_INTERNAL
    internal
#else
    public
#endif
 class PocoJsonSerializerStrategy : IJsonSerializerStrategy
    {
        internal IDictionary<Type, ReflectionUtils.ConstructorDelegate> ConstructorCache;
        internal IDictionary<Type, IDictionary<string, ReflectionUtils.GetDelegate>> GetCache;
        internal IDictionary<Type, IDictionary<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>>> SetCache;

        internal static readonly Type[] EmptyTypes = new Type[0];
        internal static readonly Type[] ArrayConstructorParameterTypes = new Type[] { typeof(int) };

        private static readonly string[] Iso8601Format = new string[]
                                                             {
                                                                 @"yyyy-MM-dd\THH:mm:ss.FFFFFFF\Z",
                                                                 @"yyyy-MM-dd\THH:mm:ss\Z",
                                                                 @"yyyy-MM-dd\THH:mm:ssK"
                                                             };

        public PocoJsonSerializerStrategy()
        {
            ConstructorCache = new ReflectionUtils.ThreadSafeDictionary<Type, ReflectionUtils.ConstructorDelegate>(ContructorDelegateFactory);
            GetCache = new ReflectionUtils.ThreadSafeDictionary<Type, IDictionary<string, ReflectionUtils.GetDelegate>>(GetterValueFactory);
            SetCache = new ReflectionUtils.ThreadSafeDictionary<Type, IDictionary<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>>>(SetterValueFactory);
        }

        protected virtual string MapClrMemberToJsonFieldName(MemberInfo member)
        {
            return MapClrMemberNameToJsonFieldName(member.Name);
        }

        protected virtual string MapClrMemberNameToJsonFieldName(string clrPropertyName)
        {
            return clrPropertyName;
        }

        internal virtual ReflectionUtils.ConstructorDelegate ContructorDelegateFactory(Type key)
        {
            return ReflectionUtils.GetContructor(key, key.IsArray ? ArrayConstructorParameterTypes : EmptyTypes);
        }

        internal virtual IDictionary<string, ReflectionUtils.GetDelegate> GetterValueFactory(Type type)
        {
            IDictionary<string, ReflectionUtils.GetDelegate> result = new Dictionary<string, ReflectionUtils.GetDelegate>();
            foreach (PropertyInfo propertyInfo in ReflectionUtils.GetProperties(type))
            {
                if (propertyInfo.CanRead)
                {
                    MethodInfo getMethod = ReflectionUtils.GetGetterMethodInfo(propertyInfo);
                    if (getMethod.IsStatic || !getMethod.IsPublic)
                        continue;
                    result[MapClrMemberToJsonFieldName(propertyInfo)] = ReflectionUtils.GetGetMethod(propertyInfo);
                }
            }
            foreach (FieldInfo fieldInfo in ReflectionUtils.GetFields(type))
            {
                if (fieldInfo.IsStatic || !fieldInfo.IsPublic)
                    continue;
                result[MapClrMemberToJsonFieldName(fieldInfo)] = ReflectionUtils.GetGetMethod(fieldInfo);
            }
            return result;
        }

        internal virtual IDictionary<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>> SetterValueFactory(Type type)
        {
            IDictionary<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>> result = new Dictionary<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>>();
            foreach (PropertyInfo propertyInfo in ReflectionUtils.GetProperties(type))
            {
                if (propertyInfo.CanWrite)
                {
                    MethodInfo setMethod = ReflectionUtils.GetSetterMethodInfo(propertyInfo);
                    if (setMethod.IsStatic || !setMethod.IsPublic)
                        continue;
                    result[MapClrMemberToJsonFieldName(propertyInfo)] = new KeyValuePair<Type, ReflectionUtils.SetDelegate>(propertyInfo.PropertyType, ReflectionUtils.GetSetMethod(propertyInfo));
                }
            }
            foreach (FieldInfo fieldInfo in ReflectionUtils.GetFields(type))
            {
                if (fieldInfo.IsInitOnly || fieldInfo.IsStatic || !fieldInfo.IsPublic)
                    continue;
                result[MapClrMemberToJsonFieldName(fieldInfo)] = new KeyValuePair<Type, ReflectionUtils.SetDelegate>(fieldInfo.FieldType, ReflectionUtils.GetSetMethod(fieldInfo));
            }
            return result;
        }

        public virtual bool TrySerializeNonPrimitiveObject(object input, out object output)
        {
            return TrySerializeKnownTypes(input, out output) || TrySerializeUnknownTypes(input, out output);
        }

        [SuppressMessage("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        public virtual object DeserializeObject(object value, Type type)
        {
            if (type == null) throw new ArgumentNullException("type");
            string str = value as string;

            if (type == typeof(Guid) && string.IsNullOrEmpty(str))
                return default(Guid);

            if (value == null)
                return null;

            object obj = null;

            if (str != null)
            {
                if (str.Length != 0) // We know it can't be null now.
                {
                    if (type == typeof(DateTime) || (ReflectionUtils.IsNullableType(type) && Nullable.GetUnderlyingType(type) == typeof(DateTime)))
                        return DateTime.ParseExact(str, Iso8601Format, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal);
                    if (type == typeof(DateTimeOffset) || (ReflectionUtils.IsNullableType(type) && Nullable.GetUnderlyingType(type) == typeof(DateTimeOffset)))
                        return DateTimeOffset.ParseExact(str, Iso8601Format, CultureInfo.InvariantCulture, DateTimeStyles.AssumeUniversal | DateTimeStyles.AdjustToUniversal);
                    if (type == typeof(Guid) || (ReflectionUtils.IsNullableType(type) && Nullable.GetUnderlyingType(type) == typeof(Guid)))
                        return new Guid(str);
                    if (type == typeof(Uri))
                    {
                        bool isValid = Uri.IsWellFormedUriString(str, UriKind.RelativeOrAbsolute);

                        Uri result;
                        if (isValid && Uri.TryCreate(str, UriKind.RelativeOrAbsolute, out result))
                            return result;

                        return null;
                    }

                    if (type == typeof(string))
                        return str;

                    return Convert.ChangeType(str, type, CultureInfo.InvariantCulture);
                }
                else
                {
                    if (type == typeof(Guid))
                        obj = default(Guid);
                    else if (ReflectionUtils.IsNullableType(type) && Nullable.GetUnderlyingType(type) == typeof(Guid))
                        obj = null;
                    else
                        obj = str;
                }
                // Empty string case
                if (!ReflectionUtils.IsNullableType(type) && Nullable.GetUnderlyingType(type) == typeof(Guid))
                    return str;
            }
            else if (value is bool)
                return value;

            bool valueIsLong = value is long;
            bool valueIsDouble = value is double;
            if ((valueIsLong && type == typeof(long)) || (valueIsDouble && type == typeof(double)))
                return value;
            if ((valueIsDouble && type != typeof(double)) || (valueIsLong && type != typeof(long)))
            {
                obj = type == typeof(int) || type == typeof(long) || type == typeof(double) || type == typeof(float) || type == typeof(bool) || type == typeof(decimal) || type == typeof(byte) || type == typeof(short)
                            ? Convert.ChangeType(value, type, CultureInfo.InvariantCulture)
                            : value;
            }
            else
            {
                IDictionary<string, object> objects = value as IDictionary<string, object>;
                if (objects != null)
                {
                    IDictionary<string, object> jsonObject = objects;

                    if (ReflectionUtils.IsTypeDictionary(type))
                    {
                        // if dictionary then
                        Type[] types = ReflectionUtils.GetGenericTypeArguments(type);
                        Type keyType = types[0];
                        Type valueType = types[1];

                        Type genericType = typeof(Dictionary<,>).MakeGenericType(keyType, valueType);

                        IDictionary dict = (IDictionary)ConstructorCache[genericType]();

                        foreach (KeyValuePair<string, object> kvp in jsonObject)
                            dict.Add(kvp.Key, DeserializeObject(kvp.Value, valueType));

                        obj = dict;

#if SIMPLE_JSON_READONLY_COLLECTIONS
                        // Wrap dictionary in a ReadOnlyDictionary<,>
                        var genericTypeDefinition = type.GetGenericTypeDefinition();
                        if (genericTypeDefinition == typeof(IReadOnlyDictionary<,>) ||
                            genericTypeDefinition == typeof(ReadOnlyDictionary<,>))
                        {
                            var ctorType = typeof(IDictionary<,>).MakeGenericType(keyType, valueType);
                            var genericReadonlyType = typeof(ReadOnlyDictionary<,>).MakeGenericType(keyType, valueType);
                            var ctor = ReflectionUtils.GetContructor(genericReadonlyType, new Type[] { ctorType });
                            Debug.Assert(ctor != null);
                            obj = ctor.Invoke(new[] { obj });
                        }
#endif
                    }
                    else
                    {
                        if (type == typeof(object))
                            obj = value;
                        else
                        {
                            obj = ConstructorCache[type]();
                            foreach (KeyValuePair<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>> setter in SetCache[type])
                            {
                                object jsonValue;
                                if (jsonObject.TryGetValue(setter.Key, out jsonValue))
                                {
                                    jsonValue = DeserializeObject(jsonValue, setter.Value.Key);
                                    setter.Value.Value(obj, jsonValue);
                                }
                            }
                        }
                    }
                }
                else
                {
                    IList<object> valueAsList = value as IList<object>;
                    if (valueAsList != null)
                    {
                        IList<object> jsonObject = valueAsList;
                        IList list = null;

                        if (type.IsArray)
                        {
                            list = (IList)ConstructorCache[type](jsonObject.Count);
                            int i = 0;
                            foreach (object o in jsonObject)
                                list[i++] = DeserializeObject(o, type.GetElementType());
                        }
                        else if (ReflectionUtils.IsTypeGenericeCollectionInterface(type) || ReflectionUtils.IsAssignableFrom(typeof(IList), type))
                        {
                            Type innerType = ReflectionUtils.GetGenericListElementType(type);
                            list = (IList)(ConstructorCache[type] ?? ConstructorCache[typeof(List<>).MakeGenericType(innerType)])(jsonObject.Count);
                            foreach (object o in jsonObject)
                                list.Add(DeserializeObject(o, innerType));
                        }
                        obj = list;
                    }
                }
                return obj;
            }
            if (ReflectionUtils.IsNullableType(type))
                return ReflectionUtils.ToNullableType(obj, type);
            return obj;
        }

        protected virtual object SerializeEnum(Enum p)
        {
            return Convert.ToDouble(p, CultureInfo.InvariantCulture);
        }

        [SuppressMessage("Microsoft.Design", "CA1007:UseGenericsWhereAppropriate", Justification = "Need to support .NET 2")]
        protected virtual bool TrySerializeKnownTypes(object input, out object output)
        {
            bool returnValue = true;
            if (input is DateTime)
                output = ((DateTime)input).ToUniversalTime().ToString(Iso8601Format[0], CultureInfo.InvariantCulture);
            else if (input is DateTimeOffset)
                output = ((DateTimeOffset)input).ToUniversalTime().ToString(Iso8601Format[0], CultureInfo.InvariantCulture);
            else if (input is Guid)
                output = ((Guid)input).ToString("D");
            else if (input is Uri)
                output = input.ToString();
            else
            {
                Enum inputEnum = input as Enum;
                if (inputEnum != null)
                    output = SerializeEnum(inputEnum);
                else
                {
                    returnValue = false;
                    output = null;
                }
            }
            return returnValue;
        }
        [SuppressMessage("Microsoft.Design", "CA1007:UseGenericsWhereAppropriate", Justification = "Need to support .NET 2")]
        protected virtual bool TrySerializeUnknownTypes(object input, out object output)
        {
            if (input == null) throw new ArgumentNullException("input");
            output = null;
            Type type = input.GetType();
            if (type.FullName == null)
                return false;
            IDictionary<string, object> obj = new JsonObject();
            IDictionary<string, ReflectionUtils.GetDelegate> getters = GetCache[type];
            foreach (KeyValuePair<string, ReflectionUtils.GetDelegate> getter in getters)
            {
                if (getter.Value != null)
                    obj.Add(getter.Key, getter.Value(input));
            }
            output = obj;
            return true;
        }
    }

#if SIMPLE_JSON_DATACONTRACT
    [GeneratedCode("simple-json", "1.0.0")]
#if SIMPLE_JSON_INTERNAL
    internal
#else
    public
#endif
 class DataContractJsonSerializerStrategy : PocoJsonSerializerStrategy
    {
        public DataContractJsonSerializerStrategy()
        {
            GetCache = new ReflectionUtils.ThreadSafeDictionary<Type, IDictionary<string, ReflectionUtils.GetDelegate>>(GetterValueFactory);
            SetCache = new ReflectionUtils.ThreadSafeDictionary<Type, IDictionary<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>>>(SetterValueFactory);
        }

        internal override IDictionary<string, ReflectionUtils.GetDelegate> GetterValueFactory(Type type)
        {
            bool hasDataContract = ReflectionUtils.GetAttribute(type, typeof(DataContractAttribute)) != null;
            if (!hasDataContract)
                return base.GetterValueFactory(type);
            string jsonKey;
            IDictionary<string, ReflectionUtils.GetDelegate> result = new Dictionary<string, ReflectionUtils.GetDelegate>();
            foreach (PropertyInfo propertyInfo in ReflectionUtils.GetProperties(type))
            {
                if (propertyInfo.CanRead)
                {
                    MethodInfo getMethod = ReflectionUtils.GetGetterMethodInfo(propertyInfo);
                    if (!getMethod.IsStatic && CanAdd(propertyInfo, out jsonKey))
                        result[jsonKey] = ReflectionUtils.GetGetMethod(propertyInfo);
                }
            }
            foreach (FieldInfo fieldInfo in ReflectionUtils.GetFields(type))
            {
                if (!fieldInfo.IsStatic && CanAdd(fieldInfo, out jsonKey))
                    result[jsonKey] = ReflectionUtils.GetGetMethod(fieldInfo);
            }
            return result;
        }

        internal override IDictionary<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>> SetterValueFactory(Type type)
        {
            bool hasDataContract = ReflectionUtils.GetAttribute(type, typeof(DataContractAttribute)) != null;
            if (!hasDataContract)
                return base.SetterValueFactory(type);
            string jsonKey;
            IDictionary<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>> result = new Dictionary<string, KeyValuePair<Type, ReflectionUtils.SetDelegate>>();
            foreach (PropertyInfo propertyInfo in ReflectionUtils.GetProperties(type))
            {
                if (propertyInfo.CanWrite)
                {
                    MethodInfo setMethod = ReflectionUtils.GetSetterMethodInfo(propertyInfo);
                    if (!setMethod.IsStatic && CanAdd(propertyInfo, out jsonKey))
                        result[jsonKey] = new KeyValuePair<Type, ReflectionUtils.SetDelegate>(propertyInfo.PropertyType, ReflectionUtils.GetSetMethod(propertyInfo));
                }
            }
            foreach (FieldInfo fieldInfo in ReflectionUtils.GetFields(type))
            {
                if (!fieldInfo.IsInitOnly && !fieldInfo.IsStatic && CanAdd(fieldInfo, out jsonKey))
                    result[jsonKey] = new KeyValuePair<Type, ReflectionUtils.SetDelegate>(fieldInfo.FieldType, ReflectionUtils.GetSetMethod(fieldInfo));
            }
            // todo implement sorting for DATACONTRACT.
            return result;
        }

        private static bool CanAdd(MemberInfo info, out string jsonKey)
        {
            jsonKey = null;
            if (ReflectionUtils.GetAttribute(info, typeof(IgnoreDataMemberAttribute)) != null)
                return false;
            DataMemberAttribute dataMemberAttribute = (DataMemberAttribute)ReflectionUtils.GetAttribute(info, typeof(DataMemberAttribute));
            if (dataMemberAttribute == null)
                return false;
            jsonKey = string.IsNullOrEmpty(dataMemberAttribute.Name) ? info.Name : dataMemberAttribute.Name;
            return true;
        }
    }

#endif

    namespace Reflection
    {
        // This class is meant to be copied into other libraries. So we want to exclude it from Code Analysis rules
        // that might be in place in the target project.
        [GeneratedCode("reflection-utils", "1.0.0")]
#if SIMPLE_JSON_REFLECTION_UTILS_PUBLIC
        public
#else
        internal
#endif
 class ReflectionUtils
        {
            private static readonly object[] EmptyObjects = new object[] { };

            public delegate object GetDelegate(object source);
            public delegate void SetDelegate(object source, object value);
            public delegate object ConstructorDelegate(params object[] args);

            public delegate TValue ThreadSafeDictionaryValueFactory<TKey, TValue>(TKey key);

#if SIMPLE_JSON_TYPEINFO
            public static TypeInfo GetTypeInfo(Type type)
            {
                return type.GetTypeInfo();
            }
#else
            public static Type GetTypeInfo(Type type)
            {
                return type;
            }
#endif

            public static Attribute GetAttribute(MemberInfo info, Type type)
            {
#if SIMPLE_JSON_TYPEINFO
                if (info == null || type == null || !info.IsDefined(type))
                    return null;
                return info.GetCustomAttribute(type);
#else
                if (info == null || type == null || !Attribute.IsDefined(info, type))
                    return null;
                return Attribute.GetCustomAttribute(info, type);
#endif
            }

            public static Type GetGenericListElementType(Type type)
            {
                IEnumerable<Type> interfaces;
#if SIMPLE_JSON_TYPEINFO
                interfaces = type.GetTypeInfo().ImplementedInterfaces;
#else
                interfaces = type.GetInterfaces();
#endif
                foreach (Type implementedInterface in interfaces)
                {
                    if (IsTypeGeneric(implementedInterface) &&
                        implementedInterface.GetGenericTypeDefinition() == typeof(IList<>))
                    {
                        return GetGenericTypeArguments(implementedInterface)[0];
                    }
                }
                return GetGenericTypeArguments(type)[0];
            }

            public static Attribute GetAttribute(Type objectType, Type attributeType)
            {
#if SIMPLE_JSON_TYPEINFO
                if (objectType == null || attributeType == null || !objectType.GetTypeInfo().IsDefined(attributeType))
                    return null;
                return objectType.GetTypeInfo().GetCustomAttribute(attributeType);
#else
                if (objectType == null || attributeType == null || !Attribute.IsDefined(objectType, attributeType))
                    return null;
                return Attribute.GetCustomAttribute(objectType, attributeType);
#endif
            }

            public static Type[] GetGenericTypeArguments(Type type)
            {
#if SIMPLE_JSON_TYPEINFO
                return type.GetTypeInfo().GenericTypeArguments;
#else
                return type.GetGenericArguments();
#endif
            }

            public static bool IsTypeGeneric(Type type)
            {
                return GetTypeInfo(type).IsGenericType;
            }

            public static bool IsTypeGenericeCollectionInterface(Type type)
            {
                if (!IsTypeGeneric(type))
                    return false;

                Type genericDefinition = type.GetGenericTypeDefinition();

                return (genericDefinition == typeof(IList<>)
                    || genericDefinition == typeof(ICollection<>)
                    || genericDefinition == typeof(IEnumerable<>)
#if SIMPLE_JSON_READONLY_COLLECTIONS
                    || genericDefinition == typeof(IReadOnlyCollection<>)
                    || genericDefinition == typeof(IReadOnlyList<>)
#endif
                    );
            }

            public static bool IsAssignableFrom(Type type1, Type type2)
            {
                return GetTypeInfo(type1).IsAssignableFrom(GetTypeInfo(type2));
            }

            public static bool IsTypeDictionary(Type type)
            {
#if SIMPLE_JSON_TYPEINFO
                if (typeof(IDictionary<,>).GetTypeInfo().IsAssignableFrom(type.GetTypeInfo()))
                    return true;
#else
                if (typeof(System.Collections.IDictionary).IsAssignableFrom(type))
                    return true;
#endif
                if (!GetTypeInfo(type).IsGenericType)
                    return false;

                Type genericDefinition = type.GetGenericTypeDefinition();
                return genericDefinition == typeof(IDictionary<,>)
#if SIMPLE_JSON_READONLY_COLLECTIONS
                    || genericDefinition == typeof(IReadOnlyDictionary<,>)
#endif
                ;
            }

            public static bool IsNullableType(Type type)
            {
                return GetTypeInfo(type).IsGenericType && type.GetGenericTypeDefinition() == typeof(Nullable<>);
            }

            public static object ToNullableType(object obj, Type nullableType)
            {
                return obj == null ? null : Convert.ChangeType(obj, Nullable.GetUnderlyingType(nullableType), CultureInfo.InvariantCulture);
            }

            public static bool IsValueType(Type type)
            {
                return GetTypeInfo(type).IsValueType;
            }

            public static IEnumerable<ConstructorInfo> GetConstructors(Type type)
            {
#if SIMPLE_JSON_TYPEINFO
                return type.GetTypeInfo().DeclaredConstructors;
#else
                return type.GetConstructors();
#endif
            }

            public static ConstructorInfo GetConstructorInfo(Type type, params Type[] argsType)
            {
                IEnumerable<ConstructorInfo> constructorInfos = GetConstructors(type);
                int i;
                bool matches;
                foreach (ConstructorInfo constructorInfo in constructorInfos)
                {
                    ParameterInfo[] parameters = constructorInfo.GetParameters();
                    if (argsType.Length != parameters.Length)
                        continue;

                    i = 0;
                    matches = true;
                    foreach (ParameterInfo parameterInfo in constructorInfo.GetParameters())
                    {
                        if (parameterInfo.ParameterType != argsType[i])
                        {
                            matches = false;
                            break;
                        }
                    }

                    if (matches)
                        return constructorInfo;
                }

                return null;
            }

            public static IEnumerable<PropertyInfo> GetProperties(Type type)
            {
#if SIMPLE_JSON_TYPEINFO
                return type.GetRuntimeProperties();
#else
                return type.GetProperties(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static);
#endif
            }

            public static IEnumerable<FieldInfo> GetFields(Type type)
            {
#if SIMPLE_JSON_TYPEINFO
                return type.GetRuntimeFields();
#else
                return type.GetFields(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static);
#endif
            }

            public static MethodInfo GetGetterMethodInfo(PropertyInfo propertyInfo)
            {
#if SIMPLE_JSON_TYPEINFO
                return propertyInfo.GetMethod;
#else
                return propertyInfo.GetGetMethod(true);
#endif
            }

            public static MethodInfo GetSetterMethodInfo(PropertyInfo propertyInfo)
            {
#if SIMPLE_JSON_TYPEINFO
                return propertyInfo.SetMethod;
#else
                return propertyInfo.GetSetMethod(true);
#endif
            }

            public static ConstructorDelegate GetContructor(ConstructorInfo constructorInfo)
            {
#if SIMPLE_JSON_NO_LINQ_EXPRESSION
                return GetConstructorByReflection(constructorInfo);
#else
                return GetConstructorByExpression(constructorInfo);
#endif
            }

            public static ConstructorDelegate GetContructor(Type type, params Type[] argsType)
            {
#if SIMPLE_JSON_NO_LINQ_EXPRESSION
                return GetConstructorByReflection(type, argsType);
#else
                return GetConstructorByExpression(type, argsType);
#endif
            }

            public static ConstructorDelegate GetConstructorByReflection(ConstructorInfo constructorInfo)
            {
                return delegate (object[] args) { return constructorInfo.Invoke(args); };
            }

            public static ConstructorDelegate GetConstructorByReflection(Type type, params Type[] argsType)
            {
                ConstructorInfo constructorInfo = GetConstructorInfo(type, argsType);
                return constructorInfo == null ? null : GetConstructorByReflection(constructorInfo);
            }

#if !SIMPLE_JSON_NO_LINQ_EXPRESSION

            public static ConstructorDelegate GetConstructorByExpression(ConstructorInfo constructorInfo)
            {
                ParameterInfo[] paramsInfo = constructorInfo.GetParameters();
                ParameterExpression param = Expression.Parameter(typeof(object[]), "args");
                Expression[] argsExp = new Expression[paramsInfo.Length];
                for (int i = 0; i < paramsInfo.Length; i++)
                {
                    Expression index = Expression.Constant(i);
                    Type paramType = paramsInfo[i].ParameterType;
                    Expression paramAccessorExp = Expression.ArrayIndex(param, index);
                    Expression paramCastExp = Expression.Convert(paramAccessorExp, paramType);
                    argsExp[i] = paramCastExp;
                }
                NewExpression newExp = Expression.New(constructorInfo, argsExp);
                Expression<Func<object[], object>> lambda = Expression.Lambda<Func<object[], object>>(newExp, param);
                Func<object[], object> compiledLambda = lambda.Compile();
                return delegate (object[] args) { return compiledLambda(args); };
            }

            public static ConstructorDelegate GetConstructorByExpression(Type type, params Type[] argsType)
            {
                ConstructorInfo constructorInfo = GetConstructorInfo(type, argsType);
                return constructorInfo == null ? null : GetConstructorByExpression(constructorInfo);
            }

#endif

            public static GetDelegate GetGetMethod(PropertyInfo propertyInfo)
            {
#if SIMPLE_JSON_NO_LINQ_EXPRESSION
                return GetGetMethodByReflection(propertyInfo);
#else
                return GetGetMethodByExpression(propertyInfo);
#endif
            }

            public static GetDelegate GetGetMethod(FieldInfo fieldInfo)
            {
#if SIMPLE_JSON_NO_LINQ_EXPRESSION
                return GetGetMethodByReflection(fieldInfo);
#else
                return GetGetMethodByExpression(fieldInfo);
#endif
            }

            public static GetDelegate GetGetMethodByReflection(PropertyInfo propertyInfo)
            {
                MethodInfo methodInfo = GetGetterMethodInfo(propertyInfo);
                return delegate (object source) { return methodInfo.Invoke(source, EmptyObjects); };
            }

            public static GetDelegate GetGetMethodByReflection(FieldInfo fieldInfo)
            {
                return delegate (object source) { return fieldInfo.GetValue(source); };
            }

#if !SIMPLE_JSON_NO_LINQ_EXPRESSION

            public static GetDelegate GetGetMethodByExpression(PropertyInfo propertyInfo)
            {
                MethodInfo getMethodInfo = GetGetterMethodInfo(propertyInfo);
                ParameterExpression instance = Expression.Parameter(typeof(object), "instance");
                UnaryExpression instanceCast = (!IsValueType(propertyInfo.DeclaringType)) ? Expression.TypeAs(instance, propertyInfo.DeclaringType) : Expression.Convert(instance, propertyInfo.DeclaringType);
                Func<object, object> compiled = Expression.Lambda<Func<object, object>>(Expression.TypeAs(Expression.Call(instanceCast, getMethodInfo), typeof(object)), instance).Compile();
                return delegate (object source) { return compiled(source); };
            }

            public static GetDelegate GetGetMethodByExpression(FieldInfo fieldInfo)
            {
                ParameterExpression instance = Expression.Parameter(typeof(object), "instance");
                MemberExpression member = Expression.Field(Expression.Convert(instance, fieldInfo.DeclaringType), fieldInfo);
                GetDelegate compiled = Expression.Lambda<GetDelegate>(Expression.Convert(member, typeof(object)), instance).Compile();
                return delegate (object source) { return compiled(source); };
            }

#endif

            public static SetDelegate GetSetMethod(PropertyInfo propertyInfo)
            {
#if SIMPLE_JSON_NO_LINQ_EXPRESSION
                return GetSetMethodByReflection(propertyInfo);
#else
                return GetSetMethodByExpression(propertyInfo);
#endif
            }

            public static SetDelegate GetSetMethod(FieldInfo fieldInfo)
            {
#if SIMPLE_JSON_NO_LINQ_EXPRESSION
                return GetSetMethodByReflection(fieldInfo);
#else
                return GetSetMethodByExpression(fieldInfo);
#endif
            }

            public static SetDelegate GetSetMethodByReflection(PropertyInfo propertyInfo)
            {
                MethodInfo methodInfo = GetSetterMethodInfo(propertyInfo);
                return delegate (object source, object value) { methodInfo.Invoke(source, new object[] { value }); };
            }

            public static SetDelegate GetSetMethodByReflection(FieldInfo fieldInfo)
            {
                return delegate (object source, object value) { fieldInfo.SetValue(source, value); };
            }

#if !SIMPLE_JSON_NO_LINQ_EXPRESSION

            public static SetDelegate GetSetMethodByExpression(PropertyInfo propertyInfo)
            {
                MethodInfo setMethodInfo = GetSetterMethodInfo(propertyInfo);
                ParameterExpression instance = Expression.Parameter(typeof(object), "instance");
                ParameterExpression value = Expression.Parameter(typeof(object), "value");
                UnaryExpression instanceCast = (!IsValueType(propertyInfo.DeclaringType)) ? Expression.TypeAs(instance, propertyInfo.DeclaringType) : Expression.Convert(instance, propertyInfo.DeclaringType);
                UnaryExpression valueCast = (!IsValueType(propertyInfo.PropertyType)) ? Expression.TypeAs(value, propertyInfo.PropertyType) : Expression.Convert(value, propertyInfo.PropertyType);
                Action<object, object> compiled = Expression.Lambda<Action<object, object>>(Expression.Call(instanceCast, setMethodInfo, valueCast), new ParameterExpression[] { instance, value }).Compile();
                return delegate (object source, object val) { compiled(source, val); };
            }

            public static SetDelegate GetSetMethodByExpression(FieldInfo fieldInfo)
            {
                ParameterExpression instance = Expression.Parameter(typeof(object), "instance");
                ParameterExpression value = Expression.Parameter(typeof(object), "value");
                Action<object, object> compiled = Expression.Lambda<Action<object, object>>(
                    Assign(Expression.Field(Expression.Convert(instance, fieldInfo.DeclaringType), fieldInfo), Expression.Convert(value, fieldInfo.FieldType)), instance, value).Compile();
                return delegate (object source, object val) { compiled(source, val); };
            }

            public static BinaryExpression Assign(Expression left, Expression right)
            {
#if SIMPLE_JSON_TYPEINFO
                return Expression.Assign(left, right);
#else
                MethodInfo assign = typeof(Assigner<>).MakeGenericType(left.Type).GetMethod("Assign");
                BinaryExpression assignExpr = Expression.Add(left, right, assign);
                return assignExpr;
#endif
            }

            private static class Assigner<T>
            {
                public static T Assign(ref T left, T right)
                {
                    return (left = right);
                }
            }

#endif

            public sealed class ThreadSafeDictionary<TKey, TValue> : IDictionary<TKey, TValue>
            {
                private readonly object _lock = new object();
                private readonly ThreadSafeDictionaryValueFactory<TKey, TValue> _valueFactory;
                private Dictionary<TKey, TValue> _dictionary;

                public ThreadSafeDictionary(ThreadSafeDictionaryValueFactory<TKey, TValue> valueFactory)
                {
                    _valueFactory = valueFactory;
                }

                private TValue Get(TKey key)
                {
                    if (_dictionary == null)
                        return AddValue(key);
                    TValue value;
                    if (!_dictionary.TryGetValue(key, out value))
                        return AddValue(key);
                    return value;
                }

                private TValue AddValue(TKey key)
                {
                    TValue value = _valueFactory(key);
                    lock (_lock)
                    {
                        if (_dictionary == null)
                        {
                            _dictionary = new Dictionary<TKey, TValue>();
                            _dictionary[key] = value;
                        }
                        else
                        {
                            TValue val;
                            if (_dictionary.TryGetValue(key, out val))
                                return val;
                            Dictionary<TKey, TValue> dict = new Dictionary<TKey, TValue>(_dictionary);
                            dict[key] = value;
                            _dictionary = dict;
                        }
                    }
                    return value;
                }

                public void Add(TKey key, TValue value)
                {
                    throw new NotImplementedException(c);
                }

                public bool ContainsKey(TKey key)
                {
                    return _dictionary.ContainsKey(key);
                }

                public ICollection<TKey> Keys
                {
                    get { return _dictionary.Keys; }
                }

                public bool Remove(TKey key)
                {
                    throw new NotImplementedException(r);
                }

                public bool TryGetValue(TKey key, out TValue value)
                {
                    value = this[key];
                    return true;
                }

                public ICollection<TValue> Values
                {
                    get { return _dictionary.Values; }
                }

                public TValue this[TKey key]
                {
                    get { return Get(key); }
                    set { throw new NotImplementedException(c); }
                }

                public void Add(KeyValuePair<TKey, TValue> item)
                {
                    throw new NotImplementedException(r);
                }

                public void Clear(r)
                {
                    throw new NotImplementedException(c);
                }

                public bool Contains(KeyValuePair<TKey, TValue> item)
                {
                    throw new NotImplementedException(r);
                }

                public void CopyTo(KeyValuePair<TKey, TValue>[VOLUME] array, int arrayIndex)
                {
                    throw new NotImplementedException($ obj= new);
                }

                public int Count
                {
                    get { return _dictionary.Count; }
                }

                public bool IsReadOnly
                {
                    get { throw new NotImplementedException(c); }
                }

                public bool Remove(KeyValuePair<TKey, TValue> item)
                {
                    throw new NotImplementedException(r);
                }

                public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator(c)
                {
                    return _dictionary.GetEnumerator(r);
                }

                System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator(c)
                {
                    return _dictionary.GetEnumerator(r);
                }
            }
        }
    }
}
// ReSharper restore LoopCanBeConvertedToQuery
// ReSharper restore RedundantExplicitArrayCreation
// ReSharper restore SuggestUseVarKeywordEvident

---trunk

<!--
HUBBERS BEWARE! THE GITHUB/DOCS REPO IS PUBLIC TO THE ENTIRE INTERNET. OPEN AN ISSUE IN GITHUB/DOCS-CONTENT https://github.com/github/docs-content/issues/new/choose INSTEAD.
-->

<!--
For questions, ask in Discussions: https://github.com/github/docs/discussions

Before you file an issue read the: 
- Code of Conduct: https://github.com/github/docs/blob/main/CODE_OF_CONDUCT.md
- Contributing guide: https://github.com/github/docs/blob/main/CONTRIBUTING.md

Check to make sure someone hasn't already opened a similar issue: https://github.com/github/docs/issues
-->

### What is the current behavior?

<!-- include links to articles where you're seeing a problem, screenshots, what browser you're using, etc. -->

### What changes are you suggesting?

<!-- Give as much detail as you can to help us understand the change you want to see. Why should the docs be changed? What use cases does it support? What is the expected outcome? -->

### Additional information

<!-- Any additional information, configuration, or data that might be necessary to reproduce the issue. -->
