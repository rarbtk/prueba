import { Link } from "react-router-dom";

export default ({info, coin}) =>{
let informacion =[];
if(info.cuentas){
    informacion = info.cuentas.filter((ele)=>{
        if(ele.moneda == coin.coin && ele.n == coin.id){
            return ele
        }
    });

};
const styles ={

    container: {
        backgroundColor:"#ececec",
        position: "absolute",
        width:"100%",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        margin: "auto",
        height:"100%",
        textAlign:"center",
    },
    optionsContainer:{
        width:"100%",
        display:"flex",
        flexWrap: "wrap",
        justifyContent:"space-around",
        height:"75%",
        flexDirection:"column"
    },
    
    moreOptions:{
        width:"15%",
        backgroundColor:"green",
        height:"25%",
        color:"white",
        display:"flex",
        fontSize:"1em",
        marginLeft: "5%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:"10px",
        boxShadow: '1px 2px 9px #000000',


       
    },
  
}
    return (

<>
{informacion.length > 0 ? 
(
<>
<div style={styles.container}>
    <h4>Consulta de saldo</h4>
    <h1 >Este es tu saldo actual</h1>
    { 
        <div style={styles.optionsContainer}>
        <h2>Saldo de la cuenta: {informacion[0].saldo + " " + informacion[0].moneda} </h2>
        <h2>Tipo de cuenta: {informacion[0].tipo_letras == "CC" ? "Cuenta corriente" : "Caja de ahorro "} {informacion[0].moneda =="u$s" ? "en dolares" : "en pesos"}</h2>
        <h2>Número de cuenta: {informacion[0].n}</h2>
        
        <div style={styles.moreOptions}>
        <Link to="/" style={{ color: '#FFF', textDecoration:"none" }}>
        <h2 > {"<< "}Salir</h2> 
        </Link> 
        </div> 
        
        </div>




}


</div>
</>
)


: <h1>Loading ... </h1>}

</>

    )
}