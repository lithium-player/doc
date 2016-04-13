var searchIndex = {};
searchIndex['liquery_file'] = {"items":[],"paths":[]};
searchIndex['mime_guess'] = {"items":[[5,"guess_mime_type","mime_guess","Guess the MIME type of `path` by its extension (as defined by `Path::extension()`).",null,{"inputs":[{"name":"p"}],"output":{"name":"mime"}}],[5,"guess_mime_type_opt","","Guess the MIME type of `path` by its extension (as defined by `Path::extension()`).",null,{"inputs":[{"name":"p"}],"output":{"name":"option"}}],[5,"get_mime_type","","Get the MIME type associated with a file extension.",null,{"inputs":[{"name":"str"}],"output":{"name":"mime"}}],[5,"get_mime_type_opt","","Get the MIME type associated with a file extension.",null,{"inputs":[{"name":"str"}],"output":{"name":"option"}}],[5,"get_mime_type_str","","Get the MIME type string associated with a file extension. Case-insensitive.",null,{"inputs":[{"name":"str"}],"output":{"name":"option"}}],[5,"octet_stream","","Get the MIME type for `application/octet-stream` (generic binary stream)",null,{"inputs":[],"output":{"name":"mime"}}]],"paths":[]};
searchIndex['phf'] = {"items":[[8,"PhfHash","phf","A trait implemented by types which can be used in PHF data structures.",null,null],[10,"phf_hash","","Feeds the value into the state given, updating the hasher as necessary.",0,null],[11,"phf_hash_slice","","Feeds a slice of this type into the state provided.",0,null],[3,"Map","","An immutable map constructed at compile time.",null,null],[3,"Set","","An immutable set constructed at compile time.",null,null],[3,"OrderedMap","","An order-preserving immutable map constructed at compile time.",null,null],[3,"OrderedSet","","An order-preserving immutable set constructed at compile time.",null,null],[0,"map","","An immutable map constructed at compile time.",null,null],[3,"Map","phf::map","An immutable map constructed at compile time.",null,null],[3,"Entries","","An iterator over the key/value pairs in a `Map`.",null,null],[3,"Keys","","An iterator over the keys in a `Map`.",null,null],[3,"Values","","An iterator over the values in a `Map`.",null,null],[11,"fmt","","",1,{"inputs":[{"name":"map"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"index","","",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"v"}}],[11,"is_empty","","Returns true if the `Map` is empty.",1,{"inputs":[{"name":"map"}],"output":{"name":"bool"}}],[11,"len","","Returns the number of entries in the `Map`.",1,{"inputs":[{"name":"map"}],"output":{"name":"usize"}}],[11,"contains_key","","Determines if `key` is in the `Map`.",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"bool"}}],[11,"get","","Returns a reference to the value that `key` maps to.",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"option"}}],[11,"get_key","","Returns a reference to the map's internal static instance of the given\nkey.",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"option"}}],[11,"get_entry","","Like `get`, but returns both the key and the value.",1,{"inputs":[{"name":"map"},{"name":"t"}],"output":{"name":"option"}}],[11,"entries","","Returns an iterator over the key/value pairs in the map.",1,{"inputs":[{"name":"map"}],"output":{"name":"entries"}}],[11,"keys","","Returns an iterator over the keys in the map.",1,{"inputs":[{"name":"map"}],"output":{"name":"keys"}}],[11,"values","","Returns an iterator over the values in the map.",1,{"inputs":[{"name":"map"}],"output":{"name":"values"}}],[11,"next","","",2,{"inputs":[{"name":"entries"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"next_back","","",2,{"inputs":[{"name":"entries"}],"output":{"name":"option"}}],[11,"next","","",3,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"next_back","","",3,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"next","","",4,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"next_back","","",4,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[0,"set","phf","An immutable set constructed at compile time.",null,null],[3,"Set","phf::set","An immutable set constructed at compile time.",null,null],[3,"Iter","","An iterator over the values in a `Set`.",null,null],[11,"fmt","","",5,{"inputs":[{"name":"set"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","Returns the number of elements in the `Set`.",5,{"inputs":[{"name":"set"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the `Set` contains no elements.",5,{"inputs":[{"name":"set"}],"output":{"name":"bool"}}],[11,"get_key","","Returns a reference to the set's internal static instance of the given\nkey.",5,{"inputs":[{"name":"set"},{"name":"u"}],"output":{"name":"option"}}],[11,"contains","","Returns true if `value` is in the `Set`.",5,{"inputs":[{"name":"set"},{"name":"u"}],"output":{"name":"bool"}}],[11,"iter","","Returns an iterator over the values in the set.",5,{"inputs":[{"name":"set"}],"output":{"name":"iter"}}],[11,"is_disjoint","","Returns true if `other` shares no elements with `self`.",5,{"inputs":[{"name":"set"},{"name":"set"}],"output":{"name":"bool"}}],[11,"is_subset","","Returns true if `other` contains all values in `self`.",5,{"inputs":[{"name":"set"},{"name":"set"}],"output":{"name":"bool"}}],[11,"is_superset","","Returns true if `self` contains all values in `other`.",5,{"inputs":[{"name":"set"},{"name":"set"}],"output":{"name":"bool"}}],[11,"next","","",6,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"next_back","","",6,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[0,"ordered_map","phf","An order-preserving immutable map constructed at compile time.",null,null],[3,"OrderedMap","phf::ordered_map","An order-preserving immutable map constructed at compile time.",null,null],[3,"Entries","","An iterator over the entries in a `OrderedMap`.",null,null],[3,"Keys","","An iterator over the keys in a `OrderedMap`.",null,null],[3,"Values","","An iterator over the values in a `OrderedMap`.",null,null],[11,"fmt","","",7,{"inputs":[{"name":"orderedmap"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"index","","",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"v"}}],[11,"len","","Returns the number of entries in the `Map`.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the `Map` is empty.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"bool"}}],[11,"get","","Returns a reference to the value that `key` maps to.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"option"}}],[11,"get_key","","Returns a reference to the map's internal static instance of the given\nkey.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"option"}}],[11,"contains_key","","Determines if `key` is in the `Map`.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"bool"}}],[11,"get_index","","Returns the index of the key within the list used to initialize\nthe ordered map.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"option"}}],[11,"index","","Returns references to both the key and values at an index\nwithin the list used to initialize the ordered map. See `.get_index(key)`.",7,{"inputs":[{"name":"orderedmap"},{"name":"usize"}],"output":{"name":"option"}}],[11,"get_entry","","Like `get`, but returns both the key and the value.",7,{"inputs":[{"name":"orderedmap"},{"name":"t"}],"output":{"name":"option"}}],[11,"entries","","Returns an iterator over the key/value pairs in the map.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"entries"}}],[11,"keys","","Returns an iterator over the keys in the map.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"keys"}}],[11,"values","","Returns an iterator over the values in the map.",7,{"inputs":[{"name":"orderedmap"}],"output":{"name":"values"}}],[11,"next","","",8,{"inputs":[{"name":"entries"}],"output":{"name":"option"}}],[11,"size_hint","","",8,null],[11,"next_back","","",8,{"inputs":[{"name":"entries"}],"output":{"name":"option"}}],[11,"next","","",9,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"size_hint","","",9,null],[11,"next_back","","",9,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"next","","",10,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[11,"size_hint","","",10,null],[11,"next_back","","",10,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[0,"ordered_set","phf","An order-preserving immutable set constructed at compile time.",null,null],[3,"OrderedSet","phf::ordered_set","An order-preserving immutable set constructed at compile time.",null,null],[3,"Iter","","An iterator over the values in a `OrderedSet`.",null,null],[11,"fmt","","",11,{"inputs":[{"name":"orderedset"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","Returns the number of elements in the `OrderedSet`.",11,{"inputs":[{"name":"orderedset"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the `OrderedSet` contains no elements.",11,{"inputs":[{"name":"orderedset"}],"output":{"name":"bool"}}],[11,"get_key","","Returns a reference to the set's internal static instance of the given\nkey.",11,{"inputs":[{"name":"orderedset"},{"name":"u"}],"output":{"name":"option"}}],[11,"get_index","","Returns the index of the key within the list used to initialize\nthe ordered set.",11,{"inputs":[{"name":"orderedset"},{"name":"u"}],"output":{"name":"option"}}],[11,"index","","Returns a reference to the key at an index\nwithin the list used to initialize the ordered set. See `.get_index(key)`.",11,{"inputs":[{"name":"orderedset"},{"name":"usize"}],"output":{"name":"option"}}],[11,"contains","","Returns true if `value` is in the `Set`.",11,{"inputs":[{"name":"orderedset"},{"name":"u"}],"output":{"name":"bool"}}],[11,"iter","","Returns an iterator over the values in the set.",11,{"inputs":[{"name":"orderedset"}],"output":{"name":"iter"}}],[11,"is_disjoint","","Returns true if `other` shares no elements with `self`.",11,{"inputs":[{"name":"orderedset"},{"name":"orderedset"}],"output":{"name":"bool"}}],[11,"is_subset","","Returns true if `other` contains all values in `self`.",11,{"inputs":[{"name":"orderedset"},{"name":"orderedset"}],"output":{"name":"bool"}}],[11,"is_superset","","Returns true if `self` contains all values in `other`.",11,{"inputs":[{"name":"orderedset"},{"name":"orderedset"}],"output":{"name":"bool"}}],[11,"next","","",12,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",12,null],[11,"next_back","","",12,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}]],"paths":[[8,"PhfHash"],[3,"Map"],[3,"Entries"],[3,"Keys"],[3,"Values"],[3,"Set"],[3,"Iter"],[3,"OrderedMap"],[3,"Entries"],[3,"Keys"],[3,"Values"],[3,"OrderedSet"],[3,"Iter"]]};
searchIndex['mime'] = {"items":[[3,"Mime","mime","Mime, or Media Type. Encapsulates common registers types.",null,null],[4,"TopLevel","","",null,null],[13,"Star","","",0,null],[13,"Text","","",0,null],[13,"Image","","",0,null],[13,"Audio","","",0,null],[13,"Video","","",0,null],[13,"Application","","",0,null],[13,"Multipart","","",0,null],[13,"Message","","",0,null],[13,"Model","","",0,null],[13,"Ext","","",0,null],[4,"SubLevel","","",null,null],[13,"Star","","",1,null],[13,"Plain","","",1,null],[13,"Html","","",1,null],[13,"Xml","","",1,null],[13,"Javascript","","",1,null],[13,"Css","","",1,null],[13,"EventStream","","",1,null],[13,"Json","","",1,null],[13,"WwwFormUrlEncoded","","",1,null],[13,"Msgpack","","",1,null],[13,"FormData","","",1,null],[13,"Png","","",1,null],[13,"Gif","","",1,null],[13,"Bmp","","",1,null],[13,"Jpeg","","",1,null],[13,"Ext","","",1,null],[4,"Attr","","",null,null],[13,"Charset","","",2,null],[13,"Boundary","","",2,null],[13,"Q","","",2,null],[13,"Ext","","",2,null],[4,"Value","","",null,null],[13,"Utf8","","",3,null],[13,"Ext","","",3,null],[6,"Param","","",null,null],[11,"hash","","",4,null],[11,"fmt","","",4,{"inputs":[{"name":"mime"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"mime"}],"output":{"name":"mime"}}],[11,"eq","","",4,{"inputs":[{"name":"mime"},{"name":"mime"}],"output":{"name":"bool"}}],[11,"hash","","",0,null],[11,"fmt","","",0,{"inputs":[{"name":"toplevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"toplevel"}],"output":{"name":"toplevel"}}],[11,"as_str","","",0,{"inputs":[{"name":"toplevel"}],"output":{"name":"str"}}],[11,"deref","","",0,{"inputs":[{"name":"toplevel"}],"output":{"name":"str"}}],[11,"eq","","",0,{"inputs":[{"name":"toplevel"},{"name":"toplevel"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"toplevel"},{"name":"string"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"toplevel"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"toplevel"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","collections::string","",5,{"inputs":[{"name":"string"},{"name":"toplevel"}],"output":{"name":"bool"}}],[11,"fmt","mime","",0,{"inputs":[{"name":"toplevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",0,{"inputs":[{"name":"toplevel"},{"name":"str"}],"output":{"name":"result"}}],[11,"hash","","",1,null],[11,"fmt","","",1,{"inputs":[{"name":"sublevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"sublevel"}],"output":{"name":"sublevel"}}],[11,"as_str","","",1,{"inputs":[{"name":"sublevel"}],"output":{"name":"str"}}],[11,"deref","","",1,{"inputs":[{"name":"sublevel"}],"output":{"name":"str"}}],[11,"eq","","",1,{"inputs":[{"name":"sublevel"},{"name":"sublevel"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"sublevel"},{"name":"string"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"sublevel"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"sublevel"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","collections::string","",5,{"inputs":[{"name":"string"},{"name":"sublevel"}],"output":{"name":"bool"}}],[11,"fmt","mime","",1,{"inputs":[{"name":"sublevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",1,{"inputs":[{"name":"sublevel"},{"name":"str"}],"output":{"name":"result"}}],[11,"hash","","",2,null],[11,"fmt","","",2,{"inputs":[{"name":"attr"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"attr"}],"output":{"name":"attr"}}],[11,"as_str","","",2,{"inputs":[{"name":"attr"}],"output":{"name":"str"}}],[11,"deref","","",2,{"inputs":[{"name":"attr"}],"output":{"name":"str"}}],[11,"eq","","",2,{"inputs":[{"name":"attr"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"eq","","",2,{"inputs":[{"name":"attr"},{"name":"string"}],"output":{"name":"bool"}}],[11,"eq","","",2,{"inputs":[{"name":"attr"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","","",2,{"inputs":[{"name":"attr"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","collections::string","",5,{"inputs":[{"name":"string"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"fmt","mime","",2,{"inputs":[{"name":"attr"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",2,{"inputs":[{"name":"attr"},{"name":"str"}],"output":{"name":"result"}}],[11,"hash","","",3,null],[11,"fmt","","",3,{"inputs":[{"name":"value"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"value"}],"output":{"name":"value"}}],[11,"as_str","","",3,{"inputs":[{"name":"value"}],"output":{"name":"str"}}],[11,"deref","","",3,{"inputs":[{"name":"value"}],"output":{"name":"str"}}],[11,"eq","","",3,{"inputs":[{"name":"value"},{"name":"value"}],"output":{"name":"bool"}}],[11,"eq","","",3,{"inputs":[{"name":"value"},{"name":"string"}],"output":{"name":"bool"}}],[11,"eq","","",3,{"inputs":[{"name":"value"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","","",3,{"inputs":[{"name":"value"},{"name":"str"}],"output":{"name":"bool"}}],[11,"eq","collections::string","",5,{"inputs":[{"name":"string"},{"name":"value"}],"output":{"name":"bool"}}],[11,"fmt","mime","",3,{"inputs":[{"name":"value"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",3,{"inputs":[{"name":"value"},{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"mime"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"get_param","","",4,{"inputs":[{"name":"mime"},{"name":"a"}],"output":{"name":"option"}}],[11,"from_str","","",4,{"inputs":[{"name":"mime"},{"name":"str"}],"output":{"name":"result"}}],[14,"mime!","","Easily create a Mime without having to import so many enums.",null,null]],"paths":[[4,"TopLevel"],[4,"SubLevel"],[4,"Attr"],[4,"Value"],[3,"Mime"],[3,"String"]]};
searchIndex['phf_shared'] = {"items":[[5,"displace","phf_shared","",null,{"inputs":[{"name":"u32"},{"name":"u32"},{"name":"u32"},{"name":"u32"}],"output":{"name":"u32"}}],[5,"split","","",null,null],[5,"hash","","`key` is from `phf_generator::HashState::key`.",null,{"inputs":[{"name":"t"},{"name":"u64"}],"output":{"name":"u64"}}],[5,"get_index","","Return an index into `phf_generator::HashState::map`.",null,null],[8,"PhfHash","","A trait implemented by types which can be used in PHF data structures.",null,null],[10,"phf_hash","","Feeds the value into the state given, updating the hasher as necessary.",0,{"inputs":[{"name":"phfhash"},{"name":"h"}],"output":null}],[11,"phf_hash_slice","","Feeds a slice of this type into the state provided.",0,null],[11,"phf_hash","collections::string","",1,{"inputs":[{"name":"string"},{"name":"h"}],"output":null}],[11,"phf_hash","collections::vec","",2,{"inputs":[{"name":"vec"},{"name":"h"}],"output":null}],[11,"phf_hash","unicase","",3,{"inputs":[{"name":"unicase"},{"name":"h"}],"output":null}]],"paths":[[8,"PhfHash"],[3,"String"],[3,"Vec"],[3,"UniCase"]]};
searchIndex['liquery'] = {"items":[[3,"QueryReturn","liquery","Result of a query",null,null],[3,"Query","","A parsed query ready for use with a `Context` and `Queryable`",null,null],[4,"ParseError","","Errors found in parsing query",null,null],[13,"UnknownEscape","","Unknown escape sequence.\nString contains the sequece",0,null],[13,"EscapeAtEndOfQuery","","Escape squence at end of query",0,null],[13,"VariableMissingClosing","","Variable is missing closing character",0,null],[13,"FuncMissingParameter","","Function is missing start of parameters",0,null],[13,"FuncParameterNotClosed","","Function parameters is missing closing character",0,null],[13,"EndOfQuery","","End of Query",0,null],[4,"EvalError","","Errors found while evaluating query",null,null],[13,"FunctionNotFound","","Function used is not in the current context\nString passed is the function name",1,null],[4,"Token","","AST tokens for the query string",null,null],[13,"Text","","Plain text with resolved escapes",2,null],[13,"Variable","","A named variable",2,null],[13,"Function","","A named function that has arguments",2,null],[13,"Scope","","A level of scope",2,null],[11,"fmt","","",0,{"inputs":[{"name":"parseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"parse","","",3,{"inputs":[{"name":"query"},{"name":"string"}],"output":{"name":"parseresult"}}],[11,"fmt","","",1,{"inputs":[{"name":"evalerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eval","","Evaluate the query with a queryable object to be based off and a\ncontext",3,{"inputs":[{"name":"query"},{"name":"queryable"},{"name":"context"}],"output":{"name":"evalresult"}}],[11,"eval","","Evaluate a token",2,{"inputs":[{"name":"token"},{"name":"queryable"},{"name":"context"}],"output":{"name":"evalresult"}}],[11,"query","std::collections::hash::map","",4,{"inputs":[{"name":"hashmap"},{"name":"str"}],"output":{"name":"option"}}],[11,"get_func","","",4,{"inputs":[{"name":"hashmap"},{"name":"str"}],"output":{"name":"option"}}],[11,"query","collections::btree::map","",5,{"inputs":[{"name":"btreemap"},{"name":"str"}],"output":{"name":"option"}}],[11,"get_func","","",5,{"inputs":[{"name":"btreemap"},{"name":"str"}],"output":{"name":"option"}}],[6,"ParseResult","liquery","",null,null],[6,"EvalResult","","",null,null],[6,"EvalFunc","","The General function signature for formatting function calls\n> note: very likely to change",null,null],[8,"Context","","Trait describing an object that contains a dictionary of functions",null,null],[10,"get_func","","",6,{"inputs":[{"name":"context"},{"name":"str"}],"output":{"name":"option"}}],[8,"Queryable","","Trait describing an object that can be queried for variables",null,null],[10,"query","","",7,{"inputs":[{"name":"queryable"},{"name":"str"}],"output":{"name":"option"}}],[11,"fmt","","",3,{"inputs":[{"name":"query"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"token"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[4,"ParseError"],[4,"EvalError"],[4,"Token"],[3,"Query"],[3,"HashMap"],[3,"BTreeMap"],[8,"Context"],[8,"Queryable"]]};
searchIndex['unicase'] = {"items":[[3,"UniCase","unicase","Case Insensitive wrapper of strings.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"unicase"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"unicase"}],"output":{"name":"unicase"}}],[11,"deref","","",0,{"inputs":[{"name":"unicase"}],"output":{"name":"s"}}],[11,"deref_mut","","",0,{"inputs":[{"name":"unicase"}],"output":{"name":"s"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"unicase"},{"name":"self"}],"output":{"name":"option"}}],[11,"cmp","","",0,{"inputs":[{"name":"unicase"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"as_ref","","",0,{"inputs":[{"name":"unicase"}],"output":{"name":"str"}}],[11,"fmt","","",0,{"inputs":[{"name":"unicase"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"unicase"},{"name":"s2"}],"output":{"name":"bool"}}],[11,"from_str","","",0,{"inputs":[{"name":"unicase"},{"name":"str"}],"output":{"name":"result"}}],[11,"hash","","",0,{"inputs":[{"name":"unicase"},{"name":"h"}],"output":null}],[11,"from","","",0,{"inputs":[{"name":"unicase"},{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"unicase"},{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"unicase"},{"name":"string"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"unicase"},{"name":"string"}],"output":{"name":"self"}}],[11,"into","","",0,{"inputs":[{"name":"unicase"}],"output":{"name":"str"}}],[11,"into","","",0,{"inputs":[{"name":"unicase"}],"output":{"name":"string"}}]],"paths":[[3,"UniCase"]]};
searchIndex['log'] = {"items":[[3,"LogRecord","log","The \"payload\" of a log message.",null,null],[3,"LogMetadata","","Metadata about a log message.",null,null],[3,"LogLocation","","The location of a log message.",null,null],[3,"MaxLogLevelFilter","","A token providing read and write access to the global maximum log level\nfilter.",null,null],[3,"SetLoggerError","","The type returned by `set_logger` if `set_logger` has already been called.",null,null],[3,"ShutdownLoggerError","","The type returned by `shutdown_logger_raw` if `shutdown_logger_raw` has\nalready been called or if `set_logger_raw` has not been called yet.",null,null],[4,"LogLevel","","An enum representing the available verbosity levels of the logging framework",null,null],[13,"Error","","The \"error\" level.",0,null],[13,"Warn","","The \"warn\" level.",0,null],[13,"Info","","The \"info\" level.",0,null],[13,"Debug","","The \"debug\" level.",0,null],[13,"Trace","","The \"trace\" level.",0,null],[4,"LogLevelFilter","","An enum representing the available verbosity level filters of the logging\nframework.",null,null],[13,"Off","","A level lower than all log levels.",1,null],[13,"Error","","Corresponds to the `Error` log level.",1,null],[13,"Warn","","Corresponds to the `Warn` log level.",1,null],[13,"Info","","Corresponds to the `Info` log level.",1,null],[13,"Debug","","Corresponds to the `Debug` log level.",1,null],[13,"Trace","","Corresponds to the `Trace` log level.",1,null],[5,"max_log_level","","Returns the current maximum log level.",null,{"inputs":[],"output":{"name":"loglevelfilter"}}],[5,"set_logger","","Sets the global logger.",null,{"inputs":[{"name":"m"}],"output":{"name":"result"}}],[5,"set_logger_raw","","Sets the global logger from a raw pointer.",null,{"inputs":[{"name":"m"}],"output":{"name":"result"}}],[5,"shutdown_logger","","Shuts down the global logger.",null,{"inputs":[],"output":{"name":"result"}}],[5,"shutdown_logger_raw","","Shuts down the global logger.",null,{"inputs":[],"output":{"name":"result"}}],[8,"Log","","A trait encapsulating the operations required of a logger",null,null],[10,"enabled","","Determines if a log message with the specified metadata would be\nlogged.",2,{"inputs":[{"name":"log"},{"name":"logmetadata"}],"output":{"name":"bool"}}],[10,"log","","Logs the `LogRecord`.",2,{"inputs":[{"name":"log"},{"name":"logrecord"}],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"loglevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"loglevel"}],"output":{"name":"loglevel"}}],[11,"eq","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevel"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevelfilter"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevel"}],"output":{"name":"option"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevelfilter"}],"output":{"name":"option"}}],[11,"cmp","","",0,{"inputs":[{"name":"loglevel"},{"name":"loglevel"}],"output":{"name":"ordering"}}],[11,"from_str","","",0,{"inputs":[{"name":"loglevel"},{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"loglevel"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"max","","Returns the most verbose logging level.",0,{"inputs":[{"name":"loglevel"}],"output":{"name":"loglevel"}}],[11,"to_log_level_filter","","Converts the `LogLevel` to the equivalent `LogLevelFilter`.",0,{"inputs":[{"name":"loglevel"}],"output":{"name":"loglevelfilter"}}],[11,"fmt","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"loglevelfilter"}],"output":{"name":"loglevelfilter"}}],[11,"eq","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevelfilter"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevel"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevelfilter"}],"output":{"name":"option"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevel"}],"output":{"name":"option"}}],[11,"cmp","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"loglevelfilter"}],"output":{"name":"ordering"}}],[11,"from_str","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"loglevelfilter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"max","","Returns the most verbose logging level filter.",1,{"inputs":[{"name":"loglevelfilter"}],"output":{"name":"loglevelfilter"}}],[11,"to_log_level","","Converts `self` to the equivalent `LogLevel`.",1,{"inputs":[{"name":"loglevelfilter"}],"output":{"name":"option"}}],[11,"args","","The message body.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"arguments"}}],[11,"metadata","","Metadata about the log directive.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"logmetadata"}}],[11,"location","","The location of the log directive.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"loglocation"}}],[11,"level","","The verbosity level of the message.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"loglevel"}}],[11,"target","","The name of the target of the directive.",3,{"inputs":[{"name":"logrecord"}],"output":{"name":"str"}}],[11,"level","","The verbosity level of the message.",4,{"inputs":[{"name":"logmetadata"}],"output":{"name":"loglevel"}}],[11,"target","","The name of the target of the directive.",4,{"inputs":[{"name":"logmetadata"}],"output":{"name":"str"}}],[11,"fmt","","",5,{"inputs":[{"name":"loglocation"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"loglocation"}}],[11,"module_path","","The module path of the message.",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"str"}}],[11,"file","","The source file containing the message.",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"str"}}],[11,"line","","The line containing the message.",5,{"inputs":[{"name":"loglocation"}],"output":{"name":"u32"}}],[11,"fmt","","",6,{"inputs":[{"name":"maxloglevelfilter"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"get","","Gets the current maximum log level filter.",6,{"inputs":[{"name":"maxloglevelfilter"}],"output":{"name":"loglevelfilter"}}],[11,"set","","Sets the maximum log level.",6,{"inputs":[{"name":"maxloglevelfilter"},{"name":"loglevelfilter"}],"output":null}],[11,"fmt","","",7,{"inputs":[{"name":"setloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"setloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",7,{"inputs":[{"name":"setloggererror"}],"output":{"name":"str"}}],[11,"fmt","","",8,{"inputs":[{"name":"shutdownloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"shutdownloggererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",8,{"inputs":[{"name":"shutdownloggererror"}],"output":{"name":"str"}}],[14,"log!","","The standard logging macro.",null,null],[14,"error!","","Logs a message at the error level.",null,null],[14,"warn!","","Logs a message at the warn level.",null,null],[14,"info!","","Logs a message at the info level.",null,null],[14,"debug!","","Logs a message at the debug level.",null,null],[14,"trace!","","Logs a message at the trace level.",null,null],[14,"log_enabled!","","Determines if a message logged at the specified level in that module will\nbe logged.",null,null]],"paths":[[4,"LogLevel"],[4,"LogLevelFilter"],[8,"Log"],[3,"LogRecord"],[3,"LogMetadata"],[3,"LogLocation"],[3,"MaxLogLevelFilter"],[3,"SetLoggerError"],[3,"ShutdownLoggerError"]]};
initSearch(searchIndex);
