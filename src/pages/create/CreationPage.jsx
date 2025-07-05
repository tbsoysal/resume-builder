import React from 'react';
import './CreationPage.module.scss';

function CreationPage() {
  return (
    <div className="createpage">
      <header>
        <a href=''>&lt; Anasayfa</a>
        <a href="">Kişisel Bilgiler</a>
        <select>
          <option value="cvtemplate01">Şablon 01</option>
          <option value="cvtemplate02">Şablon 02</option>
          <option value="cvtemplate03">Şablon 03</option>
          <option value="cvtemplate04">Şablon 04</option>
          <option value="cvtemplate05">Şablon 05</option>
        </select>
        <a href="">İndir</a>
      </header>
      <main>
        <div className='edit-container'>
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
        <div className="preview-container">

        </div>
      </main>
    </div>
  )
}

export default CreationPage
