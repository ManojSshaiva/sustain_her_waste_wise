function profileDisplay(){
    let profile = document.querySelector(".profile-details");
    if(profile.style.display === "block"){
     profile.style.display = "none";
    }else{
     profile.style.display = "block";
    }
 }
 function displayfeedback(){
    let feedback = document.querySelector(".feedback1");
    if(feedback.style.display === "block"){
        feedback.style.display = "none"; 
        document.querySelector(".form-part").style.display= "block";
    }else{
        feedback.style.display = "block";
        document.querySelector(".submitted-part").style.display = "none";
    }
 }
 function submitwindow(){
    let formpart= document.querySelector(".form-part");
    formpart.style.display= "none";
    document.querySelector(".submitted-part").style.display = "block";
 }

 function notifying(form) {
     address = document.getElementById("address").value;
     time = document.getElementById("time").value;
     date = document.getElementById("date").value;
     weight=document.getElementById("weight").value;
    
    let askingElement = document.querySelector(".asking");
    let requestSubmitPart = document.querySelector(".request-submit-part");
    
    if (askingElement && requestSubmitPart) {
        askingElement.style.display = "none";
        document.getElementById("address-given").innerHTML = address;
        document.getElementById("time-given").innerHTML = time;
        requestSubmitPart.style.display = "block"; // Change to block to make it visible
    } else {
        console.error("Element not found");
        // Handle this case accordingly based on your requirements
    }
    
}

            let s_time=document.getElementById("time").value;
            let s_date=document.getElementById("date").value;
            let s_address=document.getElementById("address").value;
            let s_weight=document.getElementById("weight").value;

  function displayrequest(){
    let request=document.querySelector(".request1");
    if(request.style.display === "block"){
        request.style.display = "none"; 
      
    }else{
        request.style.display = "block";
      
    }
  }

  function tofile()
  {
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;
    if(id === "1234" && password === "2004"){
            //    // Create a link element
            //    const link = document.createElement('a');
            //    link.href = 'data.pdf'; // Replace with the actual path to your file
       
            //    // Set the download attribute with the file name
            //    link.download = 'data.pdf';
       
            //    // Simulate click to trigger download
            //    link.click();
            document.getElementById("s_time").innerHTML = time;
            document.getElementById("s_date").innerHTML = date;
            document.getElementById("s_address").innerHTML = address;
            document.getElementById("s_weight").innerHTML =weight;
            document.querySelector(".norequest-login").style.display = "none";
            document.querySelector(".after-login").style.display = "block";


           } else {
               // Handle incorrect credentials
               alert("Invalid ID or password");
           }
    
  }
  function displaynorequest(){
   let norequest = document.querySelector(".norequest1");
   if(norequest.style.display === "none")
   {
    norequest.style.display = "block";
    document.querySelector(".norequest-login").style.display = "block";
    document.querySelector(".after-login").style.display = "none";
   }
   else{
    norequest.style.display = "none";
   }
}
