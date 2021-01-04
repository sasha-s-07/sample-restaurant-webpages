window.onload=pageReady;
function pageReady(){
    
    var btnTwn=document.getElementById("twn");
    var btnFift=document.getElementById("fift");
    var btnFSvn=document.getElementById("svn");
    var btnHnd=document.getElementById("hnd");
    var giftQnt=document.getElementById("quantity");
    var giftValue=document.getElementById("value");//input gift card amount
    var btnAdd=document.getElementById("add");
        
    var formHandle=document.forms.frmGift;
    formHandle.reset();

    //user should choose amount card
    btnTwn.onclick=twentyGift;
    
    function twentyGift(){
     // btnTwn.disabled="disabled";
      giftValue.value=25;
      
      return false;
        
    }
    btnFift.onclick=fiftGift;
    function fiftGift(){
        giftValue.value=50;
        
        return false;
    }
    btnFSvn.onclick=svnGift;
    function svnGift()
    {
        giftValue.value=75;
        
        return false;
    }
    btnHnd.onclick=hndGift;
    function hndGift(){
        giftValue.value=100;
        
        return false
    }
    
    //---------------------------------------------------------------------------------------------------------
    //-----------------------------Form validation, When form is submitted-----------------------------------------
    formHandle.onsubmit=processForm;
    function processForm()
    {   
        //amount of purches to display 
        var numbers=giftQnt.value;  
        var amount=giftValue.value; 
        numbers=parseInt(numbers);
        amount= parseInt(amount);   
        var payment=amount*numbers;
        console.log(payment);
        
        // define Regex
        var RegQnt=/^\d{1,3}$/;
        var RegEmail=/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
        var RegPhone=/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
        var RegPos=/^[A-Za-z]\d[A-Za-z]\ ?\d[A-Za-z]\d$/;
        var RegCity=/^[A-Za-z]{1,20}$/;
        var RegAddr=/\d{1,3}\s[A-Za-z]{1,20}\s[A-Za-z]{1,4}/;
        var Regname=/^[A-Za-z]{3,20}$/;
       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var errorMsg=document.getElementById("erMsg");
        
        var erorQnt=document.getElementById("erqnt");
        var erorName=document.getElementById("spnName");
        var cName=document.getElementById("name");//client name
        var cLname=document.getElementById("l-name");
        var erorLname=document.getElementById("spnLname");
        var cEmail=document.getElementById("email") ;
        var erorEmail=document.getElementById("spnEmail");
        var cPhone=document.getElementById("phone");
        var erorPhone=document.getElementById("spnphone");
        var cState=document.getElementById("State");
        var erorState=document.getElementById("spnSt");
        var cCity=document.getElementById("city");
        var erorCity=document.getElementById("spnCity");
        var cAddress=document.getElementById("address");
        var erorAddress=document.getElementById("spnAddr");
        var cPostal=document.getElementById("postal");
        var erorPostal=document.getElementById("spnPost");
       

        //to correct error and click button without refresh page
        erorQnt.innerHTML="";
        erorQnt.style.background='#f2ecea';
        erorName.innerHTML="";
        erorName.style.background='#f2ecea';
        erorLname.style.background='#f2ecea';
        erorLname.innerHTML="";
        erorEmail.innerHTML="";
        erorEmail.style.background='#f2ecea';
        erorPhone.innerHTML="";
        erorPhone.style.background='#f2ecea';
        erorState.innerHTML="";
        erorState.style.background='#f2ecea';
        erorCity.innerHTML="";
        erorCity.style.background='#f2ecea';
        erorAddress.innerHTML="";
        erorAddress.style.background='#f2ecea';
        erorPostal.innerHTML="";
        erorPostal.style.background='#f2ecea';
        errorMsg.innerHTML="";
        errorMsg.style.background='#f2ecea';

        

        //variable for using in validation by Regex
        var tempQnt=giftQnt.value;
        var newEmail=cEmail.value;
        var checkPhone=cPhone.value;
        var checkCity=cCity.value;
        var checkAddr=cAddress.value;
        var checkpost=cPostal.value;
        var checkName=cName.value;
        var checkLname=cLname.value;
        var validation=true;//if form fill correctly, validation will be true, but by every invalid data will be false.finally, when it is true and form is sent,a message is showed
        
      
        
        //gift card amount validation
        //firt check for blank input
       
        if (giftValue.value==="" || giftValue.value===null){
            errorMsg.innerHTML="Pleas choose gift card value";
            errorMsg.style.background="red"
            errorMsg.style.color="white";
            giftValue.focus();
            validation=false;
            
        }
        //if user entered other amount
        else if (!(giftValue.value==25||giftValue.value==50||giftValue.value==75||giftValue.value==100)){
            errorMsg.innerHTML="Pleas enter available  gift card value";
            errorMsg.style.background="red"
            errorMsg.style.color="white";
            giftValue.focus();
            validation=false;
        }
        
        //gift card quantity validation
        //first check for input is blank 
        if (tempQnt==="" || tempQnt===null)
        {
                       
            erorQnt.innerHTML="Pleas enter number of card";
            erorQnt.style.background="red";
            erorQnt.style.color="white";
            giftQnt.focus();
            validation=false;
                 }
             //number of gift card should be maximum 3 digits, no other character    
            else if (!RegQnt.test(tempQnt))
           {

              
               erorQnt.innerHTML="Please enter digit 0-9";
               //console.log(erorQnt.innerHTML);
               erorQnt.style.background="red";
               erorQnt.style.color="white";
               giftQnt.focus();
               validation=false;
             }

             //check textbox name
        if (cName.value===""||cName.value===null){
                  
                erorName.innerHTML="please enter your name";
                erorName.style.background="red";
                erorName.style.color="white";
                cName.focus();
                validation=false;
         }
         else if(!Regname.test(checkName)){
            erorName.innerHTML="please enter a valid name";
            erorName.style.background="yellow";
            erorName.style.color="red";
            cName.focus();
            validation=false;
         }
         //check textbox lname
         if (cLname.value===""||cLname.value===null){
             
             erorLname.innerHTML="Please enter your last name";
             erorLname.style.background="red";
             erorLname.style.color="white";
             cLname.focus();
             validation=false;
         }
         else if (!Regname.test(checkLname)){
            erorLname.innerHTML="Please enter a valid last name";
             erorLname.style.background="yellow";
             erorLname.style.color="red"; 
             cLname.focus();
             validation=false;
         }

         //check email 
         if(cEmail.value===""||cEmail.value===null){
              
             erorEmail.innerHTML="please enter your Email";
             erorEmail.style.background="red";
             erorEmail.style.color="white";
             cEmail.focus();
             validation=false;
         }
         //check email is valid
        else if(!RegEmail.test(newEmail)){
               
            erorEmail.innerHTML="please enter valid Email";
            erorEmail.style.background="yellow";
            erorEmail.style.color="red";
            cEmail.focus();
            validation=false;
         }
         //check phone
         if (cPhone.value===""||cPhone.value===null)
         {
            erorPhone.innerHTML="Please enter your phone number";
            erorPhone.style.background="red";
            erorPhone.style.color="white";
            cPhone.focus();
            validation=false;
         }
         //check phone number is valis
         else if (!RegPhone.test(checkPhone)){
            erorPhone.innerHTML="Please enter valid phone number";
            erorPhone.style.background="yellow";
            erorPhone.style.color="red"; 
            cPhone.focus();
            validation=false;
         }
         //State validation
         if (cState.value===""||cState.value===null){
            erorState.innerHTML="Please Choose your State";
            erorState.style.background="red";
            erorState.style.color="white";
            cState.focus();
            validation=false;

         }
         //check city
         if(cCity.value===""||cCity.value===null)
         {
            erorCity.innerHTML="Please enter the city which you live";
            erorCity.style.background="red";
            erorCity.style.color="white";
            cState.focus();
            validation=false;
         }
         //CHECK VALID VALUE  FOR CITY
         else if(!RegCity.test(checkCity)){

            erorCity.innerHTML="Please enter a valid city name";
            erorCity.style.background="yellow";
            erorCity.style.color="red";
            cState.focus();
            validation=false;

         }
         //check for blank Address
         if(cAddress.value===""||cAddress.value===null){
            erorAddress.innerHTML="Please enter an Address";
            erorAddress.style.background="red";
            erorAddress.style.color="white";
            cAddress.focus();
            validation=false;

         }
         //check for valid address
         else if (!RegAddr.test(checkAddr)){
            erorAddress.innerHTML="Please enter a validAddress";
            erorAddress.style.background="yellow";
            erorAddress.style.color="red";
            cAddress.focus();
            validation=false;
         }
         //check for blank postal code
         if(cPostal.value===""||cPostal.value===null)
         {
             erorPostal.innerHTML="Please enter a postal code"
             erorPostal.style.background="red";
             erorPostal.style.color="white";
             cPostal.focus();
             validation=false;
         }
         //check valid postal code
         else if(!RegPos.test(checkpost)){
            erorPostal.innerHTML="Please enter a valid postal code"
            erorPostal.style.background="yellow";
            erorPostal.style.color="red";
            cPostal.focus();
            validation=false;
         }
        // console.log(validation);
        //if form is filled correctly,these message will be displayed
         if (validation===true){
             
            var showResult=document.getElementById("last-div");
            console.log(showResult);
            var showName=document.getElementById("resName");
            var showAdd=document.getElementById("resAdd");
            var showPost=document.getElementById("resPost");                    
            var showPay=document.getElementById("resPay");
            var showQnt=document.getElementById("resQnt") ;
            formHandle.style.display="none"; 
            showResult.style.display="block";
            console.log(showResult.style.display);
            showName.innerHTML=cName.value;
            console.log(showName.innerHTML);
            showAdd.innerHTML=cAddress.value;
            showPost.innerHTML=cPostal.value;
            showPay.innerHTML=payment;
            showQnt.innerHTML=giftQnt.value;
                     }
         return false;
        }  
        
       
    }
    
    
