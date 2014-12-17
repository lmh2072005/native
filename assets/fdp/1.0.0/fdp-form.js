define("fdp/1.0.0/fdp-form",["$","cellula/0.4.2/cellula","cellula/0.4.2/cellula-namespace","cellula/0.4.2/cellula-class","cellula/0.4.2/cellula-util","cellula/0.4.2/cellula-events","cellula/0.4.2/cellula-cell","cellula/0.4.2/cellula-element","cellula/0.4.2/cellula-collection","./fdp-namespace"],function(a,b,c){var d=a("$"),e=a("cellula/0.4.2/cellula"),f=a("./fdp-namespace"),g=f.FormItem,h=e._util,i=e.Class,j=(e.Element,e.Cell),k=e.Collection,l=f.Form=new i("Form",{type:void 0,validateAll:!1,submitBtn:null,collection:null,itemList:void 0,tableView:void 0,paging:void 0,init:function(a){this.key||(this.key=this.__cid__),this._super(a),this._bindAll("search","doSearch","dataDispatch","submit"),this.collection=new k({type:g}),this.rootNode&&(this.submitBtn=d("input[type=submit]",this.rootNode)),this.paging&&(this.follow(this.paging),this.paging.follow(this),this.tableView&&this.paging.follow(this.tableView),this.tableView&&this.tableView.follow(this.paging),this.tableView&&this.tableView.follow(this)),this.createItem(),this.registerEvents()},registerEvents:function(){d(this.rootNode).submit("single"==this.type?this.submit:this.doSearch)},createItem:function(){h.each(this.itemList,function(a){this.register("FORMITEM:VALIDATE",a),this.collection.push(a)},this)},submit:function(a){a.preventDefault(),this.validate(),this.validateAll&&console.log(this.getData())},validate:function(){return this.emit("FORMITEM:VALIDATE"),h.each(this.collection.get(),function(a){return this.validateAll=a.validate,a.validate?void 0:"break"},this,"break"),this.validateAll},disable:function(){},getData:function(){var a={};return h.each(this.collection.get(),function(b){a=h.mix(a,b.getData())},this),a},receiver:function(a){if(a){var b=(a.target,a.name.split(":")[1]);switch(b){case"SETPAGEDEFAULT":this.pageDefault=arguments[1];break;case"SETPAGECOLLECTION":this.pageCollection=arguments[1];break;case"DOSEARCH":this.doSearch(arguments[1])}}},doSearch:function(a){var b,c,d,e,f,g,i=!1;a&&a.preventDefault&&(a.preventDefault(),i=!0),(i||!i&&!a)&&this.validate()?(this.emit("PAGINATOR:GETDEFAULTPAGE"),this.emit("PAGINATOR:GETCOLLECTION"),b=this.pageDefault,c=this.pageCollection,d=c.get("size"),f=d.get(),e=h.values(f)[0],g=h.mix(this.getData(),h.isEmpty(e)?b.size:e,b.number||{})):!i&&a&&this.validate()&&(g=h.mix({},this.getData(),a)),g&&this.search(g)},customSearch:function(){},search:function(a){this.customSearch.call(this,a)},dataDispatch:function(a){return a.queryForm&&a.result&&a.result.paging?(this.emit("TABLE:TABLERENDER",a.result.detail),void this.emit("PAGINATOR:PAGINGRENDER",a.result.paging)):void console.log("data stuct error!")}}).inherits(j);c.exports=l});