let getID = y => document.getElementById(y);
let getSel = x => document.querySelector(x);
let comandForm = document.forms['comandBtn']

let mainBox = getSel('.textArea')

let comandBtn = document.getElementsByClassName('btn btn-secondary')
//Change font style by clicking on the third button
comandBtn[2].addEventListener('click', function () {
    for (let i = 0; i < mainBox.children.length; i++) {
        if (comandForm.italic.checked !== true) {
            mainBox.children[i].style.fontStyle = "italic"
        }
        if (comandForm.italic.checked == true) {
            mainBox.children[i].style.fontStyle = 'normal'
        }
    }
}
)
//Change font weight by clicking on the second button
comandBtn[1].addEventListener('click', function () {
    for (let i = 0; i < mainBox.children.length; i++) {
        if (comandForm.bold.checked !== true) {
            mainBox.children[i].style.fontWeight = "bold"
        }
        if (comandForm.bold.checked == true) {
            mainBox.children[i].style.fontWeight = 'normal'
        }
    }
})
//Set underline text decoration by clicking on the fourth button
comandBtn[3].addEventListener('click', function () {
    for (let i = 0; i < mainBox.children.length; i++) {
        if (comandForm.underline.checked !== true) {
            mainBox.children[i].style.textDecoration = "underline"
        }
        if (comandForm.underline.checked == true) {
            mainBox.children[i].style.textDecoration = 'none'
        }
    }
})
//Set line-through text decoration by clicking on the fifth button
comandBtn[4].addEventListener('click', function () {
    for (let i = 0; i < mainBox.children.length; i++) {
        if (comandForm.strike.checked !== true) {
            mainBox.children[i].style.textDecoration = "line-through"
        }
        if (comandForm.strike.checked == true) {
            mainBox.children[i].style.textDecoration = 'none'
        }
    }
})
//Change text aline by clicking on the six-eight radio-buttons
comandBtn[5].addEventListener('click', function () {
    for (let i = 0; i < mainBox.children.length; i++) {

        mainBox.children[i].style.textAlign = "left"
    }
})
comandBtn[6].addEventListener('click', function () {
    for (let i = 0; i < mainBox.children.length; i++) {

        mainBox.children[i].style.textAlign = "center"
    }
})
comandBtn[7].addEventListener('click', function () {
    for (let i = 0; i < mainBox.children.length; i++) {

        mainBox.children[i].style.textAlign = "right"
    }
})

//Set font Famile by clicking on the ninth button (drop down menu) 
fontFamilyDropDownMenu = getID('fontFamily')
for (let i = 0; i < fontFamilyDropDownMenu.children.length; i++) {
    fontFamilyDropDownMenu.children[i].addEventListener('click', function () {
        for (let y = 0; y < mainBox.children.length; y++) {
            mainBox.children[y].style.fontFamily = this.innerHTML
        }
    })
}
//Change font size by clicking on the tenth button (drop down menu) 
fontSizeDropDownMenu = getID('fontSize')
for (let i = 0; i < fontSizeDropDownMenu.children.length; i++) {
    fontSizeDropDownMenu.children[i].addEventListener('click', function () {
        for (let y = 0; y < mainBox.children.length; y++) {
            mainBox.children[y].style.fontSize = this.innerHTML
        }
    })
}
//Alert Color-Palette menu for change font color by clicking on the eleventh button
comandBtn[10].addEventListener('click', function () {
    getSel('.fontColorStyle').classList.add("slide-bottom");
    getSel('.fontColorStyle').style.display = 'block';
    getSel('.fon').style.display = 'block';
})
//Close the menu by clicking on 'x"
getSel('.closebtn').addEventListener('click', function () {
    getSel('.fontColorStyle').style.display = 'none';
    getSel('.fon').style.display = 'none';
})
// Change font color by clicking on the items in the Color-Palette box
let colorPallete = getSel('.colorPalette')
for (let i = 0; i < colorPallete.children.length; i++) {
    colorPallete.children[i].addEventListener('click', function () {
        for (let y = 0; y < mainBox.children.length; y++) {
            mainBox.children[y].style.color = this.innerHTML
        }
    })
}


//Alert menu for change main-div background style by clicking on the twelfth button
let backGroundType = document.getElementsByClassName('nav-item nav-link')
let backgroundStyle = getID('backgroundStyle')
comandBtn[11].addEventListener('click', function () {
    getSel('.styleProperty').classList.add("slide-bottom");
    getSel('.styleProperty').style.display = 'block';
    getSel('.fon').style.display = 'block';

})
// Change background color by clicking on the items in the Color-Palette box
backGroundType[0].addEventListener('click', function () {
    backgroundStyle.innerHTML = getSel('.colorPalette').innerHTML
    backgroundStyle.className = 'colorPalette'
    for (let i = 0; i < backgroundStyle.children.length; i++) {
        backgroundStyle.children[i].addEventListener('click', function () {
            getSel('.mainScreen').style.backgroundColor = this.innerHTML;
            getSel('.mainScreen').style.backgroundImage = ''
        })
    }

})

