var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var listOfHolidays = ['Jan1', 'Apr2', 'May13', 'July5', 'Sep6', 'Nov25', 'Nov26', 'Dec24', 'Dec27', 'Dec31'];
var nameOfHolidays = ['New Year’s Day', 'Good Friday', 'Memorial Day', 'Independence Day', 'Labor Day', 'Thanksgiving', 'Thanksgiving', 'Christmas Eve', 'Christmas', 'New Year’s Eve'];
var month=0;
var year=2021;

function loadCalendarMonths()
{
    for(var i = 0; i < months.length; i++)
    {
        var doc = document.createElement("a");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function ()
            {
                month = selectedMonth;
                document.getElementById("curMonth").innerHTML = months[month];
                loadCalendarDays();
                return month;
            }
        })();

        document.getElementById("months").appendChild(doc);
    }
}

function daysInMonth(month, year)
    {
        let d = new Date(year, month+1, 0);
        return d.getDate();
    }

    function loadCalendarDays()
    {
        document.getElementById("calendarDays").innerHTML = "";
        var counter=0;

        var tmpDate = new Date(year, month, 0);
        console.log(tmpDate);
        var num = daysInMonth(month, year);
        var dayofweek = tmpDate.getDay();
        // create day prefixes
        for(var i = 0; i <= dayofweek; i++)
        {   
            if(dayofweek === 6){
                break;
            }

            if(counter == 0){
                var at = document.createElement('tr');
                var aa = document.getElementById("calendarDays").appendChild(at);
            }
            var d = document.createElement("td");
            d.classList.add("day");
            d.classList.add("blank");
            counter++;
            if(counter>=7){
                counter=0;    
            }
            aa.appendChild(d);
            // document.getElementById("calendarDays").appendChild(d);
        }
        // render the rest of the days
        for(var i = 0; i < num; i++)
        {   
            if(counter == 0){
                var at = document.createElement('tr');
                var aa = document.getElementById("calendarDays").appendChild(at);
            }

            var tmp = i + 1;
            var d = document.createElement("td");
            d.id = "calendarday_" + i;
            d.className = "day";
            d.innerHTML = tmp;
            counter++;
            if(counter>=7){
                counter=0;    
            }

            var s = makeString(months[month], i+1);

            //if holiday date matches
            if(listOfHolidays.includes(s)){
                var idx = listOfHolidays.indexOf(s);
                var h = document.createElement('div');
                h.innerText = nameOfHolidays[idx];
                d.appendChild(h);
                d.classList.add('bg-success');
            }

            aa.appendChild(d);
            // document.getElementById("calendarDays").appendChild(d);
        }

        var clear = document.createElement("div");
        clear.className = "clear";
        document.getElementById("calendarDays").appendChild(clear);
    }

    function makeString(m, d){
        return '' + m+d;
    }

    window.addEventListener('load', function () {
        var date = new Date();
        month = date.getMonth();
        // year = date.getFullYear();
        document.getElementById("curMonth").innerHTML = months[month];
        // document.getElementById("curYear").innerHTML = year;
        loadCalendarMonths();
        // loadCalendarYears();
        loadCalendarDays();
    });
    document.getElementById("date_str").innerHTML=new Date().toDateString();