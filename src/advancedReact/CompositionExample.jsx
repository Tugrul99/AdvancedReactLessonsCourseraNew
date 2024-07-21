import React from "react";

const CompositionExample = () => {
  // Bir Container bileşeni oluşturun ve içine h1 ve p elementleri geçirin. Container bileşeni bu elementleri render etmelidir.
  //   function Container({ children }) {
  //     return <div className="container">{children}</div>;
  //   }
  //   return (
  //     <Container>
  //       <h1>Merhaba</h1>
  //       <p>Evet</p>
  //     </Container>
  //   );
  // 2. soru Bir List bileşeni oluşturun ve React.Children.map kullanarak içine geçirilen span elementlerini li elementleri içinde render edin.
  //   function List({ children }) {
  //     return(
  //         <ul className="list">
  //         {React.Children.map(children, (child, index) => (
  //           <li key={index}>{child}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  //   return (
  //     <>
  //       <List>
  //         <span>1.item</span>
  //         <span>2.item</span>
  //         <span>3.item</span>
  //       </List>
  //     </>
  //   );
  //  3. soru. Bir Button bileşeni oluşturun. React.cloneElement kullanarak bu buton bileşenine dinamik olarak farklı onClick fonksiyonları ekleyin.

//   function Buton({ onClick, children, style }) {
//     return (
//       <button style={style} onClick={onClick}>
//         {children}
//       </button>
//     );
//   }

//   const handleClick = () => {
//     alert("Button has been touched.");
//   };

//   const newButton = React.cloneElement(
//     <Buton>Evet</Buton>,
//     { onClick: handleClick, style: { color: "red" } }
//   );

//   return <>{newButton}</>;
};

export default CompositionExample;
