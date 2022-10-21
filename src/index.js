import { users } from "./usersdata.js";

webix.protoUI({
   name: 'mybutton',
   states: { 0: "Off", 1: "Sort Asc", 2: "Sort Desc" },
   $init:
      function (config) {
         config.value = config.states[config.state]


         this.attachEvent('onItemClick', function () {
            let array = Object.keys(this.config.states)
            let currentKeyIndex = array.findIndex(el => el == this.config.state)
            let nextIndex = array[currentKeyIndex + 1]
            this.config.state = nextIndex
            // console.log(currentKeyIndex);
            // console.log(nextIndex);
            // console.log(array);
            if (nextIndex >= array.length) {
               nextIndex = array[0]
               console.log(nextIndex);
               this.refresh()
               return nextIndex
            } else {
               this.config.value = this.config.states[nextIndex]
               this.refresh()
               this.callEvent('onStateChange', [nextIndex])
            }
         })
      }

}, webix.ui.button);

const toolbar = {
   view: 'toolbar',
   cols: [
      { view: 'label', template: "<div style='padding: 10px 0'> Sort list: </div>", fillspace: true },
      {
         view: 'mybutton', id: 'mybtn', width: 100,
         states: { 0: "Off", 1: "SortAsc", 2: "Sort Desc" },

         state: 0, on: {
            onStateChange: function (state) {
               if (state == 0) {
                  $$('mylist').sort("#rank#", 'asc', 'int')
                  webix.html.removeCss(this.$view, "desc_style");
                  webix.html.addCss(this.$view, "off_style");
               }
               else if (state == 1) {
                  $$('mylist').sort("#title#", 'asc', 'string')
                  webix.html.removeCss(this.$view, "off_style");
                  webix.html.addCss(this.$view, "asc_style");
               }
               else if (state == 2) {
                  $$('mylist').sort("#title#", 'desc', 'string')
                  webix.html.removeCss(this.$view, "acs_style");
                  webix.html.addCss(this.$view, "desc_style");
               }
            }
         },
      }
   ]
}

const list = {
   id: 'mylist',
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

// $$('mybtn').callEvent('onStateChange', [0])

