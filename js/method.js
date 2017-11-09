var xx0, yy0, xx1, yy1, ff1, ff2, dd1 = 0;
var vx0, vy0, vx1, vy1, vF, vfg1m, vfg1g2, vfg1b, vfg1o, vrg2o, vrg2m, vrg2b, vrg2g1, vDo = 0;
function randomdg()
{
var corp=newcor();
var bd=60*Math.random();
var jzsx=bd.toFixed(0)*100;
var fgm=3000+1000*Math.random()-500;
var fpm=bd*100+1000*Math.random()-500;
var d = 10000*Math.random();
var corm=proCaculate(corp[0],corp[1],fpm,d);
var dgm = d*Math.random();
var corg=proCaculate(corm[0],corm[1],reverse(cacBasicFdirection(jzsx,fgm)),dgm);
fgm=becamebasic(jzsx,fgm);

set('dgx0',corp[0].toFixed(1));
set('dgy0',corp[1].toFixed(1));
set('dgx1',corg[0].toFixed(1));
set('dgy1',corg[1].toFixed(1));
set('dgf1',jzsx.toFixed(1));
set('dgf2',fgm.toFixed(1));
set('dgd1',dgm.toFixed(1));
}
function becamebasic(r,a){a = 3000-(a-r);if(a<0){a=a+6000;};return a;}
function randomdw()
{
var corp=newcor();
var bd=60*Math.random();
var jzsx=bd.toFixed(0)*100;
var fgm=3000+1000*Math.random()-500;
var fpm=bd*100+1000*Math.random()-500;
var d = 10000*Math.random();
var corm=proCaculate(corp[0],corp[1],fpm,d);
var corg=proCaculate(corm[0],corm[1],reverse(cacBasicFdirection(jzsx,fgm)),d*Math.random());
var corb=new Array(corg[0]+100*Math.random()-50, corg[1]+100*Math.random()-50);
var coro=new Array(corg[0]+3000*Math.random()-1500, corg[1]+3000*Math.random()-1500);
var corc=new Array(corg[0]+2000*Math.random()-1000, corg[1]+2000*Math.random()-1000);
var fgb = conCaculate(corg[0],corg[1],corb[0],corb[1])[0];
var dgb = conCaculate(corg[0],corg[1],corb[0],corb[1])[1];
var fgc = conCaculate(corg[0],corg[1],corc[0],corc[1])[0];
var fgo = conCaculate(corg[0],corg[1],coro[0],coro[1])[0];
var rcb = conCaculate(corc[0],corc[1],corb[0],corb[1])[0];
var rco = conCaculate(corc[0],corc[1],coro[0],coro[1])[0];
var rcm = conCaculate(corc[0],corc[1],corm[0],corm[1])[0];

rcm=becamebasic(jzsx,rcm);
rco=becamebasic(jzsx,rco);
rcb=becamebasic(jzsx,rcb);
fgo=becamebasic(jzsx,fgo);
fgc=becamebasic(jzsx,fgc);
fgb=becamebasic(jzsx,fgb);

var rcg = reverse(fgc);
set('sgx0',corp[0].toFixed(1));
set('sgy0',corp[1].toFixed(1));
set('sgx1',coro[0].toFixed(1));
set('sgy1',coro[1].toFixed(1));
set('sgf',jzsx.toFixed(1));
set('sgfg1g2',fgc.toFixed(1));
set('sgfg1m',fgm.toFixed(1));
set('sgfg1o',fgo.toFixed(1));
set('sgfg1b',fgb.toFixed(1));
set('sgdo',dgb.toFixed(1));
set('sgrg2g1',rcg.toFixed(1));
set('sgrg2o',rco.toFixed(1));
set('sgrg2b',rcb.toFixed(1));
set('sgrg2m',rcm.toFixed(1));
document.getElementById('content2').innerHTML = "观察所坐标"+corm[0].toFixed(1)+ ","+corm[1].toFixed(1);


}
function newcor()
{var cor = new Array(100000*Math.random(), 100000*Math.random());return cor;}
function randommutual()
{
var corz=newcor(); var corc=new Array;var coro=new Array;
corc[0]=corz[0]+1000*Math.random()-500; 
corc[1]=corz[1]+1000*Math.random()-500; 
coro[0]=corz[0]+10000*Math.random()-5000; 
coro[1]=corz[1]+10000*Math.random()-5000; 
var jx=conCaculate(corz[0], corz[1], corc[0], corc[1]);
var zg=conCaculate(corz[0], corz[1], coro[0], coro[1])[0];
var cg=conCaculate(corc[0], corc[1], coro[0], coro[1])[0];
set('muxz',coro[0].toFixed(1));
set('muyz',coro[1].toFixed(1));
set('mujxc',jx[1].toFixed(1));
set('mujxfw',jx[0].toFixed(1));
set('muzg',zg.toFixed(1));
set('mucg',cg.toFixed(1));
}
function randombehind()
{
var cora=newcor(); var corb=new Array;
corb[0]=cora[0]+10000*Math.random()-5000; 
corb[1]=cora[1]+10000*Math.random()-5000; 
var corc=newcor();
function newcp(){var cp = 100*Math.random();return cp;}
var cp = newcp();
var ca = conCaculate(corc[0], corc[1], cora[0], cora[1])[0];
var cb = conCaculate(corc[0], corc[1], corb[0], corb[1])[0] ;
ca=ca-cp;cb=cb-cp;
set('bhxa',cora[0].toFixed(1)); set('bhya',cora[1].toFixed(1)); set('bhxb',corb[0].toFixed(1));
set('bhyb',corb[1].toFixed(1)); set('bhcca',ca.toFixed(1)); set('bhccb',cb.toFixed(1)); set('bhcp',cp.toFixed(1));
}
function set(id,x)
{document.getElementById(id).value = x;}
function cacHightEffect(hight, dis) {
    dis = Math.sqrt(Math.abs(Math.pow(dis, 2) - Math.pow(height, 2)));
    return dis;
}
function changeAngleToRad(angle) {
    return ( angle * 2 * Math.PI / 6000);
}
function cacAngle(a, b) {
    var c = 3000 - a - b;
    return c;
}
function changeRadToMil(rad) {
    return rad * 6000 / (2 * Math.PI);
}
function changeMilToRad(mil) {
    return mil * 2 * Math.PI / 6000;
}
function caculatecon() {
    var P0 = parseFloat(document.getElementById("xaa").value);
    var P1 = parseFloat(document.getElementById("yaa").value);
    var O0 = parseFloat(document.getElementById("xbb").value);
    var O1 = parseFloat(document.getElementById("ybb").value);
    var end = new Array;
    end = conCaculate(P0, P1, O0, O1);
    document.getElementById('content1').innerHTML = "方位" + end[0].toFixed(2) + "距离" + end[1].toFixed(2);
}
function caculatepro() {
    var P0 = parseFloat(document.getElementById("xaaa").value);
    var P1 = parseFloat(document.getElementById("yaaa").value);
    var fw = parseFloat(document.getElementById("fw").value);
    var jl = parseFloat(document.getElementById("jl").value);
    var end = new Array;
    end = proCaculate(P0, P1, fw, jl);
    document.getElementById('content1').innerHTML = "B点x坐标" + end[0].toFixed(2) + "B点y坐标" + end[1].toFixed(2);
}
function caculatetri() {
    var Dab = parseFloat(document.getElementById("dab").value);
    var fa = parseFloat(document.getElementById("fa").value);
    var fb = parseFloat(document.getElementById("fb").value);
    var end = new Array;
    end = cacTreangleSide(fa, fb, Dab);
    document.getElementById('content1').innerHTML = "BC长为" + end[0].toFixed(2) + "AC长为" + end[1].toFixed(2);

}
function cacbetween(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a > b) {a = a-b;
if(a>3000){a=6000-a;}}
else{a = b-a; 
if(a>3000){a=6000-a;}}
return a;
    }
