;(function(root,factory){if(typeof define==="function"&&define.amd){define([],factory);}else if(typeof exports==="object"){module.exports={init:factory.init}}else{root.ityped=factory;}}(this,function(global){(function(a){a.forEach=function(a,b,c){var d=-1,e=a.length>>>0;(function f(g){var h,j=g===!1;do
++d;while(!(d in a)&&d!==e);if(j||d===e){c&&c(!j,a);return}
g=b.call({async:function(){return h=!0,f}},a[d],d,a),h||f(g)})()}})(typeof exports=="object"&&exports||global);let el,props,cursor=document.createElement('span');cursor.classList.add('ityped-cursor');cursor.textContent='';function setProps(config){let props=config;props.strings=config.strings||[]
props.typeSpeed=config.typeSpeed||100;props.backSpeed=config.backSpeed||100;props.backDelay=config.backDelay||1500;props.startDelay=config.startDelay||2000;props.showCursor=config.showCursor||true;props.loop=config.loop||false;if(props.showCursor)el.insertAdjacentElement('afterend',cursor)
if(props.cursorChar!==undefined)cursor.textContent=props.cursorChar
return Promise.resolve(props);}
function init(element,config){el=document.querySelector(element);setProps(config).then(function(properties){props=properties;let words=props.strings,len=words.length;loopingOnWords(words);})}
function loopingOnWords(words){forEach(words,function(word,index,arr){let time=(props.typeSpeed*word.length- 1)
if(props.backSpeed<props.typeSpeed){time-=(props.typeSpeed- props.backSpeed)*word.length;}else if(props.typeSpeed- props.backSpeed){time+=(props.backSpeed- props.typeSpeed)*word.length;}
let done=this.async();let len=words.length;iterateWords(el,word,index,len).then(function(){setTimeout(function(){done();},time)})},function(){if(props.loop){loopingOnWords(words);}});}
function increment(span,word){return new Promise(function(resolve,reject){for(let i=0;i<word.length;i++){count=0;let wordIndex=i;let len=word.length;setTimeout(function(i){appendWord(span,word.charAt(wordIndex));count++;if(count===len- 1){resolve();}},props.typeSpeed*i);}})}
function appendWord(el,word){el.innerHTML+=word;}
function iterateWords(element,word,index,wordsLengthArray){return new Promise(function(resolve,reject){increment(element,word).then(function(){setTimeout(function(){decrement(element,word,index,wordsLengthArray).then(function(){setTimeout(function(){resolve();},props.startDelay)});},props.backDelay)});})}
function iterateInsideDecrement(span,word,len,resolve){for(var i=len;i>0;i--){let iteratedI=i;let count=len;setTimeout(function(i){span.innerHTML=word.substring(0,len- iteratedI)
count--;if(iteratedI===1){resolve();}},props.backSpeed*i);}}
function decrement(span,word,index,lengthWords){return new Promise(function(resolve,reject){let len=word.length;if(index+ 1===lengthWords){if(!props.loop){if(props.onFinished!==undefined&&typeof props.onFinished==="function"){props.onFinished();}
span.innerHTML=word;}
else if(props.loop){iterateInsideDecrement(span,word,len,resolve);}}else if(index+ 1!==lengthWords){iterateInsideDecrement(span,word,len,resolve);}})}
return{init}}(this)));
