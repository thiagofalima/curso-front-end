const RenderComponent = () => {
  
  const obj = {
    nome: 'Thiago',
    idade: 25
  }
  
    return (
    <div>
        <p>Oi meu nome é {obj.nome}.</p>
        <p>Tenho {obj.idade} anos de idade.</p>
        {/* <p>Usando JS Puro {5 + 5}</p>
        <p>Usando JS Puro {4 * 201}</p> */}
    </div>
  )
}

export default RenderComponent