webix.protoUI({
   name: "formControl",
   $init(config) {
      const content = []
      const formField = config.fields || []

      formField.forEach(e => {
         content.push({
            'view': "text",
            'name': e,
            'label': e.charAt(0).toUpperCase() + e.slice(1),
         });
      });

      content.push({
         cols: [
            {
               view: "button", name: 'save', value: "Save", css: "webix_primary", click: function () {
                  console.log(this.getFormView());
                  if (this.getFormView().config.saveAction != undefined) {
                     this.getFormView().config.saveAction.call(this.getFormView())
                  } else {
                     console.log('Default save');
                  }
               }
               // 
            },
            {},
            {
               view: "button", value: "Cancel", click: function () {
                  if (this.getFormView().config.cancelAction != undefined) {
                     this.getFormView().config.cancelAction.call(this)
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
      console.log(this);
      console.log('Your own save func is here');
   },
   cancelAction: function () {
      console.log('Your own cancel func is here');
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

