const _0x5e51=['none','pressed','display','rgb(11,51,125)','push','value','.next','cookie','rgb(214,21,105)','entries','mouseleave','rgb(255,229,69)','.quick-fill','image/octet-stream','preventDefault','getAttribute','length','tagName','replace','contains','style','.colors','visible','addEventListener','rgb(242,81,36)','map','rgb(179,85,18)','putImageData','clear','createElement','canvas','keyCode','keys','setItem','querySelector','forEach','rgb(191,29,33)','remove','classList','getElementById','rgb(110,110,110)','mouseover','instructions.html','shiftKey','.size','rgb(84,54,41)','.zoom-out','modal','image/png','download','height','rgb(252,184,226)','click','rgb(255,\x20255,\x20254)','rgb(159,212,68)','rgb(255,255,254)','.input-height','appendChild','rgb(180,180,180)','getItem','minWidth','splice','visibility','mouseup','visited\x20=\x20true','target','.input-width','brickQuantities','.size-picker','toDataURL','.zoom-in','.color-picker','metaKey','rgb(232,165,121)','stringify','getElementsByClassName','.erase-mode','change','mousedown','parse','location','backgroundColor','modal-button','split','add','rgb(0,0,0)','querySelectorAll','block','hidden','getContext','.draw-mode','selectedIndex','setAttribute','href','dblclick','width'];(function(_0x1a7187,_0x5e51d1){const _0x15467e=function(_0x170931){while(--_0x170931){_0x1a7187['push'](_0x1a7187['shift']());}};_0x15467e(++_0x5e51d1);}(_0x5e51,0xd3));const _0x1546=function(_0x1a7187,_0x5e51d1){_0x1a7187=_0x1a7187-0x0;let _0x15467e=_0x5e51[_0x1a7187];return _0x15467e;};const sizePicker=document[_0x1546('0xf')](_0x1546('0x31'));const colorPicker=document[_0x1546('0xf')](_0x1546('0x34'));const colors=document[_0x1546('0xf')](_0x1546('0x2'));const sizeSelect=document['querySelector'](_0x1546('0x19'));const pixelCanvas=document[_0x1546('0xf')]('.pixel-canvas');const quickFill=document['querySelector'](_0x1546('0x59'));const drawMode=document[_0x1546('0xf')](_0x1546('0x47'));const eraseMode=document[_0x1546('0xf')](_0x1546('0x39'));const fillMode=document['querySelector']('.fill-mode');const zoomIn=document['querySelector'](_0x1546('0x33'));const zoomOut=document[_0x1546('0xf')](_0x1546('0x1b'));const save=document['querySelector']('.save');const next=document[_0x1546('0xf')](_0x1546('0x53'));const palette={'A':_0x1546('0x42'),'B':'rgb(60,60,60)','C':_0x1546('0x15'),'D':_0x1546('0x27'),'E':_0x1546('0x24'),'F':'rgb(250,224,197)','G':_0x1546('0x36'),'H':_0x1546('0x58'),'I':_0x1546('0x7'),'J':_0x1546('0x1a'),'K':_0x1546('0x20'),'L':_0x1546('0x55'),'M':_0x1546('0x23'),'N':'rgb(77,219,255)','O':'rgb(22,114,181)','P':_0x1546('0x50'),'Q':_0x1546('0x5'),'R':_0x1546('0x11'),'S':'rgb(112,35,44)','T':'rgb(125,28,138)'};const modal=document[_0x1546('0x14')](_0x1546('0x1c'));const modalButton=document['getElementById'](_0x1546('0x3f'));const span=document[_0x1546('0x38')]('close')[0x0];function loadImage(_0x38ec7a){let _0x80bdf4=_0x38ec7a[_0x1546('0x5d')];let _0x3c71c9=_0x38ec7a[0x0][_0x1546('0x5d')];xMax=Number(_0x80bdf4-0x1);yMax=Number(_0x3c71c9-0x1);for(let _0xafbaeb=0x0;_0xafbaeb<_0x80bdf4;_0xafbaeb++){let _0x67e903=document[_0x1546('0xa')]('tr');pixelCanvas[_0x1546('0x26')](_0x67e903);for(let _0x65942f=0x0;_0x65942f<_0x3c71c9;_0x65942f++){let _0x329ee6=document[_0x1546('0xa')]('td');_0x67e903[_0x1546('0x26')](_0x329ee6);_0x329ee6[_0x1546('0x1')][_0x1546('0x3e')]=_0x38ec7a[_0xafbaeb][_0x65942f][0x1];_0x329ee6[_0x1546('0x49')]('id',_0xafbaeb+','+_0x65942f);};};};function makeGrid(){localStorage[_0x1546('0x9')]();let _0x13f4a7=document['querySelector'](_0x1546('0x25'))[_0x1546('0x52')];let _0x10554e=document[_0x1546('0xf')](_0x1546('0x2f'))[_0x1546('0x52')];xMax=Number(_0x13f4a7-0x1);yMax=Number(_0x10554e-0x1);if(pixelCanvas['hasChildNodes']()){if(confirm('Are\x20you\x20sure\x20you\x20want\x20to\x20discard\x20the\x20changes\x20made\x20to\x20the\x20current\x20artwork?')){pixelCanvas['innerHTML']='';}else return;}for(let _0x4cffb8=0x0;_0x4cffb8<_0x13f4a7;_0x4cffb8++){let _0xfa7368=document[_0x1546('0xa')]('tr');pixelCanvas[_0x1546('0x26')](_0xfa7368);for(let _0x38a601=0x0;_0x38a601<_0x10554e;_0x38a601++){let _0x1bbf4b=document['createElement']('td');_0xfa7368[_0x1546('0x26')](_0x1bbf4b);_0x1bbf4b[_0x1546('0x1')][_0x1546('0x3e')]=_0x1546('0x24');_0x1bbf4b[_0x1546('0x49')]('id',_0x4cffb8+','+_0x38a601);}}}function createPalette(_0x7a9129){let _0x4bf6e8=0x0;for(const _0x534666 in _0x7a9129){let _0x18a5ae=document[_0x1546('0xa')]('button');colors[_0x1546('0x26')](_0x18a5ae);_0x18a5ae[_0x1546('0x1')]['backgroundColor']=_0x7a9129[_0x534666];if(_0x4bf6e8===0x3){colors[_0x1546('0x26')](document[_0x1546('0xa')]('br'));_0x4bf6e8=-0x1;}_0x4bf6e8++;}}window['addEventListener']('DOMContentLoaded',()=>{if(!document['cookie']){modal[_0x1546('0x1')][_0x1546('0x4f')]=_0x1546('0x44');document[_0x1546('0x54')]=_0x1546('0x2d');}if(localStorage[_0x1546('0xb')]){const _0x1d9576=JSON[_0x1546('0x3c')](localStorage['getItem'](_0x1546('0xb')));loadImage(_0x1d9576);}else{makeGrid();}createPalette(palette);});if(sizePicker){sizePicker[_0x1546('0x4')]('submit',function(_0x1177b1){_0x1177b1[_0x1546('0x5b')]();makeGrid();});}let paletteVisible=![];colorPicker[_0x1546('0x4')](_0x1546('0x21'),function(_0x370b82){_0x370b82[_0x1546('0x5b')]();if(paletteVisible==![]){document[_0x1546('0xf')](_0x1546('0x2'))['style'][_0x1546('0x2b')]=_0x1546('0x3');paletteVisible=!![];}else{document[_0x1546('0xf')](_0x1546('0x2'))['style']['visibility']=_0x1546('0x45');paletteVisible=![];};});colors[_0x1546('0x4')](_0x1546('0x21'),function(_0x3727ae){if(_0x3727ae['target'][_0x1546('0x5e')]==='BUTTON'){colorPicker[_0x1546('0x1')][_0x1546('0x3e')]=_0x3727ae['target']['style'][_0x1546('0x3e')];document[_0x1546('0xf')](_0x1546('0x2'))[_0x1546('0x1')][_0x1546('0x2b')]=_0x1546('0x45');paletteVisible=![];if(eraseModeOn){drawModeOn=!![];eraseModeOn=![];}};});let size=0x0;sizeSelect[_0x1546('0x4')](_0x1546('0x3a'),function(){size=parseInt(this[_0x1546('0x52')]);});zoomIn[_0x1546('0x4')](_0x1546('0x21'),function(_0x26b81f){_0x26b81f[_0x1546('0x5b')]();zoom(0x2);});zoomOut[_0x1546('0x4')](_0x1546('0x21'),function(_0x455b24){_0x455b24[_0x1546('0x5b')]();zoom(-0x2);});function zoom(_0x2ffcb9){pixelSize=parseInt(getComputedStyle(pixelCanvas['querySelector']('td'))[_0x1546('0x1f')])+_0x2ffcb9+'px';pixelCanvas[_0x1546('0x43')]('td')[_0x1546('0x10')](function(_0x4788be){_0x4788be[_0x1546('0x1')][_0x1546('0x1f')]=pixelSize;_0x4788be[_0x1546('0x1')][_0x1546('0x4c')]=pixelSize;_0x4788be[_0x1546('0x1')][_0x1546('0x29')]=pixelSize;});}save['addEventListener'](_0x1546('0x21'),function(_0xcf519d){_0xcf519d[_0x1546('0x5b')]();let _0x5427f6=[];const _0x2e98cb=document[_0x1546('0xf')]('tr')['childElementCount'];let _0x4ac4c3=0x0;document[_0x1546('0x43')]('tr')[_0x1546('0x10')](_0x479199=>{_0x479199[_0x1546('0x43')]('td')[_0x1546('0x10')](_0xfe11a=>{_0xfe11a[_0x1546('0x1')][_0x1546('0x3e')]['slice'](0x4,-0x1)['split'](',')[_0x1546('0x6')](_0x3fd579=>_0x5427f6['push'](parseInt(_0x3fd579)));_0x5427f6[_0x1546('0x51')](0xff);});_0x4ac4c3++;});const _0x5d0559=document[_0x1546('0xa')](_0x1546('0xb'));_0x5d0559[_0x1546('0x4c')]=_0x2e98cb;_0x5d0559['height']=_0x4ac4c3;const _0x233342=_0x5d0559[_0x1546('0x46')]('2d');const _0x43d930=new Uint8ClampedArray(_0x5427f6);const _0xbe3607=new ImageData(_0x43d930,_0x2e98cb);_0x233342[_0x1546('0x8')](_0xbe3607,0x0,0x0);const _0x261adf=document['createElement']('a');_0x261adf[_0x1546('0x49')](_0x1546('0x1e'),'Pixpad.png');_0x261adf[_0x1546('0x49')](_0x1546('0x4a'),_0x5d0559[_0x1546('0x32')](_0x1546('0x1d'))[_0x1546('0x5f')](_0x1546('0x1d'),_0x1546('0x5a')));_0x261adf[_0x1546('0x21')]();});next[_0x1546('0x4')]('click',function(_0x15dd8b){_0x15dd8b[_0x1546('0x5b')]();createInstructions();window[_0x1546('0x3d')][_0x1546('0x4a')]=_0x1546('0x17');});let path=[];let undoObject={};let redoObject;let undoArray=[];let redoArray=[];let xMax=0x0;let yMax=0x0;let down=![];let drawModeOn=!![];let eraseModeOn=![];let fillModeOn=![];pixelCanvas[_0x1546('0x4')](_0x1546('0x4b'),_0x1f89b7=>{const _0x417625=JSON['parse'](localStorage[_0x1546('0x28')]('canvas'));const [_0x10a5b8,_0x15126f]=_0x1f89b7[_0x1546('0x2e')]['id'][_0x1546('0x40')](',')[_0x1546('0x6')](_0x293b48=>parseInt(_0x293b48));_0x1f89b7[_0x1546('0x2e')][_0x1546('0x1')][_0x1546('0x3e')]=_0x417625[_0x10a5b8][_0x15126f][0x1];});drawMode[_0x1546('0x4')](_0x1546('0x21'),()=>{drawModeOn=!![];eraseModeOn=![];fillModeOn=![];if(!drawMode[_0x1546('0x13')][_0x1546('0x0')]('pressed'))drawMode[_0x1546('0x13')][_0x1546('0x41')](_0x1546('0x4e'));if(eraseMode['classList'][_0x1546('0x0')](_0x1546('0x4e')))eraseMode[_0x1546('0x13')][_0x1546('0x12')](_0x1546('0x4e'));if(fillMode[_0x1546('0x13')]['contains'](_0x1546('0x4e')))fillMode[_0x1546('0x13')][_0x1546('0x12')]('pressed');});eraseMode[_0x1546('0x4')](_0x1546('0x21'),()=>{drawModeOn=![];eraseModeOn=!![];fillModeOn=![];if(drawMode[_0x1546('0x13')][_0x1546('0x0')](_0x1546('0x4e')))drawMode[_0x1546('0x13')]['remove'](_0x1546('0x4e'));if(!eraseMode[_0x1546('0x13')]['contains'](_0x1546('0x4e')))eraseMode[_0x1546('0x13')][_0x1546('0x41')](_0x1546('0x4e'));if(fillMode['classList'][_0x1546('0x0')](_0x1546('0x4e')))fillMode[_0x1546('0x13')]['remove'](_0x1546('0x4e'));});fillMode[_0x1546('0x4')](_0x1546('0x21'),()=>{drawModeOn=![];eraseModeOn=![];fillModeOn=!![];if(drawMode[_0x1546('0x13')][_0x1546('0x0')](_0x1546('0x4e')))drawMode[_0x1546('0x13')][_0x1546('0x12')](_0x1546('0x4e'));if(eraseMode[_0x1546('0x13')][_0x1546('0x0')]('pressed'))eraseMode[_0x1546('0x13')][_0x1546('0x12')](_0x1546('0x4e'));if(!fillMode[_0x1546('0x13')]['contains'](_0x1546('0x4e')))fillMode[_0x1546('0x13')]['add'](_0x1546('0x4e'));});pixelCanvas[_0x1546('0x4')](_0x1546('0x3b'),function(_0x376329){_0x376329[_0x1546('0x5b')]();if(drawModeOn)draw(_0x376329);if(eraseModeOn)erase(_0x376329);if(fillModeOn){const _0x1f5711=_0x376329[_0x1546('0x2e')]['getAttribute']('id');const [_0x9b3ce7,_0x2065ab]=_0x1f5711[_0x1546('0x40')](',')['map'](_0x180894=>parseInt(_0x180894));const _0x31781b=document[_0x1546('0x14')](_0x1f5711)[_0x1546('0x1')]['backgroundColor'];const _0x44b535=colorPicker[_0x1546('0x1')][_0x1546('0x3e')];floodFill(_0x9b3ce7,_0x2065ab,xMax,yMax,_0x31781b,_0x44b535);updateUndoHistory();}},!![]);function updateUndoHistory(){if(Object[_0x1546('0xd')](undoObject)[_0x1546('0x5d')]>0x0){if(undoArray[_0x1546('0x5d')]>0x14)undoArray[_0x1546('0x2a')](0x0,0x1);undoArray[_0x1546('0x51')](undoObject);undoObject={};};}function undo(){if(undoArray[_0x1546('0x5d')]>0x0){redoObject={};for(let [_0x393ac8,_0x2e6288]of Object[_0x1546('0x56')](undoArray[undoArray[_0x1546('0x5d')]-0x1])){redoObject[_0x393ac8]=document[_0x1546('0x14')](_0x393ac8)[_0x1546('0x1')][_0x1546('0x3e')];document[_0x1546('0x14')](_0x393ac8)[_0x1546('0x1')][_0x1546('0x3e')]=_0x2e6288;};undoArray[_0x1546('0x2a')](-0x1,0x1);redoArray[_0x1546('0x51')](redoObject);}};function redo(){if(redoArray[_0x1546('0x5d')]>0x0){undoObject={};for(let [_0x24b7fc,_0x3563a8]of Object[_0x1546('0x56')](redoArray[redoArray[_0x1546('0x5d')]-0x1])){undoObject[_0x24b7fc]=document[_0x1546('0x14')](_0x24b7fc)[_0x1546('0x1')]['backgroundColor'];document[_0x1546('0x14')](_0x24b7fc)[_0x1546('0x1')][_0x1546('0x3e')]=_0x3563a8;};redoArray['splice'](-0x1,0x1);undoArray[_0x1546('0x51')](undoObject);}};function findNeighbors(_0x349d6a){const [_0x4949cd,_0x16a0da]=_0x349d6a[_0x1546('0x40')](',')[_0x1546('0x6')](_0x18242c=>parseInt(_0x18242c));neighbors=[];for(let _0x4de63b=-size;_0x4de63b<=size;_0x4de63b++){for(let _0x1b8594=-size;_0x1b8594<=size;_0x1b8594++){if(_0x4949cd+_0x4de63b>=0x0&&_0x4949cd+_0x4de63b<=xMax&&_0x16a0da+_0x1b8594>=0x0&&_0x16a0da+_0x1b8594<=yMax){neighbors[_0x1546('0x51')](_0x4949cd+_0x4de63b+','+(_0x16a0da+_0x1b8594));};};};return neighbors;};function draw(_0x7d320e){down=!![];redoArray=[];let _0x114dfa=_0x7d320e[_0x1546('0x2e')]['getAttribute']('id');for(id of findNeighbors(_0x7d320e[_0x1546('0x2e')]['getAttribute']('id'))){undoObject[id]=document[_0x1546('0x14')](id)['style'][_0x1546('0x3e')];document[_0x1546('0x14')](id)['style'][_0x1546('0x3e')]=colorPicker[_0x1546('0x1')][_0x1546('0x3e')];}pixelCanvas[_0x1546('0x4')](_0x1546('0x16'),function(_0x3a8a58){if(down&&drawModeOn){if(_0x3a8a58[_0x1546('0x2e')][_0x1546('0x5e')]==='TD'){curPixel=_0x3a8a58[_0x1546('0x2e')][_0x1546('0x5c')]('id');if(_0x114dfa&&_0x114dfa!=curPixel){coordsList=findPath(_0x114dfa,curPixel);_0x114dfa=curPixel;path=[];for(let _0x169d0b of coordsList){for(let _0x53f661 of findNeighbors(_0x169d0b)){if(undoObject[_0x53f661]==undefined){undoObject[_0x53f661]=document['getElementById'](_0x53f661)['style'][_0x1546('0x3e')];document[_0x1546('0x14')](_0x53f661)[_0x1546('0x1')][_0x1546('0x3e')]=colorPicker[_0x1546('0x1')]['backgroundColor'];};};};};};};});pixelCanvas[_0x1546('0x4')](_0x1546('0x2c'),function(){down=![];_0x114dfa=![];updateUndoHistory();});pixelCanvas[_0x1546('0x4')](_0x1546('0x57'),function(){down=![];_0x114dfa=![];updateUndoHistory();});};function erase(_0x57359f){down=!![];redoArray=[];const _0x24a262=JSON[_0x1546('0x3c')](localStorage[_0x1546('0x28')](_0x1546('0xb')));for(let _0x53bbf8 of findNeighbors(_0x57359f[_0x1546('0x2e')][_0x1546('0x5c')]('id'))){undoObject[_0x53bbf8]=document[_0x1546('0x14')](_0x53bbf8)[_0x1546('0x1')][_0x1546('0x3e')];const [_0x45ca4b,_0x23c265]=_0x53bbf8[_0x1546('0x40')](',')[_0x1546('0x6')](_0x23c98e=>parseInt(_0x23c98e));document['getElementById'](_0x53bbf8)[_0x1546('0x1')][_0x1546('0x3e')]=_0x24a262?_0x24a262[_0x45ca4b][_0x23c265][0x1]:_0x1546('0x22');};pixelCanvas[_0x1546('0x4')](_0x1546('0x16'),function(_0x2776be){if(down&&eraseModeOn){if(_0x2776be[_0x1546('0x2e')][_0x1546('0x5e')]==='TD'){for(let _0x9f6e69 of findNeighbors(_0x2776be[_0x1546('0x2e')]['getAttribute']('id'))){if(undoObject[_0x9f6e69]==undefined){undoObject[_0x9f6e69]=document[_0x1546('0x14')](_0x9f6e69)[_0x1546('0x1')][_0x1546('0x3e')];const [_0x67b773,_0x3d0bbc]=_0x9f6e69[_0x1546('0x40')](',')[_0x1546('0x6')](_0xd36f5b=>parseInt(_0xd36f5b));document[_0x1546('0x14')](_0x9f6e69)['style'][_0x1546('0x3e')]=_0x24a262?_0x24a262[_0x67b773][_0x3d0bbc][0x1]:_0x1546('0x22');};};};};});pixelCanvas[_0x1546('0x4')]('mouseup',function(){down=![];updateUndoHistory();});pixelCanvas[_0x1546('0x4')](_0x1546('0x57'),function(){down=![];updateUndoHistory();});};function floodFill(_0x44e15a,_0x3201b9,_0x293fd5,_0x278911,_0x463273,_0x4d910a){redoArray=[];const _0x12321a=_0x44e15a+','+_0x3201b9;let _0x1f7922=document[_0x1546('0x14')](_0x12321a)['style'][_0x1546('0x3e')];if(_0x463273===_0x4d910a)return;if(_0x463273!==_0x1f7922)return;if(_0x463273===_0x1f7922){undoObject[_0x12321a]=_0x1f7922;document['getElementById'](_0x12321a)[_0x1546('0x1')][_0x1546('0x3e')]=_0x4d910a;};if(_0x44e15a>0x0)floodFill(_0x44e15a-0x1,_0x3201b9,_0x293fd5,_0x278911,_0x463273,_0x4d910a);if(_0x3201b9>0x0)floodFill(_0x44e15a,_0x3201b9-0x1,_0x293fd5,_0x278911,_0x463273,_0x4d910a);if(_0x44e15a<_0x293fd5)floodFill(_0x44e15a+0x1,_0x3201b9,_0x293fd5,_0x278911,_0x463273,_0x4d910a);if(_0x3201b9<_0x278911)floodFill(_0x44e15a,_0x3201b9+0x1,_0x293fd5,_0x278911,_0x463273,_0x4d910a);}function createInstructions(){let _0x4bab5b={};let _0x50a8be={};let _0x2cea84=[];for(let [_0xc7ddff,_0x5649b7]of Object[_0x1546('0x56')](palette)){_0x4bab5b[_0x5649b7]=_0xc7ddff;};document[_0x1546('0x43')]('tr')[_0x1546('0x10')](function(_0x5171f9){let _0x25aa23=[];_0x5171f9['querySelectorAll']('td')['forEach'](function(_0x2c239c){let _0x1ac7c8=_0x2c239c[_0x1546('0x1')][_0x1546('0x3e')][_0x1546('0x5f')](/ /g,'');if(_0x50a8be[_0x4bab5b[_0x1ac7c8]])_0x50a8be[_0x4bab5b[_0x1ac7c8]]++;else _0x50a8be[_0x4bab5b[_0x1ac7c8]]=0x1;_0x25aa23[_0x1546('0x51')]([_0x4bab5b[_0x1ac7c8],_0x1ac7c8]);});_0x2cea84['push'](_0x25aa23);});localStorage[_0x1546('0xe')](_0x1546('0x30'),JSON[_0x1546('0x37')](_0x50a8be));localStorage[_0x1546('0xe')](_0x1546('0xb'),JSON[_0x1546('0x37')](_0x2cea84));};function shortcuts(_0x25b3b1){if(!_0x25b3b1[_0x1546('0x18')]&&_0x25b3b1[_0x1546('0xc')]==0x5a){if(_0x25b3b1[_0x1546('0x35')]||_0x25b3b1['ctrlKey'])undo();}if(_0x25b3b1[_0x1546('0x18')]&&_0x25b3b1[_0x1546('0xc')]==0x5a){if(_0x25b3b1['metaKey']||_0x25b3b1['ctrlKey'])redo();}if(_0x25b3b1[_0x1546('0xc')]==0xbb){zoom(0x2);}if(_0x25b3b1[_0x1546('0xc')]==0xbd){zoom(-0x2);}if(_0x25b3b1[_0x1546('0xc')]==0x53){sizeSelect[_0x1546('0x48')]='0';size=0x0;}if(_0x25b3b1[_0x1546('0xc')]==0x4d){sizeSelect[_0x1546('0x48')]='1';size=0x1;}if(_0x25b3b1[_0x1546('0xc')]==0x4c){sizeSelect['selectedIndex']='2';size=0x2;}if(_0x25b3b1[_0x1546('0xc')]==0x43){colorPicker[_0x1546('0x21')]();}if(_0x25b3b1[_0x1546('0xc')]==0x44){drawModeOn=!![];eraseModeOn=![];fillModeOn=![];if(!drawMode[_0x1546('0x13')][_0x1546('0x0')](_0x1546('0x4e')))drawMode[_0x1546('0x13')][_0x1546('0x41')](_0x1546('0x4e'));if(eraseMode[_0x1546('0x13')][_0x1546('0x0')](_0x1546('0x4e')))eraseMode['classList'][_0x1546('0x12')](_0x1546('0x4e'));if(fillMode[_0x1546('0x13')][_0x1546('0x0')](_0x1546('0x4e')))fillMode[_0x1546('0x13')]['remove'](_0x1546('0x4e'));}if(_0x25b3b1[_0x1546('0xc')]==0x45){drawModeOn=![];eraseModeOn=!![];fillModeOn=![];if(drawMode[_0x1546('0x13')]['contains'](_0x1546('0x4e')))drawMode[_0x1546('0x13')][_0x1546('0x12')]('pressed');if(!eraseMode[_0x1546('0x13')][_0x1546('0x0')](_0x1546('0x4e')))eraseMode[_0x1546('0x13')]['add'](_0x1546('0x4e'));if(fillMode[_0x1546('0x13')][_0x1546('0x0')](_0x1546('0x4e')))fillMode[_0x1546('0x13')][_0x1546('0x12')](_0x1546('0x4e'));}if(_0x25b3b1[_0x1546('0xc')]==0x46){drawModeOn=![];eraseModeOn=![];fillModeOn=!![];if(drawMode[_0x1546('0x13')][_0x1546('0x0')](_0x1546('0x4e')))drawMode[_0x1546('0x13')][_0x1546('0x12')](_0x1546('0x4e'));if(eraseMode[_0x1546('0x13')]['contains'](_0x1546('0x4e')))eraseMode[_0x1546('0x13')][_0x1546('0x12')](_0x1546('0x4e'));if(!fillMode[_0x1546('0x13')][_0x1546('0x0')](_0x1546('0x4e')))fillMode[_0x1546('0x13')][_0x1546('0x41')]('pressed');}}document['onkeydown']=shortcuts;modalButton[_0x1546('0x4')](_0x1546('0x21'),()=>modal[_0x1546('0x1')][_0x1546('0x4f')]='block');span['addEventListener'](_0x1546('0x21'),()=>modal[_0x1546('0x1')][_0x1546('0x4f')]=_0x1546('0x4d'));window['addEventListener'](_0x1546('0x21'),()=>{if(event['target']==modal)modal[_0x1546('0x1')][_0x1546('0x4f')]=_0x1546('0x4d');});function findPath(_0x5df3b4,_0x4c946a){const [_0x321b91,_0x776a0c]=_0x5df3b4[_0x1546('0x40')](',')['map'](_0xa12624=>parseInt(_0xa12624));const [_0x5e0d4b,_0x48fcae]=_0x4c946a[_0x1546('0x40')](',')[_0x1546('0x6')](_0x1951cd=>parseInt(_0x1951cd));let _0x73156e=![];for(let _0x5be239=-0x1;_0x5be239<=0x1;_0x5be239++){for(let _0x134032=-0x1;_0x134032<=0x1;_0x134032++){if(_0x321b91+_0x5be239>=0x0&&_0x321b91+_0x5be239<=xMax&&_0x776a0c+_0x134032>=0x0&&_0x776a0c+_0x134032<=yMax){if(_0x5e0d4b+_0x5be239==_0x321b91&&_0x48fcae+_0x5be239==_0x776a0c)_0x73156e=!![];};};};if(!_0x73156e){pathRecursion(_0x321b91,_0x776a0c,_0x5e0d4b,_0x48fcae);return path;}else return[_0x4c946a];};function pathRecursion(_0x261fc7,_0x490b07,_0x38a6eb,_0x8b8381){path[_0x1546('0x51')](_0x261fc7+','+_0x490b07);if(_0x38a6eb>_0x261fc7){if(_0x8b8381>_0x490b07)pathRecursion(_0x261fc7+0x1,_0x490b07+0x1,_0x38a6eb,_0x8b8381);else if(_0x8b8381<_0x490b07)pathRecursion(_0x261fc7+0x1,_0x490b07-0x1,_0x38a6eb,_0x8b8381);else if(_0x8b8381==_0x490b07)pathRecursion(_0x261fc7+0x1,_0x490b07,_0x38a6eb,_0x8b8381);}else if(_0x38a6eb<_0x261fc7){if(_0x8b8381>_0x490b07)pathRecursion(_0x261fc7-0x1,_0x490b07+0x1,_0x38a6eb,_0x8b8381);else if(_0x8b8381<_0x490b07)pathRecursion(_0x261fc7-0x1,_0x490b07-0x1,_0x38a6eb,_0x8b8381);else if(_0x8b8381==_0x490b07)pathRecursion(_0x261fc7-0x1,_0x490b07,_0x38a6eb,_0x8b8381);}else if(_0x38a6eb==_0x261fc7){if(_0x8b8381>_0x490b07)pathRecursion(_0x261fc7,_0x490b07+0x1,_0x38a6eb,_0x8b8381);else if(_0x8b8381<_0x490b07)pathRecursion(_0x261fc7,_0x490b07-0x1,_0x38a6eb,_0x8b8381);else if(_0x8b8381==_0x490b07)return;};};