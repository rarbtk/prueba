import { Link } from "react-router-dom";

export default ({info}) =>{
let informacion =[];

if(info.cuentas){
    informacion = info.cuentas.filter((ele)=>{
        if(ele.moneda =="u$s" || ele.moneda == "$"){
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
        height:"65%"
    },
    singleAccount:{
        width:"30%",
        backgroundColor:"green",
        height:"30%",
        display:"flex",
        textAlign:"center",
        color:"white",
        justifyContent:"space-around",
        flexDirection:"column",
        alignItems:"center",
        fontSize:"1em",
        marginTop:"auto",
        marginBottom:"auto",
        textDecoration:"none",
        boxShadow: '1px 2px 9px #000000',
        borderRadius:"10px",

    },
    moreOptions:{
        width:"30%",
        backgroundColor:"green",
        height:"30%",
        color:"white",
        display:"flex",
        fontSize:"1em",
        marginTop:"auto",
        marginBottom:"auto",
        alignItems:"center",
        justifyContent:"center",
        boxShadow: '1px 2px 9px #000000',
        borderRadius:"10px",

       
    },
  
}
    return (

<>
{informacion.length > 0 ? 

(
<>
<div style={styles.container}>
    <h4 style={{color:"darkblue"}}>Consulta de saldo</h4>
    <h1 style={{color:"darkblue"}}>Seleccione la cuenta a consultar</h1>
    <div style={styles.optionsContainer}>
    <div style={styles.moreOptions}>
    <Link to="/" style={{ color: '#FFF', textDecoration:"none" }}>
    <h2 > {"<< "}Opciones anteriores</h2> 
    </Link> 
    </div>
    {
        informacion.slice(5,9).map((ele)=>{
            return(
                <Link style={styles.singleAccount} to={`/${ele.n}/${ele.moneda}`}>

                <div >
                <h2>{ele.tipo_letras == "CC" ? "Cuenta Corriente" : "Caja de ahorro"}</h2>
                <h3>Nro: {ele.n}</h3>
                </div>
                </Link>

            )
            

        })
        
    }
    <div style={styles.moreOptions}>
    <Link to="/third" style={{ color: '#FFF', textDecoration:"none" }}><h2 >Mas opciones {" >>"}</h2> </Link> 
    
    </div>
    </div>
   


</div>
</>
)


: <h2>Loading ... </h2>}

</>

    )
}