ng-loadMore
===========

# No more writing repetitive code for loading data


# Why??

Developers who want to create infinite loading of data or loading in bunch (say 10 at a time) 
maintain a page index ie till which page pulling has been done , for which code becomes clumpsy 
writing  the same code again and again and maintaining the page Index 


# what ??

ng-loadMore is a angular factory in which dn't have to maintain and pageIndex length ,just pass the
URI and njoy and every time your request something to the sam URI the page indx will automatically incremented 
and it works fine with multiple url too.


# How ??

Inject dependency use factory and njoy


# steps 

 inject to your angular module
   
   <code>
   angular.module('myApp', ['loadMoreMod']);
   </code>


 use it eg

     angular.module('myApp', ['loadMoreMod']).controller('myController',function($scope,queryData)
    {
 
       queryData.q({'here lies the json parameters'}).then(function()
       {
         //do something good 
       },then(function(){
        //do something bad
       
       }));
    });

Thats it buddies !!


# Advantages 

no more repetitive code to write and it returns a promise also 



 
 



