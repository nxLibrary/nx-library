# nx-library
Nx-Library is common use library for angular js. jquery and toastr is required for toastr message. the goal is to create this library
to use common functionlity in one package.

# Current Verison
1.0.2

# Install Package
 <h4>NPM</h4>
  npm install nx-library
 <h4>NUGET</h4>
  install-package nx-library
  
# Getting Started
<p>Add Js</p>
  &lt;script src=&quot;Scripts/jquery-3.1.1.js&quot;&gt;&lt;/script&gt;<br/>    
  &lt;script src=&quot;Scripts/toastr.min.js&quot;&gt;&lt;/script&gt;<br/> 
  &lt;script src=&quot;Scripts/angular.min.js&quot;&gt;&lt;/script&gt;<br/> 
  &lt;script src=&quot;Scripts/nx-library.min.js&quot;&gt;&lt;/script&gt;<br/> 
<p>Add Css</p>
  &lt;link href=&quot;Content/toastr.min.css&quot; rel=&quot;stylesheet&quot; /&gt;<br/>
  
# Add Dependency for nx-library
  <h4>angular.module('myApp', ['nx-library']);</h4>
  <h4>angular.module('myApp').controller('myController',['nx',function(nx){}]);</h4>
# How to use
  <h4>for show toastr message</h4>
  nx.message.success('message'); <br/>
  nx.message.error('message'); <br/>
  nx.message.info('message'); <br/>
  nx.message.warning('message'); 
  
  <h4>for cache storage</h4>
  nx.cache.get(key); <br/>
  nx.cache.set(key, value); <br/>
  nx.cache.exists(key); <br/>
  nx.cache.remove(key); <br/>
  nx.cache.clear(); 
# Authors
Vijay Soni 
<ul><li>vijay.soni@live.com</li></ul>
# Copyright
Copyright © 2016-2018
# License
nx-library is under MIT license - http://www.opensource.org/licenses/mit-license.php

  
