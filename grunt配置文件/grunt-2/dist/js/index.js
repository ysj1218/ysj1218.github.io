/*!grunt-2-1.0.0.common 2018-04-16*/

"use strict";function add(n,i){return n+i}var c=add(3,6);function Count(){}console.log(c),Count.prototype={init:function(n,i){(void 0).add(),(void 0).minus(),(void 0).multi(),(void 0).division()},add:function(n,i){return n+i},minus:function(n,i){return n-i},multi:function(n,i){return n*i},division:function(n,i){return n/i}};var count=new Count;count.init();