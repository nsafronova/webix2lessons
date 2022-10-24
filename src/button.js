let fieldsArray = [];
const names = ["fname", "lname", "address"];

webix.ui({
   view: "form",
   id: 'myform',
   rows: [
      {
         function() {

            $$('myform').add(fieldsArray)
         }
      },
      {
         cols: [
            { view: "button", value: "Cancel" },
            { view: "button", value: "Save", css: "webix_primary" }
         ]
      }
   ]


})


const fillArray = function () {
   for (let i = 0; i < names.length; i++) {
      fieldsArray.push({
         'view': "text",
         'name': names[i],
         'label': names[i].charAt(0).toUpperCase() + names[i].slice(1),
      });

   }
   $$('myform').add(fieldsArray)
}

fillArray()
console.log(fieldsArray)



const form1 = {
   view: 'formControl',
   fields: 'lname',
   // saveAction: my_func
}

const form2 = {
   view: 'formControl',
   // fields: ["one", "two"],
   // saveAction: my_func
}


webix.ui({
   rows: [
      form1,
      form2
   ]
})
