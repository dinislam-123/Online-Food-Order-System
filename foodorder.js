
window.onload= function()
{
var title = document.getElementById("heading");
var div1 = document.createElement("div");
div1.setAttribute("id", "heading1");

 var h1 = document.createElement("h1");
 var h1t= document.createTextNode("Online Food Order System");
 var a = document.createElement("a");
   a.setAttribute("id","aid");
 var at= document.createTextNode("Design & Developed");
 a.href="#";

 var social= document.createElement('p');
 var sociala = document.createElement('a');
     sociala.setAttribute("id","socialmedia");
     sociala.href="#";
 var socialtxt =document.createTextNode("Social Media");

 sociala.appendChild(socialtxt);
 social.appendChild(sociala);

 a.appendChild(at);
 h1.appendChild(h1t);
 div1.appendChild(h1);
 div1.appendChild(a);
 div1.appendChild(social);
 title.appendChild(div1);

var menubtn = document.getElementById("secondheading");
var firstpart=document.createElement("div");
    firstpart.setAttribute("id","firstpart");
var p = document.createElement("p");
var ptxt=document.createTextNode("Item List");

var secondpart=document.createElement("div");
    secondpart.setAttribute("id","secondpart");
var reset = document.createElement("input");
    reset.setAttribute("id","resetbtn");
    reset.setAttribute("type", "button");
    reset.setAttribute("value","New/Reset Order");
    reset.addEventListener('click',resetbtn);

var thirdpart=document.createElement("div");
    thirdpart.setAttribute("id","thirdpart");
var orderno = document.createElement("input");
    orderno.setAttribute("type","text");
    orderno.setAttribute("id","orderno");
    orderno.setAttribute("readonly","readonly");
    orderno.setAttribute("style","width:70px");
    orderno.setAttribute("value","601");
    var otxt = document.createTextNode("New Order No:  ");

$(document).ready(function()
{
$('#aid').click(function()
{
  alert("This Website Designed and Developed By Md Din Islam");
});

$('#socialmedia').click(function()
{
 if($("#social-media").is(':visible'))
 {
   $('#social-media').hide();
   alert("media is invisible");
 }
 else
 {
   $('#social-media').show();
   alert("media is visible");
 }
});
});


p.appendChild(ptxt);
firstpart.appendChild(ptxt);

secondpart.appendChild(reset);

thirdpart.appendChild(otxt);
thirdpart.appendChild(orderno);

menubtn.appendChild(firstpart);
menubtn.appendChild(secondpart);
menubtn.appendChild(thirdpart);

var imagelist=[{id:"1", name:"Big-Mac", ipath:"images/big-mac.jpg"},
                {id:"2", name:"Chicken-burger", ipath:"images/chicken-burger.jpg"},
                {id:"3", name:"Hamburger", ipath:"images/hamburger.jpg"},
                {id:"4", name:"Muffin", ipath:"images/muffin.jpg"},
                {id:"5", name:"Frence Fries", ipath:"images/france fry.jpg"},
                {id:"6", name:"Coke", ipath:"images/coke.jpg"},
                {id:"7", name:"Coffee", ipath:"images/coffee.jpg"},
                {id:"8", name:"Tea", ipath:"images/tea.jpg"},
                {id:"9", name:"Donut", ipath:"images/donut.jpg"}];

  var itemlist = [{ id:'1', item:'Big-Mac', price:'5.80'},
                     { id:'2', item:'Chicken Sandwitch', price:'5.50'},
                     { id:'3', item:'Hamburger', price:'4.40'},
                     { id:'4', item:'Muffin', price:'1.50'},
                     { id:'5', item:'French Fries', price:'2.60'},
                     { id:'6', item:'Coke', price:'1.00'},
                     { id:'7', item:'Coffee', price:'1.50'},
                     { id:'8', item:'Tea', price:'1.45'},
                     { id:'9', item:'Donut', price:'1.00'}];


var orderitem = document.getElementById("order-item");
var itemdiv = document.getElementById("itemdiv");

for( var i=0; i<imagelist.length; i++)
  {
    var newdiv = document.createElement("div");
        newdiv.setAttribute("id","div1");
    var namediv = document.createElement("div");
        namediv.setAttribute("id","namediv");
    var p = document.createElement("p");

    var newimg = document.createElement("IMG");
      newimg.setAttribute("src", imagelist[i].ipath);
      newimg.setAttribute('alt', imagelist[i].name);

      newimg.addEventListener('click', clickHandler);
      newimg.setAttribute('id', imagelist[i].id);
      var iname = document.createTextNode(imagelist[i].name);

      p.appendChild(iname);
      namediv.appendChild(p);
      newdiv.appendChild(namediv);
      newdiv.appendChild(newimg);
      itemdiv.appendChild(newdiv);

  }
    orderitem.appendChild(itemdiv);

    function clickHandler(e)
    {
      if (e.target.id == "1")
      {
        for( var i=0; i<itemlist.length; i++)
        {
          if(itemlist[i].id == "1")
          {
        var ptable = document.getElementById("price-table");
        var rowCount = ptable.rows.length;
        var row = ptable.insertRow(rowCount);

        row.insertCell(0).innerHTML='<input type="button" id="delbtn" value="Delete" onclick="deleteRow(this)">';
        row.insertCell(1).innerHTML=itemlist[i].item;
        row.insertCell(2).innerHTML=itemlist[i].price;
        row.insertCell(3).innerHTML="1";
        row.insertCell(4).innerHTML=itemlist[i].price;

        return;
      }
    }
  }

    if (e.target.id == "2")
    {
      for( var i=0; i<itemlist.length; i++)
      {
        if(itemlist[i].id == "2")
        {
      var ptable = document.getElementById("price-table");
      var rowCount = ptable.rows.length;
      var row = ptable.insertRow(rowCount);

      row.insertCell(0).innerHTML='<input type="button" id="delbtn" value="Delete" onclick="deleteRow(this)">';
      row.insertCell(1).innerHTML=itemlist[i].item;
      row.insertCell(2).innerHTML=itemlist[i].price;
      row.insertCell(3).innerHTML="1";
      row.insertCell(4).innerHTML=itemlist[i].price;

      return;
  }
  }
  }
  if (e.target.id == "3")
  {
    for( var i=0; i<itemlist.length; i++)
    {
      if(itemlist[i].id == "3")
      {
    var ptable = document.getElementById("price-table");
    var rowCount = ptable.rows.length;
    var row = ptable.insertRow(rowCount);

    row.insertCell(0).innerHTML='<input type="button" id="delbtn" value="Delete" onclick="deleteRow(this)">';
    row.insertCell(1).innerHTML=itemlist[i].item;
    row.insertCell(2).innerHTML=itemlist[i].price;
    row.insertCell(3).innerHTML="1";
    row.insertCell(4).innerHTML=itemlist[i].price;

    return;
  }
}
}
if (e.target.id == "4")
{
  for( var i=0; i<itemlist.length; i++)
  {
    if(itemlist[i].id == "4")
    {
  var ptable = document.getElementById("price-table");
  var rowCount = ptable.rows.length;
  var row = ptable.insertRow(rowCount);

  row.insertCell(0).innerHTML='<input type="button" id="delbtn" value="Delete" onclick="deleteRow(this)">';
  row.insertCell(1).innerHTML=itemlist[i].item;
  row.insertCell(2).innerHTML=itemlist[i].price;
  row.insertCell(3).innerHTML="1";
  row.insertCell(4).innerHTML=itemlist[i].price;

  return;
}
}
}
if (e.target.id == "5")
{
  for( var i=0; i<itemlist.length; i++)
  {
    if(itemlist[i].id == "5")
    {
  var ptable = document.getElementById("price-table");
  var rowCount = ptable.rows.length;
  var row = ptable.insertRow(rowCount);

  row.insertCell(0).innerHTML='<input type="button" id="delbtn" value="Delete" onclick="deleteRow(this)">';
  row.insertCell(1).innerHTML=itemlist[i].item;
  row.insertCell(2).innerHTML=itemlist[i].price;
  row.insertCell(3).innerHTML="1";
  row.insertCell(4).innerHTML=itemlist[i].price;

  return;
}
}
}
if (e.target.id == "6")
{
  for( var i=0; i<itemlist.length; i++)
  {
    if(itemlist[i].id == "6")
    {
  var ptable = document.getElementById("price-table");
  var rowCount = ptable.rows.length;
  var row = ptable.insertRow(rowCount);

  row.insertCell(0).innerHTML='<input type="button" id="delbtn" value="Delete" onclick="deleteRow(this)">';
  row.insertCell(1).innerHTML=itemlist[i].item;
  row.insertCell(2).innerHTML=itemlist[i].price;
  row.insertCell(3).innerHTML="1";
  row.insertCell(4).innerHTML=itemlist[i].price;

  return;
}
}
}
if (e.target.id == "7")
{
  for( var i=0; i<itemlist.length; i++)
  {
    if(itemlist[i].id == "7")
    {
  var ptable = document.getElementById("price-table");
  var rowCount = ptable.rows.length;
  var row = ptable.insertRow(rowCount);

  row.insertCell(0).innerHTML='<input type="button" id="delbtn" value="Delete" onclick="deleteRow(this)">';
  row.insertCell(1).innerHTML=itemlist[i].item;
  row.insertCell(2).innerHTML=itemlist[i].price;
  row.insertCell(3).innerHTML="1";
  row.insertCell(4).innerHTML=itemlist[i].price;

  return;
}
}
}
if (e.target.id == "8")
{
  for( var i=0; i<itemlist.length; i++)
  {
    if(itemlist[i].id == "8")
    {
  var ptable = document.getElementById("price-table");
  var rowCount = ptable.rows.length;
  var row = ptable.insertRow(rowCount);

  row.insertCell(0).innerHTML='<input type="button" id="delbtn" value="Delete" onclick="deleteRow(this)">';
  row.insertCell(1).innerHTML=itemlist[i].item;
  row.insertCell(2).innerHTML=itemlist[i].price;
  row.insertCell(3).innerHTML="1";
  row.insertCell(4).innerHTML=itemlist[i].price;

  return;
}
}
}
if (e.target.id == "9")
{
  for( var i=0; i<itemlist.length; i++)
  {
    if(itemlist[i].id == "9")
    {
  var ptable = document.getElementById("price-table");
  var rowCount = ptable.rows.length;
  var row = ptable.insertRow(rowCount);

  row.insertCell(0).innerHTML='<input type="button" id="delbtn" value="Delete" onclick="deleteRow(this)">';
  row.insertCell(1).innerHTML=itemlist[i].item;
  row.insertCell(2).innerHTML=itemlist[i].price;
  row.insertCell(3).innerHTML="1";
  row.insertCell(4).innerHTML=itemlist[i].price;

  return;
    }
  }
}
}
}

