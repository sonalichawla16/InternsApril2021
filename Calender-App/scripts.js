  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();
  var selectMonth = document.getElementById("month");

  
  var calendar = document.getElementById("calendar");
  var lang = calendar.getAttribute('data-lang');
  
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  

  const indian_dallas_holiday = [
    [0, 1, "New Year's Day"],
    [3, 2, "Good Friday"],
    [11, 27, "Christmas (observed)"],
  ];
  

  const i_holiday = [
    [0, 26, "Republic Day"],
    [2, 29, "Holi"],
    [4, 13, "Ramzan/ Eid-ul-Fitr"],
    [7, 30, "Janmashtami"],
    [9, 15, "Dussehra"],
    [10, 4, "Diwali"],
    [10, 5, "Diwali"],
  ];
  

  const d_holiday = [
    [4, 31, "Memorial Day"],
    [6, 5, "Independence Day (observed)"],
    [8, 6, "Labor Day"],
    [10, 25, "Thanksgiving"],
    [10, 26, "Thanksgiving"],
    [11, 24, "Christmas Eve"],
    [11, 31, "New Year’s Eve"],
  ];

  var dayHeader = "<tr>";
  for (day in days) {
    dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
  }
  dayHeader += "</tr>";
  
  document.getElementById("thead-month").innerHTML = dayHeader;
  
  
  monthAndYear = document.getElementById("monthAndYear");
  showCalendar(currentMonth, 2021);
  
  
  function jump() {
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, 2021);
  }
  
  function showCalendar(month, year) {
  
    var firstDay = ( new Date( year, month ) ).getDay();
  
    tbl = document.getElementById("calendar-body");
  
    
    tbl.innerHTML = "";
  
    
    monthAndYear.innerHTML = months[month] + " " + year;
    selectMonth.value = month;
  
    // creating all cells
    var date = 0;
    for ( var i = 0; i < 6; i++ ) {
        var row = document.createElement("tr");
  
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date >= daysInMonth(month, year)) {
                break;
            } else {
                date++;
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";
  
                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                
            }
            
            let status_code = 0;
            //common holiday
            indian_dallas_holiday.forEach((index) => {
                if (month == index[0] && date == index[1])
                 {
                     cell.classList.add("holidays");
                     cell.onclick = () =>{
                         document.querySelector('.add-text').innerHTML = "India and Dallas office are celebrating " +
                         index[2]; 
                     }
                 }
            });

            i_holiday.forEach((index) => {
                if (month == index[0] && date == index[1])
                 {
                     cell.classList.add("i-holidays");
                     cell.onclick = () =>{
                        document.querySelector('.add-text').innerHTML = "India office is celebrating " +
                        index[2]; 
                    }
                 }
            });

            d_holiday.forEach((index) => {
                if (month == index[0] && date == index[1])
                 {
                     cell.classList.add("d-holidays");
                     cell.onclick = () =>{
                        document.querySelector('.add-text').innerHTML = "Dallas office is celebrating " +
                        index[2]; 
                    }
                 }
            });
  
        }
  
        tbl.appendChild(row);
    }
  
  }
  
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  