import { useState } from "react";

const Formulario = () =>{
    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [nome, setNome] = useState('')

    const alteraNome = (evento) => {
        setNome(evento.target.value)
    }

const calculaImc = () =>{
    const formula = massa / (altura * altura) 
    const resultado = formula

    if(resultado < 18.5){
        return (
            <p>Baixo Peso</p>
        )
    }else if(resultado >= 18.5 && resultado <= 24.9){
        return (
            <p>Eutrofia</p>
        )
    }else if(resultado <= 29.9){
        return (
            <p>Sobrepeso</p>
        )
    }else if(resultado >= 30){
        return (
            <p>Obesidade</p>
        )
    }
}

return(
<>
<h1 className='text-center'>Cálcule seu IMC</h1>
      <img className='d-block mx-auto w-50 h-auto mb-2' src="https://t3.ftcdn.net/jpg/01/19/41/24/360_F_119412445_fFHCOumahexuL1TGzStDkuNZ88OeFkvl.jpg"/>
      <div className='container'>
        <div className='d-flex justify-content-center text-center'>
        <form>
            <label class="form-label mt-1 mb-2" for="text">Seu nome:</label>
            <input class="text-center form-control mb-2 mt-1" type="text" required onChange={alteraNome}/>
            <label class="form-label mt-1 mb-2" for="number">Sua massa:</label>
            <input class="form-control mb-2 mt-1" type="number" required onChange={evento => setMassa(parseFloat(evento.target.value))}/>
            <label for="number" class="form-label mb-2 mt-1">Sua altura:</label>
            <input type="number" class="form-control" required onChange={evento => setAltura(parseFloat(evento.target.value))}/>
          </form>
        </div>
        <table class="table table-success mt-3">
          <tbody>
            <tr>
                <td className="text-center">{nome}</td>
            </tr>
            <tr>
                <td className="text-center">Seu estado é: {calculaImc()}</td>
            </tr>
          </tbody>
          </table>
      </div>
      </>
)
}
        export default Formulario








 