const _0x338a=['change','base64','#crop-submit','viewport','height','dataset','result','files','target','ready','input[type=\x27file\x27]','output','getElementById','bind','#upload-demo','destroy','readAsDataURL','then','setItem','width','.aspect','png','#aspectSelect','tune.html','onload','croppie','click'];(function(_0x290384,_0x338aab){const _0x1b9a55=function(_0x571f96){while(--_0x571f96){_0x290384['push'](_0x290384['shift']());}};_0x1b9a55(++_0x338aab);}(_0x338a,0x6e));const _0x1b9a=function(_0x290384,_0x338aab){_0x290384=_0x290384-0x0;let _0x1b9a55=_0x338a[_0x290384];return _0x1b9a55;};let preview='./static/assets/preview.png';let croppedImg=document[_0x1b9a('0xa')](_0x1b9a('0x9'));$(_0x1b9a('0x14'))['on']('change',()=>{document['querySelectorAll'](_0x1b9a('0x12'))['forEach'](function(_0x20af6f){if(_0x20af6f['selected']){createCroppie(Number(_0x20af6f[_0x1b9a('0x3')][_0x1b9a('0x11')]),Number(_0x20af6f['dataset'][_0x1b9a('0x2')]));}});});function createCroppie(_0x1752ed,_0x11c182){$(_0x1b9a('0xc'))[_0x1b9a('0x17')](_0x1b9a('0xd'));uploadedImage=$('#upload-demo')[_0x1b9a('0x17')]({'url':preview,'viewport':{'width':_0x1752ed,'height':_0x11c182,'type':'square'},'boundary':{'width':0x190,'height':0x190}});}$(document)['on'](_0x1b9a('0x19'),_0x1b9a('0x8'),function(){var _0x2b4554=this;preview=_0x2b4554[_0x1b9a('0x5')]&&_0x2b4554[_0x1b9a('0x5')][0x0]?_0x2b4554[_0x1b9a('0x5')][0x0]:preview;if(_0x2b4554[_0x1b9a('0x5')]&&_0x2b4554[_0x1b9a('0x5')][0x0]){var _0x2b0f95=new FileReader();_0x2b0f95[_0x1b9a('0x16')]=function(_0x37035b){preview=_0x37035b[_0x1b9a('0x6')][_0x1b9a('0x4')];uploadedImage[_0x1b9a('0x17')](_0x1b9a('0xb'),{'url':_0x37035b[_0x1b9a('0x6')][_0x1b9a('0x4')]});$(_0x2b4554)['replaceWith']($(_0x2b4554)['clone']());};_0x2b0f95[_0x1b9a('0xe')](_0x2b4554[_0x1b9a('0x5')][0x0]);}});$(_0x1b9a('0x0'))['on'](_0x1b9a('0x18'),function(){uploadedImage[_0x1b9a('0x17')](_0x1b9a('0x4'),{'type':_0x1b9a('0x1a'),'format':_0x1b9a('0x13'),'size':_0x1b9a('0x1'),'quality':0x1})[_0x1b9a('0xf')](_0x775c9d=>localStorage[_0x1b9a('0x10')]('croppedImage',_0x775c9d))[_0x1b9a('0xf')](location['href']=_0x1b9a('0x15'));});$(document)[_0x1b9a('0x7')](()=>createCroppie(0x128,0x128));