// Change background image by clicking on the items in the images box
let backgroundImage = getSel('.imgGroup')
backGroundType[1].addEventListener('click', function () {
    backgroundStyle.innerHTML = backgroundImage.innerHTML
    backgroundStyle.className = 'backgroundImages'
    for (let i = 0; i < backgroundStyle.children.length; i++) {
        backgroundStyle.children[i].addEventListener('click', function () {
        getSel('.mainScreen').style.backgroundImage = this.style.backgroundImage;
        getSel('.mainScreen').style.backgroundSize = '100%'
        getSel('.mainScreen').style.backgroundRepeat = 'no-repeat'

        })
    }
})


// Change background image by chosing the items from the folder
let imgFile = getSel('.imgFile')
backGroundType[2].addEventListener('click', function () {
    backgroundStyle.innerHTML = imgFile.innerHTML
    backgroundStyle.className = 'custom-file'
getSel('.custom-file-input').addEventListener('change',function(){
    if(this.files[0]){
        let fr = new FileReader();
        fr.addEventListener('load',function(){
            getSel('.mainScreen').style.backgroundImage = 'url('  +fr.result+')'
        },false);
        fr.readAsDataURL(this.files[0])
    }
})
})


//Close the menu by clicking on 'x"
getSel('.closebtn2').addEventListener('click', function () {
    getSel('.styleProperty').style.display = 'none';
    getSel('.fon').style.display = 'none';
    
})


//Alert the logn menu by clicking on the thirteenth button
comandBtn[12].addEventListener('click', function (){
getSel('.fon').style.display = 'block'; 
getSel('.loginForm').style.display = 'block'
getSel('.loginForm').classList.add("slide-bottom");
})

let loginForm =document.forms['registrationForm']
let user = {
    login:"admin",
    password:"admin",
}
//Check login end password
loginForm[2].addEventListener('click',function(){
    if(loginForm[0].value==""||loginForm[1].value==""){
       getID('message').innerHTML = 'Value is empty'
    }
    if(loginForm[0].value==user.login&&loginForm[1].value==user.password){
        getSel('.fon').style.display = 'none'; 
        getSel('.loginForm').style.display = 'none'
        loginForm[0].value =""
        loginForm[1].value =""
        getID('message').innerHTML = ''
     }
     if(loginForm[0].value!==""&&loginForm[1].value!==""){
        getID('message').innerHTML = 'Please check your login or password'  
     }
    
})


//If lodin and password are correct alert text area menu by clickng on first button
let textArea = getSel('.textAreaStyle')
comandBtn[0].addEventListener('click', function (){
    if (comandForm.login.checked !== true){
        alert('Login first')
    }
    if (comandForm.login.checked == true){
    getSel('.comandBar').style.display = 'none'; 
    getSel('.formsBtn').style.display = 'block'
    mainBox.style.display = 'none'; 
    getSel('.inputTextArea').style.display = 'block'
   textArea.innerHTML = mainBox.innerHTML}
    })

let formsProperty = document.forms['formsProperty']
formsProperty[0].addEventListener('click',function(){
    getSel('.comandBar').style.display = 'block'; 
    getSel('.formsBtn').style.display = 'none'
    mainBox.style.display = 'block'; 
    getSel('.inputTextArea').style.display = 'none'
    mainBox.innerHTML =  textArea.value
})

//Alert the table properties menu
formsProperty[1].addEventListener('click',function(){
    getSel('.fon').style.display = 'block';
    getSel('.tableForm').style.display = 'block';
    getSel('.tableForm').classList.add("slide-bottom");
})

getSel('.closebtn3').addEventListener('click', function () {
    getSel('.fon').style.display = 'none';
    getSel('.tableForm').style.display = 'none';

    for (let i=0;i<tableProperties.length-2;i++){
        tableProperties[i].value = ''
    }
    tableProperties[7].selectedIndex = '0'
    tableProperties[8].selectedIndex = '0'
    getID('message2').innerHTML = ''
})


let tableProperties = document.getElementsByClassName('form-control')

