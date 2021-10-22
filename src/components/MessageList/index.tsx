import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'
import { api } from '../../services/api'
import { useEffect } from 'react'
export function MessageList(){
    useEffect(()=>{
        api.get('messages/last3').then(response=>{
            console.log(response)
        })
    },[])
    return(
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021"/>
            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>asdasd asd asd asd asdasdasdasd asdasdasdasdasd asd asd asdasdasd</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/diego3g.png" alt="user"/>
                        </div>
                        <span>Isaque Lopes</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>asdasd asd asd asd asdasdasdasd asdasdasdasdasd asd asd asdasdasd</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/diego3g.png" alt="user"/>
                        </div>
                        <span>Isaque Lopes</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>asdasd asd asd asd asdasdasdasd asdasdasdasdasd asd asd asdasdasd</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/diego3g.png" alt="user"/>
                        </div>
                        <span>Isaque Lopes</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}