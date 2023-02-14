function getTextField(fieldId){
    const textField = document.getElementById(fieldId);
    const textFieldValue = textField ;
    return textFieldValue;
}
const text = getTextField('text-field');
const btnBold = getTextField('make-bold');
const btnItalic = getTextField('make-italic');
const btnUnderline = getTextField('make-underline');
const btnLeft = getTextField('make-left');
const btnCenter = getTextField('make-center');
const btnRight = getTextField('make-right');
const btnUppercase = getTextField('make-uppercase');
function setStyle(id,yourStyle,property1,value1,property2,value2 , btn)

document.getElementById('make-bold').addEventListener('click' , function(){
    
    if(text.style.fontWeight === 'bold'){
        text.style.fontWeight = 'normal';
        btnBold.style.backgroundColor= '';
        btnBold.style.color = '';
    }else{
        text.style.fontWeight = 'bold';
        btnBold.style.backgroundColor ='#002233';
        btnBold.style.color = 'white'
    }

})
document.getElementById('make-italic').addEventListener('click' , function(){
    // getTextField('text-field').style.fontStyle = 'italic';
    if(text.style.fontStyle === 'italic'){
        text.style.fontStyle = '';
        btnItalic.style.backgroundColor= '';
        btnItalic.style.color = '';
    }else{
        text.style.fontStyle = 'italic';
        btnItalic.style.backgroundColor ='#002233';
        btnItalic.style.color = 'white'
    }
})
document.getElementById('make-underline').addEventListener('click' , function(){
    // getTextField('text-field').style.textDecoration = 'underline'
    if(text.style.textDecoration === 'underline'){
        text.style.textDecoration = '';
        btnUnderline.style.backgroundColor= '';
        btnUnderline.style.color = '';
    }else{
        text.style.textDecoration = 'underline';
        btnUnderline.style.backgroundColor ='#002233';
        btnUnderline.style.color = 'white'
    }
})


document.getElementById('make-left').addEventListener('click' , function(){
    // getTextField('text-field').style.textAlign = 'left'
    if(text.style.textAlign === 'left'){
        text.style.textAlign = '';
        btnLeft.style.backgroundColor= '';
        btnLeft.style.color = '';
    }else{
        text.style.textAlign = 'left';
        btnLeft.style.backgroundColor ='#002233';
        btnLeft.style.color = 'white'
    }
})
document.getElementById('make-center').addEventListener('click' , function(){
    // getTextField('text-field').style.textAlign = 'center'
    if(text.style.textAlign === 'center'){
        text.style.textAlign = '';
        btnCenter.style.backgroundColor= '';
        btnCenter.style.color = '';
    }else{
        text.style.textAlign = 'center';
        btnCenter.style.backgroundColor ='#002233';
        btnCenter.style.color = 'white';
    }
})
document.getElementById('make-right').addEventListener('click' , function(){
    // getTextField('text-field').style.textAlign = 'right'
    if(text.style.textAlign === 'right'){
        text.style.textAlign = '';
        btnRight.style.backgroundColor= '';
        btnRight.style.color = '';
    }else{
        text.style.textAlign = 'right';
        btnRight.style.backgroundColor ='#002233';
        btnRight.style.color = 'white';
    }
})

const colorr= document.getElementById('make-color') ;
const fontSize =document.getElementById('number');
const px = 'px'

document.getElementById('make-color').addEventListener('input' , function(){
    getTextField('text-field').style.color = colorr.value;
   
})
document.getElementById('number').addEventListener('input' , function(){
    getTextField('text-field').style.fontSize = fontSize.value+px;
    console.log(fontSize.value+px);
   
})

document.getElementById('make-uppercase').addEventListener('click' , function(){
    // getTextField('text-field').style.textTransform = 'uppercase';
    if(text.style.textTransform === 'uppercase'){
        text.style.textTransform = '';
        btnUppercase.style.backgroundColor= '';
        btnUppercase.style.color = '';
    }else{
        text.style.textTransform = 'uppercase';
        btnUppercase.style.backgroundColor ='#002233';
        btnUppercase.style.color = 'white';
    }
})