function cacTreangleSide(a, b, AB) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a > 3000) {
        a = 6000 - a;
    }
    if (b > 3000) {
        b = 6000 - b;
    }
    c = cacAngle(a, b);
    a = changeAngleToRad(a);
    b = changeAngleToRad(b);
    c = changeAngleToRad(c);
    BC = parseFloat(AB * Math.sin(a) / Math.sin(c));
    AC = parseFloat(AB * Math.sin(b) / Math.sin(c));
    var side = new Array(BC, AC);
    return side;
}
function proCaculate(x, y, mil, distance) {
    y = y + distance * Math.sin(changeAngleToRad(mil));
    x = x + distance * Math.cos(changeAngleToRad(mil));
    var coodinate = new Array(x, y);
    return coodinate;
}
function conCaculate(x0, y0, x1, y1) {
    if (x0 < x1 && y0 < y1) {
        rad = Math.atan((y1 - y0) / (x1 - x0));
        var Mil = changeRadToMil(rad);
        var distance = Math.sqrt(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2));
        var DMil = new Array(Mil, distance);
    }
    else if (x0 > x1 && y0 < y1) {
        rad = Math.atan((y1 - y0) / (x0 - x1));
        var Mil = 3000 - changeRadToMil(rad);
        var distance = Math.sqrt(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2));
        var DMil = new Array(Mil, distance);
    }
    else if (x0 > x1 && y0 > y1) {
        rad = Math.atan((y1 - y0) / (x1 - x0));
        var Mil = 3000 + changeRadToMil(rad);
        var distance = Math.sqrt(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2));
        var DMil = new Array(Mil, distance);
    }
    else {
        rad = Math.atan((y0 - y1) / (x1 - x0));
        var Mil = 6000 - changeRadToMil(rad);
        var distance = Math.sqrt(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2));
        var DMil = new Array(Mil, distance);
    }
    return DMil;
}

