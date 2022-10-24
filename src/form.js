webix.protoUI({
   name: "formControl",
   $init(config) {

      const content = []
      let array = Object.keys(config.fields)
      let formField = config.fields

      array.forEach(e => {
         content.push({
            'view': "text",
            'label': formField[e].charAt(0).toUpperCase() + formField[e].slice(1),
         });
      });

      content.push({
         cols: [
            {
               view: "button", name: 'save', value: "Save", css: "webix_primary", click: function () {
                  if (config.saveAction != undefined) {
                     config.saveAction()
                  } else {
                     console.log('Default save');
                  }
               }
            },
            {},
            {
               view: "button", value: "Cancel", click: function () {
                  if (config.saveAction != undefined) {
                     config.saveAction()
                  } else {
                     console.log('Default cancel');
                  }
               }
            },
         ]
      });

      config.rows = content;
   }

}, webix.ui.form);


const form1 = {
   view: "formControl",
   fields: ["one", "two", "three"],
   saveAction: function () {
      console.log('Your own func is here');
   }
}


const form2 = {
   view: "formControl",
   fields: ["four", "five", "six"]
}


webix.ui({
   rows: [
      form1,
      form2
   ]
});