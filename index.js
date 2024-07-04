let allgears = [];
let gear = [];
let checkNull = [];
let checkZero = [];
let dGear=[];
let alldGear=[];
let name;
let RPM;
let Dmg;
let lowerBodyDmg = 0;
let headDmg = 0;
let upLegDmg = 0;
let health = 300;
let chooser;
let maxLowerBodyshot;
let maxHeadshot;
let maxBodyshot;
var maxUpLegShot;
let mHealth = 300;
var numHeadshot = 0;
var numLowerBodyshot = 0;
var numBodyshot = 0;
var numUpLegshot =0;
let ttkD;
let firstCalc = false;
var thisGear
let ttk;

function listDefault(){
    dPushGear("BP50", 33, 30 ,28, 28, 857.1)
    dPushGear("Bal-27", 30, 30, 28,28, 697.7)
    dPushGear("SVA 545",40,31,31,29,681.8)
    dPushGear("RAM-7",33,28,28,25,750)
    dPushGear("MTZ-556",32,29,29,27,810.8)
    dPushGear("Holger 556",49,38,38,32,588.2)
    dPushGear("MCW", 36,30,28,28,714.3)
    dPushGear("SOA SUBVERTER", 40,39,34,34,697.7)
    dPushGear("BAS-B", 42,36,36,30,600)
    dPushGear("Sidewinder", 84,60,60,57,375)
    dPushGear("MTZ-762",58,49,49,45,540.5)
    dPushGear("FJX HORUS",39,27,25,25,983.6)
    dPushGear("RAM-9", 32,29,29,27,923.1)
    dPushGear("AMR9",35,29,27,27,833.3)
    dPushGear("Rival-9",33,28,28,26,909.1)
    dPushGear("HRM-9",32,29,28,28,882.4)
    dPushGear("Striker 9", 37,31,31,29,857.1)
    dPushGear("Striker", 46,39,36,36,645.2)
    dPushGear("WSP-9",54,46,42,42,599.5)
    dPushGear("WSP Swarm", 29,27,27,24,1090.9)
    dPushGear("TAQ EVOLVERE",52,48,44,40,499.8)
    dPushGear("BRUEN MK9",35,28,26,26,759.1)
    dPushGear("PULEMYOT 762",48,44,40,40,491.6)
    dPushGear("DG-58 LSW", 40,31,31,29,705.9)
    dPushGear("TAQ ERADICATOR", 36,33,33,30,857.1)
    dPushGear("Holger 26",33,30,30,28,705.9)


   
    

    for(i=0; i<alldGear.length;i++){

        var li = document.createElement("li");
        var b = document.createElement("button");
        var onClk = document.createAttribute("onclick");
        var Value = document.createAttribute("value");
        Value.value = i;
        var bClass = document.createAttribute("class");
        bClass.value= "listButton"
        onClk.value = "loadDefault(this)";
        b.setAttributeNode(bClass);

        b.setAttributeNode(onClk);
        b.setAttributeNode(Value);
        b.appendChild(document.createTextNode(alldGear[i][0]));
        li.appendChild(b);
        sga.appendChild(li);
    }
    
}
function filterNames() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('savedGearList');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
function logGun() {
    checkNull = [this.name]
    checkZero = [this.Dmg, this.RPM]
    console.log(valuesNull(checkNull));

    if (valuesZero(checkZero) || !firstCalc || valuesNull(checkNull)) {
        alert("Please Do Not Leave Anything Blank");
    }else{
        console.log(gearExists(this.name));
    if(gearExists(this.name).toString()=="false"&& this.name.toString().length<15){
    pushGear();
    var li = document.createElement("li");
    var b = document.createElement("button");
    var bClass = document.createAttribute("class");
    bClass.value= "listButton"
    var onClk = document.createAttribute("onclick");
    var Value = document.createAttribute("value");
    var v = gearID();
    Value.value = v;
    onClk.value = "loadGear(this)";
    b.setAttributeNode(onClk);
    b.setAttributeNode(bClass);
    b.setAttributeNode(Value);
    b.appendChild(document.createTextNode(AgetGearName(allgears.length - 1)));
    li.appendChild(b);
    gearList.appendChild(li);
    if(CGL.classList.contains('active')){
   toggleActive('gearList');
    }
    console.log(CGL.classList.contains('active'));
}else if (this.name.toString().length<15){
   
    allgears[gearExists(this.name)][1] =this.RPM;
    allgears[gearExists(this.name)][2] = this.Dmg;
    allgears[gearExists(this.name)][3] = this.lowerBodyDmg;
    allgears[gearExists(this.name)][4] = this.headDmg;

} else {
    alert("Gun Name Too Long");
}
}
}
function gearExists(gn){

for(i=0; i<allgears.length; i++){
    if(AgetGearName(i)==gn){
        return i;
   } 
  } 
return false;
}
function gearID() {


    return ((allgears.length - 1));
}
function toggleVisible(e) {
    var x = document.getElementById(e);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
function toggleActive(e){
    var x = document.getElementById(e);

x.classList.toggle("active")


}
function pushGear() {

    gear = [];
    gear.push(this.name.toString());
    gear.push(this.RPM);
    gear.push(this.Dmg);
    gear.push(this.lowerBodyDmg);
    gear.push(this.headDmg);
    gear.push(this.upLegDmg);

    allgears.push(gear);
}
function dPushGear(n,h,d,l,ul,r){
    dGear =[];
    dGear.push(n.toString());
    dGear.push(r);
    dGear.push(d);
    dGear.push(l);
    dGear.push(h);
    dGear.push(ul)

    alldGear.push(dGear);
}
function gearList() {

}

function AgetGearName(i) {
    return allgears[i][0];
}
function AgetGearLbDmg(i) {
    return allgears[i][3];
}
function AgetGearDmg(i) {
    return allgears[i][2];
}
function AgetGearRPM(i) {
    return allgears[i][1];
}
function AgetGearHD(i) {
    return allgears[i][4];
}
function AgetGearUL(i){
    return allgears[i][5];
}
function getGLB() {
    return gear[3]
}
function getGD() {
    return gear[2]
}
function getGRPM() {
    return gear[1]
}
function getGH() {
    return gear[4]
}
function getUL() {
    return gear[5]
}

function gunTTK() {
    firstCalc = true;

    this.upLegDmg = document.querySelector('#userInput5').value
    this.name = document.querySelector('#userInput').value
    this.RPM = document.querySelector('#userInput1').value
    this.Dmg = document.querySelector('#userInput2').value
    this.lowerBodyDmg = document.querySelector('#userInput3').value
    this.headDmg = document.querySelector('#userInput4').value

    console.log(valuesZero(checkZero))

    checkZero = [this.Dmg, this.RPM]
    checkNull = [this.name]
    console.log(this.Dmg);
    console.log(this.name);
    console.log(this.RPM);

    if (valuesZero(checkZero) || valuesNull(checkNull)) {
        console.log("hallo");

        alert("Please Do Not Leave Anything Blank");
    } else {
        if(ULDF&&HSDF&&LBDF){
    gunTTKD();
        }
        setSHealth();
        console.log(mHealth);
         ttk = ((Math.ceil(health / this.Dmg)-1) / (this.RPM / 60)) * 1000;
        console.log(ttk);
        showTTK.value = Math.round(ttk).toString()+"ms";
    }
}

function loadGear(ph) {
     thisGear = ph.value;
    console.log(ph.value);
    culDmg.value = AgetGearUL(thisGear);
    cbDmg.value = AgetGearDmg(thisGear);
    crpm.value = AgetGearRPM(thisGear);
    chsDmg.value = AgetGearHD(thisGear);
    clbDmg.value = AgetGearLbDmg(thisGear);
    cName.value = AgetGearName(thisGear);

    rpmFill();
    bDmgFill();
    nameFill();
    textFilledHSD(document.querySelector('#userInput4'));
    textFilledLBD(document.querySelector('#userInput3'));
    textFilledULD(document.querySelector('#userInpu53'));
    console.log(crpm.value);


    console.log(ph.value);
}
function loadDefault(ph){
     thisGear = ph.value;
    console.log(ph.value);
    culDmg.value = alldGear[thisGear][5];
    cbDmg.value = alldGear[thisGear][2];
    crpm.value = alldGear[thisGear][1];
    chsDmg.value = alldGear[thisGear][4];
    clbDmg.value = alldGear[thisGear][3];
    cName.value = alldGear[thisGear][0];
    rpmFill(document.querySelector('#userInput1'));
    bDmgFill(document.querySelector('#userInput2'));
    nameFill(document.querySelector('#userInput'));
    textFilledHSD(document.querySelector('#userInput4'));
    textFilledLBD(document.querySelector('#userInput3'));
    textFilledULD(document.querySelector('#userInput5'));

    addOptions();
}
function selectedNull(){

            if (  document.querySelector('#uls').value == "") {
                numUpLegshot = 0;

            } else{ 
                       numUpLegshot = document.querySelector('#uls').value
        }
            if (  document.querySelector('#bs').value == "") {
                numBodyshot = 0;
            } else{     
                   numBodyshot = document.querySelector('#bs').value
        }
            if (  document.querySelector('#hss').value == "") {
                numHeadshot = 0;
            } else{      
                  numHeadshot = document.querySelector('#hss').value
        }
            if (  document.querySelector('#lbs').value == "") {
                numLowerBodyshot = 0;
            } else{        
                numLowerBodyshot =document.querySelector('#lbs').value
        }
}
function setSHealth(){
mHealth = parseInt(document.getElementById("sHealth").value);
health= parseInt(document.getElementById("sHealth").value)

}
function gunTTKD() {



    checkZero[this.lowerBodyDmg, this.Dmg, this.headDmg, this.upLegDmg]
    if (valuesZero(checkZero)) {
        console.log("hallo");
        alert("Please Put Values");
    } else {
        selectedNull();
        mHealth = 300;
        setSHealth();

        // numUpLegshot = document.querySelector('#uls').value
        // numBodyshot = document.querySelector('#bs').value
        // numLowerBodyshot =document.querySelector('#lbs').value
        // numHeadshot = document.querySelector('#hss').value
        console.log(document.querySelector('#hss').value)
        console.log(numHeadshot);
console.log( document.querySelector('#uls').value == "");

        setSHealth();

        getmHealth(numBodyshot,this.Dmg);
        getmHealth(numHeadshot,this.headDmg);
        getmHealth(numLowerBodyshot,this.lowerBodyDmg);
        getmHealth(numUpLegshot,this.upLegDmg);
        console.log(mHealth);
        getTTKD();
        addOptions();
    }

}
function getmHealth(numShots, dmg){
    mHealth = sHealth;
    mHealth -=numShots*dmg;
}
function valuesNull(x) {
    for (i = 0; i < x.length; i++) {
        if (x[i] == null || x[i] < 0 || x[i] == 'undefined' || x[i] == "") {
            return true;
        } else {
            return false;
        }
    }


}
function valuesZero(x) {
    for (i = 0; i < x.length; i++) {
        if (x[i] == 0 || x[i] < 0) {
            return true;
        } else {
            return false;
        }
    }
}

function autoCalc() {
    if (bd && rpmf) {
        gunTTK();
            console.log(document.getElementById('userInput1').value)
    }
}

let nf = false;
function nameFill(x) {
    if(x.value>0){
    nf = true;
    }else{
        nf=false
    }
    autoCalc();
}
let bd = false;
function bDmgFill(x) {
    if(x.value>0){
        bd = true;
        }else{
            bd=false
        }
        autoCalc();
}
let rpmf = false;
function rpmFill(x) {
    if(x.value>0){
        rpmf = true;
        }else{
            rpmf=false
        }
        autoCalc();
}

function getTTKD() {
    var nbs;
    var nlbs;
    var nhs;
    var nuls;
    nbs = numBodyshot;
    nhs = numHeadshot;
    nlbs = numLowerBodyshot;
    nuls = numUpLegshot;
    if (numBodyshot > 0) {
        nbs = nbs - 1;
    } else if (numHeadshot > 0) {
        nhs = nhs - 1;
    } else if (numLowerBodyshot > 0) {
        nlbs = nlbs - 1;
    } else if (numUpLegshot >0){
        nuls = nuls-1
    } else {
        console.log("Error: No Shots");
    }
    console.log(numBodyshot);
    console.log(!isNaN(nhs));
    console.log(!isNaN(parseInt(nhs)));

    console.log(nbs);

    if (isNaN(parseInt(nbs))) {
        nbs = 0;
    }
    if (isNaN(parseInt(nuls))) {
        nuls= 0;
    }
    if (isNaN(parseInt(nhs))) {
        nhs = 0;
    }
    if (isNaN(parseInt(nlbs))) {
        nlbs = 0;
    }

    console.log(!isNaN(parseInt(nhs)));
    console.log(nbs);


    let totalShots = (parseInt(nbs) + parseInt(nhs) + parseInt(nlbs) + parseInt(nuls));
    console.log(parseInt(totalShots));
    ttkD = totalShots / (this.RPM / 60)
    console.log(ttkD);
    if (mHealth <= 0) {
        showDTTK.value = (Math.round(ttkD*1000)).toString()+"ms";
        showmHealth.value = "dead"
    } else {
        showmHealth.value = mHealth.toString() + "hp left"
        showDTTK.value = mHealth.toString() + "hp left";

    }

}


function updateOptions() {
    checkZero = [this.Dmg, this.RPM, this.lowerBodyDmg, this.headDmg, this.upLegDmg]
    checkNull = [this.name]
    if (valuesZero(checkZero) || valuesNull(checkNull)) {
        console.log("hallo");
        alert("Please Put Values");
    } else {
        if (mHealth > 0) {
            maxBodyshot = Math.ceil(mHealth / this.headDmg) + parseInt(numBodyshot);
            console.log(Math.ceil(mHealth / this.Dmg));
            console.log(parseInt(numBodyshot));
            console.log(maxBodyshot);
    
            maxHeadshot = Math.ceil(mHealth / this.headDmg) + parseInt(numHeadshot);
            maxLowerBodyshot = Math.ceil(mHealth / this.lowerBodyDmg) + parseInt(numLowerBodyshot);
            maxUpLegShot = (Math.ceil(mHealth / this.upLegDmg))+parseInt(numUpLegshot);
            console.log(((Math.ceil(mHealth / this.upLegDmg))+parseInt(numUpLegshot)).toString());
            console.log(isNaN(maxUpLegShot));
            console.log(parseInt(numUpLegshot));
          //  (Math.ceil(mHealth / this.upLegDmg))
        } else {
            maxUpLegShot = 0;
            maxLowerBodyshot = 0;
            maxHeadshot = 0;
            maxBodyshot = 0;
        }
        console.log(mHealth);
        console.log(mHealth / this.Dmg);
        console.log(maxBodyshot);

    }
}
function healthDepleted() {
    return mHealth <= 0;
}
var l;
function removeOption(list){
   l= list.options.length-1
   for(i=l;i>=0;i--){
    list.remove(i);
   }
}
function includeOptions(list, numShot, maxShot){
    option = document.createElement("option");
    option.text = numShot;
    list.add(option);
    for (j = 0; (j <= maxShot) || j < numShot; j++) {
        option = document.createElement("option");
        option.text = j;
        if (j != numShot || j == 0) {
            list.add(option);
        }
    }
}
function addOptions() {
    uls = document.getElementById("uls")
    bs = document.getElementById("bs");
    lbs = document.getElementById("lbs");
    hss = document.getElementById("hss");
    var option = document.createElement("option");

    removeOption(bs)
    removeOption(uls)
    removeOption(lbs)
    removeOption(hss)

   
    updateOptions();
    includeOptions(bs, numBodyshot, maxBodyshot)
    includeOptions(lbs, numLowerBodyshot, maxLowerBodyshot)
    includeOptions(hss, numHeadshot, maxHeadshot)
    includeOptions(uls, numUpLegshot, maxUpLegShot)

    
}
let LBDF = false;
let HSDF = false;
let ULDF = false;


function textFilledLBD(lbd) {
    console.log("fatMonkeyDookie");
    if (lbd.value > 0) {
        LBDF = true
    } else{
        LBDF = false
    }
        logDTTK()
}
function textFilledHSD(hsd) {

    if (hsd.value > 0) {
        HSDF = true
    } else{
        HSDF = false
    }
        logDTTK()
}
function textFilledULD(uld) {

    if (uld.value > 0) {
        ULDF = true
    } else{
        ULDF = false
    }
        logDTTK()
}
function logDTTK(){
    if (LBDF && HSDF && ULDF) {
        console.log("dwu8aihdwaoid")
        gunTTK();
        gunTTKD();

    }
}
function test(t) {
    console.log(t.value);
}
