import React from 'react';
import Cvtemplate01 from '@/components/templates/template01/Cvtemplate01';
import { Link } from "react-router-dom";
import styles from './CreationPage.module.scss';
import buttonStyles from '@/components/common/Button.module.scss';

function CreationPage() {
  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <Link className={styles.backButton} to="/">&lt; Anasayfa</Link>
        <select>
          <option value="cvtemplate01">Şablon 01</option>
          <option value="cvtemplate02">Şablon 02</option>
          <option value="cvtemplate03">Şablon 03</option>
          <option value="cvtemplate04">Şablon 04</option>
          <option value="cvtemplate05">Şablon 05</option>
        </select>
        <a className={`${buttonStyles.button} ${buttonStyles.primaryButton}`}>İndir</a>
      </header>
      <main>
        <div className={styles.editor}>
          <h3>Bilgilerinizi Giriniz</h3>
          <label for="nameinput">Ad ve Soyad</label>
          <input id='nameinput' type="text" name="name" />
          <label for="proficiency-input">Meslek</label>
          <input id='proficiency-input' type="text" name="proficiency" />
          <label for="emailinput">E-mail</label>
          <input id='emailinput' type="email" name="email" />
          <label for="phoneinput">Telefon</label>
          <input id='phoneinput' type="number" name="number" />
          <label for="locationinput">Konum</label>
          <input id='locationinput' type="text" name="location" />
        </div>
        <div className={styles.preview}>
          <Cvtemplate01 data={{ name: 'Tahaberk Soysal', proficiency: 'Front-end Developer', contact: 'berksysl.g@gmail.com' }} />
        </div>
      </main>
    </div>
  )
}

export default CreationPage
