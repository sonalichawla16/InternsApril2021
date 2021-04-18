console.log("js enabled");
//working on table classic


// From the window to the event target parent: this is the capture phase
// The event target itself: this is the target phase
// From the event target parent back to the window: the bubble phase

let root=document.getElementById('root');
let p =document.createElement('p');
let monthDisplay=document.getElementById("Month")
let selectBox=document.getElementById("select-box");
let left=document.getElementById("left");
let right=document.getElementById("right");


let yearGlobal=2021;
let classListTable=["table", "table-bordered", "rounded", "mt-4","ml-4",];
let classListTd=["my-cells"];
let classListThead=["my-thead"];
let disabledCell="disabled";
let holidaysIndiaClass="holiday-india";
let holidaysDallasClass="holiday-dallas";
let calendarObj={
    currentMonth:-1,
    month: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
    //          0       1               2       3       4       5       6       7       8               9       10          11 
    day: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    holidaysIndia:[[new Date(2021,0,1),"New Year Day "],[new Date(2021,0,26),"Republic Day"],[new Date(2021,2,29),"Holi"],[new Date(2021,3,2),"Good Friday"],[new Date(2021,4,13),"Ramzan/ Eid-ul-Fitr"],[new Date(2021,7,30),"Janmashtami"],[new Date(2021,9,15),"Dussehra"],[new Date(2021,10,4),"Diwali"],[new Date(2021,10,5),"Diwali"],[new Date(2021,11,27),"Christmas"]],
    holidaysDallas:[[new Date(2021,0,1),"New Year Day "],[new Date(2021,3,2),"Good Friday"],[new Date(2021,4,31),"Memorial Day"],[new Date(2021,6,5),"Independence Day"],[new Date(2021,8,6),"Labor Day"],[new Date(2021,10,25),"Thanksgiving"],[new Date(2021,11,24),"Christmas Eve"],[new Date(2021,10,26),"Thanksgiving"],[new Date(2021,11,27),"Christmas"],[new Date(2021,11,31),"New Year’s Eve"]]
//,[new Date(2021,2,29),"Holi"]
}
let checkHoliday=(checkDate)=>{
    let finalReturn=[];
    for(let i=0;i<calendarObj.holidaysIndia.length;i++){
        if(checkDate<calendarObj.holidaysIndia[i][0])
        break;
        if(checkDate.getTime()===calendarObj.holidaysIndia[i][0].getTime()){
            console.log("found match at India",calendarObj.holidaysIndia[i][0]);
            finalReturn.push(["India",calendarObj.holidaysIndia[i][1]]);
            break;
        }
    }
    for(let i=0;i<calendarObj.holidaysDallas.length;i++){
        if(checkDate<calendarObj.holidaysDallas[i][0])
        break;
        if(checkDate.getTime()===calendarObj.holidaysDallas[i][0].getTime()){
            console.log("found match at Dallas ",calendarObj.holidaysDallas[i][0]);
            finalReturn.push(["Dallas",calendarObj.holidaysDallas[i][1]]);
            break;
        }
    }
    return finalReturn;
}
let getDaysInMonth=(month, year)=> {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }


