/* Javascript custom code snippets:
- shift + CMD + p to bring up control palette, then search 'custom code snippets'  and select javascript
- Paste any/all into the main { } of the 'custom code snippets' javascript file on your VSCode
- Seperate each snippet with a comma as shown, NO COMMA after last snippet. 

To use, type your set "prefix" in any javascript file and press tab,
 press tab again to cycle through your $1, $2, $3 etc chosen cursor-positions. $0 sets final cursor position

Syntax: 
"Name of Snippet" {
    "prefix": "command you want to type to activate snippet",
    "body": [ "code you want it to type" ] ($1, $2 etc set cursor positions, $0 sets final cursor position)
    description: "brief summary of what snippet does"
},

Contained here: 
1. Types console.log();
2. Types console.log( , );
3. Creates Arrow Function
4. Creates For Lopp
5. Creates for In Loop
6. Creates For Of Loop
*/

// 1: console.log(x);(y) -  cursor tabs to (x) then (y) position.
"Console Log Single": {
    "prefix": "ll",
    "body": [
      "console.log($1);$0"
    ],
    "description": "Log a value to console with final cursor placement"
},

// 2: console.log( x, y); -  cursor tabs to (x) > (y) > (z) position.
"Console Log Multi": {
    "prefix": "lll",
    "body": [
      "console.log($1, $2);$0"
    ],
    "description": "Log two values to console with final cursor placement"
},

// 3: Arrow Function - const (x) = (y) => { z }; tabs to (x) > (y) > (z) position.
"Arrow Function": {
"prefix": "afn",
"body": [
  "const $1 = ($2) => {",
  "  $3",
  "};",
  "$0"
],
"description": "Create an arrow function"
},

// 4 : For Loop - for (let (x) = 0; (x) < (y); (x)++) { (z) };  tabs to (x) > (y) > (z) position, auto-fills (x)s.
"For Loop": {
"prefix": "fl>>",
"body": [
  "for (let $1 = 0; $1 < $2; $1++) {",
  "  $3",
  "};",
  "$0"
],
"description": "Basic For loop snippet"
},

// 5 : For In Loop: for (let (x) in (y)) { (z) };  tabs to (x) > (y) > (z) position.
"For In Loop": {
    "prefix": "fi>>",
    "body": [
      "for (let $1 in $2){",
  "  $3",
  "};",
  "$0"
    ],
    "description": "For In loop snippet"
},

// 6 : For Of Loop - for (const (x) of (y)) { (z) };  tabs to (x) > (y) > (z) positions
"For Of Loop": {
"prefix": "fo>>",
"body": [
  "for (const $1 of $2){",
"  $3",
"};",
"$0"
],
"description": "For Of Loop Snippet"
},

// 7 : Basic Test - 
"Test Case": {
	"prefix": "tt>>",
	"body": [
    "test(\"$1\", () => {",
    "  const testInput = $2;",
    "  const expectedOutput = $3;",
    "  const actualOutput = $4(testInput);",
    "  expect(actualOutput).toBe(expectedOutput);",
    "});",
  "$0"
	],
	"description": "Additional test case"
}

