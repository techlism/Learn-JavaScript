//strict mode - It's a way to allow us to know about the bug.
//without strict mode we may not be able to find the bug.
//for using strict mode first line of code should be 'use strict' (excluding comments).
'use strict'
let abbbc=false;
let b=true;
if(b){
    abbc=true;
}
// without strict mode we can't see the error in abbc as it's out of scope.
//Always feasible to use strict mode.
console.log(abbbc);
