const _0x5d09b9=_0xc386;(function(_0x1f72e4,_0x285824){const _0x218d48=_0xc386,_0x5dbbc4=_0x1f72e4();while(!![]){try{const _0x15aa01=-parseInt(_0x218d48(0x162))/0x1+parseInt(_0x218d48(0x189))/0x2*(-parseInt(_0x218d48(0x173))/0x3)+-parseInt(_0x218d48(0x150))/0x4+parseInt(_0x218d48(0x16d))/0x5+-parseInt(_0x218d48(0x142))/0x6+parseInt(_0x218d48(0x149))/0x7+-parseInt(_0x218d48(0x15e))/0x8*(-parseInt(_0x218d48(0x17d))/0x9);if(_0x15aa01===_0x285824)break;else _0x5dbbc4['push'](_0x5dbbc4['shift']());}catch(_0x211130){_0x5dbbc4['push'](_0x5dbbc4['shift']());}}}(_0x48d9,0x22691));const canvas=document['getElementById'](_0x5d09b9(0x16a)),ctx=canvas[_0x5d09b9(0x17c)]('2d'),bgMusic=document[_0x5d09b9(0x172)](_0x5d09b9(0x17b));canvas['width']=0x438,canvas[_0x5d09b9(0x16e)]=0x2d0;const player={'x':canvas[_0x5d09b9(0x144)]/0x2,'y':canvas['height']/0x2,'radius':0x3,'speed':0x2,'velocityX':0x0,'velocityY':0x0,'friction':0.02,'score':0x0},enemies=[],maxEnemies=0x12;let isGameOver=![],isGameFrozen=![],showUI=!![],isMenuActive=!![];function _0x48d9(){const _0x4d1f33=['arc','fullscreenElement','right','80px\x20Arial','speedX','font','beginPath','4014VdxBSb','ArrowDown','Credits','fillStyle','keydown','ArrowUp','radius','random','center','436668TdXkXf','Playback\x20failed:','width','playbackRate','fill','requestFullscreen','floor','1215739YGqYwZ','catch','velocityX','then','paused','Enter','neonpink','241400mHpaki','#000000','Space','Spacebar','velocityY','key','length','pause','180px\x20Arial','sqrt','fillRect','2023','splice','rgba(255,\x2016,\x20240,\x200.5)','12616PkFqCp','addEventListener','Unknown\x20menu\x20option','speed','221510uWGhHM','Score:\x20','friction','fillText','message','Press\x20Space\x20to\x20Restart','#FFFFFF','Instructions','gameCanvas','play','by\x20ficker.eth','681960qILmLC','height','score','Play','36px\x20Arial','getElementById','48gGntZn','push','20px\x20Arial','textAlign','24px\x20Arial','Tab','#FF10F0','Options','bgMusic','getContext','1242NQJSIN','error','volume','keyup','lineWidth'];_0x48d9=function(){return _0x4d1f33;};return _0x48d9();}function createEnemy(){const _0xb1d432=_0x5d09b9,_0x45849f=Math[_0xb1d432(0x140)]()<0.5,_0xa53460=_0x45849f?-0x14:canvas[_0xb1d432(0x144)]+0x14,_0x1c59b2=Math[_0xb1d432(0x140)]()*canvas[_0xb1d432(0x16e)],_0x254623=_0x45849f?0x1+Math[_0xb1d432(0x140)]()*0x2:-0x1-Math[_0xb1d432(0x140)]()*0x2,_0x302ec2=getRandomEnemySize();enemies[_0xb1d432(0x174)]({'x':_0xa53460,'y':_0x1c59b2,'radius':_0x302ec2,'speedX':_0x254623});}function getRandomEnemySize(){const _0x2d139b=_0x5d09b9,_0x39b0ea=Math['random']()*0x64;if(_0x39b0ea<=0x14)return Math[_0x2d139b(0x148)](Math[_0x2d139b(0x140)]()*0x4)+0x1;else{if(_0x39b0ea<=0x37)return Math[_0x2d139b(0x148)](Math['random']()*0x33)+0x5;else{if(_0x39b0ea<=0x50)return Math['floor'](Math['random']()*0x19)+0x38;else return _0x39b0ea<=0x5f?Math[_0x2d139b(0x148)](Math[_0x2d139b(0x140)]()*0xb)+0x51:Math[_0x2d139b(0x148)](Math['random']()*0xa)+0x5b;}}}function handleEnemies(){const _0x939fdd=_0x5d09b9;if(isGameFrozen)return;enemies['length']<maxEnemies&&createEnemy();for(let _0x2fdf2c=enemies[_0x939fdd(0x156)]-0x1;_0x2fdf2c>=0x0;_0x2fdf2c--){const _0x39e80a=enemies[_0x2fdf2c];_0x39e80a['x']+=_0x39e80a[_0x939fdd(0x186)];(_0x39e80a['x']<-0x14||_0x39e80a['x']>canvas[_0x939fdd(0x144)]+0x14)&&(enemies[_0x939fdd(0x15c)](_0x2fdf2c,0x1),createEnemy());player[_0x939fdd(0x13f)]>=0x1ea&&enemies[_0x939fdd(0x15c)](_0x2fdf2c,0x1);const _0x4a2978=_0x39e80a['x']-player['x'],_0x3ecc95=_0x39e80a['y']-player['y'],_0x504b73=Math[_0x939fdd(0x159)](_0x4a2978*_0x4a2978+_0x3ecc95*_0x3ecc95);if(_0x504b73<player[_0x939fdd(0x13f)]+_0x39e80a[_0x939fdd(0x13f)]){if(_0x39e80a['radius']<player[_0x939fdd(0x13f)]){let _0x28063f=0x0;if(_0x39e80a[_0x939fdd(0x13f)]>=0x1&&_0x39e80a[_0x939fdd(0x13f)]<=0x4)player['radius']+=0x1,_0x28063f=0x64;else{if(_0x39e80a['radius']>=0x5&&_0x39e80a[_0x939fdd(0x13f)]<=0x37)player[_0x939fdd(0x13f)]+=0x2,_0x28063f=0xc8;else{if(_0x39e80a['radius']>=0x38&&_0x39e80a['radius']<=0x50)player[_0x939fdd(0x13f)]+=0x3,_0x28063f=0x12c;else{if(_0x39e80a['radius']>=0x51&&_0x39e80a[_0x939fdd(0x13f)]<=0x5a)player[_0x939fdd(0x13f)]+=0x4,_0x28063f=0x190;else _0x39e80a[_0x939fdd(0x13f)]>=0x5b&&_0x39e80a[_0x939fdd(0x13f)]<=0x64&&(player[_0x939fdd(0x13f)]+=0x5,_0x28063f=0x1f4);}}}player[_0x939fdd(0x16f)]+=_0x28063f,enemies['splice'](_0x2fdf2c,0x1);}else isGameOver=!![],isGameFrozen=!![];}}}function drawPlayer(){const _0x217e3b=_0x5d09b9;ctx['fillStyle']=_0x217e3b(0x179),ctx[_0x217e3b(0x188)](),ctx[_0x217e3b(0x182)](player['x'],player['y'],player['radius'],0x0,Math['PI']*0x2),ctx[_0x217e3b(0x146)]();}function drawEnemies(){const _0x4fc760=_0x5d09b9;ctx['fillStyle']=_0x4fc760(0x168);for(const _0x170ff7 of enemies){ctx[_0x4fc760(0x188)](),ctx[_0x4fc760(0x182)](_0x170ff7['x'],_0x170ff7['y'],_0x170ff7[_0x4fc760(0x13f)],0x0,Math['PI']*0x2),ctx[_0x4fc760(0x146)]();}}function drawScore(){const _0x46653c=_0x5d09b9;ctx[_0x46653c(0x13c)]=_0x46653c(0x15d),ctx['strokeStyle']=_0x46653c(0x151),ctx[_0x46653c(0x181)]=0x4,ctx[_0x46653c(0x187)]=_0x46653c(0x177),ctx['textAlign']=_0x46653c(0x184),showUI&&ctx[_0x46653c(0x165)](_0x46653c(0x163)+player[_0x46653c(0x16f)],canvas[_0x46653c(0x144)]-0x14,canvas[_0x46653c(0x16e)]-0x14);}function movePlayer(){const _0x720715=_0x5d09b9;if(isGameFrozen)return;player[_0x720715(0x14b)]*=player['friction'],player['velocityY']*=player[_0x720715(0x164)];(keys[_0x720715(0x13e)]||keys['w'])&&(player[_0x720715(0x154)]-=player['speed']);(keys[_0x720715(0x18a)]||keys['s'])&&(player[_0x720715(0x154)]+=player[_0x720715(0x161)]);(keys['ArrowLeft']||keys['a'])&&(player[_0x720715(0x14b)]-=player[_0x720715(0x161)]);(keys['ArrowRight']||keys['d'])&&(player[_0x720715(0x14b)]+=player[_0x720715(0x161)]);player['x']+=player[_0x720715(0x14b)],player['y']+=player[_0x720715(0x154)];let _0x42bf5e=0x186;if(player['x']-player[_0x720715(0x13f)]<0x0)player['x']=player[_0x720715(0x13f)],player[_0x720715(0x14b)]=0x0;else player['x']+player['radius']>canvas[_0x720715(0x144)]&&(player['x']=canvas[_0x720715(0x144)]-player[_0x720715(0x13f)],player['velocityX']=0x0);if(player['y']-player[_0x720715(0x13f)]<0x0)player['y']=player[_0x720715(0x13f)],player[_0x720715(0x154)]=0x0;else player['y']+player['radius']>canvas[_0x720715(0x16e)]&&(player['y']=canvas[_0x720715(0x16e)]-player[_0x720715(0x13f)],player['velocityY']=0x0);}const keys={};window[_0x5d09b9(0x15f)](_0x5d09b9(0x13d),_0x124d40=>{const _0x1060d6=_0x5d09b9;keys[_0x124d40[_0x1060d6(0x155)]]=!![];}),window[_0x5d09b9(0x15f)](_0x5d09b9(0x180),_0x3a99f0=>{const _0x7d3b8a=_0x5d09b9;keys[_0x3a99f0[_0x7d3b8a(0x155)]]=![];});function update(){if(isMenuActive)return;movePlayer(),handleEnemies(),player['radius']>=0x1ea&&(isGameOver=!![],isGameFrozen=!![]);}function _0xc386(_0xd03684,_0x5bd049){const _0x48d9e2=_0x48d9();return _0xc386=function(_0xc386be,_0x42043e){_0xc386be=_0xc386be-0x13c;let _0x57c2fe=_0x48d9e2[_0xc386be];return _0x57c2fe;},_0xc386(_0xd03684,_0x5bd049);}const menuItems=['Play',_0x5d09b9(0x169),_0x5d09b9(0x18b)];let selectedItemIndex=0x0;function render(){const _0x40d82e=_0x5d09b9;ctx['fillStyle']=_0x40d82e(0x151),ctx[_0x40d82e(0x15a)](0x0,0x0,canvas[_0x40d82e(0x144)],canvas['height']);if(isMenuActive){ctx[_0x40d82e(0x13c)]='#FF10F0',ctx[_0x40d82e(0x187)]=_0x40d82e(0x158),ctx[_0x40d82e(0x176)]=_0x40d82e(0x141),ctx[_0x40d82e(0x165)](_0x40d82e(0x14f),canvas[_0x40d82e(0x144)]/0x2,canvas[_0x40d82e(0x16e)]/0x2-0x32);for(let _0x58e25e=0x0;_0x58e25e<menuItems[_0x40d82e(0x156)];_0x58e25e++){ctx[_0x40d82e(0x187)]=_0x40d82e(0x171),_0x58e25e===selectedItemIndex?ctx[_0x40d82e(0x13c)]=_0x40d82e(0x168):ctx[_0x40d82e(0x13c)]='#FF10F0',ctx['fillText'](menuItems[_0x58e25e],canvas[_0x40d82e(0x144)]/0x2,canvas[_0x40d82e(0x16e)]/0x2+0x2d+0x28*_0x58e25e);}ctx[_0x40d82e(0x13c)]='#FFFFFF',ctx[_0x40d82e(0x187)]=_0x40d82e(0x177),ctx['fillText'](_0x40d82e(0x16c),canvas[_0x40d82e(0x144)]/0x2+0x12c,canvas[_0x40d82e(0x16e)]/0x2-0x14),ctx[_0x40d82e(0x187)]=_0x40d82e(0x175),ctx[_0x40d82e(0x165)](_0x40d82e(0x15b),canvas[_0x40d82e(0x144)]/0x2,canvas[_0x40d82e(0x16e)]/0x2+0x5a+0x48*menuItems[_0x40d82e(0x156)]);}else{if(player['radius']>=0x1ea){ctx['fillStyle']='#FF10F0',ctx[_0x40d82e(0x15a)](0x0,0x0,canvas[_0x40d82e(0x144)],canvas[_0x40d82e(0x16e)]),ctx[_0x40d82e(0x13c)]=_0x40d82e(0x168),ctx[_0x40d82e(0x187)]=_0x40d82e(0x185),ctx[_0x40d82e(0x176)]=_0x40d82e(0x141),ctx[_0x40d82e(0x165)]('',canvas[_0x40d82e(0x144)]/0x2,canvas[_0x40d82e(0x16e)]/0x2-0x12),ctx['font']=_0x40d82e(0x177),ctx[_0x40d82e(0x165)]('',canvas[_0x40d82e(0x144)]/0x2,canvas['height']/0x2+0x36);return;}else drawEnemies(),drawPlayer(),drawScore(),isGameOver&&showUI&&(ctx[_0x40d82e(0x13c)]=_0x40d82e(0x179),ctx[_0x40d82e(0x187)]=_0x40d82e(0x185),ctx[_0x40d82e(0x176)]=_0x40d82e(0x141),ctx[_0x40d82e(0x165)]('Game\x20Over!',canvas[_0x40d82e(0x144)]/0x2,canvas[_0x40d82e(0x16e)]/0x2-0x12),ctx['font']=_0x40d82e(0x177),ctx['fillText'](_0x40d82e(0x167),canvas[_0x40d82e(0x144)]/0x2,canvas[_0x40d82e(0x16e)]/0x2+0x36));}}function gameLoop(){const _0x34851c=_0x5d09b9;update(),render(),requestAnimationFrame(gameLoop);if(isMenuActive){if(!bgMusic[_0x34851c(0x14d)])bgMusic[_0x34851c(0x157)]();}else bgMusic['paused']&&bgMusic[_0x34851c(0x16b)]();bgMusic[_0x34851c(0x14d)]&&bgMusic[_0x34851c(0x16b)]();}document['addEventListener']('DOMContentLoaded',function(){const _0x5bde6a=_0x5d09b9;var _0x464114=document[_0x5bde6a(0x172)]('myAudio');_0x464114[_0x5bde6a(0x145)]=0.5;let _0x3cd702=bgMusic['play']();_0x3cd702!==undefined&&_0x3cd702[_0x5bde6a(0x14c)](_0x317587=>{})['catch'](_0x54a61e=>{const _0x4fb035=_0x5bde6a;console[_0x4fb035(0x17e)]('Playback\x20failed:',_0x54a61e[_0x4fb035(0x166)]);});}),document[_0x5d09b9(0x15f)](_0x5d09b9(0x13d),_0x29e1f4=>{const _0x929382=_0x5d09b9;if(isMenuActive){if(_0x29e1f4[_0x929382(0x155)]==='ArrowUp')selectedItemIndex--,selectedItemIndex<0x0&&(selectedItemIndex=menuItems[_0x929382(0x156)]-0x1);else{if(_0x29e1f4['key']===_0x929382(0x18a))selectedItemIndex++,selectedItemIndex>=menuItems['length']&&(selectedItemIndex=0x0);else{if(_0x29e1f4['key']===_0x929382(0x14e)||_0x29e1f4[_0x929382(0x155)]===_0x929382(0x152))switch(menuItems[selectedItemIndex]){case _0x929382(0x170):isMenuActive=![];break;case _0x929382(0x17a):break;case _0x929382(0x18b):break;default:console[_0x929382(0x17e)](_0x929382(0x160));}}}}if(isGameOver&&_0x29e1f4['key']==='Backspace'){isMenuActive=!![];return;}}),document[_0x5d09b9(0x15f)]('keydown',_0x51da3d=>{const _0x1142af=_0x5d09b9;if(isGameOver&&(_0x51da3d['key']==='\x20'||_0x51da3d['key']===_0x1142af(0x153)||_0x51da3d['key']==='r'||_0x51da3d[_0x1142af(0x155)]===_0x1142af(0x14e))){restartGame();(isGameOver||isVictory)&&(_0x51da3d[_0x1142af(0x155)]==='\x20'||_0x51da3d[_0x1142af(0x155)]===_0x1142af(0x153)||_0x51da3d['key']==='r'||_0x51da3d[_0x1142af(0x155)]==='Enter')&&playAgain();bgMusic['currentTime']=0x0,bgMusic[_0x1142af(0x17f)]=0.5;let _0x158d87=bgMusic[_0x1142af(0x16b)]();_0x158d87!==undefined&&_0x158d87[_0x1142af(0x14c)](_0x233bb9=>{})[_0x1142af(0x14a)](_0xea5fa2=>{const _0x46acc1=_0x1142af;console['error'](_0x46acc1(0x143),_0xea5fa2[_0x46acc1(0x166)]);});}_0x51da3d[_0x1142af(0x155)]===_0x1142af(0x178)&&(showUI=!showUI),_0x51da3d[_0x1142af(0x155)]==='f'&&toggleFullscreen();});function restartGame(){const _0x1aa209=_0x5d09b9;player['x']=canvas['width']/0x2,player['y']=canvas[_0x1aa209(0x16e)]/0x2,player[_0x1aa209(0x13f)]=0x3,player[_0x1aa209(0x16f)]=0x0,enemies[_0x1aa209(0x156)]=0x0,isGameOver=![],isGameFrozen=![];}function toggleFullscreen(){const _0x4edb05=_0x5d09b9;document[_0x4edb05(0x183)]?document['exitFullscreen']():canvas[_0x4edb05(0x147)]()['catch'](_0x58cd72=>{const _0xfe43be=_0x4edb05;console['error']('Error\x20attempting\x20to\x20enable\x20fullscreen:',_0x58cd72[_0xfe43be(0x166)]);});}gameLoop();
console.log("ficker.eth");