function milEquation(mil, dis) {
    var hight = mil * 2 * Math.PI * dis / 6000;
    return hight;
}
function cacBasicFdirection(F, f) {
    F = 3000 - f + F;
    return F;
}
function singleWatch(x0, y0, x1, y1, F, f, d) {
    f = cacBasicFdirection(F, f);
    var zhuyuan = new Array();
    var cor = proCaculate(x1, y1, f, d);
    zhuyuan = conCaculate(x0, y0, cor[0], cor[1]);
    document.getElementById('content2').innerHTML = document.getElementById('content2').innerHTML + " 方位等于" + zhuyuan[0].toFixed(2) + "距离等于" + zhuyuan[1].toFixed(2) + "目标点坐标X:" + cor[0].toFixed(2) + "Y:" + cor[1].toFixed(2);
}

function singleWatchex() {
    var f = cacBasicFdirection(get('dgf1'), get('dgf2'));
    var zhuyuan = new Array();
    var Hmdif = Math.sin(changeMilToRad(parseFloat(document.getElementById('dghm').value))) * get('dgd1');
    var dgd = Math.cos(changeMilToRad(parseFloat(document.getElementById('dghm').value))) * get('dgd1');
    var cor = proCaculate(get('dgx1'), get('dgy1'), f, dgd);
    zhuyuan = conCaculate(get('dgx0'), get('dgy0'), cor[0], cor[1]);

    var Heffect = parseFloat(document.getElementById('dghg').value) - parseFloat(document.getElementById('dghp').value) + Hmdif;
    document.getElementById('content2').innerHTML = "方位等于" + zhuyuan[0].toFixed(2) + "距离等于" + zhuyuan[1].toFixed(2) + "炮目高差" + Heffect.toFixed(2) + "目标点坐标X:" + cor[0].toFixed(2) + "Y:" + cor[1].toFixed(2);
}


