const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");


module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#D5007F" }
  })
);


  /**
   * variables tema INE
   */

   /*
   
   $white: #fff;
$black:#000000; 
$rosaINE:#d5007f;
$rosaINE-dark-1:#B7006D;    
$rosaINE-dark-2:#98005B;   
$rosaINE-dark-3:#7A0049;  
$rosaINE-dark-4:#5B0036;    
$rosaINE-dark-5:#3D0024;
$rosaINE-light-1:#DB2491;   
$rosaINE-light-2:#E149A4;   
$rosaINE-light-3:#E76DB6; 
$rosaINE-light-4:#ED92C8;   
$rosaINE-light-5:#F3B6DA;   
$rosaINE-light-6:#F9DBED; 
 
//Secondary       
$secondary:#409aa1;
$secondary-dark-1:#37848A;  
$secondary-dark-2:#2E6E73;
$secondary-dark-3:#25585C;
$secondary-dark-4:#1B4245;
$secondary-dark-5:#122C2E; 
$secondary-light-1:#5BA8AE;
$secondary-light-2:#77B7BC;
$secondary-light-3:#92C5C9;
$secondary-light-4:#ADD4D7;
$secondary-light-5:#C8E2E4;
$secondary-light-6:#E4F1F2;
//Escala de grises  
$grey-1:#DBDBDB;
$grey-2:#B6B6B6;
$grey-3:#929292;
$grey-4:#6D6D6D;
$grey-5:#494949;
$grey-6:#242424;
//Color auxiliar     
$aux:#950054;
$aux-dark-1:#800048;
$aux-dark-2:#68003E;
$aux-dark-3:#550030;
$aux-dark-4:#400024;
$aux-dark-5:#2B0018;
$aux-light-1:#A4246C;
$aux-light-2:#B24987;
$aux-light-3:#C26D9D;
$aux-light-4:#D292B6;
$aux-light-5:#E1B6CE;
$aux-light-6:#EDDDE6;
$adjacent:#8140a1;
$adjacent-dark-1:#6F378A;
$adjacent-dark-2:#5C2E73;
$adjacent-dark-3:#4A255C;
$adjacent-dark-4:#371B45;
$adjacent-dark-5:#25122E;
$adjacent-light-1:#935BAE;
$adjacent-light-2:#A577BC;
$adjacent-light-3:#B792C9;
$adjacent-light-4:#C9ADD7;
$adjacent-light-5:#DBC8E4;
$adjacent-light-6:#EDE4F2;
$dark-text:#2E333F;
$header-widget:#3e425b;
$light-text:white;
$red:red;
$hoverTextColor: $rosaINE;

   */