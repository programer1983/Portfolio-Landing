

const Branding = () => {

  const data = [ 
      {
        id: "01",
        heading: "Digital Branding",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum."
      },
      {
        id: "02",
        heading: "Tean Management",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum."
      },
      {
        id: "03",
        heading: "Creative Mind",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum."
      }
  ]


  return (
   <>
     <section className="branding">
         <div className="container grid">
             {data.map((value) => {
                 return (
                    <div className="box flex">
                        <div className="text">
                            <h1>{value.id}</h1>
                        </div>
                        <div className="para">
                            <h2>{value.heading}</h2>
                            <p>{value.desc}</p>
                        </div>
                    </div>
                 )
             })}
         </div>
    </section>
   </>
  )
}

export default Branding