function doubleWatch() {
    mainWatch = new Object();
    mainWatch.ToM = parseFloat(document.getElementById('sgfg1m').value);
    mainWatch.TosecWatch = parseFloat(document.getElementById('sgfg1g2').value);
    mainWatch.Tobg = parseFloat(document.getElementById('sgfg1b').value);
    mainWatch.Too = parseFloat(document.getElementById('sgfg1o').value);
    mainWatch.Dtobg = parseFloat(document.getElementById('sgdo').value);
    secWatch = new Object();
    secWatch.TomainWatch = parseFloat(document.getElementById('sgrg2g1').value);
    secWatch.ToM = parseFloat(document.getElementById('sgrg2m').value);
    secWatch.Tobg = parseFloat(document.getElementById('sgrg2b').value);
    secWatch.Too = parseFloat(document.getElementById('sgrg2o').value);
    Pcoodinate = new Array(parseFloat(document.getElementById('sgx0').value), parseFloat(document.getElementById('sgy0').value));
    Ocoodinate = new Array(parseFloat(document.getElementById('sgx1').value), parseFloat(document.getElementById('sgy1').value));
    var xm, ym = 0;
    var g1g2 = cacTreangleSide(mainWatch.Tobg - mainWatch.TosecWatch, 3000 - (secWatch.TomainWatch - secWatch.Tobg + mainWatch.Tobg - mainWatch.TosecWatch), mainWatch.Dtobg)[1];
    var g1o = cacTreangleSide(mainWatch.TosecWatch - mainWatch.Too, secWatch.Too - secWatch.TomainWatch, g1g2)[1];
    mil = cacBasicFdirection(parseFloat(document.getElementById('sgf').value), mainWatch.Too);
    if (mil > 3000) {
        mil = mil - 3000;
    } else {
        mil = 3000 + mil;
    }
    xm = proCaculate(parseFloat(document.getElementById('sgx1').value), parseFloat(document.getElementById('sgy1').value), mil, g1o)[0];
    ym = proCaculate(parseFloat(document.getElementById('sgx1').value), parseFloat(document.getElementById('sgy1').value), mil, g1o)[1];
    var Gcoodinate = new Array(xm, ym);
    var Dg1m = cacTreangleSide(mainWatch.ToM - mainWatch.TosecWatch, secWatch.TomainWatch - secWatch.ToM, g1g2)[1];

    document.getElementById('content2').innerHTML = "观目距离" + Dg1m.toFixed(2) + "主观侧观距离" + g1g2.toFixed(2);
    singleWatch(parseFloat(document.getElementById('sgx0').value), parseFloat(document.getElementById('sgy0').value), get('sgx1'), get('sgy1'), parseFloat(document.getElementById('sgf').value), mainWatch.ToM, Dg1m);
}


function correctboom() {
    var F = cacBasicFdirection(get('xzff'), get('xzfgm'));
    var j = Math.abs(F - get('xzfpm'));
    var B = get('xzdgm') / get('xzdpm');
    var L = j / get('xzdpm');
    var corMil = 0;
    var corHigh = 0;
    if (F > get('xzfpm'))//观在左
    {
        corMil = -get('xzori') * B - get('xzdis') * L;
        corHigh = -get('xzdis') * get('xzbb') / 100;
    }
    else//观在右
    {
        corMil = -get('xzori') * B + get('xzdis') * L;
        corHigh = -get('xzdis') * get('xzbb') / 100;
    }
    document.getElementById('content2').innerHTML = "方向修正" + corMil.toFixed(2) + "高低修正" + corHigh.toFixed(2);
}

