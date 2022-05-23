.body{
 margin: 0; 
}


.header * {
    box-sizing: border-box;
}

.main-conversor{
    width: 100vw;
    height: 110vh;
    background-color: rgb(18, 2, 32) ;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -10px -10px ;
    padding: 0%;
}
.left-Conversor{
width: 50vw;
height: 100vh;
display: flex ;
justify-content:center ;
align-items: center;

flex-direction: column;
}

.left-Conversor > h1{
    color: rgb(0, 255, 128);
    display: flex;
    justify-content: center;
     align-items: center;
     font-size: 44pt;

}

.image{
    width: 35vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Right-conversor{
    width: 50vw;
    height: 100vh;
    display: flex ;
    justify-content:center ;
    align-items: center;
}
.Card-Conversor{
    width: 60%;
    display: flex ;
    justify-content:center ;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background-color: rgb(46, 32, 67);
    border-radius: 20px;
    box-shadow:0px 10px 40px rgb(88, 68, 109)

}

.Conversor> h1 {
    color:rgb(0, 255, 128);
    font-weight: 500;
     margin: 0%;
     padding: 0%;
     font-style: verdana; 
}
.textfield {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;

}

.Resultado {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.textfield > input{
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background-color:rgb(88, 68, 109);
    color: rgb(14, 13, 13);
    font-size: 12pt;
    box-shadow: 0px 10px 40px rgb(88, 68, 109);
    outline: none;
    box-sizing: border-box;
}

.Resultado > input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background-color: rgb(88, 68, 109);
    color: rgb(14, 13, 13);
    font-size: 12pt;
    box-shadow: 0px 10px 40px rgb(88, 68, 109);
    outline: none;
    box-sizing: border-box;
}

.textfield > label{

    color: rgb(0, 255, 128);
    margin-bottom: 10px;
}
.resultado > label{
   color: rgb(0, 255, 128);
    margin-bottom: 10px;
}
.btn-calc{
    width: 100%;
    padding: 16px 0px;
    margin: 25px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    color: black;
    background-color: rgb(88, 68, 109);
    cursor: pointer;
    box-shadow: 0px 10px 40px -12px rgb(88, 68, 109);
}

.Card-Conversor > select  {

    width: 100%;
    padding: 16px 0px;
    margin: 25px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    color: black;
    background-color: rgb(88, 68, 109);
    cursor: pointer;
    box-shadow: 0px 10px 40px -12px rgb(88, 68, 109);

    display: flex;    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

@media only screen and (max-width: 950px){
    .card-conversor{
        width: 70%;
    }
}
@media only screen and (max-width: 600px){
    .main-conversor{
       flex-direction: column;
    }
    .left-Conversor > h1 {
        display: none;
    }
    .left-Conversor {
        width: 100%;
        height: auto;
    }
    .right-Conversor {
        width: 100%;
        height: auto;
    }
.image {
    width: 50vw;
}
.card-conversor{
    width: 90%;
}
}
