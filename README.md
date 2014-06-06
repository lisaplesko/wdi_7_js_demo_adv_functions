## Advanced Javascript Functions

  Learn some advanced concepts about javascript fuctions.

## Objectives
* Using function callbacks to increase effiency.
* Using the javascript functions, _(call, apply and bind)_, to change a function's execution "Context" and 'this' pointer.
* Learning how the 'this' pointer changes at execution time.

### Steps
In the index.html change the script at the end of the body 
to point to one of these javascript files.
  
  * simple_iter.js - Simple DOM iteration.  
  * simple_callback.js - Simple DOM iteration with callback.  
  * anon_callback.js - Simple DOM iteration with anonymouscallback.  
  * problem_callback.js - Simple DOM iteration with callback that is an object's method. How 'this' is used in callbacks.  
  
### This pointer and function Context.
"We use this similar to the way we use pronouns in natural languages like English and French. We write: “John is running fast because he is trying to catch the train.” Note the use of the pronoun “he.” We could have written this: “John is running fast because John is trying to catch the train.” We don’t reuse “John” in this manner, for if we do, our family, friends, and colleagues would abandon us. Yes, they would. In a similar aesthetic manner, we use the this keyword as a shortcut, a referent to refer to an object." from [Understanding Javascript 'this' pointer.](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

In the this_index.html change the script at the end of the body 
to point to one of these javascript files.  

* this_object_literal.js - 'this' in an object literal.
* this_global_function.js - 'this' in a global function.
* this_event_handler_broken.js - Broken button event handler.  
* this_event_handler_fixed.js - Fixed button event handler.
* this_inner_function_bad.js - Broken inner function.  
* this_inner_function_fixed.js - Fixed inner function.  
* this_reassign_method_bad.js - Changing the runtime context of a method to the global object.
* this_reassign_method_fixed.js - Changing the runtime context of a method with the javscript _bind_ function.


### References 
* [Javascript Callbacks and how to use them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [Javscript Call, Apply and Bind](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)
* [Understanding Javascript 'this' pointer.](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
* [Javscript Do's and Don'ts](http://programming.oreilly.com/2014/05/dos-and-donts-in-javascript.html)
* [You Don't Know Javscript](https://github.com/getify/You-Dont-Know-JS)
* [Scopes and Closures. Advanced Topic.](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md)
* [Javascript 'this'. Advanced Topic](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md)
