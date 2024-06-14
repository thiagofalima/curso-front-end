const MyEvent = () => {

    const handleClick = () => {
        alert('Botão clicado!');
    };

  return (
    <div>
        <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default MyEvent