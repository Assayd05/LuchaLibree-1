import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase/credentials';
import styles from './DesingDetalles.module.css';

const DetallesPerfil = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [formValues, setFormValues] = useState({
    nombre: '',
    correo: '',
    numero: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
          setFormValues(docSnap.data()); 
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, 'users', user.uid);
      await updateDoc(docRef, formValues);
      console.log('Datos actualizados exitosamente');
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };

  if (!user) {
    return <p>No estás autenticado</p>;
  }

  return (
    <div className={styles.container}>
      <h2>Detalles Del Perfil</h2>
      {userData && (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" value={formValues.nombre} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="correo">Correo:</label>
              <input type="email" id="correo" name="correo" value={formValues.correo} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="numero">Número de Teléfono:</label>
              <input type="tel" id="numero" name="numero" value={formValues.numero} onChange={handleChange} />
            </div>
          </form>
          <form>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" value="********" readOnly />
            </div>
            <button type="submit">Actualizar Datos</button>
          </form>
        </>
      )}
    </div>
  );
};

export default DetallesPerfil;