let addCalendarTableTo=(el,valueArray,classListTable,classListThead,classListTd,eventFun)=>{

    let table=document.createElement('table');
    let thead=document.createElement('thead');
    let headerRow=document.createElement('tr');
    table.id=calendarObj.month[calendarObj.currentMonth];
    calendarObj.day.forEach((el)=>{
        let th=document.createElement('th');  
        th.textContent=el.toLocaleUpperCase(); 
        th.scope='col';
        headerRow.appendChild(th);
    });
    thead.classList.add(...classListThead);
    thead.appendChild(headerRow);//thead->tr->th
    table.appendChild(thead);
    //tbody
    let tbody=document.createElement('tbody');
    let valueArray_index=0;
    for(let j=0;j<6;j++){
        let tr=document.createElement('tr');
    for(let i=0;i<7;i++){
        if(valueArray_index>=valueArray.length)
        break;
        let td=document.createElement('td');
        
        // console.log('before if with ',valueArray[valueArray_index],"with date",valueArray[valueArray_index].getDate(), "for ",valueArray[valueArray_index].getDay())
        if(valueArray[valueArray_index].getDay()===i){
            td.textContent=valueArray[valueArray_index].getDate();
            // td.textContent="myyyyy"
            let returned=checkHoliday(valueArray[valueArray_index]);
            if(returned.length!==0){
                console.log( returned.length>1 && returned[1][0]==="Dallas")
                
                if(returned[0][0]==="India"){
                td.classList.add(holidaysIndiaClass);
                td.setAttribute("India-holiday",returned[0][1]);
                    }
                else if(returned[0][0]==="Dallas"){
                    td.classList.add(holidaysDallasClass);
                    td.setAttribute("Dallas-holiday",returned[0][1]);
                }
               if(returned.length>1 && returned[1][0]==="Dallas"){
                td.classList.add(holidaysDallasClass);
                td.setAttribute("Dallas-holiday",returned[1][1]);
                }
             }
             if(i===0 || i===6)
             td.classList.add("normalOff")
             td.id=1+valueArray_index;
            valueArray_index++;
        }
        else{
        td.textContent="";
            td.classList.add(disabledCell)
            }
        console.log('id is',1+valueArray_index)
        td.classList.add(...classListTd);
        td.addEventListener('click',eventFun);        
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    if(valueArray_index>=valueArray.length)
    break;
}

// <table class="table table-bordered rounded mt-4 table-div">
        
//         <tbody >
//             <tr>
//                 <td class ="my-cells" id="0">0</td>
//                 <td class ="my-cells" id="1">1</td>
//                 <td class ="my-cells" id="2">2</td>
//                 <td class ="my-cells" id="3">3</td>
//                 <td class ="my-cells" id="4">4</td>
//                 <td class ="my-cells" id="5"> 5</td>
            
//                 <td class ="my-cells" id="6"> 6</td>
//                 <tr>
//                 <td class ="my-cells" id="7">7</td>
//                 <td class ="my-cells" id="8">8</td> 
//             </tr>
//         </tbody>
    table.appendChild(tbody);
    table.classList.add(...classListTable);
    // button.addEventListener('click',eventFun);
    // button.classList.add(...classList)
    el.appendChild(table);   
         
}
let addDiv=(ref)=>{
    console.log("passed the "+this);
console.log("root classes are ",ref.currentTarget.classList);
console.log("deletion at"+ref.currentTarget.parentNode,ref.currentTarget)
let India=ref.currentTarget.getAttribute('India-holiday');
let Dallas=ref.currentTarget.getAttribute('Dallas-holiday');
// console.log(India,"  ",Dallas)
let content="";
if(India!==null || Dallas!==null){
     content =(India===null)?`Dallas is celebrating ${Dallas}`:`India is celebrating ${India}`;
    if(India!==null && Dallas!==null){
    if(India===Dallas)
    content=`India and Dallas are celebrating ${Dallas}`
    else content=`India is celebrating ${India},Dallas is celebrating ${Dallas}`
    }
    console.log("content var is "+content+India+Dallas)
}
else content=`No holiday on ${ref.currentTarget.id}th of ${calendarObj.month[calendarObj.currentMonth]}`;
if(!ref.currentTarget.classList.contains(disabledCell)) p.textContent=content;
} 
let myCall=(omit=false)=>{
    console.log(div.childNodes[div.childNodes.length-1])
    
    div.childNodes[div.childNodes.length-1].remove()
    if(!omit){
    let selectedValue =parseInt(selectBox.options[selectBox.selectedIndex].value);
    if(selectedValue<12 && selectedValue>-1){
        // selectBox.options[selectBox.selectedIndex].
    calendarObj.currentMonth=selectedValue;
        }
    else {alert("wrong input of month");
    return;
    }
}
    let days=getDaysInMonth(calendarObj.currentMonth,yearGlobal);
    console.log("my days are---",days);

    addCalendarTableTo(div,days,classListTable,classListThead,classListTd,addDiv)

}
// addElement(root,button);
console.log("root classes are ",root.classList)
let i=0;
//adding div for calendar
let div=document.createElement('div');
div.classList.add("table-div");
let textStart=document.createElement('p');
textStart.textContent="Hi I am calendar To get started Please select the Month or   ";
let buttonLets=document.createElement('button');
buttonLets.textContent="click here";
buttonLets.addEventListener("click",(event)=>{
    calendarObj.currentMonth=new Date().getMonth();
    let i=0;
    for( i =0;i<selectBox.options.length;i++)
    if(parseInt(selectBox.options[i].value)===calendarObj.currentMonth)
    break;
    selectBox.selectedIndex=i;
    // console.log("setting value to "+selectBox.selectedIndex,selectBox.options[i])
    myCall(true)
})

buttonLets.classList.add("btn","btn-sm","btn-outline-primary")
textStart.classList.add("fs-5","ml-4","pt-4","pl-4")
textStart.appendChild(buttonLets)
div.appendChild(textStart)

p.textContent="No Date Selected"
p.classList.add("fs-4","ml-4","pt-4","text-center")
root.appendChild(p);
root.appendChild(div);
left.addEventListener("click",(event)=>{
    if(calendarObj.currentMonth<=0){
        calendarObj.currentMonth=11;
    }
    else 
    {
        calendarObj.currentMonth=calendarObj.currentMonth-1;
    }
    for( i =0;i<selectBox.options.length;i++)
    if(parseInt(selectBox.options[i].value)===calendarObj.currentMonth)
    break;
    selectBox.selectedIndex=i;
        myCall(true)
})

right.addEventListener("click",(event)=>{
    if(calendarObj.currentMonth>=11){
        calendarObj.currentMonth=0;
    }
    else 
    {
        calendarObj.currentMonth=calendarObj.currentMonth+1;
    }
    let i=0;
    for( i =0;i<selectBox.options.length;i++)
    if(parseInt(selectBox.options[i].value)===calendarObj.currentMonth)
    break;
    selectBox.selectedIndex=i;
    // console.log("setting value to "+selectBox.selectedIndex,selectBox.options[i])
    myCall(true)
})