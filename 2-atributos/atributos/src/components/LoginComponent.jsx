import {useState} from 'react'
import styles from './LoginComponent.module.css'

const LoginComponent = () => {

        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            // alert('Email cadastrado!')
            console.log(email);
            console.log(senha);
        }
  return (
    <div>
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type="email" placeholder='Digite seu e-mail' value={email} onChange={(event) => setEmail(event.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <label>Senha: </label>
                <input type="senha" placeholder='Digite seu e-mail' value={senha} onChange={(event) => setSenha(event.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default LoginComponent

