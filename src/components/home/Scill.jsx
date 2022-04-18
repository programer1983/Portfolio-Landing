

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
             </div>
         </div>
     </section>
    </>
  )
}

export default Scill