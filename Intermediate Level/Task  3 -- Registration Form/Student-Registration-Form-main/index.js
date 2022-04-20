var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];


var n = 1;
var x = 0;

function AddRow(){
    var AddRow = document.getElementById('show');
    var newRow = AddRow.insertRow(n);
    
    list1[x] = document.getElementById('fname').value ;
    list2[x] = document.getElementById('email').value ;
    list3[x] = document.getElementById('web').value ;
    list4[x] = document.getElementById('gender').value ;
   
    if(!list1[x] || !list2[x] || !list3[x] ||!list4[x]){
        alert("Fill Details");
        return;
    }
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
   

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
   

    n++;
    x++;

    }
