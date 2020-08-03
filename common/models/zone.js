'use strict';

module.exports = function(Zone) {

  Zone.observe('loaded', async ctx =>{
    console.log(ctx.data);
  });

};
