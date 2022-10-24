webix.protoUI({
   name: 'formControl',
   $init: function (config) {
      config.elements = [
         {
            rows: [
               { view: 'text', },
               { fields: 'label' },
            ]
         }

         //       {
         //  fields: {
         // }  rows: [
         //       { view: 'text', label: 'First name', name: 'fname', invalidMessage: 'First name is empty' },

         //       { view: 'text', label: 'Last name', name: 'lname', invalidMessage: 'Last name is empty' },
         //       { view: 'text', label: 'Adress', name: 'adress', invalidMessage: 'Adress is empty' },
         //       {
         //          cols: [
         //             { view: "button", value: "Cancel" },
         //             { view: "button", value: "Save" }
         //          ]
         //       }
         //    ]
         // }
      ]
      this.attachEvent('saveAction', function () {
         console.log('gggg');
      })
   }
}, webix.ui.form)

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