window.chktbl=1; 
function totalbtn()
{
   var ptable = document.getElementById("price-table");
   var rowCount = ptable.rows.length;

   var mprice = 0.0;
   var mtotal = 0.0;

    for(var i = 1; i < rowCount; i++)
    {

   mprice = parseFloat(ptable.rows[i].cells[4].innerHTML);

   mtotal  = mtotal + mprice;

    }

      if(chktbl ==1)
      {
        var sumtable = document.getElementById("sumtable");

        var row = sumtable.insertRow(0);

        row.insertCell(0).innerHTML= "Sub Total";
        row.insertCell(1).innerHTML= mtotal.toFixed(2);

        var row = sumtable.insertRow(1);
        row.insertCell(0).innerHTML= "Tax :";
        row.insertCell(1).innerHTML= (mtotal * .13).toFixed(2);

        var row = sumtable.insertRow(2);
        row.insertCell(0).innerHTML= "Balance Due:";
        row.insertCell(1).innerHTML= (mtotal + ( mtotal * .13)).toFixed(2);

        var row = sumtable.insertRow(3);
        row.insertCell(0).innerHTML= "Paid :";
        row.insertCell(1).innerHTML= '<input type="text" name="cashdue" id="cashdue"/>';
        cashdue.style.textAlign ="right";
        var row = sumtable.insertRow(4);
        row.insertCell(0).innerHTML= '<input type="button" value="Change" id="duebtn" onclick="duebtn()"/>';
        // row.insertCell(1).innerHTML= '<input type="text" readonly="true" id="change"/>';
        row.insertCell(1).innerHTML='<p id="change"/>';
        row.insertCell(2).innerHTML= '<input type="button" value="Print Order" id="printbtn" onclick="printbtn()"/>';
        chktbl = chktbl+1;
      }
      else
      {
        var sumtable = document.getElementById("sumtable");
        sumtable.rows[0].cells[1].innerHTML = mtotal.toFixed(2);
        sumtable.rows[1].cells[1].innerHTML= (mtotal * .13).toFixed(2);
        sumtable.rows[2].cells[1].innerHTML= (mtotal + ( mtotal * .13)).toFixed(2);
        document.getElementById("cashdue").value=0;
      }

  }


    function duebtn()
    {

      var mcashdue = document.getElementById("cashdue").value;
      var mpaid =0.0;
      var mchange =0.0;
      var mtable = document.getElementById("sumtable");
      var mtotal = mtable.rows[2].cells[1].innerHTML;
      mpaid = document.getElementById("cashdue").value;

      if(mcashdue.length == 0)
      {
        alert("Enter Amount");
        document.getElementById('cashdue').focus();
      }
      else {
        if (parseInt(mpaid)==mpaid || parseFloat(mpaid)==mpaid)
        {
          if (parseFloat(mtotal) > parseFloat(mpaid))
            {
              alert("You need to pay more..Thank you..");
              document.getElementById("cashdue").focus();
            }
          else
          {
            mchange = (mpaid - mtotal).toFixed(2);
            mtable.rows[4].cells[1].innerHTML = mchange;
          }
        }
        else {
          alert("Please Enter Number");
        }

    }
  }

    function deleteRow(obj)
    {
     var index = obj.parentNode.parentNode.rowIndex;
     var ptable = document.getElementById("price-table");
     ptable.deleteRow(index);
    }

    function resetbtn()
    {
      chktbl = 1;

      var otable = document.getElementById("sumtable");

      var orow = otable.rows.length;
       if(orow > 0)
       {
         var orderno = document.getElementById('orderno').value;
         orderno =parseInt(orderno)+1;
         document.getElementById("orderno").value=orderno;
       }

      var ptable = document.getElementById("price-table");
      var row = ptable.rows.length;

      for (var i = row-1; i > 0; i--)
      {
         ptable.deleteRow(i);
      }

      var rowCount = sumtable.rows.length;
      for (var x = rowCount-1; x >= 0; x--)
       {
        sumtable.deleteRow(x);
      }
    }

    function printbtn()
    {
     var mywindow = window.open("","Print Order","width=400px, height=500px");
     var orderno = document.getElementById("orderno").value;
      mywindow.document.write("Order No  :   " + orderno);
     mywindow.document.write("<br><br>");
     var ptable = document.getElementById("price-table");
     var rowCount = ptable.rows.length;
     var mitem="";
     var mprice="";
     var mqty ="";
     var mtotal="";

     mywindow.document.write('<table cellspacing="5">');

     for (var i = 1; i< rowCount; i++)
      {
         mitem = ptable.rows[i].cells[1].innerHTML;
         mprice =ptable.rows[i].cells[2].innerHTML;
         mqty = ptable.rows[i].cells[3].innerHTML;
         mtotal=ptable.rows[i].cells[4].innerHTML;
        //  mywindow.document.write(mitem+"&nbsp"+mprice+"<br>");

        mywindow.document.write (" <tr>");
        mywindow.document.write ("<td>"+mitem+"</td>");
        mywindow.document.write ("<td width='10px'>"+mprice+"</td>");
        mywindow.document.write ("<td width='5px'>"+mqty+"</td>");
        mywindow.document.write ("<td>"+mtotal+"</td>");
        mywindow.document.write("</tr>");
      }
      mywindow.document.write('</table>');

      mywindow.document.write('<table cellspacing="5">');
      var stable = document.getElementById("sumtable");
      var rowCount = stable.rows.length;
      var head1="";
      var head2="";

      for(var i=0; i<rowCount; i++)
       {
         head1 = stable.rows[i].cells[0].innerHTML;
         head2 =stable.rows[i].cells[1].innerHTML;
         if(head1 == "Paid :")
         {
          var head2 = document.getElementById("cashdue").value;
         }
         mywindow.document.write ("<tr>");
         mywindow.document.write ("<td>"+head1+"</td>");
         mywindow.document.write ("<td>"+head2+"</td>");
         mywindow.document.write("</tr>");
       }
       mywindow.document.write('</table>');

    }
