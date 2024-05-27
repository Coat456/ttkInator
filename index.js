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
let maxUpLegShot;
let mHealth = 300;
var numHeadshot = 0;
var numLowerBodyshot = 0;
var numBodyshot = 0;
var numUpLegshot =0;
let ttkD;
let firstCalc = false;
var thisGear
// startOptions();
function startOptions() {
    updateOptions();
    bs = document.getElementById("bs");
    lbs = document.getElementById("lbs");
    hss = document.getElementById("hss");
    var option = document.createElement("option");
    for (i = 0; (i <= maxBodyshot); i++) {
        option = document.createElement("option");
        option.text = i;
        if (i != numBodyshot) {
            bs.add(option);
        }
    }
    for (i = 0; (i <= maxLowerBodyshot); i++) {
        option = document.createElement("option");
        option.text = i;
        if (i != numLowerBodyshot) {
            lbs.add(option);
        }
    }
    for (i = 0; (i <= maxHeadshot); i++) {
        option = document.createElement("option");
        option.text = i;
        if (i != numHeadshot) {
            hss.add(option);
        }
    }

}

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
      //  if(gearExists(this.name))
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
    // console.log(allgears[this.chooser][0]);
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
    //addOptions();
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

function gunTTK(n, r, d, lbd, hsd, uld) {
    firstCalc = true;
    this.upLegDmg = uld.value;
    this.name = n.value;
    this.RPM = r.value;
    this.Dmg = d.value;
    this.lowerBodyDmg = lbd.value;
    this.headDmg = hsd.value;

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
        logDTTK();
        let ttk = (((health / this.Dmg + (1 - ((health % this.Dmg) / this.Dmg))) - 1) / (this.RPM / 60)) * 1000;
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

// gunTTK(AgetGearName(thisGear),AgetGearRPM(thisGear),
// AgetGearDmg(thisGear), AgetGearLbDmg(thisGear),AgetGearHD(thisGear),AgetGearUL(thisGear));
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
    rpmFill();
    bDmgFill();
    nameFill();
    textFilledHSD(document.querySelector('#userInput4'));
    textFilledLBD(document.querySelector('#userInput3'));
    textFilledULD(document.querySelector('#userInput5'));
    // gunTTK(alldGear[thisGear][0],alldGear[thisGear][1],
    //     alldGear[thisGear][2],alldGear[thisGear][3],
    //     alldGear[thisGear][4], alldGear[thisGear][5]);
    addOptions();
}
function gunTTKD(b, lb, hs,ul) {
    checkZero[this.lowerBodyDmg, this.Dmg, this.headDmg, this.upLegDmg]
    if (valuesZero(checkZero)) {
        console.log("hallo");
        alert("Please Put Values");
    } else {
        mHealth = 300;
        numUpLegshot = ul.value;
        numBodyshot = b.value;
        numLowerBodyshot = lb.value;
        numHeadshot = hs.value;
        console.log(upLegDmg);
        mHealth = mHealth - numBodyshot * this.Dmg;
        mHealth = mHealth - numHeadshot * this.headDmg;
        mHealth = mHealth - numLowerBodyshot * this.lowerBodyDmg;
        mHealth = mHealth - numUpLegshot * this.upLegDmg;
        console.log(mHealth);
        getTTKD();
        addOptions();
    }
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
        gunTTK(document.getElementById('userInput'),
            document.getElementById('userInput1'),
            document.getElementById('userInput2'),
            document.getElementById('userInput3'),
            document.getElementById('userInput4'),
            document.getElementById('userInput5'));
            console.log(document.getElementById('userInput1').value)
    }
}

let nf = false;
function nameFill() {
    nf = true;
    autoCalc();
}
let bd = false;
function bDmgFill() {
    bd = true;
    autoCalc();
}
let rpmf = false;
function rpmFill() {
    rpmf = true;
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
        showDTTK.value = (ttkD*1000).toString()+"ms";
        showmHealth.value = "dead"
    } else {
        showmHealth.value = mHealth.toString() + "hp left"
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
            maxBodyshot = Math.ceil(mHealth / this.Dmg);
            maxHeadshot = Math.ceil(mHealth / this.headDmg);
            maxLowerBodyshot = Math.ceil(mHealth / this.lowerBodyDmg);
            maxUpLegShot = Math.ceil(mHealth / this.upLegDmg);

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
function addOptions() {
    uls = document.getElementById("uls")
    bs = document.getElementById("bs");
    lbs = document.getElementById("lbs");
    hss = document.getElementById("hss");
    var option = document.createElement("option");

    var i, l = bs.options.length - 1;
    for (i = l; i >= 0; i--) {

        bs.remove(i);
    }
    l = lbs.options.length - 1;
    for (i = l; i >= 0; i--) {
        option = document.createElement("option");
        option.text = i;
        lbs.remove(option);
    }
    l = hss.options.length - 1;
    for (i = l; i >= 0; i--) {
        option = document.createElement("option");
        option.text = i;
        hss.remove(option);
    }
    l = uls.options.length - 1;
    for (i = l; i >= 0; i--) {
        option = document.createElement("option");
        option.text = i;
        uls.remove(option);
    }
    updateOptions();
    option = document.createElement("option");
    option.text = numBodyshot;
    bs.add(option);
    option = document.createElement("option");
    option.text = numLowerBodyshot;
    lbs.add(option);
    option = document.createElement("option");
    option.text = numHeadshot;
    hss.add(option);
    option = document.createElement("option");
    option.text = numUpLegshot;
    uls.add(option);

    for (j = 0; (j <= maxBodyshot) || j < numBodyshot; j++) {
        option = document.createElement("option");
        option.text = j;
        if (j != numBodyshot || j == 0) {
            bs.add(option);
        }

    }
    for (j = 0; (j <= maxUpLegShot) || j < numUpLegshot; j++) {
        option = document.createElement("option");
        option.text = j;
        if (j != numUpLegshot || j == 0) {
            uls.add(option);
        }

    }

    for (j = 0; (j <= maxLowerBodyshot) || j < numLowerBodyshot; j++) {

        option = document.createElement("option");
        option.text = j;
        if (j != numLowerBodyshot || j == 0) {
            lbs.add(option);
        }
    }

    for (j = 0; (j <= maxHeadshot) || j < numHeadshot; j++) {
        option = document.createElement("option");
        option.text = j;
        if (j != numHeadshot || j == 0) {
            hss.add(option);
        }
    }

}
let LBDF = false;
let HSDF = false;
function textFilledDD() {
    textFilledLBD();
    textFilledHSD();

}
function textFilledLBD(lbd) {
    console.log("fatMonkeyDookie");
    if (lbd.value > 0) {
        LBDF = true
    } else
        LBDF = false
        logDTTK()
}
function textFilledHSD(hsd) {

    if (hsd.value > 0) {
        HSDF = true
    } else
        HSDF = false
        logDTTK()
}
let ULDF = false;
function textFilledULD(uld) {

    if (uld.value > 0) {
        ULDF = true
    } else
        ULDF = false
        logDTTK()
}
function logDTTK(){
    if (LBDF && HSDF && ULDF) {
        gunTTK(document.querySelector('#userInput'),
            document.querySelector('#userInput1'),
            document.querySelector('#userInput2'),
            document.querySelector('#userInput3'),
            document.querySelector('#userInput4'),
            document.querySelector('#userInput5'));
        gunTTKD(
            document.querySelector('#bs'),
            document.querySelector('#lbs'),
            document.querySelector('#hss'),
            document.querySelector('#uls'));

    }
}
function test(t) {
    console.log(t.value);
}
