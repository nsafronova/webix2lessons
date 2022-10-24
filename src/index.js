import { users } from "./usersdata.js";

webix.protoUI({
   name: 'mybutton',
   $init:
      function (config) {
         config.value = config.states[config.state]

         this.attachEvent('onItemClick', function () {
            const oldState = this.config.state;
            let array = Object.keys(this.config.states)
            let currentKeyIndex = array.findIndex(el => el == this.config.state)
            let nextState = array[currentKeyIndex + 1]

            if (currentKeyIndex + 1 >= array.length) {
               nextState = array[0]
            };
            this.config.state = nextState;
            this.config.value = this.config.states[nextState];
            this.refresh();

            webix.html.removeCss(this.$view, `${oldState}_style`)
            webix.html.addCss(this.$view, `${this.config.state}_style`)
            this.callEvent('onStateChange', [this.config.state]);
         })
      }

}, webix.ui.button);

const toolbar = {
   view: 'toolbar',
   cols: [
      { view: 'label', template: "<div style='padding: 10px 0'> Sort list: </div>", fillspace: true },
      {
         view: 'mybutton', id: 'mybtn', width: 100,
         states: {
            "off": "Off",
            "asc": "SortAsc",
            "desc": "Sort Desc"
         },

         state: 'off', on: {
            onStateChange: function (state) {
               let field, direction, type;
               switch (state) {
                  case 'off':
                     field = "#rank#"
                     direction = 'asc'
                     type = 'int'
                     break;

                  case 'asc':
                     field = "#title#"
                     direction = 'asc'
                     type = 'string'
                     break;

                  case 'desc':
                     field = "#title#"
                     direction = 'desc'
                     type = 'string'
                     break;
               }
               $$('list').sort(field, direction, type);
            }
         },
      }
   ]
}

const list = {
   id: 'list',
   view: "list",
   width: 320,
   height: 600,
   template: " <strong>#rank#. #title# </strong> <div style='padding-left:18px'> Year: #year#, votes: #votes# </div>",
   type: {
      height: 62
   },
   select: true,
   data: users
}


webix.ui({
   rows: [
      toolbar,
      list
   ]

})