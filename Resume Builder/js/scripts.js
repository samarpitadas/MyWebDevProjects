function generateCV(){
    document.getElementById('nameT').innerHTML=document.getElementById('nameIn').value ;
    document.getElementById('objT').innerHTML=document.getElementById('objIn').value ;
    document.getElementById('phoneT').innerHTML=document.getElementById('numIn').value ;
    document.getElementById('emailT').innerHTML=document.getElementById('emailIn').value ;
    document.getElementById('LinkedT').innerHTML=document.getElementById('linkIn').value ;
    document.getElementById('eduT1').innerHTML=document.getElementById('eduField1').value ;
    document.getElementById('eduT2').innerHTML=document.getElementById('eduField2').value ;
    document.getElementById('eduT3').innerHTML=document.getElementById('eduField3').value ;
    document.getElementById('skillT1').innerHTML=document.getElementById('skillField1').value ;
    document.getElementById('skillT2').innerHTML=document.getElementById('skillField2').value ;    
    document.getElementById('skillT3').innerHTML=document.getElementById('skillField3').value ;     
    document.getElementById('actiT1').innerHTML=document.getElementById('interestField1').value ;
    document.getElementById('actiT2').innerHTML=document.getElementById('interestField2').value ;
    document.getElementById('workT1').innerHTML=document.getElementById('workField1').value ; 
    document.getElementById('workT2').innerHTML=document.getElementById('workField2').value ; 
    document.getElementById('workT3').innerHTML=document.getElementById('workField3').value ; 
    document.getElementById('awardT1').innerHTML=document.getElementById('awardField1').value ; 
    document.getElementById('awardT2').innerHTML=document.getElementById('awardField2').value ; 
    document.getElementById('refT1').innerHTML=document.getElementById('refField1').value ; 
    document.getElementById('refT2').innerHTML=document.getElementById('refField2').value ; 

    let file=document.getElementById('imgField').files[0];
    let reader=new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend=function(){
        document.getElementById('photoT').src=reader.result;
    }

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

}
function printMyResume(){
    window.print();
}