

const Scill = () => {
 
    const Progress = ({done, title}) => {
     return (
         <div className="progress">
             <div className="prograss-done" style={{opacity: 1, width: `${done}%`}}>
                <h4>{title}</h4>
                <h4>{done} %</h4>
             </div>
         </div>
     )
 }

 const data = [
     {
         title: "Every Day is a New Challenge",
         para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur.",
         para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur."
     }
 ]
  
 return (
    <>
     <section className="skill">
         <div className="container">
             <div className="heading">
                 <h3>WHY CHOOSE US</h3>
                 <h1>Some Of My Scills</h1>
             </div>
             <div className="content flex">
                 <div className="left topMarign">
                     <Progress title="HTML" done="70" />
                     <Progress title="CSS" done="80" />
                     <Progress title="JAVASCRIPT" done="90" />
                     <Progress title="REACT JS" done="70" />
                 </div>
                 <div className="right mtop">
                     {data.map((val) => {
                         return (
                             <>
                             <h1>{val.title}</h1>
                             <p>{val.para}</p>
                             <p>{val.para1}</p>
                             <button className="primary-btn">Hire Me</button>
                             </>
                         )
                     })}
                 </div>
             </div>
         </div>
     </section>
    </>
  )
}

export default Scill