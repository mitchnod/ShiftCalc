//sets shift count to be -1 automatically (first shift to be pushed to the array will be index 0)
var shift = 0;

//declaring an empty array to be filled with shifts
var shifts = [{hours: null,
    A: null,
    P: null,
    D: null,
    E: null,
    weekend: null,
    amount: null}];

function add_shift() {
    //increments the shift by one everytime the function is called
    shift += 1;

    //adds incremented shift to the html
    document.getElementById("form").insertAdjacentHTML("beforeend", `<div class='shift_container'> <div class="shift"> <p for = 'shift${shift}'>Shift ${shift+1}</p> </div> <div class="weekend_hours"> <input type='number' placeholder='Hours' id='hours${shift}'> <input type='checkbox' name='weekend${shift}' id='weekend${shift}'> <label for='weekend${shift}'>Weekend</label> <br> </div> <div class="radio_btns"> <input type='radio' name='shift_type${shift}' id='A${shift}'> <label for='A${shift}'>A</label> <input type='radio' name='shift_type${shift}' id='P${shift}'> <label for='P${shift}'>P</label> <input type='radio' name='shift_type${shift}' id='D${shift}'> <label for='D${shift}'>D</label> <input type='radio' name='shift_type${shift}' id='E${shift}'> <label for='E${shift}'>E</label> <br> </div> </div>`);

    //adds empty shift to the shifts array
    shifts.push({hours: null,
        A: null,
        P: null,
        D: null,
        E: null,
        weekend: null,
        amount: null});
}

function calculate() {
    //total amount earned for shifts listed
    var total_amount = 0;
    
    //loops through how ever many shifts there are in the array
    for (var shift = 0; shift < shifts.length; shift++){

        //gives value to all the null shifts in the array 
        shifts[shift] = {hours: document.getElementById(`hours${shift}`).value,
        A: document.getElementById(`A${shift}`).checked,
        P: document.getElementById(`P${shift}`).checked,
        D: document.getElementById(`D${shift}`).checked,
        E: document.getElementById(`E${shift}`).checked,
        weekend: document.getElementById(`weekend${shift}`).checked,
        amount: 0}

        //uses the proper math based on the shift conditions
        if (shifts[shift].A == true && shifts[shift].weekend == false){
            shift_pay = 34.40;
            shifts[shift].amount = shift_pay * shifts[shift].hours;
        }
        else if (shifts[shift].A == true && shifts[shift].weekend == true){
            shift_pay = 37.84;
            shifts[shift].amount = shift_pay * shifts[shift].hours;
        }
        else if (shifts[shift].P == true && shifts[shift].weekend == false){
            shift_pay = 41.28;
            shifts[shift].amount = shift_pay * shifts[shift].hours;
        }
        else if (shifts[shift].P == true && shifts[shift].weekend == true){
            shift_pay = 43;
            shifts[shift].amount = shift_pay * shifts[shift].hours;
        }
        else if (shifts[shift].D == true && shifts[shift].weekend == false){
            shift_pay = 34.40;
            shifts[shift].amount = shift_pay * shifts[shift].hours;
        }
        else if (shifts[shift].D == true && shifts[shift].weekend == true){
            shift_pay = 37.84;
            shifts[shift].amount = shift_pay * shifts[shift].hours;
        }
        else if (shifts[shift].E == true && shifts[shift].weekend == false){
            shift_pay = 39.56;
            shifts[shift].amount = shift_pay * shifts[shift].hours;
        }
        else if (shifts[shift].E == true && shifts[shift].weekend == true){
            shift_pay = 41.28;
            shifts[shift].amount = shift_pay * shifts[shift].hours;
        }
        
        //adds all outputs into one in order to get the total pay of all shifts
        total_amount += shifts[shift].amount;
        document.documentElement.scrollTop = 0;
    }

    total_amount = total_amount.toFixed(2);
    //displays the total amount on the page
    document.getElementById('total_amount').innerHTML = `$${total_amount}`;
}