function get(name) {
    var nam = parseFloat(document.getElementById(name).value);
    return nam;
}
function anglechange(an) {
    if (an > 3000) {
        an = an - 3000;
    }
    return an;

}
function change(an) {
    if (an > 6000) {
        an = an - 6000;
    }
    return an;

}
function basicdirection() {

    var val = cacTreangleSide(3000 - anglechange(get('bdfzg') - get('bdfcg')) - (3000 - anglechange(get('bdzc') - get('bdfcg'))), 3000 - anglechange(get('bdzc') - get('bdfcg')), get('bdjxc'))[1];
    var cor = proCaculate(get('bdxg'), get('bdyg'), cacBasicFdirection(get('bdjzsx'), get('bdfzg')), val);
    document.getElementById('content3').innerHTML = "目标X" + cor[0].toFixed(2) + "目标Y" + cor[1].toFixed(2);
}
function baseline() {

}
function changemag(mil, cp) {
    mil = mil + cp;
    return mil;
}
function reverse(an) {
    if (an > 3000) {
        var and = an - 3000;
    }
    else {
        var and = an + 3000;
    }
    return and;
}
function behind() {
    var con = conCaculate(get('bhxa'), get('bhya'), get('bhxb'), get('bhyb'));
if(cacbetween(get('bhcca')+get('bhcp'),reverse(con[0]) )+ cacbetween(get('bhccb')+get( 'bhcp'), con[0])+cacbetween(get('bhcca'),get('bhccb'))>3000)
{document.getElementById('content3').innerHTML = "磁方位角错误" ;}
else{
    var angleA = changemag(reverse(get('bhcca')), get('bhcp')) - con[0];
    var bc = cacside(get('bhcca')-get('bhccb'),con[1],angleA);
    var cor = proCaculate(get('bhxb'), get('bhyb'), reverse(changemag(get('bhccb'), get('bhcp'))), bc);
    document.getElementById('content3').innerHTML = "C坐标X" + cor[0].toFixed(2) + "C坐标Y" + cor[1].toFixed(2);}
}
function polar() {
    var height = get('podgm') * Math.sin(changeMilToRad(get('pogd')));
    var dis = get('podgm') * Math.cos(changeMilToRad(get('pogd')));
    var cor = proCaculate(get('poxg'), get('poyg'), cacBasicFdirection(get('pojzsx'), get('pofgm')), dis)
    var hm = get('pohg') + height;
    document.getElementById('content3').innerHTML = '目标点坐标X' + cor[0].toFixed(2) + 'Y' + cor[1].toFixed(2) + '目标点高程' + hm.toFixed(2);
}
function lead() {


    var an1 = change(get('lena') + get('lef1')-3000);
    var cor1 = proCaculate(get('lexa'), get('leya'), an1, get('led1'));
    an1 = change(an1 + get('lef2')-3000);
    var cor2 = proCaculate(cor1[0], cor1[1], an1, get('led2'));
    an1 = change(an1 + get('lef3')-3000);
    var cor = proCaculate(cor2[0], cor2[1], an1, get('led3'));
    document.getElementById('content3').innerHTML = '目标坐标X' + cor[0].toFixed(2) + 'Y' + cor[1].toFixed(2);
}
function cacside(a, bc, b) {
    if (3000 > b > 1500 || 6000 > b > 4500) {
        if (3000 > a > 1500 || 6000 > a > 4500) {
            var ac = Math.cos(changeMilToRad(b)) * bc / Math.cos(changeMilToRad(a));
        }
        else {
            var ac = Math.cos(changeMilToRad(b)) * bc / Math.sin(changeMilToRad(a));
        }

    }
    else {
        if (3000 > a > 1500 || 6000 > a > 4500) {
            var ac = Math.sin(changeMilToRad(b)) * bc / Math.cos(changeMilToRad(a));
        }
        else {
            var ac = Math.sin(changeMilToRad(b)) * bc / Math.sin(changeMilToRad(a));
        }
    }
    return Math.abs(ac);
}
function mutual() {
    function cacdeviation(r) {
        if (r > 3000) {
            r = r - 3000;
        }
        else if (r < 3000) {

            r = 3000 - r;
        }
        return r;
    }

    var AC = cacside(get('muzg') - get('mucg'), get('mujxc'), get('mucg'));
    var cor = proCaculate(get('muxz'), get('muyz'), cacBasicFdirection(reverse(get('mujxfw')), get('muzg')), AC);
    document.getElementById('content3').innerHTML = '目标点坐标X' + cor[0].toFixed(2) + '坐标Y' + cor[1].toFixed(2);
}