//Creat the table
tableProperties[10].addEventListener('click',function(){
    let table = ''
    let countTr = tableProperties[2].value
    let countTd = tableProperties[3].value
    let widthOfTd = tableProperties[4].value
    let heightOfTd = tableProperties[5].value
    let widthOfBorder = tableProperties[6].value    
    let styleOfBorder = tableProperties[7].options[tableProperties[7].selectedIndex].value;
    let colorOfBorder = tableProperties[8].options[tableProperties[8].selectedIndex].value;

    if(isNaN(countTd)==true||isNaN(countTr)==true||isNaN(widthOfTd)==true||isNaN(heightOfTd)==true||isNaN(widthOfBorder)==true){
     getID('message2').innerHTML = 'valid value'
    }
    if(isNaN(countTd)!==true&&isNaN(countTr)!==true&&isNaN(widthOfTd)!==true&&isNaN(heightOfTd)!==true&&isNaN(widthOfBorder)!==true){
let cellStyle = `<td style = 'width:${widthOfTd}px; height:${heightOfTd}; border:${widthOfBorder}px ${styleOfBorder} ${colorOfBorder}'>`
console.log(cellStyle)
for (let r = 0; r < countTr; r++) {
    table += '<tr>';
    for (let c = 0; c < countTd; c++) {
        table += cellStyle + 'TD' + '</td>';
    }
    table += '</tr>'
    textArea.innerHTML = mainBox.innerHTML + ('<table>' + table + '</table><br>')
}

    }
    mainBox.innerHTML=textArea.innerHTML
})
    
tableProperties[9].addEventListener('click',function(){
    for (let i=0;i<tableProperties.length-2;i++){
        tableProperties[i].value = ''
    }
    tableProperties[7].selectedIndex = '0'
    tableProperties[8].selectedIndex = '0'
    getID('message2').innerHTML = ''
})


//Alert the OL LIST properties menu
formsProperty[2].addEventListener('click',function(){
    getSel('.fon').style.display = 'block';
    getSel('.olList').style.display = 'block';
    getSel('.olList').classList.add("slide-bottom");
})



getSel('.closebtn4').addEventListener('click', function () {
    getSel('.fon').style.display = 'none';
    getSel('.olList').style.display = 'none';
    olList.countLi.value = ''
    olList.olType.selectedIndex= '0'  
    getID('message3').innerHTML = ''
})

let olList = document.forms['listForm']
//Create OL LIST
olList.createBtnTable.addEventListener('click',function(){
    let list = ''
    let countLi = olList.countLi.value
    let olStyle =  olList.olType.options[olList.olType.selectedIndex].value
    if(isNaN(countLi)==true){
        getID('message3').innerHTML = 'invalid value'
    }
    if(isNaN(countLi)!==true&&olStyle!=="Choose Ol type mark"){ 
for (let li = 1; li < countLi; li++) {
    list += '<li>' + 'Item' + li + '</li>'
}
textArea.innerHTML = mainBox.innerHTML + (`<ol type='${olStyle}'>` + list + '</ol>')
    }
    mainBox.innerHTML=textArea.innerHTML
})

olList.resetBtnTable.addEventListener('click',function(){
    olList.countLi.value = ''
    olList.olType.selectedIndex= '0'  
    getID('message3').innerHTML = ''
})

//Alert the OL LIST properties menu 
formsProperty[3].addEventListener('click',function(){
    getSel('.fon').style.display = 'block';
    getSel('.ulList').style.display = 'block';
    getSel('.ulList').classList.add("slide-bottom");
})

getSel('.closebtn5').addEventListener('click', function () {
    getSel('.fon').style.display = 'none';
    getSel('.ulList').style.display = 'none';
    ulList.countLi.value = ''
    ulList.ulType.selectedIndex= '0'  
    getID('message3').innerHTML = ''
   
})

let ulList = document.forms['listFormUl']
//Create UL LIST
ulList.createBtnTable.addEventListener('click',function(){
    let list = ''
    let countLi = ulList.countLi.value
    let ulStyle =  ulList.ulType.options[ulList.ulType.selectedIndex].value
    if(isNaN(countLi)==true){
        getID('message4').innerHTML = 'invalid value'
    }
    if(isNaN(countLi)!==true&&ulStyle!=="Choose Ol type mark"){ 
for (let li = 1; li < countLi; li++) {
    list += '<li>' + 'Item' + li + '</li>'
}
textArea.innerHTML = mainBox.innerHTML + (`<ul type='${ulStyle}'>` + list + '</ul>')
    }
    mainBox.innerHTML=textArea.innerHTML
})

ulList.resetBtnTable.addEventListener('click',function(){
    ulList.countLi.value = ''
    ulList.ulType.selectedIndex= '0'  
    getID('message3').innerHTML = ''
})