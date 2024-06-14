import styles from'./NavComponent.module.css'
import SubComponent from './SubComponent';

const NavComponent = () => {
  // Comentários fora do JSX
  return (
    // Comentário ainda fora do JSX
    <div>
      {/*Comentário dentro do JSX*/}
      <a href="#">Link</a>
      <h2 className="subtitulo">Meu app manipulando atributos</h2>
      <p className={styles.estilo}>Paragrafo dentro do NavComponent</p>
      <SubComponent />
    </div>
  );
};

export default NavComponent;

