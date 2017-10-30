var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var date = new Date();
var id = "" + date.getMinutes(); + date.getSeconds() + date.getMilliseconds() + "";
var lin;
var ids;
var lio;

// Form submit event
// form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Edit event
itemList.addEventListener('click', editItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  

    
    e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
      li.id = "li_" + id;
  // Add class
  li.className = 'list-group-item';
    
    
    var span = document.createElement('span');
    span.id = "li_" + id;
    span.innerHTML = newItem;
    
  //  console.log(span.innerHTML);
    
  // Add text node with input value
  li.appendChild(span);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);
    
    // Create edit button element
  var editBtn = document.createElement('button');

  // Add classes to del button
  editBtn.className = 'btn btn-primary btn-sm float-right edit btn-primary-spacing';

  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(editBtn);
    
   

  // Append li to list
  itemList.appendChild(li);
  document.getElementById('item').value = ""; 
}


// Edit item
function editItem(e){
  if(e.target.classList.contains('edit')){
     
    if(confirm('Are You Sure?')){
 
        lin = e.target.parentElement;
    
        var text = lin.getElementsByTagName('span')[0].textContent;
         ids = lin.id;
        document.getElementById('item').value = text;
        var btnNew = document.getElementById('btnAdd');
        btnNew.innerHTML = 'Edit';
      //  var buttonText = button.innerText;
     //   var fullText = button.parentElement.innerText;
    //    var wanted = fullText.replace(buttonText, '');
       // console.log(li);
       // console.log(text);
     //   console.log(fullText);
        
    }
  }

}




var btnNew = document.getElementById('btnAdd');
btnNew.onclick = function() {
    if (this.innerHTML == 'Submit') {
        var inItemText = document.getElementById('item');

        var itemText = inItemText.value;
        if (!itemText || itemText === "" || itemText === " ") {
            return false;
        }

      form.addEventListener('submit', addItem);
    } else if (this.innerHTML == 'Edit') {
      this.innerHTML = 'Submit';
       var ItemTexts = document.getElementById('item').value;
        
   
             lio = document.getElementById(ids); 
             lio.getElementsByTagName('span')[0].textContent = ItemTexts;
            
            console.log(lio);
            itemList.appendChild(lio);
            document.getElementById('item').value = "";

            
 


        if (!itemText || itemText === "" || itemText === " ") {
            return false;
        }
        
        document.getElementById('items').value="";
    }
}





// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
        console.log(li);
    }
  }
}



// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
