@builtin "number.ne"     # `int`, `decimal`, and `percentage` number primitives
@builtin "string.ne"

lines      -> (field | comment | command) ( _ "\n" lines):*
field      -> fieldName ( _ ":" _ fieldType):? ( _ internal):? (_ quantifier):?
fieldType  -> number | string | boolean | date | url | range | enum
quantifier -> "?" | "!" | "*"
fieldName  -> identifier
command    -> "@" identifier _ (string | identifier):?





number              -> "number"  ( _ numberDefaultValue ):?
numberDefaultValue  ->  valueSign _ int

string              -> "string" ( _ stringDefaultValue ):?
stringDefaultValue  -> valueSign _ string

boolean             -> "boolean" ( _ booleanDefaultValue):?
booleanDefaultValue -> valueSign _ ( "false" | "true" )

date                -> "date" ( _ valueSign _ "NOW"):?
dateDefaultValue    -> valueSign _ "NOW"

url                 -> "url" ( _ urlDefaultValue ):?
urlDefaultValue     -> valueSign _ urlFunction "(" identifier ")"
urlFunction         -> "URLDOMAIN" | "URLTLD"

range               -> "range(" _ int ".." int _ ")" ( _ numberDefaultValue ):?

enum                -> "enum(" _ identifier ("," _ identifier):+ _ ")" ( _ enumDefaultValue ):?
enumDefaultValue    -> valueSign identifier

comment             -> "#" [^\n]:*

internal            -> "^"
identifier          -> [_a-zA-Z] [_a-zA-Z0-9-]:* {% d => d[0] + d[1].join('') %}
valueSign           -> "="
_                   -> wschar:* {% function(d) {return null;} %}
__                  -> wschar:+ {% function(d) {return null;} %}
wschar              -> [ \t] {% id %}
