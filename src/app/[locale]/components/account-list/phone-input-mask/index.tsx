import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [phone, setPhone] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    if (formattedPhone !== null) {
      const formattedValue = !formattedPhone[2] ? formattedPhone[1] : `(${formattedPhone[1]}) ${formattedPhone[2]}${formattedPhone[3] ? '-' + formattedPhone[3] : ''}`;
      setPhone(formattedValue);
    }
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const cleanedPhone = phone.replace(/\D/g, '');
    console.log(cleanedPhone); // Sadece hata ayıklama amacıyla
    e.preventDefault();
    // Burada formun işlemlerini yapabilirsiniz
  };

  return (
    
      <div className="form-floating mb-3">
          <input  type="text"
          id="phone"
          placeholder="(555) 555-5555"
          value={phone}
          onChange={handleInputChange}></input>
          <label htmlFor="floatingInput">Phone</label>
      </div>
  );
  
};

export default MyComponent;
