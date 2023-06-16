// What is module ?
// It is nothing but JavaScript code. For our feasibility and to reduce our efforts we started splitting our codes and 
// creating modules, which can be exported to another js files and used seamlessly.

// Npm - both repository and software.

// Rough steps from Development to Production
// 1. Create the total code package
// 2. Bundle it(Join all modules)
// 3. (Transpilling / Polyfilling) - Convert modern javascript to  ES5 (for backward compatibility).
// 4. Build it - Webpack or Parcel
// 5. We will get a Javascript bundle that can be deployed.

// Module help us to develop things in isolation which can be assembled later to complete the program.
// Modules helps us in reducing repetition and better organization.

// ES6 Modules : supports import and export syntax and top level this is undefined and always executed in strict mode.
// for HTML linking we have to use <script type="module">
// All the files (modules) are downloaded in async way.

// Importing a value just brings the reference not a copy (So if we make some changes in the original file it will be reflected everywhere its imported).

// In an exporting module only those variable or methods can be accessed which are being exported.

// There are two types of exports in JavaScript : named export(name at import and export should be same) and default export (named export is easy to use).
// More @ https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

// Export needs to happen at top level code

// CommonJS Modules (Nodejs was made with this)
// CommonJS is way to implement modules in JS which was previously very much common.
// More @ https://www.freecodecamp.org/news/modules-in-javascript/


// Learnmore about Parcel and it's usage.

// Babel and transpiling (Parcel uses babel itself)



// Do some code review after few days . That will help to regain some missing pieces.