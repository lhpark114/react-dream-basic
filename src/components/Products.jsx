import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);


  // 무한 루프에 빠지므로 생략해줌 //
  // useEffect(() => {
  //   fetch('data/products.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
  //       setProducts(data);
  //     });
  //   return () => {
  //     console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
  //   };
  // }, []);


  // 위의 fetch 대신 useEffect사용
    useEffect(() => {
      fetch('data/products.json')
      .then(res => res.json())
      .then(data => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
      return () => {
        console.log('🧹깨끗하게 청소하는 일들을 합니다.')
      }
    }, []);
  
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
