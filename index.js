function receivesAFunction(myCallBackFunction){
   return myCallBackFunction()

}
receivesAFunction(myCallBackFunction)

function add(a, b){
    return (a + b);
}

function returnsANamedFunction(){
    return (add)
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}